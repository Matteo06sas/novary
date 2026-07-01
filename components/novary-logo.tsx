import { cn } from "@/lib/utils";

type NovaryLogoProps = {
  variant?: "mark" | "wordmark" | "lockup";
  className?: string;
  priority?: boolean;
};

const logoConfig = {
  mark: {
    src: "/logo-mark.svg",
    alt: "Logo Novary"
  },
  wordmark: {
    src: "/logo-wordmark.svg",
    alt: "Novary"
  },
  lockup: {
    src: "/logo-full.svg",
    alt: "Novary Digital Solutions"
  }
};

export function NovaryLogo({
  variant = "mark",
  className,
  priority = false
}: NovaryLogoProps) {
  const logo = logoConfig[variant];

  return (
    // eslint-disable-next-line @next/next/no-img-element -- vector logo, no benefit from next/image raster optimization
    <img
      src={logo.src}
      alt={logo.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      className={cn("block select-none object-contain object-center", className)}
    />
  );
}
