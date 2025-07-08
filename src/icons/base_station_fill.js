import React from 'react';
import PropTypes from 'prop-types';

const BaseStationFill = props => {
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
      <path d="M12.002 13l6 9h-12l6-9zm-1.06-2.44a1.5 1.5 0 112.044-2.194 1.5 1.5 0 01-2.044 2.194zM5.283 2.783l1.415 1.415a7.5 7.5 0 000 10.606L5.283 16.22a9.5 9.5 0 010-13.436zm13.436 0a9.5 9.5 0 010 13.436l-1.415-1.415a7.5 7.5 0 000-10.606l1.415-1.415zM8.112 5.611l1.414 1.414a3.5 3.5 0 000 4.95L8.112 13.39a5.5 5.5 0 010-7.778zm7.778 0a5.5 5.5 0 010 7.778l-1.414-1.414a3.5 3.5 0 000-4.95l1.414-1.414z"></path>
    </svg>
  );
};

BaseStationFill.propTypes = {
  color: PropTypes.string
};

export default BaseStationFill;
