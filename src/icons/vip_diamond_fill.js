import React from 'react';
import PropTypes from 'prop-types';

const VipDiamondFill = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M19.126 3a1.001 1.001 0 01.81.412l3.823 5.256a.501.501 0 01-.038.633L12.366 21.6a.501.501 0 01-.567.12.5.5 0 01-.166-.12L.277 9.302a.5.5 0 01-.037-.633l3.823-5.256A1 1 0 014.872 3h14.254zm-7.937 12.479h1.627l4.917-5.666H15.27l-3.266 3.346L8.78 9.813H6.29l4.9 5.665z"></path>
    </svg>
  );
};

VipDiamondFill.propTypes = {
  color: PropTypes.string
};

export default VipDiamondFill;
