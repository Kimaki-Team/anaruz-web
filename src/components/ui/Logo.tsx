import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
};

const heights = {
  sm: 72,
  md: 88,
  lg: 104,
};

export function Logo({ size = "md", align = "center" }: LogoProps) {
  const height = heights[size];

  return (
    <Link
      href="/"
      className={`inline-block ${align === "left" ? "" : "mx-auto"}`}
    >
      <Image
        src="/logo.png"
        alt="ANARUZ"
        width={Math.round(height * 1.28)}
        height={height}
        className="object-contain object-left"
        style={{ height, width: "auto" }}
        priority
        unoptimized
      />
    </Link>
  );
}
