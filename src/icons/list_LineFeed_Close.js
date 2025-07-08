import React from 'react';
import PropTypes from 'prop-types';

const ListLineFeedClose = props => {
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
      <path d="M3.5 20V4h2v16h-2z"></path>
      <path d="M18.5 20V4h2v16h-2z"></path>
      <path d="M13.5 8v3H7v2h6.5v3l4-4-4-4z"></path>
    </svg>
  );
};

ListLineFeedClose.propTypes = {
  color: PropTypes.string
};

export default ListLineFeedClose;
