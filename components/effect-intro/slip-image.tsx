import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
interface SlipImageEffectProps {
  children: ReactNode;
  ImageList?: any; // Replace 'any' with the actual type of ImageList
}

function generateLoaderColumn(
  isAlt,
  isReversed,
  isEdge,
  isMiddle,
  isCenter,
  startIndex,
  ImageList
) {
  return (
    <div className={`activityhot__loader-column ${isAlt ? "is-alt" : ""}`}>
      <div
        className={`activityhot__loader__column-inner ${isReversed ? "is-reversed" : ""
          } ${isEdge ? "is-edge" : ""} ${isCenter ? "is-center" : ""}`}
      >
        {[...Array(5)].map((_, index) => (
          <div key={index} className="activityhot__loader__img-wrap">
            <img
              src={
                /^https:\/\//.test(ImageList[index + startIndex])
                  ? `../md_assets/activities/${ImageList[index + startIndex]}`
                  : ImageList[index + startIndex]
              }
              loading="eager"
              alt=""
              className={`activityhot__loader__img ${isMiddle && index === 2 ? "is-middle" : ""
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SlipImageEffect({
  children,
  ImageList,
}: SlipImageEffectProps) {
  const componentsRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const component = componentsRef.current;

    const inner = component?.querySelectorAll(
      ".activityhot__loader__column-inner"
    );
    const is__edge = component?.querySelectorAll(
      ".activityhot__loader__column-inner.is-edge"
    );
    const is__center = component?.querySelectorAll(
      ".activityhot__loader__column-inner.is-center"
    );
    const is__reversed = component?.querySelectorAll(
      ".activityhot__loader__column-inner.is-reversed"
    );
    const is__middle = component?.querySelectorAll(
      ".activityhot__loader__img.is-middle"
    );
    const loader__flex = component?.querySelectorAll(
      ".activityhot__loader-flex"
    );
    // console.log(component);

    const tlset = gsap.timeline();
    tlset
      .set(inner, {
        width: "100vw",
        height: "350%",
      })
      .set(is__edge, {
        translateY: "70%",
      })
      .set(is__center, {
        translateY: "40%",
      })
      .set(is__reversed, {
        translateY: "-40%",
      })
      .set(is__middle, {
        scale: "1.5",
      })
      .set(loader__flex, {
        scale: "0.23",
      });

    const tl = gsap;
    tl.to(inner, {
      width: "100vw",
      height: "100%",
      duration: 2.5,
      ease: "sine.inOut",
    });
    tl.to(is__edge, {
      translateY: "0",
      duration: 2.5,
      ease: "cubic-bezier(.854, .118, .357, .767)",
    });
    tl.to(is__center, {
      translateY: "0",
      duration: 2.5,
      ease: "cubic-bezier(.854, .118, .357, .767)",
    });
    tl.to(is__reversed, {
      translateY: "10%",
      duration: 2.5,
      ease: "cubic-bezier(.854, .118, .357, .767)",
    });
    tl.to(is__middle, {
      scale: "1",
      ease: "cubic-bezier(.445, .05, .111, .966)",
      //   maskImage: "linear-gradient(black, transparent)",
      duration: 2,
      delay: 2,
    });
    tl.set(is__middle, {
      maskImage: "linear-gradient(black 100%, transparent)",
      ease: "sine.in",
      duration: 2,
    });
    tl.to(is__middle, {
      maskImage: "linear-gradient(black 0%, transparent)",
      duration: 2.5,
      ease: "power4.out",
      delay: 2.5,
    });
    tl.to(loader__flex, {
      scale: "1",
      ease: "cubic-bezier(.445, .05, .111, .966)",
      duration: 2,
      delay: 2,
    });
    tl.timeline()
      .to(component, {
        scale: "0.3",
        opacity: "0",
        ease: "cubic-bezier(.445, .05, .111, .966)",
        duration: 2,
        delay: 5,
      })
      .to(component, {
        visibility: "hidden",
      });
  }, []);

  //   console.log(ImageList);
  //   md_assets/activities
  return (
    <section className="activityhot" id="activityhot">
      <div className="activityhot__loader" ref={componentsRef}>
        <div className="activityhot__loader-flex">
          {generateLoaderColumn(false, false, true, false, false, 0, ImageList)}
          {generateLoaderColumn(true, true, false, false, false, 5, ImageList)}
          {generateLoaderColumn(
            false,
            false,
            true,
            true,
            true,
            5 * 2 + 1,
            ImageList
          )}
          {generateLoaderColumn(
            true,
            true,
            false,
            false,
            false,
            5 * 3 + 1,
            ImageList
          )}
          {generateLoaderColumn(
            false,
            false,
            true,
            false,
            false,
            5 * 4 + 1,
            ImageList
          )}
        </div>
      </div>

      {children}
    </section>
  );
}
