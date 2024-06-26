import React from 'react';
import PropTypes from 'prop-types';

const Trash = props => {
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
      <path d="M20 7v14a1 1 0 01-1 1H5a1 1 0 01-1-1V7H2V5h20v2h-2zM6 7v13h12V7H6zm1-5h10v2H7V2zm4 8h2v7h-2v-7z"></path>
    </svg>
  );
};

Trash.propTypes = {
  color: PropTypes.string
};

Trash.defaultProps = {
  color: 'currentColor'
};

export default Trash;
