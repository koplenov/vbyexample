(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[566],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5210:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a={},l={unversionedId:"docs/basics/Functions",id:"docs/basics/Functions",isDocsHomePage:!1,title:"Functions",description:"Functions",source:"@site/docs/docs/basics/Functions.md",sourceDirName:"docs/basics",slug:"/docs/basics/Functions",permalink:"/vbyexample/docs/docs/basics/Functions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs/basics/Functions.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/vbyexample/docs/docs/intro"},next:{title:"Modules",permalink:"/vbyexample/docs/docs/basics/Modules"}},s=[{value:"Functions",id:"functions",children:[{value:"Returning multiple values",id:"returning-multiple-values",children:[]}]},{value:"Symbol visibility",id:"symbol-visibility",children:[]}],c={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v"},"fn main() {\n    println(add(77, 33))\n    println(sub(100, 50))\n}\n\nfn add(x int, y int) int {\n    return x + y\n}\n\nfn sub(x int, y int) int {\n    return x - y\n}\n")),(0,o.kt)("p",null,"Again, the type comes after the argument's name."),(0,o.kt)("p",null,"Just like in Go and C, functions cannot be overloaded. This simplifies the code and improves maintainability and readability."),(0,o.kt)("p",null,"Functions can be used before their declaration: ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," are declared after ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", but can still be called from ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),". This is true for all declarations in V and eliminates the need for header files or thinking about the order of files and declarations."),(0,o.kt)("h3",{id:"returning-multiple-values"},"Returning multiple values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v"},"fn foo() (int, int) {\n    return 2, 3\n}\n\na, b := foo()\nprintln(a) // 2\nprintln(b) // 3\nc, _ := foo() // ignore values using `_`\n")),(0,o.kt)("h2",{id:"symbol-visibility"},"Symbol visibility"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v"},"pub fn public_function() {\n}\n\nfn private_function() {\n}\n")),(0,o.kt)("p",null,"Functions are private (not exported) by default. To allow other modules to use them, prepend ",(0,o.kt)("inlineCode",{parentName:"p"},"pub"),". The same applies to constants and types."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"pub")," can only be used from a named module. For information about creating a module, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vlang/v/blob/master/doc/docs.md#modules"},"Modules"),"."))}u.isMDXComponent=!0}}]);