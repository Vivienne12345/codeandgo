"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assests/logo.png";
import { links } from "./links";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
    useEffect(() => {
      if (mobileNavOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      // Cleanup function to reset body overflow when component unmounts
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [mobileNavOpen]);

  return (
    <header className="bg-image-top flex justify-between px-8 items-center border-b py-4 scroll-smooth ">
      <div className="flex items-center md:hidden justify-between w-full">
        <Link href={"#home"}>
          <Image src={logo} alt="cg-brand-logo" width={64} height={64} />
        </Link>
        <div className="flex gap-8 items-center">
          <div
            className="p-1 "
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {" "}
            <HamburgerMenuIcon width="32" height="32" />
          </div>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          className="flex justify-end absolute w-screen bg-black bg-opacity-20 z-30 left-0 top-0 h-screen "
          onClick={() => setMobileNavOpen(false)}
        >
          <div
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden p-4 flex flex-col gap-2 text-center w-1/2 right-0 h-full bg-primary"
          >
            <div className="flex flex-col text-xl gap-4 py-4">
              <Link href={"#about"}>About</Link>
              <Link href={"#services"}> Services</Link>
              <div className="btn border">
                <Link href={links.email} target="_blank">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="hidden items-center justify-between w-full lg:flex">
        <Link href={"#home"}>
          <Image src={logo} alt="cg-brand-logo" width={64} height={64} />
        </Link>
        <div className="gap-8 justify-center items-center text-secondary-foreground hidden lg:flex">
          <div className="flex gap-8 justify-center">
            <Link
              href={"#about"}
              className="hover:text-primary-foreground  relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#d3113c] before:origin-center before:h-[4px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#d3113c] after:origin-center after:h-[4px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              About Us
            </Link>
            <Link
              href={"#services"}
              className="hover:text-primary-foreground  relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#d3113c] before:origin-center before:h-[4px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#d3113c] after:origin-center after:h-[4px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              Services
            </Link>
          </div>
          <div className="btn border">
            <Link href={links.email} target="_blank">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
