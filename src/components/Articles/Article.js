import React from 'react';
import moment from 'moment';

export default ({imgSrc, title, description, publishedAt}) => {
  return (
      <li className="media mb-3" style={{minHeight: '80px'}}>
        <img src={imgSrc} className="mr-3" alt=""/>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{title}</h5>
          <div className="h6"><small>{moment(publishedAt).format('LLL')}</small></div>
          <div>{description}</div>
        </div>
      </li>
  );
};