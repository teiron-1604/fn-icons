import React from 'react';
import PropTypes from 'prop-types';

const EditFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 011.414 0l2.829 2.83a1 1 0 010 1.413L7.243 18zM3 20h18v2H3v-2z"></path>
    </svg>
  );
};

EditFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EditFill;
