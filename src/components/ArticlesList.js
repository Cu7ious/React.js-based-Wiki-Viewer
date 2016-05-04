import React from 'react';

class ArticlesList extends React.Component {

  render () {
    return false;
    // <ul className="app-articles-list">
    //   {
    //     (this.state.data) ? this.state.data.map((el, idx) => {
    //         return (
    //           <li key={idx}>
    //             <a href={this._buildLink(el.title)} target="_blank">
    //               <h4>{el.title}</h4>
    //               <p dangerouslySetInnerHTML={{__html: el.snippet}}></p>
    //             </a>
    //           </li>
    //         )
    //       }) : null
    //   }
    // </ul>
  }

}

export default ArticlesList;
