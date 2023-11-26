import { getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";
import PostList from "../../components/blog/post-list";
import Pagination from "../../components/blog/pagination";
import PostType from "../../interfaces/post";
import Layout from "../../components/misc/layout";
import { NextSeo } from "next-seo";
import PopularCategories from "../../components/blog/Popular-categories";

type Props = {
  posts: Post[];
  pid: number;
  maxPid: number;
};

export default function Index({ posts, pid, maxPid }: Props) {
  return (
    <Layout>
      <NextSeo title="Blog" />
      <PopularCategories/>
      <PostList posts={posts || []} title="Bài viết gần đây" />
      <Pagination currPage={pid} maxPage={maxPid} />
    </Layout>
  );
}

type Params = {
  params: {
    pid: string;
    posts: PostType[];
  };
};

const pageSize = 6;
const filterPosts = (posts: any[]) => {
  return posts
    .filter((post) => post.slug.startsWith("posts/") && !post.slug.includes("setting"))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};
export const getStaticProps = async ({ params }: Params) => {
  let posts = await getAllPosts([
    "title",
    "date",
    "category",
    "banner",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  posts = filterPosts(posts);
  const pid = parseInt(params.pid);
  const maxPid = Math.round(posts.length / pageSize);
  const start = (pid - 1) * pageSize;
  posts = posts.slice(start, start + pageSize);

  return {
    props: { posts, pid, maxPid },
  };
};

export async function getStaticPaths() {
  let posts = await getAllPosts(["slug"]);
  // filter posts shown here
  posts = filterPosts(posts);

  const paths = [];
  let pid = 1;
  for (let i = 0; i < posts.length; i += pageSize) {
    paths.push({
      params: {
        pid: pid.toString(),
      },
    });
    pid += 1;
  }

  return {
    paths: paths,
    fallback: false,
  };
}
