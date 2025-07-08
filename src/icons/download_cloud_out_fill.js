import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudOutFill = props => {
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
      <path d="M12.999 13v5.585l1.828-1.828 1.415 1.415-4.243 4.242-4.243-4.242 1.415-1.415 1.828 1.828V13h2zm-1-11a7 7 0 016.954 6.194A5.5 5.5 0 0118 18.978L17.999 17a6 6 0 00-11.996-.225L5.999 17v1.978a5.5 5.5 0 01-.954-10.784A7 7 0 0111.999 2z"></path>
    </svg>
  );
};

DownloadCloudOutFill.propTypes = {
  color: PropTypes.string
};

export default DownloadCloudOutFill;
