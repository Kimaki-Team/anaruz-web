type ProductGridToolbarProps = {
  count: number;
  label?: string;
  showFilters?: boolean;
};

export function ProductGridToolbar({
  count,
  label = "ITEMS",
  showFilters = false,
}: ProductGridToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-anaruz-border">
      <div className="flex flex-wrap items-center gap-4">
        {showFilters && (
          <>
            <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-anaruz-muted">
              FILTER BY
            </span>
            {["TYPE", "COLOR", "SIZE"].map((f) => (
              <select
                key={f}
                className="font-sans text-[10px] tracking-wider uppercase border border-anaruz-border bg-transparent px-3 py-1.5 text-anaruz-brown-dark"
              >
                <option>{f}</option>
              </select>
            ))}
          </>
        )}
        <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-anaruz-muted">
          {count} {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-anaruz-muted">
          SORT BY:
        </span>
        <select className="font-sans text-[10px] tracking-wider uppercase border border-anaruz-border bg-transparent px-3 py-1.5 text-anaruz-brown-dark">
          <option>FEATURED</option>
          <option>PRICE: LOW TO HIGH</option>
          <option>PRICE: HIGH TO LOW</option>
        </select>
      </div>
    </div>
  );
}
