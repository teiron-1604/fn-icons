import React from 'react';
import PropTypes from 'prop-types';

const SortDesc = props => {
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
      <path d="M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z"></path>
    </svg>
  );
};

SortDesc.propTypes = {
  color: PropTypes.string
};

SortDesc.defaultProps = {
  color: 'currentColor'
};

export default SortDesc;
