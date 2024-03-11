import React from 'react';
import PropTypes from 'prop-types';

const FolderMinus = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4 7h8v2H8v-2z"></path>
    </svg>
  );
};

FolderMinus.propTypes = {
  color: PropTypes.string
};

FolderMinus.defaultProps = {
  color: 'currentColor'
};

export default FolderMinus;
