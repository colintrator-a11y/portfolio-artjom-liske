import { Award } from "lucide-react";
import { useI18n } from "../../i18n";

/** "Preferred Freelancer of the Quarter" — small, factual, no fake metrics. */
export default function AwardBadge({ className = "" }) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent ${className}`}
    >
      <Award size={14} strokeWidth={2} aria-hidden="true" />
      {t.award}
    </span>
  );
}
