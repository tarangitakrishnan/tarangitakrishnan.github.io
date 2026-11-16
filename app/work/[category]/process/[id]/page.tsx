import {worksFor} from '../../../../static-content';
import {notFound} from 'next/navigation';
import Header from '../../../../header';
import {categories} from '../../../../data';
import ProcessGallery from './process-gallery';

export default async function ProcessPage({params}:{params:Promise<{category:string;id:string}>}){const {category,id}=await params;if(!categories.some(c=>c.slug===category)||!/^\d+-[a-f0-9-]+$/.test(id))notFound();const parent=category+'/'+id;const object=worksFor(category).find(w=>w.key===parent);if(!object)notFound();const title=object.title||'Artwork';return <><Header/><main className="collection-page process-page" data-category={category}><section className="collection-head"><a className="eyebrow" href={'/work/'+category}>← BACK TO COLLECTION</a><p className="eyebrow">BEHIND THE ARTWORK</p><h1>{title}</h1><p>From the first idea to the final frame.</p></section><ProcessGallery parent={parent} title={title}/></main><footer><span>© {new Date().getFullYear()} Tarangita Krishnan</span><a href={'/work/'+category}>Back to collection ↗</a></footer></>}

export function generateStaticParams(){return categories.flatMap(c=>worksFor(c.slug).map(w=>({category:c.slug,id:w.key.split('/')[1]})))}
