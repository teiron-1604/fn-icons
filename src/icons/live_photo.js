import React from 'react';
import PropTypes from 'prop-types';

const LivePhoto = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .318l-.24.003a.682.682 0 10.03 1.363 9.523 9.523 0 01.42 0 .682.682 0 10.03-1.363L12 .318zm3.073.45a.682.682 0 10-.392 1.305c.134.04.267.083.398.13a.682.682 0 10.45-1.288c-.15-.052-.303-.102-.456-.148zM9.319 2.072A.682.682 0 008.927.767a10.6 10.6 0 00-.456.148.682.682 0 10.45 1.287c.132-.046.264-.089.398-.129zm8.765.146a.682.682 0 00-.777 1.12c.114.08.227.162.338.247a.682.682 0 10.827-1.085c-.127-.097-.257-.19-.388-.282zM6.694 3.34a.682.682 0 10-.778-1.12c-.131.091-.26.185-.388.282a.682.682 0 10.827 1.085c.111-.085.224-.167.339-.247zm13.805 1.19a.682.682 0 00-1.084.826c.084.111.166.224.246.339a.682.682 0 101.12-.778c-.091-.131-.185-.26-.282-.387zm-15.914.826a.682.682 0 00-1.084-.826c-.097.127-.19.256-.282.387a.682.682 0 101.12.778c.08-.115.162-.228.246-.339zm17.5 2.116a.682.682 0 10-1.287.45c.046.132.089.264.129.398a.682.682 0 001.306-.392 10.654 10.654 0 00-.148-.456zm-18.883.45a.682.682 0 00-1.287-.45c-.053.15-.102.303-.148.456a.682.682 0 001.306.392 9.24 9.24 0 01.13-.398zM22.68 10.76a.682.682 0 10-1.363.03 9.173 9.173 0 010 .42.682.682 0 001.363.03 10.667 10.667 0 000-.48zm-19.995.03a.682.682 0 10-1.363-.03 10.84 10.84 0 000 .48.682.682 0 001.363-.03 9.52 9.52 0 010-.42zm19.55 3.283a.682.682 0 00-1.307-.392c-.04.134-.083.267-.13.398a.682.682 0 001.288.45c.053-.15.102-.302.148-.456zm-19.16-.392a.682.682 0 00-1.307.392c.046.154.095.306.148.456a.682.682 0 001.287-.45 9.202 9.202 0 01-.129-.398zm17.707 3.403a.682.682 0 00-1.12-.777c-.08.114-.162.227-.246.338a.682.682 0 101.084.827c.097-.127.19-.256.282-.388zm-16.442-.777a.682.682 0 10-1.12.777c.091.132.185.26.282.388a.682.682 0 101.084-.827 9.362 9.362 0 01-.246-.338zm2.016 2.108a.682.682 0 00-.827 1.084c.127.097.257.19.388.282a.682.682 0 00.778-1.12 9.404 9.404 0 01-.339-.246zm12.117 1.084a.682.682 0 10-.827-1.084c-.111.084-.224.166-.338.246a.682.682 0 00.777 1.12c.131-.091.26-.185.388-.282zm-9.55.299a.682.682 0 00-.451 1.287c.15.053.303.102.456.148a.682.682 0 10.392-1.306 9.081 9.081 0 01-.398-.13zm6.607 1.287a.682.682 0 00-.45-1.287 9.082 9.082 0 01-.398.129.682.682 0 00.392 1.306c.153-.046.306-.095.456-.148zm-3.739-.769a.682.682 0 00-.03 1.363 10.654 10.654 0 00.48 0 .682.682 0 10-.03-1.363 9.163 9.163 0 01-.42 0zM12 16a5 5 0 100-10 5 5 0 000 10zm0 1.364a6.364 6.364 0 100-12.727 6.364 6.364 0 000 12.727zm0-4.546a1.818 1.818 0 100-3.636 1.818 1.818 0 000 3.636zm0 1.819a3.636 3.636 0 100-7.273 3.636 3.636 0 000 7.272z"
      ></path>
    </svg>
  );
};

LivePhoto.propTypes = {
  color: PropTypes.string
};

LivePhoto.defaultProps = {
  color: 'currentColor'
};

export default LivePhoto;
