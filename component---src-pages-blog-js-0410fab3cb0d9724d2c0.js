(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(200),i=t(216),l=t(196),c=t.n(l),u=t(197),m=t(198);function d(){var n=c()(["\n    background-color: #bbb;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    height: 14em;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  "]);return d=function(){return n},n}var f=function(n){var e=n.imgSrc,t=Object(u.a)("div")(d(),e);return r.a.createElement(t,null)};function s(){var n=c()(["\n    background: #fff;\n    padding: 0;\n    border: solid 1px #666;\n    box-shadow: 3px 3px 3px #ccc;\n    overflow: hidden;\n\n    section {\n      padding: 1em;\n    }\n\n    :hover {\n      box-shadow: none;\n    }\n\n    img {\n      height: 8em;\n      min-width: 100%;\n    }\n\n    h2 {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    h3, p {\n      color: #333;\n    }\n\n    h3 {\n      font-weight: bold;\n    }\n\n    @media (max-width: 768px) {\n      box-shadow: none;\n      border: none;\n\n      section {\n        padding: 1em 0;\n      }\n    }\n  "]);return s=function(){return n},n}var p=function(n){var e=n.article;console.log("card image: ",e.frontmatter.featuredImage.childImageSharp.sizes.src);var t=Object(u.a)("article")(s());return r.a.createElement(m.a,{to:e.fields.slug},r.a.createElement(t,null,e.frontmatter.featuredImage&&r.a.createElement(f,{imgSrc:e.frontmatter.featuredImage.childImageSharp.sizes.src}),r.a.createElement("section",null,r.a.createElement("h2",null,e.frontmatter.title),r.a.createElement("h3",null,e.frontmatter.date),r.a.createElement("p",null,e.excerpt))))};function h(){var n=c()(["\n    label: GridContainer;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 0;\n  "]);return h=function(){return n},n}var g=function(n){var e=n.children,t=Object(u.a)("div")(h());return r.a.createElement(t,null,e)};function v(){var n=c()(["\n    label: GridItem;\n    margin: 0 1em 1em 0;\n    padding: 0;\n    vertical-align: top;\n    box-sizing: border-box;\n    font-size: 1rem;\n    width: calc(33.33% - 1em);\n\n    @media (max-width: 768px) {\n      width: 100%;\n      min-width: 100%;\n      margin: 0 0 1em;\n    }\n  "]);return v=function(){return n},n}var w=function(n){var e=n.children,t=Object(u.a)("div")(v());return r.a.createElement(t,null,e)},b=t(205);t.d(e,"query",function(){return E});e.default=function(n){var e=n.data;return r.a.createElement(b.a,null,r.a.createElement(i.a,null),r.a.createElement(o.a,null,r.a.createElement(g,null,e.allMarkdownRemark.edges.map(function(n){var e=n.node;return r.a.createElement(w,{key:e.id},r.a.createElement(p,{article:e}))}))))};var E="935116326"},198:function(n,e,t){"use strict";t.d(e,"b",function(){return d});var a=t(0),r=t.n(a),o=t(5),i=t.n(o),l=t(35),c=t.n(l);t.d(e,"a",function(){return c.a});t(199);var u=r.a.createContext({});function m(n){var e=n.staticQueryData,t=n.data,a=n.query,o=n.render,i=t?t.data:e[a]&&e[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(n){var e=n.data,t=n.query,a=n.render,o=n.children;return r.a.createElement(u.Consumer,null,function(n){return r.a.createElement(m,{data:e,query:t,render:a||o,staticQueryData:n})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},199:function(n,e,t){var a;n.exports=(a=t(203))&&a.default||a},200:function(n,e,t){"use strict";var a=t(196),r=t.n(a),o=t(0),i=t.n(o),l=t(197),c=t(201);function u(){var n=r()(["\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1em 0;\n  color: #333;\n  margin-bottom: 0.5em;\n\n  h2 {\n    font-size: 1.5em;\n    font-weight: 600;\n    font-family: 'Roboto Slab', serif;\n    color: #c30;\n  }\n"]);return u=function(){return n},n}var m=Object(l.a)("div")(u());e.a=function(n){var e=n.children;return i.a.createElement(m,null,i.a.createElement(c.a,null,e))}},201:function(n,e,t){"use strict";var a=t(196),r=t.n(a),o=t(204),i=t(0),l=t.n(i),c=t(197),u=t(198);function m(){var n=r()(["\n  position: relative;\n  margin: 0 auto;\n  width: 96vw;\n  max-width: 1024px;\n  padding: 0 2vw;\n"]);return m=function(){return n},n}var d=Object(c.a)("div")(m());e.a=function(n){var e=n.children;return l.a.createElement(u.b,{query:"3892401927",render:function(n){return l.a.createElement(d,null,e)},data:o})}},202:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(207),i=t(208),l=t(209),c=t(212);t(213);o.b.add(c.b),o.b.add(c.c),o.b.add(c.a),o.b.add(l.b);e.a=function(){return r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"mailto:jo.imlay@gmail.com"},r.a.createElement(i.a,{icon:l.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/joanne-imlay-4a7a7056/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:c.b})),r.a.createElement("a",{href:"https://www.github.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:c.a})),r.a.createElement("a",{href:"https://www.twitter.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:c.c})))}},203:function(n,e,t){"use strict";t.r(e);t(36);var a=t(0),r=t.n(a),o=t(5),i=t.n(o),l=t(65),c=function(n){var e=n.location,t=n.pageResources;return t?r.a.createElement(l.a,Object.assign({location:e,pageResources:t},t.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},204:function(n){n.exports={data:{site:{siteMetadata:{title:"Joanne Imlay"}}}}},205:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(210),i=t.n(o),l=t(7),c=t.n(l),u=t(196),m=t.n(u),d=t(198),f=t(197),s=t(211),p=t.n(s);function h(){var n=m()(["\n  display: block;\n  text-align: center;\n  width: 100px;\n  color: black;\n\n  &:hover {\n    background-color: #c30;\n    border-radius: 6px;\n    color: white;\n  }\n"]);return h=function(){return n},n}function g(){var n=m()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 1em;\n    border-top: solid 1px #666;\n    border-bottom: solid 1px #666;\n    margin-bottom: 1em;\n  }\n"]);return g=function(){return n},n}function v(){var n=m()(["\n  font-size:1.5em;\n  line-height: 1.5em;\n  margin-bottom: 0;\n"]);return v=function(){return n},n}function w(){var n=m()(["\n  font-size:2em;\n  font-weight: 700;\n  font-family: 'Roboto Slab', serif;\n  color: #333;\n  margin: 0 2vw 0 0;\n\n  span {\n    color: #c30;\n  }\n"]);return w=function(){return n},n}function b(){var n=m()(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: flex-start;\n"]);return b=function(){return n},n}function E(){var n=m()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  color:#333;\n  font-family: 'Lato', sans-serif;\n  margin: 1em 0;\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    margin-bottom: 0;\n  }\n"]);return E=function(){return n},n}var x=Object(f.a)("header")(E()),y=Object(f.a)("div")(b()),j=Object(f.a)("h1")(w()),k=Object(f.a)("div")(v()),O=Object(f.a)("nav")(g()),z=Object(f.a)(d.a)(h()),S=function(n){function e(){return n.apply(this,arguments)||this}c()(e,n);var t=e.prototype;return t.componentDidMount=function(){var n={strings:["React developer.","Coding mentor.","Crazy cat lady."],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new p.a(this.el,n)},t.componentWillUnmount=function(){this.typed.destroy()},t.render=function(){var n=this;return r.a.createElement(x,null,r.a.createElement(y,null,r.a.createElement(j,null,"<",r.a.createElement("span",null,"JoanneImlay"),"/>"),r.a.createElement(k,null,r.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(e){n.el=e}}))),r.a.createElement(O,null,r.a.createElement(z,{to:"/"},"Home"),r.a.createElement(z,{to:"/blog"},"Blog"),r.a.createElement(z,{to:"/portfolio"},"Portfolio")))},e}(r.a.Component),R=t(202),q=(t(214),function(){return r.a.createElement("footer",null,r.a.createElement(R.a,null))}),I=t(200);e.a=function(n){var e=n.children;return r.a.createElement("div",{id:"main"},r.a.createElement(i.a,null,r.a.createElement("title",null,"Joanne Imlay, front end developer")),r.a.createElement(I.a,null,r.a.createElement(S,null)),e,r.a.createElement(I.a,null,r.a.createElement(q,null)))}},206:function(n,e,t){"use strict";var a=t(196),r=t.n(a),o=t(0),i=t.n(o),l=t(197),c=t(201);function u(){var n=r()(["\n  background-color: #c30;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1em 0;\n  color: white;\n  margin-bottom: 0.5em;\n\n  h2 {\n    font-size: 1.5em;\n    font-weight: 600;\n    font-family: 'Roboto Slab', serif;\n    color: white;\n  }\n"]);return u=function(){return n},n}var m=Object(l.a)("div")(u());e.a=function(n){var e=n.children;return i.a.createElement(m,null,i.a.createElement(c.a,null,e))}},216:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(206);e.a=function(){return r.a.createElement(o.a,null,r.a.createElement("h2",null,"<Blog />"))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-0410fab3cb0d9724d2c0.js.map