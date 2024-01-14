"use client";

import { EffectRipple } from "@/components/Effects";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variants?: "primary" | "secondary";
}

function Button({
  className,
  variants = "primary",
  children,
  ...rest
}: ButtonProps) {
  return (
    <EffectRipple className={className}>
      <button
        type="button"
        className={clsx(
          "py-4 px-3 rounded-md text-sm font-medium relative overflow-hidden min-w-max",
          {
            "bg-goldPoppy-600": variants === "primary",
            "border border-[#323539] bg-[#252525]": variants === "secondary",
          }
        )}
        {...rest}
      >
        {children}
      </button>
    </EffectRipple>
  );
}

export { Button };
