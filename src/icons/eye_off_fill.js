import React from 'react';
import PropTypes from 'prop-types';

const EyeOffFill = props => {
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
      <path d="M1.293 1.793a1 1 0 011.338-.068l.076.068 19.5 19.5.068.076a1 1 0 01-1.406 1.407l-.076-.069-3.817-3.817a11.744 11.744 0 01-4.54 1.101l-.435.01a11.755 11.755 0 01-10.69-6.872l-.173-.4-.013-.032a2 2 0 010-1.392l.013-.033a11.749 11.749 0 013.524-4.696l-3.37-3.369-.068-.076a1 1 0 01.069-1.338zM12 4.001a11.753 11.753 0 0110.688 6.87l.174.4.013.034c.145.393.164.82.055 1.222l-.055.17-.013.033a11.75 11.75 0 01-2.272 3.533l-4.608-4.608a4 4 0 00-3.64-3.64L8.78 4.452a11.752 11.752 0 013.22-.45zm-3.62 6.294A4 4 0 0012 16c.608 0 1.184-.14 1.701-.383l-1.62-1.62L12 14a2 2 0 01-2-2l.003-.083-1.622-1.622z"></path>
    </svg>
  );
};

EyeOffFill.propTypes = {
  color: PropTypes.string
};

export default EyeOffFill;
