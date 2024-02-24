import React, { useEffect, useRef, useState } from "react";
import { ClbDaSlider } from "./clb-da-slider";
import { ClbDaFilters } from "./clb-da-filters";
export default function ClbDa() {
  const [clbinfo, SetClbinfo] = useState({ tags: [], data: [] });
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
    // console.log(raws);

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
      <ClbDaFilters
        clbinfo={clbinfo.tags}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <ClbDaSlider clbinfo={clbinfo.data} clbdasContainerRef={clbdasContainerRef} clbdasCardRefs={clbdasCardRefs} />
    </section>
  );
}
