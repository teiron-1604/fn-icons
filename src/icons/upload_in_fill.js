import React from 'react';
import PropTypes from 'prop-types';

const UploadInFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.003 2a.997.997 0 00-.71.293l-5 5a.997.997 0 00.015 1.43c.193.184.441.276.69.277H11v6a1 1 0 102 0V9h4a1.005 1.005 0 00.771-.363.999.999 0 00-.064-1.344l-5-5A.997.997 0 0012.003 2zM4 15a1 1 0 10-2 0v4a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 10-2 0v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"
      ></path>
    </svg>
  );
};

UploadInFill.propTypes = {
  color: PropTypes.string
};

export default UploadInFill;
