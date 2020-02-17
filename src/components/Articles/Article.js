import React from 'react';

export default ({imgSrc, title, description}) => {
  return (
      <li className="media mb-2" style={{minHeight: '80px'}}>
        <img src={imgSrc} className="mr-3" alt=""/>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{title}</h5>
          <p>{description}</p>
        </div>
      </li>
  );
};