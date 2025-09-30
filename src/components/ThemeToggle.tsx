"use client";

import * as React from "react";
import { FaMoon, FaSun, FaLaptop, FaPalette } from "react-icons/fa";
import { useTheme } from "next-themes";

import { Button } from "@/components/common/Button";
import { DropdownMenu } from "@/components/common/DropdownMenu";
import uiText from "@/data/uiText.json";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only render the toggle after mounting to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" />;
  }

  return (
    <DropdownMenu
      trigger={
        <Button variant="ghost" size="icon">
          {theme === "dark" && <FaMoon className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "light" && <FaSun className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "blue" && <FaPalette className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "matrix" && <FaLaptop className="h-[1.2rem] w-[1.2rem]" />}
          {(theme === "system" || !theme) && (
            <FaLaptop className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">{uiText.ariaLabels.toggleTheme}</span>
        </Button>
      }
      align="end"
    >
      <div className="space-y-1">
        <div className="flex items-center px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm cursor-pointer" onClick={() => setTheme("light")}>
          <FaSun className="mr-2 h-4 w-4" />
          {uiText.themes.light}
        </div>
        <div className="flex items-center px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm cursor-pointer" onClick={() => setTheme("dark")}>
          <FaMoon className="mr-2 h-4 w-4" />
          {uiText.themes.dark}
        </div>
        <div className="flex items-center px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm cursor-pointer" onClick={() => setTheme("blue")}>
          <FaPalette className="mr-2 h-4 w-4" />
          {uiText.themes.blue}
        </div>
        <div className="flex items-center px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm cursor-pointer" onClick={() => setTheme("matrix")}>
          <FaLaptop className="mr-2 h-4 w-4" />
          {uiText.themes.matrix}
        </div>
        <div className="flex items-center px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm cursor-pointer" onClick={() => setTheme("system")}>
          <FaLaptop className="mr-2 h-4 w-4" />
          {uiText.themes.system}
        </div>
      </div>
    </DropdownMenu>
  );
}
