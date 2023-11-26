import React, { useEffect, useState } from "react";
import styles from "./menuCategories.module.css";
import urlbase from "../../store/linkwebbase";
import Link from "next/link";

export default function MenuCategories() {
  const [popularCategories, SetPopularCategories] = useState([]);

  async function PopularCategoriesGet() {
    const slug = "posts/setting/PopularCategories";
    const fields = "data";
    const apiEndpoint = `${urlbase}/api/file/readfile?slug=${slug}&fields=${fields}`;
    const res = await fetch(apiEndpoint);
    const raws = await res.json();

    console.log(raws.data);
    SetPopularCategories(raws.data);
  }
  useEffect(() => {
    PopularCategoriesGet();
  }, []);
  return (
    <div className="mb-8">
      <h2 className={``}>Khám phá theo chủ đề</h2>
      <h4 className="h4 font-bold leading-snug tracking-tight mb-4">
        Thể loại
      </h4>
      <div className={styles.categoryList}>
      {popularCategories.map((category, index) => (
              <Link
                href={category.url}
                className={`${styles.categoryItem} ${styles.style}`}
                style={{backgroundColor: category.BgColor}}
                key={index}
              >
                {category.title}
              </Link>
            ))}
      </div>
    </div>
  );
}
