import { Image } from "@nextui-org/react";
import React from "react";

export default function LogoHeader() {
  return (
    <a href="#" className="nav__logo">
      <Image
        className="nav__logo-icon"
        src="/assets/logo/logo-doan.png"
        alt="Logo"
      />
      Đoàn trường THPT chuyên <br /> Trần Đại Nghĩa
    </a>
  );
}
