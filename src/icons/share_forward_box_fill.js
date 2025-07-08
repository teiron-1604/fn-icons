import React from 'react';
import PropTypes from 'prop-types';

const ShareForwardBoxFill = props => {
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
      <path d="M8.08 4.503a.982.982 0 010 1.965H4.152v13.75h15.714V12.36a.982.982 0 111.964 0v8.84a.982.982 0 01-.982.982H3.17a.982.982 0 01-.982-.982V5.486a.982.982 0 01.982-.983h4.91zm10.754 1.965l-2.202-2.203a.982.982 0 111.388-1.389l4.55 4.55a.59.59 0 01-.416 1.006h-8.181a1.964 1.964 0 00-1.964 1.964v4.91a.982.982 0 01-1.965 0v-4.91a3.929 3.929 0 013.929-3.928h4.861z"></path>
    </svg>
  );
};

ShareForwardBoxFill.propTypes = {
  color: PropTypes.string
};

export default ShareForwardBoxFill;
