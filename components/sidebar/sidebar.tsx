"use client";

import React from "react";
import { Button, Divider } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, cn } from "@nextui-org/react";
import { ListboxWrapper } from "./listboxwrapper";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Topdown from "../dropdown/topdown";

const sidebarSecondSection = [
  {
    name: "Home",
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    name: "Inbox",
    link: "/",
    icon: <ContactMailOutlinedIcon />,
  },
  {
    name: "Docs",
    link: "/",
    icon: <LibraryBooksOutlinedIcon />,
  },
  {
    name: "Dashboards",
    link: "/",
    icon: <DashboardOutlinedIcon />,
  },
  {
    name: "More",
    link: "/",
    icon: <MoreHorizOutlinedIcon />,
  },
];
const sidebarThirdSection = [
  {
    name: "Everything",
    link: "/",
    icon: <HubOutlinedIcon />,
  },
  {
    name: "Team Space",
    link: "/",
    icon: <GroupsOutlinedIcon />,
  },
  {
    name: "View all Spaces",
    link: "/",
    icon: <DashboardOutlinedIcon />,
  },
  {
    name: "Create Space",
    link: "/",
    icon: <AddOutlinedIcon />,
  },
];

type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | undefined;
type Variant =
  | "solid"
  | "bordered"
  | "light"
  | "flat"
  | "faded"
  | "shadow"
  | undefined;

const Sidebar = () => {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const [selectedVariant, setSelectedVariant] =
    React.useState<Variant>("solid");
  const [selectedColor, setSelectedColor] = React.useState<Color>("default");

  const variants = ["solid", "bordered", "light", "flat", "faded", "shadow"];
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div className="flex flex-col m-0 p-4 border w-max gap-4">
      {/* First Section */}
      <Topdown />

      {/* Divider */}
      <Divider />

      {/* Second Section */}
      <div className="flex flex-col gap-1 mx-3">
        {sidebarSecondSection.map((section, index) => {
          return (
            <Link href={section.link} key={index}>
              <Button
                startContent={section.icon}
                size="sm"
                className="w-full justify-start"
                variant="light"
              >
                {section.name}
              </Button>
            </Link>
          );
        })}
      </div>
      <Divider />

      {/* Third Section */}
      <div className="flex flex-col gap-1 mx-3">
        {sidebarThirdSection.map((section, index) => {
          return (
            <div>
              {section.name === "Team Space" ? (
                <div>
                  <Topdown />
                </div>
              ) : (
                <Link href={section.link} key={index}>
                  <Button
                    startContent={section.icon}
                    size="sm"
                    className="w-full justify-start"
                    variant="light"
                  >
                    {section.name}
                  </Button>
                </Link>
              )}
            </div>
          );
        })}
      </div>
      <Divider />

      {/* Fourth Section */}
      <Divider />
    </div>
  );
};

export default Sidebar;
