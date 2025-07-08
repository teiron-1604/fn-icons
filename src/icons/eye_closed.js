import React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.657 6.06a1 1 0 011.283.597 9.645 9.645 0 0018.12 0 1 1 0 111.88.686 11.645 11.645 0 01-3.242 4.745l1.067 1.268a1 1 0 01-1.53 1.288l-1.149-1.365c-.825.506-1.706.905-2.623 1.19l.514 2.314a1 1 0 11-1.953.434l-.515-2.32a11.643 11.643 0 01-3.017 0l-.516 2.32a1 1 0 11-1.952-.434l.514-2.314a11.645 11.645 0 01-2.624-1.19l-1.149 1.365a1 1 0 01-1.53-1.288l1.067-1.268a11.645 11.645 0 01-3.241-4.745 1 1 0 01.596-1.283z"
      ></path>
    </svg>
  );
};

EyeClosed.propTypes = {
  color: PropTypes.string
};

export default EyeClosed;
