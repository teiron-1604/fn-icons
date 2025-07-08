import React from 'react';
import PropTypes from 'prop-types';

const DeleteBack = props => {
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
      <path d="M6.536 3h14.465a1 1 0 011 1v16a1 1 0 01-1 1H6.536a1 1 0 01-.832-.445l-5.333-8a1 1 0 010-1.11l5.333-8A1 1 0 016.536 3zm.536 2l-4.667 7 4.667 7h12.93V5H7.071zm5.93 5.586l2.828-2.829 1.414 1.415L14.415 12l2.829 2.828-1.414 1.415L13 13.414l-2.828 2.829-1.414-1.415L11.587 12 8.76 9.172l1.414-1.415L13 10.586z"></path>
    </svg>
  );
};

DeleteBack.propTypes = {
  color: PropTypes.string
};

export default DeleteBack;
