import React from "react";

import PostPreview from "../post/post-preview";
import type Post from "../../interfaces/post";

import MenuAside from "./menu-aside";

type Props = {
  posts: Post[];
  title: string;
  onPopularPosts?: boolean;
};

function PostList({ posts, title, onPopularPosts = true }: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-6 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-8 text-center md:text-left">
            <h1 className="h2 mb-4">{title}</h1>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Articles container */}
            <div className="md:grow -mt-4">
              {posts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  banner={post.banner}
                  excerpt={post.excerpt}
                  author={post.author}
                  slug={post.slug}
                />
              ))}
            </div>

            {/* Sidebar */}
            {onPopularPosts && (
              <MenuAside />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostList;
