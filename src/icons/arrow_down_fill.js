import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownFill = props => {
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
      <path d="M12.188 21.726a1 1 0 01-1.375 0l-9.5-9A1 1 0 012 11.001h5V3a1 1 0 011-1h7l.103.005A1 1 0 0116 3v8h5l.152.012a1 1 0 01.536 1.713l-9.5 9z"></path>
    </svg>
  );
};

ArrowDownFill.propTypes = {
  color: PropTypes.string
};

export default ArrowDownFill;
