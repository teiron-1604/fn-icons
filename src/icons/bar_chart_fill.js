import React from 'react';
import PropTypes from 'prop-types';

const BarChartFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"></path>
    </svg>
  );
};

BarChartFill.propTypes = {
  color: PropTypes.string
};

BarChartFill.defaultProps = {
  color: 'currentColor'
};

export default BarChartFill;
