import React from "react";

function PostWrapper({ children, className }) {
  return (
    <div className={className}>
      <div className="pt-28 pb-12 md:pt-40 md:pb-20">
        {children}
      </div>
    </div>
  );
}

export default PostWrapper;

