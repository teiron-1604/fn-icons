import React from 'react';
import PropTypes from 'prop-types';

const Tv = props => {
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
      <path d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.996.996 0 012 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414L15.414 5zM4 7v12h16V7H4z"></path>
    </svg>
  );
};

Tv.propTypes = {
  color: PropTypes.string
};

export default Tv;
