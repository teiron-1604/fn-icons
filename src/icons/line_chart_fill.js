import React from 'react';
import PropTypes from 'prop-types';

const LineChartFill = props => {
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
      <path d="M5 3v16h16v2H3V3h2zm14.94 2.94l2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z"></path>
    </svg>
  );
};

LineChartFill.propTypes = {
  color: PropTypes.string
};

LineChartFill.defaultProps = {
  color: 'currentColor'
};

export default LineChartFill;
