import React from 'react';
import PropTypes from 'prop-types';

const HelpCircleFill = props => {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 15a1 1 0 000 2h.01l.102-.006a1 1 0 000-1.99L12.01 16H12zm.596-9.947a4 4 0 00-4.387 2.449l-.063.166a1 1 0 001.848.758l.04-.095a2.002 2.002 0 013.416-.624c.266.316.427.706.462 1.115l.008.176V10c0 .469-.365.958-1.055 1.418a6.05 6.05 0 01-1.247.628l-.014.005h-.002a1.001 1.001 0 00.536 1.925l.098-.028h.003l.004-.002c.003 0 .007-.002.01-.004l.035-.012.116-.043a8.037 8.037 0 001.57-.805c.76-.507 1.806-1.427 1.933-2.802l.013-.28a4.002 4.002 0 00-3.324-3.947z"></path>
    </svg>
  );
};

HelpCircleFill.propTypes = {
  color: PropTypes.string
};

export default HelpCircleFill;
