import React from 'react';
import PropTypes from 'prop-types';

const BatteryCharge = props => {
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
      <path d="M8 19H3a1 1 0 01-1-1V6a1 1 0 011-1h6.625L8.458 7H4v10h4v2zm4.375 0l1.167-2H18V7h-4V5h5a1 1 0 011 1v12a1 1 0 01-1 1h-6.625zM21 9h2v6h-2V9zm-9 2h3l-5 8v-6H7l5-8v6z"></path>
    </svg>
  );
};

BatteryCharge.propTypes = {
  color: PropTypes.string
};

BatteryCharge.defaultProps = {
  color: 'currentColor'
};

export default BatteryCharge;
