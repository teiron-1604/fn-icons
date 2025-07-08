import React from 'react';
import PropTypes from 'prop-types';

const Edit = props => {
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
        d="M17.876 4c-.298 0-.583.118-.794.329l-12.01 12.01a1.002 1.002 0 00-.254.428l-.583 1.996 1.997-.582c.161-.047.309-.134.428-.253L18.67 5.917A1.123 1.123 0 0017.876 4zm-2.208-1.085a3.123 3.123 0 114.416 4.416L8.074 19.34a3 3 0 01-1.282.76l-2.872.838a1.5 1.5 0 01-1.86-1.86l.838-2.872a3 3 0 01.759-1.281l12.01-12.011zM10.999 20a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

Edit.propTypes = {
  color: PropTypes.string
};

export default Edit;
