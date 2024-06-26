import React from 'react';
import PropTypes from 'prop-types';

const SettingFill = props => {
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
      <path d="M5.334 4.545a9.99 9.99 0 013.542-2.048A3.993 3.993 0 0012 4a3.993 3.993 0 003.124-1.502 9.989 9.989 0 013.542 2.048 3.995 3.995 0 001.47 4.758c.496.339 1.062.561 1.655.651.28 1.349.28 2.741 0 4.09a3.996 3.996 0 00-3.388 3.653 3.993 3.993 0 00.263 1.757 9.99 9.99 0 01-3.542 2.047 3.991 3.991 0 00-3.124-1.5 3.993 3.993 0 00-3.124 1.501 9.991 9.991 0 01-3.542-2.047A3.993 3.993 0 005.072 16a3.993 3.993 0 00-2.863-1.954c-.28-1.35-.28-2.742 0-4.09A3.993 3.993 0 005.072 8a3.993 3.993 0 00.262-3.454zM13.5 14.597a3.001 3.001 0 00-.716-5.508 3 3 0 10.716 5.508z"></path>
    </svg>
  );
};

SettingFill.propTypes = {
  color: PropTypes.string
};

SettingFill.defaultProps = {
  color: 'currentColor'
};

export default SettingFill;
