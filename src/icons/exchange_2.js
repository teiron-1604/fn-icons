import React from 'react';
import PropTypes from 'prop-types';

const Exchange2 = props => {
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
      <path d="M5 14h14v2h-9v3l-5-5zm9-6V5l5 5H5V8h9z"></path>
    </svg>
  );
};

Exchange2.propTypes = {
  color: PropTypes.string
};

export default Exchange2;
