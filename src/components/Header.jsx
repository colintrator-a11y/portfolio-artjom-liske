import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

import { useContent } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
// Small dedicated crop — the header paints above the fold, so it shouldn't
// pull the full-size About portrait just to fill a 36px circle.
import logo from "../assets/avatar-logo.webp";
import { useScrolled } from "../hooks/useScrolled";
import { useActiveSection } from "../hooks/useActiveSection";
import Button from "./ui/Button";

import { navIds } from "../data/content";

const SECTION_IDS = navIds;

/** Portrait mark + name. */
function Logo({ t }) {
  return (
    <a
      href="#top"
      aria-label={t.ui.backToTopAria}
      className="group flex items-center gap-2.5"
    >
      {/* Decorative: the link's aria-label and the name beside it already
          identify this, so an alt here would just repeat itself. */}
      <img
        src={logo}
        alt=""
        width={128}
        height={128}
        // Eager + high priority: it's the first thing painted in the header.
        fetchPriority="high"
        decoding="async"
        className="h-9 w-9 shrink-0 rounded-full border border-line-strong object-cover transition-colors duration-200 group-hover:border-accent"
      />
      <span className="font-display text-sm font-semibold tracking-tight max-sm:sr-only">
        Artjom Liske
      </span>
    </a>
  );
}

/** Desktop nav link with an underline that grows from the left on hover/active. */
function NavLink({ id, label, active, onClick }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={`group relative py-1 text-sm transition-colors duration-200 ${
        active ? "text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ease-out ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}

function ThemeToggle({ theme, onToggle, t }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? t.ui.toLightMode : t.ui.toDarkMode}
      aria-pressed={isDark}
      className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      {isDark ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  );
}

export default function Header({ theme, toggleTheme }) {
  const { t, nav } = useContent();
  const scrolled = useScrolled(24);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  // Lock body scroll and wire up Escape while the mobile drawer is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Skip link — first stop for keyboard and screen-reader users. */}
      <a
        href="#main"
        className="sr-only rounded-full bg-accent-strong px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
      >
        {t.ui.skipToContent}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1100px] items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
          <Logo t={t} />

          <nav
            aria-label={t.ui.navMain}
            className="hidden items-center gap-8 md:flex"
          >
            {nav.map((item) => (
              <NavLink key={item.id} {...item} active={active === item.id} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="max-md:hidden" />

            <ThemeToggle theme={theme} onToggle={toggleTheme} t={t} />

            <Button href="#contact" size="sm" className="max-md:hidden">
              {t.ui.hireMe}
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.ui.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent md:hidden"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <m.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label={t.ui.closeMenu}
              tabIndex={-1}
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm"
            />

            <m.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={t.ui.siteMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col border-l border-line bg-surface p-6"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-sm font-semibold">
                  {t.ui.menu}
                </span>
                <button
                  type="button"
                  autoFocus
                  onClick={() => setOpen(false)}
                  aria-label={t.ui.closeMenu}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label={t.ui.navMobile} className="flex flex-col gap-1">
                {nav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 font-display text-xl font-medium tracking-tight transition-colors ${
                      active === item.id
                        ? "bg-accent-soft text-accent"
                        : "text-ink hover:bg-surface-2"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <LanguageSwitcher className="mt-8 w-full justify-center" />

              <Button
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 w-full"
              >
                {t.ui.hireMe}
              </Button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
