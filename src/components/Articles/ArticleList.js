import React from 'react';
import Article from './Article';

export default ({articles}) => {
  return (
      <ul className="list-unstyled">
        {articles.length > 0
            ? articles.map(article => <Article key={article.id} {...article}/>)
            : 'There are no articles yet'
        }
      </ul>
  );
};