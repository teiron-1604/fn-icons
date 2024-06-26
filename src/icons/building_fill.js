import React from 'react';
import PropTypes from 'prop-types';

const BuildingFill = props => {
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
      <path d="M12 19h2V6l6.394 2.74a1 1 0 01.606.92V19h2v2H1v-2h2V5.65a1 1 0 01.594-.914l7.703-3.424A.5.5 0 0112 1.77V19z"></path>
    </svg>
  );
};

BuildingFill.propTypes = {
  color: PropTypes.string
};

BuildingFill.defaultProps = {
  color: 'currentColor'
};

export default BuildingFill;
