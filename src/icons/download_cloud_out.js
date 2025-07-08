import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudOut = props => {
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
      <path d="M12.999 13v5.585l1.828-1.828 1.415 1.415-4.243 4.242-4.243-4.242 1.415-1.415 1.828 1.828V13h2zm-1-11a7 7 0 016.954 6.194A5.5 5.5 0 0118 18.978v-2.014a3.499 3.499 0 10-1.112-6.91 5 5 0 10-9.777 0 3.5 3.5 0 00-1.292 6.88l.18.03v2.014a5.5 5.5 0 01-.954-10.784A7 7 0 0111.999 2z"></path>
    </svg>
  );
};

DownloadCloudOut.propTypes = {
  color: PropTypes.string
};

export default DownloadCloudOut;
