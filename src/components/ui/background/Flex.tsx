
import React from "react";
import { cn } from "@/lib/utils";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: boolean;
  minHeight?: number;
  position?: "relative" | "absolute" | "fixed" | "sticky" | "static";
  radius?: "none" | "xs" | "s" | "m" | "l" | "xl" | "full";
  children?: React.ReactNode;
}

const Flex = ({
  className,
  fill = false,
  minHeight,
  position = "relative",
  radius = "none",
  children,
  ...props
}: FlexProps) => {
  const radiusMap = {
    none: "rounded-none",
    xs: "rounded-sm",
    s: "rounded",
    m: "rounded-md",
    l: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "flex",
        fill && "w-full h-full",
        radiusMap[radius],
        position,
        className
      )}
      style={{
        minHeight: minHeight ? `${minHeight}rem` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { Flex };
