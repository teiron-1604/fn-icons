import React from 'react';
import PropTypes from 'prop-types';

const BringForward = props => {
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
      <path d="M14 3a1 1 0 011 1v5h5a1 1 0 011 1v10a1 1 0 01-1 1H10a1 1 0 01-1-1v-5H4a1 1 0 01-1-1V4a1 1 0 011-1h10zm-1 2H5v8h8V5z"></path>
    </svg>
  );
};

BringForward.propTypes = {
  color: PropTypes.string
};

BringForward.defaultProps = {
  color: 'currentColor'
};

export default BringForward;
