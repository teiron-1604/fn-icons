import React from 'react';
import PropTypes from 'prop-types';

const DownloadFill = props => {
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
      <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z"></path>
    </svg>
  );
};

DownloadFill.propTypes = {
  color: PropTypes.string
};

DownloadFill.defaultProps = {
  color: 'currentColor'
};

export default DownloadFill;
