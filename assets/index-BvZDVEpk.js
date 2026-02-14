import{j as e,C as P,S as I,O as B,u as R,a as C,A as T,b as S,c as $}from"./three-vendor-xRBeSY-j.js";import{r as m,m as t,a as w,A,R as E}from"./animation-vendor-DY6BFZYw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(r){if(r.ep)return;r.ep=!0;const d=n(r);fetch(r.href,d)}})();function Y(){const o=m.useRef(),a=m.useRef();R(d=>{o.current&&(o.current.rotation.y+=.001,o.current.rotation.z+=5e-4),a.current&&(a.current.rotation.x+=2e-4,a.current.rotation.y-=3e-4)});const n=5e3,l=new Float32Array(n*3),r=new Float32Array(n*3);for(let d=0;d<n;d++){const f=d*3,i=Math.random()*5,c=i*2,h=d%3*(Math.PI*2)/3;l[f]=Math.cos(h+c)*i,l[f+1]=(Math.random()-.5)*2,l[f+2]=Math.sin(h+c)*i;const y=new C,j=new C("#ff6b9d"),_=new C("#c44569");y.lerpColors(j,_,i/5),r[f]=y.r,r[f+1]=y.g,r[f+2]=y.b}return e.jsx("group",{ref:o,children:e.jsxs("points",{ref:a,children:[e.jsxs("bufferGeometry",{children:[e.jsx("bufferAttribute",{attach:"attributes-position",count:n,array:l,itemSize:3}),e.jsx("bufferAttribute",{attach:"attributes-color",count:n,array:r,itemSize:3})]}),e.jsx("pointsMaterial",{size:.05,sizeAttenuation:!0,depthWrite:!1,vertexColors:!0,blending:T})]})})}function O({onNext:o}){const[a,n]=m.useState(!1),[l,r]=m.useState(!1);m.useEffect(()=>{const f=setTimeout(()=>n(!0),1e3),i=setTimeout(()=>r(!0),3e3);return()=>{clearTimeout(f),clearTimeout(i)}},[]);const d=()=>{l&&o()};return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:.8},transition:{duration:1},className:"w-full h-screen relative overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black",onClick:d,children:[e.jsxs(P,{camera:{position:[0,0,5],fov:75},className:"absolute inset-0",children:[e.jsx("ambientLight",{intensity:.5}),e.jsx("pointLight",{position:[10,10,10],intensity:1,color:"#ff6b9d"}),e.jsx(I,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0,speed:1}),e.jsx(Y,{}),e.jsx(B,{enableZoom:!1,enablePan:!1,enableRotate:!0,autoRotate:!0,autoRotateSpeed:.5})]}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[e.jsx("div",{className:"absolute inset-0 bg-black/60 z-0"}),a&&e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1},className:"text-center z-10 px-4",children:[e.jsx(t.h1,{className:"text-4xl md:text-6xl font-romantic text-white glow-text mb-4",animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},children:"Hola!"}),e.jsx(t.p,{className:"text-lg md:text-xl text-valentine-pink font-modern",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"Con cariño, para ti"})]}),l&&e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:[0,1,0]},transition:{duration:2,repeat:1/0},className:"absolute bottom-20 text-white/60 font-modern text-sm pointer-events-auto cursor-pointer",children:[e.jsx("span",{className:"hidden md:inline",children:"Haz clic para continuar"}),e.jsx("span",{className:"md:hidden",children:"Toca la pantalla para continuar"})]})]}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(20)].map((f,i)=>e.jsx(t.div,{className:"absolute w-1 h-1 bg-valentine-pink rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{y:[0,-100,0],opacity:[0,1,0]},transition:{duration:3+Math.random()*2,repeat:1/0,delay:Math.random()*2}},i))})]})}function H({onNext:o,onMusicStart:a}){const[n,l]=m.useState(!1),[r,d]=m.useState(!1),[f,i]=m.useState(0),c=m.useRef(null),h=m.useRef(null),y=S(({movement:[v,p],last:s})=>{const x=Math.max(0,p),g=v;if(i(x),c.current&&w.to(c.current,{y:x,duration:.05,ease:"none"}),h.current){const u=Math.atan2(x,g)*(180/Math.PI),b=Math.sqrt(g*g+x*x);w.to(h.current,{height:b,rotation:u+90,duration:.05,ease:"none"})}s&&x>80?j():s&&(i(0),w.to(c.current,{y:0,duration:.5,ease:"elastic.out(1, 0.5)"}),w.to(h.current,{height:0,duration:.5,ease:"elastic.out(1, 0.5)"}))},{filterTaps:!0,axis:"y"}),j=()=>{l(!0),w.timeline().to(c.current,{y:f+150,opacity:0,scale:.5,duration:.6,ease:"power2.in"}).to(h.current,{opacity:0,duration:.4},"<"),setTimeout(()=>{_()},400)},_=()=>{d(!0),a(),w.timeline().to(".gift-lid",{y:-15,duration:.25,ease:"power1.out"}).to(".gift-lid",{rotateX:-125,y:-60,z:-40,duration:.9,ease:"back.out(1.2)"}).to(".gift-box",{y:-8,duration:.15},"-=0.5").to(".gift-box",{y:0,duration:.2,ease:"bounce.out"}),L(),setTimeout(()=>{o()},3e3)},L=()=>{const v=document.querySelector(".hearts-container");if(v)for(let p=0;p<40;p++){const s=document.createElement("div");s.innerHTML="❤️",s.style.cssText=`
        position: absolute;
        font-size: ${Math.random()*25+20}px;
        left: 50%;
        top: 50%;
        pointer-events: none;
      `,v.appendChild(s),w.to(s,{x:(Math.random()-.5)*600,y:(Math.random()-.5)*600,opacity:0,rotation:Math.random()*720,duration:2+Math.random(),ease:"power2.out",onComplete:()=>s.remove()})}};return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8},className:"w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden",children:[e.jsx("div",{className:"hearts-container absolute inset-0 pointer-events-none z-50"}),e.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[...Array(25)].map((v,p)=>e.jsx(t.div,{className:"absolute w-1.5 h-1.5 bg-valentine-rose/20 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{y:[0,-80],opacity:[.2,0]},transition:{duration:3+Math.random()*2,repeat:1/0,delay:Math.random()*3}},p))}),e.jsx(t.div,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},className:"absolute top-16 md:top-24 text-center z-10",children:e.jsx("h2",{className:"text-2xl md:text-4xl font-romantic text-valentine-red mb-1",children:"Jala el lazo hacia abajo 🎀"})}),e.jsxs("div",{className:"relative flex flex-col items-center",style:{perspective:"1200px"},children:[!n&&e.jsx("div",{ref:h,className:"absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-40",style:{top:"48px",width:"45px",height:"0px",background:"linear-gradient(to bottom, #FBBF24, #F59E0B)",borderRadius:"5px",boxShadow:"0 2px 10px rgba(251, 191, 36, 0.4)"}}),!n&&e.jsx("div",{...y(),ref:c,className:"relative z-40 cursor-grab active:cursor-grabbing -mb-12",style:{touchAction:"none"},children:e.jsxs("div",{className:"relative",children:[e.jsx(t.div,{animate:{scaleX:[1,1.03,1]},transition:{duration:2,repeat:1/0},className:"absolute -left-9 top-0 w-10 h-14 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg shadow-xl",style:{transform:"rotate(-22deg)",boxShadow:"0 4px 15px rgba(234, 179, 8, 0.5), inset -2px -2px 6px rgba(0,0,0,0.15)"},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-lg"})}),e.jsx(t.div,{animate:{scaleX:[1,1.03,1]},transition:{duration:2,repeat:1/0,delay:.1},className:"absolute -right-9 top-0 w-10 h-14 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg shadow-xl",style:{transform:"rotate(22deg)",boxShadow:"0 4px 15px rgba(234, 179, 8, 0.5), inset 2px -2px 6px rgba(0,0,0,0.15)"},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-lg"})}),e.jsxs("div",{className:"relative w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-2xl",style:{boxShadow:"0 6px 20px rgba(234, 179, 8, 0.6), inset -2px -2px 8px rgba(0,0,0,0.25), inset 2px 2px 6px rgba(255,255,255,0.4)"},children:[e.jsx("div",{className:"absolute top-2 left-3 w-5 h-5 bg-white/50 rounded-full blur-sm"}),e.jsx(t.div,{animate:{y:[0,8,0],opacity:[.7,1,.7]},transition:{duration:1.5,repeat:1/0},className:"absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-2xl",children:"👇"})]})]})}),e.jsx(t.div,{className:"gift-lid relative z-30 mb-[-50px] ",style:{transformStyle:"preserve-3d",transformOrigin:"center bottom"},children:e.jsxs("div",{className:"w-60 h-16 md:w-72 md:h-20 bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-t-xl shadow-2xl relative overflow-hidden",style:{boxShadow:"0 -6px 25px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)"},children:[e.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(139,0,0,0.15)_12px,rgba(139,0,0,0.15)_24px)]"}),e.jsx("div",{className:"absolute top-0 left-6 right-6 h-6 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-2 bg-red-800/60"}),e.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-5 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 transform -translate-y-1/2 shadow-md"})]})}),e.jsxs("div",{className:"gift-box w-52 h-52 md:w-64 md:h-64 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-lg shadow-2xl relative overflow-hidden",style:{boxShadow:"0 12px 35px rgba(0,0,0,0.35), inset 0 2px 8px rgba(0,0,0,0.15)"},children:[e.jsx("div",{className:"absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(139,0,0,0.15)_12px,rgba(139,0,0,0.15)_24px)]"}),e.jsx("div",{className:"absolute left-1/2 top-0 bottom-0 w-11 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 transform -translate-x-1/2 shadow-lg"}),e.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-11 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 transform -translate-y-2 shadow-lg"}),e.jsx("div",{className:"absolute top-0 left-10 right-10 h-20 bg-gradient-to-b from-white/15 to-transparent"}),r&&e.jsx(t.div,{initial:{opacity:0,scale:0,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.6,duration:.8,type:"spring"},className:"absolute inset-0 flex items-center justify-center",children:e.jsx(t.div,{className:"text-8xl",animate:{scale:[1,1.15,1],rotate:[0,5,-5,0]},transition:{duration:2,repeat:1/0},children:"💝"})})]}),e.jsx("div",{className:"absolute -bottom-8 w-60 md:w-72 h-8 bg-black/20 rounded-full blur-2xl"})]})]})}function q({onNext:o}){const[a,n]=m.useState(!1),[l,r]=m.useState(!1);m.useEffect(()=>{const f=setTimeout(()=>{d()},2e3);return()=>clearTimeout(f)},[]);const d=()=>{n(!0),w.timeline().to(".envelope-flap",{rotationX:-180,duration:1.5,ease:"power2.out"}).to(".envelope-body",{y:0,duration:.3},"-=0.5"),setTimeout(()=>{r(!0),w.to(".letter-paper",{y:-128,duration:1.5,ease:"power2.out"})},1500)};return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:-50},transition:{duration:.8},className:"w-full h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(20)].map((f,i)=>e.jsx(t.div,{className:"absolute text-4xl opacity-20",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{y:[0,-100,0],rotate:[0,360]},transition:{duration:10+Math.random()*5,repeat:1/0,delay:Math.random()*5},children:"💕"},i))}),e.jsxs("div",{className:"relative z-10",style:{perspective:"1000px"},children:[e.jsxs("div",{className:"relative w-80 md:w-96",children:[e.jsx("div",{className:"envelope-flap absolute top-0 left-0 right-0 z-20",style:{transformStyle:"preserve-3d",transformOrigin:"top"},children:e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"w-80 md:w-96 h-40 bg-gradient-to-b from-red-700 to-red-600 relative shadow-2xl",style:{clipPath:"polygon(0 0, 50% 100%, 100% 0)"},children:[e.jsx("div",{className:"absolute inset-0 opacity-10 bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.1)_20%,_rgba(0,0,0,0.1)_80%,_transparent_80%)] bg-[length:10px_10px]"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"})]}),!a&&e.jsx(t.div,{animate:{scale:[1,1.1,1]},transition:{duration:2,repeat:1/0},className:"absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",style:{marginLeft:"-22px"},children:e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:"💝"})})})]})}),e.jsxs("div",{className:"envelope-body relative mt-40 bg-gradient-to-b from-red-600 to-red-700 rounded-lg shadow-2xl overflow-hidden",style:{width:"320px",height:"250px"},children:[e.jsx("div",{className:"absolute inset-0 opacity-10 bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.1)_20%,_rgba(0,0,0,0.1)_80%,_transparent_80%)] bg-[length:10px_10px]"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-white/60 font-romantic p-8",children:[e.jsx("p",{className:"text-sm mb-2",children:"Para:"}),e.jsx("p",{className:"text-lg",children:"Mi Persona Favorita 💖"})]}),l&&e.jsxs("div",{className:"letter-paper absolute inset-x-4 top-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-xl p-6 overflow-hidden",style:{height:"220px"},children:[e.jsx("div",{className:"letter-paper absolute inset-x-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-xl p-2 overflow-hidden"}),e.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1},className:"relative z-10 h-full overflow-y-auto px-1",children:e.jsxs("div",{className:"space-y-4 text-gray-800",children:[e.jsx(t.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"text-right text-sm text-gray-600 font-modern",children:"14 de Febrero de 2026"}),e.jsx(t.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1},className:"text-lg font-romantic text-valentine-red",children:"Para: Mi persona favorita 💖"}),e.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2},className:"space-y-3 text-sm md:text-base leading-relaxed font-modern",children:e.jsx("p",{children:" Hoy mucho más que un día de San Valentín, celebro los 100 días que hemos compartido, los cuales me han sido muy significativos. Gracias por estar a mi lado, por mejorarme cada día y por ser siempre estar. Cada conversación, cada beso y cada abrazo me han demostrado tu gran amor y lo que estoy viviendo contigo me hace muy feliz. Te amo más de lo que uno se puede imaginar, y estoy emocionado por todos los momentos que nos esperan. ¡Feliz San Valentín mi amor y por muchos más días juntos! "})}),e.jsxs(t.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.5},className:"text-right font-romantic text-lg mt-8",children:["Con todo mi amor,",e.jsx("br",{}),e.jsx("span",{className:"text-valentine-red",children:"Aaron"})]}),e.jsxs(t.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:2,duration:.5},className:"flex justify-center gap-2 text-2xl mt-4",children:[e.jsx("span",{children:"💕"}),e.jsx("span",{children:"💖"}),e.jsx("span",{children:"💕"})]})]})}),e.jsx("div",{className:"absolute inset-0 border-2 border-valentine-gold/30 rounded-lg pointer-events-none"})]})]})]}),e.jsx("div",{className:"absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-black/20 rounded-full blur-2xl"})]}),a&&e.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(30)].map((f,i)=>e.jsx(t.div,{className:"absolute w-2 h-2 bg-yellow-400 rounded-full",style:{left:"50%",top:"40%"},animate:{x:(Math.random()-.5)*400,y:(Math.random()-.5)*400,opacity:[1,0]},transition:{duration:1.5,delay:Math.random()*.5}},i))}),!l&&e.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},className:"absolute bottom-20 text-center w-full px-4",children:e.jsx("p",{className:"text-valentine-red font-romantic text-lg md:text-xl",children:"Abriendo carta..."})}),l&&e.jsx(t.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2.5},onClick:o,className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-valentine-red text-white rounded-full font-romantic text-lg shadow-lg hover:bg-valentine-red/90 transition-colors z-50",children:"Continuar 💖"})]})}function G({onNext:o}){const[a,n]=m.useState(0);return m.useEffect(()=>{const l=()=>{"vibrate"in navigator&&navigator.vibrate(100)},r=setInterval(()=>{l(),n(f=>f+1)},800),d=setTimeout(()=>{o()},8e3);return()=>{clearInterval(r),clearTimeout(d)}},[o]),e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8},className:"w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-900/20 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 opacity-10",children:e.jsx("div",{className:"w-full h-full bg-[linear-gradient(rgba(255,105,180,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,105,180,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"})}),e.jsxs("div",{className:"relative z-10 w-full max-w-4xl px-4",children:[e.jsxs("div",{className:"relative h-64 flex items-center justify-center overflow-hidden",children:[e.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 800 200",preserveAspectRatio:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"lineGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF1744",stopOpacity:"0"}),e.jsx("stop",{offset:"50%",stopColor:"#FF1744",stopOpacity:"1"}),e.jsx("stop",{offset:"100%",stopColor:"#FF1744",stopOpacity:"0"})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx(t.path,{d:"M 0 100 L 100 100 L 120 100 L 130 60 L 140 140 L 150 40 L 160 100 L 180 100 L 200 100 L 220 100 L 240 100 L 260 100 L 280 100 L 300 100 L 320 100 L 340 100 L 360 100 L 380 100 L 400 100 L 420 100 L 440 100 L 460 100 L 480 100 L 500 100 L 520 100 L 540 100 L 560 100 L 580 100 L 600 100 L 620 100 L 640 100 L 660 100 L 680 100 L 700 100 L 720 100 L 740 100 L 760 100 L 780 100 L 800 100",fill:"none",stroke:"url(#lineGradient)",strokeWidth:"3",filter:"url(#glow)",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{pathLength:{duration:2,ease:"linear",repeat:1/0},opacity:{duration:.5}}}),e.jsx(t.path,{d:"M 0 100 L 100 100 L 120 100 L 130 60 L 140 140 L 150 40 L 160 100 L 180 100 L 200 100",fill:"none",stroke:"#FF1744",strokeWidth:"4",filter:"url(#glow)",animate:{x:[-200,800]},transition:{duration:3,repeat:1/0,ease:"linear"}})]}),e.jsx(t.div,{className:"absolute text-8xl md:text-9xl",animate:{scale:[1,1.2,1],filter:["drop-shadow(0 0 20px rgba(255, 23, 68, 0.8))","drop-shadow(0 0 40px rgba(255, 23, 68, 1))","drop-shadow(0 0 20px rgba(255, 23, 68, 0.8))"]},transition:{duration:.8,repeat:1/0,ease:"easeInOut"},children:"❤️"})]}),e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-center mt-12 space-y-4",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-romantic text-white glow-text",children:"Te amo"}),e.jsx(t.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"text-lg md:text-xl text-valentine-pink font-modern",children:"Cada latido es un recordatorio de lo mucho que significas para mí"})]}),e.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},className:"absolute top-8 right-8 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-red-500/30",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-red-400 text-sm font-modern mb-1",children:"BPM"}),e.jsx(t.p,{initial:{scale:1.5,color:"#FF1744"},animate:{scale:1,color:"#FF4081"},className:"text-3xl font-bold font-modern",children:80+a%15},a)]})}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(15)].map((l,r)=>e.jsx(t.div,{className:"absolute text-2xl",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{y:[-20,-100],opacity:[0,.6,0],scale:[.5,1,.5]},transition:{duration:3,repeat:1/0,delay:Math.random()*3},children:"💓"},r))}),[...Array(3)].map((l,r)=>e.jsx(t.div,{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-red-500 rounded-full pointer-events-none",animate:{width:["0px","600px"],height:["0px","600px"],opacity:[.8,0]},transition:{duration:2,repeat:1/0,delay:r*.7,ease:"easeOut"}},r))]}),e.jsx(t.div,{initial:{opacity:0},animate:{opacity:[.3,1,.3]},transition:{duration:2,repeat:1/0},className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-modern",children:"Escuchando los latidos del corazón..."})]})}function X({onNext:o}){const[a,n]=m.useState(!1),[l,r]=m.useState({x:0,y:0}),[d,f]=m.useState(1),[i,c]=m.useState(0),h=m.useRef(null),y=["¿Segura? 🥺","Piénsalo otra vez 💭","No seas así ❤️","Dale una oportunidad 🌹","Tú sabes que quieres 😊","¡Vamos! 💕","Solo di que sí 💝","No me hagas esto 😢"],j=()=>{n(!0),"vibrate"in navigator&&navigator.vibrate([100,50,100,50,200]),w.timeline().to(".heart-left",{x:80,rotation:0,duration:1,ease:"back.out(1.7)"}).to(".heart-right",{x:-80,rotation:0,duration:1,ease:"back.out(1.7)"},"<").to(".heart-left, .heart-right",{scale:1.2,duration:.3}).to(".heart-left, .heart-right",{scale:1,duration:.3}),w.to(".character-left",{x:50,rotation:-10,duration:1,ease:"back.out(1.7)"}),w.to(".character-right",{x:-50,rotation:10,duration:1,ease:"back.out(1.7)"}),L(),setTimeout(()=>{o()},4e3)},_=()=>{c(v=>v+1),"vibrate"in navigator&&navigator.vibrate([50,30,50]),h.current&&w.timeline().to(h.current,{backgroundColor:"#dc2626",duration:.15,ease:"power2.out"}).to(h.current,{backgroundColor:"#ef4444",duration:.25,ease:"power2.out"})},L=()=>{const v=document.querySelector(".celebration-container");for(let p=0;p<50;p++){const s=document.createElement("div");s.className="celebration-heart",s.innerHTML=["❤️","💕","💖","💗","💓","💝"][Math.floor(Math.random()*6)],s.style.cssText=`
        position: absolute;
        font-size: ${Math.random()*30+20}px;
        left: 50%;
        top: 50%;
        pointer-events: none;
      `,v.appendChild(s),w.to(s,{x:(Math.random()-.5)*600,y:(Math.random()-.5)*600-200,opacity:0,rotation:Math.random()*720,duration:2+Math.random(),ease:"power2.out",onComplete:()=>s.remove()})}};return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:.9},transition:{duration:.8},className:"w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 relative overflow-hidden",children:[e.jsx("div",{className:"celebration-container absolute inset-0 pointer-events-none z-50"}),e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(25)].map((v,p)=>e.jsx(t.div,{className:"absolute text-3xl opacity-10",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{y:[0,-50,0],rotate:[0,180,360]},transition:{duration:8+Math.random()*4,repeat:1/0,delay:Math.random()*5},children:["❤️","💕","💖"][Math.floor(Math.random()*3)]},p))}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center px-4",children:[e.jsx(t.h2,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-3xl md:text-5xl font-romantic text-valentine-red mb-12 text-center glow-text",children:"¿Quieres ser mi San Valentín?"}),e.jsxs("div",{className:"relative w-80 h-80 md:w-96 md:h-96 mb-12",children:[e.jsx(t.div,{className:"heart-left absolute left-0 top-1/2 transform -translate-y-1/2",initial:{x:-100,opacity:0},animate:{x:a?80:0,opacity:1,rotate:a?0:-15},transition:{duration:.8,delay:.2},children:e.jsxs("svg",{width:"160",height:"200",viewBox:"0 0 100 120",className:"drop-shadow-2xl",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"heartGradientLeft",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF6B9D"}),e.jsx("stop",{offset:"100%",stopColor:"#FF1744"})]})}),e.jsx("path",{d:"M 50 20 C 50 10, 40 0, 25 0 C 10 0, 0 10, 0 25 C 0 45, 20 65, 50 100 L 50 100 L 50 20 Z",fill:"url(#heartGradientLeft)",stroke:"#C2185B",strokeWidth:"2"})]})}),e.jsx(t.div,{className:"character-left absolute left-8 top-1/2 transform -translate-y-1/2 text-6xl",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,x:a?50:0},transition:{delay:.5,type:"spring"},children:"😊"}),e.jsx(t.div,{className:"heart-right absolute right-0 top-1/2 transform -translate-y-1/2",initial:{x:100,opacity:0},animate:{x:a?-80:0,opacity:1,rotate:a?0:15},transition:{duration:.8,delay:.2},children:e.jsxs("svg",{width:"160",height:"200",viewBox:"0 0 100 120",className:"drop-shadow-2xl",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"heartGradientRight",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF6B9D"}),e.jsx("stop",{offset:"100%",stopColor:"#FF1744"})]})}),e.jsx("path",{d:"M 50 20 C 50 10, 60 0, 75 0 C 90 0, 100 10, 100 25 C 100 45, 80 65, 50 100 L 50 100 L 50 20 Z",fill:"url(#heartGradientRight)",stroke:"#C2185B",strokeWidth:"2"})]})}),e.jsx(t.div,{className:"character-right absolute right-8 top-1/2 transform -translate-y-1/2 text-6xl",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,x:a?-50:0},transition:{delay:.5,type:"spring"},children:"🥰"}),!a&&e.jsx("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",children:[...Array(10)].map((v,p)=>e.jsx(t.div,{className:"absolute w-2 h-2 bg-valentine-rose rounded-full",animate:{x:[(Math.random()-.5)*40,(Math.random()-.5)*40],y:[(Math.random()-.5)*40,(Math.random()-.5)*40],opacity:[.3,.8,.3]},transition:{duration:2,repeat:1/0,delay:p*.2}},p))})]}),!a&&e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex gap-4 relative",children:[e.jsx(t.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:j,className:"premium-button bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden",children:e.jsx("span",{className:"relative z-10 flex items-center gap-2",children:"✅ Sí"})}),e.jsx(t.button,{ref:h,onMouseEnter:_,onTouchStart:_,className:"premium-button bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden whitespace-nowrap",children:e.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:["❌ ",y[Math.min(i,y.length-1)]]})})]}),a&&e.jsxs(t.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:1,type:"spring"},className:"text-center mt-8",children:[e.jsx("h3",{className:"text-4xl md:text-5xl font-romantic text-valentine-red glow-text mb-4",children:"¡Sabía que dirías que sí! 💝"}),e.jsx("p",{className:"text-xl text-valentine-rose font-modern",children:"¡Te amooo!"})]})]}),a&&e.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[...Array(100)].map((v,p)=>e.jsx(t.div,{className:"absolute text-2xl",style:{left:`${Math.random()*100}%`,top:"-50px"},animate:{y:window.innerHeight+100,rotate:360},transition:{duration:3+Math.random()*2,delay:Math.random()*2,ease:"linear"},children:["❤️","💕","💖","💗","💓","💝"][Math.floor(Math.random()*6)]},p))})]})}function D({onNext:o}){const[a,n]=m.useState([]),[l,r]=m.useState(!1),[d,f]=m.useState(0),i=3,c=100,h=["0","5","1","1","2","0","2","5","❤️"];m.useEffect(()=>{y()},[]);const y=()=>{const s=[];for(let u=0;u<i;u++)for(let b=0;b<i;b++){const N=u*i+b,F=h[N],M=F==="❤️";s.push({id:N,row:u,col:b,correctRow:u,correctCol:b,currentX:M?b*c:(Math.random()-.5)*300,currentY:M?u*c:(Math.random()-.5)*300+150,isPlaced:M,isFixed:M,number:F,orderNumber:N+1})}const x=s.filter(u=>u.isFixed),g=s.filter(u=>!u.isFixed).sort(()=>Math.random()-.5);n([...x,...g])},j=(s,x,g)=>{const u=s.correctCol*c,b=s.correctRow*c;return Math.sqrt(Math.pow(x-u,2)+Math.pow(g-b,2))<40},_=(s,x,g)=>{const u=x*i+g,b=h[u];return s.number===b},L=(s,x,g)=>{const u=Math.round(x/c),b=Math.round(g/c);if(!(b<0||b>=i||u<0||u>=i)&&j(s,x,g)&&_(s,b,u)){const N=u*c,F=b*c,M=s.isPlaced;n(k=>k.map(z=>z.id===s.id?{...z,currentX:N,currentY:F,isPlaced:!0}:z)),M||f(k=>k+1),"vibrate"in navigator&&navigator.vibrate(100),a.every(k=>k.id===s.id?!0:k.isPlaced)&&v()}},v=()=>{r(!0),"vibrate"in navigator&&navigator.vibrate([200,100,200]),p(),setTimeout(()=>{o()},4e3)},p=()=>{const s=document.querySelector(".puzzle-celebration");for(let x=0;x<50;x++){const g=document.createElement("div");g.innerHTML="💖",g.style.cssText=`
        position: absolute;
        font-size: ${Math.random()*25+15}px;
        left: ${Math.random()*100}%;
        top: -50px;
        pointer-events: none;
      `,s.appendChild(g),w.to(g,{y:window.innerHeight+100,x:(Math.random()-.5)*100,rotation:Math.random()*360,opacity:0,duration:3+Math.random()*2,ease:"none",onComplete:()=>g.remove()})}};return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8},className:"w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 relative overflow-hidden",children:[e.jsx("div",{className:"puzzle-celebration absolute inset-0 pointer-events-none z-50"}),e.jsxs(t.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-center mb-8 px-4",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-romantic text-valentine-red glow-text mb-2",children:l?"¡Completado! 🎉":"Arma Nuestra Fecha"}),e.jsx("p",{className:"text-lg md:text-xl text-valentine-rose font-modern",children:l?"¡Eres increíble!":`${d}/${i*i-1} piezas colocadas`})]}),e.jsxs("div",{className:"relative mb-24",children:[e.jsxs("div",{className:"relative bg-white/40 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border-2 border-valentine-pink/30",style:{width:i*c+32,height:i*c+32},children:[e.jsx("div",{className:"absolute inset-4 grid gap-0",style:{gridTemplateColumns:`repeat(${i}, ${c}px)`,gridTemplateRows:`repeat(${i}, ${c}px)`},children:Array.from({length:i*i}).map((s,x)=>e.jsx("div",{className:"border-2 border-dashed border-valentine-pink/30 rounded-lg relative",children:e.jsx("span",{className:"absolute top-1 left-1.5 text-sm text-valentine-pink/60 font-bold",children:x+1})},x))}),a.map(s=>e.jsx(V,{piece:s,onDragEnd:L,pieceSize:c},s.id)),l&&e.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"absolute inset-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-300 via-red-300 to-purple-300",children:e.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center relative",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-7xl font-bold text-white drop-shadow-2xl mb-2",children:"05 · 11 · 2025"}),e.jsx("div",{className:"text-3xl text-white/90",children:"💑"})]}),e.jsx("div",{className:"absolute bottom-2 text-white/40 font-romantic text-xs",children:"Con amor para ti 💕"})]})})]}),!l&&d===0&&e.jsx(t.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"text-center mt-6 text-valentine-red font-modern",children:"Arrastra las piezas a su lugar correcto"})]}),!l&&e.jsx(t.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},onClick:o,className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-valentine-red text-white px-8 py-3 rounded-full font-modern text-base shadow-lg hover:bg-valentine-red/90 transition-colors z-50",children:"Saltar ⏭️"}),e.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((s,x)=>e.jsx(t.div,{className:"absolute text-3xl opacity-20",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{y:[0,-30,0],rotate:[0,180,360]},transition:{duration:10+Math.random()*5,repeat:1/0,delay:Math.random()*5},children:"🧩"},x))})]})}function V({piece:o,onDragEnd:a,pieceSize:n}){const[l,r]=m.useState({x:o.currentX,y:o.currentY});m.useEffect(()=>{r({x:o.currentX,y:o.currentY})},[o.currentX,o.currentY]);const d=S(({offset:[i,c],last:h})=>{o.isFixed||(r({x:i,y:c}),h&&a(o,i,c))},{from:()=>[l.x,l.y],bounds:{left:-300,right:300,top:-300,bottom:300}}),f=["from-pink-400 to-rose-400","from-red-400 to-pink-400","from-purple-400 to-pink-400","from-rose-400 to-red-400","from-pink-500 to-purple-400","from-red-500 to-rose-400","from-purple-500 to-pink-500","from-rose-500 to-red-500","from-pink-600 to-purple-500"];return e.jsx(t.div,{...d(),style:{width:n,height:n,x:l.x,y:l.y,touchAction:"none",position:"absolute",left:16,top:16},animate:{scale:o.isPlaced?1:.95,zIndex:o.isPlaced?1:10},className:`${o.isFixed||o.isPlaced?"pointer-events-none cursor-default":"cursor-grab active:cursor-grabbing"}`,children:e.jsxs("div",{className:`w-full h-full bg-gradient-to-br ${f[o.id]} rounded-lg shadow-xl border-2 border-white/50 flex items-center justify-center select-none relative ${o.isPlaced||o.isFixed?"opacity-100":"hover:shadow-2xl"}`,children:[e.jsx("span",{className:"absolute top-1 left-2 text-sm text-white/70 font-bold",children:o.orderNumber}),e.jsx("span",{className:"text-white font-bold text-6xl drop-shadow-lg",children:o.number}),!o.isPlaced&&!o.isFixed&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg"})]})})}function W({onNext:o}){return e.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8},className:"w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden",children:[e.jsx("style",{jsx:!0,children:`
        .flowers-bottom {
          position: fixed;
          bottom: 18vh;
          left: 50%;
          transform: translateX(-50%) scale(1);
          z-index: 2;
          pointer-events: none;
        }

        .flower {
          position: absolute;
          bottom: 10vmin;
          transform-origin: bottom center;
          animation-duration: 4s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .flower--1 {
          left: -15vmin;
          animation-name: moving-flower-1;
        }

        .flower--2 {
          left: 50%;
          transform: rotate(20deg);
          animation-name: moving-flower-2;
        }

        .flower--3 {
          left: 50%;
          transform: rotate(-15deg);
          animation-name: moving-flower-3;
        }

        .flower__line {
          width: 1.5vmin;
          background-image: linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), 
          linear-gradient(to top, transparent 10%, #1aaa15, #064600);
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          animation: grow-flower-tree 4s backwards;
        }

        .flower--1 .flower__line {
          height: 70vmin;
          animation-delay: 0.3s;
        }

        .flower--2 .flower__line {
          height: 60vmin;
          animation-delay: 0.6s;
        }

        .flower--3 .flower__line {
          height: 55vmin;
          animation-delay: 0.9s;
        }

        .flower__leafs {
          position: relative;
          animation: blooming-flower 2s backwards;
        }

        .flower__leafs--1 { animation-delay: 1.1s; }
        .flower__leafs--2 { animation-delay: 1.4s; }
        .flower__leafs--3 { animation-delay: 1.7s; }

        .flower__leafs::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -100%);
          width: 8vmin;
          height: 8vmin;
          background-color: #FF69B4;
          filter: blur(10vmin);
        }

        .flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53%/44% 45% 55% 69%;
          background-image: linear-gradient(to top, #FF1493, #FFB6C1);
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }

        .flower__leaf--1 {
          transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
          background-image: linear-gradient(to top, #FF69B4, #FFB6C1);
        }

        .flower__leaf--2 {
          transform: translate(-50%, -4%) rotateX(40deg);
          background-image: linear-gradient(to top, #FF1493, #FF69B4);
        }

        .flower__leaf--3 {
          transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
          background-image: linear-gradient(to top, #C71585, #FF69B4);
        }

        .flower__leaf--4 {
          width: 8vmin;
          height: 8vmin;
          transform-origin: bottom left;
          border-radius: 4vmin 10vmin 4vmin 4vmin;
          transform: translate(0%, 18%) rotateX(70deg) rotate(-43deg);
          background-image: linear-gradient(to top, #FF1493, #FFB6C1);
          z-index: 1;
          opacity: 0.8;
        }

        .flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background-color: #FFF0F5;
        }

        .flower__white-circle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          border-radius: inherit;
          background: linear-gradient(90deg, #FFD700, #FFC0CB);
        }

        .flower__line__leaf {
          --w: 7vmin;
          --h: calc(var(--w) + 2vmin);
          position: absolute;
          top: 20%;
          left: 90%;
          width: var(--w);
          height: var(--h);
          border-top-right-radius: var(--h);
          border-bottom-left-radius: var(--h);
          background-image: linear-gradient(to top, rgba(20, 122, 20, 0.4), #1aaa15);
        }

        .flower--1 .flower__line__leaf--1 {
          animation: blooming-leaf-right 0.8s 1.6s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--1 .flower__line__leaf--2 {
          top: 45%;
          animation: blooming-leaf-right 0.8s 1.4s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--1 .flower__line__leaf--3 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          animation: blooming-leaf-left 0.8s 1.2s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--1 .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 40%;
          animation: blooming-leaf-left 0.8s 1s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--1 {
          animation: blooming-leaf-right 0.8s 1.9s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--2 {
          top: 45%;
          animation: blooming-leaf-right 0.8s 1.7s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--3 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          animation: blooming-leaf-left 0.8s 1.5s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--2 .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 40%;
          animation: blooming-leaf-left 0.8s 1.3s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--1 {
          animation: blooming-leaf-right 0.8s 2.5s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--2 {
          top: 45%;
          animation: blooming-leaf-right 0.8s 2.3s backwards;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--3 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          animation: blooming-leaf-left 0.8s 2.1s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower--3 .flower__line__leaf--4 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 40%;
          animation: blooming-leaf-left 0.8s 1.9s backwards;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower__light {
          position: absolute;
          bottom: 0vmin;
          width: 1vmin;
          height: 1vmin;
          background-color: #FFB6C1;
          border-radius: 50%;
          filter: blur(0.2vmin);
          animation: light-ans 4s linear infinite backwards;
        }

        .flower__light:nth-child(odd) {
          background-color: #FF69B4;
        }

        .flower__light:nth-child(3n) {
          background-color: #FF1493;
        }

        .flower__light--1 { left: -2vmin; animation-delay: 1s; }
        .flower__light--2 { left: 3vmin; animation-delay: 0.5s; }
        .flower__light--3 { left: -6vmin; animation-delay: 0.3s; }
        .flower__light--4 { left: 6vmin; animation-delay: 0.9s; }
        .flower__light--5 { left: -1vmin; animation-delay: 1.5s; }
        .flower__light--6 { left: -4vmin; animation-delay: 3s; }
        .flower__light--7 { left: 3vmin; animation-delay: 2s; }
        .flower__light--8 { left: -6vmin; animation-delay: 3.5s; }

        @keyframes moving-flower-1 {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }

        @keyframes moving-flower-2 {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(14deg); }
        }

        @keyframes moving-flower-3 {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(-20deg) rotateY(-10deg); }
        }

        @keyframes grow-flower-tree {
          0% { height: 0; border-radius: 1vmin; }
        }

        @keyframes blooming-flower {
          0% { transform: scale(0); }
        }

        @keyframes blooming-leaf-right {
          0% {
            transform-origin: left;
            transform: rotate(70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes blooming-leaf-left {
          0% {
            transform-origin: right;
            transform: rotate(-70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes light-ans {
          0% {
            opacity: 0;
            transform: translateY(0vmin);
          }
          25% {
            opacity: 1;
            transform: translateY(-5vmin) translateX(-2vmin);
          }
          50% {
            opacity: 1;
            transform: translateY(-15vmin) translateX(2vmin);
            filter: blur(0.2vmin);
          }
          75% {
            transform: translateY(-20vmin) translateX(-2vmin);
            filter: blur(0.2vmin);
          }
          100% {
            transform: translateY(-30vmin);
            opacity: 0;
            filter: blur(1vmin);
          }
        }
      `}),e.jsx("div",{className:"absolute inset-0 overflow-hidden z-10",children:[...Array(30)].map((a,n)=>e.jsx(t.div,{className:"absolute w-3 h-3 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,background:`radial-gradient(circle, ${["#FFB6C1","#FF69B4","#DDA0DD","#FFF"][Math.floor(Math.random()*4)]}, transparent)`},animate:{y:[0,-30,0],opacity:[.3,.8,.3],scale:[1,1.2,1]},transition:{duration:4+Math.random()*2,repeat:1/0,delay:Math.random()*3}},n))}),e.jsxs(t.div,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-center mb-8 px-4 z-10 absolute top-[15%]",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-romantic text-valentine-red glow-text mb-4",children:"Para Ti"}),e.jsx("p",{className:"text-xl md:text-2xl text-valentine-rose font-modern",children:"Con todo mi amor 💕"})]}),e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2},className:"text-center px-4 z-10 absolute bottom-[18%]",children:[e.jsx("p",{className:"text-2xl md:text-3xl font-romantic text-valentine-red mb-4",children:"Fin💝"}),e.jsx(t.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.reload(),className:"bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-modern font-semibold shadow-lg hover:shadow-xl transition-all duration-300",children:"Repetir"})]}),[...Array(20)].map((a,n)=>e.jsx(t.div,{className:"absolute w-2 h-2 bg-white rounded-full z-10",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{opacity:[0,1,0],scale:[0,1.5,0]},transition:{duration:2,repeat:1/0,delay:Math.random()*2}},n)),e.jsxs("div",{className:"flowers-bottom",children:[e.jsxs("div",{className:"flower flower--1",children:[e.jsxs("div",{className:"flower__leafs flower__leafs--1",children:[e.jsx("div",{className:"flower__leaf flower__leaf--1"}),e.jsx("div",{className:"flower__leaf flower__leaf--2"}),e.jsx("div",{className:"flower__leaf flower__leaf--3"}),e.jsx("div",{className:"flower__leaf flower__leaf--4"}),e.jsx("div",{className:"flower__white-circle"}),e.jsx("div",{className:"flower__light flower__light--1"}),e.jsx("div",{className:"flower__light flower__light--2"}),e.jsx("div",{className:"flower__light flower__light--3"}),e.jsx("div",{className:"flower__light flower__light--4"}),e.jsx("div",{className:"flower__light flower__light--5"}),e.jsx("div",{className:"flower__light flower__light--6"}),e.jsx("div",{className:"flower__light flower__light--7"}),e.jsx("div",{className:"flower__light flower__light--8"})]}),e.jsxs("div",{className:"flower__line",children:[e.jsx("div",{className:"flower__line__leaf flower__line__leaf--1"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--2"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--3"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--4"})]})]}),e.jsxs("div",{className:"flower flower--2",children:[e.jsxs("div",{className:"flower__leafs flower__leafs--2",children:[e.jsx("div",{className:"flower__leaf flower__leaf--1"}),e.jsx("div",{className:"flower__leaf flower__leaf--2"}),e.jsx("div",{className:"flower__leaf flower__leaf--3"}),e.jsx("div",{className:"flower__leaf flower__leaf--4"}),e.jsx("div",{className:"flower__white-circle"}),e.jsx("div",{className:"flower__light flower__light--1"}),e.jsx("div",{className:"flower__light flower__light--2"}),e.jsx("div",{className:"flower__light flower__light--3"}),e.jsx("div",{className:"flower__light flower__light--4"}),e.jsx("div",{className:"flower__light flower__light--5"}),e.jsx("div",{className:"flower__light flower__light--6"}),e.jsx("div",{className:"flower__light flower__light--7"}),e.jsx("div",{className:"flower__light flower__light--8"})]}),e.jsxs("div",{className:"flower__line",children:[e.jsx("div",{className:"flower__line__leaf flower__line__leaf--1"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--2"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--3"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--4"})]})]}),e.jsxs("div",{className:"flower flower--3",children:[e.jsxs("div",{className:"flower__leafs flower__leafs--3",children:[e.jsx("div",{className:"flower__leaf flower__leaf--1"}),e.jsx("div",{className:"flower__leaf flower__leaf--2"}),e.jsx("div",{className:"flower__leaf flower__leaf--3"}),e.jsx("div",{className:"flower__leaf flower__leaf--4"}),e.jsx("div",{className:"flower__white-circle"}),e.jsx("div",{className:"flower__light flower__light--1"}),e.jsx("div",{className:"flower__light flower__light--2"}),e.jsx("div",{className:"flower__light flower__light--3"}),e.jsx("div",{className:"flower__light flower__light--4"}),e.jsx("div",{className:"flower__light flower__light--5"}),e.jsx("div",{className:"flower__light flower__light--6"}),e.jsx("div",{className:"flower__light flower__light--7"}),e.jsx("div",{className:"flower__light flower__light--8"})]}),e.jsxs("div",{className:"flower__line",children:[e.jsx("div",{className:"flower__line__leaf flower__line__leaf--1"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--2"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--3"}),e.jsx("div",{className:"flower__line__leaf flower__line__leaf--4"})]})]})]})]})}function Z({isPlaying:o}){const a=m.useRef(null),[n,l]=m.useState(!1),[r,d]=m.useState(!1);m.useEffect(()=>{if(o&&a.current){const c=a.current.play();c!==void 0&&c.then(()=>{console.log("Música iniciada correctamente"),d(!0)}).catch(h=>{console.log("Autoplay bloqueado, esperando interacción del usuario:",h),d(!0)})}},[o]);const f=()=>{a.current&&(a.current.muted=!n,l(!n))},i=()=>{a.current&&a.current.paused&&a.current.play().catch(console.error)};return m.useEffect(()=>(document.addEventListener("click",i,{once:!0}),document.addEventListener("touchstart",i,{once:!0}),()=>{document.removeEventListener("click",i),document.removeEventListener("touchstart",i)}),[]),e.jsxs(e.Fragment,{children:[e.jsxs("audio",{ref:a,loop:!0,preload:"auto",children:[e.jsx("source",{src:"/music/cancion.mp3",type:"audio/mpeg"}),"Su navegador no soporta el elemento de audio."]}),e.jsx(A,{children:r&&e.jsxs(t.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:"fixed top-4 left-4 z-50",children:[e.jsx(t.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:f,className:"bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-valentine-pink/30",title:n?"Activar sonido":"Silenciar",children:n?e.jsx("svg",{className:"w-6 h-6 text-valentine-red",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",clipRule:"evenodd"})}):e.jsx("svg",{className:"w-6 h-6 text-valentine-red",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",clipRule:"evenodd"})})}),!n&&e.jsx(t.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"absolute top-1/2 left-full ml-3 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-valentine-pink/30 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((c,h)=>e.jsx(t.div,{className:"w-1 bg-valentine-red rounded-full",animate:{height:["4px","12px","4px"]},transition:{duration:.8,repeat:1/0,delay:h*.2}},h))}),e.jsx("span",{className:"text-xs text-valentine-red font-modern",children:"Música"})]})})]})}),o&&!r&&e.jsx(t.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-valentine-rose/90 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-modern",children:"Toca la pantalla para iniciar la música 🎵"})]})}function J(){const o=[...Array(50)].map((a,n)=>({id:n,size:Math.random()*4+2,x:Math.random()*100,y:Math.random()*100,duration:Math.random()*10+10,delay:Math.random()*5,type:Math.random()>.7?"heart":"circle"}));return e.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",children:[o.map(a=>e.jsx(t.div,{className:"absolute",style:{left:`${a.x}%`,top:`${a.y}%`},animate:{y:[0,-100,0],x:[0,Math.random()*20-10,0],opacity:[0,.6,0],rotate:a.type==="heart"?[0,360]:0},transition:{duration:a.duration,repeat:1/0,delay:a.delay,ease:"easeInOut"},children:a.type==="heart"?e.jsx("span",{className:"text-valentine-pink",style:{fontSize:`${a.size*4}px`},children:"❤️"}):e.jsx("div",{className:"rounded-full bg-gradient-to-br from-valentine-pink to-valentine-rose",style:{width:`${a.size}px`,height:`${a.size}px`,boxShadow:"0 0 10px rgba(255, 105, 180, 0.5)"}})},a.id)),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-valentine-pink/5 to-transparent"})]})}function K(){const[o,a]=m.useState(0),[n,l]=m.useState(!1),r=[{id:0,component:O,name:"galaxy"},{id:1,component:H,name:"gift"},{id:2,component:q,name:"letter"},{id:3,component:G,name:"heartbeat"},{id:4,component:X,name:"brokenHeart"},{id:5,component:D,name:"puzzle"},{id:6,component:W,name:"lily"}],d=r[o].component,f=()=>{o<r.length-1&&a(c=>c+1)},i=()=>{l(!0)};return m.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]),e.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black custom-cursor",children:[e.jsx(Z,{isPlaying:n}),o>0&&e.jsx(J,{}),e.jsx(A,{mode:"wait",children:e.jsx(d,{onNext:f,onMusicStart:i},o)}),o>0&&e.jsx("div",{className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2",children:r.slice(1).map((c,h)=>e.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${h+1===o?"bg-valentine-rose w-8":h+1<o?"bg-valentine-pink":"bg-white/30"}`},c.id))})]})}$.createRoot(document.getElementById("root")).render(e.jsx(E.StrictMode,{children:e.jsx(K,{})}));
