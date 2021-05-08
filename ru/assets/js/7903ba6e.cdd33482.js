(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{86:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return r})),n.d(a,"toc",(function(){return b})),n.d(a,"default",(function(){return c}));var t=n(3),i=n(7),l=(n(0),n(111)),s={},r={unversionedId:"docs/basics/Variables",id:"docs/basics/Variables",isDocsHomePage:!1,title:"Variables",description:"Variables",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/docs/basics/Variables.md",sourceDirName:"docs/basics",slug:"/docs/basics/Variables",permalink:"/vbyexample/ru/docs/docs/basics/Variables",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs/basics/Variables.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/vbyexample/ru/docs/docs/basics/Modules"},next:{title:"Tutorials",permalink:"/vbyexample/ru/docs/tutorials/intro"}},b=[{value:"Variables",id:"variables",children:[{value:"Mutable variables",id:"mutable-variables",children:[]},{value:"Initialization vs assignment",id:"initialization-vs-assignment",children:[]}]}],o={toc:b};function c(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},o,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"variables"},"Variables"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-v"},"name := 'Bob'\nage := 20\nlarge_number := i64(9999999999)\nprintln(name)\nprintln(age)\nprintln(large_number)\n")),Object(l.b)("p",null,"Variables are declared and initialized with ",Object(l.b)("inlineCode",{parentName:"p"},":="),". This is the only way to declare variables in V. This means that variables always have an initial value."),Object(l.b)("p",null,"The variable's type is inferred from the value on the right hand side. To choose a different type, use type conversion: the expression ",Object(l.b)("inlineCode",{parentName:"p"},"T(v)")," converts the value ",Object(l.b)("inlineCode",{parentName:"p"},"v")," to the type ",Object(l.b)("inlineCode",{parentName:"p"},"T"),"."),Object(l.b)("p",null,"Unlike most other languages, V only allows defining variables in functions. Global (module level) variables are not allowed. There's no global state in V (see ",Object(l.b)("a",{parentName:"p",href:"https://github.com/vlang/v/blob/master/doc/docs.md#pure-functions-by-default"},"Pure functions by default")," for details)."),Object(l.b)("p",null,"For consistency across different code bases, all variable and function names must use the ",Object(l.b)("inlineCode",{parentName:"p"},"snake_case")," style, as opposed to type names, which must use ",Object(l.b)("inlineCode",{parentName:"p"},"PascalCase"),"."),Object(l.b)("h3",{id:"mutable-variables"},"Mutable variables"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-v"},"mut age := 20\nprintln(age)\nage = 21\nprintln(age)\n")),Object(l.b)("p",null,"To change the value of the variable use ",Object(l.b)("inlineCode",{parentName:"p"},"="),". In V, variables are immutable by default. To be able to change the value of the variable, you have to declare it with ",Object(l.b)("inlineCode",{parentName:"p"},"mut"),"."),Object(l.b)("p",null,"Try compiling the program above after removing ",Object(l.b)("inlineCode",{parentName:"p"},"mut")," from the first line."),Object(l.b)("h3",{id:"initialization-vs-assignment"},"Initialization vs assignment"),Object(l.b)("p",null,"Note the (important) difference between ",Object(l.b)("inlineCode",{parentName:"p"},":=")," and ",Object(l.b)("inlineCode",{parentName:"p"},"="),". ",Object(l.b)("inlineCode",{parentName:"p"},":=")," is used for declaring and initializing, ",Object(l.b)("inlineCode",{parentName:"p"},"=")," is used for assigning."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-v"},"fn main() {\n    age = 21\n}\n")),Object(l.b)("p",null,"This code will not compile, because the variable ",Object(l.b)("inlineCode",{parentName:"p"},"age")," is not declared. All variables need to be declared in V."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-v"},"fn main() {\n    age := 21\n}\n")),Object(l.b)("p",null,"The values of multiple variables can be changed in one line. In this way, their values can be swapped without an intermediary variable."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-V"},"mut a := 0\nmut b := 1\nprintln('$a, $b') // 0, 1\na, b = b, a\nprintln('$a, $b') // 1, 0\n")))}c.isMDXComponent=!0}}]);