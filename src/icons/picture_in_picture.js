import React from 'react';
import PropTypes from 'prop-types';

const PictureInPicture = props => {
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
      <g clipPath="url(#clip0_18_15342)">
        <path d="M11.5 10a2.5 2.5 0 012.5 2.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 19.5v-7A2.5 2.5 0 014.5 10h7zM17 20a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM7.276 15.519a.5.5 0 00-.545-.059l-.07.045L4 17.499V19.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-.136c-.017-.01-.034-.018-.05-.029l-.083-.06-4.59-3.756zM21 16a1 1 0 110 2 1 1 0 010-2zM4.5 12a.5.5 0 00-.5.5V15l1.46-1.095.177-.12a2.5 2.5 0 012.906.186L12 16.799V12.5a.5.5 0 00-.5-.5h-7zM21 12a1 1 0 110 2 1 1 0 010-2zm.102-9.995A1 1 0 0122 3v6a1 1 0 11-2 0V5.414l-4.293 4.293a1 1 0 11-1.414-1.414L18.586 4H15a1 1 0 110-2h6l.102.005zM3 6a1 1 0 110 2 1 1 0 010-2zm0-4a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15342">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PictureInPicture.propTypes = {
  color: PropTypes.string
};

export default PictureInPicture;
