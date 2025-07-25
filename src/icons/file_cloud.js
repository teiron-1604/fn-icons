import React from 'react';
import PropTypes from 'prop-types';

const FileCloud = props => {
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
      <path d="M14.997 2L21 8l.001 4.26a5.471 5.471 0 00-2-1.053L19 9h-5V4H5v16h5.06a4.73 4.73 0 00.817 2H3.993a.993.993 0 01-.986-.876L3 21.008V2.992c0-.498.387-.927.885-.985L4.002 2h10.995zM17.5 13a3.5 3.5 0 013.5 3.5l-.001.103a2.75 2.75 0 01-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 01-.579-5.392L14 16.5a3.5 3.5 0 013.5-3.5zm0 2a1.5 1.5 0 00-1.473 1.215l-.02.14L16 16.5v1.62l-1.444.406a.75.75 0 00.08 1.466l.109.008h5.51a.75.75 0 00.19-1.474l-1.013-.283L19 18.12V16.5l-.007-.144A1.5 1.5 0 0017.5 15z"></path>
    </svg>
  );
};

FileCloud.propTypes = {
  color: PropTypes.string
};

export default FileCloud;
