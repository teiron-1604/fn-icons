import React from 'react';
import PropTypes from 'prop-types';

const PlayCircle = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zM10.622 8.415l4.879 3.252a.4.4 0 010 .666l-4.88 3.252a.4.4 0 01-.621-.332V8.747a.4.4 0 01.622-.332z"></path>
    </svg>
  );
};

PlayCircle.propTypes = {
  color: PropTypes.string
};

PlayCircle.defaultProps = {
  color: 'currentColor'
};

export default PlayCircle;
