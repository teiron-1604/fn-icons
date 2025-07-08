import React from 'react';
import PropTypes from 'prop-types';

const MirroringFill = props => {
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
      <path d="M20.554 18.832c-.642.427-1.386.798-2.201 1.104C16.554 20.612 14.355 21 12 21s-4.555-.388-6.353-1.064a10.896 10.896 0 01-2.2-1.104l1.107-1.664c.495.33 1.099.633 1.797.896C7.896 18.643 9.852 19 12 19s4.104-.356 5.65-.936a8.916 8.916 0 001.796-.896l1.108 1.664zM12 3c5.523 0 10 3.134 10 7s-4.477 7-10 7-10-3.134-10-7 4.477-7 10-7zm0 4c-.95 0-1.86.152-2.568.436C8.782 7.696 8 8.202 8 9s.782 1.305 1.432 1.565C10.14 10.848 11.05 11 12 11s1.86-.152 2.568-.435C15.218 10.305 16 9.798 16 9c0-.798-.782-1.305-1.432-1.564C13.86 7.152 12.95 7 12 7z"></path>
    </svg>
  );
};

MirroringFill.propTypes = {
  color: PropTypes.string
};

export default MirroringFill;
