import React from 'react';
import PropTypes from 'prop-types';

const DraftFill = props => {
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
      <path d="M20 2a1 1 0 011 1v3.757l-8.999 9-.006 4.238 4.246.006L21 15.242V21a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM12 12H7v2h5v-2zm3-4H7v2h8V8z"></path>
    </svg>
  );
};

DraftFill.propTypes = {
  color: PropTypes.string
};

export default DraftFill;
