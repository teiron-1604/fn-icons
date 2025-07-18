import React from 'react';
import PropTypes from 'prop-types';

const MailAddFill = props => {
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
      <path d="M22 13.341A6 6 0 0014.341 21H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v9.341zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></path>
    </svg>
  );
};

MailAddFill.propTypes = {
  color: PropTypes.string
};

export default MailAddFill;
