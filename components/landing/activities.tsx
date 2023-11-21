import React, { useEffect, useState } from "react";
// import { activities } from "../../store/activities";

export default function Activities() {
  const [activities, SetActivities] = useState([]);

  async function ClbDaList() {
    const slug = "activities/activities";
    const fields = "data";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json()
    SetActivities(raws.data);
  }
  useEffect(() => {
    ClbDaList();
  }, []);


  return (
    <section className="activities section container" id="activities">
      <div className="activities__bg">
        <h2 className="section__title-center activities__title">
          Các hoạt động nổi bật
        </h2>

        <div className="activities__container grid">
          {activities.map((e: any, index: any) => (
            <div key={index} className="activities__card">
              <div className="activities__card-frame">
                <img className="activities__card-img" src={e.img} alt="" />
              </div>
              <div className="activities__card-data">
                <h2 className="activities__card-title">
                  {e.title.replace("/", "")}
                </h2>
                <h3 className="activities__card-subtitle">{e.subtitle}</h3>
                <a href={e.link} className="activities__card-button">
                  Tìm hiểu thêm{" "}
                  <i className="ri-arrow-right-line activities__icon"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
