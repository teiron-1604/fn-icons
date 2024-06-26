import React from 'react';
import PropTypes from 'prop-types';

const Hq = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_15053)">
        <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5v2.25zM16.25 15v1.5h-1.5V15H14a1 1 0 01-1-1v-4a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 01-1 1h-.75zm-1.75-4.5v3h2v-3h-2z"></path>
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

Hq.defaultProps = {
  color: 'currentColor'
};

export default Hq;
