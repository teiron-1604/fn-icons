import React from 'react';
import PropTypes from 'prop-types';

const SkipBackFilled = props => {
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
      <path d="M7 12.333l10.223-6.815a.5.5 0 01.777.416v14.132a.5.5 0 01-.777.416L7 13.667V20a1 1 0 11-2 0V6a1 1 0 012 0v6.333z"></path>
    </svg>
  );
};

SkipBackFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SkipBackFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SkipBackFilled;
