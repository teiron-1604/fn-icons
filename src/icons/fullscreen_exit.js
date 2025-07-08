import React from 'react';
import PropTypes from 'prop-types';

const FullscreenExit = props => {
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
      <path d="M7 21v-3a1 1 0 00-.901-.995L6 17H3a1 1 0 110-2h3l.297.015A3 3 0 019 18v3a1 1 0 11-2 0zm8 0v-3a3 3 0 013-3h3a1 1 0 110 2h-3a1 1 0 00-1 1v3a1 1 0 11-2 0zM7 6V3a1 1 0 012 0v3l-.015.297a3 3 0 01-2.688 2.688L6 9H3a1 1 0 010-2h3l.099-.005a1 1 0 00.896-.896L7 6zm8 0V3a1 1 0 112 0v3l.005.099A1 1 0 0018 7h3a1 1 0 110 2h-3a3 3 0 01-2.985-2.703L15 6z"></path>
    </svg>
  );
};

FullscreenExit.propTypes = {
  color: PropTypes.string
};

export default FullscreenExit;
