import React, {useState} from 'react';

export default props => {
  const [search, setSearch] = useState('');

  const searchChanged = (value) => {
    setSearch(value);
    props.searchChanged(value);
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
          <select className="form-control form-control-sm">
            <option>Hi</option>
          </select>
        </div>
      </div>
  );
};