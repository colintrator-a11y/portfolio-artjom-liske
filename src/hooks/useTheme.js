import { useCallback, useEffect, useState } from "react";

/**
 * Dark/light theme held in React state only — no localStorage/sessionStorage.
 * Starts dark (the site's default look) and writes the `.dark` class onto
 * <html> so Tailwind's custom `dark:` variant picks it up.
 */
export function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");

    // Keeps the mobile browser chrome in sync with the page.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0B0B0F" : "#FBFBFD");
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  return { theme, toggleTheme };
}
