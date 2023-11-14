import { useState, useEffect, useCallback } from "react";

type UseDarkModeReturnType = [boolean, () => void];

export const useDarkMode = (): UseDarkModeReturnType => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const darkModeSetting: boolean = localStorage.getItem("dark") === "true";
    setIsDark(darkModeSetting);
    const html = document.querySelector("html");
    if (darkModeSetting) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prevDark) => !prevDark);
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
    localStorage.setItem("dark", String(!isDark));
  }, [isDark]);

  return [isDark, toggleDarkMode];
};
