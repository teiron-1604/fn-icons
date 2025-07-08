import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2h18.002a2 2 0 011.48 3.34l-7.224 7.99A1.001 1.001 0 0015 14v7a2.002 2.002 0 01-1.91 1.998 2 2 0 01-.984-.209l-2-1A2 2 0 019 20v-6a1 1 0 00-.259-.67L1.515 5.34A2 2 0 013 2zm0 2l7.224 7.988A3 3 0 0111 13.999V20l2 1v-7c0-.743.276-1.46.775-2.012L20.997 4H3z"
      ></path>
    </svg>
  );
};

Filter.propTypes = {
  color: PropTypes.string
};

export default Filter;
