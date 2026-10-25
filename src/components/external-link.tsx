import { ArrowUpRight } from "lucide-react";

export function ExternalArrow({ size = 16 }: { size?: number }) {
  return (
    <ArrowUpRight
      size={size}
      strokeWidth={1.8}
      className="inline-block shrink-0 translate-y-0 align-baseline transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      aria-hidden="true"
    />
  );
}
