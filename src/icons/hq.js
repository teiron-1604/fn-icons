import React from 'react';
import PropTypes from 'prop-types';

const Hq = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_15053)">
        <path d="M4.9 3H20a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h.9zM9 9.799V8.9a.9.9 0 111.8 0V11.6l2.4 2.4V9.2A1.2 1.2 0 0114.4 8H18a1.2 1.2 0 011.2 1.2V14a1.2 1.2 0 01-1.2 1.2h-.9v.9a.9.9 0 01-.9.9v-.001a.899.899 0 01-.895-.807L15.3 16.1v-.9h-.9a1.2 1.2 0 01-1.2-1.2v-.001l-2.4-2.4v2.7a.9.9 0 01-1.8.002V12.5H6.6v1.8a.9.9 0 11-1.8 0v-.001L3 12.5V18a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1H4.2L9 9.799zM4 5a1 1 0 00-1 1v6.5l1.8 1.799V8.9a.9.9 0 011.8 0v1.8H9V9.8L4.2 5H4zm11 8.4h2.4V9.8H15v3.6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15053">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hq.propTypes = {
  color: PropTypes.string
};

export default Hq;
