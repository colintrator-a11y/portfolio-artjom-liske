/**
 * Tells the shared notifier that someone opened the site.
 *
 * The notifier is its own service, shared by every portfolio, and it holds the
 * Telegram credentials - nothing secret is sent from here, and the endpoint
 * below is deliberately public. It only accepts posts from origins on its own
 * allow-list, so publishing the address costs nothing.
 *
 * The default is baked in on purpose. Reading it from an environment variable
 * meant an unset variable silently tree-shook this whole module out of the
 * bundle, which is a confusing way to discover a missing config value.
 * VITE_NOTIFY_URL still overrides it when you want to aim somewhere else.
 *
 * Fires once per browser tab session, never in development, and always on idle
 * so it cannot delay first paint.
 */

const ENDPOINT = import.meta.env.VITE_NOTIFY_URL || 'https://portfolio-notify.duckdns.org/api/notify'
const SESSION_KEY = 'portfolio:visit-notified'

function alreadyNotified() {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return true
    sessionStorage.setItem(SESSION_KEY, '1')
    return false
  } catch {
    // Private mode or storage disabled - fall through and send once per load.
    return false
  }
}

function send() {
  const payload = JSON.stringify({
    path: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || '',
    language: navigator.language || '',
  })

  // keepalive lets the request survive a visitor who leaves immediately.
  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // A blocked or failed ping must never surface to the visitor.
  })
}

export default function notifyVisit() {
  if (!ENDPOINT) return
  if (import.meta.env.DEV) return
  if (typeof window === 'undefined') return
  if (alreadyNotified()) return

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(send, { timeout: 3000 })
  } else {
    window.setTimeout(send, 1200)
  }
}
