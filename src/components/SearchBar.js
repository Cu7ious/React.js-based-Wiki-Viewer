import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: props.query,
      data: null,
      term: null
    }
  }

  _createClearButton() {
    return this.state.query ? <button id="search" className="clear" onClick={this._clearSearchField.bind(this)}>&#x02A02;</button> : null;
  }

  _updateState(e) {
    this.setState({query: e.target.value});
  }

  _buildLink(q) {
    let url = 'https://en.wikipedia.org/wiki/';
    let term = q.split(' ').join('_');

    return url + term;
  }

  _makeQuery() {
    let query = this.state.query;
    query ? this._askWikipedia(query) : false;
  }

  _clearSearchField() {
    this.setState({query: ""});
  }

  _askWikipedia(q) {
    let $this = this;

    let url = 'https://en.wikipedia.org/w/' +
      'api.php?' +
      'format=json' +
      '&action=query' +
      '&list=search' +
      '&srsearch=' + encodeURIComponent(q) +
      '&prop=revisions' +
      '&rvprop=content' +
      '&callback=?parseResponse';

      let dataSrc = document.createElement('script');
      dataSrc.src = url;
      document.body.appendChild(dataSrc);

      window.parseResponse = function(data) {
        // console.log(data);

        $this.setState({
          data: data.query.search,
          term: q
        });

        // console.log($this.state.data);
      }
  }

  _onKeyPress(e) {
    return (e.keyCode == 13) ? this._makeQuery() : false;
  }

  render() {
    return(
      <div>
        <div className="app-searchBar">
          <div className="input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={this._updateState.bind(this)}
              onKeyUp={this._onKeyPress.bind(this)}
            />
          </div>
          { this._createClearButton() }
          <button className="search" id="search" onClick={this._makeQuery.bind(this)}>Search</button>

          <p className="random-link-wrapper">
            <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Get random article</a>
          </p>
        </div>
        <div className="app-articles-list-wrapper">
          <ul className="app-articles-list">
            {
              (this.state.data && this.state.query == this.state.term) ? this.state.data.map((el, idx) => {
                  return (
                    <li key={idx}>
                      <a href={this._buildLink(el.title)} target="_blank">
                        <h4>{el.title}</h4>
                        <p dangerouslySetInnerHTML={{__html: el.snippet}}></p>
                      </a>
                    </li>
                  )
                }) : null
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchBar;
