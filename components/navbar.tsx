"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { MdLocalPhone, MdEmail } from "react-icons/md";

interface NavbarItemProps {
  label: string;
  active: boolean;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
    flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1
    `,
        active && "text-green"
      )}
    >
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Portfolio",
        active: pathName === "/",
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

  console.log(pathName);

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px]">
        <div className="flex flex-col gap-y-4 p-8 justify-start h-screen">
          <>
            <div>
              <h1 className="font-black lowercase text-3xl pb-0 mb-0">
                Michal Špitálský
              </h1>
              <p className="font-black lowercase text-xl text-green pt-0 mt-0">
                Lossmeril
              </p>
            </div>
            <div className="my-8">
              {routes.map((item) => (
                <NavbarItem key={item.label} {...item} />
              ))}
            </div>
          </>
          <div>
            <h6 className="font-black text-lg lowercase my-2">Contact me</h6>
            <a href="tel:+420123456789" className="text-green pb-2">
              <div className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1">
                <MdLocalPhone />
                <p>+420 123 456 789</p>
              </div>
            </a>
            <Link href="tel:+420123456789" className="text-green pb-2">
              <div className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1">
                <MdEmail />
                <p>michal@lossmeril.art</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <main className="h-full flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
};

export default Navbar;
