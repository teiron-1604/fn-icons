import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = props => {
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
      <path d="M4 2h16a1 1 0 011 1v19.276a.5.5 0 01-.704.457L12 19.03l-8.296 3.702A.5.5 0 013 22.276V3a1 1 0 011-1zm15 17.965V4H5v15.965l7-3.124 7 3.124zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z"></path>
    </svg>
  );
};

Bookmark.propTypes = {
  color: PropTypes.string
};

export default Bookmark;
