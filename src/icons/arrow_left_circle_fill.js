import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftCircleFill = props => {
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
      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm6.043-.707a1 1 0 00-.068 1.338l.068.076 4.5 4.5a1 1 0 101.414-1.414L10.164 13h6.586a1 1 0 100-2h-6.586l2.793-2.793.068-.076a1 1 0 00-1.406-1.406l-.076.068-4.5 4.5z"></path>
    </svg>
  );
};

ArrowLeftCircleFill.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftCircleFill;
