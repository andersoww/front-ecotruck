"use client";

import { SmoothScroll } from "@/utils/SmoothScroll";
import { ChevronRight } from "lucide-react";

function ItemFooter() {
  return (
    <>
      {["Início", "Sobre nós", "Serviços", "FAQ"].map((item, index) => {
        return (
          <a
            key={index}
            className="flex items-center gap-1 hover:cursor-pointer"
            href={`#${item}`}
            onClick={(e) => SmoothScroll(e)}
          >
            <ChevronRight className="w-6 h-6 text-[#979AA0]" />

            <p className="text-[#979AA0] font-medium">{item}</p>
          </a>
        );
      })}
    </>
  );
}

export { ItemFooter };
