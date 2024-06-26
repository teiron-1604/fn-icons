import React from 'react';
import PropTypes from 'prop-types';

const BellOff = props => {
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
      <path d="M18.586 20H4a.5.5 0 01-.4-.8l.4-.533V10c0-1.33.324-2.584.9-3.687L1.392 2.808l1.415-1.415 19.8 19.8-1.416 1.414L18.586 20zM6.408 7.822A5.985 5.985 0 006 10v8h10.586L6.408 7.822zM20 15.786l-2-2V10a6 6 0 00-8.99-5.203L7.56 3.345A8 8 0 0120 10v5.786zM9.5 21h5a2.5 2.5 0 11-5 0z"></path>
    </svg>
  );
};

BellOff.propTypes = {
  color: PropTypes.string
};

BellOff.defaultProps = {
  color: 'currentColor'
};

export default BellOff;
