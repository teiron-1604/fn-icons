import React from 'react';
import PropTypes from 'prop-types';

const Copyright = props => {
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
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c1.82 0 3.413.973 4.288 2.428l-1.714 1.029a3 3 0 10-.001 3.087l1.715 1.028A4.999 4.999 0 017 12c0-2.76 2.24-5 5-5z"></path>
    </svg>
  );
};

Copyright.propTypes = {
  color: PropTypes.string
};

export default Copyright;
