(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});n(55);var a=n(0),r=n.n(a),c=n(184),i=n(186),o=n(190),l=n(200),u=n(195);n(189);t.default=function(e){var t=e.data;return r.a.createElement("div",{className:"blog"},r.a.createElement(i.a,null,r.a.createElement(o.a,null)),r.a.createElement(l.a,null),r.a.createElement(i.a,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id,className:"blog-post"},r.a.createElement("h2",null,r.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)),r.a.createElement("h4",null,t.frontmatter.date),r.a.createElement("p",null,t.excerpt))}),r.a.createElement(u.a,null)))};var s="2068765159"},184:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=n(183),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(185),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},185:function(e,t,n){var a;e.exports=(a=n(187))&&a.default||a},186:function(e,t,n){"use strict";var a=n(188),r=n(0),c=n.n(r),i=n(184);t.a=function(e){var t=e.children;return c.a.createElement(i.StaticQuery,{query:"3892401927",render:function(e){return c.a.createElement("div",{className:"wrapper"},t)},data:a})}},187:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=n(54),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Joanne Imlay"}}}}},189:function(e,t,n){},190:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(0),i=n.n(c),o=n(184),l=n(199),u=n.n(l),s=(n(191),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e={strings:["React developer.","UX obsessive.","Design geek.","Tutor and resource creator."],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new u.a(this.el,e)},n.componentWillUnmount=function(){this.typed.destroy()},n.render=function(){var e=this;return i.a.createElement("header",null,i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,"<",i.a.createElement("span",null,"JoanneImlay")," />"),i.a.createElement("div",{className:"type-wrap"},i.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),i.a.createElement("div",{className:"menu"},i.a.createElement(o.Link,{to:"/"},"Home"),i.a.createElement(o.Link,{to:"/blog"},"Blog")))},t}(i.a.Component));t.a=s},191:function(e,t,n){},192:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(193);t.a=function(e){return r.a.createElement("div",{className:"redband"},e.children)}},193:function(e,t,n){},195:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(196),i=n(203),o=n(204),l=n(207);n(205);c.b.add(l.b),c.b.add(l.c),c.b.add(l.a),c.b.add(o.b);t.a=function(){return r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"mailto:jo.imlay@gmail.com"},r.a.createElement(i.a,{icon:o.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/joanne-imlay-4a7a7056/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:l.b})),r.a.createElement("a",{href:"https://www.github.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:l.a})),r.a.createElement("a",{href:"https://www.twitter.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:l.c})))}},200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(192),i=n(186);n(201);t.a=function(){return r.a.createElement("div",{className:"blog-header"},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement("h2",null,"<Blog />"))))}},201:function(e,t,n){},205:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-blog-js-3d6895bb08e8d349b763.js.map