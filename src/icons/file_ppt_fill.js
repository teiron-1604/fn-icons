import React from 'react';
import PropTypes from 'prop-types';

const FilePptFill = props => {
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
      <path d="M17.001 3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4V3zM2.86 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.859 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99h.001zM5.001 8v8h2v-2h6V8h-8zm2 2h4v2h-4v-2z"></path>
    </svg>
  );
};

FilePptFill.propTypes = {
  color: PropTypes.string
};

export default FilePptFill;
