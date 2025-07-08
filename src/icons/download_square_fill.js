import React from 'react';
import PropTypes from 'prop-types';

const DownloadSquareFill = props => {
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
      <path d="M6.882 16.5l.723 1.447a1 1 0 00.895.553h7a1 1 0 00.895-.553l.723-1.447H22v3a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-3h4.882zM19.5 2A2.5 2.5 0 0122 4.5v10h-5.5a1 1 0 00-.823.432l-.072.12-.723 1.448H9.118l-.723-1.447A1 1 0 007.5 14.5H2v-10A2.5 2.5 0 014.5 2h15zM12 5a1 1 0 00-1 1v5.586l-1.293-1.293-.076-.068a1 1 0 00-1.406 1.406l.068.076 3 3a1 1 0 001.414 0l3-3a1 1 0 10-1.414-1.414L13 11.586V6a1 1 0 00-1-1z"></path>
    </svg>
  );
};

DownloadSquareFill.propTypes = {
  color: PropTypes.string
};

export default DownloadSquareFill;
