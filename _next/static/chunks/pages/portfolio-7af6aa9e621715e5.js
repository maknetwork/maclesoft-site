(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{7867:function(e){var t={src:"/_next/static/images/water-tank-top-a8e6ae9cdee57269df034b09c6b6306a.jpg",palette:["#415d23","#3d3e4b","#94b25f","#cfc6ab","#e5c8af","#b2ca3b"]};e.exports=t.palette,e.exports=Object.assign(e.exports,t)},89:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return i(4828)}])},6553:function(e,t,i){"use strict";var n=i(5893),s=i(8262),a=i(8866),o=i(8460),r=i(7048),c=i(6119),h=i.n(c),d=i(296),l=i.n(d),u=i(7294);function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,i){return t&&m(e.prototype,t),i&&m(e,i),e}t.Z=function(e){var t;return(0,u.useEffect)((function(){var e=function(e,t){return Math.random()*(t-e)+e},t=function(e,t,i,n,s){return(e-t)/(i-t)*(s-n)+n};console.log("sajjasnajs");var i=new r.ZP,n=function(){function t(){f(this,t),this.setColors(),this.setCustomProperties()}return p(t,[{key:"setColors",value:function(){this.hue=~~e(220,360),this.complimentaryHue1=this.hue+30,this.complimentaryHue2=this.hue+60,this.saturation=95,this.lightness=50,this.baseColor=h()(this.hue,this.saturation,this.lightness),this.complimentaryColor1=h()(this.complimentaryHue1,this.saturation,this.lightness),this.complimentaryColor2=h()(this.complimentaryHue2,this.saturation,this.lightness),this.colorChoices=[this.baseColor,this.complimentaryColor1,this.complimentaryColor2]}},{key:"randomColor",value:function(){return this.colorChoices[~~e(0,this.colorChoices.length)].replace("#","0x")}},{key:"setCustomProperties",value:function(){document.documentElement.style.setProperty("--hue",this.hue),document.documentElement.style.setProperty("--hue-complimentary1",this.complimentaryHue1),document.documentElement.style.setProperty("--hue-complimentary2",this.complimentaryHue2)}}]),t}(),s=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this;f(this,n),this.bounds=this.setBounds(),this.x=e(this.bounds.x.min,this.bounds.x.max),this.y=e(this.bounds.y.min,this.bounds.y.max),this.scale=1,this.fill=t,this.radius=e(window.innerHeight/6,window.innerHeight/3),this.xOff=e(0,1e3),this.yOff=e(0,1e3),this.inc=.002,this.graphics=new a.TCu,this.graphics.alpha=.825,window.addEventListener("resize",l()((function(){i.bounds=i.setBounds()}),250))}return p(n,[{key:"setBounds",value:function(){var e=window.innerWidth<1e3?window.innerWidth/3:window.innerWidth/5,t=window.innerWidth/1.25,i=window.innerWidth<1e3?window.innerHeight:window.innerHeight/1.375;return{x:{min:t-e,max:t+e},y:{min:i-e,max:i+e}}}},{key:"update",value:function(){var e=i.noise2D(this.xOff,this.xOff),n=i.noise2D(this.yOff,this.yOff),s=i.noise2D(this.xOff,this.yOff);this.x=t(e,-1,1,this.bounds.x.min,this.bounds.x.max),this.y=t(n,-1,1,this.bounds.y.min,this.bounds.y.max),this.scale=t(s,-1,1,.5,1),this.xOff+=this.inc,this.yOff+=this.inc}},{key:"render",value:function(){this.graphics.x=this.x,this.graphics.y=this.y,this.graphics.scale.set(this.scale),this.graphics.clear(),this.graphics.beginFill(this.fill),this.graphics.drawCircle(0,0,this.radius),this.graphics.endFill()}}]),n}(),c=new a.MxU({view:document.querySelector(".orb-canvas"),resizeTo:window,transparent:!0}),d=new n;c.stage.filters=[new o.p(30,10,!0)];for(var u=[],m=0;m<10;m++){var b=new s(d.randomColor());c.stage.addChild(b.graphics),u.push(b)}return window.matchMedia("(prefers-reduced-motion: reduce)").matches?u.forEach((function(e){e.update(),e.render()})):c.ticker.add((function(){u.forEach((function(e){e.update(),e.render()}))})),function(){console.log("destroy"),c.destroy()}}),[]),(0,n.jsxs)("div",{className:"".concat(null!==(t=e.heading)&&void 0!==t?t:"page","-heading h-1/2 relative shadow-lg"),style:{background:"var(--bg-gradient)",zIndex:"0"},children:[(0,n.jsx)("canvas",{className:"orb-canvas"}),(0,n.jsx)("div",{className:"h-full",style:{background:"rgba(255, 255, 255, 0.375)",zIndex:"1"},children:(0,n.jsx)("div",{className:"flex items-center justify-center pointer-events-none",children:(0,n.jsxs)("div",{className:"sm:p-40 py-28 px-6",children:[(0,n.jsx)(s.E.h1,{className:"sm:text-5xl text-4xl font-black text-center text-black tracking-wide",animate:{opacity:[0,1],y:[20,0]},transition:{duration:1,ease:"easeInOut"},children:e.heading}),e.subheading&&(0,n.jsxs)("p",{className:"text-center",children:[" ",e.subheading]})]})})})]})}},4828:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return N}});var n=i(5893),s=i(9229),a=i(7294),o=i(1664),r=i.n(o),c=i(7819),h=i.n(c),d=function(e){return(0,n.jsxs)("div",{className:h().portfolio,style:{minHeight:"400px"},children:[(0,n.jsx)("div",{className:h()["thumbnail-inner"],children:(0,n.jsx)("div",{className:h().thumbnail,style:{backgroundImage:"url(".concat(e.image,")")}})}),(0,n.jsx)("div",{className:"card-content absolute bottom-0 left-0 z-10",children:(0,n.jsxs)("div",{className:"p-12 mt-auto",children:[(0,n.jsx)("div",{className:"category",children:(0,n.jsx)("h3",{className:"text-md font-bold font-poppins text-white text-opacity-80",children:e.category})}),(0,n.jsx)("div",{className:"project-title",children:(0,n.jsx)("h2",{className:"text-3xl font-bold font-poppins text-white",children:e.title})}),(0,n.jsx)("div",{className:"case-study-button mt-4",children:(0,n.jsx)(r(),{href:"/portfolio/reactjs",children:(0,n.jsx)("a",{className:"rn-btn",children:"Case Study"})})})]})})]})},l=i(7654),u=i(8262),f=i(8866),m=i(8460),p=i(7048),b=i(6119),g=i.n(b),w=i(296),x=i.n(w),y=i(6553);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t,i){return t&&_(e.prototype,t),i&&_(e,i),e}function j(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function O(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){j(e,t,i[t])}))}return e}var k=[{title:"Smart Inhaler",category:"Development",image:i(4808)},{title:"FlyBox",category:"Development",image:i(4593)},{title:"ACS iSite",category:"Development",image:i(355)},{title:"Water Tank",category:"Development",image:i(9730)},{title:"MedVision",category:"Development",image:i(4241)},{title:"Ascouth",category:"Development",image:i(9708)}],N=function(e){return(0,a.useEffect)((function(){var e=function(e,t){return Math.random()*(t-e)+e},t=function(e,t,i,n,s){return(e-t)/(i-t)*(s-n)+n};console.log("colors",i(7867));var n=new p.ZP,s=function(){function t(){v(this,t),this.setColors(),this.setCustomProperties()}return C(t,[{key:"setColors",value:function(){this.hue=~~e(220,360),this.complimentaryHue1=this.hue+30,this.complimentaryHue2=this.hue+60,this.saturation=95,this.lightness=50,this.baseColor=g()(this.hue,this.saturation,this.lightness),this.complimentaryColor1=g()(this.complimentaryHue1,this.saturation,this.lightness),this.complimentaryColor2=g()(this.complimentaryHue2,this.saturation,this.lightness),this.colorChoices=[this.baseColor,this.complimentaryColor1,this.complimentaryColor2]}},{key:"randomColor",value:function(){return this.colorChoices[~~e(0,this.colorChoices.length)].replace("#","0x")}},{key:"setCustomProperties",value:function(){document.documentElement.style.setProperty("--hue",this.hue),document.documentElement.style.setProperty("--hue-complimentary1",this.complimentaryHue1),document.documentElement.style.setProperty("--hue-complimentary2",this.complimentaryHue2)}}]),t}(),a=function(){function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this;v(this,i),this.bounds=this.setBounds(),this.x=e(this.bounds.x.min,this.bounds.x.max),this.y=e(this.bounds.y.min,this.bounds.y.max),this.scale=1,this.fill=t,this.radius=e(window.innerHeight/6,window.innerHeight/3),this.xOff=e(0,1e3),this.yOff=e(0,1e3),this.inc=.002,this.graphics=new f.TCu,this.graphics.alpha=.825,window.addEventListener("resize",x()((function(){n.bounds=n.setBounds()}),250))}return C(i,[{key:"setBounds",value:function(){var e=window.innerWidth<1e3?window.innerWidth/3:window.innerWidth/5,t=window.innerWidth/1.25,i=window.innerWidth<1e3?window.innerHeight:window.innerHeight/1.375;return{x:{min:t-e,max:t+e},y:{min:i-e,max:i+e}}}},{key:"update",value:function(){var e=n.noise2D(this.xOff,this.xOff),i=n.noise2D(this.yOff,this.yOff),s=n.noise2D(this.xOff,this.yOff);this.x=t(e,-1,1,this.bounds.x.min,this.bounds.x.max),this.y=t(i,-1,1,this.bounds.y.min,this.bounds.y.max),this.scale=t(s,-1,1,.5,1),this.xOff+=this.inc,this.yOff+=this.inc}},{key:"render",value:function(){this.graphics.x=this.x,this.graphics.y=this.y,this.graphics.scale.set(this.scale),this.graphics.clear(),this.graphics.beginFill(this.fill),this.graphics.drawCircle(0,0,this.radius),this.graphics.endFill()}}]),i}(),o=new f.MxU({view:document.querySelector(".orb-canvas"),resizeTo:window,transparent:!0}),r=new s;o.stage.filters=[new m.p(30,10,!0)];for(var c=[],h=0;h<10;h++){var d=new a(r.randomColor());o.stage.addChild(d.graphics),c.push(d)}window.matchMedia("(prefers-reduced-motion: reduce)").matches?c.forEach((function(e){e.update(),e.render()})):o.ticker.add((function(){c.forEach((function(e){e.update(),e.render()}))}))})),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-full text-gray-700 antialiased ",children:[(0,n.jsx)(s.Z,{active:"Portfolio"}),(0,n.jsx)(y.Z,{heading:"Our Portfolio",subheading:"Here are some of our projects."}),(0,n.jsx)("div",{className:"portfolio-cards sm:m-16 mx-6 my-16",children:(0,n.jsx)("div",{className:"grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-6 ",children:k.map((function(e,t){return(0,n.jsx)(u.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.5*t/k.length,duration:.5},viewport:{once:!0,amount:.5},children:(0,n.jsx)(d,O({},e))},t)}))})}),(0,n.jsx)(l.Z,{})]})})}},7819:function(e){e.exports={portfolio:"portfolioCard_portfolio__3sDO1","thumbnail-inner":"portfolioCard_thumbnail-inner__mW90x",thumbnail:"portfolioCard_thumbnail__6K0xq"}},355:function(e){e.exports={srcSet:"/_next/static/images/acs-800-f43a60c4eaf45e586326889dacaab3dc.webp 800w",images:[{path:"/_next/static/images/acs-800-f43a60c4eaf45e586326889dacaab3dc.webp",width:800,height:534}],src:"/_next/static/images/acs-800-f43a60c4eaf45e586326889dacaab3dc.webp",toString:function(){return"/_next/static/images/acs-800-f43a60c4eaf45e586326889dacaab3dc.webp"},placeholder:void 0,width:800,height:534}},9708:function(e){e.exports={srcSet:"/_next/static/images/ascouth-1200-0d77c27dd4881201802dbe1d6b5df3f8.webp 1200w",images:[{path:"/_next/static/images/ascouth-1200-0d77c27dd4881201802dbe1d6b5df3f8.webp",width:1200,height:564}],src:"/_next/static/images/ascouth-1200-0d77c27dd4881201802dbe1d6b5df3f8.webp",toString:function(){return"/_next/static/images/ascouth-1200-0d77c27dd4881201802dbe1d6b5df3f8.webp"},placeholder:void 0,width:1200,height:564}},4593:function(e){e.exports={srcSet:"/_next/static/images/flybox-image-800-71ee2cce29e5a72e97e0e94291c6ed6f.webp 800w",images:[{path:"/_next/static/images/flybox-image-800-71ee2cce29e5a72e97e0e94291c6ed6f.webp",width:800,height:1095}],src:"/_next/static/images/flybox-image-800-71ee2cce29e5a72e97e0e94291c6ed6f.webp",toString:function(){return"/_next/static/images/flybox-image-800-71ee2cce29e5a72e97e0e94291c6ed6f.webp"},placeholder:void 0,width:800,height:1095}},4808:function(e){e.exports={srcSet:"/_next/static/images/inhaler-1000-bbe620bdba22f70df61ea410e9b61dac.webp 1000w",images:[{path:"/_next/static/images/inhaler-1000-bbe620bdba22f70df61ea410e9b61dac.webp",width:1e3,height:667}],src:"/_next/static/images/inhaler-1000-bbe620bdba22f70df61ea410e9b61dac.webp",toString:function(){return"/_next/static/images/inhaler-1000-bbe620bdba22f70df61ea410e9b61dac.webp"},placeholder:void 0,width:1e3,height:667}},4241:function(e){e.exports={srcSet:"/_next/static/images/medvision-800-6313fc31dba2a4bd5d59eb86bb3756e0.webp 800w",images:[{path:"/_next/static/images/medvision-800-6313fc31dba2a4bd5d59eb86bb3756e0.webp",width:800,height:533}],src:"/_next/static/images/medvision-800-6313fc31dba2a4bd5d59eb86bb3756e0.webp",toString:function(){return"/_next/static/images/medvision-800-6313fc31dba2a4bd5d59eb86bb3756e0.webp"},placeholder:void 0,width:800,height:533}},9730:function(e){e.exports={srcSet:"/_next/static/images/water-tank-top-800-8f859eb227dd4a73e5005425094447ee.webp 800w",images:[{path:"/_next/static/images/water-tank-top-800-8f859eb227dd4a73e5005425094447ee.webp",width:800,height:588}],src:"/_next/static/images/water-tank-top-800-8f859eb227dd4a73e5005425094447ee.webp",toString:function(){return"/_next/static/images/water-tank-top-800-8f859eb227dd4a73e5005425094447ee.webp"},placeholder:void 0,width:800,height:588}}},function(e){e.O(0,[445,645,858,815,116,774,888,179],(function(){return t=89,e(e.s=t);var t}));var t=e.O();_N_E=t}]);