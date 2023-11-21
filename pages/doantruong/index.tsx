import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { convertNewlinesToSpans } from "../../components/utils/convertNewlinesToSpans ";
import { useRouter } from "next/router";
//
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true,
});
export default function index() {
  const router = useRouter();
  const btnReturnRef = useRef();
  const LogoOverlayRefs = useRef();
  const LogoBgRefs = useRef();
  const componentsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [doantruong, SetDoantruong] = useState([]);
  const [checkpoint, SetCheckPoint] = useState<boolean>(true);

  async function doantruongGet() {
    const slug = "doantruong/find-out-more";
    const fields = "data";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json();
    SetDoantruong(raws.data);
  }
  useEffect(() => {
    doantruongGet();
  }, []);

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { duration: 2.5, ease: "expo.out" } });
    t1.to(
      LogoOverlayRefs.current,
      {
        scale: 0,
        opacity: 0,
        ease: "power3.inOut",
        duration: 2,
      },
      "=.1"
    )
      .to(LogoBgRefs.current, {
        opacity: 0,
        display: "none",
      })
      .to(
        btnReturnRef.current,
        {
          opacity: 1,
          duration: 2,
        },
        "=-2.5"
      );

    console.log(doantruong, checkpoint);
    if (doantruong) {
      const components = componentsRef.current;
      components.forEach((component) => {
        if( component === null ){
          return
        }
        // const lists = component.querySelectorAll(
        //   "[tr-scroll-toggle='list']"
        // ) as NodeListOf<HTMLElement>;
        // const itemTotal = lists[0].children.length;
        console.log(component);
        
      });
    }

    // components.forEach((component) => {
    //   const lists = component.querySelectorAll(
    //     "[tr-scroll-toggle='list']"
    //   ) as NodeListOf<HTMLElement>;
    //   const itemTotal = lists[0].children.length;
    //   console.log(lists[0].children.length);
    //   (
    //     component?.querySelector(
    //       "[tr-scroll-toggle='number-total']"
    //     ) as HTMLElement
    //   ).innerHTML = itemTotal.toString();
    //   const firstTrigger = component?.querySelector(
    //     "[tr-scroll-toggle='trigger']"
    //   ) as HTMLElement;
    //   for (let i = 1; i < itemTotal; i++) {
    //     component?.appendChild(firstTrigger.cloneNode(true));
    //   }
    // const triggers = component?.querySelectorAll(
    //   "[tr-scroll-toggle='trigger']"
    // ) as NodeListOf<HTMLElement>;
    // firstTrigger.style.marginTop = "-100vh";
    // const trSpacer = document.createElement("div");
    // trSpacer.className = "tr-scroll-toggle-spacer";
    // trSpacer.style.width = "100%";
    // trSpacer.style.height = "100vh";
    // trSpacer.style.display = "none";
    // component?.appendChild(trSpacer);
    // // check for min width
    // let minWidth = 0;
    // const trMinWidth = component?.getAttribute("tr-min-width");
    // if (trMinWidth) {
    //   minWidth = +trMinWidth;
    // }
    // // main breakpoint
    // const mediaQuery = gsap
    //   .matchMedia()
    //   .add(`(min-width: ${minWidth}px)`, () => {
    //     trSpacer.style.display = "block";
    //     function makeItemActive(activeIndex: number) {
    //       (
    //         component?.querySelector(
    //           "[tr-scroll-toggle='number-current']"
    //         ) as HTMLElement
    //       ).innerHTML = (activeIndex + 1).toString();
    //       lists.forEach((list) => {
    //         Array.from(list.children).forEach((child, index) => {
    //           child.classList.remove("is-active");
    //           if (index === activeIndex) {
    //             child.classList.add("is-active");
    //             document.documentElement.style.setProperty(
    //               "--dtbackgroundcolor",
    //               doantruong[index]?.bgColor
    //               // ColorPalet[index].bgColor
    //             );
    //             document.documentElement.style.setProperty(
    //               "--dtcolor",
    //               doantruong[index]?.Color
    //               // ColorPalet[index].Color
    //             );
    //           }
    //         });
    //       });
    //     }

    //     makeItemActive(0);

    //     // scroll to trigger div on click of anchor
    //     const anchorLinks = component?.querySelectorAll(
    //       "[tr-anchors] > *"
    //     ) as NodeListOf<HTMLElement>;
    //     anchorLinks.forEach((anchor: HTMLElement) => {
    //       anchor.addEventListener("click", function () {
    //         const myIndex = Array.from(
    //           (anchor.parentNode as HTMLElement)?.children
    //         ).indexOf(anchor);
    //         console.log(myIndex);

    //         const trigger = triggers[myIndex];
    //         if (trigger) {
    //           const offsetTop = trigger.offsetTop;
    //           const height = trigger.offsetHeight;
    //           if (offsetTop !== undefined && height !== undefined) {
    //             const scrollDistance = offsetTop + height - 1;
    //             window.scrollTo({ top: scrollDistance, behavior: "smooth" });
    //           }
    //         }
    //       });
    //     });

    //     // triggers timeline
    //     triggers.forEach((trigger, index) => {
    //       const tl = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: trigger,
    //           start: "top top",
    //           end: "bottom top",
    //           scrub: true,
    //           onToggle: ({ isActive }) => {
    //             if (isActive) {
    //               makeItemActive(index);
    //             }
    //           },
    //         },
    //         defaults: {
    //           ease: "none",
    //         },
    //       });
    //       lists.forEach((list: HTMLElement) => {
    //         const childItem = list.children[index];
    //         tl.to(
    //           childItem?.querySelector("[tr-item-animation='scale-to-1']"),
    //           { scale: 1 },
    //           0
    //         );
    //         tl.from(
    //           childItem?.querySelector("[tr-item-animation='scale-from-1']"),
    //           { scale: 1 },
    //           0
    //         );
    //         tl.to(
    //           childItem?.querySelector(
    //             "[tr-item-animation='progress-horizontal']"
    //           ),
    //           { width: "100%" },
    //           0
    //         );
    //       });
    //     });
    //     // component timeline
    //     const tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: component,
    //         start: "top top",
    //         end: "bottom bottom",
    //         scrub: true,
    //       },
    //       defaults: {
    //         ease: "none",
    //       },
    //     });
    //     tl.to(
    //       component?.querySelector(
    //         "[tr-section-animation='scale-to-1']"
    //       ) as HTMLElement,
    //       { scale: 1 },
    //       0
    //     );
    //     tl.from(
    //       component?.querySelector(
    //         "[tr-section-animation='scale-from-1']"
    //       ) as HTMLElement,
    //       { scale: 1 },
    //       0
    //     );
    //     tl.to(
    //       component?.querySelector(
    //         "[tr-section-animation='progress-horizontal']"
    //       ) as HTMLElement,
    //       { width: "100%" },
    //       0
    //     );
    //     tl.to(
    //       component?.querySelector(
    //         "[tr-section-animation='progress-vertical']"
    //       ) as HTMLElement,
    //       { height: "100%" },
    //       0
    //     );
    //     tl.to(
    //       component?.querySelector(
    //         "[tr-section-animation='rotate-to-0']"
    //       ) as HTMLElement,
    //       { rotation: 0 },
    //       0
    //     );
    //     tl.from(
    //       component?.querySelector(
    //         "[tr-section-animation='rotate-from-0']"
    //       ) as HTMLElement,
    //       { rotation: 0 },
    //       0
    //     );

    //     // optional scroll snapping
    //     if (component?.getAttribute("tr-scroll-snap") === "true") {
    //       const tl2 = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: component,
    //           start: "top top",
    //           end: "bottom bottom",
    //           snap: {
    //             snapTo: "labelsDirectional",
    //             duration: { min: 0.01, max: 0.2 },
    //             delay: 0.0001,
    //             ease: "power1.out",
    //           },
    //         },
    //       });
    //       triggers.forEach((trigger, index) => {
    //         tl2.to(trigger, { scale: 1, duration: 1 });
    //         tl2.addLabel("trigger" + index);
    //       });
    //     }
    //     // smaller screen sizes
    //     return () => {
    //       trSpacer.style.display = "none";
    //       (
    //         component?.querySelectorAll(
    //           "[tr-scroll-toggle='transform-y']"
    //         ) as NodeListOf<HTMLElement>
    //       ).forEach((el) => {
    //         el.style.transform = "translateY(0%)";
    //       });
    //       (
    //         component?.querySelectorAll(
    //           "[tr-scroll-toggle='transform-x']"
    //         ) as NodeListOf<HTMLElement>
    //       ).forEach((el) => {
    //         el.style.transform = "translateX(0%)";
    //       });
    //       lists.forEach((list) => {
    //         Array.from(list.children).forEach((child) => {
    //           child.classList.remove("is-active");
    //         });
    //       });
    //       // Clean up any resources or event listeners here
    //       mediaQuery.kill();
    //     };
    //   });

    // // Return the cleanup function
    // return () => {
    //   mediaQuery.kill();
    // };
  }, [doantruong]);

  return (
    <section className="doantruong" id="doantruong">
      {/* <div className="doantruong__return-box">
      <ArrowCircleLeftIcon className=""/>
    </div> */}
      <div
        className="doantruong__container"
        ref={(e) => componentsRef.current.push(e)}
        tr-min-width="992"
        tr-scroll-toggle="component"
        tr-scroll-snap="true"
      >
        <div className="doantruong__sticky grid">
          <div className="doantruong__content gridSettings">
            <div className="doantruong__content gridSettings">
              <div className="doantruong__tab-wrapper">
                <div
                  className="doantruong__tab-list"
                  tr-anchors=""
                  tr-scroll-toggle="list"
                >
                  {/* List */}
                  {doantruong?.map((data, index) => (
                    <div key={index} className={`doantruong__tab-item`}>
                      {/* <p className="doantruong__tab-text">{data.title}</p> */}
                      <div
                        className="doantruong__tab-line"
                        tr-item-animation="progress-horizontal"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="doantruong__about">
                <div className="doantruong__about-list" tr-scroll-toggle="list">
                  {/* List */}
                  {doantruong?.map((data, index) => (
                    <div key={index} className={`doantruong__about-item`}>
                      <img src="doantruong__about__mobile-icon" alt="" />
                      <div className="doantruong__about__heading-wrap">
                        <div className="doantruong__about-title">
                          {/* title */}
                          {convertNewlinesToSpans(data["title"] || "")}
                        </div>
                      </div>
                      <p className="doantruong__about-content">
                        {/* content */}
                        {convertNewlinesToSpans(data["subtitle"] || "")}
                      </p>
                      <div className="doantruong__about__mobile-img">
                        <img
                          className="doantruong__about__mobile-photo"
                          src={`md_assets/doantruong/find-out-more/${data.image}`}
                          alt=""
                        />
                      </div>
                      {data.url && (
                        <div
                          onClick={() => {
                            router.push(data.url);
                          }}
                          className="doantruong__btn"
                        >
                          Thông tin khác
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="doantruong__visual gridSettings">
            <div className="doantruong__visual-list">
              <div className="doantruong__img-list" tr-scroll-toggle="list">
                {/* List Image */}
                {doantruong?.map((data, index) => (
                  <div key={index} className={`doantruong__tab-item`}>
                    {/* <p className="doantruong__tab-text">{data.title}</p> */}
                    <img
                      className="doantruong__img-photo"
                      src={`md_assets/doantruong/find-out-more/${data.image}`}
                      alt=""
                      tr-item-animation="scale-to-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="doantruong__numbers">
              <span tr-scroll-toggle="number-current">0</span>
              &nbsp;/&nbsp;
              <span tr-scroll-toggle="number-total"></span>
            </p>
            <div
              className="doantruong__scroll-progress"
              tr-section-animation="progress-vertical"
            />
          </div>
        </div>
        <div className="doantruong__trigger" tr-scroll-toggle="trigger" />
      </div>

      <div className="doantruong__logo-bg" ref={LogoBgRefs}>
        <img
          src={`assets/logo/logo-doan-truong.png`}
          className="doantruong__logo-overlay"
          ref={LogoOverlayRefs}
          alt=""
        />
      </div>
    </section>
  );
}
