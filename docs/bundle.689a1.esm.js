!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({"+QDk":function(e){e.exports={btn:"btn__3qsBv"}},"0FI0":function(e){e.exports={jumbo:"jumbo__2q9f6",bold:"bold__1U3eQ",subtitle:"subtitle__1T7R_",subscribeSubtitle:"subscribeSubtitle__1hlRQ",moreInfo:"moreInfo__3eKML"}},"1eX2":function(e){e.exports={showcase:"showcase__1tePS",subtitle:"subtitle__yxHwc",badges:"badges__3vaHb"}},"2s1E":function(e){e.exports={header:"header__3Y4ge",bg:"bg__3_ryh",content:"content__ynleq",logo:"logo__6bhzw",active:"active__3ac1W"}},"38LN":function(e){e.exports={wrappedContent:"wrappedContent__1fpPC"}},"8+n8":function(e){e.exports={main:"main__3LgGw",subtitle:"subtitle__O6pAi"}},"8fAO":function(){},G2YV:function(e){e.exports={showcase:"showcase__3r3MH",subtitle:"subtitle__2-0Ub",badges:"badges__34ffN"}},QfWi:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){e.preventDefault(),e.returnValue=""}function i(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function l(){return Math.random().toString(36).substr(2,8)}function c(e){var t=e.pathname,n=e.search;return(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}function u(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function a(e){function t(){var e=u(p.location.hash.substr(1)),t=e.pathname,n=e.search,r=_.state||{};return[r.idx,m({pathname:void 0===t?"/":t,search:void 0===n?"":n,hash:void 0===(e=e.hash)?"":e,state:r.usr||null,key:r.key||"default"})]}function n(){if(b)j.call(b),b=null;else{var e=d.Pop,n=t(),r=n[0];if(n=n[1],j.length){if(null!=r){var o=g-r;o&&(b={action:e,location:n,retry:function(){f(-1*o)}},f(o))}}else h(e)}}function a(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=-1===(n=(t=p.location.href).indexOf("#"))?t:t.slice(0,n)),n+"#"+("string"==typeof e?e:c(e))}function s(e,t){return void 0===t&&(t=null),m(r({},y,{},"string"==typeof e?u(e):e,{state:t,key:l()}))}function h(e){v=e,e=t(),g=e[0],O.call({action:v,location:y=e[1]})}function f(e){_.go(e)}void 0===e&&(e={});var p=void 0===(e=e.window)?document.defaultView:e,_=p.history,b=null;p.addEventListener("popstate",n),p.addEventListener("hashchange",(function(){c(t()[1])!==c(y)&&n()}));var v=d.Pop,g=(e=t())[0],y=e[1],O=i(),j=i();return null==g&&_.replaceState(r({},_.state,{idx:g=0}),""),{get action(){return v},get location(){return y},createHref:a,push:function e(t,n){var r=d.Push,o=s(t,n);if(!j.length||(j.call({action:r,location:o,retry:function(){e(t,n)}}),0)){var i=[{usr:o.state,key:o.key,idx:g+1},a(o)];o=i[0],i=i[1];try{_.pushState(o,"",i)}catch(e){p.location.assign(i)}h(r)}},replace:function e(t,n){var r=d.Replace,o=s(t,n);j.length&&(j.call({action:r,location:o,retry:function(){e(t,n)}}),1)||(o=[{usr:o.state,key:o.key,idx:g},a(o)],_.replaceState(o[0],"",o[1]),h(r))},go:f,back:function(){f(-1)},forward:function(){f(1)},listen:function(e){return O.push(e)},block:function(e){var t=j.push(e);return 1===j.length&&p.addEventListener("beforeunload",o),function(){t(),j.length||p.removeEventListener("beforeunload",o)}}}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t);n("8fAO");var d,_=n("hosL"),b=n("Y3FI"),v=n("ox/y"),g=d||(d={});g.Pop="POP",g.Push="PUSH",g.Replace="REPLACE";var m=function(e){return e},y=n("38LN"),O=n.n(y);var j=({children:e})=>Object(_.h)("div",{class:O.a.wrappedContent},e),k=n("2s1E"),w=n.n(k);var x=()=>Object(_.h)("header",{class:w.a.header},Object(_.h)("div",{class:w.a.bg}),Object(_.h)("div",{class:w.a.content},Object(_.h)(v.Link,{class:w.a.logo,href:"/"},Object(_.h)("img",{src:"../../assets/logo.svg"})),Object(_.h)("nav",{role:"navigation"},Object(_.h)(v.Link,{activeClassName:w.a.active,href:"/app/9list"},"9List"),Object(_.h)(v.Link,{activeClassName:w.a.active,href:"/developers"},"Developers")))),S=n("jrrc"),C=n.n(S);var L=({children:e})=>Object(_.h)("banner",{class:C.a.banner},e),P=n("zi2L"),A=n.n(P);var U=()=>Object(_.h)("footer",{class:A.a.footer},Object(_.h)("div",{class:A.a.copyright},"Copyright © ",(()=>{const e=(new Date).getFullYear();return e>2020?"2020 - "+e:2020..toString()})()," Quintschaf GbR. All rights reserved."),Object(_.h)("div",{class:A.a.nav},Object(_.h)(v.Link,{href:"/imprint"},"Imprint"))),E=n("ciB6"),I=n.n(E),R=n("0FI0"),D=n.n(R);n("UP23");var M=n("+QDk"),z=n.n(M);var N=({href:e,children:t})=>Object(_.h)("a",{target:"_blank",href:e,class:z.a.btn},t),T=n("djjX"),G=n.n(T);var F=({shadow:e=!1})=>Object(_.h)("div",{class:[G.a.icon,e?G.a.shadow:""].filter(e=>""!=e).join(" ")});var H=()=>Object(_.h)("div",{class:D.a.jumbo},Object(_.h)("h2",null,"9List"),Object(_.h)("span",{class:D.a.subtitle},"Shopping made easy.",Object(_.h)("br",null),"Coming ",Object(_.h)("span",{class:D.a.bold},"October 15th")," for iPhone.",Object(_.h)("br",null)),Object(_.h)(F,null),Object(_.h)(v.Link,{class:D.a.moreInfo,href:"/app/9list"},"See details, features and more"),Object(_.h)(N,{href:"https://eepurl.com/hbk8wT"},"Subscribe to our Newsletter"),Object(_.h)("span",{class:D.a.subscribeSubtitle},"Get notified as soon as 9List is available!")),B=n("Yf/M"),W=n.n(B);var V=()=>Object(_.h)("div",{class:W.a.jumbo},Object(_.h)("h2",null,"Open Source"),Object(_.h)("span",{class:W.a.subtitle},"Code, Libraries, Frameworks.",Object(_.h)("br",null)),Object(_.h)("p",null,"At Quintschaf, we believe in open and community-driven software.",Object(_.h)("br",null),"This is our way of giving back to the awesome developers out there."),Object(_.h)(v.Link,{class:W.a.moreLink,href:"/developers"},"Discover Open Source Projects"));var K=()=>Object(_.h)("div",{class:I.a.home},Object(_.h)(H,null),Object(_.h)(V,null)),Q=n("pz02"),q=n.n(Q);var Y=()=>Object(_.h)("div",{class:q.a.imprint},Object(_.h)("main",{class:q.a.content},Object(_.h)("h1",null,"Impressum"),Object(_.h)("h2",null,"Angaben gemäß § 5 TMG"),Object(_.h)("p",null,"Marco Quinten und Jann Schafranek GbR (Quintschaf GbR)",Object(_.h)("br",null),"Heinrichstr. 10",Object(_.h)("br",null),"36037 Fulda"),Object(_.h)("p",null,Object(_.h)("strong",null,"Vertreten durch:"),Object(_.h)("br",null),"Marco Quinten",Object(_.h)("br",null),"Jann Schafranek"),Object(_.h)("h2",null,"Kontakt"),Object(_.h)("p",null,"Telefon: +4915792383286",Object(_.h)("br",null),"E-Mail: legal@quintschaf.com"),Object(_.h)("h2",null,"Verbraucher­streit­beilegung/Universal­schlichtungs­stelle"),Object(_.h)("p",null,"Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."),Object(_.h)("h3",null,"Haftung für Inhalte"),Object(_.h)("p",null,"Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."),Object(_.h)("p",null,"Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."),Object(_.h)("h3",null,"Haftung für Links"),Object(_.h)("p",null,"Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."),Object(_.h)("p",null,"Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."),Object(_.h)("h3",null,"Urheberrecht"),Object(_.h)("p",null,"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet."),Object(_.h)("p",null,"Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."),Object(_.h)("p",null,"Quelle:",Object(_.h)("br",null),Object(_.h)("a",{href:"https://www.e-recht24.de"},"eRecht24")))),$=n("8+n8"),X=n.n($),Z=n("1eX2"),J=n.n(Z),ee=n("cISG"),te=n.n(ee);var ne=({theme:e="dark",href:t,children:n})=>Object(_.h)("a",{target:"_blank",href:t,class:te.a.btn,"data-theme":e},Object(_.h)("img",{src:"../../assets/github.svg"}),Object(_.h)("div",{class:te.a.content},n));var re=()=>Object(_.h)("div",{class:J.a.showcase},Object(_.h)("h2",null,"SchafKit"),Object(_.h)("div",{class:J.a.subtitle},"An open kit providing useful functionality.",Object(_.h)("br",null),"For iOS, watchOS, macOS and tvOS."),Object(_.h)("div",{class:J.a.badges},Object(_.h)("img",{src:"https://flat.badgen.net/github/open-issues/quintschaf/schafkit?scale=1.4"}),Object(_.h)("img",{src:"https://flat.badgen.net/github/closed-issues/quintschaf/schafkit?scale=1.4"})),Object(_.h)(ne,{href:"https://github.com/quintschaf/SchafKit"},"View on GitHub")),oe=n("G2YV"),ie=n.n(oe);var le=()=>Object(_.h)("div",{class:ie.a.showcase},Object(_.h)("h2",null,"DeepObservatory"),Object(_.h)("div",{class:ie.a.subtitle},"Nested observable propagation in Swift.",Object(_.h)("br",null),"Available for iOS 13 and higher."),Object(_.h)("div",{class:ie.a.badges},Object(_.h)("img",{src:"https://flat.badgen.net/github/open-issues/quintschaf/deepobservatory?scale=1.4"}),Object(_.h)("img",{src:"https://flat.badgen.net/github/closed-issues/quintschaf/deepobservatory?scale=1.4"})),Object(_.h)(ne,{theme:"light",href:"https://github.com/quintschaf/DeepObservatory"},"View on GitHub"));var ce=()=>Object(_.h)("main",{class:X.a.main},Object(_.h)("h1",null,"Open Source"),Object(_.h)("div",{class:X.a.subtitle},"Giving back to the community."),Object(_.h)(re,null),Object(_.h)(le,null));var ue=n("wppU"),ae=n.n(ue);const se=[{icon:e=>{const t=e.color||"currentColor",n=e.size||24;return delete e.color,delete e.size,Object(_.h)("svg",s({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e),Object(_.h)("polyline",{points:"20 6 9 17 4 12"}))},title:"Easy to use",body:"Just tap, type, return."},{icon:e=>{const t=e.color||"currentColor",n=e.size||24;return delete e.color,delete e.size,Object(_.h)("svg",h({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e),Object(_.h)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),Object(_.h)("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))},title:"Free forever",body:"One store with one location."},{icon:e=>{const t=e.color||"currentColor",n=e.size||24;return delete e.color,delete e.size,Object(_.h)("svg",f({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e),Object(_.h)("circle",{cx:"12",cy:"12",r:"10"}),Object(_.h)("polyline",{points:"12 6 12 12 16 14"}))},title:"Saving your time",body:"Faster than a shopping list."},{icon:e=>{const t=e.color||"currentColor",n=e.size||24;return delete e.color,delete e.size,Object(_.h)("svg",p({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e),Object(_.h)("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),Object(_.h)("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))},title:"Ready when you are",body:"Get reminded at the right time."}];var he=()=>Object(_.h)("main",{class:ae.a.main},Object(_.h)("h1",null,"9List"),Object(_.h)("div",{class:ae.a.subtitle},"Coming October 15th."),Object(_.h)(F,{shadow:!0}),Object(_.h)("div",{class:ae.a.featureGrid},se.map(({icon:e,title:t,body:n})=>Object(_.h)("div",{class:ae.a.gridEntry},Object(_.h)(e,{class:ae.a.icon}),Object(_.h)("span",{class:ae.a.title},t),Object(_.h)("div",{class:ae.a.break}),Object(_.h)("span",{class:ae.a.body},n)))),Object(_.h)(N,{href:"https://eepurl.com/hbk8wT"},"Subscribe to our Newsletter"),Object(_.h)("span",{class:ae.a.subscribeSubtitle},"Get notified as soon as 9List is available!"));t.default=class extends _.Component{constructor(...e){super(...e),this.handleRoute=e=>{this.currentUrl=e.url,0==window.scrollX&&0==window.scrollY||window.scrollTo(0,0)}}render(){return Object(_.h)("div",{id:"app"},Object(_.h)(x,null),Object(_.h)(j,null,Object(_.h)(L,null,Object(_.h)(v.Link,{href:"/app/9list"},Object(_.h)("span",null,"Coming Soon: 9List — More Information",Object(_.h)("br",null)))),Object(_.h)(b.Router,{history:a(),onChange:this.handleRoute},Object(_.h)(K,{path:"/"}),Object(_.h)(he,{path:"/app/9list"}),Object(_.h)(ce,{path:"/developers"}),Object(_.h)(Y,{path:"/imprint"}))),Object(_.h)(U,null))}}},UP23:function(e){e.exports={btn:"btn__34N4f"}},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),l={};if(i&&i[1])for(var u=i[1].split("&"),a=0;a<u.length;a++){var s=u[a].split("=");l[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=c(e.replace(o,"")),t=c(t||"");for(var h=Math.max(e.length,t.length),f=0;f<h;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),d=(t[f].match(/[+*?]+$/)||v)[0]||"",_=~d.indexOf("+"),b=~d.indexOf("*"),g=e[f]||"";if(!g&&!b&&(d.indexOf("?")<0||_)){r=!1;break}if(l[p]=decodeURIComponent(g),_||b){l[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&l}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function l(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,c(t).map(u).join(""));var t}(e),e.props}function c(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function u(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function a(){var e;return""+((e=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:O).pathname||"")+(e.search||"")}function s(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=m.length;t--;)if(m[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),g&&g[t]?g[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),h(e)}function h(e){for(var t=!1,n=0;n<m.length;n++)!0===m[n].routeTo(e)&&(t=!0);for(var r=y.length;r--;)y[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),d(e)}function d(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function _(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return d(e)}}while(t=t.parentNode)}}n.r(t),n.d(t,"subscribers",(function(){return y})),n.d(t,"getCurrentUrl",(function(){return a})),n.d(t,"route",(function(){return s})),n.d(t,"Router",(function(){return k})),n.d(t,"Route",(function(){return x})),n.d(t,"Link",(function(){return w})),n.d(t,"exec",(function(){return o}));var b=n("hosL"),v={},g=null,m=[],y=[],O={},j=!1,k=function(e){function t(t){e.call(this,t),t.history&&(g=t.history),this.state={url:t.url||a()},j||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){h(a())})),addEventListener("click",_)),j=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(b.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){m.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;g&&(this.unlisten=g.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),m.splice(m.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(l).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var l={url:t,matches:i};return r(l,i),delete l.ref,delete l.key,Object(b.cloneElement)(e,l)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(b.toChildArray)(n),o,!0),l=i[0]||null,c=this.previousUrl;return o!==c&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:c,active:i,current:l})),l},t}(b.Component),w=function(e){return Object(b.createElement)("a",r({onClick:p},e))},x=function(e){return Object(b.createElement)(e.component,e)};k.subscribers=y,k.getCurrentUrl=a,k.route=s,k.Router=k,k.Route=x,k.Link=w,k.exec=o,t.default=k},"Yf/M":function(e){e.exports={jumbo:"jumbo___H7iv",subtitle:"subtitle__1AxI5",subscribeSubtitle:"subscribeSubtitle__MG3cF",moreLink:"moreLink__1zAaH"}},cISG:function(e){e.exports={btn:"btn__2YfCQ",content:"content__1DCHw"}},ciB6:function(e){e.exports={home:"home__tv5cl"}},djjX:function(e){e.exports={icon:"icon__22hMl",shadow:"shadow__BD5KH"}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return l(e,i,t&&t.key,t&&t.ref,null)}function l(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),U.vnode&&U.vnode(i),i}function c(){return{current:null}}function u(e){return e.children}function a(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function h(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return h(e)}}function f(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!p.__r++||D!==U.debounceRendering)&&((D=U.debounceRendering)||R)(p)}function p(){for(var e;p.__r=I.length;)e=I.sort((function(e,t){return e.__v.__b-t.__v.__b})),I=[],e.some((function(e){var t,n,o,i,l,c,u;e.__d&&(c=(l=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},l)).__v=o,i=O(u,l,o,t.__n,void 0!==u.ownerSVGElement,null,n,null==c?s(l):c),j(n,l),i!=c&&h(l)))}))}function d(e,t,n,r,i,c,a,h,f,p){var d,_,v,g,m,y,j,k=r&&r.__k||T,S=k.length;for(f==N&&(f=null!=a?a[0]:S?s(r,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(g=n.__k[d]=null==(g=t[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?l(null,g,null,null,g):Array.isArray(g)?l(u,{children:g},null,null,null):null!=g.__e||null!=g.__c?l(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(v=k[d])||v&&g.key==v.key&&g.type===v.type)k[d]=void 0;else for(_=0;_<S;_++){if((v=k[_])&&g.key==v.key&&g.type===v.type){k[_]=void 0;break}v=null}m=O(e,g,v=v||N,i,c,a,h,f,p),(_=g.ref)&&v.ref!=_&&(j||(j=[]),v.ref&&j.push(v.ref,null,g),j.push(_,g.__c||m,g)),null!=m?(null==y&&(y=m),f=b(e,g,v,k,a,m,f),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}if(n.__e=y,null!=a&&"function"!=typeof n.type)for(d=a.length;d--;)null!=a[d]&&o(a[d]);for(d=S;d--;)null!=k[d]&&x(k[d],k[d]);if(j)for(d=0;d<j.length;d++)w(j[d],j[++d],j[++d])}function _(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?T.concat.apply([],e.map(_)):[e]}function b(e,t,n,r,o,i,l){var c,u,a;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(o==n||i!=l||null==i.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(i),c=null;else{for(u=l,a=0;(u=u.nextSibling)&&a<r.length;a+=2)if(u==i)break e;e.insertBefore(i,l),c=l}return void 0!==c?c:i.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===G.test(t)?n+"px":null==n?"":n}function g(e,t,n,r,o){var i,l,c,u,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||v(i,u,"");if(n)for(a in n)r&&n[a]===r[a]||v(i,a,n[a])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(r||e.addEventListener(t,m,l),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,m,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function m(e){this.l[e.type](U.event?U.event(e):e)}function y(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&y(o,t,n),t=b(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function O(e,t,n,o,i,l,c,s,h){var f,p,_,b,v,g,m,O,j,w,x,C=t.type;if(void 0!==t.constructor)return null;(f=U.__b)&&f(t);try{e:if("function"==typeof C){if(O=t.props,j=(f=C.contextType)&&o[f.__c],w=f?j?j.props.value:f.__:o,n.__c?m=(p=t.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?t.__c=p=new C(O,w):(t.__c=p=new a(O,w),p.constructor=C,p.render=S),j&&j.sub(p),p.props=O,p.state||(p.state={}),p.context=w,p.__n=o,_=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,C.getDerivedStateFromProps(O,p.__s))),b=p.props,v=p.state,_)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&O!==b&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(O,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(O,p.__s,w)||t.__v===n.__v){p.props=O,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&c.push(p),y(t,s,e);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(O,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(b,v,g)}))}p.context=w,p.props=O,p.state=p.__s,(f=U.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),_||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(b,v)),x=null!=f&&f.type==u&&null==f.key?f.props.children:f,d(e,Array.isArray(x)?x:[x],t,n,o,i,l,c,s,h),p.base=t.__e,p.__h.length&&c.push(p),m&&(p.__E=p.__=null),p.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=k(n.__e,t,n,o,i,l,c,h);(f=U.diffed)&&f(t)}catch(e){t.__v=null,U.__e(e,t,n)}return t.__e}function j(e,t){U.__c&&U.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){U.__e(e,t.__v)}}))}function k(e,t,n,r,o,i,l,c){var u,a,s,h,f,p=n.props,_=t.props;if(o="svg"===t.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(a=i[u])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,i[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(_);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,_.is&&{is:_.is}),i=null,c=!1}if(null===t.type)p!==_&&e.data!==_&&(e.data=_);else{if(null!=i&&(i=T.slice.call(e.childNodes)),s=(p=n.props||N).dangerouslySetInnerHTML,h=_.dangerouslySetInnerHTML,!c){if(null!=i)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(h||s)&&(h&&s&&h.__html==s.__html||(e.innerHTML=h&&h.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||g(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||g(e,i,t[i],n[i],r)})(e,_,p,o,c),h?t.__k=[]:(u=t.props.children,d(e,Array.isArray(u)?u:[u],t,n,r,"foreignObject"!==t.type&&o,i,l,N,c)),c||("value"in _&&void 0!==(u=_.value)&&u!==e.value&&g(e,"value",u,p.value,!1),"checked"in _&&void 0!==(u=_.checked)&&u!==e.checked&&g(e,"checked",u,p.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){U.__e(e,n)}}function x(e,t,n){var r,i,l;if(U.unmount&&U.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){U.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&x(r[l],t,n);null!=i&&o(i)}function S(e,t,n){return this.constructor(e,n)}function C(e,t,n){var r,o,l;U.__&&U.__(e,t),o=(r=n===M)?null:n&&n.__k||t.__k,e=i(u,null,[e]),l=[],O(t,(r?t:n||t).__k=e,o||N,N,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?T.slice.call(t.childNodes):null,l,n||N,r),j(l,e)}function L(e,t){C(e,t,M)}function P(e,t){var n,o;for(o in t=r(r({},e.props),t),arguments.length>2&&(t.children=T.slice.call(arguments,2)),n={},t)"key"!==o&&"ref"!==o&&(n[o]=t[o]);return l(e.type,n,t.key||e.key,t.ref||e.ref,null)}function A(e){var t={},n={__c:"__cC"+z++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,f(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(t),n.d(t,"render",(function(){return C})),n.d(t,"hydrate",(function(){return L})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return c})),n.d(t,"isValidElement",(function(){return E})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return P})),n.d(t,"createContext",(function(){return A})),n.d(t,"toChildArray",(function(){return _})),n.d(t,"__u",(function(){return x})),n.d(t,"options",(function(){return U}));var U,E,I,R,D,M,z,N={},T=[],G=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;U={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return f(n.__E=n)}catch(t){e=t}throw e}},E=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=u,I=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,M=N,z=0},jrrc:function(e){e.exports={banner:"banner__3diPS"}},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:l}=r,c=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof c(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=c(n("QfWi")),r={};const l=document.querySelector('[type="__PREACT_CLI_DATA__"]');l&&(r=JSON.parse(decodeURI(l.innerHTML)).preRenderData||r);r.url&&(u=r.url);var u;e=i(o(t,{CLI_DATA:{preRenderData:r}}),document.body,e)})()}},"ox/y":function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("hosL"),l=n("Y3FI"),c=t.Match=function(e){function t(){for(var t,n,o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return t=n=r(this,e.call.apply(e,[this].concat(i))),n.update=function(e){n.nextUrl=e,n.setState({})},r(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){l.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,l.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,l.exec)(n,e.path,{})})},t}(i.Component),u=function(e){var t=e.activeClassName,n=e.path,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,i.h)(c,{path:n||r.href},(function(e){return(0,i.h)(l.Link,o({},r,{class:[r.class||r.className,e.matches&&t].filter(Boolean).join(" ")}))}))};t.Link=u,t.default=c,c.Link=u},pz02:function(e){e.exports={imprint:"imprint__1hhQF",content:"content__1CfNY"}},wppU:function(e){e.exports={main:"main__3yOFH",subtitle:"subtitle__4TiZu",subscribeSubtitle:"subscribeSubtitle__UPl8o",featureGrid:"featureGrid__oapZE",gridEntry:"gridEntry__2F3sw",icon:"icon__1q-XK",title:"title__w2mFe",break:"break__2AVbT",body:"body__12YS1"}},zi2L:function(e){e.exports={footer:"footer__N7ZX7",copyright:"copyright__3O_Ad",nav:"nav__2J_vN"}}});
//# sourceMappingURL=bundle.689a1.esm.js.map