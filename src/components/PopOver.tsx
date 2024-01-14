"use client";
import { Button } from "@/components/Button";
import { SmoothScroll } from "@/utils/SmoothScroll";
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface IPopover extends PropsWithChildren {
  trigger: "click" | "hover";
  content?: ReactNode;
  status?: string;
  handleStatus?: (value: string) => void;
}

function ReactPopover({
  children,
  content,
  trigger = "click",
  status,
  handleStatus,
}: IPopover) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    }
  };

  function handleClickOutside(event: any) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShow(false);
    }
  }

  function Item({
    children,
    href,
    onClick,
    ...rest
  }: PropsWithChildren & { href: string; onClick: () => void }) {
    return (
      <a
        href={href}
        onClick={(e) => {
          onClick();
          SmoothScroll(e);

          setShow(false);
        }}
      >
        <li
          className="text-[#f9f9f9] font-medium text-sm hover:bg-darkBase-900 p-3 rounded-md hover:cursor-pointer transition-all"
          {...rest}
        >
          {children}
        </li>
      </a>
    );
  }

  useEffect(() => {
    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
    >
      <div onClick={() => setShow(!show)} className="hidden max-md:flex">
        {children}
      </div>
      <div
        hidden={!show}
        className="h-fit absolute z-50 transition-all border border-darkTwo bg-darkBase-950 rounded-lg w-[350px] right-4 mt-2 lg:hidden"
      >
        <div className="">
          {content}

          <div className="flex items-center justify-between px-2 py-1">
            <h1 className="px-2 py-3 text-goldPoppy-600 font-medium">Menu</h1>
            <Button className="[&>button]:text-xs [&>button]:py-3">
              Log In
            </Button>
          </div>
          <div className="w-full h-0.5 bg-darkBase-900" />
          <ul className="flex flex-col p-2">
            {["Início", "Sobre nós", "Serviços", "Contatos"].map(
              (item, index) => {
                return (
                  <Item href={`#${item}`} key={index} onClick={() => {}}>
                    {item}
                  </Item>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReactPopover;
