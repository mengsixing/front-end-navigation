(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){var r,o,s={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),i=null,c=0,u=[],p=n(11);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=s[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(g(r.parts[a],e));s[r.id]={id:r.id,refs:1,parts:l}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=e.base?s[0]+e.base:s[0],l={css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function m(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(t.insertAt.before,n);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function w(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),m(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var a=c++;n=i||(i=w(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),m(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||s)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=w(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return f(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(l=s[a.id]).refs--,r.push(l)}t&&f(h(t,e),e);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var i=0;i<l.parts.length;i++)l.parts[i]();delete s[l.id]}}}};var b,y=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(14);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(19);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(21);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(23);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e){t.exports=Vue},function(t,e){t.exports=ELEMENT},function(t,e,n){"use strict";var r=n(1);n.n(r).a},function(t,e,n){},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){t.exports=n.p+"qianduandaohang-da419e12.png"},function(t,e,n){"use strict";var r=n(2);n.n(r).a},function(t,e,n){},function(t,e,n){t.exports=n.p+"github-093b53a5.png"},function(t,e,n){"use strict";var r=n(3);n.n(r).a},function(t,e,n){},function(t,e,n){"use strict";var r=n(4);n.n(r).a},function(t,e,n){},function(t,e,n){"use strict";var r=n(5);n.n(r).a},function(t,e,n){},function(t,e,n){"use strict";var r=n(6);n.n(r).a},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n.n(r),s=n(8),a=n.n(s),l=[{label:"Google",value:0,url:"https://www.google.com/search?q="},{label:"百度",value:1,url:"https://www.baidu.com/s?wd="},{label:"Bing",value:2,url:"https://cn.bing.com/search?q="},{label:"NPM Package",value:3,url:"https://www.npmjs.com/search?q="}],i={title:"常用网址",list:[{name:"掘金",url:"https://juejin.im"},{name:"知乎",url:"https://www.zhihu.com"},{name:"Github",url:"https://www.github.com"},{name:"GithubTrending",url:"https://www.github.com/trending"},{name:"Leetcode中文",url:"https://leetcode-cn.com/"},{name:"CNode",url:"https://cnodejs.org"},{name:"Twitter",url:"https://twitter.com/"},{name:"V2EX",url:"https://www.v2ex.com"},{name:"Stackoverflow",url:"https://stackoverflow.com/"},{name:"Segmentfault",url:"https://segmentfault.com"},{name:"微信公众平台",url:"https://mp.weixin.qq.com/"},{name:"Linux 命令查询",url:"https://wangchujiang.com/linux-command/"},{name:"Awesomes",url:"https://www.awesomes.cn/"},{name:"印象笔记",url:"https://www.yinxiang.com/"},{name:"豆瓣读书",url:"https://book.douban.com/"}]},c={title:"热门技术",list:[{name:"React",url:"https://reactjs.org/"},{name:"React生命周期",url:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},{name:"Vue",url:"https://cn.vuejs.org/"},{name:"Angular",url:"https://angular.io/"},{name:"Webpack",url:"https://webpack.js.org/"},{name:"Node",url:"https://nodejs.org/en/"},{name:"TypeScript",url:"https://www.tslang.cn/"},{name:"GraphQL",url:"http://graphql.cn/"},{name:"Babel",url:"https://www.babeljs.cn/"},{name:"Docker",url:"https://docs.docker-cn.com/"}]},u={title:"参考规范",list:[{name:"ES5 规范",url:"http://es5.github.io/"},{name:"Licenses 规范",url:"https://choosealicense.com/licenses/"},{name:"版本号规范",url:"https://semver.org/lang/zh-CN/"},{name:"变量命名规范",url:"https://unbug.github.io/codelf"},{name:"JSON 规范",url:"https://www.json.org/json-zh.html"}]},p={title:"工具大全",list:[{name:"阿里云",url:"https://www.aliyun.com/"},{name:"七牛云",url:"https://www.qiniu.com/"},{name:"坚果云",url:"https://www.jianguoyun.com"},{name:"Vultr",url:"https://www.vultr.com/"},{name:"Google Analysis",url:"https://analytics.google.com"},{name:"BootCDN",url:"https://www.bootcdn.cn/"},{name:"CodeSandbox",url:"https://codesandbox.io"},{name:"百度翻译",url:"https://fanyi.baidu.com/"},{name:"FEHelper",url:"https://www.baidufe.com/fehelper"},{name:"Can I use",url:"https://caniuse.com/"},{name:"网站性能检测",url:"https://web.dev/"},{name:"图标下载",url:"https://www.easyicon.net/"},{name:"UserAgentString",url:"http://useragentstring.com/"},{name:"爬虫商城",url:"https://www.shenjian.io/"},{name:"印记中国",url:"https://www.docschina.org/"},{name:"前端报错监控",url:"https://www.fundebug.com/"},{name:"流程图制作",url:"https://www.processon.com/"},{name:"移动端调试",url:"https://github.com/wuchangming/spy-debugger"},{name:"Mock数据",url:"https://www.easy-mock.com/"},{name:"文件内容比较",url:"https://www.scootersoftware.com"},{name:"静态网页Netlify",url:"https://www.netlify.com/"},{name:"NPM包大小检查",url:"https://bundlephobia.com/"}]},f={title:"经典博客",list:[{name:"阮一峰",url:"http://www.ruanyifeng.com/blog/"},{name:"冴羽",url:"https://github.com/mqyqingfeng/Blog"},{name:"张鑫旭",url:"https://www.zhangxinxu.com/wordpress/"},{name:"大漠",url:"https://www.w3cplus.com/"},{name:"前端路上",url:"https://refined-x.com/"}]},h={title:"学习中心",list:[{name:"腾讯课堂",url:"https://ke.qq.com/"},{name:"慕课网",url:"https://www.imooc.com/"},{name:"极客时间",url:"https://www.geekbang.org/"},{name:"牛客网",url:"https://www.nowcoder.com/"},{name:"跬步客",url:"https://www.kuibuke.com"}]},m={data:function(){return{searchText:"",oldSearchText:"",searchType:0,searchOptions:l}},methods:{startSearch:function(){return this.oldSearchText===this.searchText&&(window.open(this.searchOptions[this.searchType].url+this.searchText),!0)},modifyValue:function(){this.oldSearchText=this.searchText}}};n(9);function d(t,e,n,r,o,s,a,l){var i,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=i):o&&(i=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),i)if(c.functional){c._injectStyles=i;var u=c.render;c.render=function(t,e){return i.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,i):[i]}return{exports:t,options:c}}var w=d(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.startSearch(e)}}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},on:{change:t.modifyValue},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},t._l(t.searchOptions,function(t){return n("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.startSearch},slot:"append"})],1)],1)},[],!1,null,null,null).exports,v=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner animated bounce"},[e("img",{staticClass:"banner-image",attrs:{src:n(12),alt:"banner"}})])}],g=(n(13),d({},function(){this.$createElement;this._self._c;return this._m(0)},v,!1,null,null,null).exports),b={methods:{}},y=(n(16),d(b,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-row",[e("el-col",{staticClass:"navigation-github",attrs:{span:1,offset:23,xs:{span:1,offset:22}}},[e("a",{staticClass:"github",attrs:{href:"https://github.com/yhlben/front-end-navigation",target:"_blank"}},[e("img",{attrs:{src:n(15),alt:"github"}})])])],1)],1)},[],!1,null,"21662406",null).exports),x={props:["data","type"],computed:{titleStyle:function(){return this.type},itemHoverStyle:function(){return"".concat(this.type,"-hover")}}},_=(n(18),d(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{staticClass:"common-panel",attrs:{span:24}},[n("el-row",{staticClass:"common-panel-title",class:t.titleStyle},[t._v(t._s(t.data.title))]),t._v(" "),n("el-row",{staticClass:"common-panel-container",attrs:{gutter:10}},t._l(t.data.list,function(e){return n("el-col",{key:e.name,staticClass:"common-panel-item",attrs:{xs:24,sm:12,md:8,lg:6}},[n("a",{staticClass:"common-panel-item-a",attrs:{href:e.url,target:"_blank"}},[n("el-card",{class:t.itemHoverStyle,attrs:{shadow:"always"}},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)])}),1)],1)],1)],1)},[],!1,null,null,null)),T=d({components:{Block:_.exports},data:function(){return{commonList:i,toolList:p,blogList:f,studyList:h,hotTechnologyList:c,standardList:u}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("block",{attrs:{data:t.commonList,type:"commonList"}}),t._v(" "),n("block",{attrs:{data:t.hotTechnologyList,type:"hotTechnologyList"}}),t._v(" "),n("block",{attrs:{data:t.standardList,type:"standardList"}}),t._v(" "),n("block",{attrs:{data:t.toolList,type:"toolList"}}),t._v(" "),n("block",{attrs:{data:t.blogList,type:"blogList"}}),t._v(" "),n("block",{attrs:{data:t.studyList,type:"studyList"}})],1)},[],!1,null,null,null).exports,E={props:["scrollElement"],data:function(){return{timer:"",scrolling:!1}},mounted:function(){this.scrollElement.style["scroll-behavior"]="smooth",this.scrollElement.addEventListener("scroll",this.scrollToTop)},methods:{scrollToTop:function(){var t=this.$refs.topBtn,e=this.scrollElement.pageYOffset||this.scrollElement.scrollTop||this.scrollElement.scrollTop,n=this.scrollElement.offsetHeight-80;t.style.visibility=e>n?"visible":"hidden"},gotoTop:function(){this.scrollElement.scrollTop=0}},beforeDestroy:function(){this.scrollElement.removeEventListener("scroll",this.scrollToTop)}},k=(n(20),{components:{Search:w,Banner:g,MainContainer:T,ScrollToTop:d(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{ref:"topBtn",staticClass:"gotoTop",attrs:{id:"scroll-to-top"},on:{click:function(e){return t.gotoTop()}}},[n("i",{staticClass:"el-icon-caret-top"})])])},[],!1,null,"0fe9772c",null).exports,Navigation:y},data:function(){return{search:"",select:"",scrollElement:""}},mounted:function(){this.scrollElement=this.$refs.main.$el}}),C=(n(22),d(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("el-container",[n("el-header",[n("Navigation")],1),t._v(" "),n("el-main",{ref:"main"},[n("el-row",[n("el-col",{attrs:{lg:{span:16,offset:4},md:{span:18,offset:3},sm:{span:20,offset:2},xs:{span:20,offset:2}}},[n("Banner")],1),t._v(" "),n("el-col",{attrs:{lg:{span:16,offset:4},md:{span:18,offset:3},sm:{span:20,offset:2},xs:{span:0}}},[n("Search")],1)],1),t._v(" "),n("div",{staticClass:"white-line"}),t._v(" "),n("el-row",[n("el-col",{attrs:{lg:{span:16,offset:4},md:{span:18,offset:3},sm:{span:20,offset:2},xs:{span:22,offset:1}}},[n("MainContainer")],1)],1)],1),t._v(" "),n("el-footer",{attrs:{height:"35px"}},[t._v("created by\n      "),n("a",{attrs:{target:"_blank",href:"https://github.com/yhlben"}},[t._v("@yhlben")])])],1),t._v(" "),t.scrollElement?n("scroll-to-top",{attrs:{scrollElement:t.scrollElement}}):t._e()],1)},[],!1,null,null,null).exports);o.a.use(a.a),new o.a({render:function(t){return t(C)}}).$mount("#root")}],[[24,1]]]);