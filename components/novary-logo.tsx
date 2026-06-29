import Image from "next/image";

import { cn } from "@/lib/utils";

type NovaryLogoProps = {
  variant?: "mark" | "wordmark" | "lockup";
  className?: string;
  priority?: boolean;
};

const logoConfig = {
  mark: {
    src: "/novary-mark.png",
    alt: "Logo Novary",
    width: 512,
    height: 512
  },
  wordmark: {
    src: "/novary-wordmark.png",
    alt: "Novary Digital Solutions",
    width: 1200,
    height: 300
  },
  lockup: {
    src: "/novary-logo-lockup.png",
    alt: "Novary Digital Solutions",
    width: 1200,
    height: 766
  }
};

export function NovaryLogo({
  variant = "mark",
  className,
  priority = false
}: NovaryLogoProps) {
  const logo = logoConfig[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={cn("block select-none object-contain object-center", className)}
    />
  );
}
