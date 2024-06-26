import React from 'react';
import PropTypes from 'prop-types';

const DashCircle = props => {
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
      <path
        d="M12.4 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012.4 20zm-5-9h10v2h-10v-2z"
        opacity=".9"
      ></path>
    </svg>
  );
};

DashCircle.propTypes = {
  color: PropTypes.string
};

DashCircle.defaultProps = {
  color: 'currentColor'
};

export default DashCircle;
