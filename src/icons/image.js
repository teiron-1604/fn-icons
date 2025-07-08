import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
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
      <path d="M20 16.012l-4.952-3.57-.016-.012-1.614 1.344 1.255 1.141.072.073a1 1 0 01-1.339 1.472l-.079-.065L8.492 12l-3.828 3.402a.993.993 0 01-.664.251V19a1 1 0 001 1h14a1 1 0 001-1v-2.988zM20 5a1 1 0 00-1-1H5a1 1 0 00-1 1v8.317l3.164-2.812.148-.12a2 2 0 012.526.136l2.086 1.895 1.828-1.522.138-.105a2 2 0 012.327.03L20 13.544V5zm2 14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v14z"></path>
    </svg>
  );
};

Image.propTypes = {
  color: PropTypes.string
};

export default Image;
