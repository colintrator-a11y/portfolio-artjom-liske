/**
 * Photography used inside the drawn capability-example scenes.
 *
 * The scenes are mockups of reference builds, so the screens need something in
 * the image slots that reads as a real product rather than a grey placeholder.
 * These are stock photographs under the Pexels License (free to use, no
 * attribution required, modification allowed - https://www.pexels.com/license/),
 * downscaled and re-encoded as WebP; the whole set is a little over 200 KB.
 */

import deskLamp from '../assets/examples/desk-lamp.webp'
import fashionBoutique from '../assets/examples/fashion-boutique.webp'
import giftBox from '../assets/examples/gift-box.webp'
import headphones from '../assets/examples/headphones.webp'
import headphonesWide from '../assets/examples/headphones-wide.webp'
import industrialPlant from '../assets/examples/industrial-plant.webp'
import knitScarf from '../assets/examples/knit-scarf.webp'
import knitSweater from '../assets/examples/knit-sweater.webp'
import oilTastingSet from '../assets/examples/oil-tasting-set.webp'
import oliveGrove from '../assets/examples/olive-grove.webp'
import oliveOilBottle from '../assets/examples/olive-oil-bottle.webp'
import preservesJars from '../assets/examples/preserves-jars.webp'
import quiltedOuterwear from '../assets/examples/quilted-outerwear.webp'
import trailShoes from '../assets/examples/trail-shoes.webp'
import waterBottle from '../assets/examples/water-bottle.webp'
import woolCoat from '../assets/examples/wool-coat.webp'

export const P = {
  deskLamp,
  fashionBoutique,
  giftBox,
  headphones,
  headphonesWide,
  industrialPlant,
  knitScarf,
  knitSweater,
  oilTastingSet,
  oliveGrove,
  oliveOilBottle,
  preservesJars,
  quiltedOuterwear,
  trailShoes,
  waterBottle,
  woolCoat,
}

/**
 * A photograph filling a rounded rectangle, cropped to fit rather than
 * squashed. `id` must be unique on the page - every scene passes its own.
 */
export function Photo({ id, src, x, y, w, h, r = 8, opacity }) {
  return (
    <g>
      <clipPath id={id}>
        <rect x={x} y={y} width={w} height={h} rx={r} />
      </clipPath>
      <image
        href={src}
        x={x}
        y={y}
        width={w}
        height={h}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${id})`}
        opacity={opacity}
      />
    </g>
  )
}
