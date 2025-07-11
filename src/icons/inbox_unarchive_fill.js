import React from 'react';
import PropTypes from 'prop-types';

const InboxUnarchiveFill = props => {
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
      <path d="M20 3l2 4v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.004L4 3h16zm-8 7l-4 4h3v4h2v-4h3l-4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"></path>
    </svg>
  );
};

InboxUnarchiveFill.propTypes = {
  color: PropTypes.string
};

export default InboxUnarchiveFill;
