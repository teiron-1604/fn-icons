import React from 'react';
import PropTypes from 'prop-types';

const EmphasisCn = props => {
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
      <path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM13 2v2h6v2h-1.968a18.222 18.222 0 01-3.621 6.302 14.685 14.685 0 005.327 3.042l-.536 1.93A16.685 16.685 0 0112 13.726a16.697 16.697 0 01-6.202 3.547l-.536-1.929a14.7 14.7 0 005.327-3.042 18.077 18.077 0 01-2.822-4.3h2.24A16.027 16.027 0 0012 10.876 16.168 16.168 0 0014.91 6H5V4h6V2h2z"></path>
    </svg>
  );
};

EmphasisCn.propTypes = {
  color: PropTypes.string
};

EmphasisCn.defaultProps = {
  color: 'currentColor'
};

export default EmphasisCn;
