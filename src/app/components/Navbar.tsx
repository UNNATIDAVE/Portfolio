"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLogo from "../../../public/assets/navLogo.png";
import Image from "next/image";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/#skills",
    name: "SKILLS",
  },
  {
    path: "/#projects",
    name: "PROJECTS",
  },
  {
    path: "/resume",
    name: "RESUME",
  },
  {
    path: "/#contact",
    name: "CONTACT",
  }
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className=" p-[0.4rem] rounded-lg sticky ">
      <nav className="flex gap-2 relative justify-start w-full rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          if (index == 0) {
            return (
              <Link
                key={item.path}
                className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-black-400" : "text-black-100"
                  }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>
                  <Image
                    src={NavLogo}
                    width='30'
                    height='25'
                    alt="Logo"
                  /></span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-red-500/50 rounded-md -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }} />
                )}
              </Link>
            )
          } else {
            return (

              <Link
                key={item.path}
                className={`px-4 py-2 rounded-md text-sm relative lg:text-base no-underline duration-300 ease-in ${isActive ? "text-black-400" : "text-black-100"
                  }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-red-500/50 rounded-md "
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%"
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }} />
                )}
              </Link>
            );
          }
        })}
      </nav>
    </div>
  );
}