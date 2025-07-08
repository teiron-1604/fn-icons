import React from 'react';
import PropTypes from 'prop-types';

const Radar2 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.953 3.726a8.325 8.325 0 108.2 6.872.837.837 0 111.649-.29c.1.567.151 1.15.151 1.743 0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10c.684 0 1.353.069 2 .2a.837.837 0 11-.334 1.641 8.367 8.367 0 00-1.666-.166zm0 4.072a4.253 4.253 0 104.253 4.253.837.837 0 111.675 0 5.928 5.928 0 11-5.928-5.927.837.837 0 010 1.674zm0 4.253l9.321-4.101a10.22 10.22 0 00-5.078-5.156l-4.243 9.257z"
      ></path>
    </svg>
  );
};

Radar2.propTypes = {
  color: PropTypes.string
};

export default Radar2;
