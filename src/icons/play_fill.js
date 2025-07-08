import React from 'react';
import PropTypes from 'prop-types';

const PlayFill = props => {
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
      <path d="M5.52 2.122c.322-.175.713-.16 1.021.037l14 9a1 1 0 010 1.682l-14 9A1.001 1.001 0 015 21V3l.009-.136a1 1 0 01.512-.742z"></path>
    </svg>
  );
};

PlayFill.propTypes = {
  color: PropTypes.string
};

export default PlayFill;
