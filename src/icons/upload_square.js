import React from 'react';
import PropTypes from 'prop-types';

const UploadSquare = props => {
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
      <path d="M20 16.5h-2.882l-.723 1.447a1 1 0 01-.895.553h-7a1 1 0 01-.895-.553L6.882 16.5H4v3a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-3zM11 14V8.414L9.707 9.707a1 1 0 11-1.414-1.414l3-3 .076-.068a1 1 0 011.338.068l3 3 .068.076a1 1 0 01-1.406 1.406l-.076-.068L13 8.414V14a1 1 0 11-2 0zm9-9.5a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v10h3.5a1 1 0 01.895.553l.723 1.447h5.764l.723-1.447.072-.121a1 1 0 01.823-.432H20v-10zm2 15a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2h15A2.5 2.5 0 0122 4.5v15z"></path>
    </svg>
  );
};

UploadSquare.propTypes = {
  color: PropTypes.string
};

export default UploadSquare;
