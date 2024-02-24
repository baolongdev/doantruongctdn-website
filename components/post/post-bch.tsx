import React from "react";
import Author from "../../interfaces/author";
import Backlinks from "../misc/backlinks";
import PostBody from "./post-body";
import PostMeta from "./post-meta";
import { convertNewlinesToSpans } from "../utils/convertNewlinesToSpans ";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

type Props = {
  title: string;
  subtitle: string;
  data?: [];
};

function PostBchSingle({ title, subtitle, data }: Props) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="bch px-5" id="bch">
      <div className="doantruong__return-box fixed left-3 top-3 w-10 !opacity-100"
        onClick={handleGoBack}
      >
        <ArrowLeftIcon className="doantruong__return button--flex" />
      </div>
      <div className="bch__data">
        <div className="bch__data-img">
          <img src="/assets/logo/logo-doan.png" alt="" />
        </div>
        <div className="bch__data-text">
          <h1 className="bch__title">{convertNewlinesToSpans(title)}</h1>
          <p className="bch__subtitle">{convertNewlinesToSpans(subtitle)}</p>
        </div>
      </div>
      <div className="bch__container grid">
        {/* Leader */}
        <div className="bch__leader">
          {data
            .filter((bch) => bch["type"] === "leader")
            .map((bch, index) => (
              <div key={index} className="bch__card">
                <div className="bch__card-img">
                  <img src={`${bch["image"]}`} alt="" className="bch__img" />
                </div>
                <h2 className="bch__card-title">
                  {bch["name"] + "-" + bch["class"]}
                </h2>
                <h3
                  className="bch__card-subtitle"
                  style={{ color: bch["color"] }}
                >
                  {bch["job"]}
                </h3>
              </div>
            ))}
        </div>
        {/* SubLeader */}
        <div className="bch__teams grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {data
            .filter((bch) => bch["type"] === "subleader")
            .map((bch, index) => (
              <div key={index} className="bch__card">
                <div className="bch__card-img">
                  <img src={`${bch["image"]}`} alt="" className="bch__img" />
                </div>
                <h2 className="bch__card-title">
                  {bch["name"] + "-" + bch["class"]}
                </h2>
                <h3
                  className="bch__card-subtitle"
                  style={{ color: bch["color"] }}
                >
                  {bch["job"]}
                </h3>
              </div>
            ))}
        </div>
        {/* member */}
        <div className="bch__teams grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {data
            .filter((bch) => bch["type"] === "member")
            .map((bch, index) => (
              <div key={index} className="bch__card">
                <div className="bch__card-img">
                  <img src={`${bch["image"]}`} alt="" className="bch__img" />
                </div>
                <h2 className="bch__card-title">
                  {bch["name"] + "-" + bch["class"]}
                </h2>
                <h3
                  className="bch__card-subtitle"
                  style={{ color: bch["color"] }}
                >
                  {bch["job"]}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PostBchSingle;
