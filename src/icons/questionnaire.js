import React from 'react';
import PropTypes from 'prop-types';

const Questionnaire = props => {
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
      <path d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.5 3.5 0 1112 13h-1v-2h1a1.5 1.5 0 10-1.471-1.794l-1.962-.393z"></path>
    </svg>
  );
};

Questionnaire.propTypes = {
  color: PropTypes.string
};

export default Questionnaire;
