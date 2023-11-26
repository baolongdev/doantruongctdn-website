import React from "react";
import styles from "./menu.module.css";
import EditorsPick from "./editors-pick";
import MenuCategories from "./menu-categories";
import MostPopular from "./most-popular";


export default function MenuAside() {
  return (
    <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">
      {/* <MostPopular/> */}
      <MenuCategories/>  
      <EditorsPick />
    </aside>
  );
}
