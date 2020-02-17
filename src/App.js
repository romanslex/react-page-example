import React, {useState} from 'react';
import Sidebar from './components/Sidebar/Slidebar';
import ArticleList from './components/Articles/ArticleList';
import articlesJson from './articles';

export default () => {
  const [articles, setArticles] = useState(articlesJson);

  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col">
          <Sidebar/>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col">
          <ArticleList articles={articles}/>
        </div>
      </div>
    </div>
  );
}
