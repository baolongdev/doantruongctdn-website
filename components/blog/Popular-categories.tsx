import React, { useEffect, useState } from "react";
import urlbase from "../../store/linkwebbase";
import Link from "next/link";
import styles from "./categoryList.module.css";

export default function PopularCategories() {
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
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-2 md:pt-40 md:pb-20">
          <div className="max-w-3xl pb-12 md:pb-8 text-center md:text-left">
            <h1 className="h2 mb-4">Danh mục phổ biến</h1>
          </div>

          <div className="sm:flex sm:flex-row sm:justify-between flex flex-col gap-4">
            {popularCategories.map((category, index) => (
              <Link
                href={category.url}
                className={`${styles.category}`}
                style={{backgroundColor: category.BgColor}}
                key={index}
              >
                {category.image && (
                  <img
                    src={category.image}
                    alt=""
                    width={32}
                    height={32}
                    className={styles.image}
                  />
                )}
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
