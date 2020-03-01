import React, {useState} from 'react';
import Slidebar from './components/Slidebar/Slidebar';
import ArticleList from './components/Articles/ArticleList';
import articlesJson from './articles';
import FiltersPanel from './components/FiltersPanel/FiltersPanel';
import _ from 'lodash';

const getFilteredArticles = (
    articles,
    orderBy,
    searchFilter,
    categoryFilter,
) => {
  return _.orderBy(articles
      .filter(i => {
        return searchFilter === ''
            || ~i.title.toLowerCase().indexOf(searchFilter.toLowerCase())
            || ~i.description.toLowerCase().indexOf(searchFilter.toLowerCase());
      })
      .filter(i => {
        return categoryFilter === 'All' || i.category.toLowerCase() ===
            categoryFilter.toLowerCase();
      }),
      [orderBy],
      ['desc']
  );
};

export default () => {
  const [articles] = useState(articlesJson);
  const [orderBy, setOrderBy] = useState('publishedAt');
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredArticles = getFilteredArticles(articles, orderBy, searchFilter, categoryFilter);

  return (
      <div className="container">
        <div className="row pt-3">
          <div className="col">
            <Slidebar/>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col">
            <FiltersPanel searchChanged={setSearchFilter}
                          currentCategoryChanged={setCategoryFilter}
                          orderByChanged={setOrderBy}
            />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col">
            <ArticleList articles={filteredArticles}/>
          </div>
        </div>
      </div>
  );
}
