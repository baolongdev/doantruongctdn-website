import React, { useEffect, useState } from "react";
import { ActivitiesList } from "./activities-list";

export default function Activities() {
  const [activities, SetActivities] = useState([]);

  async function ClbDaList() {
    const slug = "activities/activities";
    const fields = "data";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json();
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
        <ActivitiesList activities={activities} />
      </div>
    </section>
  );
}
