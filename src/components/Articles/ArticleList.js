import React from 'react';
import Article from './Article';

export default ({articles}) => {
  return (
      <ul className="list-unstyled">
        {articles.map(article =>
            <Article key={article.id} {...article}/>
        )}
      </ul>
  );
};