import React from 'react';
import PropTypes from 'prop-types';

const DatabaseFill = props => {
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
      <path d="M5.942 4.109C7.544 3.409 9.686 3 12 3c2.314 0 4.456.408 6.058 1.109.799.35 1.509.792 2.032 1.334.529.546.91 1.243.91 2.057 0 .814-.381 1.51-.91 2.057-.523.542-1.233.984-2.032 1.334C16.456 11.591 14.314 12 12 12c-2.314 0-4.456-.408-6.058-1.109-.799-.35-1.509-.792-2.032-1.334C3.38 9.011 3 8.314 3 7.5c0-.814.381-1.51.91-2.057.523-.542 1.233-.984 2.032-1.334z"></path>
      <path d="M20.24 10.806l-.672 4.911 2.456.336-4.99 5.988.673-4.911-2.455-.336 4.989-5.988z"></path>
      <path d="M14.964 21.75l.44-3.083c-1.05.215-2.2.333-3.404.333-4.97 0-9-2.015-9-4.5v3c0 2.485 4.03 4.5 9 4.5 1.039 0 2.036-.088 2.964-.25z"></path>
      <path d="M12 17c.452 0 .896-.017 1.33-.049l1.956-3.26c-1.018.2-2.127.309-3.286.309-4.97 0-9-2.015-9-4.5v3c0 2.485 4.03 4.5 9 4.5z"></path>
    </svg>
  );
};

DatabaseFill.propTypes = {
  color: PropTypes.string
};

export default DatabaseFill;
