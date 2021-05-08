(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return r}));var a=t(3),o=t(7),i=(t(0),t(111)),l={},u={unversionedId:"docs/basics/Modules",id:"docs/basics/Modules",isDocsHomePage:!1,title:"Modules",description:"Modules",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/basics/Modules.md",sourceDirName:"docs/basics",slug:"/docs/basics/Modules",permalink:"/vbyexample/ru/docs/docs/basics/Modules",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs/basics/Modules.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/vbyexample/ru/docs/docs/basics/Functions"},next:{title:"Variables",permalink:"/vbyexample/ru/docs/docs/basics/Variables"}},s=[{value:"Modules",id:"modules",children:[{value:"<code>init</code> functions",id:"init-functions",children:[]}]}],c={toc:s};function r(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"modules"},"Modules"),Object(i.b)("p",null,"Every file in the root of a folder is part of the same module. Simple programs don't need to specify module name, in which case it defaults to 'main'."),Object(i.b)("p",null,"V is a very modular language. Creating reusable modules is encouraged and is quite easy to do. To create a new module, create a directory with your module's name containing .v files with code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-v"},"cd ~/code/modules\nmkdir mymodule\nvim mymodule/myfile.v\n// myfile.v\nmodule mymodule\n\n// To export a function we have to use `pub`\npub fn say_hi() {\n    println('hello from mymodule!')\n}\n")),Object(i.b)("p",null,"You can now use ",Object(i.b)("inlineCode",{parentName:"p"},"mymodule")," in your code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-v"},"import mymodule\n\nfn main() {\n    mymodule.say_hi()\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Module names should be short, under 10 characters."),Object(i.b)("li",{parentName:"ul"},"Module names must use ",Object(i.b)("inlineCode",{parentName:"li"},"snake_case"),"."),Object(i.b)("li",{parentName:"ul"},"Circular imports are not allowed."),Object(i.b)("li",{parentName:"ul"},"You can have as many .v files in a module as you want."),Object(i.b)("li",{parentName:"ul"},"You can create modules anywhere."),Object(i.b)("li",{parentName:"ul"},"All modules are compiled statically into a single executable.")),Object(i.b)("h3",{id:"init-functions"},Object(i.b)("inlineCode",{parentName:"h3"},"init")," functions"),Object(i.b)("p",null,"If you want a module to automatically call some setup/initialization code when it is imported, you can use a module ",Object(i.b)("inlineCode",{parentName:"p"},"init")," function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-v"},"fn init() {\n    // your setup code here ...\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"init")," function cannot be public - it will be called automatically. This feature is particularly useful for initializing a C library."))}r.isMDXComponent=!0}}]);