import React from 'react';
import PropTypes from 'prop-types';

const BankCard = props => {
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
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-6 6h4v2h-4v-2z"></path>
    </svg>
  );
};

BankCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BankCard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BankCard;