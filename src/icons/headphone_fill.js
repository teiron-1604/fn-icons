import React from 'react';
import PropTypes from 'prop-types';

const HeadphoneFill = props => {
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
      <path d="M4 12h3a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-5a2 2 0 012-2h3a8 8 0 00-16 0z"></path>
    </svg>
  );
};

HeadphoneFill.propTypes = {
  color: PropTypes.string
};

HeadphoneFill.defaultProps = {
  color: 'currentColor'
};

export default HeadphoneFill;
