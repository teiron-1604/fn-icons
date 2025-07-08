import React from 'react';
import PropTypes from 'prop-types';

const DownloadSquare = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M20 16.5h-2.882l-.723 1.447a1 1 0 01-.895.553h-7a1 1 0 01-.895-.553L6.882 16.5H4v3a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-3zM11 6a1 1 0 112 0v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3-.068-.076a1 1 0 011.406-1.406l.076.068L11 11.586V6zm9-1.5a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v10h3.5a1 1 0 01.895.553l.723 1.447h5.764l.723-1.447.072-.121a1 1 0 01.823-.432H20v-10zm2 15a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2h15A2.5 2.5 0 0122 4.5v15z"></path>
    </svg>
  );
};

DownloadSquare.propTypes = {
  color: PropTypes.string
};

export default DownloadSquare;
