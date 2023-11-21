import React from "react";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
function PostWrapper({ children, className }) {
  const router = useRouter();
  const handleReturn = () => {
    router.back();
  };
  return (
    <div className={className}>
      <ArrowSmLeftIcon className="Clbinfo__return button button--flex !rounded-sm !p-1 h-10" 
        onClick={handleReturn}
      />
      <div className="pt-28 pb-12 md:pt-40 md:pb-20">{children}</div>
    </div>
  );
}

export default PostWrapper;
