import React from 'react';
import PropTypes from 'prop-types';

const SkipBackMini = props => {
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
      <path d="M7 6a1 1 0 011 1v10a1 1 0 11-2 0V7a1 1 0 011-1zm8 8.14V9.86L11.968 12 15 14.14zm-5.921-1.732a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.409v10.07a.5.5 0 01-.788.409l-7.133-5.036z"></path>
    </svg>
  );
};

SkipBackMini.propTypes = {
  color: PropTypes.string
};

SkipBackMini.defaultProps = {
  color: 'currentColor'
};

export default SkipBackMini;
