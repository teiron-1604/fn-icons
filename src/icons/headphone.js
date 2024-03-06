import React from 'react';
import PropTypes from 'prop-types';

const Headphone = props => {
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
      <path d="M12 4a8 8 0 00-8 8h3a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-5a2 2 0 012-2h3a8 8 0 00-8-8zM4 14v5h3v-5H4zm13 0v5h3v-5h-3z"></path>
    </svg>
  );
};

Headphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Headphone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Headphone;
