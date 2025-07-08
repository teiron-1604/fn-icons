import React from 'react';
import PropTypes from 'prop-types';

const RadarFill = props => {
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
      <g clipPath="url(#clip0_18_13561)">
        <path d="M20.943 7.42a1 1 0 011.296.565 11.001 11.001 0 01-9.507 14.995A11 11 0 011.317 9.382a1 1 0 111.942.477 9.002 9.002 0 001.847 7.932 9.002 9.002 0 0015.272-9.076 1 1 0 01.565-1.296zM12.008 17a1 1 0 010 2h-.01a1 1 0 010-2h.01zm5.923-6.339a1 1 0 011.055.942 7 7 0 01-2.59 5.845 1 1 0 01-1.257-1.556 5.001 5.001 0 001.85-4.175 1 1 0 01.942-1.056zm-4.933 1.34a.995.995 0 00-.252-.663l-.045-.04c-.014-.014-.026-.03-.038-.044a1 1 0 10.335.746zm-8.99-7a1 1 0 010 2h-.01a1 1 0 010-2h.01zm10.99 7a3 3 0 11-1.71-2.707l1.467-1.466a5.001 5.001 0 00-7.189 6.506c.319.601.758 1.13 1.288 1.556a1 1 0 01-1.252 1.56 7 7 0 01-2.25-7.699 7 7 0 0110.836-3.356l1.425-1.425a8.998 8.998 0 00-10.124-.765 1 1 0 11-1.001-1.731 11 11 0 0112.96 1.435l.328.314.068.076a1 1 0 01-.069 1.338l-5.072 5.071c.187.392.295.83.295 1.292z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13561">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

RadarFill.propTypes = {
  color: PropTypes.string
};

export default RadarFill;
