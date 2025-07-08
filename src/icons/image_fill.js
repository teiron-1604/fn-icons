import React from 'react';
import PropTypes from 'prop-types';

const ImageFill = props => {
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
      <path d="M13.327 16.395l.08.065a1 1 0 001.338-1.472l-.072-.073-1.255-1.14 1.614-1.345L22 17.98V19a3 3 0 01-3 3H5a3 3 0 01-3-3v-1.636a.998.998 0 00.139-.095l6.328-5.246.025-.023 4.835 4.395zM19 2a3 3 0 013 3v10.424l-5.744-4.576-.024-.018-.141-.098a2 2 0 00-2.201.057l-.138.105-1.828 1.522-2.086-1.896a1.999 1.999 0 00-2.649-.036v-.002L2 14.786V5a3 3 0 013-3h14z"></path>
    </svg>
  );
};

ImageFill.propTypes = {
  color: PropTypes.string
};

export default ImageFill;
