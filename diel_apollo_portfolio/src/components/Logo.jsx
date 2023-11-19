import React from 'react';

function Logo({ className, content, href }) {
  return (
    <i className={className}>
      <a href={href} dangerouslySetInnerHTML={{ __html: content }} />
    </i>
  );
}

export default Logo;
