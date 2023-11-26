import Link from "next/link";
import React from "react";

export default function MostPopular() {
//   export type PopularPostProps = {
//     slug: string;
//     title: string;
//     author?: Author;
//   }[];

  const popularPosts = [
    {
      slug: "/posts/imagine-google-keep-with-obsidian-sync/",
      title: "Imagine Google Keep with Bi-directional Sync to Obsidian",
      author: {name: "Long"}
    },
    {
        slug: "/posts/sync-fleeting-notes-with-obsidian/",
        title: "How to Sync Fleeting Notes with Obsidian",
        author: {name: "Long"}
    },
    {
        slug: "/posts/put-quick-notes-into-obsidian-from-anywhere/",
        title: "Put quick notes into Obsidian from anywhere",
        author: {name: "Long"}
    },
    {
        slug: "/posts/best-web-clipper-for-obsidian/",
        title: "The Best Web Clipper for Obsidian",
        author: {name: "Long"}
    },
  ];
  return (
    <div className="mb-8">
      <h2 className={``}>Có gì mới?</h2>
      <h4 className="h4 font-bold leading-snug tracking-tight mb-4">
        Phổ biến nhất
      </h4>
      <ul className="-my-2">
        {popularPosts.map((post) => (
          <li className="flex py-2 border-b border-gray-200" key={post.slug}>
            <article>
              <h3 className="font-medium mb-1">
                <Link
                  as={`${post.slug}`}
                  href="[...slug]"
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              {post.author && (
                <div className="text-sm text-gray-800">
                  <span className="text-gray-600">By </span>
                  <a className="font-medium">{post.author.name}</a>
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
