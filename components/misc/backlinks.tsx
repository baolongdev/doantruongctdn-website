import Link from "next/link";
import NotePreview from "./note-preview";

type Props = {
  backlinks: {
    [k: string]: {
      title: string;
      excerpt: string;
    };
  };
};

const Backlinks = ({ backlinks }: Props) => {
  return (
    <>
      {Object.keys(backlinks).map((slug) => {
        const post = backlinks[slug];
        // TODO: work around to make docs backlinks work
        slug = slug.replace(/^docs\//, '');
        return (
          <Link
            key={slug}
            as={slug}
            href="[...slug]"
          >
            <NotePreview title={post.title} content={post.excerpt} maxHeight={60} />
          </Link>
        );
      })}
    </>
  );
};

export default Backlinks;

