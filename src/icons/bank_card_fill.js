import React from 'react';
import PropTypes from 'prop-types';

const BankCardFill = props => {
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
      <path d="M22 10v10a1 1 0 01-1 1H3a1 1 0 01-1-1V10h20zm0-2H2V4a1 1 0 011-1h18a1 1 0 011 1v4zm-7 8v2h4v-2h-4z"></path>
    </svg>
  );
};

BankCardFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BankCardFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BankCardFill;
