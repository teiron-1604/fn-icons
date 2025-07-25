import React from 'react';
import PropTypes from 'prop-types';

const StarSHalf = props => {
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
      <g clipPath="url(#clip0_18_14682)">
        <path d="M12.21 1.015c.14.02.277.059.406.116l.189.1.173.123c.108.091.204.197.284.314l.107.184 2.31 4.68.068.116a1.123 1.123 0 00.776.497l5.166.755h-.001c.211.031.413.106.593.22l.173.124.152.149c.095.105.175.224.237.351l.08.197.052.207a1.533 1.533 0 01-.439 1.362L18.8 14.149a1.123 1.123 0 00-.323.993l.88 5.135.023.213a1.53 1.53 0 01-2.248 1.404v-.001l-4.613-2.425a1.122 1.122 0 00-.386-.12l-.136-.008c-.181 0-.36.043-.521.127L6.86 21.894h.001a1.531 1.531 0 01-2.244-1.404l.022-.212.88-5.135.015-.135a1.122 1.122 0 00-.246-.758l-.092-.1-3.736-3.637.001-.001a1.529 1.529 0 01-.42-1.468L.998 9l.058-.008.014-.05.08-.199c.094-.192.227-.363.392-.5l.173-.127a1.53 1.53 0 01.388-.173l.209-.045 5.16-.753.134-.029a1.122 1.122 0 00.711-.585l2.309-4.678.001-.001.107-.184a1.53 1.53 0 01.457-.438l.188-.1a1.53 1.53 0 01.62-.13l.211.015zm5.178 19.609v-.005l-.002-.008.002.013zm.68-.499l.004.002-.006-.004.001.002zm-6.07-2.786l.189.006c.44.026.87.146 1.262.351l3.778 1.987-.722-4.204a3.125 3.125 0 01.9-2.763l3.053-2.975-4.224-.618h-.002a3.123 3.123 0 01-2.345-1.706h-.001l-1.888-3.823v13.745z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14682">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StarSHalf.propTypes = {
  color: PropTypes.string
};

export default StarSHalf;
