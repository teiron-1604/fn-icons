import React from 'react';
import PropTypes from 'prop-types';

const FilePpt = props => {
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
      <path d="M2.86 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.859 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99h.001zm1.141 1.858v14.53l10 1.43V3.305l-10 1.43zm13 14.265h3V5h-3V3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4v-2zm-12-11h8v6h-6v2h-2V8zm2 2v2h4v-2h-4z"></path>
    </svg>
  );
};

FilePpt.propTypes = {
  color: PropTypes.string
};

export default FilePpt;
