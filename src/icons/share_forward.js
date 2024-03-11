import React from 'react';
import PropTypes from 'prop-types';

const ShareForward = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M13 14h-2a8.999 8.999 0 00-7.968 4.81C3.011 18.54 3 18.27 3 18 3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 00-6.057 2.773A10.987 10.987 0 0111 12z"></path>
    </svg>
  );
};

ShareForward.propTypes = {
  color: PropTypes.string
};

ShareForward.defaultProps = {
  color: 'currentColor'
};

export default ShareForward;
