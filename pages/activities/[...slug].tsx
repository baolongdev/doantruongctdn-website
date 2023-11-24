import { getAllPosts, getPostBySlug } from "../../lib/api";
import Post from "../../interfaces/post";
import ErrorPage from "next/error";
import path from "path";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { useRouter } from "next/router";
import PostType from "../../interfaces/post";
import { NextSeo } from "next-seo";
import PostWrapper from "../../components/post/post-wrapper";
import PostSingle from "../../components/post/post-single";
import Comments from "../../components/blog/comments";
import SlipImageEffect from "../../components/effect-intro/slip-image";
import urlbase from "../../store/linkwebbase";
import { useEffect, useState } from "react";

export default function ShowBchdoan() {
  const router = useRouter();
  const slug = router.query.slug;
  const urlfolder = "activities";
  const [post, setPost] = useState([]);
  const [absUrl, setAbsUrl] = useState<string>();
  const [docSlug, setDocSlug] = useState<string>();
  
  async function getApi() {
    const fields = "title,content,logo,date,BgColor,imageList,slug";
    const apiEndpoint = `${urlbase}/api/file/readfile?slug=${urlfolder}/${docSlug}&fields=${fields}`;
    const res = await fetch(apiEndpoint);
    const raws = await res.json();
    setAbsUrl(`${urlbase}/${urlfolder}/${docSlug}`);
    console.log(raws);

    setPost(raws);
  }
  useEffect(() => {
    if (docSlug) {
      getApi();
    }
  }, [docSlug]);
  useEffect(() => {
    if (slug) {
      const params = (slug as string[]).join("/");
      const docSlug = path.join(params, "gioithieu");
      setDocSlug(docSlug);
    }
  }, [slug]);

  if (!router.isFallback && !post["slug"]) {
    return <ErrorPage statusCode={404} />;
  }
  
  return (
    <div>
      {(router.isFallback) ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <NextSeo
            title={post["title"]}
            description={post["subtitle"]}
            canonical={absUrl}
            openGraph={{
              title: post["title"],
              description: post["subtitle"],
              type: "article",
              url: absUrl,
              images: [
                {
                  url: post["ogImage"]?.url
                    ? post["ogImage"].url
                    : "https://fleetingnotes.app/favicon/512.png",
                  width: post["ogImage"]?.url ? null : 512,
                  height: post["ogImage"]?.url ? null : 512,
                  type: null,
                },
              ],
            }}
          />
          <SlipImageEffect ImageList={post['imageList']}>
            <PostWrapper className={`max-w-2xl min-h-screen mx-auto px-4`}>
              <PostSingle
                title={post['title']}
                content={post['content']}
                date={post['date']}
                author={post['author']}
              />
            </PostWrapper>
          </SlipImageEffect>
        </>
      )}
    </div>
  );
}