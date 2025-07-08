import React from 'react';
import PropTypes from 'prop-types';

const Balck = props => {
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
      <path d="M5.107 2.468l17.35 19.494v-.001h-3.283l-.208-.234h-1.203a29.411 29.411 0 01-.265-1.65l-1.624-1.824a20.11 20.11 0 00.504 3.474h-2.67a20.075 20.075 0 01-.461-3.833h2.308l-.5-.562H4.175l.28-2.028h7.186l.221-1.445h-6l.28-2.007h4.035L8.89 10.408H6.202l.37-2.607-4.748-5.333h3.283z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.615 4.506h3.552l-.543 3.893h-.22c-.18-.983-.322-2.208-.402-3.492H9.955c.023.485.052.96.09 1.42l4.753 5.34.175-1.26h6.101l1.117-7.929H7.327l-.097.684L9.454 5.66l.16-1.155zm6.181 0h3.513l-.542 3.893h-1.164a37.354 37.354 0 001.365-3.492h-2.047c-.462 1.285-.944 2.51-1.406 3.492h-.261l.542-3.893z"
      ></path>
      <path d="M18.262 11.85a1.929 1.929 0 00-.118.002h-3.18l1.786 2.007h3.503l.275-2.01h-2.266z"></path>
      <path d="M3.573 21.968l.402-2.81v-.001a4.248 4.248 0 001.324-1.264h2.79c-.782 1.585-2.067 3.332-4.516 4.075z"></path>
      <path d="M9.614 21.727c-.2-1.063-.402-2.368-.421-3.833h2.588c.04 1.505.281 2.83.502 3.833h-2.67z"></path>
      <path d="M21.532 15.305l-.276 2.027h-1.415l-1.804-2.027h3.495z"></path>
    </svg>
  );
};

Balck.propTypes = {
  color: PropTypes.string
};

export default Balck;
