import React from 'react';
import PropTypes from 'prop-types';

const LineChart = props => {
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
      <path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"></path>
    </svg>
  );
};

LineChart.propTypes = {
  color: PropTypes.string
};

LineChart.defaultProps = {
  color: 'currentColor'
};

export default LineChart;
