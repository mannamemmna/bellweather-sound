// Coordinates are in the engraver's 520 × 350 plate on both impressions.
const errata=[
 [80,56,19,'Inspect the face of the sun.','Solar seal'],[322,56,16,'Look above the distant peaks.','Passing gull'],[423,41,17,'Read the wind atop the lighthouse.','Signal flag'],[416,139,13,'Count the windows in the tower.','Tower window'],[176,186,14,'Inspect the center of the net loft roof.','Loft dormer'],[265,240,16,'Check the stitching on the large sail.','Sail patch'],[92,303,15,'Inspect the near side of the fishing boat.','Life ring']
];
function harbor(second){
 const ink='#243f40',teal='#377e79',light='#ffe6ae',red='#b34e35';
 const path=(d,f='none',s=ink,w=1.5)=>`<path d="${d}" fill="${f}" stroke="${s}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"/>`;
 const circle=(x,y,r,f,s='none',w=1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${s}" stroke-width="${w}"/>`;
 const rect=(x,y,w,h,f,s='none')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" stroke="${s}"/>`;
 const rep=(n,fn)=>Array.from({length:n},(_,i)=>fn(i)).join('');
 const gull=(x,y)=>path(`M${x-10} ${y-3}q6 -2 10 5q3 -7 10 -6`,'none',ink,2.4);
 const house=(x,y,w,h,roof)=>rect(x,y,w,h,'#ebbf85',ink)+path(`M${x-4} ${y}l${w*.4} -${h*.6}h${w*.5}l${w*.1+8} ${h*.6}Z`,roof)+rep(3,i=>rect(x+4+i*w*.29,y+5,w*.12,h*.28,ink))+rect(x+w*.4,y+h*.54,6,h*.46,teal);
 let a=rect(0,0,520,350,'#f6cca0');
 a+=rep(19,i=>path(`M${(i*67)%530-20} ${10+i*5}h${22+(i*17)%66}`,'none','#e6b58a',1));
 a+=circle(80,56,25,'#f4b955',red)+rep(24,i=>`<g transform="rotate(${i*15} 80 56)">${path('M80 22v6','none',red,1)}</g>`)+(second?path('M72 57q8 -13 16 0q-8 11 -16 0Z','none',red,2)+circle(80,56,3,red):circle(80,56,8,'none',red,2));
 a+=path('M0 143L40 121 73 130 130 85 168 107 202 69 237 98 260 86 303 118 338 95 386 125 445 93 520 130V181H0Z','#91a89b','#697e77');
 a+=path('M96 115l34 -30 13 8 -14 0 -5 9 -4 -2ZM176 99l26 -30 20 17 -14 -5 -7 7 -2 -4Z','#ebd6ad','none');
 a+=path('M0 148Q52 115 92 141T184 137Q221 122 270 143T352 142Q392 123 440 139T520 134V180H0Z','#739488','none');
 a+=rep(45,i=>{let x=i*12,y=145+5*Math.sin(i*.65);return path(`M${x} ${y+12}l4 -16 4 16Z`,'#557e70','none')});
 a+=gull(301,66)+gull(345,65)+(second?'':gull(322,56));
 a+=rect(0,160,520,190,'#71aaa0')+rep(150,i=>{let x=i*139%543-20,y=163+(i*23%185);return path(`M${x} ${y}q6 2 ${6+i%22} 0`,'none',i%3?'#528e86':'#c3d2aa',.9)});
 a+=path('M342 194l19 -25 36 -8 45 -14 47 8 31 -11v47l-47 12 -53 -7 -47 8Z','#b97c5b')+path('M342 194l30 -19 34 -4 31 -15 49 8 34 -12v-9l-31 10 -47 -9 -45 14 -38 9Z','#65816a');
 a+=rep(15,i=>path(`M${357+i*12} ${183+6*Math.sin(i)}l-6 7`,'none','#85543f'));
 a+=path('M395 165l10 -84h22l11 82q-20 7 -43 2Z','#f8deb0')+path('M403 101l26 -1 3 18 -31 3Z',red)+rect(403,66,26,17,'#efbb6c',ink)+rep(4,i=>path(`M${404+i*8} 67v15`))+path('M398 66l18 -16 18 16Z',ink)+path('M397 84h38v4h-38Z',red)+path('M416 52V30')+path(second?'M417 31l15 7 -15 5Z':'M417 31l17 2 -3 10 -14 -3Z',red)+rect(413,151,7,14,ink)+(second?'':rect(412,134,8,10,ink));
 a+=house(461,147,34,18,red)+path('M0 219l43 -13 68 6 42 -8 96 17 -35 12 -110 -5 -48 11 -56 -5Z','#87715a');
 a+=house(7,187,43,29,'#a7553e')+house(57,179,40,35,teal)+house(97,195,33,20,red)+house(131,201,78,25,red)+(second?'':path('M168 191l8 -10 9 10Z',ink)+rect(172,191,9,5,light,ink));
 a+=path('M0 228l98 -12 99 11 35 -3v5l-35 4 -99 -10 -98 12Z','#b68a62')+rep(8,i=>path(`M${8+i*28} ${230+(i>4?0:-i*2)}v12`,'none',ink,3));
 a+=path('M287 182v100','none',ink,3)+path('M284 188q-16 29 -52 71l52 5Z','#ffe0a5')+path('M291 203l33 54 -33 5Z','#d58b5b')+path('M278 202q-9 22 -31 51','none','#c69b6c')+(second?'':path('M265 232l8 4 -6 12 -8 -5Z','#a86445'))+path('M224 270q48 7 110 -3l-20 17 -68 1Z',ink)+path('M237 275q43 6 84 -2','none',light,2);
 a+=path('M0 295q36 7 64 -1l99 -7 -19 26 -26 9 -89 -2Z',red)+path('M0 294q46 7 162 -8l-4 6q-86 17 -158 10Z',ink)+path('M18 309q49 9 121 -3','none','#e4a16b',2)+path('M22 292l10 -26 38 -3 12 30Z','#edc687')+path('M27 268l4 -7 41 -3 2 7Z',teal)+rect(37,270,11,12,ink)+rect(53,269,13,12,ink)+path('M113 291v-39l28 34','none',ink,2)+(second?'':circle(92,303,8,light,ink)+circle(92,303,4,red,ink));
 a+=path('M374 350q35 -24 51 -21l40 -20 55 1v40Z','#47685f')+rep(24,i=>{let x=405+i*5,y=346-(x-405)*.24;return path(`M${x} ${y}q-1 -12 -5 -${12+i%10}m5 ${12+i%10}l5 -16`,'none','#2b514d',2)});
 return a;
}
