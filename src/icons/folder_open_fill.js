import React from 'react';
import PropTypes from 'prop-types';

const FolderOpenFill = props => {
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
        d="M21.08 9.2a3.077 3.077 0 00-.08-.03V8a3 3 0 00-3-3h-5.93a1 1 0 01-.835-.45l-.813-1.205A3 3 0 007.896 2H4a3 3 0 00-3 3v13a3 3 0 003 3h14.447a3 3 0 002.921-2.25l1.54-6c.216-.837-.6-1.55-1.463-1.55H9.236a1 1 0 00-.894.553l-1.447 2.894a1 1 0 11-1.79-.894l1.448-2.895A3 3 0 019.236 9.2h11.845zM7.897 2H7.9v1l-.01-1h.006z"
      ></path>
    </svg>
  );
};

FolderOpenFill.propTypes = {
  color: PropTypes.string
};

export default FolderOpenFill;
