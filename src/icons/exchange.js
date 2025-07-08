import React from 'react';
import PropTypes from 'prop-types';

const Exchange = props => {
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
      <path d="M12.004 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-7h9v2h-4v3l-5-5zm5-4v-3l5 5h-9v-2h4z"></path>
    </svg>
  );
};

Exchange.propTypes = {
  color: PropTypes.string
};

export default Exchange;
