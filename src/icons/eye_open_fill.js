import React from 'react';
import PropTypes from 'prop-types';

const EyeOpenFill = props => {
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
      <path d="M12 4.001a11.752 11.752 0 0110.69 6.87l.173.4.013.034c.146.393.164.82.055 1.221l-.055.17-.013.034a11.752 11.752 0 01-10.427 7.261l-.435.009a11.753 11.753 0 01-10.69-6.871l-.173-.4-.013-.033a2 2 0 010-1.391l.013-.034A11.752 11.752 0 0112 4.002zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"></path>
    </svg>
  );
};

EyeOpenFill.propTypes = {
  color: PropTypes.string
};

export default EyeOpenFill;
