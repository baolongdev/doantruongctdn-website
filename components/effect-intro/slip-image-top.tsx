import React, { CSSProperties, ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
interface SlipImageEffectProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  logo?: string;
  ImageList?: any; // Replace 'any' with the actual type of ImageList
}

export default function SlipImageTopEffect({
  children,
  className,
  style,
  logo,
  ImageList,
}: SlipImageEffectProps) {
  //   console.log(ImageList);
  //   md_assets/activities
  const groupImageRef = useRef<HTMLDivElement>();
  const BackgroundOverlayRef = useRef<HTMLDivElement>();
  const LogoOverlayRef = useRef<HTMLImageElement>();
  const imageRefs = useRef<(HTMLImageElement | null)[]>(
    Array(ImageList?.length).fill(null)
  );

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { duration: 2.5, ease: "expo.out" } });
    t1.to(
      LogoOverlayRef.current,
      {
        scale: 0,
        opacity: 0,
        ease: "power3.inOut",
        duration: 2,
      },
      "=.1"
    )
      .to(groupImageRef.current, {
        top: 0,
        ease: "power3.inOut",
        duration: 2,
      })
      .from(
        imageRefs.current,
        {
          y: "110%",
          opacity: 0.8,
          ease: "power3.inOut",
          duration: 2,
          stagger: {
            amount: 3,
          },
        },
        "=.1"
      )
      .to(groupImageRef.current, {
        opacity: window.innerWidth <= 767 ? 0 : 1,
        display: window.innerWidth <= 767 ? "none" : "block",
      })
      .to(imageRefs.current, {
        left: "random([-40%,-36%,35%,39%])",
        top: "random([-20%,-0%,20%,30%])",
        rotate: "random(-20, 20)",
        scale: "random(0.2, 0.25)",
        cursor: "move",
      })
      .to(
        BackgroundOverlayRef.current,
        {
          opacity: 0,
          ease: "power3.inOut",
          transformOrigin: "center",
        },
        "=-2.8"
      )
      .to(imageRefs.current, {
        pointerEvents: "auto",
      });
    return () => {
      t1.revert();
    };
  }, []);

  useLayoutEffect(() => {
    let events: { [key: string]: { [key: string]: string } } = {
      mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
      },
      touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
      },
    };

    let deviceType = "";

    const isTouchDevice = () => {
      try {
        document.createEvent("ToggleEvent");
        deviceType = "touch";
        return true;
      } catch (e) {
        deviceType = "mouse";
        return false;
      }
    };
    const touchDevice = isTouchDevice(); // Store the touch device result

    Array.from(imageRefs.current).forEach(
      (draggableElem: HTMLImageElement | null) => {
        let moveElement = false;
        let initialX = 0,
          initialY = 0;

        const handleDown = (e: MouseEvent | TouchEvent) => {
          e.preventDefault();
          initialX = touchDevice
            ? (e as TouchEvent).touches[0].clientX
            : (e as MouseEvent).clientX;
          initialY = touchDevice
            ? (e as TouchEvent).touches[0].clientY
            : (e as MouseEvent).clientY;
          moveElement = true;
        };

        const handleMove = (e: MouseEvent | TouchEvent) => {
          if (moveElement && draggableElem) {
            // Add null check for draggableElem
            e.preventDefault();
            let newX = touchDevice
              ? (e as TouchEvent).touches[0].clientX
              : (e as MouseEvent).clientX;
            let newY = touchDevice
              ? (e as TouchEvent).touches[0].clientY
              : (e as MouseEvent).clientY;
            draggableElem.style.top =
              draggableElem.offsetTop - (initialY - newY) + "px";
            draggableElem.style.left =
              draggableElem.offsetLeft - (initialX - newX) + "px";

            initialX = newX;
            initialY = newY;
          }
        };

        const stopMovement = () => {
          moveElement = false;
        };
        draggableElem?.addEventListener(
          events[deviceType].down,
          handleDown as EventListener
        );
        draggableElem?.addEventListener(
          events[deviceType].move,
          handleMove as EventListener
        );
        draggableElem?.addEventListener("mouseleave", stopMovement);
        draggableElem?.addEventListener(events[deviceType].up, stopMovement);
        return () => {
          draggableElem?.removeEventListener(
            events[deviceType].down,
            handleDown as EventListener
          );
          draggableElem?.removeEventListener(
            events[deviceType].move,
            handleMove as EventListener
          );
          draggableElem?.removeEventListener("mouseleave", stopMovement);
          draggableElem?.removeEventListener(
            events[deviceType].up,
            stopMovement
          );
        };
      }
    );
    return () => {};
  }, []);

  return (
    <section className={`${className} overflow-y-hidden`} style={style}>
      <div
        ref={BackgroundOverlayRef}
        className="w-[100%] h-screen bg-white absolute"
      ></div>
      {children}

      <div className="clbinfo__groupImage" ref={groupImageRef}>
        <div className="clbinfo__blur">
          {ImageList?.map((image, index) => (
            <img
              onDoubleClick={() => {
                imageRefs.current[index]?.classList.toggle("imageShow");
              }}
              key={index}
              className={`clbinfo__groupImage-image image${index}`}
              ref={(el) => (imageRefs.current[index] = el)}
              src={`../md_assets/clb-da/${image}`}
              alt=""
            />
          ))}
        </div>
      </div>

      <img
        src={`../md_assets/clb-da/${logo}`}
        className="clbinfo__logo-overlay"
        ref={LogoOverlayRef}
        alt=""
      />
    </section>
  );
}
