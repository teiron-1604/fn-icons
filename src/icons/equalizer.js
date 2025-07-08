import React from 'react';
import PropTypes from 'prop-types';

const Equalizer = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5a2 2 0 100 4 2 2 0 000-4zM3 7a4 4 0 017.876-.992c.04-.005.082-.008.124-.008h9a1 1 0 110 2h-9c-.042 0-.083-.003-.124-.008A4.002 4.002 0 013 7zm14 8a2 2 0 100 4 2 2 0 000-4zm-3.874 1A4.002 4.002 0 0121 17a4 4 0 01-7.874 1H5a1 1 0 110-2h8.126z"
      ></path>
    </svg>
  );
};

Equalizer.propTypes = {
  color: PropTypes.string
};

export default Equalizer;
