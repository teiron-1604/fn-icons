import React from 'react';
import PropTypes from 'prop-types';

const CustomerServiceFill = props => {
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
      <path d="M22 17.002a6.001 6.001 0 01-4.713 5.86l-.638-1.914A4.004 4.004 0 0019.465 19H17a2 2 0 01-2-2v-4a2 2 0 012-2h2.938a8 8 0 00-15.876 0H7a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5.002z"></path>
    </svg>
  );
};

CustomerServiceFill.propTypes = {
  color: PropTypes.string
};

export default CustomerServiceFill;
