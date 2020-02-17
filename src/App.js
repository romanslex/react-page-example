import React, {useState} from 'react';
import Sidebar from './components/Sidebar/Slidebar';
import ArticleList from './components/Articles/ArticleList';
import articlesJson from './articles';
import FiltersPanel from './components/FiltersPanel/FiltersPanel';

export default () => {
  const [articles, setArticles] = useState(articlesJson);

  const searchChanged = (value) => {
    const showedArticles = articlesJson.filter(i => {
      return value === ''
          || ~i.title.toLowerCase().indexOf(value)
          || ~i.description.toLowerCase().indexOf(value)
    });
    setArticles(showedArticles);
  };

  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col">
          <Sidebar/>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col">
          <FiltersPanel searchChanged={searchChanged}/>
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
