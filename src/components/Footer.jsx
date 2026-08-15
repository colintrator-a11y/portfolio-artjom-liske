import { ArrowUp } from "lucide-react";

import { hero, nav } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-semibold tracking-tight">
            {hero.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {hero.role}
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            {hero.location}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start text-sm text-muted transition-colors duration-200 hover:text-accent md:self-auto"
        >
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
