(this["webpackJsonpcontries-api"]=this["webpackJsonpcontries-api"]||[]).push([[0],{60:function(e,c,t){},61:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(25),i=t.n(a),r=t(10),o=t(2),j=t(0),l=function(){return Object(j.jsx)("div",{className:"navigation",children:Object(j.jsx)(r.c,{exact:!0,to:"/",activeClassName:"nav-active",children:"Accueil"})})},u=t(8),b=t(12),h=t.n(b),d=function(e){var c=e.country;return Object(j.jsx)("div",{children:c&&Object(j.jsx)(r.b,{to:"/country/".concat(c.name.common),children:Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("div",{className:"card-img",children:Object(j.jsx)("img",{src:c.flags.svg,alt:"flag"})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:c.name.common}),Object(j.jsxs)("li",{children:["R\xe9gion: ",c.region]}),Object(j.jsxs)("li",{children:["Capital: ",c.capital]}),Object(j.jsxs)("li",{children:["population: ",c.population]})]})})]})})})},O=function(){document.querySelector("#arrow"),document.getElementsByClassName("optionsButton");var e=document.querySelector(".continent-checkbox-list"),c=Object(n.useState)([]),t=Object(u.a)(c,2),s=t[0],a=t[1],i=Object(n.useState)([]),r=Object(u.a)(i,2),o=r[0],l=r[1],b=Object(n.useState)(""),O=Object(u.a)(b,2),x=O[0],p=O[1],m=Object(n.useState)(!1),f=Object(u.a)(m,2),g=f[0],k=f[1],y=Object(n.useState)(!1),v=Object(u.a)(y,2),N=v[0],C=v[1],S=Object(n.useState)(!1),w=Object(u.a)(S,2),E=w[0],A=w[1],q=Object(n.useState)(!1),B=Object(u.a)(q,2),L=B[0],R=B[1],M=Object(n.useState)(!1),P=Object(u.a)(M,2),T=P[0],J=P[1],z=Object(n.useState)(!1),F=Object(u.a)(z,2),I=F[0],U=F[1];return Object(n.useEffect)((function(){h.a.get("https://restcountries.com/v3.1/all").then((function(e){var c=e.data.sort((function(e,c){return e.name.common.localeCompare(c.name.common)}));a(c),l(c)}))}),[]),Object(n.useEffect)((function(){if(s!==[]){var e=s.filter((function(e){return e.name.common.toLowerCase().includes(x.toLowerCase())})),c=[];N&&c.push("Africa"),E&&c.push("Americas"),L&&c.push("Asia"),T&&c.push("Europe"),I&&c.push("Oceania"),c.length&&(e=e.filter((function(e){return c.includes(e.region)}))),l(g?e.sort((function(e,c){return c.population-e.population})):e.sort((function(e,c){return e.name.common.localeCompare(c.name.common)})))}}),[x,g,N,E,L,T,I]),Object(j.jsxs)("div",{className:"countries-list-page",children:[Object(j.jsx)("p",{id:"arrow",onClick:function(){window.scrollTo(0,0)},children:"\u2191"}),Object(j.jsx)("p",{className:"optionsButton",onClick:function(){e.classList.toggle("appear")},children:"Options"}),Object(j.jsxs)("form",{id:"search-form",children:[Object(j.jsx)("br",{}),Object(j.jsx)("label",{forhtml:"search-input",children:"Rechercher un pays"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{id:"search-input",type:"text",placeholder:"Entrer un pays",value:x,onChange:function(e){return p(e.target.value)}})]}),Object(j.jsxs)("div",{className:"continent-checkbox-list",children:[Object(j.jsxs)("label",{id:"checkbox-container",children:["Africa",Object(j.jsx)("input",{type:"checkbox",checked:N,onChange:function(){return C(!N)}}),Object(j.jsx)("span",{id:"checkmark"})]}),Object(j.jsxs)("label",{id:"checkbox-container",children:["America",Object(j.jsx)("input",{type:"checkbox",checked:E,onChange:function(){return A(!E)}}),Object(j.jsx)("span",{id:"checkmark"})]}),Object(j.jsxs)("label",{id:"checkbox-container",children:["Asia",Object(j.jsx)("input",{type:"checkbox",checked:L,onChange:function(){return R(!L)}}),Object(j.jsx)("span",{id:"checkmark"})]}),Object(j.jsxs)("label",{id:"checkbox-container",children:["Europe",Object(j.jsx)("input",{type:"checkbox",checked:T,onChange:function(){return J(!T)}}),Object(j.jsx)("span",{id:"checkmark"})]}),Object(j.jsxs)("label",{id:"checkbox-container",children:["Oceania",Object(j.jsx)("input",{type:"checkbox",checked:I,onChange:function(){return U(!I)}}),Object(j.jsx)("span",{id:"checkmark"})]}),Object(j.jsxs)("label",{id:"checkbox-container",children:["Pop. d\xe9croissante",Object(j.jsx)("input",{type:"checkbox",checked:g,onChange:function(){return k(!g)}}),Object(j.jsx)("span",{id:"checkmark"})]})]}),Object(j.jsx)("ul",{className:"countries-list",children:o.map((function(e,c){return Object(j.jsx)(d,{country:e},c)}))})]})},x=function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(l,{}),Object(j.jsx)(O,{})]})},p=function(e){var c=e.match.params.country,t=Object(n.useState)(),s=Object(u.a)(t,2),a=s[0],i=s[1],r=Object(n.useState)(),o=Object(u.a)(r,2),b=o[0],d=o[1];return Object(n.useEffect)((function(){h.a.get("https://fr.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&explaintext=&titles=".concat(c)).then((function(e){i(e.data.query.pages[Object.keys(e.data.query.pages)])}))}),[]),Object(n.useEffect)((function(){h.a.get("https://restcountries.com/v3.1/name/".concat(c,"?fullText=true")).then((function(e){d(e.data)}))}),[]),Object(j.jsxs)("div",{className:"country-details-page",children:[Object(j.jsx)(l,{}),b&&Object(j.jsxs)("div",{className:"country-details",children:[Object(j.jsx)("div",{className:"country-details-flag",children:Object(j.jsx)("img",{src:b[0].flags.svg,alt:"country-flag"})}),Object(j.jsxs)("div",{class:"county-characteristics",children:[b[0].name.common?Object(j.jsx)("h2",{children:b[0].name.common}):Object(j.jsx)("h2",{children:"Nom : None"}),b[0].name.official?Object(j.jsxs)("h2",{children:["Nom officiel : ",b[0].name.official]}):Object(j.jsx)("h2",{children:"Nom officiel : None"}),b[0].capital?Object(j.jsxs)("h3",{children:["Capitale : ",b[0].capital]}):Object(j.jsx)("h3",{children:"Capitale : None"}),b[0].region?Object(j.jsxs)("h3",{children:["Continent : ",b[0].region]}):Object(j.jsx)("h3",{children:"Region : None"}),b[0].subregion?Object(j.jsxs)("h3",{children:["Sous-R\xe9gion : ",b[0].subregion]}):Object(j.jsx)("h3",{children:"Sous-R\xe9gion : None"}),b[0].languages?Object(j.jsxs)("h3",{children:["Langage : ",b[0].languages[Object.keys(b[0].languages)[0]]]}):Object(j.jsx)("h3",{children:"Langage : None"}),b[0].currencies?Object(j.jsxs)("h3",{children:["Monnaie : ",b[0].currencies[Object.keys(b[0].currencies)[0]].name," (",b[0].currencies[Object.keys(b[0].currencies)[0]].symbol,")"]}):Object(j.jsx)("h3",{children:"Monnaie : None"}),b[0].population?Object(j.jsxs)("h3",{children:["Population : ",b[0].population]}):Object(j.jsx)("h3",{children:"Population : None"})]}),a&&Object(j.jsx)("div",{className:"country-description-text",children:Object(j.jsx)("p",{children:a.extract})})]}),Object(j.jsx)("iframe",{id:"gmap_canvas",src:"https://maps.google.com/maps?q=".concat(c,"&t=&z=5&ie=UTF8&iwloc=&output=embed"),frameBorder:"0",scrolling:"no"})]})},m=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Erreur 404"})})},f=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,component:x}),Object(j.jsx)(o.a,{path:"/country/:country",exact:!0,component:p}),Object(j.jsx)(o.a,{component:m})]})})};t(60);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.b0f57dea.chunk.js.map