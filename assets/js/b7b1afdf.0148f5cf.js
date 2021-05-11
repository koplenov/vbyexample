(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[566],{5210:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return r},default:function(){return d}});var i=t(2122),a=t(9756),o=(t(7294),t(3905)),s={},l={unversionedId:"docs/basics/Functions",id:"docs/basics/Functions",isDocsHomePage:!1,title:"Functions",description:"Functions",source:"@site/docs/docs/basics/Functions.md",sourceDirName:"docs/basics",slug:"/docs/basics/Functions",permalink:"/vpage/docs/docs/basics/Functions",editUrl:"https://github.com/koplenov/vpage/edit/master/docs/docs/basics/Functions.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0441\u043d\u043e\u0432\u044b \u044f\u0437\u044b\u043a\u0430 V",permalink:"/vpage/docs/docs/basics-of-language-V"},next:{title:"Modules",permalink:"/vpage/docs/docs/basics/Modules"}},r=[{value:"Functions",id:"functions",children:[{value:"Returning multiple values",id:"returning-multiple-values",children:[]}]},{value:"Symbol visibility",id:"symbol-visibility",children:[]}],u={toc:r};function d(n){var e=n.components,t=(0,a.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v"},"fn main() {\n    println(add(77, 33))\n    println(sub(100, 50))\n}\n\nfn add(x int, y int) int {\n    return x + y\n}\n\nfn sub(x int, y int) int {\n    return x - y\n}\n")),(0,o.kt)("p",null,"Again, the type comes after the argument's name."),(0,o.kt)("p",null,"Just like in Go and C, functions cannot be overloaded. This simplifies the code and improves maintainability and readability."),(0,o.kt)("p",null,"Functions can be used before their declaration: ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," are declared after ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", but can still be called from ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),". This is true for all declarations in V and eliminates the need for header files or thinking about the order of files and declarations."),(0,o.kt)("h3",{id:"returning-multiple-values"},"Returning multiple values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v"},"fn foo() (int, int) {\n    return 2, 3\n}\n\na, b := foo()\nprintln(a) // 2\nprintln(b) // 3\nc, _ := foo() // ignore values using `_`\n")),(0,o.kt)("h2",{id:"symbol-visibility"},"Symbol visibility"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v"},"pub fn public_function() {\n}\n\nfn private_function() {\n}\n")),(0,o.kt)("p",null,"Functions are private (not exported) by default. To allow other modules to use them, prepend ",(0,o.kt)("inlineCode",{parentName:"p"},"pub"),". The same applies to constants and types."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"pub")," can only be used from a named module. For information about creating a module, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vlang/v/blob/master/doc/docs.md#modules"},"Modules"),"."))}d.isMDXComponent=!0}}]);