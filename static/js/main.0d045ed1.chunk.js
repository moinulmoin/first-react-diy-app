(this["webpackJsonpfirst-react-diy-app"]=this["webpackJsonpfirst-react-diy-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);n(9),n(10);var c=n(1),i=n.n(c),r=n(3),a=n.n(r),l=n(6),d=n(4),b=n(5),s=n(8),o=n(7),j=[{id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:"Action",numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:"Action",numberInStock:5,dailyRentalRate:2.5},{id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:"Thriller",numberInStock:8,dailyRentalRate:3.5},{id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:"Comedy",numberInStock:7,dailyRentalRate:3.5},{id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:"Comedy",numberInStock:7,dailyRentalRate:3.5},{id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:"Comedy",numberInStock:7,dailyRentalRate:3.5},{id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:"Thriller",numberInStock:7,dailyRentalRate:4.5},{id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:"Thriller",numberInStock:4,dailyRentalRate:3.5},{id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:"Action",numberInStock:7,dailyRentalRate:3.5}],h=n(0);function u(e){var t=e.clickHandler;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{type:"button",className:"btn btn-danger ml-5",onClick:t,children:"Delete"})})}var f=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={moviesList:j},e.clickHandler=function(t){var n=e.state.moviesList,c=Object(l.a)(n),i=c.find((function(e){return e.id===t})),r=c.indexOf(i);c.splice(r,1),e.setState({moviesList:c}),console.log(i,c,r)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state.moviesList;return Object(h.jsxs)("div",{className:"container py-5",children:[0===t.length?null:Object(h.jsxs)("h3",{className:"mb-3",children:["Showing ",t.length," Movies Record"]}),Object(h.jsxs)("table",{className:"table table-bordered",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Genre"}),Object(h.jsx)("th",{scope:"col",children:"Stock"}),Object(h.jsx)("th",{scope:"col",children:"Rate"})]})}),0===t.length&&Object(h.jsx)("p",{children:"No Record Left. Add Some"}),Object(h.jsx)("tbody",{children:t.map((function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.title}),Object(h.jsx)("td",{children:t.genre}),Object(h.jsx)("td",{children:t.numberInStock}),Object(h.jsx)("td",{children:t.dailyRentalRate}),Object(h.jsx)("td",{children:Object(h.jsx)(u,{clickHandler:function(){return e.clickHandler(t.id)}})})]},t.id)}))})]})]})}}]),n}(i.a.Component);var m=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f,{})})},O=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))});a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.0d045ed1.chunk.js.map