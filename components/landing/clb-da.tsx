import React, { useEffect, useState } from "react";
import { rootDirectory } from "../../store/clb-da";

export default function ClbDa() {
  const [clbinfo, SetClbinfo] = useState([]);

  async function ClbDaList() {
    const slug = "clb-da/clb-da-list";
    const fields = "data";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json()
    SetClbinfo(raws.data);
    
  }
  useEffect(() => {
    ClbDaList();
  }, []);

  return (
    <section className="clbdas section" id="clbda">
      <h2 className="section__title-center clbdas__title container">
        CÂU LẠC BỘ - DỰ ÁN
      </h2>
      <div className="clbdas__filters">
        <button
          className="button button--flex clbdas__filters-btn"
          id="prev-btn"
        >
          <i className="ri-arrow-left-s-line clbdas__filters-icon"></i>
        </button>
        <div className="clbdas__slider">
          <span className="clbdas__item active-clbdas" data-filter="all">
            Tất cả
          </span>
          <span className="clbdas__item" data-filter=".vh">
            Văn hóa
          </span>
          <span className="clbdas__item" data-filter=".knnt">
            Kỹ năng - nghệ thuật
          </span>
          <span className="clbdas__item" data-filter=".httt">
            Học thuật - thông tin
          </span>
          <span className="clbdas__item" data-filter=".khxhda">
            Khoa học xã hội - dự án
          </span>
        </div>
        <button
          className="button button--flex clbdas__filters-btn"
          id="next-btn"
        >
          <i className="ri-arrow-right-s-line clbdas__filters-icon"></i>
        </button>
      </div>
      <div className="clbdas__container container grid">
        {clbinfo.map((data: any, index: any) => (
          <a
            key={index}
            href={"clb-da/" + data.id}
            className={`clbdas__card mix ${data.tag}`}
          >
            <img
              src={`${data.banner}`}
              alt=""
              className="clbdas__img"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
