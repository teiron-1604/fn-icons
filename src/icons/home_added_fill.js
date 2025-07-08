import React from 'react';
import PropTypes from 'prop-types';

const HomeAddedFill = props => {
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
      <path d="M12 2.268c.222 0 .439.074.614.21l8 6.222a1 1 0 01.386.79V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.221c.175-.137.392-.211.614-.211zm-1.248 11.8l-2.121-2.122-1.414 1.414 3.536 3.537 5.657-5.658-1.415-1.413-4.243 4.241z"></path>
    </svg>
  );
};

HomeAddedFill.propTypes = {
  color: PropTypes.string
};

export default HomeAddedFill;
