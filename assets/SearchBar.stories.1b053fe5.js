import{r as u}from"./index.40601a70.js";import{M as m,b as h}from"./react-icons.esm.008ce2bf.js";import{T as t}from"./TextInput.1556ea03.js";import{B as c}from"./Button.7579fdef.js";import{a as i,j as e}from"./jsx-runtime.6c9c0287.js";import"./iframe.c52dec68.js";import"./index.module.f9289808.js";import"./clsx.m.256e9345.js";const o=({placeholder:r,buttonLabel:d,onSearch:s})=>{const[a,l]=u.exports.useState(""),p=n=>{n.key==="Enter"&&s(a)};return i("div",{className:"grid grid-flow-row  gap-3 w-full sm:grid-flow-col md:grid-cols-6",children:[e("div",{className:"col-span-1 md:col-span-5 sm:col-span-4",children:i(t.Root,{inputsize:"large",children:[e(t.Icon,{children:e(m,{className:"text-slate-300"})}),e(t.Input,{placeholder:r,value:a,onChange:n=>l(n.target.value),onKeyDown:p}),a?e(t.Icon,{children:e(h,{onClick:()=>l(""),className:"text-slate-300 hover:text-slate-600"})}):""]})}),e("div",{className:"col-span-1",children:e(c.Root,{btnsize:"large",onClick:()=>s(a),children:e(c.Button,{children:d})})})]})};try{o.displayName="SearchBar",o.__docgenInfo={description:"",displayName:"SearchBar",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/searchbar/SearchBar.tsx#SearchBar"]={docgenInfo:o.__docgenInfo,name:"SearchBar",path:"src/components/searchbar/SearchBar.tsx#SearchBar"})}catch{}const C={title:"Components/SearchBar",component:o,args:{placeholder:"Title, director, producer or year of release?",buttonLabel:"Search",onSearch:r=>console.log(r)},argTypes:{children:{table:{disable:!0}},onSearch:{table:{disable:!0}}}},I={},v=["Default"];export{I as Default,v as __namedExportsOrder,C as default};
//# sourceMappingURL=SearchBar.stories.1b053fe5.js.map