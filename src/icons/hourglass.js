import React from 'react';
import PropTypes from 'prop-types';

const Hourglass = props => {
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
      <path d="M6 4H4V2h16v2h-2v2c0 1.615-.816 2.915-1.844 3.977-.703.726-1.558 1.395-2.425 2.023.867.628 1.722 1.297 2.425 2.023C17.184 15.085 18 16.385 18 18v2h2v2H4v-2h2v-2c0-1.615.816-2.915 1.844-3.977.703-.726 1.558-1.395 2.425-2.023-.867-.628-1.722-1.297-2.425-2.023C6.816 8.915 6 7.615 6 6V4zm2 0v2c0 .885.434 1.71 1.281 2.586.727.751 1.674 1.454 2.719 2.192 1.045-.738 1.992-1.441 2.719-2.192C15.566 7.71 16 6.885 16 6V4H8zm4 9.222c-1.045.738-1.992 1.441-2.719 2.192C8.434 16.29 8 17.115 8 18v2h8v-2c0-.885-.434-1.71-1.281-2.586-.727-.751-1.674-1.454-2.719-2.192z"></path>
    </svg>
  );
};

Hourglass.propTypes = {
  color: PropTypes.string
};

export default Hourglass;
