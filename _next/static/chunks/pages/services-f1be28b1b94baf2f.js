(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{8460:function(e,t,i){"use strict";var n=i(2038),r=i(9658),o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},o(e,t)};!function(e){function t(t,i,n){void 0===t&&(t=4),void 0===i&&(i=3),void 0===n&&(n=!1);var o=e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",n?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}")||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new r.E9,o.pixelSize=1,o._clamp=n,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=i),o}(function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.apply=function(e,t,i,n){var r,o=this._pixelSize.x/t._frame.width,a=this._pixelSize.y/t._frame.height;if(1===this._quality||0===this._blur)r=this._kernels[0]+.5,this.uniforms.uOffset[0]=r*o,this.uniforms.uOffset[1]=r*a,e.applyFilter(this,t,i,n);else{for(var s=e.getFilterTexture(),l=t,c=s,u=void 0,p=this._quality-1,d=0;d<p;d++)r=this._kernels[d]+.5,this.uniforms.uOffset[0]=r*o,this.uniforms.uOffset[1]=r*a,e.applyFilter(this,l,c,1),u=l,l=c,c=u;r=this._kernels[p]+.5,this.uniforms.uOffset[0]=r*o,this.uniforms.uOffset[1]=r*a,e.applyFilter(this,l,i,n),e.returnFilterTexture(s)}},t.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce((function(e,t){return e+t+.5}),0))},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,i=[e];if(e>0)for(var n=e,r=e/t,o=1;o<t;o++)n-=r,i.push(n);this._kernels=i,this._updatePadding()},Object.defineProperty(t.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){"number"===typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof r.E9?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0})}(n.wn)},296:function(e){function t(e,t,i){var n,r,o,a,s;function l(){var c=Date.now()-a;c<t&&c>=0?n=setTimeout(l,t-c):(n=null,i||(s=e.apply(o,r),o=r=null))}null==t&&(t=100);var c=function(){o=this,r=arguments,a=Date.now();var c=i&&!n;return n||(n=setTimeout(l,t)),c&&(s=e.apply(o,r),o=r=null),s};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(s=e.apply(o,r),o=r=null,clearTimeout(n),n=null)},c}t.debounce=t,e.exports=t},247:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return i(2793)}])},2793:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return E}});var n=i(5893),r=(i(5675),i(7294)),o=i(9229),a=i(7654),s=(i(1369),i(7298)),l=i.n(s),c=i(155),u=i(5434),p=i(859),d=i(7106),m=i(9352),f=i(6553),x=i(979),h=i(1190),v=i(7794),y=i.n(v),g=i(8193),b=i(2585),w=i(471),j=[{title:"App Development",description:"App Beyond Your Expectation",icon:(0,n.jsx)(u.NU_,{className:y()["card-icon"]})},{title:"Web Development",description:"Creative, Flexible and Affordable",icon:(0,n.jsx)(w.$Wy,{className:y()["card-icon"]})},{title:"IOT & AI",description:"Bring your Ideas to Life",icon:(0,n.jsx)(g.LAw,{className:y()["card-icon"]})},{title:"Embedded Programming",description:"Advanced software made simple.",icon:(0,n.jsx)(b.cVE,{className:y()["card-icon"]})},{title:"Cloud Services",description:"Allow the proper cloud to run your business.",icon:(0,n.jsx)(g.qer,{className:y()["card-icon"]})},{title:"Agile & Chain Management",description:"Responsiveness, Competency, Flexibility, and Quickness",icon:(0,n.jsx)(p.ZxR,{className:"text-4xl text-black "})},{title:"Business Automation",description:"Taking your small business to the NEXT level",icon:(0,n.jsx)(c.qmU,{className:y()["card-icon"]})},{title:"Home Automation",description:"A magical and revolutionary device at an unbelievable price.",icon:(0,n.jsx)(m.CEt,{className:y()["card-icon"]})}],_=function(){return(0,n.jsx)("div",{className:"grid grid-cols-1 gap-y-6 gap-x-2 md:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:j.map((function(e,t){return(0,n.jsxs)(x.E.div,{variants:{hover:{y:-10,backgroundColor:"#390979"}},initial:{translateY:50,opacity:0},viewport:{once:!0},whileHover:"hover",whileInView:{translateY:0,opacity:1,transition:{duration:1,type:"just",delay:.2*t}},className:"flex w-auto flex-col bg-gray-200 relative ",children:[(0,n.jsxs)("div",{className:"w-full h-20 mb-3 bg-neutral-200 relative overflow-hidden z-0",children:[(0,n.jsx)("div",{className:"w-16 -inset-4 aspect-square bg-gradient-to-tr rounded-full from-violet-600 to-teal-500 absolute z-10"}),(0,n.jsx)("div",{className:"w-4 inset-12 aspect-square bg-gradient-to-br rounded-full from-violet-600 to-teal-500 absolute z-10"}),(0,n.jsx)("div",{className:"w-16  -bottom-4 -right-4 aspect-square bg-gradient-to-tr rounded-full from-orange-500 to-rose-500 absolute z-10"}),(0,n.jsx)("div",{className:"w-4  bottom-12 right-12 aspect-square bg-gradient-to-br rounded-full from-orange-500 to-rose-500 absolute z-10"}),(0,n.jsx)("div",{className:"w-full h-full absolute bg-violet-300 backdrop-filter backdrop-blur-sm bg-opacity-30 bg-clip-padding z-20"})]}),(0,n.jsx)(x.E.div,{variants:{hover:{color:"#ffb401"}},className:"w-full h-auto flex justify-center items-center mb-6 text-violet-800",children:e.icon}),(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center px-6 w-full font-poppins",children:[(0,n.jsx)(x.E.h2,{variants:{hover:{color:"#ffb401"}},className:" text-xl font-semibold text-black text-center",children:e.title}),(0,n.jsx)(x.E.h3,{variants:{hover:{color:"#e2e8f0"}},className:" text-sm font-normal py-3 mb-3 text-center",children:e.description})]})]},t)}))})},S=i(2962);function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=[{icon:(0,n.jsx)(u.Vts,{className:" text-violet-800 text-3xl"}),title:"100% Satisfaction",desc:"As a committed consultancy company, client satisfaction is our utmost priority and we are always ready to go the extra mile to give that satisfaction. We never compromise with quality and provide the highest-quality solutions to all our clients."},{icon:(0,n.jsx)(p.ZxR,{className:" text-violet-800 text-3xl"}),title:"Agile Methodology",desc:"We adopt an agile methodology that enables us to manage priorities, scope, and lifecycle. We deliver projects quickly and efficiently at optimal costs. This methodology gives us the ability to serve clients promptly as a firm."},{icon:(0,n.jsx)(d.wUZ,{className:" text-violet-800 text-3xl"}),title:"Regular Reports",desc:"As a responsible Company, we believe in work transparency by keeping in touch with our clients and providing regular reports to them through Jira, PMS, Basecamp, etc. The constant communication with the clients and regular reports about the project proves our transparent work philosophy."},{icon:(0,n.jsx)(m.jU4,{className:" text-violet-800 text-3xl"}),title:"Experienced Team",desc:"As a dedicated company, we have a team of experienced developers who understand every nuance of Development Services. Our developers have completed hundreds of successful projects for varied business verticals. They have experience in cross-platform and native development."},{icon:(0,n.jsx)(c.$P8,{className:" text-violet-800 text-3xl"}),title:"Dedicated Manager",desc:"At the start of your project, we assign a project manager to you who will be responsible for all the project dealings in IT solutions. The manager remains the point of contact for your concern regarding resources, time estimation, reports, scheduling, project progress, and more. Keep in touch with our project manager during the development process."},{icon:(0,n.jsx)(u.h9I,{className:"text-violet-800 text-3xl"}),title:"Fast and Secure",desc:"We create projects that are lightning-fast with optimum resource consumption. Our developers not only ensure the quality of your project but also integrate features that make the it more interactive. They optimize your projects to handle a large number of areas."}],k=function(e){var t=e.i,i=e.expanded,r=e.setExpanded,o=e.title,a=e.desc,s=e.icon,l=t===i;return(0,n.jsxs)(x.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:t<3?.2*t:.1*t},viewport:{once:!0},className:" flex mb-6 flex-col overflow-hidden border-1 bg-gray-200 p-3 border-gray-100 rounded-lg",children:[(0,n.jsxs)(x.E.button,{initial:!1,onClick:function(){return r(!l&&t)},className:" flex flex-row h-8",children:[(0,n.jsx)("div",{children:s}),(0,n.jsx)("span",{className:"text-xl font-normal text-black pl-3",children:o}),(0,n.jsx)(x.E.div,{animate:{rotate:l?"180deg":"0deg"},transition:{duration:.2},className:"mt-1.5 ml-auto",children:(0,n.jsx)(c._i7,{className:"text-lg font-medium text-black"})})]}),(0,n.jsx)(h.M,{initial:!1,children:l&&(0,n.jsxs)(x.E.p,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{height:"auto"},collapsed:{height:0}},transition:{duration:.8,ease:[.04,.62,.8,.98]},className:"break-words text-base font-extralight text-justify",children:[(0,n.jsx)(x.E.div,{initial:{width:0},animate:{width:"auto"},transition:{duration:.8,type:"just"},exit:{width:0},className:"h-2 border-t-1 border-t-gray-500 mt-2"}),a]},"content")})]})},C=[{step:"01",image:(0,n.jsx)("img",{src:i(3390),alt:"Analysis",className:"text-black w-14 h-14"}),title:"Analysis",desc:"Start by comprehending the requirements of clients and propose a solution that meets their needs."},{step:"02",image:(0,n.jsx)("img",{src:i(9789),alt:"Analysis",className:"text-black w-14 h-14"}),title:"Designing",desc:" Create a blueprint & wireframe, then design the solutions as per our clients\u2019 requirements."},{step:"Step 08",image:(0,n.jsx)("img",{src:i(9809),alt:"Analysis",className:"text-black w-14 h-14"}),title:"Development",desc:"Once design is finalized, we create the projects, layout the main sections and get clients\u2019 feedback."}],A=function(e){var t=e.step,i=e.image,r=e.title,o=e.desc;return(0,n.jsxs)(x.E.div,{variants:{hover:{}},whileHover:"hover",className:"flex flex-col h-max",children:[(0,n.jsx)(x.E.div,{variants:{hover:{color:"#390979",transitionDuration:".3s"}},className:l()["outline-text"],children:t}),(0,n.jsx)(x.E.div,{variants:{hover:{y:-10,transitionDuration:".3s",transition:{type:"just"}}},className:"h-10 border-l-2 border-l-primary-purple self-center mb-3"}),(0,n.jsxs)(x.E.div,{variants:{initial:{scale:0,opacity:0},hover:{y:-10}},whileInView:{scale:1,opacity:1,transition:{duration:1.5}},viewport:{once:!0},transition:{duration:.3},className:"flex justify-center items-center flex-col flex-wrap pt-4 pb-5 mb-10 md:mb-0 mx-6",children:[i,(0,n.jsx)("h2",{className:" pt-5 text-lg font-bold text-black",children:r}),(0,n.jsx)("p",{className:" pt-2 text-gray-600 text-base flex text-center flex-grow ",children:o})]})]})},E=function(){var e=T(r.useState(!1),2),t=e[0],i=e[1];return(0,n.jsxs)("div",{children:[(0,n.jsx)(S.PB,{title:"Services-MacleSoft | Unique IT Services & Solutions in India:2022",description:"MacleSoft is accelerating the world's transition to the digital era, offering the fastest loading , highly secure and user friendly IT products in this digital world.",canonical:"https://maclesoft.com/services",additionalMetaTags:[{property:"dc:creator",content:"MacleSoft with having dedicated team"},{name:"IT Services & Solutions",content:"MacleSoft provide the extreme fine Solutions"},{name:"IT services near me",content:"Unique IT Solutions by MacleSoft"},{name:"IoT developing company",content:"MacleSoft is unique IoT providing company"},{name:"Web development company",content:"MacleSoft provide best web developing services and solutions"},{name:"Best IT Services in India",content:"Professional,trustworthy and highly dedicated"},{name:"maclesoft",content:"Best IT services and solutions in India"},{name:"IT Solutions",content:"Professional team design the best Solutions for your business"},{name:"robots",content:"nofollow"},{httpEquiv:"x-ua-compatible",content:"IE=edge; chrome=1"},{httpEquiv:"content-type",content:"text/html; charset=utf-8"}],additionalLinkTags:[{rel:"icon",href:"../../public/favicon-32x32.png",type:"png",sizes:"32x32"},{rel:"icon",href:"../../public/favicon-16x16.png",type:"png",sizes:"16x16"},{rel:"icon",href:"../../public/apple-touch-icon.png",type:"png"},{rel:"prev",href:"https://maclesoft.com/"},{rel:"next",href:"https://maclesoft.com/portfolio/"},{rel:"alternate",href:"https://maclesoft.com/services"},{rel:"facebook",href:"https://www.facebook.com/maclesoft"},{rel:"twitter",href:"https://twitter.com/maclesoft"},{rel:"instagram",href:"https://www.instagram.com/maclesoft/"},{rel:"linkedin",href:"https://www.linkedin.com/company/maclesoft/"}],facebook:{appId:"1234567890"},openGraph:{type:"website",url:"https://maclesoft.com/services",title:"IT Services-Unique and professional",description:"MacleSoft is outstanding and professional with in-depth knowledge"},twitter:{handle:"@maclesoft",site:"https://twitter.com/maclesoft",cardType:"summary_large_image"}}),(0,n.jsxs)("div",{className:"w-full text-gray-700 antialiased ",children:[(0,n.jsx)(o.Z,{active:"Services"}),(0,n.jsx)(f.default,{heading:"Our Services",subheading:"These are some services we provide."}),(0,n.jsxs)("div",{className:"pt-16 flex flex-col ",children:[(0,n.jsxs)(x.E.div,{initial:{opacity:0,y:-40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:1},className:" mb-10 sm:mx-16 mx-6 2xl:mx-32",children:[(0,n.jsxs)("h2",{className:"text-4xl leading-none font-bold mb-4 text-black",children:["Result-Oriented ",(0,n.jsx)("br",{}),"Digital Solutions"]}),(0,n.jsx)("p",{className:"text-gray-600 font-normal mt-1 font-poppins",children:"A solution for every need...."})]}),(0,n.jsx)("div",{className:"sm:mx-16 mx-6 2xl:mx-32",children:(0,n.jsx)(_,{})})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-center sm:mx-16 mx-6 mt-16 2xl:mx-32",children:[(0,n.jsxs)(x.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1.5,ease:"anticipate"},viewport:{once:!0},children:[(0,n.jsx)("h2",{className:"font-bold text-black text-4xl",children:"Creating Futuristic Solutions to Bring Growth"}),(0,n.jsxs)("p",{className:"text-gray-600 font-normal mt-1 font-poppins",children:["We aim at providing businesses with desired outcomes through our tailor-made development process.",(0,n.jsx)("br",{}),"Our team is accelerating the world's transition to the digital era, offering the fastest loading , highly secure and user friendly IT products in this digital world."]})]}),(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 mt-8 font-poppins",children:[(0,n.jsx)("div",{className:"mx-3",children:O.map((function(e,r){return r<3&&(0,n.jsx)(k,{i:r,expanded:t,setExpanded:i,title:e.title,desc:e.desc,icon:e.icon})}))}),(0,n.jsx)("div",{className:"mx-3",children:O.map((function(e,r){return r>2&&(0,n.jsx)(k,{i:r,expanded:t,setExpanded:i,title:e.title,desc:e.desc,icon:e.icon})}))})]})]}),(0,n.jsxs)("div",{className:" flex flex-col sm:mx-16 mx-6 mt-16 mb-16 font-poppins 2xl:mx-32",children:[(0,n.jsx)(x.E.h2,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:1.5,ease:"anticipate"},className:"font-bold text-black text-4xl",children:"Our Development Process Steps"}),(0,n.jsx)(x.E.p,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:1.5,ease:"anticipate",delay:.2},className:"text-gray-600 font-normal mt-1 font-poppins",children:"We follow a strict development process to ensure that our clients are satisfied with the quality of our services."}),(0,n.jsx)("div",{className:"flex flex-col justify-evenly md:flex-row mt-10",children:C.map((function(e,t){return(0,n.jsx)(A,{step:e.step,image:e.image,title:e.title,desc:e.desc},t)}))})]}),(0,n.jsx)(a.default,{})]})]})}},7794:function(e){e.exports={"card-icon":"style_card-icon__PxU0i"}},7298:function(e){e.exports={"outline-text":"services_outline-text__dku8O"}},9809:function(e){e.exports="/_next/static/images/developer-ebb4750b7380c89f1be1a91154287d5f.png"},3390:function(e){e.exports="/_next/static/images/graphic-design-4e227533ad3f2264b6f9238fb4edbcc7.png"},9789:function(e){e.exports="/_next/static/images/monitoring-825b38f15e6c565771c467b12a42abb1.png"}},function(e){e.O(0,[445,645,228,617,907,937,260,980,921,955,565,941,866,962,675,435,774,888,179],(function(){return t=247,e(e.s=t);var t}));var t=e.O();_N_E=t}]);