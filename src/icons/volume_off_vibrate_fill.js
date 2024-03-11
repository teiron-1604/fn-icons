import React from 'react';
import PropTypes from 'prop-types';

const VolumeOffVibrateFill = props => {
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
      <path d="M19.39 3.161l1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zM13 19.945a.501.501 0 01-.817.387L6.89 16 3 16a1 1 0 01-1-1V9a1 1 0 011-1l2.584-.002-3.776-3.776 1.414-1.414L13 12.586v7.36zM12.887 3.74a.5.5 0 01.113.316v5.702L9.282 6.04l2.901-2.372a.5.5 0 01.704.07v.001z"></path>
    </svg>
  );
};

VolumeOffVibrateFill.propTypes = {
  color: PropTypes.string
};

VolumeOffVibrateFill.defaultProps = {
  color: 'currentColor'
};

export default VolumeOffVibrateFill;
