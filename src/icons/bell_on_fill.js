import React from 'react';
import PropTypes from 'prop-types';

const BellOnFill = props => {
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
        d="M7.05 3.05A7 7 0 0119 8c0 2.145.335 3.479.775 4.41.44.932 1.016 1.534 1.682 2.22l.022.024A2 2 0 0119.999 18H4a2.002 2.002 0 01-1.973-2.323 2 2 0 01.517-1.047c.665-.686 1.24-1.288 1.68-2.22C4.664 11.478 5 10.144 5 8a7 7 0 012.05-4.95zm2.717 17.084a1 1 0 011.366.366 1 1 0 001.732 0 1 1 0 011.732 1 3 3 0 01-5.196 0 1 1 0 01.366-1.366z"
      ></path>
    </svg>
  );
};

BellOnFill.propTypes = {
  color: PropTypes.string
};

export default BellOnFill;
