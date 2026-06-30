export function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center bg-anaruz-brown text-white font-sans text-xs"
      >
        1
      </button>
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center border border-anaruz-border font-sans text-xs text-anaruz-muted hover:border-anaruz-brown"
      >
        2
      </button>
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center border border-anaruz-border font-sans text-xs text-anaruz-muted hover:border-anaruz-brown"
      >
        →
      </button>
    </div>
  );
}
