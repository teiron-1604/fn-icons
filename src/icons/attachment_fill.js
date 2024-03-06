import React from 'react';
import PropTypes from 'prop-types';

const AttachmentFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M20.997 2.992L21 21.008a1 1 0 01-.993.992H3.993A.993.993 0 013 21.008V2.992A1 1 0 013.993 2h16.01c.549 0 .994.444.994.992zM9 13V9a1 1 0 012 0v4a1 1 0 002 0V9a3 3 0 00-6 0v4a5 5 0 1010 0V8h-2v5a3 3 0 01-6 0z"></path>
    </svg>
  );
};

AttachmentFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AttachmentFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AttachmentFill;
