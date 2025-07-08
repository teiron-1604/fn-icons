import React from 'react';
import PropTypes from 'prop-types';

const Swap2 = props => {
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
      <path d="M7.385 19.692L2 15.077l5.385-4.615v3.077h6.154v3.077H7.385v3.076zm9.23-15.384L22 8.923l-5.385 4.616v-3.077h-6.153V7.385h6.153V4.308z"></path>
    </svg>
  );
};

Swap2.propTypes = {
  color: PropTypes.string
};

export default Swap2;
