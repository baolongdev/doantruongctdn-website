import ErrorPage from "next/error";
import path from "path";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import PostBchSingle from "../../components/post/post-bch";
import React, { useEffect, useState } from "react";
import urlbase from "../../store/linkwebbase";

export default function ShowBchdoan() {
  const router = useRouter();
  const slug = router.query.slug;
  const urlfolder = "doantruong";
  const [post, setPost] = useState([]);
  const [absUrl, setAbsUrl] = useState<string>();
  const [docSlug, setDocSlug] = useState<string>();

  async function getApi() {
    const fields = "title,subtitle,data,slug";
    const apiEndpoint = `${urlbase}api/file/readfile?slug=${urlfolder}/${docSlug}&fields=${fields}`;
    const res = await fetch(apiEndpoint);
    const raws = await res.json();
    setAbsUrl(`${urlbase}/${urlfolder}/${docSlug}`);
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
      {router.isFallback ? (
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
          <PostBchSingle
            title={post["title"]}
            subtitle={post["subtitle"]}
            data={post["data"]}
          />
        </>
      )}
    </div>
  );
}

// export default function ShowBchdoan() {
//   const router = useRouter();

//   const [bchAbout, SetBchAbout] = useState([]);
//   const { slug: params } = router.query;
//   const slug = Array.isArray(params) ? params.join('/') : params;
//   const docSlug = path.join(slug, "gioithieu");
//   const absUrl = path.join(urlbase, router.asPath);

//   async function bchGet() {
//     const fields = "title,subtitle,data,slug";
//     const apiEndpoint = `${urlbase}api/file/readfile?slug=${docSlug}&fields=${fields}`;

//     const res = await fetch(apiEndpoint);

//     const raws = await res.json();

//     SetBchAbout(raws);
//   }
//   useEffect(() => {
//     bchGet();
//   }, []);
//   useEffect(() => {
//     console.log(bchAbout);
//   }, [bchAbout]);

//   // if (!router.isFallback && !bchAbout["slug"]) {
//   //   return <ErrorPage statusCode={404} />;
//   // }

//   return (
//     <>
//       {router.isFallback ? (
//         <h1>Loading…</h1>
//       ) : (
//         <>
//           <NextSeo
//             title={bchAbout["title"]}
//             description={bchAbout["subtitle"]}
//             canonical={absUrl}
//             openGraph={{
//               title: bchAbout["title"],
//               description: bchAbout["subtitle"],
//               type: "article",
//               url: absUrl,
//               images: [
//                 {
//                   url: bchAbout["ogImage"]?.url
//                     ? bchAbout["ogImage"].url
//                     : "https://fleetingnotes.app/favicon/512.png",
//                   width: bchAbout["ogImage"]?.url ? null : 512,
//                   height: bchAbout["ogImage"]?.url ? null : 512,
//                   type: null,
//                 },
//               ],
//             }}
//           />
//           {/* <PostBchSingle
//             title={bchAbout["title"]}
//             subtitle={bchAbout["subtitle"]}
//             data={bchAbout["data"]}
//           /> */}
//         </>
//       )}
//     </>
//   );
// }
