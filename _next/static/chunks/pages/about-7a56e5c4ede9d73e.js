(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(2444)}])},851:function(e,i,t){"use strict";t.d(i,{h:function(){return h}});var s=t(5893),n=t(9008),a=t.n(n),o=t(1163),r=t(2962),c=t(1369),h=function(e){var i=(0,o.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"".concat(i.basePath,"/apple-touch-icon.png")},"apple"),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(i.basePath,"/favicon-32x32.png")},"icon32"),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(i.basePath,"/favicon-16x16.png")},"icon16"),(0,s.jsx)("link",{rel:"icon",href:"".concat(i.basePath,"/favicon.ico")},"favicon")]}),(0,s.jsx)(r.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:c.X.locale,site_name:c.X.site_name}})]})}},2444:function(e,i,t){"use strict";t.r(i);var s=t(5893),n=t(851),a=t(7461);i.default=function(){return(0,s.jsxs)(a.o,{meta:(0,s.jsx)(n.h,{title:"Lorem ipsum",description:"Lorem ipsum"}),children:[(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae autem esse explicabo molestias officia placeat, accusamus aut saepe."})]})}},7461:function(e,i,t){"use strict";t.d(i,{o:function(){return x}});var s=t(5893),n=t(7294),a=t(9229),o=t(7654),r=t(8866),c=t(8460),h=t(7048),l=t(6119),u=t.n(l),d=t(296),m=t.n(d),f=t(8262);function p(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}var x=function(e){return(0,n.useEffect)((function(){var e=function(e,i){return Math.random()*(i-e)+e},i=function(e,i,t,s,n){return(e-i)/(t-i)*(n-s)+s},t=new h.ZP,s=function(){function i(){p(this,i),this.setColors(),this.setCustomProperties()}var t=i.prototype;return t.setColors=function(){this.hue=~~e(220,360),this.complimentaryHue1=this.hue+30,this.complimentaryHue2=this.hue+60,this.saturation=95,this.lightness=50,this.baseColor=u()(this.hue,this.saturation,this.lightness),this.complimentaryColor1=u()(this.complimentaryHue1,this.saturation,this.lightness),this.complimentaryColor2=u()(this.complimentaryHue2,this.saturation,this.lightness),this.colorChoices=[this.baseColor,this.complimentaryColor1,this.complimentaryColor2]},t.randomColor=function(){return this.colorChoices[~~e(0,this.colorChoices.length)].replace("#","0x")},t.setCustomProperties=function(){document.documentElement.style.setProperty("--hue",this.hue),document.documentElement.style.setProperty("--hue-complimentary1",this.complimentaryHue1),document.documentElement.style.setProperty("--hue-complimentary2",this.complimentaryHue2)},i}(),n=function(){function s(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this;p(this,s),this.bounds=this.setBounds(),this.x=e(this.bounds.x.min,this.bounds.x.max),this.y=e(this.bounds.y.min,this.bounds.y.max),this.scale=1,this.fill=i,this.radius=e(window.innerHeight/6,window.innerHeight/3),this.xOff=e(0,1e3),this.yOff=e(0,1e3),this.inc=.002,this.graphics=new r.TCu,this.graphics.alpha=.825,window.addEventListener("resize",m()((function(){t.bounds=t.setBounds()}),250))}var n=s.prototype;return n.setBounds=function(){var e=window.innerWidth<1e3?window.innerWidth/3:window.innerWidth/5,i=window.innerWidth/1.25,t=window.innerWidth<1e3?window.innerHeight:window.innerHeight/1.375;return{x:{min:i-e,max:i+e},y:{min:t-e,max:t+e}}},n.update=function(){var e=t.noise2D(this.xOff,this.xOff),s=t.noise2D(this.yOff,this.yOff),n=t.noise2D(this.xOff,this.yOff);this.x=i(e,-1,1,this.bounds.x.min,this.bounds.x.max),this.y=i(s,-1,1,this.bounds.y.min,this.bounds.y.max),this.scale=i(n,-1,1,.5,1),this.xOff+=this.inc,this.yOff+=this.inc},n.render=function(){this.graphics.x=this.x,this.graphics.y=this.y,this.graphics.scale.set(this.scale),this.graphics.clear(),this.graphics.beginFill(this.fill),this.graphics.drawCircle(0,0,this.radius),this.graphics.endFill()},s}(),a=new r.MxU({view:document.querySelector(".orb-canvas-home"),resizeTo:window,transparent:!0}),o=new s;a.stage.filters=[new c.p(30,10,!0)];for(var l=[],d=0;d<10;d++){var f=new n(o.randomColor());a.stage.addChild(f.graphics),l.push(f)}return window.matchMedia("(prefers-reduced-motion: reduce)").matches?l.forEach((function(e){e.update(),e.render()})):a.ticker.add((function(){l.forEach((function(e){e.update(),e.render()}))})),function(){a.destroy()}}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"w-full text-gray-700 antialiased relative z-10 ",style:{background:"var(--bg-gradient)"},children:[e.meta,(0,s.jsx)(a.Z,{active:"Home"}),e.children,(0,s.jsxs)("div",{className:"hero-home flex flex-row h-screen items-center sm:mx-16 mx-6 flex-wrap",style:{height:"100vh"},children:[(0,s.jsx)("div",{className:"flex flex-col basis-0 flex-grow",children:(0,s.jsxs)("div",{className:"hero-heading",children:[(0,s.jsx)("h1",{className:"font-bold text-black text-7xl",children:"Uniq IT solutions for your business"}),(0,s.jsx)("p",{className:"text-black opacity-80 font-medium mt-4 font-poppins",children:"We are a team of software developers and designers who are passionate about building great products."})]})}),(0,s.jsx)("div",{className:" basis-0 flex-grow flex h-2/3 justify-end",children:(0,s.jsxs)("div",{className:"hero-card bg-white w-4/5 rounded-2xl flex justify-center items-center relative",children:[(0,s.jsx)("div",{className:"small-square h-12 w-12 rounded-2xl absolute top-8 left-8 bg-primary-purple"}),(0,s.jsx)(f.E.img,{src:t(6239),alt:"laptop",className:"w-3/4 h-3/4",animate:{y:[0,-10,0]},transition:{repeat:1/0,duration:2,ease:"easeInOut"}})]})})]}),(0,s.jsx)(o.Z,{}),(0,s.jsx)("canvas",{className:"orb-canvas-home fixed top-0 left-0 h-full w-full pointer-events-none -z-10"})]})})}},6239:function(e){e.exports="/_next/static/images/laptop-dbcc309a6da2aa489fbc6ff63f26fbf8.png.webp"}},function(e){e.O(0,[445,645,858,815,962,116,774,888,179],(function(){return i=9212,e(e.s=i);var i}));var i=e.O();_N_E=i}]);