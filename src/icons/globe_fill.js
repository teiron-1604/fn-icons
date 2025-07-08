import React from 'react';
import PropTypes from 'prop-types';

const GlobeFill = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_14095)">
        <path d="M7.023 13a21.3 21.3 0 002.761 9.517c.06.104.125.202.195.294-4.79-.89-8.488-4.88-8.932-9.811h5.976zm15.93 0c-.444 4.932-4.143 8.921-8.932 9.81.069-.091.135-.189.195-.293A21.301 21.301 0 0016.976 13h5.977zm-7.98 0a19.297 19.297 0 01-2.492 8.52c-.133.232-.321.311-.481.311-.16 0-.348-.079-.481-.31A19.298 19.298 0 019.026 13h5.948zM14.02 1.188c4.79.89 8.489 4.88 8.933 9.812h-5.976a21.3 21.3 0 00-2.761-9.517 2.815 2.815 0 00-.195-.295zm-4.041 0c-.07.093-.135.19-.195.295A21.3 21.3 0 007.024 11H1.046c.444-4.932 4.142-8.922 8.932-9.812zM12 2.17c.16 0 .348.079.481.31A19.297 19.297 0 0114.974 11H9.026a19.298 19.298 0 012.493-8.52c.133-.232.321-.311.481-.311z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14095">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

GlobeFill.propTypes = {
  color: PropTypes.string
};

export default GlobeFill;
