"use strict";(self.webpackChunkec_demo=self.webpackChunkec_demo||[]).push([[295],{7204:(e,s,c)=>{c.r(s),c.d(s,{default:()=>f});var t=c(9919),i=c(5043),l=c(1883),a=c(2382),n=c(579);const r=e=>{let{title:s,text:c,link:t}=e;return(0,n.jsxs)("div",{className:"banner",children:[(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("h2",{children:s}),(0,n.jsx)("h3",{children:c}),(0,n.jsx)("h6",{children:t})]}),(0,n.jsx)("div",{className:"picture"})]})};var m=c(1451);const d=e=>{let{menuData:s,title:c}=e;const t=function(e,s){const c=[];for(let t=0;t<e.length;t+=s)c.push(e.slice(t,t+s));return c}(s,6);return(0,n.jsxs)("ul",{children:[(0,n.jsx)("h4",{children:c}),(0,n.jsx)("div",{className:"item",children:t.map(((e,s)=>(0,n.jsx)("div",{className:"list",children:e.map(((e,s)=>(0,n.jsx)("li",{children:e.text},s)))},s)))})]})};var o=c(3003),x=c(3485),h=c(7459);const j=e=>{let{src:s,alt:c,colors:t,ps:i,title:l,price:a}=e;return(0,n.jsxs)(h.pz,{src:s,alt:c,children:[(0,n.jsx)("div",{className:"color-item",children:t&&t.map((e=>(0,n.jsx)(h.BK,{color:e})))}),(0,n.jsx)(h.tL,{ps:i,title:l,subtitle:a})]})},p=(e,s)=>e.map((e=>e.product_items&&e.product_items.map((e=>e[s]&&e[s].map((e=>(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("h1",{children:e.title}),e.subtitle&&(0,n.jsx)("h4",{children:e.subtitle})]},e.title))))))),u=(e,s)=>{const c=(0,o.wA)();return e.map((e=>e.product_items&&e.product_items.map((e=>e[s]&&e[s].map((e=>e.product_item&&e.product_item.map((e=>(0,n.jsx)("div",{onClick:()=>(e=>{const s={price:e.price,name:e.title,id:e.key,src:e.src,quantity:1};c((0,x.B5)(s))})(e),children:(0,n.jsx)(j,{src:"".concat("/Electronic-business-platform-Demo").concat(e.src),colors:e.color,ps:e.postscript,title:e.title,price:"NT$ ".concat(e.price.toLocaleString("en-US"))})},e.key)))))))))},b=(e,s)=>e.map(((e,c)=>e&&e.list.map(((e,t)=>(0,n.jsxs)("div",{className:"box",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo").concat(e.src),alt:""})}),(0,n.jsx)("h4",{children:e.text})]},"".concat(s,"-").concat(c,"-").concat(t))))));var v=c(9272),N=c(3170);c(4430),c(9078);const _=()=>{const e={dots:!0,speed:500,slidesToShow:3,slidesToScroll:3,infinite:!1,nextArrow:(0,n.jsx)(v.Ht,{}),prevArrow:(0,n.jsx)(v.hU,{})},[s,c]=(0,i.useState)(!1),[t,o]=(0,i.useState)("list1"),[x,j]=(0,i.useState)(!1),_=()=>{c(!s)};return(0,n.jsxs)("div",{className:"shop",children:[(0,n.jsxs)("div",{className:"menu",children:[(0,n.jsx)("div",{className:"title",children:l.bx&&l.bx.map((e=>e.menu&&e.menu.map((e=>e.header_info.map((e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:e.title}),(0,n.jsxs)("h3",{onClick:_,children:[e.subtitle,(0,n.jsx)(v.HK,{isOpen:s})]})]})))))))}),(0,n.jsx)("div",{className:"content ".concat(s?"show":""),children:l.bx&&l.bx.map((e=>e.menu&&e.menu.map((e=>e.header_item&&e.header_item.map(((e,s)=>(0,n.jsx)(d,{title:e.title,menuData:e.list},s)))))))})]}),(0,n.jsx)("div",{className:"section section1",children:l.bx&&l.bx.map((e=>e.header&&e.header.map((e=>(0,n.jsx)(r,{title:e.title,text:e.text,link:e.link},e.title)))))}),(0,n.jsx)("div",{className:"section section2",children:l.bx&&l.bx.map((e=>e.search&&e.search.map((e=>(0,n.jsx)(m.A,{title:e.title,placeholderText:e.input_text},e.title)))))}),(0,n.jsxs)("div",{className:"section section3",children:[(0,n.jsx)("div",{className:"title",children:(0,n.jsx)("ul",{children:l.bx&&l.bx.flatMap((e=>e.menu&&e.menu.flatMap((e=>e.menu_info_item&&e.menu_info_item.flatMap(((e,s)=>e.title&&(0,n.jsx)("li",{className:t==="list".concat(s+1)?"click":"",onClick:()=>{return e="list".concat(s+1),void o(e);var e},children:e.title},"title-".concat(s))))))))})}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"item item_1 ".concat("list1"===t?"":"close"),children:(0,n.jsx)("div",{className:"list",children:l.bx&&l.bx.map(((e,s)=>b(e.menu.map((e=>e.menu_info_item[0])),"item1-".concat(s))))})}),(0,n.jsxs)("div",{className:"item item_2 ".concat("list2"===t?"":"close"," ").concat(!0===x?"open":""),children:[(0,n.jsx)("div",{className:"list",children:l.bx&&l.bx.map(((e,s)=>b(e.menu.map((e=>e.menu_info_item[1])),"item2-".concat(s))))}),(0,n.jsxs)("div",{className:"more",children:[(0,n.jsx)("button",{onClick:()=>{j(!x)},children:l.bx&&l.bx.map((e=>e.menu.map((e=>e.button_text.map(((e,s)=>x?(0,n.jsx)(N.os,{text:e.text},s):(0,n.jsx)(N.vm,{text:e.text},s)))))))}),l.bx&&l.bx.map(((e,s)=>{return c=e.menu.map((e=>e.menu_info_item[1].moreList)),t="item2-more-".concat(s),c.map(((e,s)=>{const c=e.slice(0,5),l=e.slice(5,10),a=e.slice(10,11);return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("div",{className:"list",children:c&&c.map(((e,c)=>(0,n.jsxs)("div",{className:"box",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo").concat(e.src),alt:""})}),(0,n.jsx)("h4",{children:e.text})]},"".concat(t,"-front-").concat(s,"-").concat(c))))}),(0,n.jsx)("div",{className:"list",children:l&&l.map(((e,c)=>(0,n.jsxs)("div",{className:"box",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo").concat(e.src),alt:""})}),(0,n.jsx)("h4",{children:e.text})]},"".concat(t,"-back-").concat(s,"-").concat(c))))}),(0,n.jsx)("div",{className:"list",children:a&&a.map(((e,c)=>(0,n.jsxs)("div",{className:"box",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo").concat(e.src),alt:""})}),(0,n.jsx)("h4",{children:e.text})]},"".concat(t,"-back-").concat(s,"-").concat(c))))})]},"".concat(t,"-more-").concat(s))}));var c,t}))]})]})]})]}),(0,n.jsxs)("div",{className:"section section4",children:[(0,n.jsxs)("div",{className:"section-item",id:"ipad",children:[(0,n.jsx)("div",{className:"title",children:l.bx&&p(l.bx,"ipad_item")}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.A,{...e,children:l.bx&&u(l.bx,"ipad_item")})})]}),(0,n.jsxs)("div",{className:"section-item",id:"iphone",children:[(0,n.jsx)("div",{className:"title",children:l.bx&&p(l.bx,"iphone_item")}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.A,{...e,children:l.bx&&u(l.bx,"iphone_item")})})]}),(0,n.jsxs)("div",{className:"section-item",id:"watch",children:[(0,n.jsx)("div",{className:"title",children:l.bx&&p(l.bx,"apple_watch_item")}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.A,{...e,children:l.bx&&u(l.bx,"apple_watch_item")})})]}),(0,n.jsxs)("div",{className:"section-item",id:"earphone",children:[(0,n.jsx)("div",{className:"title",children:l.bx&&p(l.bx,"earphone_item")}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.A,{...e,children:l.bx&&u(l.bx,"earphone_item")})})]}),(0,n.jsxs)("div",{className:"section-item",id:"mac",children:[(0,n.jsx)("div",{className:"title",children:l.bx&&p(l.bx,"mac_item")}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.A,{...e,children:l.bx&&u(l.bx,"mac_item")})})]}),(0,n.jsxs)("div",{className:"section-item",id:"airtag",children:[(0,n.jsx)("div",{className:"title",children:l.bx&&p(l.bx,"airtag_item")}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.A,{...e,children:l.bx&&u(l.bx,"airtag_item")})})]})]}),(0,n.jsx)("div",{className:"section section5",children:l.bx&&l.bx.map((e=>e.info_item&&e.info_item.map(((e,s)=>(0,n.jsx)(h.pz,{children:(0,n.jsx)(h.tL,{title:e.title,subtitle:e.text,text:e.link})},s)))))})]})};var g=c(7542);const f=()=>{const e=g.K8.map((e=>e.shop));return(0,n.jsx)(t.A,{logoTitle:e,children:(0,n.jsx)(_,{})})}},9272:(e,s,c)=>{c.d(s,{U_:()=>i,HK:()=>n,Ht:()=>l,hU:()=>a});var t=c(579);const i=e=>{let{className:s,style:c,onClick:i}=e;return(0,t.jsx)("div",{className:s,onClick:i,style:{...c,display:"block"},children:(0,t.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo","/images/common/arrow.png"),alt:"button"})})},l=e=>{let{className:s,style:c,onClick:i}=e;return(0,t.jsx)("div",{className:s,style:{...c,display:"block"},onClick:i,children:(0,t.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo","/images/common/arrow.png"),alt:"button"})})},a=e=>{let{className:s,style:c,onClick:i}=e;return(0,t.jsx)("div",{className:s,style:{...c,display:"block"},onClick:i,children:(0,t.jsx)("img",{src:"".concat("/Electronic-business-platform-Demo","/images/common/arrow.png"),alt:"button"})})},n=e=>{let{onClick:s,isOpen:c}=e;return(0,t.jsxs)("div",{className:"arrow-icon ".concat(c?"open":""),onClick:s,children:[(0,t.jsx)("span",{className:"left-bar"}),(0,t.jsx)("span",{className:"right-bar"})]})}},3170:(e,s,c)=>{c.d(s,{Cl:()=>i,vm:()=>l,os:()=>a});var t=c(579);const i=e=>{let{props:s}=e;return(0,t.jsx)("div",{className:"button-item",children:s.map((e=>(0,t.jsx)("h4",{className:"btn",children:e})))})},l=e=>{let{text:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h4",{className:"click-button",children:s})})},a=e=>{let{text:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h4",{className:"clicked-button",children:s})})}},7459:(e,s,c)=>{c.d(s,{tL:()=>a,BK:()=>n,pz:()=>l,nB:()=>i});c(6732);var t=c(579);const i=e=>{let{children:s,src:c,alt:i}=e;return(0,t.jsxs)("div",{className:"product-card wrapper",children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:c,alt:i})}),s]})},l=e=>{let{children:s,src:c,alt:i}=e;return(0,t.jsxs)("div",{className:"product-card center",children:[(0,t.jsx)("div",{className:"card-image",children:c&&(0,t.jsx)("img",{src:c,alt:i})}),s]})},a=e=>{let{title:s,text:c,subtitle:i,ps:l,children:a,src:n,alt:r}=e;return(0,t.jsxs)("div",{className:"card-info",children:[n&&(0,t.jsx)("div",{className:"images-box",children:(0,t.jsx)("img",{src:n,alt:r})}),(0,t.jsx)("h6",{className:"postscript",children:l}),(0,t.jsx)("h5",{className:"title",children:s}),(0,t.jsx)("h6",{className:"subtitle",children:i}),(0,t.jsx)("h4",{className:"text",children:c}),a]})},n=e=>{let{color:s}=e;return(0,t.jsx)("div",{id:s,className:"box"})}},1451:(e,s,c)=>{c.d(s,{A:()=>l});var t=c(5051),i=c(579);const l=e=>{let{title:s,placeholderText:c}=e;return(0,i.jsxs)("div",{className:"search",children:[(0,i.jsx)("h2",{children:s}),(0,i.jsxs)("form",{children:[(0,i.jsx)(t.Xj1,{}),(0,i.jsx)("input",{type:"search",placeholder:c})]})]})}},6732:()=>{}}]);
//# sourceMappingURL=295.54dc7951.chunk.js.map