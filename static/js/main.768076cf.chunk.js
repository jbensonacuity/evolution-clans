(this["webpackJsonpevolution-clans"]=this["webpackJsonpevolution-clans"]||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),s=n.n(r),c=(n(16),n(1)),i=n(2),l=n(4),m=n(3),u=n(5),d=(n(17),n(6)),f=n.n(d),h=function(e){var t=e.member,n=e.platform,a=f.a.unix(t.lastOnlineStatusChange).fromNow(),r=f()(new Date),s=f.a.unix(t.lastOnlineStatusChange).diff(r,"days");return t.destinyUserInfo?o.a.createElement("div",{className:"member \n\t\t\t\t\t".concat(s-2*s>89?"boot":"dont-boot"," \n\t\t\t\t\t").concat(t.memberType>=3?"admin":"")},o.a.createElement("strong",null,t.destinyUserInfo.displayName)," : Played ",a," ",["on Unknown","on Xbox","on Ps4","on Steam","on Blizzard","on Stadia"][n]):o.a.createElement("div",null)},E=n(10),b=n.n(E),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={BASE_URL:e.BASE_URL,API_KEY:e.API_KEY,groupId:e.groupId,clanName:e.clanName,platform:e.platform,members:[],failedCall:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat(this.state.BASE_URL,"/GroupV2/").concat(this.state.groupId,"/Members/")).set("X-API-Key",this.state.API_KEY).set("accept","json").end((function(t,n){if(t)e.setState({failedCall:!0});else{var a=JSON.parse(n.text);e.setState({members:a.Response.results})}}))}},{key:"render",value:function(){var e=this,t=this.state.members.map((function(t,n){var a=t;return o.a.createElement(h,{member:a,platform:a.destinyUserInfo.applicableMembershipTypes[0],BASE_URL:e.props.BASE_URL,API_KEY:e.props.API_KEY,key:n.toString()})}));return 0===this.state.members.length?o.a.createElement("div",{className:"clan ".concat(this.state.clanName,"-border")},o.a.createElement("header",{className:this.state.clanName},o.a.createElement("h2",null,this.state.clanName),o.a.createElement("div",{className:"member-number"},"Number of members: ",o.a.createElement("strong",null," 0 "))),o.a.createElement("section",{className:"members"},o.a.createElement("div",{className:"loading"},this.state.failedCall?"API call failed :(":"Loading..."))):o.a.createElement("div",{className:"clan ".concat(this.state.clanName,"-border")},o.a.createElement("header",{className:this.state.clanName},o.a.createElement("h2",null,this.state.clanName),o.a.createElement("div",{className:"member-number"},"Number of members: ",o.a.createElement("strong",null," ",t.length," "))),o.a.createElement("section",{className:"members"},t))}}]),t}(a.Component),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={BASE_URL:"https://www.bungie.net/Platform",API_KEY:"http://localhost:3000/"===window.location.href?"9c2fa45363f943bca1ab8b94c6d3fa59":"5bae9685d44d40879a0a24da5e948e90"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(p,{clanName:"Knights",groupId:"1770080",BASE_URL:this.state.BASE_URL,API_KEY:this.state.API_KEY}),o.a.createElement(p,{clanName:"Fatebringers",groupId:"2185897",BASE_URL:this.state.BASE_URL,API_KEY:this.state.API_KEY}),o.a.createElement(p,{clanName:"Storm",groupId:"2057456",BASE_URL:this.state.BASE_URL,API_KEY:this.state.API_KEY}))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(o.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/evolution-clans",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/evolution-clans","/service-worker.js");v?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.768076cf.chunk.js.map