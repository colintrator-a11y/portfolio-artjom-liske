/**
 * A second set of drawn scenes for the reference builds.
 *
 * These lean on the templates in `ProjectScenes.jsx` rather than drawing from
 * scratch: an admin console, a code editor with a test run, and a three-phone
 * flow cover almost every build worth showing, and reusing them keeps the whole
 * set reading as one product family instead of twenty unrelated pictures.
 *
 * Only the data differs per scene, which is also what keeps this file honest:
 * the numbers and rows are illustrative of the kind of screen each build
 * produces, drawn at the same fidelity as the rest of the set.
 */

import { AdminApp, AppBar, Card, CodeConsole, PH, Phone, Pill, T, phoneX } from './ProjectScenes'
import { BRAND, C } from './visualTokens'

/* --------------------------------------------------------------------------
   Admin consoles
   -------------------------------------------------------------------------- */

/* Vue.js front end on a NestJS API: the sales pipeline it was built for. */
function VueCrm() {
  return (
    <AdminApp
      chromeLabel="Sales portal"
      appName="Pipeline"
      monogram="PL"
      accent="#c3002f"
      nav={['Dashboard', 'Leads', 'Accounts', 'Deals', 'Activities', 'Reports']}
      active="Deals"
      title="Deals"
      subtitle="One pipeline shared by four regional teams"
      action="New deal"
      stats={[
        ['OPEN PIPELINE', '€ 1.84M', '62 deals', '#c3002f'],
        ['WON THIS QUARTER', '€ 610k', '+18%', C.green],
        ['AVERAGE CYCLE', '34 days', '−6 days', C.amber],
      ]}
      columns={['DEAL', 'ACCOUNT', 'STAGE', 'OWNER', 'VALUE', 'STATUS']}
      colX={[14, 96, 196, 262, 322, 384]}
      rows={[
        ['#D-4192', 'Hoffmann GmbH', 'Negotiation', 'M. Braun', '€ 128,000', ['HOT', '#c3002f']],
        ['#D-4188', 'Nordlicht Group', 'Proposal', 'A. Keller', '€ 74,500', ['OPEN', C.muted]],
        ['#D-4181', 'Bergmann & Co', 'Discovery', 'L. Vogt', '€ 41,200', ['OPEN', C.muted]],
        ['#D-4176', 'Rheinwerk AG', 'Closed won', 'M. Braun', '€ 96,800', ['WON', C.green]],
        ['#D-4170', 'Falkenberg Immobilien', 'Qualifying', 'A. Keller', '€ 22,400', ['NEW', BRAND.react]],
        ['#D-4166', 'Meissner Logistik', 'Negotiation', 'L. Vogt', '€ 58,300', ['HOT', '#c3002f']],
      ]}
    />
  )
}

/* Laravel behind a subscription business: plans, invoices and dunning. */
function LaravelBilling() {
  const A = BRAND.laravel
  return (
    <AdminApp
      chromeLabel="Billing console"
      appName="Subscribe"
      monogram="SB"
      accent={A}
      nav={['Overview', 'Subscriptions', 'Invoices', 'Plans', 'Dunning', 'Settings']}
      active="Subscriptions"
      title="Subscriptions"
      subtitle="Plans, proration and failed-payment recovery"
      action="New plan"
      stats={[
        ['MONTHLY RECURRING', '€ 48.9k', '412 active', A],
        ['FAILED PAYMENTS', '€ 2,140', '9 retrying', C.red],
        ['CHURN THIS MONTH', '1.7%', '−0.4pt', C.green],
      ]}
      columns={['CUSTOMER', 'PLAN', 'SEATS', 'RENEWS', 'MRR', 'STATUS']}
      colX={[14, 118, 208, 258, 322, 384]}
      rows={[
        ['Hoffmann GmbH', 'Business', '24', '02 Sep', '€ 480', ['ACTIVE', C.green]],
        ['Nordlicht Group', 'Team', '8', '05 Sep', '€ 160', ['ACTIVE', C.green]],
        ['Bergmann & Co', 'Business', '31', '09 Sep', '€ 620', ['DUNNING', C.red]],
        ['Rheinwerk AG', 'Enterprise', '120', '14 Sep', '€ 2,400', ['ACTIVE', C.green]],
        ['Falkenberg Immobilien', 'Team', '6', '18 Sep', '€ 120', ['TRIAL', C.amber]],
        ['Meissner Logistik', 'Business', '19', '21 Sep', '€ 380', ['PAUSED', C.muted]],
      ]}
    />
  )
}

/* Stock control in plain PHP: what is on the shelf and what is about to run out. */
function PhpInventory() {
  const A = BRAND.php
  return (
    <AdminApp
      chromeLabel="Warehouse"
      appName="Stock"
      monogram="ST"
      accent={A}
      nav={['Dashboard', 'Products', 'Movements', 'Suppliers', 'Purchase orders', 'Reports']}
      active="Products"
      title="Stock on hand"
      subtitle="Two warehouses, one count, reorder points that fire"
      action="Receive stock"
      stats={[
        ['STOCK VALUE', '€ 312k', '1,842 SKUs', A],
        ['BELOW REORDER', '37', 'SKUs to reorder', C.red],
        ['MOVEMENTS TODAY', '214', 'in and out', C.green],
      ]}
      columns={['SKU', 'PRODUCT', 'BERLIN', 'HAMBURG', 'REORDER', 'STATUS']}
      colX={[14, 82, 214, 268, 322, 384]}
      rows={[
        ['MB-1140', 'Oak shelf 120cm', '84', '31', '40', ['OK', C.green]],
        ['MB-1152', 'Walnut door panel', '12', '4', '30', ['LOW', C.red]],
        ['MB-1163', 'Steel bracket set', '640', '210', '150', ['OK', C.green]],
        ['MB-1178', 'Brass handle', '26', '0', '60', ['LOW', C.red]],
        ['MB-1184', 'Glass insert 60cm', '95', '48', '50', ['OK', C.green]],
        ['MB-1190', 'Hinge, soft close', '18', '9', '80', ['ORDERED', C.amber]],
      ]}
    />
  )
}

/* WordPress running a paid membership: tiers, renewals and gated content. */
function WpMembership() {
  return (
    <AdminApp
      chromeLabel="wp-admin"
      appName="Members"
      monogram="M"
      accent={BRAND.wp}
      sidebarFill={BRAND.wpSidebar}
      sidebarInk={BRAND.wpSidebarInk}
      sidebarActiveFill="#2c3338"
      nav={['Dashboard', 'Members', 'Tiers', 'Content rules', 'Payments', 'Emails']}
      active="Members"
      title="Members"
      subtitle="Three tiers, gated posts and automatic renewals"
      action="Add member"
      stats={[
        ['ACTIVE MEMBERS', '1,284', '+62 new', BRAND.wp],
        ['RENEWALS DUE', '148', 'next 7 days', C.amber],
        ['GATED POSTS', '312', 'across 3 tiers', C.green],
      ]}
      columns={['MEMBER', 'TIER', 'JOINED', 'RENEWS', 'PAID', 'STATUS']}
      colX={[14, 126, 208, 262, 322, 384]}
      rows={[
        ['g.hoffmann@…', 'Professional', '04 Mar', '04 Sep', '€ 180', ['ACTIVE', C.green]],
        ['a.nolte@…', 'Standard', '11 Apr', '11 Sep', '€ 90', ['ACTIVE', C.green]],
        ['l.bergmann@…', 'Professional', '02 Feb', '02 Sep', '€ 180', ['EXPIRING', C.amber]],
        ['m.lorenz@…', 'Enterprise', '19 Jan', '19 Sep', '€ 540', ['ACTIVE', C.green]],
        ['s.falkenberg@…', 'Standard', '27 Jun', '27 Sep', '€ 90', ['LAPSED', C.red]],
        ['r.meissner@…', 'Professional', '08 May', '08 Sep', '€ 180', ['ACTIVE', C.green]],
      ]}
    />
  )
}

/* WooCommerce as a marketplace: many sellers, one checkout, split payouts. */
function WooMarketplace() {
  const A = BRAND.woo
  return (
    <AdminApp
      chromeLabel="Marketplace admin"
      appName="Vendors"
      monogram="V"
      accent={A}
      nav={['Dashboard', 'Vendors', 'Products', 'Orders', 'Payouts', 'Commission']}
      active="Payouts"
      title="Vendor payouts"
      subtitle="One basket, many sellers, commission split at source"
      action="Run payout"
      stats={[
        ['GROSS SALES', '€ 185k', '62 vendors', A],
        ['COMMISSION EARNED', '€ 18.5k', '10% average', C.green],
        ['PENDING PAYOUT', '€ 41k', '18 vendors', C.amber],
      ]}
      columns={['VENDOR', 'ORDERS', 'GROSS', 'COMMISSION', 'DUE', 'STATUS']}
      colX={[14, 132, 196, 262, 330, 384]}
      rows={[
        ['Podere Sant’Elena', '148', '€ 21,400', '€ 2,140', '€ 19,260', ['PAID', C.green]],
        ['Atelier Nord', '96', '€ 18,900', '€ 1,890', '€ 17,010', ['PENDING', C.amber]],
        ['Werkstatt Richter', '211', '€ 32,600', '€ 3,260', '€ 29,340', ['PAID', C.green]],
        ['Haus Grün', '54', '€ 8,700', '€ 870', '€ 7,830', ['PENDING', C.amber]],
        ['Studio Luce', '132', '€ 24,100', '€ 2,410', '€ 21,690', ['PAID', C.green]],
        ['Terra Mia', '38', '€ 6,200', '€ 620', '€ 5,580', ['HOLD', C.red]],
      ]}
    />
  )
}

/* Shopify selling to trade: customer-specific prices behind a login. */
function ShopifyB2b() {
  const A = BRAND.shopify
  return (
    <AdminApp
      chromeLabel="Shopify admin"
      appName="Wholesale"
      monogram="W"
      accent={A}
      nav={['Home', 'Companies', 'Price lists', 'Orders', 'Terms', 'Catalogue']}
      active="Price lists"
      title="Price lists"
      subtitle="Trade pricing per company, hidden from the public catalogue"
      action="New price list"
      stats={[
        ['TRADE ACCOUNTS', '84', '12 pending', A],
        ['ORDER VALUE (30D)', '€ 96,400', '+22%', C.green],
        ['AVERAGE BASKET', '€ 1,148', 'vs € 92', BRAND.react],
      ]}
      columns={['COMPANY', 'PRICE LIST', 'TERMS', 'ORDERS', 'SPEND', 'STATUS']}
      colX={[14, 128, 216, 268, 326, 384]}
      rows={[
        ['Hoffmann Retail', 'Tier A −30%', 'Net 30', '48', '€ 28,400', ['ACTIVE', C.green]],
        ['Nordlicht Stores', 'Tier B −22%', 'Net 30', '31', '€ 16,900', ['ACTIVE', C.green]],
        ['Bergmann Group', 'Tier A −30%', 'Net 60', '62', '€ 34,100', ['ACTIVE', C.green]],
        ['Rheinwerk Shops', 'Tier C −15%', 'Prepaid', '12', '€ 6,400', ['REVIEW', C.amber]],
        ['Falkenberg Concept', 'Tier B −22%', 'Net 30', '24', '€ 11,200', ['ACTIVE', C.green]],
        ['Meissner Outlet', 'Tier C −15%', 'Prepaid', '4', '€ 1,800', ['NEW', C.muted]],
      ]}
    />
  )
}

/* React and a charting layer over a warehouse of events. */
function ReactAnalytics() {
  const A = BRAND.react
  return (
    <AdminApp
      chromeLabel="Analytics"
      appName="Insight"
      monogram="IN"
      accent={A}
      nav={['Overview', 'Funnels', 'Cohorts', 'Retention', 'Segments', 'Exports']}
      active="Funnels"
      title="Checkout funnel"
      subtitle="Where the basket is abandoned, by step and by device"
      action="Add funnel"
      stats={[
        ['SESSIONS (7D)', '184k', '+9.4%', A],
        ['CHECKOUT START', '22,140', '12.0%', C.amber],
        ['COMPLETED', '9,860', '44.5%', C.green],
      ]}
      columns={['STEP', 'SESSIONS', 'DROP-OFF', 'MOBILE', 'DESKTOP', 'TREND']}
      colX={[14, 128, 200, 268, 330, 384]}
      rows={[
        ['Product viewed', '184,200', '—', '71%', '29%', ['+9%', C.green]],
        ['Added to basket', '46,800', '−74.6%', '68%', '32%', ['+4%', C.green]],
        ['Basket opened', '31,200', '−33.3%', '66%', '34%', ['+2%', C.green]],
        ['Checkout started', '22,140', '−29.0%', '61%', '39%', ['−1%', C.red]],
        ['Payment entered', '13,400', '−39.5%', '54%', '46%', ['−6%', C.red]],
        ['Order placed', '9,860', '−26.4%', '52%', '48%', ['+3%', C.green]],
      ]}
    />
  )
}

/* Appointments, staff rotas and the slots that are actually bookable. */
function BookingAdmin() {
  const A = '#7c3aed'
  return (
    <AdminApp
      chromeLabel="Scheduling"
      appName="Rota"
      monogram="RO"
      accent={A}
      nav={['Calendar', 'Appointments', 'Staff', 'Services', 'Availability', 'Reminders']}
      active="Appointments"
      title="Appointments"
      subtitle="Six practitioners, one calendar, no double bookings"
      action="Add booking"
      stats={[
        ['BOOKED THIS WEEK', '218', '86% capacity', A],
        ['NO-SHOWS', '7', '3.2%', C.red],
        ['REMINDERS SENT', '412', 'SMS and email', C.green],
      ]}
      columns={['TIME', 'CLIENT', 'SERVICE', 'STAFF', 'ROOM', 'STATUS']}
      colX={[14, 74, 178, 268, 330, 384]}
      rows={[
        ['09:00', 'G. Hoffmann', 'Consultation', 'M. Braun', 'R1', ['CONFIRMED', C.green]],
        ['09:45', 'A. Nolte', 'Follow-up', 'A. Keller', 'R2', ['CONFIRMED', C.green]],
        ['10:30', 'L. Bergmann', 'Assessment', 'L. Vogt', 'R1', ['ARRIVED', A]],
        ['11:15', 'M. Lorenz', 'Consultation', 'M. Braun', 'R3', ['CONFIRMED', C.green]],
        ['12:00', 'S. Falkenberg', 'Follow-up', 'A. Keller', 'R2', ['NO-SHOW', C.red]],
        ['14:00', 'R. Meissner', 'Assessment', 'L. Vogt', 'R1', ['PENDING', C.amber]],
      ]}
    />
  )
}

/* A Nest.js service split into queues, with the retry policy visible. */
function NestServices() {
  const A = '#e0234e'
  return (
    <AdminApp
      chromeLabel="Service console"
      appName="Services"
      monogram="NS"
      accent={A}
      nav={['Overview', 'Queues', 'Consumers', 'Dead letters', 'Schedules', 'Logs']}
      active="Queues"
      title="Queues"
      subtitle="Work split by concern, retried with backoff, never silently lost"
      action="Drain queue"
      stats={[
        ['PROCESSED (24H)', '412k', '99.97% ok', C.green],
        ['IN FLIGHT', '1,240', '6 queues', A],
        ['DEAD LETTERS', '38', 'to replay', C.red],
      ]}
      columns={['QUEUE', 'CONSUMERS', 'WAITING', 'RATE', 'RETRIES', 'STATUS']}
      colX={[14, 118, 202, 262, 326, 384]}
      rows={[
        ['orders.created', '6', '84', '210/s', '0.2%', ['HEALTHY', C.green]],
        ['payments.capture', '4', '12', '96/s', '1.1%', ['HEALTHY', C.green]],
        ['stock.reserve', '4', '340', '140/s', '0.4%', ['BACKLOG', C.amber]],
        ['mail.transactional', '2', '6', '38/s', '0.1%', ['HEALTHY', C.green]],
        ['webhooks.outbound', '3', '96', '72/s', '4.8%', ['RETRYING', C.amber]],
        ['reports.nightly', '1', '0', '—', '0.0%', ['IDLE', C.muted]],
      ]}
    />
  )
}

/* --------------------------------------------------------------------------
   Code and tests
   -------------------------------------------------------------------------- */

/* Next.js pulling a headless CMS, rendered at the edge and revalidated. */
function NextHeadlessBlog() {
  return (
    <CodeConsole
      tabs={['app/[slug]/page.tsx', 'lib/cms.ts']}
      treeLabel="EDITORIAL"
      treeActive="page.tsx"
      tree={['app/', '  [slug]/', '    page.tsx', '  layout.tsx', 'lib/', '  cms.ts', 'next.config.ts']}
      code={[
        [['export async function', 'kw'], [' ', 'pl'], ['generateStaticParams', 'fn'], ['()', 'pl'], [' {', 'pl']],
        [['  ', 'pl'], ['const', 'kw'], [' posts = ', 'pl'], ['await', 'kw'], [' ', 'pl'], ['cms', 'fn'], ['(', 'pl'], ["'/posts?limit=200'", 'str'], [')', 'pl']],
        [['  ', 'pl'], ['return', 'kw'], [' posts.', 'pl'], ['map', 'fn'], ['((p) ', 'pl'], ['=>', 'op'], [' ({ slug: p.slug }))', 'pl']],
        [['}', 'pl']],
        [],
        [['export const', 'kw'], [' revalidate = ', 'pl'], ['300', 'num'], ['  ', 'pl'], ['// edge cache, 5 minutes', 'cm']],
        [],
        [['export default async function', 'kw'], [' ', 'pl'], ['Post', 'fn'], ['({ params }) {', 'pl']],
        [['  ', 'pl'], ['const', 'kw'], [' post = ', 'pl'], ['await', 'kw'], [' ', 'pl'], ['cms', 'fn'], ['(', 'pl'], ['`/posts/${params.slug}`', 'str'], [')', 'pl']],
        [['  ', 'pl'], ['if', 'kw'], [' (!post) ', 'pl'], ['notFound', 'fn'], ['()', 'pl']],
        [],
        [['  ', 'pl'], ['return', 'kw'], [' (', 'pl']],
        [['    <', 'pl'], ['Article', 'fn'], [' ', 'pl'], ['body', 'var'], ['={post.body} ', 'pl'], ['author', 'var'], ['={post.author} />', 'pl']],
        [['  )', 'pl']],
        [['}', 'pl']],
      ]}
      terminalMeta="next 15 · react 19 · headless cms"
      prompt="$ next build && next start"
      log={[
        ['✓', 'Static', '204 posts pre-rendered at build', '#c3e88d'],
        ['✓', 'Edge', 'ISR revalidate 300s configured', '#c3e88d'],
        ['✓', 'Score', 'Performance 99 · SEO 100', '#c3e88d'],
        ['✓', 'Bundle', 'First load JS 84 kB', '#c3e88d'],
        ['✓', 'Feeds', 'sitemap.xml + RSS generated', '#c3e88d'],
      ]}
      footer="Build: 204 pages · 12.4s · First load JS 84 kB"
      treeW={120}
    />
  )
}

/* Laravel work pushed off the request and retried when it fails. */
function LaravelQueue() {
  return (
    <CodeConsole
      tabs={['ImportCatalogue.php', 'config/queue.php']}
      treeLabel="CATALOGUE"
      treeActive="ImportCatalogue.php"
      tree={['app/Jobs/', '  ImportCatalogue.php', '  SyncPrices.php', 'app/Events/', '  ImportFinished.php', 'config/queue.php']}
      code={[
        [['<?php', 'cm']],
        [],
        [['class', 'kw'], [' ', 'pl'], ['ImportCatalogue', 'fn'], [' ', 'pl'], ['implements', 'kw'], [' ShouldQueue', 'pl']],
        [['{', 'pl']],
        [['    ', 'pl'], ['public', 'kw'], [' ', 'pl'], ['$tries', 'var'], [' = ', 'pl'], ['5', 'num'], [';', 'pl']],
        [['    ', 'pl'], ['public', 'kw'], [' ', 'pl'], ['$backoff', 'var'], [' = [', 'pl'], ['10', 'num'], [', ', 'pl'], ['60', 'num'], [', ', 'pl'], ['300', 'num'], ['];', 'pl']],
        [],
        [['    ', 'pl'], ['public function', 'kw'], [' ', 'pl'], ['handle', 'fn'], ['(Importer ', 'pl'], ['$importer', 'var'], [')', 'pl']],
        [['    {', 'pl']],
        [['        ', 'pl'], ['$importer', 'var'], ['->', 'pl'], ['chunked', 'fn'], ['(', 'pl'], ['500', 'num'], [')->', 'pl'], ['each', 'fn'], ['(', 'pl'], ['fn', 'kw'], ['(', 'pl'], ['$batch', 'var'], [') ', 'pl'], ['=>', 'op']],
        [['            ', 'pl'], ['SyncPrices', 'fn'], ['::', 'pl'], ['dispatch', 'fn'], ['(', 'pl'], ['$batch', 'var'], [')->', 'pl'], ['onQueue', 'fn'], ['(', 'pl'], ["'prices'", 'str'], ['));', 'pl']],
        [],
        [['        ', 'pl'], ['ImportFinished', 'fn'], ['::', 'pl'], ['dispatch', 'fn'], ['(', 'pl'], ['$this', 'var'], ['->batchId);', 'pl']],
        [['    }', 'pl'], ['  ', 'pl'], ['// a failed chunk retries alone', 'cm']],
        [['}', 'pl']],
      ]}
      terminalMeta="php 8.3 · laravel 11 · redis queue"
      prompt="$ php artisan queue:work --queue=catalogue,prices"
      log={[
        ['DONE', 'Job', 'ImportCatalogue · 24,800 rows · 41s', '#c3e88d'],
        ['DONE', 'Job', 'SyncPrices · batch 1..50 · 12s', '#c3e88d'],
        ['RETRY', 'Job', 'SyncPrices batch 34 · attempt 2 of 5', '#ffcb6b'],
        ['DONE', 'Job', 'SyncPrices batch 34 · recovered', '#c3e88d'],
        ['DONE', 'Event', 'ImportFinished dispatched', '#c3e88d'],
      ]}
      footer="Queue: 0 waiting · 0 failed · throughput 610 jobs/min"
      treeW={126}
    />
  )
}

/* WordPress as the editor and an API, with the front end somewhere else. */
function WpRestApi() {
  return (
    <CodeConsole
      tabs={['class-rest-routes.php', 'schema.json']}
      treeLabel="WP-HEADLESS"
      treeActive="class-rest-routes.php"
      tree={['plugin/', '  class-rest-routes.php', '  class-cache.php', '  schema.json', 'theme/', '  functions.php']}
      code={[
        [['<?php', 'cm']],
        [],
        [['add_action', 'fn'], ['(', 'pl'], ["'rest_api_init'", 'str'], [', ', 'pl'], ['function', 'kw'], ['() {', 'pl']],
        [['    ', 'pl'], ['register_rest_route', 'fn'], ['(', 'pl'], ["'site/v1'", 'str'], [', ', 'pl'], ["'/page/(?P<slug>[a-z0-9-]+)'", 'str'], [', [', 'pl']],
        [["        'methods'", 'str'], ['  ', 'pl'], ['=>', 'op'], [' ', 'pl'], ["'GET'", 'str'], [',', 'pl']],
        [["        'callback'", 'str'], [' ', 'pl'], ['=>', 'op'], [' ', 'pl'], ["'site_page'", 'str'], [',', 'pl']],
        [["        'permission_callback'", 'str'], [' ', 'pl'], ['=>', 'op'], [' ', 'pl'], ["'__return_true'", 'str'], [',', 'pl']],
        [['    ]);', 'pl']],
        [['});', 'pl']],
        [],
        [['function', 'kw'], [' ', 'pl'], ['site_page', 'fn'], ['(', 'pl'], ['$req', 'var'], [') {', 'pl']],
        [['    ', 'pl'], ['$page', 'var'], [' = ', 'pl'], ['get_page_by_path', 'fn'], ['(', 'pl'], ['$req', 'var'], ['[', 'pl'], ["'slug'", 'str'], ['])', 'pl']],
        [['    ', 'pl'], ['return', 'kw'], [' ', 'pl'], ['rest_ensure_response', 'fn'], ['(', 'pl'], ['blocks_to_json', 'fn'], ['(', 'pl'], ['$page', 'var'], ['));', 'pl']],
        [['}', 'pl'], ['  ', 'pl'], ['// editors keep Gutenberg, the site keeps Next', 'cm']],
      ]}
      terminalMeta="wordpress 6.6 · php 8.2 · rest api"
      prompt="$ curl -s /wp-json/site/v1/page/about | jq '.blocks | length'"
      log={[
        ['200', 'GET', '/site/v1/page/about · 38ms · 24 blocks', '#c3e88d'],
        ['200', 'GET', '/site/v1/page/services · 31ms · cached', '#c3e88d'],
        ['200', 'GET', '/site/v1/menu/primary · 12ms', '#c3e88d'],
        ['PURGE', 'Hook', 'save_post → edge cache invalidated', '#82aaff'],
        ['200', 'GET', '/site/v1/page/about · 9ms · edge hit', '#c3e88d'],
      ]}
      footer="Editors publish in WordPress · the site renders from Next.js"
      treeW={132}
    />
  )
}

/* Shopify stock kept level with a back-office system, both ways. */
function ShopifySync() {
  return (
    <CodeConsole
      tabs={['sync/inventory.ts', 'sync/webhooks.ts']}
      treeLabel="STOCK-SYNC"
      treeActive="inventory.ts"
      tree={['sync/', '  inventory.ts', '  webhooks.ts', '  reconcile.ts', 'lib/', '  shopify.ts', '  erp.ts']}
      code={[
        [['export async function', 'kw'], [' ', 'pl'], ['pushLevels', 'fn'], ['(changes', 'pl'], [': Change[]', 'op'], [') {', 'pl']],
        [['  ', 'pl'], ['const', 'kw'], [' batches = ', 'pl'], ['chunk', 'fn'], ['(changes, ', 'pl'], ['100', 'num'], [')', 'pl']],
        [],
        [['  ', 'pl'], ['for', 'kw'], [' (', 'pl'], ['const', 'kw'], [' batch ', 'pl'], ['of', 'kw'], [' batches) {', 'pl']],
        [['    ', 'pl'], ['await', 'kw'], [' ', 'pl'], ['shopify', 'fn'], ['.', 'pl'], ['graphql', 'fn'], ['(SET_LEVELS, {', 'pl']],
        [['      input: batch.', 'pl'], ['map', 'fn'], ['(toLevelInput),', 'pl']],
        [['    })', 'pl']],
        [['    ', 'pl'], ['await', 'kw'], [' ', 'pl'], ['sleep', 'fn'], ['(', 'pl'], ['leakyBucketDelay', 'fn'], ['())', 'pl'], ['  ', 'pl'], ['// respect the API budget', 'cm']],
        [['  }', 'pl']],
        [['}', 'pl']],
        [],
        [['export async function', 'kw'], [' ', 'pl'], ['onOrderPaid', 'fn'], ['(order) {', 'pl']],
        [['  ', 'pl'], ['await', 'kw'], [' erp.', 'pl'], ['reserve', 'fn'], ['(order.lineItems)', 'pl']],
        [['  ', 'pl'], ['await', 'kw'], [' ', 'pl'], ['reconcile', 'fn'], ['(order.locationId)', 'pl'], ['  ', 'pl'], ['// truth is the ERP', 'cm']],
        [['}', 'pl']],
      ]}
      terminalMeta="node 20 · shopify admin api · erp connector"
      prompt="$ npm run sync -- --since=1h"
      log={[
        ['SYNC', 'Pull', '1,842 SKUs read from ERP · 2.1s', '#c3e88d'],
        ['SYNC', 'Push', '318 levels updated in Shopify · 4.6s', '#c3e88d'],
        ['HOOK', 'Hook', '46 orders reserved in ERP', '#82aaff'],
        ['WARN', 'Limit', 'bucket at 82% · backing off 400ms', '#ffcb6b'],
        ['OK', 'Check', '0 drift across 3 locations', '#c3e88d'],
      ]}
      footer="Two systems, one stock figure · drift checked every hour"
      treeW={120}
    />
  )
}

/* Node pushing order state to a screen without the screen asking. */
function NodeRealtime() {
  return (
    <CodeConsole
      tabs={['server/orders.ts', 'client/useOrders.ts']}
      treeLabel="KITCHEN"
      treeActive="orders.ts"
      tree={['server/', '  orders.ts', '  socket.ts', 'client/', '  useOrders.ts', '  Board.tsx']}
      code={[
        [['io.', 'pl'], ['on', 'fn'], ['(', 'pl'], ["'connection'", 'str'], [', (socket) ', 'pl'], ['=>', 'op'], [' {', 'pl']],
        [['  socket.', 'pl'], ['join', 'fn'], ['(', 'pl'], ['`site:${socket.data.siteId}`', 'str'], [')', 'pl']],
        [['})', 'pl']],
        [],
        [['export async function', 'kw'], [' ', 'pl'], ['advance', 'fn'], ['(orderId, ', 'pl'], ['to', 'var'], [') {', 'pl']],
        [['  ', 'pl'], ['const', 'kw'], [' order = ', 'pl'], ['await', 'kw'], [' db.', 'pl'], ['tx', 'fn'], ['(', 'pl'], ['async', 'kw'], [' (t) ', 'pl'], ['=>', 'op'], [' {', 'pl']],
        [['    ', 'pl'], ['const', 'kw'], [' o = ', 'pl'], ['await', 'kw'], [' t.orders.', 'pl'], ['lock', 'fn'], ['(orderId)', 'pl']],
        [['    ', 'pl'], ['if', 'kw'], [' (!', 'pl'], ['canMove', 'fn'], ['(o.state, ', 'pl'], ['to', 'var'], [')) ', 'pl'], ['throw new', 'kw'], [' ', 'pl'], ['BadMove', 'fn'], ['()', 'pl']],
        [['    ', 'pl'], ['return', 'kw'], [' t.orders.', 'pl'], ['set', 'fn'], ['(orderId, { state: ', 'pl'], ['to', 'var'], [' })', 'pl']],
        [['  })', 'pl']],
        [],
        [['  io.', 'pl'], ['to', 'fn'], ['(', 'pl'], ['`site:${order.siteId}`', 'str'], [').', 'pl'], ['emit', 'fn'], ['(', 'pl'], ["'order:moved'", 'str'], [', order)', 'pl']],
        [['}', 'pl'], ['  ', 'pl'], ['// every board updates in the same tick', 'cm']],
      ]}
      terminalMeta="node 20 · socket.io · postgres"
      prompt="$ npm run load -- --clients=400 --minutes=10"
      log={[
        ['OK', 'Conn', '400 boards connected · 0 dropped', '#c3e88d'],
        ['OK', 'Emit', '18,400 state changes broadcast', '#c3e88d'],
        ['OK', 'p95', 'p50 24ms · p95 68ms · p99 141ms', '#c3e88d'],
        ['OK', 'Resume', '12 network drops recovered silently', '#c3e88d'],
        ['OK', 'Order', '0 orders moved out of order', '#c3e88d'],
      ]}
      footer="400 concurrent screens · p95 68ms · no polling"
      treeW={120}
    />
  )
}

/* Python turning a nightly pile of files into rows somebody can read. */
function PythonPipeline() {
  return (
    <CodeConsole
      tabs={['pipeline/run.py', 'pipeline/validate.py']}
      treeLabel="NIGHTLY"
      treeActive="run.py"
      tree={['pipeline/', '  run.py', '  extract.py', '  validate.py', '  load.py', 'tests/', '  test_validate.py']}
      code={[
        [['import', 'kw'], [' pandas ', 'pl'], ['as', 'kw'], [' pd', 'pl']],
        [['from', 'kw'], [' pipeline ', 'pl'], ['import', 'kw'], [' extract, validate, load', 'pl']],
        [],
        [['def', 'kw'], [' ', 'pl'], ['run', 'fn'], ['(day', 'pl'], [': date', 'op'], [') ', 'pl'], ['->', 'op'], [' Report:', 'pl']],
        [['    frames = [', 'pl'], ['extract', 'fn'], ['(src, day) ', 'pl'], ['for', 'kw'], [' src ', 'pl'], ['in', 'kw'], [' SOURCES]', 'pl']],
        [['    df = pd.', 'pl'], ['concat', 'fn'], ['(frames, ignore_index=', 'pl'], ['True', 'kw'], [')', 'pl']],
        [],
        [['    clean, rejected = ', 'pl'], ['validate', 'fn'], ['(df)', 'pl']],
        [['    ', 'pl'], ['if', 'kw'], [' ', 'pl'], ['len', 'fn'], ['(rejected) ', 'pl'], ['>', 'op'], [' ', 'pl'], ['len', 'fn'], ['(df) ', 'pl'], ['*', 'op'], [' ', 'pl'], ['0.02', 'num'], [':', 'pl']],
        [['        ', 'pl'], ['raise', 'kw'], [' ', 'pl'], ['TooManyRejects', 'fn'], ['(rejected)', 'pl'], ['  ', 'pl'], ['# fail loudly', 'cm']],
        [],
        [['    ', 'pl'], ['load', 'fn'], ['(clean, table=', 'pl'], ["'fact_orders'", 'str'], [')', 'pl']],
        [['    ', 'pl'], ['return', 'kw'], [' ', 'pl'], ['Report', 'fn'], ['(rows=', 'pl'], ['len', 'fn'], ['(clean), rejects=rejected)', 'pl']],
      ]}
      terminalMeta="python 3.12 · pandas · scheduled 02:00"
      prompt="$ python -m pipeline.run --day=2026-08-17"
      log={[
        ['INFO', 'Read', '6 sources · 148,200 rows · 22s', '#c3e88d'],
        ['INFO', 'Check', '146,940 accepted · 1,260 rejected', '#c3e88d'],
        ['WARN', 'Reject', '0.85% below the 2% threshold', '#ffcb6b'],
        ['INFO', 'Load', 'fact_orders upserted · 31s', '#c3e88d'],
        ['INFO', 'Notify', 'summary emailed to finance', '#82aaff'],
      ]}
      footer="Nightly at 02:00 · 148k rows · rejects reported, never dropped"
      treeW={120}
    />
  )
}

/* --------------------------------------------------------------------------
   Mobile flows
   -------------------------------------------------------------------------- */

/* Points, tiers and a scannable card, in one React Native codebase. */
function RnLoyalty() {
  const A = '#7c3aed'
  const [x1, x2, x3] = phoneX
  const { y, w } = PH

  return (
    <>
      <Card />

      <Phone x={x1} caption="Wallet">
        <AppBar x={x1} title="My card" fill={A} back={false} />
        <rect x={x1 + 14} y={y + 78} width={w - 28} height="84" rx="12" fill={A} />
        <T x={x1 + 26} y={y + 100} fill="#ffffff" size={7} weight="700" opacity="0.8">
          GOLD MEMBER
        </T>
        <T x={x1 + 26} y={y + 124} fill="#ffffff" size={19} weight="700">
          2,480
        </T>
        <T x={x1 + 26} y={y + 140} fill="#ffffff" size={7} opacity="0.85">
          points · 520 to Platinum
        </T>
        <rect x={x1 + 26} y={y + 148} width={w - 52} height="5" rx="3" fill="#ffffff" opacity="0.3" />
        <rect x={x1 + 26} y={y + 148} width={(w - 52) * 0.82} height="5" rx="3" fill="#ffffff" />
        {[
          ['Espresso · free', '250 pts', true],
          ['Pastry · free', '400 pts', true],
          ['Lunch · 50% off', '900 pts', true],
          ['Hamper', '3,000 pts', false],
        ].map(([label, cost, can], i) => (
          <g key={label}>
            <rect x={x1 + 14} y={y + 176 + i * 34} width={w - 28} height="28" rx="8" fill={C.panel} stroke={C.border} />
            <T x={x1 + 24} y={y + 194 + i * 34} fill={C.ink} size={7.6} weight="600">
              {label}
            </T>
            <Pill x={x1 + w - 74} y={y + 182 + i * 34} w={58} label={cost} color={can ? A : C.muted} size={6.4} />
          </g>
        ))}
      </Phone>

      <Phone x={x2} caption="Scan at the till">
        <AppBar x={x2} title="Scan" fill={A} />
        <rect x={x2 + 24} y={y + 92} width={w - 48} height={w - 48} rx="10" fill="#ffffff" stroke={C.border} />
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) =>
            (r * 7 + c * 3) % 4 < 2 ? (
              <rect key={`${r}-${c}`} x={x2 + 34 + c * 12.5} y={y + 102 + r * 12.5} width="10" height="10" fill={C.ink} />
            ) : null
          )
        )}
        <T x={x2 + w / 2} y={y + 218} fill={C.muted} size={7.4} anchor="middle">
          Member #48-2210
        </T>
        <rect x={x2 + 14} y={y + 236} width={w - 28} height="30" rx="9" fill={A} />
        <T x={x2 + w / 2} y={y + 255} fill="#ffffff" size={8.4} weight="700" anchor="middle">
          Redeem a reward
        </T>
        <T x={x2 + 14} y={y + 288} fill={C.muted} size={7} weight="700">
          RECENT
        </T>
        {[['Hauptstraße', '+18 pts', '2h ago'], ['Bahnhofstraße', '+42 pts', 'Yesterday']].map(([shop, pts, when], i) => (
          <g key={shop}>
            <T x={x2 + 14} y={y + 308 + i * 18} fill={C.ink} size={7.4}>
              {shop}
            </T>
            <T x={x2 + w - 14} y={y + 308 + i * 18} fill={C.green} size={7.2} weight="700" anchor="end">
              {pts}
            </T>
          </g>
        ))}
      </Phone>

      <Phone x={x3} caption="Offers">
        <AppBar x={x3} title="For you" fill={A} back={false} />
        {[
          ['Double points', 'This weekend only', C.amber],
          ['Free delivery', 'Orders over € 25', A],
          ['Birthday treat', 'Ready to claim', C.green],
        ].map(([title, sub, colour], i) => (
          <g key={title}>
            <rect x={x3 + 14} y={y + 80 + i * 62} width={w - 28} height="52" rx="10" fill="#ffffff" stroke={C.border} />
            <rect x={x3 + 14} y={y + 80 + i * 62} width="4" height="52" rx="2" fill={colour} />
            <T x={x3 + 28} y={y + 102 + i * 62} fill={C.ink} size={8.6} weight="700">
              {title}
            </T>
            <T x={x3 + 28} y={y + 118 + i * 62} fill={C.muted} size={7.2}>
              {sub}
            </T>
          </g>
        ))}
        <line x1={x3 + 14} y1={y + 274} x2={x3 + w - 14} y2={y + 274} stroke={C.hair} />
        <T x={x3 + 14} y={y + 294} fill={C.muted} size={7} weight="700">
          NEAREST SHOP
        </T>
        <T x={x3 + 14} y={y + 312} fill={C.ink} size={8}>
          Hauptstraße 21 · 400m
        </T>
        <T x={x3 + 14} y={y + 328} fill={C.green} size={7.2} weight="700">
          Open until 20:00
        </T>
      </Phone>
    </>
  )
}

/* Flutter, one codebase, habits tracked and nudged. */
function FlutterHabit() {
  const A = BRAND.flutter
  const [x1, x2, x3] = phoneX
  const { y, w } = PH
  const bars = [42, 58, 30, 66, 74, 52, 80]

  return (
    <>
      <Card />

      <Phone x={x1} caption="Today">
        <AppBar x={x1} title="Habits" fill={A} back={false} />
        <T x={x1 + 14} y={y + 88} fill={C.muted} size={7} weight="700">
          MONDAY · 4 OF 6 DONE
        </T>
        {[
          ['Morning walk', '30 min', true],
          ['Read', '20 pages', true],
          ['Water', '2.0 L', true],
          ['Stretch', '10 min', true],
          ['Language', '1 lesson', false],
          ['Journal', '1 entry', false],
        ].map(([habit, target, done], i) => (
          <g key={habit}>
            <rect x={x1 + 14} y={y + 98 + i * 38} width={w - 28} height="32" rx="9" fill={done ? '#ffffff' : C.panel} stroke={done ? A : C.border} />
            <rect x={x1 + 24} y={y + 108 + i * 38} width="12" height="12" rx="4" fill={done ? A : '#ffffff'} stroke={done ? A : C.border} />
            {done ? <path d={`M${x1 + 27} ${y + 114 + i * 38} l3 3 l5 -6`} stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" /> : null}
            <T x={x1 + 44} y={y + 118 + i * 38} fill={C.ink} size={8} weight="600">
              {habit}
            </T>
            <T x={x1 + w - 22} y={y + 118 + i * 38} fill={C.muted} size={6.8} anchor="end">
              {target}
            </T>
          </g>
        ))}
      </Phone>

      <Phone x={x2} caption="Streaks">
        <AppBar x={x2} title="Morning walk" fill={A} />
        <T x={x2 + 14} y={y + 92} fill={C.muted} size={7} weight="700">
          CURRENT STREAK
        </T>
        <T x={x2 + 14} y={y + 120} fill={C.ink} size={24} weight="700">
          38
        </T>
        <T x={x2 + 56} y={y + 120} fill={C.muted} size={8}>
          days
        </T>
        <line x1={x2 + 14} y1={y + 136} x2={x2 + w - 14} y2={y + 136} stroke={C.hair} />
        <T x={x2 + 14} y={y + 156} fill={C.muted} size={7} weight="700">
          LAST 7 DAYS
        </T>
        {bars.map((h, i) => (
          <g key={i}>
            <rect x={x2 + 18 + i * 21} y={y + 240 - h} width="13" height={h} rx="3" fill={A} opacity={i === 6 ? 1 : 0.55} />
            <T x={x2 + 24 + i * 21} y={y + 254} fill={C.faint ?? C.muted} size={6} anchor="middle">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </T>
          </g>
        ))}
        <line x1={x2 + 14} y1={y + 268} x2={x2 + w - 14} y2={y + 268} stroke={C.hair} />
        <T x={x2 + 14} y={y + 288} fill={C.muted} size={7} weight="700">
          REMINDER
        </T>
        <T x={x2 + 14} y={y + 306} fill={C.ink} size={8}>
          Every day at 07:30
        </T>
        <T x={x2 + 14} y={y + 322} fill={C.muted} size={7}>
          Local notification, works offline
        </T>
      </Phone>

      <Phone x={x3} caption="Month">
        <AppBar x={x3} title="August" fill={A} />
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => {
            const day = r * 7 + c
            const done = (day * 5) % 7 < 5 && day < 31
            return day < 31 ? (
              <rect
                key={day}
                x={x3 + 16 + c * 21}
                y={y + 92 + r * 21}
                width="17"
                height="17"
                rx="5"
                fill={done ? A : C.panel}
                opacity={done ? 0.28 + (day % 5) * 0.18 : 1}
                stroke={done ? 'none' : C.border}
              />
            ) : null
          })
        )}
        <line x1={x3 + 14} y1={y + 214} x2={x3 + w - 14} y2={y + 214} stroke={C.hair} />
        {[
          ['Completion', '84%'],
          ['Best streak', '38 days'],
          ['Missed', '5 days'],
        ].map(([label, value], i) => (
          <g key={label}>
            <T x={x3 + 14} y={y + 238 + i * 26} fill={C.muted} size={7.4}>
              {label}
            </T>
            <T x={x3 + w - 14} y={y + 238 + i * 26} fill={C.ink} size={8.4} weight="700" anchor="end">
              {value}
            </T>
          </g>
        ))}
        <rect x={x3 + 14} y={y + 306} width={w - 28} height="28" rx="9" fill={A} />
        <T x={x3 + w / 2} y={y + 324} fill="#ffffff" size={8.2} weight="700" anchor="middle">
          Export as CSV
        </T>
      </Phone>
    </>
  )
}

/* Android at the counter: take the money, print the receipt, keep working offline. */
function AndroidPos() {
  const A = BRAND.android
  const INK = '#0b3d21'
  const [x1, x2, x3] = phoneX
  const { y, w } = PH

  return (
    <>
      <Card />

      <Phone x={x1} caption="Basket">
        <AppBar x={x1} title="Till 2" fill={A} ink={INK} back={false} />
        {[
          ['Espresso', '2', '€ 3.00'],
          ['Cappuccino', '1', '€ 1.80'],
          ['Cornetto', '3', '€ 4.50'],
          ['Focaccia', '1', '€ 3.20'],
          ['Water 0.5L', '2', '€ 2.00'],
        ].map(([item, qty, price], i) => (
          <g key={item}>
            <T x={x1 + 14} y={y + 96 + i * 26} fill={C.ink} size={8.2}>
              {item}
            </T>
            <T x={x1 + w - 62} y={y + 96 + i * 26} fill={C.muted} size={7.4} anchor="end">
              ×{qty}
            </T>
            <T x={x1 + w - 14} y={y + 96 + i * 26} fill={C.ink} size={8.2} weight="600" anchor="end">
              {price}
            </T>
            <line x1={x1 + 14} y1={y + 104 + i * 26} x2={x1 + w - 14} y2={y + 104 + i * 26} stroke={C.hair} />
          </g>
        ))}
        <T x={x1 + 14} y={y + 250} fill={C.muted} size={7.6}>
          Subtotal
        </T>
        <T x={x1 + w - 14} y={y + 250} fill={C.ink} size={8} anchor="end">
          € 14.50
        </T>
        <T x={x1 + 14} y={y + 268} fill={C.muted} size={7.6}>
          VAT 10%
        </T>
        <T x={x1 + w - 14} y={y + 268} fill={C.ink} size={8} anchor="end">
          € 1.45
        </T>
        <rect x={x1 + 14} y={y + 282} width={w - 28} height="34" rx="9" fill={A} />
        <T x={x1 + 26} y={y + 304} fill={INK} size={9} weight="700">
          Charge
        </T>
        <T x={x1 + w - 26} y={y + 304} fill={INK} size={9} weight="700" anchor="end">
          € 15.95
        </T>
      </Phone>

      <Phone x={x2} caption="Payment">
        <AppBar x={x2} title="Take payment" fill={A} ink={INK} />
        <T x={x2 + w / 2} y={y + 118} fill={C.ink} size={22} weight="700" anchor="middle">
          € 15.95
        </T>
        <T x={x2 + w / 2} y={y + 136} fill={C.muted} size={7.4} anchor="middle">
          Order #2214 · Till 2
        </T>
        {[
          ['Card', 'Contactless ready', A],
          ['Cash', 'Open drawer', C.muted],
          ['Meal voucher', 'Scan code', C.muted],
        ].map(([label, sub, colour], i) => (
          <g key={label}>
            <rect x={x2 + 14} y={y + 158 + i * 50} width={w - 28} height="42" rx="10" fill={i === 0 ? '#ffffff' : C.panel} stroke={i === 0 ? A : C.border} strokeWidth={i === 0 ? 1.6 : 1} />
            <T x={x2 + 28} y={y + 178 + i * 50} fill={C.ink} size={8.6} weight="700">
              {label}
            </T>
            <T x={x2 + 28} y={y + 192 + i * 50} fill={colour} size={7} weight="600">
              {sub}
            </T>
          </g>
        ))}
        <rect x={x2 + 14} y={y + 314} width={w - 28} height="22" rx="7" fill={C.amber} fillOpacity="0.16" />
        <T x={x2 + w / 2} y={y + 329} fill="#8a5a06" size={7} weight="700" anchor="middle">
          Offline · 6 sales queued
        </T>
      </Phone>

      <Phone x={x3} caption="Day summary">
        <AppBar x={x3} title="Z report" fill={A} ink={INK} />
        <T x={x3 + 14} y={y + 92} fill={C.muted} size={7} weight="700">
          MONDAY 17 AUGUST
        </T>
        {[
          ['Sales', '214', C.ink],
          ['Gross takings', '€ 3,184', C.ink],
          ['Card', '€ 2,410', C.muted],
          ['Cash', '€ 774', C.muted],
          ['Refunds', '€ 46', C.red],
          ['Voided', '3', C.muted],
        ].map(([label, value, colour], i) => (
          <g key={label}>
            <T x={x3 + 14} y={y + 118 + i * 26} fill={C.muted} size={7.8}>
              {label}
            </T>
            <T x={x3 + w - 14} y={y + 118 + i * 26} fill={colour} size={8.4} weight="700" anchor="end">
              {value}
            </T>
            <line x1={x3 + 14} y1={y + 126 + i * 26} x2={x3 + w - 14} y2={y + 126 + i * 26} stroke={C.hair} />
          </g>
        ))}
        <rect x={x3 + 14} y={y + 286} width={w - 28} height="30" rx="9" fill={A} />
        <T x={x3 + w / 2} y={y + 305} fill={INK} size={8.4} weight="700" anchor="middle">
          Print and close
        </T>
        <T x={x3 + w / 2} y={y + 330} fill={C.green} size={7} weight="700" anchor="middle">
          Synced · nothing pending
        </T>
      </Phone>
    </>
  )
}

/* iOS for viewings: the property, the plan and the appointment. */
function IosProperty() {
  const A = '#0a84ff'
  const [x1, x2, x3] = phoneX
  const { y, w } = PH

  return (
    <>
      <Card />

      <Phone x={x1} caption="Search">
        <AppBar x={x1} title="Berlin" fill="#ffffff" ink={C.ink} back={false} />
        <rect x={x1 + 14} y={y + 76} width={w - 28} height="24" rx="8" fill={C.panel} stroke={C.border} />
        <T x={x1 + 26} y={y + 92} fill={C.muted} size={7.4}>
          2+ rooms · under € 450k
        </T>
        {[
          ['Kastanienallee 12', '€ 385,000', '3 rooms · 92 m²'],
          ['Oranienstraße 4', '€ 429,000', '3 rooms · 104 m²'],
          ['Gormannstraße 30', '€ 348,000', '2 rooms · 78 m²'],
        ].map(([addr, price, meta], i) => (
          <g key={addr}>
            <rect x={x1 + 14} y={y + 110 + i * 74} width={w - 28} height="64" rx="10" fill="#ffffff" stroke={C.border} />
            <rect x={x1 + 22} y={y + 118 + i * 74} width="48" height="48" rx="8" fill={C.panel} />
            <path d={`M${x1 + 32} ${y + 154 + i * 74} l10 -14 l8 10 l6 -7 l8 11 Z`} fill={C.barMid} />
            <circle cx={x1 + 38} cy={y + 130 + i * 74} r="4" fill={C.barLight} />
            <T x={x1 + 80} y={y + 134 + i * 74} fill={C.ink} size={8.2} weight="700">
              {addr}
            </T>
            <T x={x1 + 80} y={y + 148 + i * 74} fill={A} size={8} weight="700">
              {price}
            </T>
            <T x={x1 + 80} y={y + 162 + i * 74} fill={C.muted} size={6.8}>
              {meta}
            </T>
          </g>
        ))}
      </Phone>

      <Phone x={x2} caption="Property">
        <AppBar x={x2} title="Kastanienallee 12" fill="#ffffff" ink={C.ink} />
        <rect x={x2} y={y + 66} width={w} height="96" fill={C.panel} />
        <path d={`M${x2 + 20} ${y + 154} l30 -42 l24 30 l18 -22 l26 34 Z`} fill={C.barMid} />
        <circle cx={x2 + 42} cy={y + 96} r="10" fill={C.barLight} />
        <T x={x2 + 14} y={y + 184} fill={C.ink} size={13} weight="700">
          € 385,000
        </T>
        <T x={x2 + 14} y={y + 200} fill={C.muted} size={7.4}>
          3 rooms · 92 m² · 2nd floor, lift
        </T>
        <line x1={x2 + 14} y1={y + 212} x2={x2 + w - 14} y2={y + 212} stroke={C.hair} />
        {[
          ['Heating', 'Independent'],
          ['Energy class', 'B'],
          ['Service charge', '€ 120/mo'],
        ].map(([label, value], i) => (
          <g key={label}>
            <T x={x2 + 14} y={y + 234 + i * 22} fill={C.muted} size={7.4}>
              {label}
            </T>
            <T x={x2 + w - 14} y={y + 234 + i * 22} fill={C.ink} size={7.8} weight="600" anchor="end">
              {value}
            </T>
          </g>
        ))}
        <rect x={x2 + 14} y={y + 300} width={w - 28} height="30" rx="9" fill={A} />
        <T x={x2 + w / 2} y={y + 319} fill="#ffffff" size={8.4} weight="700" anchor="middle">
          Book a viewing
        </T>
      </Phone>

      <Phone x={x3} caption="Viewing booked">
        <AppBar x={x3} title="Your viewing" fill="#ffffff" ink={C.ink} />
        <circle cx={x3 + w / 2} cy={y + 108} r="22" fill={C.green} fillOpacity="0.14" />
        <path d={`M${x3 + w / 2 - 9} ${y + 108} l6 6 l12 -13`} stroke={C.green} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <T x={x3 + w / 2} y={y + 150} fill={C.ink} size={9.4} weight="700" anchor="middle">
          Thursday 21 August
        </T>
        <T x={x3 + w / 2} y={y + 166} fill={C.muted} size={7.6} anchor="middle">
          16:30 · Kastanienallee 12
        </T>
        <line x1={x3 + 14} y1={y + 182} x2={x3 + w - 14} y2={y + 182} stroke={C.hair} />
        <T x={x3 + 14} y={y + 202} fill={C.muted} size={7} weight="700">
          AGENT
        </T>
        <circle cx={x3 + 26} cy={y + 224} r="12" fill={C.panel} stroke={C.border} />
        <T x={x3 + 26} y={y + 228} fill={C.muted} size={8} weight="700" anchor="middle">
          MR
        </T>
        <T x={x3 + 48} y={y + 222} fill={C.ink} size={8.4} weight="700">
          M. Braun
        </T>
        <T x={x3 + 48} y={y + 236} fill={C.muted} size={7}>
          Replies within an hour
        </T>
        {[
          ['Add to calendar', A],
          ['Message the agent', C.muted],
        ].map(([label, colour], i) => (
          <rect key={label} x={x3 + 14} y={y + 258 + i * 38} width={w - 28} height="30" rx="9" fill={i === 0 ? colour : '#ffffff'} stroke={i === 0 ? 'none' : C.border} />
        ))}
        <T x={x3 + w / 2} y={y + 277} fill="#ffffff" size={8.2} weight="700" anchor="middle">
          Add to calendar
        </T>
        <T x={x3 + w / 2} y={y + 315} fill={C.ink} size={8.2} weight="600" anchor="middle">
          Message the agent
        </T>
      </Phone>
    </>
  )
}

export const moreScenes = {
  vueCrm: VueCrm,
  laravelBilling: LaravelBilling,
  phpInventory: PhpInventory,
  wpMembership: WpMembership,
  wooMarketplace: WooMarketplace,
  shopifyB2b: ShopifyB2b,
  reactAnalytics: ReactAnalytics,
  bookingAdmin: BookingAdmin,
  nestServices: NestServices,
  nextHeadlessBlog: NextHeadlessBlog,
  laravelQueue: LaravelQueue,
  wpRestApi: WpRestApi,
  shopifySync: ShopifySync,
  nodeRealtime: NodeRealtime,
  pythonPipeline: PythonPipeline,
  rnLoyalty: RnLoyalty,
  flutterHabit: FlutterHabit,
  androidPos: AndroidPos,
  iosProperty: IosProperty,
}
