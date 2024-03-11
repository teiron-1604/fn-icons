import React from 'react';
import PropTypes from 'prop-types';

const InformationLine = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
    </svg>
  );
};

InformationLine.propTypes = {
  color: PropTypes.string
};

InformationLine.defaultProps = {
  color: 'currentColor'
};

export default InformationLine;
