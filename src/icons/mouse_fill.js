import React from 'react';
import PropTypes from 'prop-types';

const MouseFill = props => {
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
      <path d="M11.141 2h1.718c2.014 0 3.094.278 4.072.801a5.452 5.452 0 012.268 2.268c.523.978.801 2.058.801 4.072v5.718c0 2.014-.278 3.094-.801 4.072a5.452 5.452 0 01-2.268 2.268c-.978.523-2.058.801-4.072.801H11.14c-2.014 0-3.094-.278-4.072-.801A5.452 5.452 0 014.8 18.931c-.522-.978-.8-2.058-.8-4.072V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 017.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6v5h2V6h-2z"></path>
    </svg>
  );
};

MouseFill.propTypes = {
  color: PropTypes.string
};

export default MouseFill;
