(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(8),c=n.n(s),i=n(5),o=n(7),a=(n(13),n(14),n(1)),l=n(4),r=n.n(l),b=n(0),u="alphabetical",j="length",h="reverse",d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=!1,O=function(){var t=Object(a.useState)(d),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),O=l[0],p=l[1];return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){s(Object(i.a)(n).sort(),p(u),g=!0)},type:"button",className:r()("button is-info",{"is-light":O!==u}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){s(Object(i.a)(n).sort((function(t,e){return t.length-e.length})),p(j),g=!0)},type:"button",className:r()("button is-success",{"is-light":O!==j}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){s(Object(i.a)(n).reverse(),p(h),g=!0)},type:"button",className:r()("button is-warning",{"is-light":O!==h}),children:"Reverse"}),g&&Object(b.jsx)("button",{onClick:function(){s(d,p(null),g=!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:n.map((function(t,e){return Object(b.jsx)("li",{"data-cy":"Good",children:t})}))})]})};c.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.28764552.chunk.js.map