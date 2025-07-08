import React from 'react';
import PropTypes from 'prop-types';

const EmphasisCn = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 2a1 1 0 011 1v1h5a1 1 0 110 2h-.968a18.222 18.222 0 01-3.621 6.302 14.683 14.683 0 004.417 2.719c.502.197.796.734.651 1.254-.151.546-.727.861-1.256.658A16.686 16.686 0 0112 13.726a16.695 16.695 0 01-5.223 3.206c-.53.203-1.105-.111-1.256-.657-.145-.52.149-1.057.65-1.254a14.701 14.701 0 004.418-2.719 18.074 18.074 0 01-2.068-2.861c-.38-.654.114-1.439.871-1.439.379 0 .725.209.918.535A16.034 16.034 0 0012 10.876 16.168 16.168 0 0014.91 6H6a1 1 0 010-2h5V3a1 1 0 011-1z"></path>
    </svg>
  );
};

EmphasisCn.propTypes = {
  color: PropTypes.string
};

export default EmphasisCn;
