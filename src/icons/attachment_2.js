import React from 'react';
import PropTypes from 'prop-types';

const Attachment2 = props => {
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
      <path d="M14.83 7.757l-5.657 5.657a1 1 0 101.414 1.414l5.657-5.656a3 3 0 00-4.243-4.243l-5.657 5.657a5 5 0 107.071 7.07L19.072 12l1.414 1.414-5.657 5.657A7.002 7.002 0 013.412 16.8a7 7 0 011.517-7.63l5.658-5.655a5 5 0 017.07 7.07l-5.656 5.659A3 3 0 017.758 12l5.657-5.657 1.414 1.414z"></path>
    </svg>
  );
};

Attachment2.propTypes = {
  color: PropTypes.string
};

export default Attachment2;
