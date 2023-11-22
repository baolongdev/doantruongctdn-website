import { getAllPosts, getLinksMapping, getPostBySlug } from "../../lib/api";
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

type Items = {
  title: string;
  excerpt: string;
};

type Props = {
  post: PostType;
  slug: string;
  backlinks: { [k: string]: Items };
};

export default function ShowInfo({ post, backlinks }: Props) {
  const router = useRouter();
  const description = post?.excerpt?.slice(0, 155) || "abc";
  const absUrl = path.join("https://fleetingnotes.app", router.asPath);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <NextSeo
            title={post.title}
            description={description}
            canonical={absUrl}
            openGraph={{
              title: post.title,
              description,
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
          <SlipImageEffect ImageList={post.imageList}>
            <PostWrapper className={`max-w-2xl min-h-screen mx-auto px-4`}>
              <PostSingle
                title={post.title}
                content={post.content}
                date={post.date}
                author={post.author}
                backlinks={backlinks}
              />
            </PostWrapper>
          </SlipImageEffect>
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
  const docSlug = path.join("activities", slug, "gioithieu");
  console.log(docSlug);

  const post = await getPostBySlug(docSlug, [
    "title",
    "content",
    "logo",
    "date",
    "BgColor",
    "imageList",
    "slug",
  ]);

  console.log(post);

  const content = await markdownToHtml(post.content || "", docSlug);
  const linkMapping = await getLinksMapping();
  const backlinks = Object.keys(linkMapping).filter(
    (k) => linkMapping[k].includes(post.slug) && k !== post.slug
  );

  const backlinkNodes = Object.fromEntries(
    await Promise.all(
      backlinks.map(async (slug) => {
        const post = await getPostBySlug(slug, ["title", "excerpt"]);
        return [slug, post];
      })
    )
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
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
