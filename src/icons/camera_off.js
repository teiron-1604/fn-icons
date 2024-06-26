import React from 'react';
import PropTypes from 'prop-types';

const CameraOff = props => {
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
      <path d="M19.586 21H3a1 1 0 01-1-1V6a1 1 0 011-1h.586L1.393 2.808l1.415-1.415 19.8 19.8-1.416 1.414L19.586 21zm-14-14H4v12h13.586l-2.18-2.18A5.5 5.5 0 017.68 9.094L5.586 7zm3.524 3.525a3.5 3.5 0 004.865 4.865L9.11 10.525zM22 17.785l-2-2V7h-3.828l-2-2H9.828l-.307.307-1.414-1.414L9 3h6l2 2h4a1 1 0 011 1v11.786zM11.263 7.05a5.5 5.5 0 016.188 6.188L15.113 10.9a3.515 3.515 0 00-1.512-1.512L11.263 7.05z"></path>
    </svg>
  );
};

CameraOff.propTypes = {
  color: PropTypes.string
};

CameraOff.defaultProps = {
  color: 'currentColor'
};

export default CameraOff;
