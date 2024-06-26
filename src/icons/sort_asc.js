import React from 'react';
import PropTypes from 'prop-types';

const SortAsc = props => {
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
      <path d="M19 3l4 5h-3v12h-2V8h-3l4-5zm-5 15v2H3v-2h11zm0-7v2H3v-2h11zm-2-7v2H3V4h9z"></path>
    </svg>
  );
};

SortAsc.propTypes = {
  color: PropTypes.string
};

SortAsc.defaultProps = {
  color: 'currentColor'
};

export default SortAsc;
