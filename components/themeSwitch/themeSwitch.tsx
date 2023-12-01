"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./moonIcon";
import { SunIcon } from "./sunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  //   Handle theme change
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={handleThemeChange}
    >
      Dark mode
    </Switch>
  );
}
