(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{2599:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return r(5917)}])},5917:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return c},default:function(){return p}});var s=r(4246),i=r(9304),t=r(8224),a=r(6282);r(6288);var l=r(1441),o={src:"/react-native-builder-bob//_next/static/media/create-react-native-library.eafc048f.svg",height:581,width:840,blurWidth:0,blurHeight:0};let c=[{depth:2,value:"Features",id:"features"},{depth:2,value:"Usage",id:"usage"},{depth:2,value:"Local library",id:"local-library"},{depth:2,value:"Writing native code",id:"writing-native-code"}];function d(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",span:"span",img:"img",blockquote:"blockquote"},(0,l.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Scaffold a React Native library"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to create your own React Native library, scaffolding the project can be a daunting task. ",(0,s.jsx)(n.code,{children:"create-react-native-library"})," can scaffold a new project for you with all the necessary tools configured."]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimal boilerplate for libraries on which you can build upon"}),"\n",(0,s.jsx)(n.li,{children:"Example React Native app to test your library code"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," to ensure type-safe code and better DX"]}),"\n",(0,s.jsxs)(n.li,{children:["Support for ",(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/turbo-native-modules-introduction",children:"Turbo Modules"})," & ",(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/fabric-native-components-introduction",children:"Fabric"})]}),"\n",(0,s.jsxs)(n.li,{children:["Support for ",(0,s.jsx)(n.a,{href:"https://kotlinlang.org/",children:"Kotlin"})," on Android & ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/swift/",children:"Swift"})," on iOS"]}),"\n",(0,s.jsx)(n.li,{children:"Support for C++ to write cross-platform native code"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://expo.io/",children:"Expo"})," for libraries without native code and web support"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"}),", ",(0,s.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),", ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/evilmartians/lefthook",children:"Lefthook"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/release-it/release-it",children:"Release It"})," pre-configured"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./build",children:(0,s.jsx)(n.code,{children:"react-native-builder-bob"})})," pre-configured to compile your files"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/features/actions",children:"GitHub Actions"})," pre-configured to run tests and lint on the CI"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"To create new project, run the following:"}),"\n",(0,s.jsx)(n.pre,{"data-language":"sh","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"create-react-native-library@latest"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"awesome-library"})]})})}),"\n",(0,s.jsxs)(n.p,{children:["This will ask you a few questions about your project and generate a new project in a folder named ",(0,s.jsx)(n.code,{children:"awesome-library"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo",src:o})}),"\n",(0,s.jsxs)(n.p,{children:["After the project is created, you can find the development workflow in the generated ",(0,s.jsx)(n.code,{children:"CONTRIBUTING.md"})," file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note: If you want to create a library using the legacy native modules and view APIs instead of the new architecture, you can use the ",(0,s.jsx)(n.code,{children:"0.49.8"})," version of ",(0,s.jsx)(n.code,{children:"create-react-native-library"}),": ",(0,s.jsx)(n.code,{children:"npx create-react-native-library@0.49.8 awesome-library"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"local-library",children:"Local library"}),"\n",(0,s.jsx)(n.p,{children:"While the default templates are for libraries that are published to npm, you can also create a local library that is not published but used locally in your app."}),"\n",(0,s.jsx)(n.p,{children:"You'd typically use a local library when:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You're building a native library for your app and don't want to publish it to npm."}),"\n",(0,s.jsx)(n.li,{children:"You want to be able to easily copy the library to other projects."}),"\n",(0,s.jsx)(n.li,{children:"You're in a monorepo and want to keep the library code in the same repository as the app."}),"\n",(0,s.jsx)(n.li,{children:"You're using Expo, but want to use vanilla React Native API for native modules and components."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The structure of the app with a local library may look like this:"}),"\n",(0,s.jsx)(n.pre,{"data-language":"sh","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"sh","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyApp"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"├──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"node_modules"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"├──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"modules"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"              "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"folder"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"for"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"your"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"local"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"libraries"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"│"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"└──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"awesome-library"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"your"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"local"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"library"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"├──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"android"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"├──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ios"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"├──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"src"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"├──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"index.js"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"└──"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"package.json"})]})]})}),"\n",(0,s.jsxs)(n.p,{children:["If you run ",(0,s.jsx)(n.code,{children:"create-react-native-library"})," in an existing project containing a ",(0,s.jsx)(n.code,{children:"package.json"}),", it'll be automatically detected and you'll be asked if you want to create a local library. You can also pass the ",(0,s.jsx)(n.code,{children:"--local"})," flag to the command to explicitly create a local library:"]}),"\n",(0,s.jsx)(n.pre,{"data-language":"sh","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"create-react-native-library@latest"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"awesome-library"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--local"})]})})}),"\n",(0,s.jsxs)(n.p,{children:["The local library is created outside of the ",(0,s.jsx)(n.code,{children:"android"})," and ",(0,s.jsx)(n.code,{children:"ios"})," folders and makes use of autolinking to integrate with your app. It also doesn't include a separate example app and additional dependencies that are configured in the default templates. This is an alternative approach to the setup mentioned in ",(0,s.jsx)(n.a,{href:"https://reactnative.dev",children:"React Native docs"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The advantages of this approach are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It's easier to upgrade React Native as you don't need to worry about custom code in ",(0,s.jsx)(n.code,{children:"android"})," and ",(0,s.jsx)(n.code,{children:"ios"})," folders."]}),"\n",(0,s.jsxs)(n.li,{children:["It can be used with ",(0,s.jsx)(n.a,{href:"https://expo.io/",children:"Expo"})," managed projects with custom development client."]}),"\n",(0,s.jsx)(n.li,{children:"It's easier to copy the library to other projects or publish later if needed."}),"\n",(0,s.jsx)(n.li,{children:"The boilerplate for the library doesn't need to be written from scratch."}),"\n",(0,s.jsx)(n.li,{children:"It can be used with monorepos where the additional tooling in the default templates may not be needed."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the generated library is automatically linked to the project using ",(0,s.jsx)(n.code,{children:"link:"})," protocol when using ",(0,s.jsx)(n.a,{href:"https://yarnpkg.com/",children:"Yarn"})," and ",(0,s.jsx)(n.code,{children:"file:"})," when using ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/cli",children:"npm"}),":"]}),"\n",(0,s.jsx)(n.pre,{"data-language":"json","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"json","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dependencies"'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"react-native-awesome-library"'}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"link:./modules/awesome-library"'})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["This creates a symlink to the library under ",(0,s.jsx)(n.code,{children:"node_modules"})," which makes autolinking work. But if you're using a monorepo or have non-standard setup, you'll need to manually set up the package to be linked to your app based on your project setup."]}),"\n",(0,s.jsx)(n.h2,{id:"writing-native-code",children:"Writing native code"}),"\n",(0,s.jsx)(n.p,{children:"Once the project is created, you can follow the official React Native docs to learn the API for writing native modules and components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/legacy/native-modules-intro",children:"Native Modules"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/legacy/native-components-android",children:"Native UI Components for Android"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/legacy/native-components-ios",children:"Native UI Components for iOS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/turbo-native-modules-introduction",children:"Turbo Modules"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/fabric-native-components-introduction",children:"Fabric Components"})}),"\n"]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/create.md",route:"/create",pageMap:[{kind:"Meta",data:{index:"Introduction",create:"Scaffold a library",build:"Build a library",esm:"ESM support",faq:"FAQ"}},{kind:"MdxPage",name:"build",route:"/build"},{kind:"MdxPage",name:"create",route:"/create"},{kind:"MdxPage",name:"esm",route:"/esm"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Scaffold a React Native library",headings:c},pageNextRoute:"/create",nextraLayout:t.ZP,themeConfig:a.Z};var p=(0,i.j)(h)},6282:function(e,n,r){"use strict";var s=r(4246);r(7378),n.Z={primaryHue:30,logo:(0,s.jsx)("span",{style:{fontSize:"32px"},children:"\uD83D\uDC77‍♂️"}),project:{link:"https://github.com/callstack/react-native-builder-bob"},docsRepositoryBase:"https://github.com/callstack/react-native-builder-bob/tree/main/docs",head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{property:"og:description",content:"Bob - Create and build React Native libraries with ease"})]}),faviconGlyph:"\uD83D\uDC77‍♂️",footer:{text:(0,s.jsxs)("span",{children:["Copyright \xa9 ",new Date().getFullYear()," ",(0,s.jsx)("a",{href:"https://www.callstack.com/",target:"_blank",rel:"noreferrer",children:"Callstack Open Source"}),"."]})},useNextSeoProps:()=>({titleTemplate:"%s – Bob"})}}},function(e){e.O(0,[774,374,888,179],function(){return e(e.s=2599)}),_N_E=e.O()}]);