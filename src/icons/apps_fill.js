import React from 'react';
import PropTypes from 'prop-types';

const AppsFill = props => {
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
      <path d="M9.85 13.007A1.28 1.28 0 0111 14.28v3.22A4.5 4.5 0 116.5 13h3.22l.13.007zM17.5 13a4.5 4.5 0 11-4.5 4.5v-3.22c0-.707.573-1.28 1.28-1.28h3.22zM6.5 2A4.5 4.5 0 0111 6.5v3.22A1.28 1.28 0 019.72 11H6.5a4.5 4.5 0 010-9zm11 0a4.5 4.5 0 110 9h-3.22A1.28 1.28 0 0113 9.72V6.5A4.5 4.5 0 0117.5 2z"></path>
    </svg>
  );
};

AppsFill.propTypes = {
  color: PropTypes.string
};

export default AppsFill;
