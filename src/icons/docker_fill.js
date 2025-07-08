import React from 'react';
import PropTypes from 'prop-types';

const DockerFill = props => {
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
      <path d="M12.446 2.313h-2.5v2.5h2.5v-2.5z"></path>
      <path d="M3.499 5.546h2.5v2.5h-2.5v-2.5z"></path>
      <path d="M.344 8.809h2.5v2.5h-2.5v-2.5z"></path>
      <path d="M5.999 8.809h-2.5v2.5h2.5v-2.5z"></path>
      <path d="M6.692 8.809h2.5v2.5h-2.5v-2.5z"></path>
      <path d="M12.446 8.809h-2.5v2.5h2.5v-2.5z"></path>
      <path d="M13.231 8.809h2.5v2.5h-2.5v-2.5z"></path>
      <path d="M6.692 5.546h2.5v2.5h-2.5v-2.5z"></path>
      <path d="M12.446 5.546h-2.5v2.5h2.5v-2.5z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.61 10.527c-.589-.396-2.135-.565-3.259-.263-.06-1.12-.638-2.063-1.694-2.886l-.39-.262-.261.393c-.512.778-.728 1.814-.652 2.756.06.58.262 1.232.652 1.705-1.206.7-2.333.692-6.03.667-.792-.005-1.7-.01-2.754-.01H.002c-.027 1.348.19 3.942 1.84 6.053.181.234.381.46.598.677 1.341 1.343 3.368 2.328 6.398 2.33 4.622.004 8.583-2.495 10.992-8.536l.103.002c.858.018 2.824.06 3.806-1.839.025-.033.261-.525.261-.525l-.39-.262zM6.706 16.513a1.066 1.066 0 11-2.132 0 1.066 1.066 0 012.132 0z"
      ></path>
    </svg>
  );
};

DockerFill.propTypes = {
  color: PropTypes.string
};

export default DockerFill;
