import React from 'react';
import PropTypes from 'prop-types';

const Note = props => {
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
      <path d="M8 18a2 2 0 10-4 0 2 2 0 004 0zm12-2a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-2-3.464V4.18L10 5.847V18a4 4 0 11-2-3.464V5a1 1 0 01.836-.986l12-2A1 1 0 0122 3v13z"></path>
    </svg>
  );
};

Note.propTypes = {
  color: PropTypes.string
};

export default Note;
