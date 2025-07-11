import React from 'react';
import PropTypes from 'prop-types';

const CheckCircleFill = props => {
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm4.207 9.207a1 1 0 00-1.414-1.414L10.5 13.086l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z"
      ></path>
    </svg>
  );
};

CheckCircleFill.propTypes = {
  color: PropTypes.string
};

export default CheckCircleFill;
