import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./moonIcon";
import { SunIcon } from "./sunIcon";

export default function App() {
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
    >
      Dark mode
    </Switch>
  );
}
