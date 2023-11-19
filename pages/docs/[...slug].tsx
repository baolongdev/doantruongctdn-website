import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import path from "path";
import { NextSeo } from "next-seo";

import { getAllPosts, getLinksMapping, getPostBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import PostSingle from "../../components/post/post-single";
import Layout from "../../components/misc/layout";
import Comments from "../../components/blog/comments";
import DocumentationSidebar from "../../components/docs/sidebar";
import PostWrapper from "../../components/post/post-wrapper";

type Items = {
  title: string;
  excerpt: string;
};

type Props = {
  post: PostType;
  slug: string;
  backlinks: { [k: string]: Items };
  sidebarData: SidebarData;
};

export default function DocumentationPost(
  { post, backlinks, sidebarData }: Props,
) {
  const router = useRouter();
  const description = post.excerpt.slice(0, 155);
  const absUrl = path.join("https://fleetingnotes.app", router.asPath);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? <h1>Loading…</h1> : (
        <Layout>
          <NextSeo
            title={post.title}
            description={description}
            canonical={absUrl}
            openGraph={{
              title: post.title,
              description,
              type: "article",
              url: absUrl,
              images: [{
                url: (post.ogImage?.url)
                  ? post.ogImage.url
                  : "https://fleetingnotes.app/favicon/512.png",
                width: (post.ogImage?.url) ? null : 512,
                height: (post.ogImage?.url) ? null : 512,
                type: null,
              }],
            }}
          />
          <PostWrapper className="max-w-5xl mx-auto px-4">
            <div className="md:flex md:justify-between">
              <DocumentationSidebar
                sidebarData={sidebarData}
                slug={post.slug}
              />
              <PostSingle
                title={post.title}
                content={post.content}
                date={post.date}
                author={post.author}
                backlinks={backlinks}
              />
            </div>
            <div className="max-w-3xl mx-auto">
              <Comments />
            </div>
          </PostWrapper>
        </Layout>
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string[];
    backlinks: string[];
    sidebarData: SidebarData; 
  };
};

export async function getStaticProps({ params }: Params) {
  const slug = path.join(...params.slug);
  const docSlug = path.join("docs", slug);
  const post = getPostBySlug(docSlug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "", docSlug);
  const linkMapping = getLinksMapping();
  const backlinks = Object.keys(linkMapping).filter((k) =>
    linkMapping[k].includes(post.slug) && k !== post.slug
  );
  const backlinkNodes = Object.fromEntries(
    await Promise.all(backlinks.map(async (slug) => {
      const post = await getPostBySlug(slug, ["title", "excerpt"]);
      return [slug, post];
    })),
  );

  return {
    props: {
      post: {
        ...post,
        content,
      },
      backlinks: backlinkNodes,
      sidebarData: getSidebarData(),
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPostsInDocs();
  return {
    paths: posts.map(
      (post: { slug: string }): { params: { slug: string[] } } => {
        return {
          params: {
            slug: post.slug.split(path.sep),
          },
        };
      },
    ),
    fallback: false,
  };
}

function getAllPostsInDocs() {
  const posts = getAllPosts(["slug", "title"]).filter((p: { slug: string }) => 
    p.slug.startsWith("docs/")
  );
  posts.forEach((p: { slug: string }) => {
    p.slug = p.slug.replace("docs/", "");
  });
  return posts;
}

export type SidebarData = { [key: string]: {title: string, file: string}[] };

function getSidebarData() {
  const posts = getAllPostsInDocs();
  const sidebarData: SidebarData = {};
  posts.forEach((p: { slug: string, title: string }) => {
    const parts = p.slug.split(path.sep);
    if (parts.length == 2) {
      const [folder, file] = parts;
      const obj = {
        title: p?.title,
        file: file,
      }
      if (sidebarData[folder]) {
        sidebarData[folder].push(obj);
      } else {
        sidebarData[folder] = [obj];
      }
    }
  });
  return sidebarData;
}
