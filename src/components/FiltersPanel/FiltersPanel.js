import React, {useState} from 'react';

export default props => {
  const [search, setSearch] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [categories] = useState(['Sport', 'Movies', 'Music', 'All']);
  const [orderBy, setOrderBy] = useState('publishedAt');

  const searchChanged = (value) => {
    setSearch(value);
    props.searchChanged(value);
  };

  const currentCategoryChanged = (value) => {
    setCurrentCategory(value);
    props.currentCategoryChanged(value);
  };

  const orderByChanged = value => {
    setOrderBy(value);
    props.orderByChanged(value);
  };

  return (
      <div className="row">
        <div className="col-12 col-md-4 mb-1">
          <input type="text"
                 value={search}
                 onChange={e => searchChanged(e.target.value)}
                 placeholder="Search..."
                 className="form-control form-control-sm"
          />
        </div>
        <div className="col-12 col-md-4 mb-1">
          <select value={orderBy}
                  onChange={e => orderByChanged(e.target.value)}
                  className="form-control form-control-sm">
            <option value="publishedAt">Order by Published At</option>
            <option value="title">Order by Title</option>
            <option value="description">Order by Description</option>
          </select>
        </div>
        <div className="col-12 col-md-4 mb-1">
          <select value={currentCategory}
                  onChange={e => currentCategoryChanged(e.target.value)}
                  className="form-control form-control-sm"
          >
            {categories.map(i =>
                <option value={i} key={i}>{i}</option>
            )}
          </select>
        </div>
      </div>
  );
};