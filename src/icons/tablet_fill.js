import React from 'react';
import PropTypes from 'prop-types';

const TabletFill = props => {
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
      <path d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm7 15a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

TabletFill.propTypes = {
  color: PropTypes.string
};

TabletFill.defaultProps = {
  color: 'currentColor'
};

export default TabletFill;
