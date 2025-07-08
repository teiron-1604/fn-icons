import React from 'react';
import PropTypes from 'prop-types';

const ImageEditFill = props => {
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
      <g clipPath="url(#clip0_18_15231)">
        <path d="M13.327 16.395l.08.065a1 1 0 001.338-1.472l-.072-.073-1.255-1.14 1.614-1.345L22 17.98V19a3 3 0 01-3 3H5a3 3 0 01-3-3v-1.636c.048-.027.095-.058.139-.095l6.328-5.246.025-.023 4.835 4.395zM14 2c.412 0 .66.482.483.854a5 5 0 006.663 6.662c.373-.176.855.072.855.484v5.424l-5.744-4.576-.024-.018-.141-.098a2 2 0 00-2.201.057l-.138.105-1.828 1.522-2.086-1.896a2 2 0 00-2.649-.036v-.002L2 14.786V5a3 3 0 013-3h8.999zm6.294.293a1 1 0 111.414 1.414l-4 4a1 1 0 11-1.414-1.414l4-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15231">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ImageEditFill.propTypes = {
  color: PropTypes.string
};

export default ImageEditFill;
