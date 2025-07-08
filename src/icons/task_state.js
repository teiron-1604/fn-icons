import React from 'react';
import PropTypes from 'prop-types';

const TaskState = props => {
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
        opacity=".8"
        d="M2 12c0 5.523 4.477 10 10 10m10-10c0-5.523-4.477-10-10-10"
      ></path>
      <circle cx="12" cy="12" r="5"></circle>
    </svg>
  );
};

TaskState.propTypes = {
  color: PropTypes.string
};

export default TaskState;
