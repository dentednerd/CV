(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return g});var a=n(183),r=n.n(a),i=n(0),o=n.n(i),l=n(184),s=n(185),c=n(208),d=n.n(c),u=n(195),f=n(188),m=(n(189),n(204));function p(){var e=r()(["\n  p {\n    margin-bottom: 1em;\n  }\n\n  code {\n    font-size: 0.8em;\n    background-color: #fcb;\n  }\n\n  pre {\n    background-color: #fcb;\n    margin: 1em;\n    padding: 1em;\n  }\n\n  a {\n    color: #c30;\n  }\n\n  header a {\n    color: #333;\n  }\n\n  .post-content {\n    margin: 2em 0;\n  }\n\n  h3 {\n    color: #333;\n    font-family: 'Roboto Slab', serif;\n    font-size:1em;\n    margin-bottom: 0.75em;\n    font-weight:300;\n    letter-spacing: -0.025em;\n  }\n"]);return p=function(){return e},e}var h=Object(l.a)("div")(p());t.default=function(e){var t=e.data.markdownRemark;return o.a.createElement(u.a,null,o.a.createElement(m.a,null),o.a.createElement(f.a,null,o.a.createElement(h,null,o.a.createElement("h2",null,t.frontmatter.title),o.a.createElement("h3",null,t.frontmatter.date),t.frontmatter.featuredImage&&o.a.createElement(d.a,{sizes:t.frontmatter.featuredImage.childImageSharp.sizes}),o.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.html}})),o.a.createElement("h4",{className:"back-to-blog"},o.a.createElement(s.a,{to:"/blog"},"« Back to Blog"))))};var g="78095353"},185:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(28),s=n.n(l);n.d(t,"a",function(){return s.a});n(186);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},186:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},187:function(e,t,n){"use strict";var a=n(183),r=n.n(a),i=n(192),o=n(0),l=n.n(o),s=n(184),c=n(185);function d(){var e=r()(["\n  position: relative;\n  margin: 0 auto;\n  width: 96vw;\n  max-width: 1024px;\n  padding: 0 2vw;\n"]);return d=function(){return e},e}var u=Object(s.a)("div")(d());t.a=function(e){var t=e.children;return l.a.createElement(c.b,{query:"3892401927",render:function(e){return l.a.createElement(u,null,t)},data:i})}},188:function(e,t,n){"use strict";var a=n(183),r=n.n(a),i=n(0),o=n.n(i),l=n(184),s=n(187);function c(){var e=r()(["\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1em 0;\n  color: #333;\n  margin-bottom: 0.5em;\n\n  h2 {\n    font-size: 1.5em;\n    font-weight: 600;\n    font-family: 'Roboto Slab', serif;\n    color: #c30;\n  }\n"]);return c=function(){return e},e}var d=Object(l.a)("div")(c());t.a=function(e){var t=e.children;return o.a.createElement(d,null,o.a.createElement(s.a,null,t))}},189:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(183),o=n.n(i),l=n(0),s=n.n(l),c=n(185),d=n(184),u=n(198),f=n.n(u);function m(){var e=o()(["\n  display: block;\n  text-align: center;\n  width: 100px;\n  color: black;\n\n  &:hover {\n    background-color: #c30;\n    border-radius: 6px;\n    color: white;\n  }\n"]);return m=function(){return e},e}function p(){var e=o()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 1em;\n    border-top: solid 1px #666;\n    border-bottom: solid 1px #666;\n    margin-bottom: 1em;\n  }\n"]);return p=function(){return e},e}function h(){var e=o()(["\n  font-size:1.5em;\n  line-height: 1.5em;\n  margin-bottom: 0;\n"]);return h=function(){return e},e}function g(){var e=o()(["\n  font-size:2em;\n  font-weight: 700;\n  font-family: 'Roboto Slab', serif;\n  color: #333;\n  margin: 0 2vw 0 0;\n\n  span {\n    color: #c30;\n  }\n"]);return g=function(){return e},e}function b(){var e=o()(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: flex-start;\n"]);return b=function(){return e},e}function v(){var e=o()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  color:#333;\n  font-family: 'Lato', sans-serif;\n  margin: 1em 0;\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    margin-bottom: 0;\n  }\n"]);return v=function(){return e},e}var w=Object(d.a)("header")(v()),y=Object(d.a)("div")(b()),E=Object(d.a)("h1")(g()),S=Object(d.a)("div")(h()),L=Object(d.a)("nav")(p()),x=Object(d.a)(c.a)(m()),R=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e={strings:["React developer.","Coding mentor.","Crazy cat lady."],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new f.a(this.el,e)},n.componentWillUnmount=function(){this.typed.destroy()},n.render=function(){var e=this;return s.a.createElement(w,null,s.a.createElement(y,null,s.a.createElement(E,null,"<",s.a.createElement("span",null,"JoanneImlay"),"/>"),s.a.createElement(S,null,s.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),s.a.createElement(L,null,s.a.createElement(x,{to:"/"},"Home"),s.a.createElement(x,{to:"/blog"},"Blog"),s.a.createElement(x,{to:"/portfolio"},"Portfolio")))},t}(s.a.Component);t.a=R},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(194),o=n(196),l=n(197),s=n(199);n(200);i.b.add(s.b),i.b.add(s.c),i.b.add(s.a),i.b.add(l.b);t.a=function(){return r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"mailto:jo.imlay@gmail.com"},r.a.createElement(o.a,{icon:l.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/joanne-imlay-4a7a7056/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:s.b})),r.a.createElement("a",{href:"https://www.github.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:s.a})),r.a.createElement("a",{href:"https://www.twitter.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:s.c})))}},191:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(56),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},192:function(e){e.exports={data:{site:{siteMetadata:{title:"Joanne Imlay"}}}}},193:function(e,t,n){"use strict";var a=n(183),r=n.n(a),i=n(0),o=n.n(i),l=n(184),s=n(187);function c(){var e=r()(["\n  background-color: #c30;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1em 0;\n  color: white;\n  margin-bottom: 0.5em;\n\n  h2 {\n    font-size: 1.5em;\n    font-weight: 600;\n    font-family: 'Roboto Slab', serif;\n    color: white;\n  }\n"]);return c=function(){return e},e}var d=Object(l.a)("div")(c());t.a=function(e){var t=e.children;return o.a.createElement(d,null,o.a.createElement(s.a,null,t))}},195:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(201),o=n.n(i),l=n(189),s=n(190),c=(n(202),function(){return r.a.createElement("footer",null,r.a.createElement(s.a,null))}),d=n(188);t.a=function(e){var t=e.children;return r.a.createElement("div",{id:"main"},r.a.createElement(o.a,null,r.a.createElement("title",null,"Joanne Imlay, front end developer")),r.a.createElement(d.a,null,r.a.createElement(l.a,null)),t,r.a.createElement(d.a,null,r.a.createElement(c,null)))}},204:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(193);t.a=function(){return r.a.createElement(i.a,null,r.a.createElement("h2",null,"<Blog />"))}},208:function(e,t,n){"use strict";var a=n(7);t.__esModule=!0,t.default=void 0;var r,i=a(n(6)),o=a(n(30)),l=a(n(79)),s=a(n(80)),c=a(n(0)),d=a(n(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),m=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},p=new WeakMap;var h=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return n&&(n.observe(e),p.set(e,t)),function(){n.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+a+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+n+r+t+o+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,s.default)({sizes:n,srcSet:a,src:r},u,{onLoad:o,onError:d,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,r=!1,i=t.fadeIn,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var s=!(t.critical&&!t.fadeIn);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:i,hasNoScript:s,seenBefore:l},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,w=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,s.default)({opacity:S?1:0,transition:L?"opacity "+w+"ms":"none"},l),R="boolean"==typeof v?"lightgray":v,I={transitionDelay:w+"ms"},O=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&I,l,f),j={title:t,alt:this.state.isVisible?"":n,style:O,className:m};if(p){var z=p;return c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&c.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&I)}),z.base64&&c.default.createElement(b,(0,s.default)({src:z.base64},j)),z.tracedSVG&&c.default.createElement(b,(0,s.default)({src:z.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(b,{alt:n,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:n,title:t},z))}}))}if(h){var k=h,C=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},R&&c.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:R,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},L&&I)}),k.base64&&c.default.createElement(b,(0,s.default)({src:k.base64},j)),k.tracedSVG&&c.default.createElement(b,(0,s.default)({src:k.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(b,{alt:n,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:n,title:t},k))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:w,sizes:y,fixed:w,fluid:y,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=v;t.default=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b57a14c37b78984c1c79.js.map