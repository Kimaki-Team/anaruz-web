import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="font-sans text-[10px] tracking-[0.2em] uppercase text-anaruz-muted">
      {items.map((item, i) => (
        <span key={item.label}>
          {i > 0 && <span className="mx-2">•</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-anaruz-brown-dark">
              {item.label}
            </Link>
          ) : (
            <span className="text-anaruz-brown-dark">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
