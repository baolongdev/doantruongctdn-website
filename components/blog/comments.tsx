import Giscus from "@giscus/react";

function Comments() {
  return (
    <div className="mb-5">
      <Giscus
        id="comments"
        repo="baolongdev/doantruongctdn-website"
        repoId="R_kgDOKvaHsg"
        category="General"
        categoryId="DIC_kwDOKvaHss4CbE4P"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="vi"
        loading="lazy"
      />
    </div>
  );
}

export default Comments;
