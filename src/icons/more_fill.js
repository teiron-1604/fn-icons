import React from 'react';
import PropTypes from 'prop-types';

const MoreFill = props => {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM7 11a1 1 0 100 2h.01l.102-.005a1 1 0 000-1.99L7.01 11H7zm5 0a1 1 0 100 2h.01l.102-.005a1 1 0 000-1.99L12.01 11H12zm5 0a1 1 0 100 2h.01l.102-.005a1 1 0 000-1.99L17.01 11H17z"></path>
    </svg>
  );
};

MoreFill.propTypes = {
  color: PropTypes.string
};

export default MoreFill;
