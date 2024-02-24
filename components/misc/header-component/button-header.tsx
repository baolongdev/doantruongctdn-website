import React from "react";
import ChangeTheme from "./change-theme";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface Props {
  toggleMenu: () => void;
}

export default function ButtonHeader(props: Props) {
  const { toggleMenu } = props
  return <div className="nav__btns">
    <ChangeTheme />
    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
      <Bars3Icon className="w-5" />
    </div>
  </div>
}
