"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{6553:function(e,t,i){i.r(t);var n=i(5893),s=i(979),r=i(8866),a=i(8460),o=i(7048),h=i(6119),c=i.n(h),u=i(296),l=i.n(u),d=i(7294);function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,i){return t&&f(e.prototype,t),i&&f(e,i),e}t.default=function(e){var t;return(0,d.useEffect)((function(){var e=function(e,t){return Math.random()*(t-e)+e},t=function(e,t,i,n,s){return(e-t)/(i-t)*(s-n)+n};console.log("sajjasnajs");var i=new o.ZP,n=function(){function t(){m(this,t),this.setColors(),this.setCustomProperties()}return p(t,[{key:"setColors",value:function(){this.hue=~~e(220,360),this.complimentaryHue1=this.hue+30,this.complimentaryHue2=this.hue+60,this.saturation=95,this.lightness=50,this.baseColor=c()(this.hue,this.saturation,this.lightness),this.complimentaryColor1=c()(this.complimentaryHue1,this.saturation,this.lightness),this.complimentaryColor2=c()(this.complimentaryHue2,this.saturation,this.lightness),this.colorChoices=[this.baseColor,this.complimentaryColor1,this.complimentaryColor2]}},{key:"randomColor",value:function(){return this.colorChoices[~~e(0,this.colorChoices.length)].replace("#","0x")}},{key:"setCustomProperties",value:function(){document.documentElement.style.setProperty("--hue",this.hue),document.documentElement.style.setProperty("--hue-complimentary1",this.complimentaryHue1),document.documentElement.style.setProperty("--hue-complimentary2",this.complimentaryHue2)}}]),t}(),s=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this;m(this,n),this.bounds=this.setBounds(),this.x=e(this.bounds.x.min,this.bounds.x.max),this.y=e(this.bounds.y.min,this.bounds.y.max),this.scale=1,this.fill=t,this.radius=e(window.innerHeight/6,window.innerHeight/3),this.xOff=e(0,1e3),this.yOff=e(0,1e3),this.inc=.002,this.graphics=new r.TCu,this.graphics.alpha=.825,window.addEventListener("resize",l()((function(){i.bounds=i.setBounds()}),250))}return p(n,[{key:"setBounds",value:function(){var e=window.innerWidth<1e3?window.innerWidth/3:window.innerWidth/5,t=window.innerWidth/1.25,i=window.innerWidth<1e3?window.innerHeight:window.innerHeight/1.375;return{x:{min:t-e,max:t+e},y:{min:i-e,max:i+e}}}},{key:"update",value:function(){var e=i.noise2D(this.xOff,this.xOff),n=i.noise2D(this.yOff,this.yOff),s=i.noise2D(this.xOff,this.yOff);this.x=t(e,-1,1,this.bounds.x.min,this.bounds.x.max),this.y=t(n,-1,1,this.bounds.y.min,this.bounds.y.max),this.scale=t(s,-1,1,.5,1),this.xOff+=this.inc,this.yOff+=this.inc}},{key:"render",value:function(){this.graphics.x=this.x,this.graphics.y=this.y,this.graphics.scale.set(this.scale),this.graphics.clear(),this.graphics.beginFill(this.fill),this.graphics.drawCircle(0,0,this.radius),this.graphics.endFill()}}]),n}(),h=new r.MxU({view:document.querySelector(".orb-canvas"),resizeTo:window,transparent:!0}),u=new n;h.stage.filters=[new a.p(30,10,!0)];for(var d=[],f=0;f<10;f++){var y=new s(u.randomColor());h.stage.addChild(y.graphics),d.push(y)}return window.matchMedia("(prefers-reduced-motion: reduce)").matches?d.forEach((function(e){e.update(),e.render()})):h.ticker.add((function(){d.forEach((function(e){e.update(),e.render()}))})),function(){h.destroy(!1,{children:!0,texture:!0,baseTexture:!0})}}),[]),(0,n.jsxs)("div",{className:"".concat(null!==(t=e.heading)&&void 0!==t?t:"page","-heading h-1/2 relative shadow-lg"),style:{background:"var(--bg-gradient)",zIndex:"0"},children:[(0,n.jsx)("canvas",{className:"orb-canvas"}),(0,n.jsx)("div",{className:"h-full",style:{background:"rgba(255, 255, 255, 0.375)",zIndex:"1"},children:(0,n.jsx)("div",{className:"flex items-center justify-center pointer-events-none",children:(0,n.jsxs)("div",{className:"sm:p-40 py-28 px-6",children:[(0,n.jsx)(s.E.h1,{className:"sm:text-5xl text-4xl font-black text-center text-black tracking-wide",animate:{opacity:[0,1],y:[20,0]},transition:{duration:1,ease:"easeInOut"},children:e.heading}),e.subheading&&(0,n.jsxs)("p",{className:"text-center",children:[" ",e.subheading]})]})})})]})}}}]);