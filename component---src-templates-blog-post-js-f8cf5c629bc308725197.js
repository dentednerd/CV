(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),r=n.n(a),c=n(184),o=n(186),i=n(190),l=n(200);n(189);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement("div",{className:"blog"},r.a.createElement(o.a,null,r.a.createElement(i.a,null)),r.a.createElement(l.a,null),r.a.createElement(o.a,null,r.a.createElement("div",{className:"blog-post"},r.a.createElement("h3",null,t.frontmatter.title),r.a.createElement("h4",null,t.frontmatter.date),r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.html}})),r.a.createElement("h4",{className:"back-to-blog"},r.a.createElement(c.Link,{to:"/blog"},"« Back to Blog"))))};var u="3847628092"},184:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(183),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(185),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},185:function(e,t,n){var a;e.exports=(a=n(187))&&a.default||a},186:function(e,t,n){"use strict";var a=n(188),r=n(0),c=n.n(r),o=n(184);t.a=function(e){var t=e.children;return c.a.createElement(o.StaticQuery,{query:"3892401927",render:function(e){return c.a.createElement("div",{className:"wrapper"},t)},data:a})}},187:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(54),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Joanne Imlay"}}}}},189:function(e,t,n){},190:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(0),o=n.n(c),i=n(184),l=n(199),u=n.n(l),s=(n(191),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e={strings:["React developer.","UX obsessive.","Design geek.","Tutor and resource creator."],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new u.a(this.el,e)},n.componentWillUnmount=function(){this.typed.destroy()},n.render=function(){var e=this;return o.a.createElement("header",null,o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"<",o.a.createElement("span",null,"JoanneImlay")," />"),o.a.createElement("div",{className:"type-wrap"},o.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),o.a.createElement("div",{className:"menu"},o.a.createElement(i.Link,{to:"/"},"Home"),o.a.createElement(i.Link,{to:"/blog"},"Blog")))},t}(o.a.Component));t.a=s},191:function(e,t,n){},192:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(193);t.a=function(e){return r.a.createElement("div",{className:"redband"},e.children)}},193:function(e,t,n){},200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(192),o=n(186);n(201);t.a=function(){return r.a.createElement("div",{className:"blog-header"},r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("h2",null,"<Blog />"))))}},201:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f8cf5c629bc308725197.js.map