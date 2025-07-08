import React from 'react';
import PropTypes from 'prop-types';

const Shield = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.892 3.038C10.042 4.652 7.322 6 5 6v7c0 2.236.77 3.861 1.987 5.106 1.243 1.274 2.997 2.194 5.01 2.889l.022.008c2.005-.7 3.754-1.622 4.995-2.895C18.229 16.861 19 15.236 19 13V6c-2.32 0-5.032-1.338-6.892-2.962a.17.17 0 00-.216 0zM10.59 1.52a2.17 2.17 0 012.82 0l.008.007C15.058 2.961 17.323 4 19 4a2 2 0 012 2v7c0 2.764-.98 4.889-2.554 6.504-1.547 1.588-3.625 2.64-5.777 3.39l-.008.003a2 2 0 01-1.327-.015c-2.154-.745-4.231-1.794-5.778-3.378C3.979 17.889 3 15.764 3 13V6a2 2 0 012-2c1.676 0 3.952-1.049 5.582-2.473l.008-.007z"
      ></path>
    </svg>
  );
};

Shield.propTypes = {
  color: PropTypes.string
};

export default Shield;
