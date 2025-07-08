import React from 'react';
import PropTypes from 'prop-types';

const UserForbid = props => {
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
        d="M17.499 12.5a5 5 0 110 10 5 5 0 010-10zm-1.293 7.708a3 3 0 004.001-4.001l-4.001 4.001zm1.293-5.708a3 3 0 00-2.708 4.293l4-4.001A2.987 2.987 0 0017.5 14.5z"
      ></path>
      <path d="M11.554 13.7a1 1 0 01.095 1.987l-.101.01c-2.338.113-4.5 1.082-5.753 2.802l4.706.001a1 1 0 010 2H4.129a1 1 0 01-.972-1.236l.036-.116c1.331-3.533 4.835-5.282 8.258-5.448h.103z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25c1.152 0 2.106.645 2.734 1.51.63.868.989 2.017.989 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.757 1.516s-2.13-.639-2.758-1.516C8.62 9.363 8.278 8.214 8.278 7c0-1.224.359-2.372.989-3.24.628-.865 1.583-1.51 2.734-1.51zm0 2c-.351 0-.759.195-1.115.686-.356.49-.607 1.216-.607 2.064 0 .857.243 1.584.591 2.07.344.48.748.68 1.132.68.384 0 .787-.201 1.13-.68.348-.486.592-1.213.592-2.07 0-.848-.251-1.574-.607-2.064-.356-.491-.763-.686-1.115-.686z"
      ></path>
    </svg>
  );
};

UserForbid.propTypes = {
  color: PropTypes.string
};

export default UserForbid;
