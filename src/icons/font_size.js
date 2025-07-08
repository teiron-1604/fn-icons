import React from 'react';
import PropTypes from 'prop-types';

const FontSize = props => {
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
      <path d="M11.248 15H4.756l-1.749 4.371a1 1 0 11-1.857-.742l5.48-13.7a1.477 1.477 0 012.743 0l5.48 13.7a1 1 0 11-1.857.742L11.248 15zm-.8-2L8.002 6.885 5.556 13h4.892zm10.554-.465c0-.296.24-.535.535-.535h.465a1 1 0 011 1v6a1 1 0 01-1 1h-.465a.535.535 0 01-.535-.535 4 4 0 110-6.93zm-2 5.465a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

FontSize.propTypes = {
  color: PropTypes.string
};

export default FontSize;
