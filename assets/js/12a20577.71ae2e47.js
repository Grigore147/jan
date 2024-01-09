"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2870],{30227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(85893),s=t(11151);const o={title:"Overview",slug:"/guides",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},i=void 0,a={id:"guides/overview",title:"Overview",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/00-overview.md",sourceDirName:"guides",slug:"/guides",permalink:"/guides",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/00-overview.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1704815973,formattedLastUpdatedAt:"Jan 9, 2024",sidebarPosition:0,frontMatter:{title:"Overview",slug:"/guides",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"guidesSidebar",next:{title:"Installation",permalink:"/install"}},l={},d=[{value:"Jan Desktop",id:"jan-desktop",level:2},{value:"Features",id:"features",level:2},{value:"Why Jan?",id:"why-jan",level:2},{value:"\ud83d\udcbb Own your AI",id:"-own-your-ai",level:4},{value:"\ud83c\udfd7\ufe0f Extensions",id:"\ufe0f-extensions",level:4},{value:"\ud83d\uddc2\ufe0f Open File Formats",id:"\ufe0f-open-file-formats",level:4},{value:"\ud83c\udf0d Open Source",id:"-open-source",level:4}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The following docs are aimed at end users who want to troubleshoot or learn how to use the ",(0,r.jsx)(n.strong,{children:"Jan Desktop"})," application better."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you are interested to build extensions, please refer to ",(0,r.jsx)(n.a,{href:"/developer",children:"developer docs"})," instead (WIP)."]}),(0,r.jsxs)(n.p,{children:["If you are interested to contribute to the underlying framework, please refer to ",(0,r.jsx)(n.a,{href:"/docs",children:"framework docs"})," instead."]})]}),"\n",(0,r.jsx)(n.h2,{id:"jan-desktop",children:"Jan Desktop"}),"\n",(0,r.jsxs)(n.p,{children:["The desktop client is a ChatGPT alternative that runs on your own computer, with a ",(0,r.jsx)(n.a,{href:"/guides/using-server",children:"local API server"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Compatible with ",(0,r.jsx)(n.a,{href:"/guides/using-models",children:"open-source models"})," (GGUF via ",(0,r.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llama.cpp"}),", TensorRT via ",(0,r.jsx)(n.a,{href:"https://github.com/NVIDIA/TensorRT-LLM",children:"TensorRT-LLM"}),", and ",(0,r.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference",children:"remote APIs"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Compatible with most OSes: ",(0,r.jsx)(n.a,{href:"/install/windows/",children:"Windows"}),", ",(0,r.jsx)(n.a,{href:"/install/mac",children:"Mac"}),", ",(0,r.jsx)(n.a,{href:"/install/linux",children:"Linux"}),", with GPU acceleration through ",(0,r.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llama.cpp"})]}),"\n",(0,r.jsxs)(n.li,{children:["Stores data in ",(0,r.jsx)(n.a,{href:"/developer/file-based",children:"open file formats"})]}),"\n",(0,r.jsxs)(n.li,{children:["Local API ",(0,r.jsx)(n.a,{href:"/guides/using-server",children:"server mode"})]}),"\n",(0,r.jsxs)(n.li,{children:["Customizable via ",(0,r.jsx)(n.a,{href:"/developer/build-extension",children:"extensions"})]}),"\n",(0,r.jsxs)(n.li,{children:["And more in the ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/janhq/projects/5/views/16",children:"roadmap"}),". Join us on ",(0,r.jsx)(n.a,{href:"https://discord.gg/5rQ2zTv3be",children:"Discord"})," and tell us what you want to see!"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"why-jan",children:"Why Jan?"}),"\n",(0,r.jsx)(n.p,{children:"We believe in the need for an open source AI ecosystem."}),"\n",(0,r.jsxs)(n.p,{children:["We're focused on building infra, tooling and ",(0,r.jsx)(n.a,{href:"https://huggingface.co/janhq",children:"custom models"})," to allow open source AIs to compete on a level playing field with proprietary offerings."]}),"\n",(0,r.jsxs)(n.p,{children:["Read more about our mission and culture ",(0,r.jsx)(n.a,{href:"/about",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"-own-your-ai",children:"\ud83d\udcbb Own your AI"}),"\n",(0,r.jsx)(n.p,{children:"Jan runs 100% on your own machine, predictably, privately and offline. No one else can see your conversations, not even us."}),"\n",(0,r.jsx)(n.h4,{id:"\ufe0f-extensions",children:"\ud83c\udfd7\ufe0f Extensions"}),"\n",(0,r.jsxs)(n.p,{children:["Jan ships with a local-first, AI-native, and cross platform ",(0,r.jsx)(n.a,{href:"/developer/build-extension",children:"extensions framework"}),". Developers can extend and customize everything from functionality to UI to branding. In fact, Jan's current main features are actually built as extensions on top of this framework."]}),"\n",(0,r.jsx)(n.h4,{id:"\ufe0f-open-file-formats",children:"\ud83d\uddc2\ufe0f Open File Formats"}),"\n",(0,r.jsxs)(n.p,{children:["Jan stores data in your ",(0,r.jsx)(n.a,{href:"/developer/file-based",children:"local filesystem"}),". Your data never leaves your computer. You are free to delete, export, migrate your data, even to a different platform."]}),"\n",(0,r.jsx)(n.h4,{id:"-open-source",children:"\ud83c\udf0d Open Source"}),"\n",(0,r.jsxs)(n.p,{children:["Both Jan and ",(0,r.jsx)(n.a,{href:"https://nitro.jan.ai",children:"Nitro"}),", our lightweight inference engine, are licensed via the open source ",(0,r.jsx)(n.a,{href:"https://github.com/janhq/jan/blob/main/LICENSE",children:"AGPLv3 license"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);