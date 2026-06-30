import { Star } from "lucide-react";

export function StarRating({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.floor(rating)
                ? "fill-anaruz-brown text-anaruz-brown"
                : i < rating
                  ? "fill-anaruz-brown/50 text-anaruz-brown"
                  : "text-anaruz-border"
            }`}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-sans text-[10px] text-anaruz-muted tracking-wide">
        ({reviewCount} REVIEWS)
      </span>
    </div>
  );
}
