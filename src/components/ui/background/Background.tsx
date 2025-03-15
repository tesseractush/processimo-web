
import React from "react";
import { cn } from "@/lib/utils";

type GradientProps = {
  colorStart: string;
  colorEnd: string;
  display: boolean;
  height: number;
  opacity: number;
  tilt: number;
  width: number;
  x: number;
  y: number;
};

type DotsProps = {
  color: string;
  display: boolean;
  opacity: number;
  size: string;
};

type GridProps = {
  color: string;
  display: boolean;
  height: string;
  opacity: number;
  width: string;
};

type LinesProps = {
  display: boolean;
  opacity: number;
  size: string;
};

type MaskProps = {
  cursor: boolean;
};

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: string;
  mask?: MaskProps;
  gradient?: GradientProps;
  dots?: DotsProps;
  grid?: GridProps;
  lines?: LinesProps;
}

const Background = ({
  className,
  position = "relative",
  mask,
  gradient,
  dots,
  grid,
  lines,
  ...props
}: BackgroundProps) => {
  return (
    <div
      className={cn("overflow-hidden", position === "absolute" ? "absolute inset-0" : "relative", className)}
      {...props}
    >
      {/* Gradient */}
      {gradient?.display && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${gradient.tilt}deg, 
              ${getColorValue(gradient.colorStart)} ${gradient.opacity}%, 
              ${getColorValue(gradient.colorEnd)} ${100 - gradient.opacity}%)`,
            width: `${gradient.width}%`,
            height: `${gradient.height}%`,
            top: `${gradient.y}%`,
            left: `${gradient.x}%`,
            transform: `translate(-${gradient.x}%, -${gradient.y}%)`,
          }}
        />
      )}

      {/* Dots */}
      {dots?.display && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${getColorValue(dots.color)} 1px, transparent 0)`,
            backgroundSize: `${dots.size}px ${dots.size}px`,
            opacity: dots.opacity / 100,
          }}
        />
      )}

      {/* Grid */}
      {grid?.display && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, ${getColorValue(grid.color)} 1px, transparent 1px),
              linear-gradient(to bottom, ${getColorValue(grid.color)} 1px, transparent 1px)`,
            backgroundSize: `${parseUnit(grid.width)} ${parseUnit(grid.height)}`,
            opacity: grid.opacity / 100,
          }}
        />
      )}

      {/* Lines */}
      {lines?.display && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${getColorValue("neutral-alpha-medium")} 1px, transparent 1px)`,
            backgroundSize: `${lines.size}px ${lines.size}px`,
            opacity: lines.opacity / 100,
          }}
        />
      )}

      {/* Cursor mask */}
      {mask?.cursor && (
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80" />
      )}
    </div>
  );
};

// Helper functions to convert semantic color values to actual colors
function getColorValue(colorName: string): string {
  const colorMap: Record<string, string> = {
    "accent-solid-strong": "#9b87f5",
    "static-transparent": "transparent",
    "accent-on-background-medium": "rgba(155, 135, 245, 0.4)",
    "neutral-alpha-medium": "rgba(142, 145, 150, 0.2)",
  };

  return colorMap[colorName] || colorName;
}

// Parse CSS unit strings like var(--static-space-32) to values
function parseUnit(value: string): string {
  if (value.includes("var(--static-space-")) {
    // Extract the number and convert to pixels
    const num = value.match(/var\(--static-space-(\d+)\)/)?.[1];
    return num ? `${num}px` : value;
  }
  return value;
}

export { Background };
