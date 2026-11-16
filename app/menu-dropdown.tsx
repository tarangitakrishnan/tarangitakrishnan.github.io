'use client';
export default function MenuDropdown({name,slug}:{name:string;slug:string}){
return <details onPointerEnter={e=>{if(e.pointerType==='touch')return;const current=e.currentTarget;current.parentElement?.querySelectorAll('details').forEach(menu=>{menu.open=menu===current})}} onPointerLeave={e=>{if(e.pointerType!=='touch')e.currentTarget.open=false}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node|null))e.currentTarget.open=false}} onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();e.currentTarget.open=false;e.currentTarget.querySelector('summary')?.focus()}}}><summary>{name}<span>⌄</span></summary><div className="dropdown"><a href={'/work/'+slug}>View work <span>↗</span></a></div></details>
}
