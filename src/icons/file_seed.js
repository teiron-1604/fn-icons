import React from 'react';
import PropTypes from 'prop-types';

const FileSeed = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M15.812 18h-1.059c-.184 0-.277-.088-.277-.264v-6.313c0-.092-.046-.139-.139-.139h-1.436c-.176 0-.264-.088-.264-.264v-.857c0-.176.088-.265.264-.265h4.763c.176 0 .264.089.264.265v.857c0 .176-.088.264-.264.264h-1.437c-.1 0-.15.047-.15.139v6.313c0 .176-.089.264-.265.264z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.82 10.163v7.573c0 .176.087.264.264.264h3.15c.655 0 1.163-.176 1.524-.529.362-.353.542-.857.542-1.512v-.756c0-.412-.1-.727-.302-.945a1.296 1.296 0 00-.807-.416c.664-.21.996-.672.996-1.386v-.516c0-.656-.18-1.16-.542-1.512-.361-.353-.874-.53-1.537-.53H7.084c-.177 0-.265.089-.265.265zm3.15 6.502H8.557c-.093 0-.139-.047-.139-.139v-1.903c0-.092.046-.138.139-.138h1.386c.285 0 .491.054.617.164.126.109.19.294.19.554v.73c0 .261-.064.45-.19.568-.117.109-.315.164-.592.164zm-.127-3.478H8.558c-.093 0-.139-.046-.139-.139v-1.675c0-.093.046-.139.139-.139h1.298c.268 0 .462.059.58.176.125.11.188.294.188.555v.491c0 .26-.063.45-.189.567-.126.11-.323.164-.592.164z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM15 4H5v16h14V8h-4V4z"
      ></path>
    </svg>
  );
};

FileSeed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileSeed.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileSeed;