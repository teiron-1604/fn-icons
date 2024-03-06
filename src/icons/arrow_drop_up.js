import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropUp = props => {
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
      <path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"></path>
    </svg>
  );
};

ArrowDropUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDropUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDropUp;
