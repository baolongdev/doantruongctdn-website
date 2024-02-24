import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TabMain } from "../../../store/tab-main";
import ChangeTheme from "./change-theme";
import { MenuIcon } from "@heroicons/react/24/outline";
import NavMenu from "./nav-menu";
import ButtonHeader from "./button-header";
import LogoHeader from "./logo_header";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight,
          sectionTop = (current as HTMLElement).offsetTop - 58,
          sectionId = current.id;

        // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        //   setActiveSection(sectionId);
        // }
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            ?.classList.add("active-link");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            ?.classList.remove("active-link");
        }
      });
    };

    const handleScrollUp = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (window.scrollY >= 400) {
        scrollUp?.classList.add("show-scroll");
      } else {
        scrollUp?.classList.remove("show-scroll");
      }
    };
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollUp);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <LogoHeader />
        <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} tabItems={TabMain} />
        <ButtonHeader toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}
