import{r as f,o as Q,t as h,x as a,H as _,I as v,v as w,y as m,J as k}from"./B4GgnGAm.js";const r=(o,t)=>Math.floor(Math.random()*(t-o+1))+o,p=o=>{const t=[...o];for(let e=t.length-1;e>0;e--){const c=Math.floor(Math.random()*(e+1));[t[e],t[c]]=[t[c],t[e]]}return t},b=()=>{const o=r(1,50),t=r(1,50),e=o+t,c=r(2,4);let n=[e.toString()];for(;n.length<c;){const s=e+r(-5,5);s!==e&&!n.includes(s.toString())&&s>0&&n.push(s.toString())}return{question:`${o} + ${t}?`,options:p(n),correct:e.toString()}},x=()=>{let o=r(10,50),t=r(1,o);const e=o-t,c=r(2,4);let n=[e.toString()];for(;n.length<c;){const s=e+r(-5,5);s!==e&&!n.includes(s.toString())&&s>=0&&n.push(s.toString())}return{question:`${o} - ${t}?`,options:p(n),correct:e.toString()}},S=()=>{const o=r(1,12),t=r(1,12),e=o*t,c=r(2,4);let n=[e.toString()];for(;n.length<c;){const s=e+r(-10,10);s!==e&&!n.includes(s.toString())&&s>0&&n.push(s.toString())}return{question:`${o} × ${t}?`,options:p(n),correct:e.toString()}},A=()=>{const o=r(1,12),t=o*r(1,12),e=t/o,c=r(2,4);let n=[e.toString()];for(;n.length<c;){const s=e+r(-3,3);s!==e&&!n.includes(s.toString())&&s>0&&n.push(s.toString())}return{question:`${t} ÷ ${o}?`,options:p(n),correct:e.toString()}},M=(o=5)=>{const t=[b,x,S,A],e=[];for(let c=0;c<o;c++){const n=t[r(0,t.length-1)];e.push(n())}return e},j=()=>{const o=[b,x,S,A],t=o[r(0,o.length-1)];return t()},G={class:"h-screen flex flex-col bg-[#09090b] text-[#e4e4e7]"},B={class:"flex-1 overflow-hidden"},q=["id"],D={class:"bg-[#18181b] rounded-lg shadow-lg p-6 max-w-md w-full border border-[#27272a]"},N={class:"mb-6"},R={class:"text-4xl mb-2 text-[#f4f4f5]"},z={class:"grid grid-cols-2 gap-3"},E=["onClick","disabled"],F={class:"mt-4 flex justify-between items-center"},H={class:"text-lg text-[#a1a1aa]"},L={__name:"index",setup(o){const t=f(0),e=f([]),c=f(null),n=f(0),s=f(0),y=i=>i.map(u=>({...u,answered:!1,selectedAnswer:null}));Q(()=>{e.value=y(M(1)),t.value=0,n.value=0,s.value=0});const $=async(i,u)=>{const l=e.value[u];if(!l.answered){if(l.answered=!0,l.selectedAnswer=i,n.value++,i===l.correct&&t.value++,u>=e.value.length-2){const d=j();e.value.push({...d,answered:!1,selectedAnswer:null})}s.value++}};return(i,u)=>(w(),h("div",G,[a("div",B,[a("div",{class:"h-full snap-y snap-mandatory overflow-y-auto smooth-scroll",ref_key:"scrollContainer",ref:c},[(w(!0),h(_,null,v(e.value,(l,d)=>(w(),h("div",{key:d,class:"h-full w-full flex items-center justify-center snap-start",id:`question-${d}`},[a("div",D,[a("div",N,[a("h3",R,m(l.question),1)]),a("div",z,[(w(!0),h(_,null,v(l.options,(g,C)=>(w(),h("button",{key:C,onClick:I=>$(g,d),class:k(["aspect-square flex items-center justify-center text-center p-4 rounded-lg text-6xl font-medium transition-colors duration-200 border border-[#27272a] bg-[#1e1e21] text-[#e4e4e7]",{"hover:bg-[#27272a]":!l.answered,"bg-[#166534] text-[#bbf7d0] border-[#166534]":l.answered&&g===l.correct,"bg-[#7f1d1d] text-[#fecaca] border-[#7f1d1d]":l.answered&&g!==l.correct&&l.selectedAnswer===g}]),disabled:l.answered},m(g),11,E))),128))]),a("div",F,[a("p",H,"Score: "+m(t.value)+"/"+m(n.value),1)])])],8,q))),128))],512)])]))}};export{L as default};
