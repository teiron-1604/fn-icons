import React from 'react';
import PropTypes from 'prop-types';

const Rocket = props => {
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
      <path d="M15.502 20A6.523 6.523 0 0112 23.502 6.523 6.523 0 018.498 20h2.26c.326.49.747.912 1.242 1.243.495-.33.916-.754 1.243-1.243h2.259zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM17.27 17L16 15.56V9c0-2.318-1.57-4.43-4-5.42C9.57 4.57 8 6.681 8 9v6.56L6.73 17h10.54zM12 11a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

Rocket.propTypes = {
  color: PropTypes.string
};

export default Rocket;
