#!/usr/bin/env python3
"""Generate one illustrated 16:9 cover per project.

Run with:  python3 scripts/generate-covers.py

Each cover is an abstract depiction of that project's interface type — a
booking flow, a CMS, a check-in app, and so on. Deliberately graphic, not
photoreal: these are cover art, not screenshots.
"""
import pathlib

W, H = 1600, 900
OUT = pathlib.Path(__file__).resolve().parent.parent / "src/assets/covers"
OUT.mkdir(parents=True, exist_ok=True)


def C(h, s, l, a=1.0):
    return f"hsl({h} {s}% {l}%{'' if a == 1 else f' / {a}'})"


def tshirt(x, y, w=86, hh=98, fill="#fff", opacity=1.0):
    """A simple garment silhouette — reads as apparel at thumbnail size."""
    return (
        f'<path d="M{x} {y + 16} L{x + 25} {y} L{x + 34} {y + 9} '
        f"Q{x + w / 2} {y + 26} {x + w - 34} {y + 9} "
        f"L{x + w - 25} {y} L{x + w} {y + 16} L{x + w - 13} {y + 44} "
        f"L{x + w - 22} {y + 37} L{x + w - 22} {y + hh} L{x + 22} {y + hh} "
        f'L{x + 22} {y + 37} L{x + 13} {y + 44} Z" fill="{fill}" opacity="{opacity}"/>'
    )


def frame(h, body, *, chrome=True):
    """Shared shell: tinted ground, soft glow, faint grid, optional window chrome."""
    bg, ink, dim = C(h, 38, 11), C(h, 70, 68), C(h, 30, 26)
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img">',
        "<defs>",
        # Deliberately deep and low-saturation: these sit in a grid of eight, so
        # the ground stays quiet and the accent details carry the colour.
        f'<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
        f'<stop offset="0" stop-color="{C(h, 34, 13)}"/>'
        f'<stop offset="1" stop-color="{C(h, 24, 7)}"/></linearGradient>',
        f'<radialGradient id="glow" cx="0.5" cy="0.08" r="0.75">'
        f'<stop offset="0" stop-color="{C(h, 80, 55, 0.16)}"/>'
        f'<stop offset="1" stop-color="{C(h, 80, 55, 0)}"/></radialGradient>',
        '<pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">'
        f'<path d="M50 0H0V50" fill="none" stroke="{C(h, 40, 40, 0.13)}" stroke-width="1"/>'
        "</pattern>",
        "</defs>",
        f'<rect width="{W}" height="{H}" fill="url(#g)"/>',
        f'<rect width="{W}" height="{H}" fill="url(#grid)"/>',
        f'<rect width="{W}" height="{H}" fill="url(#glow)"/>',
    ]
    if chrome:
        parts += [
            f'<rect x="150" y="120" width="1300" height="660" rx="22" fill="{C(h, 40, 14)}" stroke="{C(h, 45, 34)}" stroke-width="2"/>',
            f'<path d="M150 186 H1450" stroke="{C(h, 45, 30)}" stroke-width="2"/>',
            f'<circle cx="196" cy="153" r="9" fill="{C(h, 60, 40)}"/>',
            f'<circle cx="228" cy="153" r="9" fill="{C(h, 60, 34)}"/>',
            f'<circle cx="260" cy="153" r="9" fill="{C(h, 60, 34)}"/>',
            f'<rect x="300" y="142" width="420" height="22" rx="11" fill="{C(h, 45, 24)}"/>',
        ]
    parts.append(body(h, ink, dim))
    parts.append("</svg>")
    return "\n".join(parts)


def bar(x, y, w, hh, col, r=8):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{hh}" rx="{r}" fill="{col}"/>'


def card(x, y, w, hh, h, r=16):
    return (
        f'<rect x="{x}" y="{y}" width="{w}" height="{hh}" rx="{r}" '
        f'fill="{C(h, 45, 18)}" stroke="{C(h, 50, 32)}" stroke-width="2"/>'
    )


# ---------------------------------------------------------------- 1. booking
def travel(h, ink, dim):
    p = [card(210, 230, 380, 500, h)]
    p += [bar(250, 280, 200, 20, dim), bar(250, 320, 300, 14, C(h, 30, 22))]
    for i, y in enumerate((380, 470, 560)):
        p.append(card(250, y, 300, 70, h, 12))
        p.append(bar(275, y + 22, 120, 12, dim))
        p.append(bar(420, y + 22, 60, 12, C(h, 70, 55) if i == 0 else dim))
    p.append(bar(250, 660, 300, 44, C(h, 75, 58), 22))
    # flight arc between two cities
    p.append(
        f'<path d="M700 560 Q 1000 300 1340 460" fill="none" stroke="{ink}" '
        f'stroke-width="4" stroke-dasharray="14 12" stroke-linecap="round"/>'
    )
    p.append(f'<circle cx="700" cy="560" r="14" fill="{ink}"/>')
    p.append(f'<circle cx="1340" cy="460" r="14" fill="{ink}"/>')
    p.append(
        f'<path d="M1010 372 l52 22 -52 22 12 -22z" fill="{ink}"/>'
    )
    for x, y in ((760, 650), (900, 690), (1040, 650)):
        p.append(bar(x, y, 110, 12, C(h, 40, 28)))
    return "".join(p)


# ------------------------------------------------------------------- 2. CMS
def aquarium(h, ink, dim):
    p = [card(200, 230, 240, 500, h)]  # sidebar
    for i, y in enumerate(range(275, 660, 62)):
        col = C(h, 70, 55) if i == 1 else dim
        p.append(bar(230, y, 26, 26, col, 8))
        p.append(bar(272, y + 6, 130, 14, col))
    p.append(card(480, 230, 920, 250, h))  # hero
    p.append(bar(520, 280, 420, 26, dim))
    p.append(bar(520, 326, 620, 14, C(h, 30, 24)))
    p.append(bar(520, 356, 500, 14, C(h, 30, 24)))
    p.append(bar(520, 404, 170, 40, C(h, 75, 58), 20))
    for x in (480, 793, 1106):  # three content cards
        p.append(card(x, 520, 294, 210, h))
        p.append(bar(x + 30, 560, 120, 14, ink))
        p.append(bar(x + 30, 594, 200, 12, dim))
        p.append(bar(x + 30, 622, 160, 12, dim))
    return "".join(p)


# -------------------------------------------------------------- 3. check-in
def event(h, ink, dim):
    p = []
    # phone
    p.append(
        f'<rect x="230" y="210" width="330" height="540" rx="40" fill="{C(h, 45, 16)}" stroke="{C(h, 50, 34)}" stroke-width="3"/>'
    )
    p.append(bar(345, 238, 100, 12, C(h, 45, 30), 6))
    p.append(f'<circle cx="395" cy="400" r="78" fill="none" stroke="{ink}" stroke-width="8"/>')
    p.append(
        f'<path d="M358 400 l26 28 50 -58" fill="none" stroke="{ink}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>'
    )
    p.append(bar(300, 520, 190, 18, dim))
    p.append(bar(330, 556, 130, 14, C(h, 30, 24)))
    p.append(bar(290, 640, 210, 44, C(h, 75, 55), 22))
    # attendee list, top row checked
    for i, y in enumerate((250, 340, 430, 520, 610)):
        p.append(card(650, y, 750, 70, h, 14))
        p.append(f'<circle cx="695" cy="{y + 35}" r="18" fill="{C(h, 50, 26)}"/>')
        p.append(bar(735, y + 20, 240, 14, dim))
        p.append(bar(735, y + 44, 150, 10, C(h, 30, 22)))
        done = i < 2
        p.append(bar(1290, y + 22, 70, 26, C(h, 75, 50) if done else C(h, 40, 26), 13))
    return "".join(p)


# ------------------------------------------------------------- 4. enneagram
def enneagram(h, ink, dim):
    import math

    cx, cy, r = 800, 460, 235
    pts = [
        (cx + r * math.sin(math.radians(a)), cy - r * math.cos(math.radians(a)))
        for a in range(0, 360, 40)
    ]
    p = [f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{C(h, 45, 32)}" stroke-width="3"/>']
    # inner chords
    order = [0, 3, 6, 1, 4, 7, 2, 5, 8]
    d = " ".join(
        ("M" if i == 0 else "L") + f"{pts[o][0]:.0f} {pts[o][1]:.0f}"
        for i, o in enumerate(order)
    )
    p.append(f'<path d="{d} Z" fill="none" stroke="{ink}" stroke-width="3" opacity="0.75"/>')
    for i, (x, y) in enumerate(pts):
        hot = i in (0, 4)
        p.append(
            f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{22 if hot else 15}" '
            f'fill="{C(h, 80, 58) if hot else C(h, 45, 22)}" stroke="{ink}" stroke-width="3"/>'
        )
    # score bars
    for i, (y, w) in enumerate(((250, 210), (300, 150), (350, 175))):
        p.append(bar(1230, y, 220, 14, C(h, 40, 22)))
        p.append(bar(1230, y, w, 14, C(h, 75, 55)))
    return "".join(p)


# ------------------------------------------------------------- 5. AI agent
def agent(h, ink, dim):
    nodes = [(330, 460), (620, 300), (620, 620), (930, 460), (1240, 320), (1240, 600)]
    edges = [(0, 1), (0, 2), (1, 3), (2, 3), (3, 4), (3, 5)]
    p = []
    for a, b in edges:
        x1, y1 = nodes[a]
        x2, y2 = nodes[b]
        mx = (x1 + x2) / 2
        p.append(
            f'<path d="M{x1} {y1} C{mx} {y1} {mx} {y2} {x2} {y2}" fill="none" '
            f'stroke="{C(h, 50, 38)}" stroke-width="3"/>'
        )
    for i, (x, y) in enumerate(nodes):
        hot = i in (0, 3)
        p.append(
            f'<rect x="{x - 62}" y="{y - 42}" width="124" height="84" rx="18" '
            f'fill="{C(h, 55, 20) if hot else C(h, 45, 16)}" stroke="{C(h, 80, 60) if hot else C(h, 50, 34)}" stroke-width="3"/>'
        )
        p.append(bar(x - 38, y - 16, 76, 12, C(h, 75, 58) if hot else dim))
        p.append(bar(x - 38, y + 6, 50, 10, C(h, 35, 28)))
    p.append(f'<circle cx="930" cy="460" r="76" fill="none" stroke="{ink}" stroke-width="3" opacity="0.5"/>')
    return "".join(p)


# ------------------------------------------------------- 6. product listing
def vassalli(h, ink, dim):
    p = [bar(210, 230, 260, 22, dim), bar(1180, 226, 220, 34, C(h, 45, 24), 17)]
    for r in range(2):
        for c in range(3):
            x, y = 210 + c * 415, 300 + r * 235
            p.append(card(x, y, 380, 200, h))
            p.append(
                f'<rect x="{x + 24}" y="{y + 22}" width="150" height="156" rx="12" fill="{C(h, 55, 24)}"/>'
            )
            p.append(
                tshirt(
                    x + 56,
                    y + 50,
                    fill=C(h, 72, 56),
                    opacity=0.95 if (r + c) % 2 == 0 else 0.62,
                )
            )
            p.append(bar(x + 196, y + 34, 150, 14, dim))
            p.append(bar(x + 196, y + 62, 110, 12, C(h, 30, 24)))
            p.append(bar(x + 196, y + 104, 70, 18, C(h, 75, 55)))
            for i in range(3):  # size chips
                p.append(bar(x + 196 + i * 42, y + 146, 32, 22, C(h, 45, 26), 6))
    return "".join(p)


# ---------------------------------------------------------- 7. storefront
def ecommerce(h, ink, dim):
    p = [bar(210, 230, 180, 20, dim)]
    for i in range(3):
        p.append(bar(760 + i * 110, 232, 80, 14, C(h, 35, 26)))
    p.append(f'<circle cx="1400" cy="240" r="22" fill="{C(h, 55, 26)}"/>')
    p.append(
        f'<path d="M1390 232 h20 l-3 18 h-14z" fill="{C(h, 80, 62)}"/>'
    )
    for c in range(3):
        x = 210 + c * 400
        p.append(card(x, 300, 360, 250, h))
        p.append(
            f'<rect x="{x + 26}" y="326" width="308" height="130" rx="12" fill="{C(h, 55, 24)}"/>'
        )
        p.append(bar(x + 26, 476, 180, 16, dim))
        p.append(bar(x + 26, 506, 90, 16, C(h, 78, 56)))
    # checkout summary
    p.append(card(210, 590, 1180, 150, h))
    p.append(bar(250, 630, 260, 16, dim))
    p.append(bar(250, 664, 400, 12, C(h, 30, 24)))
    p.append(bar(250, 692, 320, 12, C(h, 30, 24)))
    p.append(bar(1150, 648, 200, 46, C(h, 78, 56), 23))
    return "".join(p)


# --------------------------------------------------------- 8. WordPress
def wordpress(h, ink, dim):
    p = [bar(210, 226, 150, 24, dim)]
    for i in range(4):
        p.append(bar(900 + i * 130, 232, 90, 14, C(h, 35, 26)))
    p.append(card(210, 300, 780, 260, h))  # featured post
    p.append(bar(250, 340, 320, 24, ink))
    p.append(bar(250, 386, 640, 14, C(h, 30, 24)))
    p.append(bar(250, 416, 580, 14, C(h, 30, 24)))
    p.append(bar(250, 446, 480, 14, C(h, 30, 24)))
    p.append(bar(250, 496, 150, 34, C(h, 75, 55), 17))
    p.append(card(1030, 300, 370, 260, h))  # sidebar
    for y in range(340, 530, 46):
        p.append(bar(1065, y, 26, 26, C(h, 50, 30), 6))
        p.append(bar(1105, y + 6, 200, 14, dim))
    for c in range(3):  # post grid
        x = 210 + c * 400
        p.append(card(x, 600, 360, 140, h))
        p.append(bar(x + 26, 626, 130, 14, dim))
        p.append(bar(x + 26, 656, 280, 12, C(h, 30, 24)))
        p.append(bar(x + 26, 684, 220, 12, C(h, 30, 24)))
    return "".join(p)


COVERS = [
    ("travel-booking", 262, travel, True),
    ("aquarium", 196, aquarium, True),
    ("event-checkin", 152, event, False),
    ("enneagram", 24, enneagram, False),
    ("ai-agent", 288, agent, False),
    ("vassalli", 340, vassalli, True),
    ("ecommerce", 218, ecommerce, True),
    ("wordpress-design", 44, wordpress, True),
]

for slug, hue, fn, chrome in COVERS:
    svg = frame(hue, fn, chrome=chrome)
    (OUT / f"{slug}.svg").write_text(svg)
    print(f"{slug:20} {len(svg):>6} bytes")
