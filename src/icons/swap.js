import React from 'react';
import PropTypes from 'prop-types';

const Swap = props => {
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
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm.5 4.5a1 1 0 112 0v6.586l1.793-1.793.076-.068a1 1 0 011.406 1.406l-.068.076-3.5 3.5A1 1 0 0112.5 16.5v-9zm-6.207 4.207a1 1 0 01-.068-1.338l.068-.076 3.5-3.5A1 1 0 0111.5 7.5v9a1 1 0 11-2 0V9.914l-1.793 1.793-.076.068a1 1 0 01-1.338-.068zM12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"></path>
    </svg>
  );
};

Swap.propTypes = {
  color: PropTypes.string
};

export default Swap;
