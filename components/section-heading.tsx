import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left"
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <Badge variant="outline">{eyebrow}</Badge>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {children}
      </p>
    </FadeIn>
  );
}
