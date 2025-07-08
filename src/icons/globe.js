import React from 'react';
import PropTypes from 'prop-types';

const Globe = props => {
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
      <g clipPath="url(#clip0_18_14091)">
        <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM3.057 13a9.004 9.004 0 006.61 7.692A15.5 15.5 0 017.033 13H3.057zm13.91 0a15.5 15.5 0 01-2.635 7.692A9.004 9.004 0 0020.943 13h-3.976zm-7.93 0A13.5 13.5 0 0012 20.483 13.5 13.5 0 0014.963 13H9.037zm5.295-9.693A15.5 15.5 0 0116.967 11h3.976a9.005 9.005 0 00-6.611-7.693zM12 3.516A13.5 13.5 0 009.037 11h5.926A13.5 13.5 0 0012 3.516zm-2.333-.21A9.005 9.005 0 003.057 11h3.976a15.5 15.5 0 012.634-7.693z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14091">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Globe.propTypes = {
  color: PropTypes.string
};

export default Globe;
