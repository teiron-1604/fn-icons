import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightCircle = props => {
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
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM7.25 11h6.586l-2.793-2.793a1 1 0 111.414-1.414l4.5 4.5.068.076a1 1 0 01-.068 1.338l-4.5 4.5-.076.068a1 1 0 01-1.406-1.406l.068-.076L13.836 13H7.25a1 1 0 110-2zM12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z"></path>
    </svg>
  );
};

ArrowRightCircle.propTypes = {
  color: PropTypes.string
};

export default ArrowRightCircle;
