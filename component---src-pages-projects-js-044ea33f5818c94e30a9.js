(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"16l3":function(t,e,n){"use strict";n.r(e);var r=n("L1Iu"),o=n("q1tI"),a=n.n(o),i=n("Wbzz"),c=(n("5N6z"),n("i99d")),s=n("vrFN"),u=n("p5lg"),l=n("f8li");e.default=function(){return a.a.createElement(c.a,null,a.a.createElement(s.a,{title:"projects"}),a.a.createElement(l.a,{title:"My Projects",text:"Have a look around",image:"https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}),a.a.createElement(i.StaticQuery,{query:p,render:function(t){return a.a.createElement(a.a.Fragment,null,console.log(t),a.a.createElement("h2",null,"Browse Projects"),a.a.createElement(u.a,{content:t.allProjectsJson.nodes}))},data:r}))};var p="3420463994"},"2rMq":function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return a}.call(e,n,e,t))||(t.exports=r)}()},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var o=n("q1tI"),a=r(o),i=r(n("2rMq")),c=r(n("Gytx"));t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s=[],u=void 0;function l(){u=t(s.map((function(t){return t.props}))),p.canUseDOM?e(u):n&&(u=n(u))}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.peek=function(){return u},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t},e.prototype.shouldComponentUpdate=function(t){return!c(t,this.props)},e.prototype.componentWillMount=function(){s.push(this),l()},e.prototype.componentDidUpdate=function(){l()},e.prototype.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},e.prototype.render=function(){return a.createElement(r,this.props)},e}(o.Component);return p.displayName="SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")",p.canUseDOM=i.canUseDOM,p}}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Portfolio","description":"My personal portfolio, showcasing some of my personal projects.","author":"@S-Leigh"}}}}')},Gytx:function(t,e,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),s=0;s<a.length;s++){var u=a[s];if(!c(u))return!1;var l=t[u],p=e[u];if(!1===(o=n?n.call(r,l,p,u):void 0)||void 0===o&&l!==p)return!1}return!0}},L1Iu:function(t){t.exports=JSON.parse('{"data":{"allProjectsJson":{"nodes":[{"id":"1","gitUrl":"https://github.com/LeighS95/cpp-hangman","lang":"cpp","image":"http://datagenetics.com/blog/april12012/hangmand.jpg","text":"My fist experiment in C++. It is very simple and easy to play!","section":"projects","projectUrl":"","title":"C++ Hangman","fields":{"slug":"C++ Hangman"}},{"id":"2","gitUrl":"https://github.com/LeighS95/pathfinder-algorithm","lang":"Javascript / ReactJs","image":"https://media.geeksforgeeks.org/wp-content/uploads/dijikstra.png","text":"This is a simple pathfinding visualisation app which shows how a dijkstra algorithm sorts through an array of nodes to find the end point and then displays the shortest route.","section":"projects","projectUrl":"https://leighs95.github.io/pathfinder-algorithm/","title":"Pathfinder App","fields":{"slug":"Pathfinder App"}},{"id":"3","gitUrl":"https://github.com/LeighS95/gatsby-portfolio","lang":"Javascript / Gatsby","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIJE7oG9b0IWO-PIuE-fkOVfCRe0V5J5hYjdwZs366MryVvHwow&s","text":"It is in here but you are already looking at it. But click the \'View Github\' button to see how it was made.","section":"projects","projectUrl":"","title":"This Portfolio","fields":{"slug":"This Portfolio"}},{"id":"4","gitUrl":"https://github.com/LeighS95/shopping-listhttps://github.com/LeighS95/weather-app","lang":"Full Stack","image":"https://cdn.dribbble.com/users/40760/screenshots/7007227/sunny_weather.gif","text":"This is a simple weather app. Type in a location and get the current weather...or just look out the window?","section":"projects","projectUrl":"https://leighs95.github.io/weather-app/","title":"weather-app","fields":{"slug":"weather-app"}},{"id":"5","gitUrl":"https://github.com/LeighS95/shopping-list","lang":"Full Stack","image":"https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","text":"A simple shopping list built using the MERN Stack (MongoBD, Express, React & Node)","section":"projects","projectUrl":"https://morning-falls-48959.herokuapp.com/","title":"MERN shopping List","fields":{"slug":"MERN shopping List"}},{"id":"6","gitUrl":"https://codepen.io/SLeigh1995/pen/dweqQK","lang":"Javascript","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIJE7oG9b0IWO-PIuE-fkOVfCRe0V5J5hYjdwZs366MryVvHwow&s","text":"Take a look at where I started not so long ago!","section":"projects","projectUrl":"https://codepen.io/SLeigh1995/full/dweqQK","title":"Old portfolio","fields":{"slug":"Old portfolio"}}]}}}')},TJpk:function(t,e,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=p(n("q1tI")),i=p(n("17x9")),c=p(n("8+s/")),s=p(n("bmMU")),u=n("v1p5"),l=n("hFT/");function p(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var T,d,E,h=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),A=(T=h,E=d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,s.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,a=t.newProps,i=t.newChildProps,c=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},a,((e={})[o.type]=c,e.titleAttributes=r({},i),e));case l.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return a.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=f(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(t,a),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=f(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),a.default.createElement(T,o)},o(e,null,[{key:"canUseDOM",set:function(t){T.canUseDOM=t}}]),e}(a.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var t=T.rewind();return t||(t=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},E);A.renderStatic=A.rewind,e.Helmet=A,e.default=A},bmMU:function(t,e,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,s,u,l=r(e),p=r(n);if(l&&p){if((s=e.length)!=n.length)return!1;for(c=s;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=p)return!1;var f=e instanceof Date,T=n instanceof Date;if(f!=T)return!1;if(f&&T)return e.getTime()==n.getTime();var d=e instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==n.toString();var h=o(e);if((s=h.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!a.call(n,h[c]))return!1;if(i&&e instanceof Element&&n instanceof Element)return e===n;for(c=s;0!=c--;)if(!("_owner"===(u=h[c])&&e.$$typeof||t(e[u],n[u])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},p5lg:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("n203"),c=n.n(i),s=function(t){var e=t.image,n=t.title,r=t.text,i=t.projectUrl,s=t.gitUrl,u=t.info;return o.a.createElement("div",{className:c.a.Card},o.a.createElement("div",{className:c.a.Card__Img},o.a.createElement("img",{src:e,alt:n})),o.a.createElement("div",{className:c.a.Card__Content},o.a.createElement("h3",{className:c.a.Card__Content_Title},n),o.a.createElement("p",{className:c.a.Card__Content_Text},r,u?o.a.createElement(a.Link,{to:u.slug}," Read More"):null),""!==i?o.a.createElement("div",{className:c.a.Buttons},o.a.createElement("a",{href:i,target:"_blank"},"View Project"),o.a.createElement("a",{href:s,target:"_blank"},"View Github")):o.a.createElement("div",{className:c.a.Buttons__Center},o.a.createElement("a",{href:s,target:"_blank"},"View Github"))))},u=n("5MQt"),l=n.n(u);e.a=function(t){var e=t.content;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:l.a.Section__Title},e.section),o.a.createElement("div",{className:l.a.CardSection__wrapper},e.map((function(t){return o.a.createElement(s,{key:t.id,image:t.image,title:t.title,text:t.text,projectUrl:t.projectUrl,gitUrl:t.gitUrl,info:t.fields})}))))}},v1p5:function(t,e,n){(function(t){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=s(n("q1tI")),i=s(n("MgzW")),c=n("hFT/");function s(t){return t&&t.__esModule?t:{default:t}}var u,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=h(t,c.TAG_NAMES.TITLE),n=h(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=h(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},f=function(t){return h(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},d=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e}),[])},E=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&S("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var s=a[i],u=s.toLowerCase();-1===e.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(r),s=0;s<a.length;s++){var u=a[s],l=(0,i.default)({},o[u],r[u]);o[u]=l}return t}),[]).reverse()},h=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},A=(u=Date.now(),function(t){var e=Date.now();e-u>16?(u=e,t(e)):setTimeout((function(){A(t)}),0)}),m=function(t){return clearTimeout(t)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:t.requestAnimationFrame||A,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:t.cancelAnimationFrame||m,S=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,_=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,l=t.scriptTags,p=t.styleTags,f=t.title,T=t.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,o),R(f,T);var d={baseTag:w(c.TAG_NAMES.BASE,n),linkTags:w(c.TAG_NAMES.LINK,a),metaTags:w(c.TAG_NAMES.META,i),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,s),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,p)},E={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,E,h)},v=function(t){return Array.isArray(t)?t.join(""):t},R=function(t,e){void 0!==t&&document.title!==t&&(document.title=v(t)),P(c.TAG_NAMES.TITLE,e)},P=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),s=0;s<i.length;s++){var u=i[s],l=e[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var p=a.indexOf(u);-1!==p&&a.splice(p,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},w=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return i=e,n.isEqualNode(t)}))?o.splice(i,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},O=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},C=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=O(n),a=v(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(a,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+l(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return O(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),a.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){b&&y(b),t.defer?b=g((function(){_(t,(function(){b=null}))})):(_(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,s=t.noscriptTags,u=t.scriptTags,l=t.styleTags,p=t.title,f=void 0===p?"":p,T=t.titleAttributes;return{base:C(c.TAG_NAMES.BASE,e,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,r),link:C(c.TAG_NAMES.LINK,a,r),meta:C(c.TAG_NAMES.META,i,r),noscript:C(c.TAG_NAMES.NOSCRIPT,s,r),script:C(c.TAG_NAMES.SCRIPT,u,r),style:C(c.TAG_NAMES.STYLE,l,r),title:C(c.TAG_NAMES.TITLE,{title:f,titleAttributes:T},r)}},e.reducePropsToState=function(t){return{baseTag:d([c.TAG_PROPERTIES.HREF],t),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,t),defer:h(t,c.HELMET_PROPS.DEFER),encode:h(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=g,e.warn=S}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";var r=n("EH9Q"),o=n("q1tI"),a=n.n(o),i=n("TJpk"),c=n.n(i);function s(t){var e=t.description,n=t.lang,o=t.meta,i=t.title,s=r.data.site,u=e||s.siteMetadata.description;return a.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(o)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s}}]);
//# sourceMappingURL=component---src-pages-projects-js-044ea33f5818c94e30a9.js.map