import React from 'react';
import PropTypes from 'prop-types';

const Globe = props => {
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 018.027 13H4.062a8.008 8.008 0 005.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.906 15.906 0 0013.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 01-1.683 6.667A8.008 8.008 0 0019.938 13zM4.062 11h3.965A17.9 17.9 0 019.71 4.333 8.008 8.008 0 004.062 11zm5.969 0h3.938A15.904 15.904 0 0012 4.248 15.906 15.906 0 0010.03 11h.001zm4.259-6.667A17.9 17.9 0 0115.973 11h3.965a8.008 8.008 0 00-5.648-6.667z"></path>
    </svg>
  );
};

Globe.propTypes = {
  color: PropTypes.string
};

Globe.defaultProps = {
  color: 'currentColor'
};

export default Globe;
