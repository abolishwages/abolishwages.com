(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var r=e.n(t);const a=JSON.parse('{"development":{"addr":"0.0.0.0","port":"3000"},"production":{"addr":"127.0.1.1","port":"8080"}}'),o=require("cookie-parser");var n=e.n(o);const i=require("fs");var s=e.n(i);const l=require("path");var c=e.n(l);const u=require("react");var h=e.n(u);function p(){return h().createElement("div",{id:"home"},h().createElement("div",{id:"content"},h().createElement("section",{id:"intro"},h().createElement("h1",{id:"fancy"},"Abolish Wages"),h().createElement("p",{id:"abstract"},"Why? Because the wages system is exploitative by its very nature.")),h().createElement("section",{id:"the-wages-system"},h().createElement("h2",null,"The Wages System"),h().createElement("p",null,"When I refer to the wages system, I am referencing how labor is generally compensated for their work. Of course, there are exceptions to what I am about to say. However, the vast majority of people earn their living through wages paid by a company that they don't own even partially. As a result, there is a stark divide between the owners (capitalists) and the laborers in our society.")),h().createElement("section",{id:"surplus-value"},h().createElement("h2",null,"Surplus Value"),h().createElement("p",null,"Suppose you are a capitalist. You own a business, as well as some land rich in resources that you can use to produce some valuable product. Suppose that one unit of the raw materials you own can be sold for $10, but the equivalent amount that has been refined into your product can sell for $100. You hire workers who can transform the raw materials you own into a finished product ready to sell, and you pay them for their time."),h().createElement("p",null,"Naturally, for each unit of your product produced, the worker has generated $90 in value by transforming $10 in raw materials into a $100 product. Suppose your average worker can complete one unit of product per hour. If you pay each worker $50 per hour (generous, I know), you are still profiting $40 per worker per hour without even lifting a finger. This is the worker's surplus value. If you have 10 workers, you make $400 per hour without doing anything.")),h().createElement("section",{id:"initial-objection"},h().createElement("h2",null,"An Initial Objection"),h().createElement("p",null,'"Surely in real life the surplus value isn\'t so comically large," you may argue. In response to this point I would simply ask you how billionaires could exist without this being the case. Even smaller companies have been shown to extract huge amounts in surplus value from their workers. One ',h().createElement("a",{href:"https://www.wtol.com/article/news/local/findlay-pizzeria-owner-gives-entire-day-of-profits-to-employees-to-show-his-appreciation/512-5fa193d2-b88a-44ea-9351-b61af44c35f8"},"pizzeria")," famously paid their workers $78 per hour on one day only when the owner took no profits."),h().createElement("p",null,"I even have personal experience with egregious exploitation. I worked for a tutoring company that paid me $15 per hour. A client who was discontinuing tutoring mentioned that it was cost-prohibitive for his family because it was $75 per hour. I was floored. I was angry. This company was paying me 20% of the value I was producing.")),h().createElement("section",{id:"exploitation"},h().createElement("h2",null,"Exploitation"),h().createElement("p",null,"This kind of exploitation is everywhere in our society, and it's only getting worse. Wages have stagnated; in fact, they have actually decreased when inflation is taken into account. All the while, the wealthy have gotten massively wealthier."),h().createElement("p",null,"In the short term, most people have no choice but to participate in this system, even if they know they are being exploited. However, it is important to be aware that this system is getting even more unfair with time. The owner class is never satisfied. They have been waging a one-sided class war for longer than any of us have been alive. It is time for those of us that actually create value reclaim that value for ourselves."))),h().createElement("footer",{id:"footer"},h().createElement("div",{id:"footer-border"}),h().createElement("p",{id:"description"},h().createElement("a",{href:"https://github.com/abolishwages/abolishwages.com/"},"Made")," with","<3"," by ",h().createElement("a",{href:"https://twitter.com/abolishwages"},"Matt"),".")))}const d=require("react-dom/server");var m=e.n(d),y=r().Router();y.use("/static",r().static(c().resolve(__dirname,"static")));var w=c().resolve(__dirname,"static","markup","index.html");y.get("/",(function(e,t){var r="Abolish Wages",a={url:"https://abolishwages.com",title:r};s().readFile(w,"utf8",(function(e,r){if(e||!r)t.status(500).send("An internal error has occurred.");else{var o=function(e,t,r,a,o,n){var i=m().renderToString(h().createElement(o,null));return e.replace("<title></title>","<title>".concat("Abolish Wages","</title>")).replace('<meta property="og:url"/>','<meta property="og:url" content="'.concat(r.url,'"/>')).replace('<meta property="og:title"/>','<meta property="og:title" content="'.concat(r.title,'"/>')).replace('<link rel="stylesheet"/>','<link rel="stylesheet" href="'.concat("/static/styles/home.css",'"/>')).replace('<div id="root"></div>','<div id="root">'.concat(i,"</div>")).replace("<script><\/script>",'<script src="'.concat("/static/dist/home.js",'"><\/script>'))}(r,0,a,0,p);t.status(200).send(o)}}))})),y.get("*",(function(e,t){t.redirect("/")}));const f=y;var v=r()(),g="production";v.use(r().json()),v.use(r().urlencoded({extended:!0})),v.use(n()()),v.use("/",f);var b=a[g].addr,E=a[g].port;v.listen(E,b,(function(){console.log("Running ".concat(g," server:")),console.log("Listening on ".concat(b,":").concat(E," ..."))}))})();