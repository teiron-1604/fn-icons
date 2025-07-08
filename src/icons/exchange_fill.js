import React from 'react';
import PropTypes from 'prop-types';

const ExchangeFill = props => {
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
      <path d="M12.004 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-13h-4v2h9l-5-5v3zm-5 4l5 5v-3h4v-2h-9z"></path>
    </svg>
  );
};

ExchangeFill.propTypes = {
  color: PropTypes.string
};

export default ExchangeFill;
