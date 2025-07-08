import React from 'react';
import PropTypes from 'prop-types';

const ShieldCheckFill = props => {
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
      <path d="M12 .999c.452 0 .892.142 1.258.402l.151.12.009.006.314.265C15.338 3.087 17.428 4 19 4a2 2 0 012 2v7c0 2.764-.98 4.89-2.554 6.505-1.547 1.587-3.626 2.64-5.777 3.39l-.008.003a2 2 0 01-1.317-.013l-.018-.006-.005-.001v-.001c-2.149-.744-4.221-1.792-5.765-3.373-1.478-1.514-2.43-3.476-2.544-5.992L3 13V6a2.002 2.002 0 012-2l.321-.012c1.637-.12 3.733-1.126 5.261-2.46l.009-.007.151-.12C11.108 1.141 11.548 1 12 1zm3.707 8.294a1 1 0 00-1.338-.068l-.076.068L11 12.586l-1.293-1.293-.076-.068a1 1 0 00-1.406 1.406l.068.076 2 2 .076.068a1 1 0 001.338-.068l4-4 .068-.076a1 1 0 00-.068-1.338z"></path>
    </svg>
  );
};

ShieldCheckFill.propTypes = {
  color: PropTypes.string
};

export default ShieldCheckFill;
