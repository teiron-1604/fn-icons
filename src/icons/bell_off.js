import React from 'react';
import PropTypes from 'prop-types';

const BellOff = props => {
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
        d="M14.358 3.59a5 5 0 00-5.135.251 1 1 0 11-1.11-1.663A7 7 0 0119 8c0 2.482.708 4.255 1.538 5.493a1 1 0 01-1.662 1.114C17.832 13.05 17 10.89 17 8a5 5 0 00-2.642-4.41zM1.293 1.293a1 1 0 011.414 0l4.245 4.245a.993.993 0 01.025.024l15.73 15.73a1 1 0 01-1.414 1.415L16.586 18H4a2 2 0 01-1.458-3.37c.666-.686 1.242-1.288 1.683-2.22C4.665 11.478 5 10.144 5 8m9.586 8l-7.59-7.59c-.04 2.137-.4 3.663-.963 4.854C5.443 14.513 4.66 15.32 4 16h10.586zM5.149 6.563A7 7 0 005 8l.149-1.437zm0 0L1.293 2.707a1 1 0 010-1.414m8.475 18.84a1 1 0 011.366.367 1 1 0 001.732 0 1 1 0 011.732 1 3 3 0 01-5.196 0 1 1 0 01.366-1.366z"
      ></path>
    </svg>
  );
};

BellOff.propTypes = {
  color: PropTypes.string
};

export default BellOff;
