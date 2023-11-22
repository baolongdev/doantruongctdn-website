import React from "react";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
function PostWrapper({ children, className }) {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className={className}>
      <div
        className="doantruong__return-box fixed left-3 top-3 w-10 !opacity-100"
        onClick={handleGoBack}
      >
        <ArrowSmLeftIcon className="doantruong__return button--flex" />
      </div>
      <div className="pt-28 pb-12 md:pt-40 md:pb-20">{children}</div>
    </div>
  );
}

export default PostWrapper;
