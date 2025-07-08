import React from 'react';
import PropTypes from 'prop-types';

const AlarmFill = props => {
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
      <path d="M12 22a9 9 0 110-18 9 9 0 010 18zm1-9V8h-2v7h5v-2h-3zM1.745 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.746 6.282zm16.97-3.535l3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z"></path>
    </svg>
  );
};

AlarmFill.propTypes = {
  color: PropTypes.string
};

export default AlarmFill;
