"use client";

import { FloatingNav } from "../components/ui/floating-navbar";
import {
  IconBook2,
  IconBubbleText,
  IconHome,
  IconLayout,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconLayout className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Courses",
      link: "#courses",
      icon: <IconBook2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "FAQ",
      link: "#faq",
      icon: (
        <IconBubbleText className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
