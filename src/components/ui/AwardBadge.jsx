import { Award } from "lucide-react";
import { award } from "../../data/content";

/** "Preferred Freelancer of the Quarter" — small, factual, no fake metrics. */
export default function AwardBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent ${className}`}
    >
      <Award size={14} strokeWidth={2} aria-hidden="true" />
      {award}
    </span>
  );
}
