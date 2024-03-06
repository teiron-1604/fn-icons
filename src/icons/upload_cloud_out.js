import React from 'react';
import PropTypes from 'prop-types';

const UploadCloudOut = props => {
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
      <path d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7 7 0 016.954 6.194 5.5 5.5 0 01-.953 10.784v-2.014a3.499 3.499 0 10-1.112-6.91 5 5 0 10-9.777 0 3.5 3.5 0 00-1.292 6.88l.18.03v2.014a5.5 5.5 0 01-.954-10.784A7 7 0 0112 2z"></path>
    </svg>
  );
};

UploadCloudOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UploadCloudOut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UploadCloudOut;
