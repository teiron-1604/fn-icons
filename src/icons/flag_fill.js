import React from 'react';
import PropTypes from 'prop-types';

const FlagFill = props => {
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
      <path d="M2 3h19.138a.5.5 0 01.435.748L18 10l3.573 6.252a.499.499 0 01-.435.748H4v5H2V3z"></path>
    </svg>
  );
};

FlagFill.propTypes = {
  color: PropTypes.string
};

export default FlagFill;
