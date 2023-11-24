import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TabMain } from "../../store/tab-main";
import ChangeTheme from "./change-theme";
import { MenuIcon } from "@heroicons/react/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
        <a href="#" className="nav__logo">
          <img
            src="/assets/logo/logo-doan.png"
            className="nav__logo-icon"
            alt=""
          />
          Đoàn trường THPT chuyên <br /> Trần Đại Nghĩa
        </a>
        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {TabMain.map((tab, index) => (
              <li className="nav__item" key={index}>
                <a
                  href={`${tab.link}`}
                  className={`nav__link ${index === 0 ? "active-link" : ""} ${
                    tab.class
                  }`}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__btns">
          <ChangeTheme />
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <MenuIcon className="w-5" />
          </div>
        </div>
      </nav>
    </header>
  );
}
