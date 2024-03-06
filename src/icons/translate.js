import React from 'react';
import PropTypes from 'prop-types';

const Translate = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M5 15v2a2 2 0 001.85 1.995L7 19h3v2H7a4 4 0 01-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 014 4v2h-2V7a2 2 0 00-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"></path>
    </svg>
  );
};

Translate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Translate.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Translate;
