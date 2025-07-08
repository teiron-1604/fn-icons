import React from 'react';
import PropTypes from 'prop-types';

const EyeOpen = props => {
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
        d="M12 6.001a9.75 9.75 0 00-9 6 9.75 9.75 0 0018 0 9.75 9.75 0 00-9-6zm-6.535-.015a11.75 11.75 0 0117.411 5.318 2 2 0 01-.013 1.426 11.75 11.75 0 01-21.738-.034 2 2 0 01.013-1.425 11.75 11.75 0 014.327-5.285zM12.001 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
      ></path>
    </svg>
  );
};

EyeOpen.propTypes = {
  color: PropTypes.string
};

export default EyeOpen;
