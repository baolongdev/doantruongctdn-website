import { getAllPosts, getLinksMapping, getPostBySlug } from "../../lib/api";
import ErrorPage from "next/error";
import path from "path";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import PostWrapper from "../../components/post/post-wrapper";
import PostBchType from "../../interfaces/post-bch";
import PostBchSingle from "../../components/post/post-bch";

type Items = {
  title: string;
  excerpt: string;
};

type Props = {
  post: PostBchType;
  slug: string;
};

export default function ShowInfo({ post }: Props) {
  const router = useRouter();
  const absUrl = path.join("https://fleetingnotes.app", router.asPath);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(post);

  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <NextSeo
            title={post.title}
            description={post.subtitle}
            canonical={absUrl}
            openGraph={{
              title: post.title,
              description: post.subtitle,
              type: "article",
              url: absUrl,
              images: [
                {
                  url: post.ogImage?.url
                    ? post.ogImage.url
                    : "https://fleetingnotes.app/favicon/512.png",
                  width: post.ogImage?.url ? null : 512,
                  height: post.ogImage?.url ? null : 512,
                  type: null,
                },
              ],
            }}
          />
          <PostBchSingle
            title={post.title}
            subtitle={post.subtitle}
            data={post.data}
          />
        </>
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string[];
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const slug = path.join(...params.slug);
  const docSlug = path.join("doantruong/bch", slug, "gioithieu");
  console.log(docSlug);
  
  const post = await getPostBySlug(docSlug, [
    "title",
    "subtitle",
    "data",
    "slug",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
};

const filterPosts = (posts: any[]) => {
  return posts
    .filter((post) => post.slug.startsWith('doantruong/'))
}
export async function getStaticPaths() {
  let posts = await getAllPosts(['slug'])
  posts = filterPosts(posts);
  
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
