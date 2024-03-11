import React from 'react';
import PropTypes from 'prop-types';

const Phone = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M9.366 10.682a10.555 10.555 0 003.952 3.952l.884-1.238a1 1 0 011.294-.296 11.422 11.422 0 004.583 1.364 1 1 0 01.921.997v4.462a1 1 0 01-.898.995A15.51 15.51 0 0118.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 014.077 3h4.462a1 1 0 01.997.921A11.422 11.422 0 0010.9 8.504a1 1 0 01-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 017.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.413 13.413 0 01-3.668-1.097l-1.357 1.9a12.445 12.445 0 01-1.588-.75l-.058-.033a12.556 12.556 0 01-4.702-4.702l-.033-.058a12.444 12.444 0 01-.75-1.588z"></path>
    </svg>
  );
};

Phone.propTypes = {
  color: PropTypes.string
};

Phone.defaultProps = {
  color: 'currentColor'
};

export default Phone;
