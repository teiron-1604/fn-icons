import React from 'react';
import PropTypes from 'prop-types';

const DiscFill = props => {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm6 10a1 1 0 00-1 1c0 1.334-.514 2.498-1.31 3.304l-.163.156a1 1 0 001.267 1.545l.079-.066C18.185 15.747 19 13.977 19 12a1 1 0 00-1-1zm-6-2a3 3 0 100 6 3 3 0 000-6zM8.54 7.127a1 1 0 00-1.334-.132l-.08.065C5.817 8.252 5 10.023 5 12a1 1 0 002 0c0-1.423.585-2.653 1.473-3.46l.072-.073a1 1 0 00-.005-1.34z"></path>
    </svg>
  );
};

DiscFill.propTypes = {
  color: PropTypes.string
};

export default DiscFill;
