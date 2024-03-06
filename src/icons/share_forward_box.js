import React from 'react';
import PropTypes from 'prop-types';

const ShareForwardBox = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M9 3v2H4v14h16v-9h2v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h6zm9.95 2L16 2.05 17.414.636l5.34 5.34A.6.6 0 0122.33 7H14a2 2 0 00-2 2v6h-2V9a4 4 0 014-4h4.95z"></path>
    </svg>
  );
};

ShareForwardBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShareForwardBox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShareForwardBox;
