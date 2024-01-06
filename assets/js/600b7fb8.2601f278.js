"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5578],{33953:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var i=a(85893),l=a(11151);const s={title:"Mac",slug:"/install/mac",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},o="Installing Jan on MacOS",t={id:"guides/installation/mac",title:"Mac",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/02-installation/01-mac.md",sourceDirName:"guides/02-installation",slug:"/install/mac",permalink:"/install/mac",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/02-installation/01-mac.md",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1704508658,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:1,frontMatter:{title:"Mac",slug:"/install/mac",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"guidesSidebar",previous:{title:"Installation",permalink:"/install"},next:{title:"Windows",permalink:"/install/windows"}},r={},c=[{value:"Installation",id:"installation",level:2},{value:"GitHub Releases",id:"github-releases",level:2},{value:"Uninstall Jan",id:"uninstall-jan",level:2},{value:"Common Questions",id:"common-questions",level:2},{value:"Does Jan run on Apple Silicon machines?",id:"does-jan-run-on-apple-silicon-machines",level:3},{value:"Which package should I download for my Mac?",id:"which-package-should-i-download-for-my-mac",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"installing-jan-on-macos",children:"Installing Jan on MacOS"}),"\n",(0,i.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(e.p,{children:["Jan is available for download via our homepage, ",(0,i.jsx)(e.a,{href:"https://jan.ai/",children:"https://jan.ai/"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["For MacOS, the download should be available as a ",(0,i.jsx)(e.code,{children:".dmg"})," file in the following format."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Intel Mac\njan-mac-x64-{version}.dmg\n# Apple Silicon Mac\njan-mac-arm64-{version}.dmg\n"})}),"\n",(0,i.jsx)(e.p,{children:"The typical installation process taks around a minute."}),"\n",(0,i.jsx)(e.h2,{id:"github-releases",children:"GitHub Releases"}),"\n",(0,i.jsxs)(e.p,{children:["Jan is also available from ",(0,i.jsx)(e.a,{href:"https://github.com/janhq/jan/releases",children:"Jan's GitHub Releases"})," page, with a recommended ",(0,i.jsx)(e.a,{href:"https://github.com/janhq/jan/releases/latest",children:"latest stable release"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"Within the Releases' assets, you will find the following files for MacOS:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Intel Mac (dmg file and zip file)\njan-mac-x64-{version}.dmg\njan-mac-x64-{version}.zip\n\n# Apple Silicon Mac (dmg file and zip file)\njan-mac-arm64-{version}.dmg\njan-mac-arm64-{version}.zip\n"})}),"\n",(0,i.jsx)(e.h2,{id:"uninstall-jan",children:"Uninstall Jan"}),"\n",(0,i.jsx)(e.p,{children:"As Jan is development mode, you might get stuck on a broken build.\nTo reset your installation"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Delete Jan from your ",(0,i.jsx)(e.code,{children:"/Applications"})," folder"]}),"\n",(0,i.jsx)(e.li,{children:"Delete Application data"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Newer versions\nrm -rf ~/Library/Application\\ Support/jan\n\n# Versions 0.2.0 and older\nrm -rf ~/Library/Application\\ Support/jan-electron\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"Clear Application cache"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"rm -rf ~/Library/Caches/jan*\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"Use the following commands to remove any dangling backend processes:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"ps aux | grep nitro\n"})}),"\n",(0,i.jsx)(e.p,{children:'Look for processes like "nitro" and "nitro_arm_64", and kill them one by one with:'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"kill -9 <PID>\n"})}),"\n",(0,i.jsx)(e.h2,{id:"common-questions",children:"Common Questions"}),"\n",(0,i.jsx)(e.h3,{id:"does-jan-run-on-apple-silicon-machines",children:"Does Jan run on Apple Silicon machines?"}),"\n",(0,i.jsxs)(e.p,{children:["Yes, Jan supports MacOS Arm64 builds that can run on Macs with the Apple Silicon chipsets. You can install Jan on your Apple Silicon Mac by downloading the ",(0,i.jsx)(e.code,{children:"jan-mac-arm64-<version>.dmg"})," file from the ",(0,i.jsx)(e.a,{href:"https://jan.ai/",children:"Jan's homepage"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"which-package-should-i-download-for-my-mac",children:"Which package should I download for my Mac?"}),"\n",(0,i.jsxs)(e.p,{children:["Jan supports both Intel and Apple Silicon Macs. To find which appropriate package to download for your Mac, please follow this official guide from Apple: ",(0,i.jsx)(e.a,{href:"https://support.apple.com/guide/mac-help/syspr35536/mac",children:"Get system information about your Mac - Apple Support"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>t,a:()=>o});var i=a(67294);const l={},s=i.createContext(l);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);