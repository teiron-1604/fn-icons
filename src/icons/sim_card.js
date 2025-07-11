import React from 'react';
import PropTypes from 'prop-types';

const SimCard = props => {
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
      <path d="M6 4v16h12V7.828L14.172 4H6zM5 2h10l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm3 10h8v6H8v-6z"></path>
    </svg>
  );
};

SimCard.propTypes = {
  color: PropTypes.string
};

export default SimCard;
