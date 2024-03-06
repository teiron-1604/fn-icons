import React from 'react';
import PropTypes from 'prop-types';

const Store = props => {
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
      <path d="M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 011 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 01.866-.5H18.79a1 1 0 01.866.5l2.702 4.682A4.496 4.496 0 0121 13.242zm-2 .73a4.498 4.498 0 01-3.75-1.36 4.497 4.497 0 01-6.5.002A4.495 4.495 0 015 13.973V20h14V13.972zM5.789 4L3.356 8.213a2.5 2.5 0 004.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 004.644 0c.335-.837 1.52-.837 1.856 0a2.501 2.501 0 104.457-2.232L18.21 4H5.789z"></path>
    </svg>
  );
};

Store.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Store.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Store;
