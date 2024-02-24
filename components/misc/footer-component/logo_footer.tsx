import { Image } from "@nextui-org/react";
import React from "react";

export default function LogoFooter() {
  return (
    <a href="#" className="footer__logo">
      <Image
        src="/assets/logo/logo-doan-truong-chu.png"
        className="footer__logo-icon"
        alt=""
      />
    </a>
  );
}
