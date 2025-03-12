"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import { CMP_TITLE } from "@/app/lib/constants";
import { NavMenu } from "@/app/data/navMenu";
import DrawerData from "./Drawerdata";
import Logo from "../common/logo";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <span
        onClick={onClick}
        className="px-3 text-lg font-normal cursor-pointer"
      >
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = (href: string, subItems?: { href: string }[]) => {
    return (
      pathname === href ||
      (subItems && subItems.some((subItem) => pathname === subItem.href))
    );
  };

  return (
    <Disclosure as="nav" className="navbar">
      <div className="container mx-auto px-4 py-4 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-row justify-between w-full">
            <div>
              <Logo/>
            </div>

            <div className="hidden w-4/5 lg:block m-auto text-end">
              <div className="flex space-x-1 justify-end">
                {NavMenu.map((item) => (
                  <div key={item.name} className="relative flex flex-row gap-5">
                    {item.subItems ? (
                      <div
                        className="relative mx-2"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className={classNames(
                            isActive(item.href, item.subItems)
                              ? "underline-links font-semibold"
                              : "text-black",
                            " py-4 text-md hover:opacity-100"
                          )}
                        >
                          {item.name}
                        </Link>

                        {openDropdown === item.name && (
                          <div className="absolute left-0 w-48 bg-white shadow-xl rounded-lg z-50 my-4">
                            <ul>
                              {item.subItems.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <span className="block border-b hover:theme-clr px-4 text-start text-sm text-gray-700 py-2 hover:bg-gray-100 cursor-pointer">
                                      {subItem.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <CustomLink
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span
                          className={classNames(
                            isActive(item.href)
                              ? "underline-links font-semibold text-start"
                              : "text-black",
                            "px-3 py-4 text-lg hover:opacity-100"
                          )}
                        >
                          {item.name}
                        </span>
                      </CustomLink>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="block lg:hidden">
            <Bars3Icon
              className="block h-6 w-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>

          <div className="block lg:hidden">
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <DrawerData setIsOpen={setIsOpen} />
            </Drawer>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
