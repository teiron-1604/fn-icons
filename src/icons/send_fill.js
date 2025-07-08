import React from 'react';
import PropTypes from 'prop-types';

const SendFill = props => {
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
      <path d="M3 13h6v-2H3V1.846a.5.5 0 01.741-.438l18.462 10.154a.5.5 0 010 .876L3.741 22.592A.5.5 0 013 22.154V13z"></path>
    </svg>
  );
};

SendFill.propTypes = {
  color: PropTypes.string
};

export default SendFill;
