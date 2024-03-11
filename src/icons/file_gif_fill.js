import React from 'react';
import PropTypes from 'prop-types';

const FileGifFill = props => {
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
        d="M21 7l-5-5H3.999A.995.995 0 003 2.992v18.016a1 1 0 00.993.992h16.014A1 1 0 0021 20.993V7zm-6.693 10.902h.926c.152 0 .229-.077.229-.23v-2.32c0-.08.043-.12.13-.12h1.863c.153 0 .23-.08.23-.24v-.729c0-.153-.077-.229-.23-.229h-1.862c-.088 0-.131-.043-.131-.13v-1.69c0-.079.043-.119.13-.119h2.19c.145 0 .218-.076.218-.229v-.74c0-.153-.073-.23-.218-.23h-3.475c-.152 0-.229.077-.229.23v6.547c0 .152.077.229.229.229zm-1.26-6.777v6.548c0 .152-.076.229-.228.229h-.926c-.153 0-.229-.077-.229-.23v-6.546c0-.153.076-.23.229-.23h.926c.152 0 .229.077.229.23zm-5.25 6.776h1.155c.567 0 1.006-.152 1.318-.457.313-.313.469-.752.469-1.318v-1.82c0-.167-.084-.25-.25-.25H8.581c-.153 0-.229.076-.229.229v.74c0 .153.076.23.229.23h.654c.08 0 .12.039.12.119v.686c0 .233-.048.4-.142.501-.095.095-.258.142-.49.142h-.709c-.225 0-.388-.047-.49-.142-.094-.101-.141-.268-.141-.5v-3.323c0-.233.047-.396.141-.49.102-.102.265-.153.49-.153h.708c.233 0 .396.05.49.152.095.095.142.258.142.49V13c0 .16.077.24.23.24h.925c.153 0 .229-.08.229-.24v-.327c0-.566-.156-1.002-.469-1.307-.312-.312-.751-.469-1.318-.469H7.798c-.574 0-1.017.153-1.33.458-.312.305-.468.745-.468 1.318v3.454c0 .573.156 1.013.468 1.318.313.305.756.457 1.33.457z"
      ></path>
    </svg>
  );
};

FileGifFill.propTypes = {
  color: PropTypes.string
};

FileGifFill.defaultProps = {
  color: 'currentColor'
};

export default FileGifFill;
