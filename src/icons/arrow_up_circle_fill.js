import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpCircleFill = props => {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm.707 6.043a1 1 0 00-1.338-.068l-.076.068-4.5 4.5a1 1 0 101.414 1.414L11 10.164v6.586a1 1 0 102 0v-6.586l2.793 2.793.076.068a1 1 0 001.406-1.406l-.068-.076-4.5-4.5z"></path>
    </svg>
  );
};

ArrowUpCircleFill.propTypes = {
  color: PropTypes.string
};

export default ArrowUpCircleFill;
