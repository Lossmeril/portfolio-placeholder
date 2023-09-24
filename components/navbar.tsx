"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  active: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
    flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1
    `,
        active && "text-green-500"
      )}
    >
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Portfolio",
        active: pathName != "/film",
        href: "/",
      },
      {
        label: "Films",
        active: pathName === "/film",
        href: "/film",
      },
    ],
    []
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <div className="flex flex-col gap-y-4 px-5 py-4">
          <h1>Michal Špitálský</h1>
          <p>Lossmeril</p>
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
