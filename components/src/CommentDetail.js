import React from "react";

const CommnentDetail = props => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.image} />
      </a>
      <div className='content'>
        <a hred='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.message}</div>
      </div>
    </div>
  );
};

export default CommnentDetail;
