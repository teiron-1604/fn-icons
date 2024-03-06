import React from 'react';
import PropTypes from 'prop-types';

const DashCircleFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M12.4 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-5-11v2h10v-2h-10z"
        opacity=".9"
      ></path>
    </svg>
  );
};

DashCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DashCircleFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DashCircleFill;
