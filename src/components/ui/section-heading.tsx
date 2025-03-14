
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "space-y-4 my-10",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      {badge && (
        <div className={cn("flex", align === "center" && "justify-center")}>
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
