import React from 'react';
import PropTypes from 'prop-types';

const OrganizationChart = props => {
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
      <path d="M15 3a1 1 0 011 1v4a1 1 0 01-1 1h-2v2h4a1 1 0 011 1v3h2a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1v-4a1 1 0 011-1h2v-2H8v2h2a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1h2v-3a1 1 0 011-1h4V9H9a1 1 0 01-1-1V4a1 1 0 011-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"></path>
    </svg>
  );
};

OrganizationChart.propTypes = {
  color: PropTypes.string
};

export default OrganizationChart;
