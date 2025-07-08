import React from 'react';
import PropTypes from 'prop-types';

const HardDiskSetting = props => {
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
        d="M19.93 13.725c.552 0 1 .453 1 1.005 0 .099.062.186.153.224a3 3 0 01.669.388c.078.06.185.07.27.02a1.005 1.005 0 011.372.363 1.005 1.005 0 01-.371 1.369.245.245 0 00-.118.244 3.028 3.028 0 010 .773.245.245 0 00.117.244c.479.277.648.891.372 1.37-.276.478-.893.639-1.371.363a.245.245 0 00-.271.02 3 3 0 01-.669.387.246.246 0 00-.153.224c0 .552-.448 1.006-1 1.006s-1-.454-1-1.006a.245.245 0 00-.153-.224c-.24-.1-.466-.23-.67-.387a.244.244 0 00-.27-.02 1.006 1.006 0 01-1.371-.363 1.006 1.006 0 01.37-1.37.246.246 0 00.12-.244 3.026 3.026 0 010-.773.246.246 0 00-.12-.244 1.006 1.006 0 01-.37-1.37 1.006 1.006 0 011.372-.362.245.245 0 00.27-.02c.203-.156.429-.288.67-.388a.245.245 0 00.152-.224c0-.552.448-1.005 1-1.005zm0 3a1 1 0 100 2 1 1 0 000-2z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.969 3.008a3 3 0 012.377 1.473l.1.184.046.11 2.45 6.89A1 1 0 0122 13H3v5a1 1 0 001 1h9.188l.101.005a1 1 0 010 1.99l-.101.005H4a3 3 0 01-3-3v-6a1 1 0 01.058-.335l2.45-6.89.047-.11A3 3 0 016.239 3h11.522l.208.008zM6.102 5.01a1.001 1.001 0 00-.737.51L3.417 11h17.166l-1.95-5.48a.998.998 0 00-.735-.51L17.76 5H6.24l-.138.01z"
      ></path>
      <path d="M6.01 15a1 1 0 110 2H6a1 1 0 110-2h.01z"></path>
    </svg>
  );
};

HardDiskSetting.propTypes = {
  color: PropTypes.string
};

export default HardDiskSetting;
