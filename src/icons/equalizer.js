import React from 'react';
import PropTypes from 'prop-types';

const Equalizer = props => {
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
      <path d="M6.17 18.003a3.001 3.001 0 015.66 0H22v2H11.83a3.001 3.001 0 01-5.66 0H2v-2h4.17zm6-7a3 3 0 015.66 0H22v2h-4.17a3.001 3.001 0 01-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 015.66 0H22v2H11.83a3 3 0 01-5.66 0H2v-2h4.17zm2.83 2a1 1 0 100-2 1 1 0 000 2zm6 7a1 1 0 100-2 1 1 0 000 2zm-6 7a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

Equalizer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Equalizer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Equalizer;
