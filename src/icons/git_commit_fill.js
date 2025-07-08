import React from 'react';
import PropTypes from 'prop-types';

const GitCommitFill = props => {
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
      <path d="M15.874 13a4.002 4.002 0 01-7.748 0H3v-2h5.126a4.002 4.002 0 017.748 0H21v2h-5.126z"></path>
    </svg>
  );
};

GitCommitFill.propTypes = {
  color: PropTypes.string
};

export default GitCommitFill;
