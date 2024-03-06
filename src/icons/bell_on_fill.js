import React from 'react';
import PropTypes from 'prop-types';

const BellOnFill = props => {
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
      <path d="M20 18.667l.4.533a.5.5 0 01-.4.8H4a.5.5 0 01-.4-.8l.4-.533V10a8 8 0 0116 0v8.667zM9.5 21h5a2.5 2.5 0 01-5 0z"></path>
    </svg>
  );
};

BellOnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BellOnFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BellOnFill;
