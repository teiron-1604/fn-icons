import React from 'react';
import PropTypes from 'prop-types';

const Location = props => {
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
      <path d="M12 20.9l4.95-4.95a7 7 0 10-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1112.728 0L12 23.728zM12 13a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z"></path>
    </svg>
  );
};

Location.propTypes = {
  color: PropTypes.string
};

Location.defaultProps = {
  color: 'currentColor'
};

export default Location;
