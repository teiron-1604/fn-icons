import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneOffFill = props => {
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
      <path d="M1.293 1.793a1 1 0 011.338-.068l.076.068 19.5 19.5.068.076a1 1 0 01-1.406 1.406l-.076-.068-4.178-4.178A7.993 7.993 0 0113 19.938V22a1 1 0 01-2 0v-2.063A8.001 8.001 0 014 12v-2a1 1 0 012 0v2a6 6 0 009.174 5.088L13.7 15.615a3.986 3.986 0 01-4.53-.787A4 4 0 018 12V9.914L1.293 3.207l-.069-.076a1 1 0 01.069-1.338zM19 9a1 1 0 011 1v2c0 1.061-.212 2.1-.61 3.062l-1.578-1.578c.123-.48.188-.979.188-1.484v-2a1 1 0 011-1zm-7-8a4 4 0 014 4v6.672l-7.83-7.83A4 4 0 0112 1z"></path>
    </svg>
  );
};

MicrophoneOffFill.propTypes = {
  color: PropTypes.string
};

export default MicrophoneOffFill;
