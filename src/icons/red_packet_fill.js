import React from 'react';
import PropTypes from 'prop-types';

const RedPacketFill = props => {
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
      <path d="M21 5.937A11.985 11.985 0 0114.194 9.8a2.5 2.5 0 00-4.388 0A11.985 11.985 0 013 5.937V3a1 1 0 011-1h16a1 1 0 011 1v2.937zm0 2.787V21a1 1 0 01-1 1H4a1 1 0 01-1-1V8.724A13.944 13.944 0 009.63 11.8a2.5 2.5 0 004.74 0A13.944 13.944 0 0021 8.724z"></path>
    </svg>
  );
};

RedPacketFill.propTypes = {
  color: PropTypes.string
};

export default RedPacketFill;
