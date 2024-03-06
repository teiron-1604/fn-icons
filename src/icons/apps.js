import React from 'react';
import PropTypes from 'prop-types';

const Apps = props => {
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
      <path d="M6.75 2.5A4.25 4.25 0 0111 6.75V11H6.75a4.25 4.25 0 010-8.5zM9 9V6.75A2.25 2.25 0 106.75 9H9zm-2.25 4H11v4.25A4.25 4.25 0 116.75 13zm0 2A2.25 2.25 0 109 17.25V15H6.75zm10.5-12.5a4.25 4.25 0 110 8.5H13V6.75a4.25 4.25 0 014.25-4.25zm0 6.5A2.25 2.25 0 1015 6.75V9h2.25zM13 13h4.25A4.25 4.25 0 1113 17.25V13zm2 2v2.25A2.25 2.25 0 1017.25 15H15z"></path>
    </svg>
  );
};

Apps.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Apps.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Apps;
