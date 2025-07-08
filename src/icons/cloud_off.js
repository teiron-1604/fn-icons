import React from 'react';
import PropTypes from 'prop-types';

const CloudOff = props => {
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
      <g clipPath="url(#clip0_18_15800)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.707 1.293a1 1 0 00-1.414 1.414l3.606 3.606a7.966 7.966 0 00-.861 4.468A6 6 0 007 22h10c1.036 0 2.01-.263 2.861-.725l1.432 1.432a1 1 0 001.414-1.414l-1.262-1.262.014-.016-1.417-1.418-.014.017L7.475 6.06l.014-.016-1.417-1.416-.014.016-3.35-3.351zm3.7 6.529a6.034 6.034 0 00-.294 3.345l.16.812-.767.31A4.002 4.002 0 007 20h10a4 4 0 001.35-.235L6.409 7.822zm9.018 2.388c-.236.065-.302.358-.128.531l.894.895c.245.244.587.355.933.366a4.011 4.011 0 012.477.96 4 4 0 011.396 3.195.602.602 0 00.169.453l1.138 1.138c.153.153.412.095.47-.113a5.989 5.989 0 00.223-1.823 5.972 5.972 0 00-2.096-4.37 6.157 6.157 0 00-.939-.66 8 8 0 00-11.035-8.17c-.617.256-.709 1.05-.236 1.524.322.321.811.388 1.238.231a6 6 0 018.07 5.717 6 6 0 00-2.574.126z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15800">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudOff.propTypes = {
  color: PropTypes.string
};

export default CloudOff;
