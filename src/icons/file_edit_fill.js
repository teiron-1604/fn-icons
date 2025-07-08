import React from 'react';
import PropTypes from 'prop-types';

const FileEditFill = props => {
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
      <g clipPath="url(#clip0_18_13049)">
        <path d="M15.099 1.005a1 1 0 01.608.288l5 5A1 1 0 0121 7v1.212a3.12 3.12 0 00-.969-.208L19.876 8c-.777 0-1.524.29-2.097.809l-.112.106-4.01 4.012c-.313.312-.55.688-.7 1.101l-.059.18-.838 2.87a1.501 1.501 0 001.86 1.86l2.871-.837a3 3 0 001.28-.758L21 14.416V20a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h9l.099.005zM8 17a1 1 0 000 2h1l.103-.005a1 1 0 000-1.99L9 17H8zm11.987-6.994a1.124 1.124 0 01.758 1.83l-.074.083-4.014 4.01a1 1 0 01-.426.252l-1.995.582.582-1.994.042-.119c.05-.114.122-.22.211-.31l4.01-4.01.082-.075c.2-.164.452-.255.713-.255l.111.006z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13049">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileEditFill.propTypes = {
  color: PropTypes.string
};

export default FileEditFill;
