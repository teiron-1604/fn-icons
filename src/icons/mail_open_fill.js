import React from 'react';
import PropTypes from 'prop-types';

const MailOpenFill = props => {
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
      <path d="M2.243 6.854L11.49 1.31a1 1 0 011.029 0l9.238 5.545a.5.5 0 01.243.429V20a1 1 0 01-1 1H3a1 1 0 01-1-1V7.283a.5.5 0 01.243-.429zm16.103 1.39l-6.285 5.439-6.414-5.445-1.294 1.524 7.72 6.555 7.581-6.56-1.308-1.513z"></path>
    </svg>
  );
};

MailOpenFill.propTypes = {
  color: PropTypes.string
};

export default MailOpenFill;
