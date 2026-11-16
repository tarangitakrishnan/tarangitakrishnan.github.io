import data from './portfolio-data.json';
import media from './media-map.json';
export type Item={key:string;title:string;description:string;type:string;name:string;span?:number};
const content=data as Record<string,unknown>;
const normalize=(items:unknown)=>((items||[]) as Item[]).map(item=>({...item,type:mediaUrl(item.key).endsWith('.mp4')?'video/mp4':item.type}));
export const worksFor=(category:string)=>normalize(content['works-'+category]);
export const processFor=(key:string)=>normalize(content['process-'+key.replace('/','-')]);
export const filmLayout=content['film-layout'];
export const filmShots=(content['film-gifs']||[]) as {key:string}[];
export const mediaUrl=(key:string)=>(media as Record<string,string>)[key]||'';
export async function portfolioFetch(input:string,options?:RequestInit):Promise<Response>{
 if(options?.method&&options.method!=='GET')return new Response('Update the portfolio source in GitHub to edit content.',{status:405});
 const url=new URL(input,'https://portfolio.local');let result:unknown=null;
 if(url.pathname==='/api/works')result=worksFor(url.searchParams.get('category')||'');
 if(url.pathname==='/api/process')result=processFor(url.searchParams.get('parent')||'');
 if(url.pathname==='/api/film-layout')result=filmLayout;
 if(url.pathname==='/api/film-gifs')result=filmShots;
 return Response.json(result);
}
