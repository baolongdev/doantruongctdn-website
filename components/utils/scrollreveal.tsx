import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const ScrollRevealComponent = ({ children }: Props) => {
  useEffect(() => {
    if (process.browser) {
      // Only run on the client side

      // Import ScrollReveal dynamically
      import("scrollreveal").then((ScrollReveal) => {
        // Initialize ScrollReveal
        const sr = ScrollReveal.default({
          origin: "top",
          distance: "60px",
          duration: 2500,
          delay: 400,
        });

        // Configure and apply ScrollReveal to elements
        sr.reveal(".home__data, .section__title-center", {});
        sr.reveal(".home__img, .card__title, .brainstorm__start-button", {
          delay: 500,
        });
        sr.reveal(".home__social, .brainstorm__title", { delay: 600 });
        sr.reveal(".about__img, .contact__box, ", { origin: "left" });
        sr.reveal(".about__data, .contact__form", {
          origin: "right",
          interval: 100,
        });
        sr.reveal(".activities__card, .clbdas__card", { interval: 100 });
        sr.reveal(".footer__logo");
        sr.reveal(".footer__title, .footer__data", { origin: "left" });
        sr.reveal(".footer__copy", { origin: "bottom" });
        // doantruong
        sr.reveal(".doantruong__about-title", { reset: true, desktop: false });
        sr.reveal(".doantruong__about-content", {
          origin: "left",
          delay: 500,
          reset: true,
          desktop: false,
        });
        sr.reveal(".doantruong__about__mobile-photo", {
          origin: "bottom",
          delay: 550,
          reset: true,
          desktop: false,
        });
        // banchaphanh
        sr.reveal(".bch__data-img", { origin: "left", delay: 800});
        sr.reveal(".bch__data-text", { origin: "right", delay: 800 });
        // sr.reveal(".doantruong__about-content", {
        //   origin: "left",
        //   delay: 500,
        //   reset: true,
        //   desktop: false,
        // });
        // sr.reveal(".doantruong__about__mobile-photo", {
        //   origin: "bottom",
        //   delay: 550,
        //   reset: true,
        //   desktop: false,
        // });

        return () => {
          sr.destroy();
        };
      });
    }
  }, []);

  return <div>{children}</div>;
};

export default ScrollRevealComponent;
