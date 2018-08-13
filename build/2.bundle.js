/*! Emile Choghi's Portfolio Version: 2.7.0 Date: 8/12/2018 @ 21:43 */
webpackJsonp([2],{"./app/components/About.js":function(n,e,t){"use strict";function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function o(n,e){return n.raw=e,n}Object.defineProperty(e,"__esModule",{value:!0});var r=t("../node_modules/react/index.js"),c=t.n(r),d=t("../node_modules/styled-components/dist/styled-components.browser.es.js"),p=t("./app/components/Footer.js"),s=t("../node_modules/react-ga/dist/react-ga.js"),m=t.n(s),u=t("../node_modules/react-helmet/lib/Helmet.js"),x=(t.n(u),o(["\n    font-family: 'Varela Round';\n"],["\n    font-family: 'Varela Round';\n"])),h=o(["\n    padding: 100px;\n    font-weight: 300;\n    max-width: 700px;\n    font-size: 2.5rem;\n    line-height: 1.5;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        padding: 150px 100px;\n    }\n\n    @media (max-width: 768px) {\n        padding: 125px 20px 45px;\n        font-size: 2rem;\n        border-bottom: 1px solid rgb(219, 219, 219);\n    }\n"],["\n    padding: 100px;\n    font-weight: 300;\n    max-width: 700px;\n    font-size: 2.5rem;\n    line-height: 1.5;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        padding: 150px 100px;\n    }\n\n    @media (max-width: 768px) {\n        padding: 125px 20px 45px;\n        font-size: 2rem;\n        border-bottom: 1px solid rgb(219, 219, 219);\n    }\n"]),f=o(["\n    padding: 85px;\n    margin: 0 auto;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        display: block;\n        padding: 0;\n    }\n\n    @media (max-width: 1023px) {\n        display: block;\n        padding: 0;\n    }\n\n    @media (max-width: 768px) {\n        padding: 0;\n    }\n"],["\n    padding: 85px;\n    margin: 0 auto;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        display: block;\n        padding: 0;\n    }\n\n    @media (max-width: 1023px) {\n        display: block;\n        padding: 0;\n    }\n\n    @media (max-width: 768px) {\n        padding: 0;\n    }\n"]),g=o(["\n    padding: 80px 170px;\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        padding: 0 130px 70px;\n        justify-content: center;\n    }\n\n    @media (max-width: 1023px) {\n        justify-content: center;\n    }\n\n    @media (max-width: 768px) {\n        padding: 50px 20px ",";\n        display: block;\n    }\n"],["\n    padding: 80px 170px;\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        padding: 0 130px 70px;\n        justify-content: center;\n    }\n\n    @media (max-width: 1023px) {\n        justify-content: center;\n    }\n\n    @media (max-width: 768px) {\n        padding: 50px 20px ",";\n        display: block;\n    }\n"]),b=o(["\n    text-align: right;\n    margin-right: 70px;\n    font-size: 16px;\n    color: #269bda;\n    width: 200px;\n    font-weight: 700;\n    letter-spacing: 2px;\n\n    @media (max-width: 768px) {\n        text-align: left;\n    }\n"],["\n    text-align: right;\n    margin-right: 70px;\n    font-size: 16px;\n    color: #269bda;\n    width: 200px;\n    font-weight: 700;\n    letter-spacing: 2px;\n\n    @media (max-width: 768px) {\n        text-align: left;\n    }\n"]),w=o(["\n    font-size: 1rem;\n    line-height: 2;\n    width: 100%;\n    max-width: 650px;\n\n    a {\n        font-weight: 700;\n\n        &:hover {\n            color: #269bda;\n        }\n    }\n\n    @media (max-width: 768px) {\n        width: unset;\n        padding: 15px 20px;\n    }\n"],["\n    font-size: 1rem;\n    line-height: 2;\n    width: 100%;\n    max-width: 650px;\n\n    a {\n        font-weight: 700;\n\n        &:hover {\n            color: #269bda;\n        }\n    }\n\n    @media (max-width: 768px) {\n        width: unset;\n        padding: 15px 20px;\n    }\n"]),y=o(["\n    display: flex;\n    justify-content: space-between;\n\n    @media (max-width: 768px) {\n        display: block;\n    }\n"],["\n    display: flex;\n    justify-content: space-between;\n\n    @media (max-width: 768px) {\n        display: block;\n    }\n"]),E=o(["\n    ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n\n        li {\n            margin: 3px 0;\n            font-size: 0.9rem;\n        }\n    }\n\n    @media (max-width: 768px) {\n        display: inline-block;\n        vertical-align: text-top;\n        width: 50%;\n        margin-top: ",";\n    }\n"],["\n    ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n\n        li {\n            margin: 3px 0;\n            font-size: 0.9rem;\n        }\n    }\n\n    @media (max-width: 768px) {\n        display: inline-block;\n        vertical-align: text-top;\n        width: 50%;\n        margin-top: ",";\n    }\n"]),k=o(["\n    font-weight: 700;\n    color: #36363c;\n    text-transform: uppercase;\n"],["\n    font-weight: 700;\n    color: #36363c;\n    text-transform: uppercase;\n"]),v=d.a.div(x),j=d.a.div(h),_=d.a.div(f),z=d.a.section(g,function(n){return n.skills?"100px":0}),C=d.a.div(b),O=d.a.div(w),N=d.a.div(y),P=d.a.div(E,function(n){return n.padding?"10px":0}),A=d.a.div(k),S=function(n){function e(t){a(this,e);var l=i(this,n.call(this,t));return l.state={loading:!0,error:null},window.scrollTo(0,0),l}return l(e,n),e.prototype.componentDidMount=function(){m.a.ga("send","pageview","/about")},e.prototype.render=function(){return c.a.createElement(v,null,c.a.createElement(u.Helmet,null,c.a.createElement("link",{rel:"canonical",href:"https://emilechoghi.com/about"})),c.a.createElement("div",{className:"clearfix"}),c.a.createElement(_,null,c.a.createElement(j,null,"I'm ",c.a.createElement("b",null,"Emile Choghi"),", a design-oriented front end software engineer focused on building beautiful interfaces & experiences"),c.a.createElement(z,null,c.a.createElement(C,null,"Background"),c.a.createElement(O,null,"I'm currently a front end engineer at"," ",c.a.createElement("a",{href:"https://doctor.com",target:"_blank",rel:"noopener noreferrer"},"Doctor.com")," ","building consumer facing web apps with some awesome people. As an engineer, I enjoy exploring the complex relationship between engineering and design — combining my technical expertise with my keen attention to detail to create beautiful products. My goal is to always build applications that are scalable and efficient under the hood while providing seamless, pixel-perfect user experiences. When I'm not in front of a computer screen, I'm probably playing basketball, flying my drones, or hanging out at the beach.")),c.a.createElement(z,{skills:!0},c.a.createElement(C,null,"Skills"),c.a.createElement(O,null,c.a.createElement(N,null,c.a.createElement(P,null,c.a.createElement(A,null,"Languages"),c.a.createElement("ul",null,c.a.createElement("li",null,"Javascript (ES7)"),c.a.createElement("li",null,"HTML5"),c.a.createElement("li",null,"CSS3"))),c.a.createElement(P,null,c.a.createElement(A,null,"Libraries"),c.a.createElement("ul",null,c.a.createElement("li",null,"React"),c.a.createElement("li",null,"Angular 1.x"),c.a.createElement("li",null,"jQuery"),c.a.createElement("li",null,"Bootstrap"),c.a.createElement("li",null,"Node & Express"))),c.a.createElement(P,{padding:!0},c.a.createElement(A,null,"Tools"),c.a.createElement("ul",null,c.a.createElement("li",null,"Git & Github"),c.a.createElement("li",null,"Webpack"),c.a.createElement("li",null,"Gulp"),c.a.createElement("li",null,"VS Code"),c.a.createElement("li",null,"PHP Storm"))),c.a.createElement(P,{padding:!0},c.a.createElement(A,null,"Design"),c.a.createElement("ul",null,c.a.createElement("li",null,"Adobe Photoshop"),c.a.createElement("li",null,"Zeplin"),c.a.createElement("li",null,"Invision"))))))),c.a.createElement(p.a,null))},e}(c.a.Component);e.default=S},"./app/components/Footer.js":function(n,e,t){"use strict";function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var o=t("../node_modules/react/index.js"),r=t.n(o),c=t("../node_modules/react-ga/dist/react-ga.js"),d=t.n(c),p=t("../node_modules/styled-components/dist/styled-components.browser.es.js"),s=function(n,e){return n.raw=e,n}(["\n    display: inline-block;\n    list-style: none;\n\n    a {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n        width: 48px;\n        color: rgba(0, 0, 0, 0.54);\n        height: 48px;\n        padding: 0;\n        font-size: 1.5rem;\n        text-align: center;\n        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        text-decoration: none;\n        border-radius: 50%;\n        background-color: transparent;\n        -webkit-appearance: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        outline: none;\n\n        &:hover {\n            background-color: rgba(0, 0, 0, 0.08);\n        }\n    }\n"],["\n    display: inline-block;\n    list-style: none;\n\n    a {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n        width: 48px;\n        color: rgba(0, 0, 0, 0.54);\n        height: 48px;\n        padding: 0;\n        font-size: 1.5rem;\n        text-align: center;\n        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        text-decoration: none;\n        border-radius: 50%;\n        background-color: transparent;\n        -webkit-appearance: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        outline: none;\n\n        &:hover {\n            background-color: rgba(0, 0, 0, 0.08);\n        }\n    }\n"]),m=p.a.li(s),u=function(n){function e(){return a(this,e),i(this,n.apply(this,arguments))}return l(e,n),e.prototype.renderFooterClass=function(){var n=this.props,e=n.fixed,t=n.type;return e?"portfolio"===t?"footer footer__portfolio":"footer fixed":"footer"},e.prototype.sendAnalytics=function(n){d.a.event({category:"Footer Link",action:"Social Media Link Click",label:"Navigated to "+n+" Profile"})},e.prototype.render=function(){var n=this;return r.a.createElement("div",{className:this.renderFooterClass()},r.a.createElement("div",{className:"footer__wrapper"},r.a.createElement("div",{className:"footer__text"},"© 2018 Emile Choghi"),r.a.createElement("div",{className:"social-links"},r.a.createElement(m,null,r.a.createElement("a",{role:"button","aria-label":"github",href:"https://github.com/echoghi",target:"_blank",rel:"noopener noreferrer",onClick:function(){return n.sendAnalytics("Github")}},r.a.createElement("i",{className:"icon-github"}))),r.a.createElement(m,null,r.a.createElement("a",{role:"button","aria-label":"linked in",href:"https://www.linkedin.com/in/emile-choghi-a6b60ba1/",target:"_blank",rel:"noopener noreferrer",onClick:function(){return n.sendAnalytics("LinkedIn")}},r.a.createElement("i",{className:"icon-linkedin"}))),r.a.createElement(m,null,r.a.createElement("a",{role:"button","aria-label":"angel list",href:"https://angel.co/emile-choghi",target:"_blank",rel:"noopener noreferrer",onClick:function(){return n.sendAnalytics("Angellist")}},r.a.createElement("i",{className:"icon-angel"}))))))},e}(r.a.PureComponent);e.a=u}});