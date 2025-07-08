import React from 'react';
import PropTypes from 'prop-types';

const DoubleQuotesR = props => {
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
      <path d="M19.419 6.679c1.03 1.094 1.583 2.321 1.583 4.31 0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311-1.803-.167-3.225-1.648-3.225-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0c1.03 1.094 1.583 2.321 1.583 4.31 0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311C4.594 12.322 3.173 10.841 3.173 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179h-.001z"></path>
    </svg>
  );
};

DoubleQuotesR.propTypes = {
  color: PropTypes.string
};

export default DoubleQuotesR;
