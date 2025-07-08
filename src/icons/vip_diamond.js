import React from 'react';
import PropTypes from 'prop-types';

const VipDiamond = props => {
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
      <path d="M19.126 3a1.002 1.002 0 01.81.412l3.822 5.256a.5.5 0 01-.037.633L12.366 21.6a.501.501 0 01-.706.029c-.007-.006-3.8-4.116-11.383-12.33a.5.5 0 01-.037-.632l3.823-5.256A1 1 0 014.872 3h14.254zM2.582 8.85l9.417 10.2 9.417-10.2-2.8-3.85H5.382l-2.8 3.85zm6.2.963l3.22 3.346 3.267-3.346h2.464l-4.917 5.665H11.19l-4.9-5.665H8.78z"></path>
    </svg>
  );
};

VipDiamond.propTypes = {
  color: PropTypes.string
};

export default VipDiamond;
