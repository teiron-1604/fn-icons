import React from 'react';
import PropTypes from 'prop-types';

const VolumeUpFill = props => {
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
      <path d="M5.889 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L5.89 16h-.001zm13.517 4.134l-1.416-1.416A8.977 8.977 0 0021 12a8.983 8.983 0 00-3.304-6.968l1.42-1.42A10.977 10.977 0 0123 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.992 3.992 0 0016 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.99 5.99 0 0118 12c0 1.842-.83 3.49-2.137 4.591z"></path>
    </svg>
  );
};

VolumeUpFill.propTypes = {
  color: PropTypes.string
};

VolumeUpFill.defaultProps = {
  color: 'currentColor'
};

export default VolumeUpFill;
