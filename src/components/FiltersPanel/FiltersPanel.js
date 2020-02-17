import React, {useState} from 'react';

export default props => {
  const [search, setSearch] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [categories] = useState(['Sport', 'Movies', 'Music', 'All']);

  const searchChanged = (value) => {
    setSearch(value);
    props.searchChanged(value);
  };

  const currentCategoryChanged = (value) => {
    setCurrentCategory(value);
    props.currentCategoryChanged(value);
  };

  return (
      <div className="row">
        <div className="col">
          <input type="text"
                 value={search}
                 onChange={e => searchChanged(e.target.value)}
                 placeholder="Search..."
                 className="form-control form-control-sm"
          />
        </div>
        <div className="col">
          <select>
            <option>Hi</option>
          </select>
        </div>
        <div className="col">
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