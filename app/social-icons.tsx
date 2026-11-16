const svgProps={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,'aria-hidden':true as const};
export function Instagram(){return <svg {...svgProps}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></svg>}
export function Linkedin(){return <svg {...svgProps}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="7.5" cy="7.5" r=".7" fill="currentColor"/><path d="M7.5 11v6M11.5 17v-6m0 2.5c0-3.5 5-3.5 5 0V17"/></svg>}
export function Mail(){return <svg {...svgProps}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg>}
