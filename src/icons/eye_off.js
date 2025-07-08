import React from 'react';
import PropTypes from 'prop-types';

const EyeOff = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.293 1.293a1 1 0 011.415 0l20 20a1 1 0 01-1.415 1.414l-3.977-3.978a11.75 11.75 0 01-16.191-6.033 2 2 0 01.013-1.425 11.75 11.75 0 013.805-4.915l-3.65-3.649a1 1 0 010-1.414zm5.08 6.495A9.75 9.75 0 003.002 12a9.75 9.75 0 0012.81 5.225l-1.779-1.78a3.999 3.999 0 01-5.477-5.477l-2.181-2.18zm3.696 3.694a2 2 0 002.45 2.45l-2.45-2.45zm6.867-4.141a9.744 9.744 0 00-6.084-1.272 1 1 0 11-.237-1.986 11.744 11.744 0 0112.26 7.22 2 2 0 01-.012 1.425c-.402.974-.933 1.89-1.578 2.722a1 1 0 01-1.58-1.226A9.747 9.747 0 0021 11.999a9.744 9.744 0 00-4.064-4.658z"
      ></path>
    </svg>
  );
};

EyeOff.propTypes = {
  color: PropTypes.string
};

export default EyeOff;
