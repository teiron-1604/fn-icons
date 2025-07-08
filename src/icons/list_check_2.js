import React from 'react';
import PropTypes from 'prop-types';

const ListCheck2 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18H2v2h9v-2zm0-7H2v2h9v-2zm11-7H2v2h20V4zm.5 10.621l-1.414-1.414-4.879 4.879-1.793-1.793L13 17.707l3.207 3.207 6.293-6.293z"
      ></path>
    </svg>
  );
};

ListCheck2.propTypes = {
  color: PropTypes.string
};

export default ListCheck2;
