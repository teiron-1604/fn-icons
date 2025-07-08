import React from 'react';
import PropTypes from 'prop-types';

const CollectFill = props => {
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
      <path d="M19 5a1 1 0 110 2H5a1 1 0 010-2h14zm-2-4a1 1 0 110 2H7a1 1 0 010-2h10zm5 19a3 3 0 01-3 3H5a3 3 0 01-3-3v-8a3 3 0 013-3h14a3 3 0 013 3v8z"></path>
    </svg>
  );
};

CollectFill.propTypes = {
  color: PropTypes.string
};

export default CollectFill;
