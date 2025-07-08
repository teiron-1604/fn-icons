import React from 'react';
import PropTypes from 'prop-types';

const ListClose = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18H2v2h9v-2zm0-7H2v2h9v-2zm11-7H2v2h20V4zm-2.951 11.55l3.25 3.25-1.3 1.3-3.25-3.25-3.25 3.25-1.3-1.3 3.25-3.25-3.25-3.25 1.3-1.3 3.25 3.25L21 11l1.3 1.3-3.25 3.25z"
      ></path>
    </svg>
  );
};

ListClose.propTypes = {
  color: PropTypes.string
};

export default ListClose;
