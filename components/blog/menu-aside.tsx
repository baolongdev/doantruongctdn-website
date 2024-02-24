import React from "react";
import EditorsPick from "./editors-pick";
import MenuCategories from "./menu-categories";

export default function MenuAside() {
  return (
    <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">
      {/* <MostPopular/> */}
      <div
        className="sticky"
        style={{ top: "calc(var(--header-height) + 2rem)" }}
      >
        <MenuCategories />
        <EditorsPick />
      </div>
    </aside>
  );
}
