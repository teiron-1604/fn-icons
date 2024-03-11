import React from 'react';
import PropTypes from 'prop-types';

const VolumeDown = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M13 7.22L9.603 10H6v4h3.603L13 16.78V7.22zM8.889 16H5a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L8.89 16h-.001zm9.974.591l-1.422-1.422A3.992 3.992 0 0019 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.99 5.99 0 0121 12c0 1.842-.83 3.49-2.137 4.591z"></path>
    </svg>
  );
};

VolumeDown.propTypes = {
  color: PropTypes.string
};

VolumeDown.defaultProps = {
  color: 'currentColor'
};

export default VolumeDown;
