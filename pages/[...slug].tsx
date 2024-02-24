import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPosts, getLinksMapping, getPostBySlug } from "../lib/api";
import { markdownToHtml } from "../lib/markdownToHtml";
import type PostType from "../interfaces/post";
import path from "path";
import PostSingle from "../components/post/post-single";
import Layout from "../components/misc/layout";
import Comments from "../components/blog/comments";
import { NextSeo } from "next-seo";
import PostWrapper from "../components/post/post-wrapper";
import urlbase from "../store/linkwebbase";

type Items = {
  title: string;
  excerpt: string;
};

type Props = {
  post: PostType;
  slug: string;
  backlinks: { [k: string]: Items };
};

export default function Post({ post, backlinks }: Props) {
  const router = useRouter();
  const description = post.excerpt.slice(0, 155);
  const absUrl = path.join(urlbase, router.asPath);
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
                  : `${urlbase}/favicon/512.png`,
                width: (post.ogImage?.url) ? null : 512,
                height: (post.ogImage?.url) ? null : 512,
                type: null,
              }],
            }}
          />
          <PostWrapper className="max-w-2xl mx-auto px-4">
            <PostSingle
              title={post.title}
              content={post.content}
              date={post.date}
              author={post.author}
              backlinks={backlinks}
            />
            <Comments />
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
  };
};

export async function getStaticProps({ params }: Params) {
  const slug = path.join(...params.slug);
  const post = await getPostBySlug(slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "", slug);
  const linkMapping = await getLinksMapping();
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
    },
  };
}

export async function getStaticPaths() {
  let posts = await getAllPosts(["slug"]);
  posts = posts.filter(p => !p.slug.startsWith('docs/'))

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split(path.sep),
        },
      };
    }),
    fallback: false,
  };
}
