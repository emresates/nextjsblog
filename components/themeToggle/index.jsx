"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    let check = userPref === "dark" ? "dark" : "light";
    setTheme(check);
    if (userPref) {
      if (check == "dark") {
        document.documentElement.classList.add("dark");
        setTheme(check);
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      let check = mediaQuery.matches ? "dark" : "light";
      setTheme(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    if (theme === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex h-5 w-10 cursor-pointer items-center justify-between rounded-xl bg-black"
    >
      <Image src="/moon.png" alt="" width={18} height={18} />
      <span
        className={`absolute h-4 w-4 rounded-3xl  transition-all ${
          theme === "dark" ? "left-0 bg-gray-300" : "left-6 bg-white"
        }`}
      />
      <Image src="/sun.png" alt="" width={22} height={22} />
    </div>
  );
}

export default ThemeToggle;
