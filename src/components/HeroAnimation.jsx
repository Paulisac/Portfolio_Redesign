import React from 'react'

export default function HeroAnimation() {
  return (
    <div className="hero-anim">
      <svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
        {/* boundary */}
        <rect className="aBound" x="60" y="60" width="400" height="400" rx="2"/>
        
        {/* H lines at resolved y=130,260,390 spanning x 90→430 */}
        <line className="anim-line anim-animated aH1" x1="90" y1="130" x2="430" y2="130"/>
        <line className="anim-line anim-animated aH2" x1="90" y1="260" x2="430" y2="260"/>
        <line className="anim-line anim-animated aH3" x1="90" y1="390" x2="430" y2="390"/>
        
        {/* V lines at resolved x=130,260,390 spanning y 90→430 */}
        <line className="anim-line anim-animated aV1" x1="130" y1="90" x2="130" y2="430"/>
        <line className="anim-line anim-animated aV2" x1="260" y1="90" x2="260" y2="430"/>
        <line className="anim-line anim-animated aV3" x1="390" y1="90" x2="390" y2="430"/>
        
        {/* circles r=28, circumference≈175.9, on diagonal */}
        <circle className="anim-arc anim-animated aC1" cx="130" cy="130" r="28"/>
        <circle className="anim-arc anim-animated aC2" cx="260" cy="260" r="28"/>
        <circle className="anim-arc anim-animated aC3" cx="390" cy="390" r="28"/>
        
        {/* accent dots, off-diagonal */}
        <circle className="anim-dot-fill aD1" cx="390" cy="130" r="3.5"/>
        <circle className="anim-dot-fill aD2" cx="260" cy="390" r="3.5"/>
        <circle className="anim-dot-fill aD3" cx="130" cy="260" r="3.5"/>
      </svg>
    </div>
  )
}
