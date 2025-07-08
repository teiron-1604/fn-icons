import React from 'react';
import PropTypes from 'prop-types';

const AdminFill = props => {
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
      <path d="M18.058 11.5a2.778 2.778 0 012.777 2.777v.784a1.888 1.888 0 011.778 1.883v2.667a1.89 1.89 0 01-1.888 1.889H15.39a1.889 1.889 0 01-1.889-1.889v-2.667c0-1.005.786-1.826 1.777-1.883v-.784a2.778 2.778 0 012.779-2.777zm-2.556 8h5.111v-2.444h-5.111V19.5zm2.556-6a.778.778 0 00-.779.777v.779h1.556v-.779l-.004-.076a.779.779 0 00-.773-.701z"></path>
      <path d="M12.003 13.687c.48 0 .965.032 1.447.094a5.48 5.48 0 00-1.447 3.719c0 1.107.328 2.137.891 3H4.132a1.002 1.002 0 01-.935-1.352c1.401-3.72 5.205-5.461 8.806-5.461z"></path>
      <path d="M12.005 2.25c1.15 0 2.104.645 2.733 1.51.63.868.988 2.017.988 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.756 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.224.359-2.372.988-3.24.629-.865 1.583-1.51 2.735-1.51z"></path>
    </svg>
  );
};

AdminFill.propTypes = {
  color: PropTypes.string
};

export default AdminFill;
