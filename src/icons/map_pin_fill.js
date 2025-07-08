import React from 'react';
import PropTypes from 'prop-types';

const MapPinFill = props => {
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
      <path d="M15.7 2.056c.222.097.425.235.597.407l5.042 5.048a1.925 1.925 0 01-.582 3.12l-1.787.792-3.353 3.356-.265 3.692a1.925 1.925 0 01-3.283 1.223l-3.255-3.259-5.547 5.573-1.365-1.359 5.55-5.576-3.367-3.37a1.925 1.925 0 011.219-3.281l3.797-.284 3.293-3.296.773-1.784A1.925 1.925 0 0115.7 2.056z"></path>
    </svg>
  );
};

MapPinFill.propTypes = {
  color: PropTypes.string
};

export default MapPinFill;
