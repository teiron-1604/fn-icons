import React from 'react';
import PropTypes from 'prop-types';

const HomeRemove = props => {
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
      <path d="M12 2.268c.222 0 .439.074.614.21l8 6.222a1 1 0 01.386.79V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.221c.175-.137.392-.211.614-.211zm-7 7.71V19h14V9.979l-7-5.445L5 9.98zM16 14H8v-2h8v2z"></path>
    </svg>
  );
};

HomeRemove.propTypes = {
  color: PropTypes.string
};

export default HomeRemove;
