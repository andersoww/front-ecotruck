"use client";

import { Button } from "@/components/Button";
import { LogoImg } from "@/components/LogoImg";
import { MenuItem } from "@/components/MenuItem";
import ReactPopover from "@/components/PopOver";
import clsx from "clsx";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

function NavBar() {
  const { push } = useRouter();
  return (
    <header className="w-full fixed top-0 z-50 border-b border-[#323539]">
      <div className={clsx("flex justify-center w-full px-4 relative")}>
        <div className="bg-[url('/repeated-square-dark.webp')] absolute w-full h-full z-10" />
        <div className="flex justify-between py-6 w-full max-w-7xl items-center z-20">
          <div className="flex items-center">
            <LogoImg className="w-[120px] hover:cursor-pointer" />
            <MenuItem className="gap-4 flex max-md:hidden ml-8" />
          </div>

          <ReactPopover trigger="click">
            <Button className="w-12 h-12 flex justify-center items-center">
              <Menu />
            </Button>
          </ReactPopover>

          <div className="flex max-md:hidden">
            <Button
              onClick={() => push(process.env.NEXT_PUBLIC_URL_FRONT_OPERATING!)}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export { NavBar };
