import React from 'react';
import PropTypes from 'prop-types';

const ShareForwardBox = props => {
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
      <path d="M7.893 4.322a.982.982 0 010 1.964H3.964v13.75h15.714v-7.857a.982.982 0 111.964 0v8.839a.982.982 0 01-.982.982H2.982A.982.982 0 012 21.018V5.304a.982.982 0 01.982-.982h4.91zm10.754 1.964l-2.203-2.203a.982.982 0 111.389-1.389l4.55 4.55a.59.59 0 01-.416 1.006h-8.181a1.964 1.964 0 00-1.965 1.964v4.911a.982.982 0 01-1.964 0v-4.91a3.929 3.929 0 013.929-3.929h4.861z"></path>
    </svg>
  );
};

ShareForwardBox.propTypes = {
  color: PropTypes.string
};

export default ShareForwardBox;
