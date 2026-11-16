'use client';
import {useEffect} from 'react';
export default function RaccoonNameMotion(){
useEffect(()=>{const walker=document.querySelector<HTMLElement>('.site-header .raccoon-walker'),letters=Array.from(document.querySelectorAll<HTMLElement>('.site-header .name-letter'));if(!walker||!letters.length)return;const preference=window.matchMedia('(prefers-reduced-motion: reduce)'),originals=letters.map(el=>el.style.transform),lifts=letters.map(()=>0);let frame=0,last=0;
function tick(time:number){const dt=last?Math.min(time-last,50):16.7;last=time;const raccoon=walker!.getBoundingClientRect(),center=raccoon.left+raccoon.width/2,radius=raccoon.width*.8,blend=1-Math.exp(-dt/110);letters.forEach((letter,i)=>{const box=letter.getBoundingClientRect(),distance=Math.abs(box.left+box.width/2-center),target=distance<radius?Math.pow(Math.cos(distance/radius*Math.PI/2),2):0;lifts[i]+=(target-lifts[i])*blend;if(target===0&&lifts[i]<.0001)lifts[i]=0;letter.style.transform=`translateY(${-18*lifts[i]}px)`});frame=requestAnimationFrame(tick)}
function sync(){cancelAnimationFrame(frame);last=0;if(preference.matches){letters.forEach((el,i)=>el.style.transform=originals[i]);return}frame=requestAnimationFrame(tick)}
preference.addEventListener('change',sync);sync();return()=>{cancelAnimationFrame(frame);preference.removeEventListener('change',sync);letters.forEach((el,i)=>el.style.transform=originals[i])}},[]);return null
}
