import React from 'react';
import PropTypes from 'prop-types';

const StickyNoteFill = props => {
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
      <path d="M15 14l-.117.007a1 1 0 00-.876.876L14 15v6H3.998A.996.996 0 013 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V14h-6zm6 2l-5 4.997V16h5z"></path>
    </svg>
  );
};

StickyNoteFill.propTypes = {
  color: PropTypes.string
};

export default StickyNoteFill;
