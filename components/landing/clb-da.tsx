import React, { useEffect, useRef, useState } from "react";
import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
// import mixitup from "mixitup";
const TRANSITION_DURATION = 250;
export default function ClbDa() {
  const [clbinfo, SetClbinfo] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [scroll, setScroll] = useState(0);
  const clbdasContainerRef = useRef<HTMLDivElement>();
  const clbdasCardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import MixItUp dynamically, as it depends on the browser environment
      import("mixitup").then((MixItUp) => {
        // Initialize MixItUp when the component mounts
        const mixer = MixItUp.default(clbdasContainerRef.current, {
          selectors: {
            target: clbdasCardRefs.current,
          },
          animation: {
            duration: 300,
            nudge: true,
            reverseOut: true,
            effects: "fade scale(0.01)",
          },
        });

        return () => {
          mixer.destroy();
        };
      });
    }
  }, []);

  const handleTabClick = (filter) => {
    setActiveTab(filter);
  };
  const handlePrevClick = () => {
    const newScroll = scroll - 100;
    setScroll(newScroll);
  };

  const handleNextClick = () => {
    const newScroll = scroll + 100;
    setScroll(newScroll);
  };

  useEffect(() => {
    const slider = document.querySelector(".clbdas__slider");

    const handleSliderScroll = () => {
      setScroll(slider.scrollLeft);
    };

    if (slider) {
      slider.scrollLeft = scroll;
      slider.addEventListener("scroll", handleSliderScroll);
    }

    return () => {
      // Remove the event listener on component unmount
      if (slider) {
        slider.removeEventListener("scroll", handleSliderScroll);
      }
    };
  }, [scroll]);

  async function ClbDaList() {
    const slug = "clb-da/clb-da-list";
    const fields = "data,tags";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json();
    console.log(raws);

    SetClbinfo(raws);
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
          <div
            className="clbdas__filters-icon w-8 hover:bg-gray-200 rounded-md"
            onClick={handlePrevClick}
          >
            <ArrowSmLeftIcon />
          </div>
        </button>

        <div className="clbdas__slider select-none">
          {clbinfo["tags"]?.map((tag, index) => (
            <span
              key={index}
              className={`clbdas__item ${
                activeTab === tag.filter && "active-clbdas"
              }`}
              data-filter={tag.filter}
              onClick={() => handleTabClick(tag.filter)}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <button
          className="button button--flex clbdas__filters-btn "
          id="next-btn"
        >
          <div
            className="clbdas__filters-icon w-8 hover:bg-gray-200 rounded-md"
            onClick={handleNextClick}
          >
            <ArrowSmRightIcon />
          </div>
        </button>
      </div>
      <div
        ref={clbdasContainerRef}
        className="clbdas__container container grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
      >
        {clbinfo["data"]?.map((data: any, index: any) => (
          <a
            ref={(element) => (clbdasCardRefs[index] = element)}
            key={index}
            href={"clb-da/" + data.id}
            className={`clbdas__card mix ${data.tag}`}
          >
            <img src={`${data.banner}`} alt="" className="clbdas__img" />
          </a>
        ))}
      </div>
    </section>
  );
}
