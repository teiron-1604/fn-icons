import React from 'react';
import PropTypes from 'prop-types';

const RoadMapFill = props => {
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
      <path d="M16.95 11.95a6.996 6.996 0 001.858-6.582l2.495-1.07a.5.5 0 01.697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 01-.697-.46V7.001l3.129-1.342a6.993 6.993 0 001.921 6.29L12 16.9l4.95-4.95zm-1.414-1.414L12 14.07l-3.536-3.535a5 5 0 117.072 0v.001z"></path>
    </svg>
  );
};

RoadMapFill.propTypes = {
  color: PropTypes.string
};

export default RoadMapFill;
