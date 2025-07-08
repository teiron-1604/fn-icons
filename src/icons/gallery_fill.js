import React from 'react';
import PropTypes from 'prop-types';

const GalleryFill = props => {
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
      <path d="M21 5a1 1 0 011 1v13.5a2.5 2.5 0 01-2.5 2.5H6a1 1 0 110-2h13.5a.5.5 0 00.5-.5V6a1 1 0 011-1zm-4-3a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h13zM8.838 8.365a2 2 0 00-2.526-.135l-.148.12L4 10.273v2.675l3.492-3.103 4.835 4.395.08.065a1 1 0 001.338-1.472l-.072-.073-1.255-1.14 1.614-1.346L17 12.5V10l-1.768-1.325a2 2 0 00-2.342-.041l-.138.104-1.828 1.523-2.086-1.896z"></path>
    </svg>
  );
};

GalleryFill.propTypes = {
  color: PropTypes.string
};

export default GalleryFill;
