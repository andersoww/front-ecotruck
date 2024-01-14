"use client";

import { SmoothScroll } from "@/utils/SmoothScroll";
import clsx from "clsx";

function MenuItem({
  className,
  status,
  handleStatus,
}: {
  className: string;
  status?: string;
  handleStatus?: (value: string) => void;
}) {
  return (
    <ul className={className}>
      {["Início", "Sobre nós", "Serviços", "Contatos"].map((item, index) => (
        <li
          key={index}
          className={clsx(
            "text-[#F9F9F9] font-semibold p-3 rounded-md hover:cursor-pointer item",
            {
              "bg-Grey-15": status === item,
            }
          )}
        >
          <a
            href={`#${item}`}
            onClick={(e) => {
              SmoothScroll(e);
              // handleStatus(item);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { MenuItem };
