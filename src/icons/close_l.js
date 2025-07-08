import React from 'react';
import PropTypes from 'prop-types';

const CloseL = props => {
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
      <path d="M19.37 3.224a1 1 0 011.405 1.407l-.068.076L13.414 12l7.293 7.293.068.076a1 1 0 01-1.406 1.406l-.076-.068L12 13.414l-7.293 7.293a1 1 0 11-1.414-1.414L10.586 12 3.293 4.707l-.068-.076A1 1 0 014.63 3.224l.076.069L12 10.586l7.293-7.293.076-.069z"></path>
    </svg>
  );
};

CloseL.propTypes = {
  color: PropTypes.string
};

export default CloseL;
