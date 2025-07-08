import React from 'react';
import PropTypes from 'prop-types';

const DashCircleFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM8 11a1 1 0 100 2h8a1 1 0 100-2H8z"
        opacity=".9"
      ></path>
    </svg>
  );
};

DashCircleFill.propTypes = {
  color: PropTypes.string
};

export default DashCircleFill;
