import Link from "next/link";
import type Author from "../../interfaces/author";
import PostMeta from "./post-meta";
import styles from "./card.module.css";

type Props = {
  title: string;
  date?: string;
  category?: string;
  banner?: string;
  excerpt: string;
  author?: Author;
  slug: string;
};

const PostPreview = ({
  title,
  date,
  category,
  banner,
  excerpt,
  author,
  slug,
}: Props) => {
  console.log(excerpt.substring(0, 60));

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={banner} alt="" className={`${styles.image} object-fill`} />
      </div>
      {/* {banner && (
      )} */}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{date} - </span>
          <span className={styles.category}>{category}</span>
        </div>
        <Link as={`/${slug}`} href="/[...slug]" className="hover:underline">
          <h1 className="h3">{title}</h1>
        </Link>
        <div className={styles.desc}>{excerpt.substring(0, 120)}</div>
        <Link as={`/${slug}`} href="/[...slug]" className={`${styles.link}`}>
          <h1 className="">Read More</h1>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
