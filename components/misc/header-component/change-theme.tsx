import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
export default function ChangeTheme() {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(<SunIcon className="w-5" />);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const newIcon =
      newTheme === "dark" ? (
        <MoonIcon className="w-5" />
      ) : (
        <SunIcon className="w-5" />
      );
    setIcon(newIcon);
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("dark-theme", savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="change-theme" id="theme-button">
      <div onClick={toggleTheme}>{icon}</div>
    </div>
  );
}
