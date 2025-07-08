import React from 'react';
import PropTypes from 'prop-types';

const CameraLens = props => {
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
      <g clipPath="url(#clip0_18_15830)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.926 8.019A8.963 8.963 0 003 12c0 1.052.18 2.062.512 3h4.446l-1.43-2.476a1.01 1.01 0 01-.027-.046l-2.575-4.46zM3.095 5.54A10.95 10.95 0 001 12a10.964 10.964 0 00.94 4.457A11.01 11.01 0 0012 23c3.596 0 6.789-1.725 8.796-4.393a.997.997 0 00.11-.149A10.95 10.95 0 0023 12a10.964 10.964 0 00-.94-4.458A11.01 11.01 0 0012 1C8.404 1 5.21 2.726 3.204 5.394a.994.994 0 00-.11.147zm2.063.612L7.38 10l1.44-2.493a.996.996 0 01.007-.012l2.584-4.476a8.98 8.98 0 00-6.253 3.134zm8.487-3.003L11.422 7h8.063a9.005 9.005 0 00-5.84-3.85zM20.488 9h-4.446l1.435 2.485.017.029 2.58 4.467c.593-1.2.926-2.552.926-3.981 0-1.052-.18-2.062-.512-3zm-1.646 8.847L16.62 14l-1.433 2.481a.855.855 0 01-.02.036l-2.579 4.464a8.98 8.98 0 006.254-3.134zm-8.487 3.003L12.578 17H4.516a9.004 9.004 0 005.839 3.85zM10.267 15h3.466l1.732-3-1.732-3h-3.466l-1.732 3 1.732 3z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15830">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CameraLens.propTypes = {
  color: PropTypes.string
};

export default CameraLens;
