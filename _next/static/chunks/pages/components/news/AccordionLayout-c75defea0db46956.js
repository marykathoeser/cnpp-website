(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},2324:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/news/AccordionLayout",function(){return n(8949)}])},8949:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(4184),o=n.n(i),s=(n(7294),n(3750));t.default=function(e){var t=e.date,n=e.children,i=e.index,a=e.activeIdx,c=e.setActiveIdx;if(void 0===i)return null;var l=void 0!==a.find((function(e){return e===i}));return(0,r.jsxs)("div",{className:"accordion-item border-b-2 border-gray-200 bg-white",children:[(0,r.jsx)("h5",{className:"accordion-header mb-0",children:(0,r.jsxs)("button",{onClick:function(){c(l?a.filter((function(e){return e!==i})):a.concat(i))},className:" accordion-button relative flex justify-between w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-gray-800 transition focus:outline-none",type:"button",children:[(0,r.jsx)("div",{className:"border-l-4 border-sbaYellow pl-1 font-bold uppercase text-xl",children:t}),(0,r.jsx)("div",{children:l?(0,r.jsx)(s.E0f,{className:"h-8 w-8"}):(0,r.jsx)(s.IAR,{className:"h-8 w-8"})})]})}),(0,r.jsx)("div",{className:o()("accordion-body py-4 px-5 mx-12 text-xl text-neutral-500",{"line-clamp-2":!l,truncate:!l}),children:n})]})}}},function(e){e.O(0,[13,774,888,179],(function(){return t=2324,e(e.s=t);var t}));var t=e.O();_N_E=t}]);