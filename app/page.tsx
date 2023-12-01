import React from "react";
import { Button, Link } from "@nextui-org/react";

// Theme Switcher
import ThemeSwitch from "./../components/themeSwitch/themeSwitch";

const Home = () => {
  return (
    <div className="flex gap-5">
      Home page
      <br />
      {/* Theme Switcher */}
      <ThemeSwitch />
      <br />
      {/* Button for editor view */}
      <Link href="/editor">
        <Button size="sm">Editor</Button>
      </Link>
      {/* Button for not found view */}
      <Link href="/not-found">
        <Button size="sm">Not Found</Button>
      </Link>
    </div>
  );
};

export default Home;
