"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3451],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,c=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(c,o(o({ref:e},p),{},{components:a})):n.createElement(c,o({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2831:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"Recommended AI Hardware by Model"},o=void 0,i={unversionedId:"hardware/recommendations/by-model",id:"hardware/recommendations/by-model",title:"Recommended AI Hardware by Model",description:"Codellama 34b",source:"@site/docs/hardware/recommendations/by-model.md",sourceDirName:"hardware/recommendations",slug:"/hardware/recommendations/by-model",permalink:"/hardware/recommendations/by-model",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/hardware/recommendations/by-model.md",tags:[],version:"current",lastUpdatedBy:"Ashley",lastUpdatedAt:1698977426,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{title:"Recommended AI Hardware by Model"}},m={},d=[{value:"Codellama 34b",id:"codellama-34b",level:2},{value:"System Requirements:",id:"system-requirements",level:3},{value:"Performance Recommendations:",id:"performance-recommendations",level:3}],p={toc:d},u="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"codellama-34b"},"Codellama 34b"),(0,r.kt)("h3",{id:"system-requirements"},"System Requirements:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),": If you want to use ",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/TheBloke/CodeLlama-7B-Instruct-GPTQ/tree/main"},"Codellama 7B")," models on your own computer, you can take advantage of your GPU and run this with GPTQ file models."),(0,r.kt)("p",null,"GPTQ is a format that compresses the model parameters to 4-bit, which reduces the VRAM requirements significantly. You can use the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oobabooga/text-generation-webui"},"oobabooga webui"),"\xa0or ",(0,r.kt)("a",{parentName:"p",href:"https://jan.ai/"},"JanAI"),", which are simple interfaces that let you interact with different LLMS on your browser. It is pretty easy to set up and run. You can\xa0install it on Windows\xa0or Linux. (linked it to our installation page)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For 7B Parameter Models (4-bit Quantization)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"VRAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum recommended GPU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPTQ (GPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"6GB (Swap to Load","*",")"),(0,r.kt)("td",{parentName:"tr",align:null},"6GB"),(0,r.kt)("td",{parentName:"tr",align:null},"GTX 1660, 2060,RTX 3050, 3060 AMD 5700 XT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GGML / GGUF (CPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"4GB"),(0,r.kt)("td",{parentName:"tr",align:null},"300MB"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combination of GPTQ and GGML / GGUF (offloading)"),(0,r.kt)("td",{parentName:"tr",align:null},"2GB"),(0,r.kt)("td",{parentName:"tr",align:null},"2GB"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For 13B Parameter Models (4-bit Quantization)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"VRAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum recommended GPU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPTQ (GPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"12GB (Swap to Load","*",")"),(0,r.kt)("td",{parentName:"tr",align:null},"10GB"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GGML / GGUF (CPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"8GB"),(0,r.kt)("td",{parentName:"tr",align:null},"500MB"),(0,r.kt)("td",{parentName:"tr",align:null},"AMD 6900 XT, RTX 2060 12GB, 3060 12GB, 3080, A2000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combination of GPTQ and GGML / GGUF (offloading)"),(0,r.kt)("td",{parentName:"tr",align:null},"10GB"),(0,r.kt)("td",{parentName:"tr",align:null},"10GB"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For 34B Parameter Models (4-bit Quantization)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"VRAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum recommended GPU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPTQ (GPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"32GB (Swap to Load","*",")"),(0,r.kt)("td",{parentName:"tr",align:null},"20GB"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GGML / GGUF (CPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"20GB"),(0,r.kt)("td",{parentName:"tr",align:null},"500MB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 3080 20GB, A4500, A5000, 3090, 4090, 6000, Tesla V100, Tesla P40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combination of GPTQ and GGML / GGUF (offloading)"),(0,r.kt)("td",{parentName:"tr",align:null},"10GB"),(0,r.kt)("td",{parentName:"tr",align:null},"4GB"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For 7B Parameter Models (8-bit Quantization)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"VRAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum recommended GPU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPTQ (GPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"24GB (Swap to Load","*",")"),(0,r.kt)("td",{parentName:"tr",align:null},"12GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 3080, RTX 3080 Ti, RTX 3090, A5000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GGML / GGUF (CPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"16GB"),(0,r.kt)("td",{parentName:"tr",align:null},"1GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 3060 12GB, RTX 3070, A2000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combination of GPTQ and GGML / GGUF (offloading)"),(0,r.kt)("td",{parentName:"tr",align:null},"12GB"),(0,r.kt)("td",{parentName:"tr",align:null},"4GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 3060, RTX 3060 Ti, A2000")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For 13B Parameter Models (8-bit Quantization)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"VRAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum recommended GPU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPTQ (GPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"36GB (Swap to Load","*",")"),(0,r.kt)("td",{parentName:"tr",align:null},"20GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 4090, A6000, A6000 Ti, A8000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GGML / GGUF (CPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"24GB"),(0,r.kt)("td",{parentName:"tr",align:null},"2GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 3080 20GB, RTX 3080 Ti, A5000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combination of GPTQ and GGML / GGUF (offloading)"),(0,r.kt)("td",{parentName:"tr",align:null},"20GB"),(0,r.kt)("td",{parentName:"tr",align:null},"8GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 3080, RTX 3080 Ti, A5000")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For 34B Parameter Models (8-bit Quantization)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"VRAM Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum recommended GPU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPTQ (GPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"64GB (Swap to Load","*",")"),(0,r.kt)("td",{parentName:"tr",align:null},"40GB"),(0,r.kt)("td",{parentName:"tr",align:null},"A8000, A8000 Ti, A9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GGML / GGUF (CPU inference)"),(0,r.kt)("td",{parentName:"tr",align:null},"40GB"),(0,r.kt)("td",{parentName:"tr",align:null},"2GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 4090, A6000, A6000 Ti, A8000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combination of GPTQ and GGML / GGUF (offloading)"),(0,r.kt)("td",{parentName:"tr",align:null},"48GB"),(0,r.kt)("td",{parentName:"tr",align:null},"20GB"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX 4090, A6000, A6000 Ti, A8000")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"p"},"Note"),": System RAM, not VRAM, required to load the model, in addition to having enough VRAM. Not required to run the model. You can use swap space if you do not have enough RAM.")),(0,r.kt)("h3",{id:"performance-recommendations"},"Performance Recommendations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optimal Performance"),": To achieve the best performance when working with CodeLlama models, consider investing in a high-end GPU such as NVIDIA's latest RTX 3090 or RTX 4090. For the largest models like the 65B and 70B, a dual GPU setup is recommended. Additionally, ensure your system boasts sufficient RAM, with a minimum of 16 GB, although 64 GB is ideal for seamless operation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Budget-Friendly Approach"),": If budget constraints are a concern, focus on utilizing CodeLlama GGML/GGUF models that can comfortably fit within your system's available RAM. Keep in mind that while you can allocate some model weights to the system RAM to save GPU memory, this may result in a performance trade-off.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"p"},"Note"),": It's essential to note that these recommendations are guidelines, and the actual performance you experience will be influenced by various factors. These factors include the specific task you're performing, the implementation of the model, and the concurrent system processes. To optimize your setup, consider these recommendations as a starting point and adapt them to your unique requirements and constraints.")))}s.isMDXComponent=!0}}]);