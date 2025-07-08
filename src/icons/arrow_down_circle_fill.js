import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownCircleFill = props => {
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
      <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-.707-6.043a1 1 0 001.338.068l.076-.068 4.5-4.5a1 1 0 10-1.414-1.414L13 13.836V7.25a1 1 0 10-2 0v6.586l-2.793-2.793-.076-.068a1 1 0 00-1.406 1.406l.068.076 4.5 4.5z"></path>
    </svg>
  );
};

ArrowDownCircleFill.propTypes = {
  color: PropTypes.string
};

export default ArrowDownCircleFill;
