var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var M=(e,o,a)=>o in e?Z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,l=(e,o)=>{for(var a in o||(o={}))E.call(o,a)&&M(e,a,o[a]);if(g)for(var a of g(o))$.call(o,a)&&M(e,a,o[a]);return e},f=(e,o)=>ee(e,te(o));var j=(e,o)=>{var a={};for(var s in e)E.call(e,s)&&o.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&g)for(var s of g(e))o.indexOf(s)<0&&$.call(e,s)&&(a[s]=e[s]);return a};import{c as oe,a as ae,b as t,A as se,M as ne,d as re,e as N,r as ie,f as d,t as b,g as h,h as m,u as z,i as y,j as L,o as c,k as le,l as ce,m as O,n as me,p as de,q as I,s as _,v as pe,w as A,x as ue,y as ge,z as fe,B as be,C as he,D as ye,E as ve,F as xe,G as _e,H as ke,I as we,J as Se,K as Te,L as Ce,N as Ee,O as $e}from"./vendor.fae529c4.js";const Me=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}};Me();const je={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},Ne=oe();ae.use(Ne);var ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:je}),Le="/vue3-compact-template/storybook/assets/code-brackets.9ef6443e.svg",Oe="/vue3-compact-template/storybook/assets/colors.ac9401f3.svg",Ie="/vue3-compact-template/storybook/assets/comments.f15a6837.svg",Ae="/vue3-compact-template/storybook/assets/direction.94a9917f.svg",Be="/vue3-compact-template/storybook/assets/flow.275142c6.svg",De="/vue3-compact-template/storybook/assets/plugin.57148314.svg",He="/vue3-compact-template/storybook/assets/repo.fb4ece47.svg",Ve="/vue3-compact-template/storybook/assets/stackalt.2ad81543.svg";const Pe={},Fe="wrapper";function B(a){var s=a,{components:e}=s,o=j(s,["components"]);return t(Fe,f(l(l({},Pe),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Example/Introduction",mdxType:"Meta"}),t("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),t("h1",null,"Welcome to Storybook"),t("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:De,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:Ve,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:Oe,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:Be,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:He,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:Ae,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:Le,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:Ie,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"src/stories/Introduction.stories.mdx")))}B.isMDXComponent=!0;const D=()=>{throw new Error("Docs-only story")};D.parameters={docsOnly:!0};const p={title:"Example/Introduction",includeStories:["__page"]},qe={};p.parameters=p.parameters||{};p.parameters.docs=f(l({},p.parameters.docs||{}),{page:()=>t(se,{mdxStoryNameToKey:qe,mdxComponentMeta:p},t(B,null))});var Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:D,default:p});const Ue=re("counter",{state:()=>({count:0}),actions:{increment(){this.count++}}});const We={key:0,class:"font-semibold text-xl text-gray-600"},Re=y('<h2 class="font-semibold"> Tech stack </h2><ul class="pl-8 list-disc"><li> Framework: <a href="https://v3.vuejs.org/" rel="nofollow">Vue 3</a></li><li>Package manager: <a href="https://github.com/pnpm/pnpm">pnpm</a></li><li> Build tool: <a href="https://vitejs.dev/" rel="nofollow">Vite 2</a></li><li> State management: <a href="https://pinia.esm.dev/" rel="nofollow">Pinia</a></li><li> Router: <a href="https://next.router.vuejs.org/" rel="nofollow">Vue Router</a></li><li> Utility first CSS framework: <a href="https://windicss.org/" rel="nofollow">WindiCSS</a></li><li> CSS preprocessor: <a href="https://lesscss.org/" rel="nofollow">Less</a></li><li>UI component explorer: <a href="https://github.com/storybookjs/storybook/">Storybook</a></li><li>Icons: <a href="https://github.com/antfu/unplugin-icons">unplugin-icons</a></li><li>ESLint rule: <a href="https://github.com/standard/eslint-config-standard-with-typescript">eslint-config-standard-with-typescript</a></li><li>Style linting: stylelint standard</li><li>commit convention: husky + commitlint</li></ul><p>See <code>README.md</code> for more information.</p>',3),Xe={class:"text-center"},Ke={class:"text-center"},Ye=m("p",null,[L(" Edit "),m("code",null,"components/TemplateIntroduction.vue"),L(" to test hot module replacement. ")],-1),Je=N({});function Qe(e,{emit:o}){const a=ie(0),s=Ue();return(r,n)=>(c(),d("div",{class:"mt-2 pb-2 space-y-2",onClick:n[2]||(n[2]=i=>o("update","Hello from TemplateIntroductionEmits"))},[e.msg?(c(),d("h1",We,b(e.msg),1)):h("",!0),Re,m("div",Xe,[m("button",{type:"button",class:"btn mx-2",onClick:n[0]||(n[0]=i=>a.value++)}," ref in component count is: "+b(a.value),1)]),m("div",Ke,[m("button",{type:"button",class:"btn mx-2",onClick:n[1]||(n[1]=i=>z(s).increment())}," ref in pinia store count is: "+b(z(s).count),1)]),Ye]))}const k=N(f(l({},Je),{props:{msg:null},emits:["update"],setup:Qe}));k.__docgenInfo={exportName:"default",displayName:"TemplateIntroduction",description:"",tags:{}};var Ze={title:"Components",component:k,argTypes:{msg:{control:{type:"text"}}}};const et=e=>({components:{TemplateIntroduction:k},methods:{update:le("update")},setup(){return{args:e}},template:'<template-introduction v-bind="args" @update="update" />'}),H=et.bind({});H.args={msg:"\u26A1\uFE0F A simple and compact vue 3 template with current cutting edge front end technologies."};const tt=["TemplateIntroductionDemo"];var ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze,TemplateIntroductionDemo:H,__namedExportsOrder:tt});var v=(e,o)=>{for(const[a,s]of o)e[a]=s;return e};const V={name:"MyButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:o}){return e=ce(e),{classes:O(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:O(()=>({backgroundColor:e.backgroundColor})),onClick(){o("click")}}}};function at(e,o,a,s,r,n){return c(),d("button",{type:"button",class:me(s.classes),style:de(s.style),onClick:o[0]||(o[0]=(...i)=>s.onClick&&s.onClick(...i))},b(a.label),7)}var w=v(V,[["render",at]]);V.__docgenInfo={displayName:"MyButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};var st={title:"Example/Button",component:w,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}};const x=e=>({components:{MyButton:w},setup(){return{args:e}},template:'<my-button v-bind="args" />'}),P=x.bind({});P.args={primary:!0,label:"Button"};const F=x.bind({});F.args={label:"Button"};const q=x.bind({});q.args={size:"large",label:"Button"};const G=x.bind({});G.args={size:"small",label:"Button"};const nt=["Primary","Secondary","Large","Small"];var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st,Primary:P,Secondary:F,Large:q,Small:G,__namedExportsOrder:nt});const U={name:"MyHeader",components:{MyButton:w},props:{user:{type:Object}},emits:["login","logout","createAccount"]},it={class:"wrapper"},lt=y('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1);function ct(e,o,a,s,r,n){const i=I("my-button");return c(),d("header",null,[m("div",it,[lt,m("div",null,[a.user?(c(),_(i,{key:0,size:"small",label:"Log out",onClick:o[0]||(o[0]=u=>e.$emit("logout"))})):h("",!0),a.user?h("",!0):(c(),_(i,{key:1,size:"small",label:"Log in",onClick:o[1]||(o[1]=u=>e.$emit("login"))})),a.user?h("",!0):(c(),_(i,{key:2,primary:"",size:"small",label:"Sign up",onClick:o[2]||(o[2]=u=>e.$emit("createAccount"))}))])])])}var S=v(U,[["render",ct]]);U.__docgenInfo={displayName:"MyHeader",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};var mt={title:"Example/Header",component:S};const W=e=>({components:{MyHeader:S},setup(){return l({},e)},template:'<my-header :user="user" />'}),T=W.bind({});T.args={user:{}};const C=W.bind({});C.args={user:null};const dt=["LoggedIn","LoggedOut"];var pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt,LoggedIn:T,LoggedOut:C,__namedExportsOrder:dt});const R={name:"MyPage",components:{MyHeader:S},props:{user:{type:Object}},emits:["login","logout","createAccount"]},ut=y('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path id="a" d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function gt(e,o,a,s,r,n){const i=I("my-header");return c(),d("article",null,[pe(i,{user:a.user,onLogin:o[0]||(o[0]=u=>e.$emit("login")),onLogout:o[1]||(o[1]=u=>e.$emit("logout")),onCreateAccount:o[2]||(o[2]=u=>e.$emit("createAccount"))},null,8,["user"]),ut])}var X=v(R,[["render",gt]]);R.__docgenInfo={displayName:"MyPage",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"login"},{name:"logout"},{name:"createAccount"}]};var ft={title:"Example/Page",component:X};const K=e=>({components:{MyPage:X},setup(){return{user:e.user}},template:'<my-page :user="user" />'}),Y=K.bind({});Y.args=l({},T.args);const J=K.bind({});J.args=l({},C.args);const bt=["LoggedIn","LoggedOut"];var ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ft,LoggedIn:Y,LoggedOut:J,__namedExportsOrder:bt});const Q={},yt={class:"sm:m-6 space-y-6"},vt=y('<div class="relative bg-themeable-cyan max-w-4xl mx-auto overflow-hidden sm:rounded-2xl"><img class="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80&amp;sat=-100" alt="People working on laptops"><div class="absolute inset-0 bg-gradient-to-br from-themeable-cyan-200 via-themeable-cyan-400 to-transparent opacity-90"></div><div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"><h2 class="text-3xl font-extrabold text-themeable-foreground sm:text-4xl"><span class="block">Focus on your content.</span><span class="block">We handle the distribution.</span></h2><p class="mt-4 text-lg leading-6 text-themeable-foreground-800"> Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. </p><div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"><div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"><a href="#" class="text-themeable-background bg-themeable-cyan-600 hover:bg-themeable-cyan-700 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a><a href="#" class="text-themeable-cyan bg-themeable-background flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-themeable-background-100 sm:px-8"> Live demo </a></div></div></div></div><div class="themeable-material relative bg-themeable-cyan max-w-4xl mx-auto overflow-hidden sm:rounded-2xl"><img class="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80&amp;sat=-100" alt="People working on laptops"><div class="absolute inset-0 bg-gradient-to-br from-themeable-cyan-200 via-themeable-cyan-400 to-transparent opacity-90"></div><div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"><h2 class="text-3xl font-extrabold text-themeable-foreground sm:text-4xl"><span class="block">Focus on your content.</span><span class="block">We handle the distribution.</span></h2><p class="mt-4 text-lg leading-6 text-themeable-foreground-800"> Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. </p><div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"><div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"><a href="#" class="text-themeable-background bg-themeable-cyan-600 hover:bg-themeable-cyan-700 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a><a href="#" class="text-themeable-cyan bg-themeable-background flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm hover:bg-themeable-background-100 sm:px-8"> Live demo </a></div></div></div></div>',2),xt=[vt];function _t(e,o){return c(),d("div",yt,xt)}var kt=v(Q,[["render",_t]]);Q.__docgenInfo={displayName:"ThemedExample",description:"",tags:{}};var wt={title:"Components"};const St=e=>({components:{ThemedExample:kt},template:"<themed-example />"}),Tt=["Themed"];var Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wt,Themed:St,__namedExportsOrder:Tt});const Et=[ze,ve,xe,_e,ke,we,Se,Te,Ce,Ee,$e];Et.forEach(e=>{Object.keys(e).forEach(o=>{const a=e[o];switch(o){case"args":case"argTypes":return he.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(a));case"decorators":return a.forEach(s=>be(s,!1));case"loaders":return a.forEach(s=>fe(s,!1));case"parameters":return A(l({},a),!1);case"argTypesEnhancers":return a.forEach(s=>ge(s));case"argsEnhancers":return a.forEach(s=>ue(s));case"globals":case"globalTypes":{const s={};return s[o]=a,A(s,!1)}default:return console.log(o+" was not supported :( !")}})});ye(()=>[Ge,ot,rt,pt,ht,Ct].filter(e=>e.default),{hot:!1},!1);
//# sourceMappingURL=iframe.e66f394f.js.map
