import{a as h,u as j,b as N,r as y,e as v,j as e,L as k,f as w}from"./index-FlXpIans.js";import{b as F,c as _,F as S,a as T,I as C,B as I}from"./selectors-Dcg4Vh7E.js";import{_ as p}from"./index-DQwTEZ5Q.js";function B(){var d,m,o,x,u,f;const a=h(F),g=h(_),i=j(),r=N(),n=a&&a.length>0?{firstName:(m=(d=a[0].fields["first name"])==null?void 0:d[0])==null?void 0:m.value,lastName:(x=(o=a[0].fields["last name"])==null?void 0:o[0])==null?void 0:x.value,email:(f=(u=a[0].fields.email)==null?void 0:u[0])==null?void 0:f.value}:null;y.useEffect(()=>{i(v(r.id))},[r.id,i]);const b=s=>{const t=Object.values(s).flatMap(l=>l.split(" ").filter(Boolean));if(!t.length){p.error("You can't add empty tags");return}i(w({id:r.id,newTags:t})),p.success("Tags added successfully. Please reload page")};return e.jsx(e.Fragment,{children:a!=null&&a.length?a.map(s=>{var t;return e.jsxs("div",{className:"max-w-xl mx-auto p-6 rounded bg-gray-100",children:[e.jsxs("div",{className:"flex gap-3 items-center mb-6",children:[e.jsx("img",{src:s.avatar_url,alt:"User photo",className:"w-20 h-20 rounded-full "}),e.jsxs("div",{children:[e.jsx("h2",{className:"capitalize font-medium text-base text-black inline",children:n.firstName})," ",e.jsx("h2",{className:"capitalize font-medium text-base text-black inline",children:n.lastName}),e.jsx("p",{className:"font-medium text-base text-black mb-2",children:n.email})]})]}),e.jsx("h2",{className:"capitalize font-medium text-base text-black mb-3",children:"Tags"}),s.tags.length?e.jsx("ul",{className:"flex flex-wrap gap-2 mb-9",children:(t=s.tags)==null?void 0:t.map((l,c)=>e.jsx("li",{className:"bg-slate-300 rounded font-medium text-sm text-center flex flex-wrap p-2",children:l.tag},c))}):e.jsx("h2",{className:"font-medium text-base text-black mb-9",children:"There are no any added tags yet"}),e.jsx(S,{initialValues:{add_tag:""},onSubmit:(l,c)=>{b(l),c.resetForm()},children:e.jsx(T,{children:e.jsxs("div",{className:"space-y-6 flex flex-col",children:[e.jsx(C,{name:"add_tag",placeholder:"Add new tag"}),e.jsx(I,{disabled:g,type:"submit",children:"Add tag"})]})})})]},s.id)}):e.jsxs("div",{className:"flex flex-col gap-3 items-center",children:[e.jsx("h1",{className:"font-bold text-2xl",children:"Sorry. Seems like requested resource is not exist anymore"}),e.jsxs(k,{to:"/",className:"flex gap-2 items-center",children:[e.jsx("span",{class:"material-symbols-outlined",children:"arrow_back"})," Return to main page"]})]})})}export{B as default};
