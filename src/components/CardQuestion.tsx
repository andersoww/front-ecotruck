"use client";

import clsx from "clsx";
import { HTMLAttributes, ReactNode, useState } from "react";

interface CardQuestionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
  question?: string;
  reply?: string;
  count?: string;
}

function Close({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        "lucide lucide-x hover:cursor-pointer stroke-Green-70",
        className
      )}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        "lucide lucide-plus hover:cursor-pointer stroke-white",
        className
      )}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function CardQuestion({
  question,
  reply,
  count,
  className,
}: CardQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        className,
        "flex p-3.5 border border-Grey-15 gap-6 overflow-hidden items-center hover:cursor-pointer duration-500 h-fit border-darkTwo rounded-lg bg-darkBase-950/50 "
      )}
      onClick={() => setIsOpen((state) => !state)}
    >
      <div
        className={clsx("flex flex-col items-center w-full duration-500 h-fit")}
      >
        <div className="flex justify-between w-full items-center">
          <h3
            className={clsx("font-medium text-lg w-[90%]", {
              "text-Green-70": isOpen,
            })}
          >
            {question}
          </h3>
          {!isOpen ? (
            <Plus className="w-5 h-5" />
          ) : (
            <Close className="w-5 h-5" />
          )}
        </div>

        <div
          className={clsx(
            "collapsible-text overflow-hidden rounded transition-all duration-500",
            {
              "max-h-[300px] translate-y-0 opacity-100": isOpen,
              "max-h-0 opacity-0 -translate-y-full": !isOpen,
            }
          )}
        >
          <p>{reply}</p>
        </div>
      </div>
    </div>
  );
}

export { CardQuestion };
