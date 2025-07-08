import React from 'react';
import PropTypes from 'prop-types';

const SettingFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.292 2.402A3 3 0 0013.194 3.5l-.09.155a1 1 0 01-.865.5h-.499a1 1 0 01-.882-.528l-.082-.132a3 3 0 00-4.084-1.083l-.382.22a3 3 0 00-1.117 4.064l.068.136a1 1 0 00.03.056 1 1 0 01.004.993l-.253.439-.002.003a1 1 0 01-.868.504h-.017l-.168.003A3 3 0 001 11.828v.441a3 3 0 002.981 2.996l.155.005h.034a1 1 0 01.865.5l.247.43.001.002a1 1 0 010 1l-.089.154a3 3 0 001.098 4.098l.381.22a3 3 0 004.098-1.098l.09-.155a1 1 0 01.865-.499h.003l.495-.001h.001a1 1 0 01.882.529l.082.131a3 3 0 004.085 1.084l.391-.232a3 3 0 001.077-4.121l-.08-.128a.999.999 0 01.01-.99l.001-.004.25-.433.002-.004a1 1 0 01.868-.503h.017l.168-.003a3 3 0 002.987-2.999v-.44a3 3 0 00-2.98-2.997l-.156-.005a1 1 0 01-.899-.5l-.246-.43-.002-.002a1 1 0 010-.999l.09-.155a3 3 0 00-1.099-4.098l-.38-.22zM12 15a3 3 0 100-6 3 3 0 000 6z"
      ></path>
    </svg>
  );
};

SettingFill.propTypes = {
  color: PropTypes.string
};

export default SettingFill;
