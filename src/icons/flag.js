import React from 'react';
import PropTypes from 'prop-types';

const Flag = props => {
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
      <path d="M4 17v5H2V3h19.138a.5.5 0 01.435.748L18 10l3.573 6.252a.499.499 0 01-.435.748H4zM4 5v10h14.554l-2.858-5 2.858-5H4z"></path>
    </svg>
  );
};

Flag.propTypes = {
  color: PropTypes.string
};

export default Flag;
