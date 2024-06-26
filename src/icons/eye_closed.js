import React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = props => {
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
      <path d="M9.342 18.782l-1.931-.518.787-2.939a10.99 10.99 0 01-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 01-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 01-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.989 10.989 0 01-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.076 11.076 0 01-3.74 0l-.788 2.94z"></path>
    </svg>
  );
};

EyeClosed.propTypes = {
  color: PropTypes.string
};

EyeClosed.defaultProps = {
  color: 'currentColor'
};

export default EyeClosed;
