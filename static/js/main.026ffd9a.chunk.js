(this["webpackJsonpto-music-finder"]=this["webpackJsonpto-music-finder"]||[]).push([[0],{31:function(e,t,a){e.exports=a(89)},36:function(e,t,a){},37:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(36),a(30)),i=a(3),s=a(4),u=a(6),m=a(5),v=(a(37),a(26)),d=a.n(v),p=(a(55),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).weHaveATarget=function(t){t.preventDefault(),console.log(t.target.value),e.setState({userChoice:t.target.value})},e.state={userChoice:"",filteredArray:[]},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper backer"},r.a.createElement("h1",null,"Toronto's Upcoming Concert Generator"),r.a.createElement("h2",null,"Populate An Up To Date Concert List Based On Genre Selection ")),r.a.createElement("form",{action:""},r.a.createElement("select",{onChange:this.weHaveATarget,name:"whichVenue",id:"whichVenue"},r.a.createElement("option",{value:""},"Music Genres..."),r.a.createElement("option",{value:"KnvZfZ7vAvv"},"Alternative"),r.a.createElement("option",{value:"KnvZfZ7vAv6"},"Country"),r.a.createElement("option",{value:"KnvZfZ7vAvF"},"Dance/Electronic"),r.a.createElement("option",{value:"KnvZfZ7vAva"},"Folk"),r.a.createElement("option",{value:"KnvZfZ7vAv1"},"Hip-Hop"),r.a.createElement("option",{value:"KnvZfZ7vAev"},"Pop"),r.a.createElement("option",{value:"KnvZfZ7vAee"},"R&B"),r.a.createElement("option",{value:"KnvZfZ7vAeA"},"Rock")),r.a.createElement("button",{onClick:function(e){return window.alert("No Concerts Booked Due to Covid! - Please check back at a later date.")}},"Find My Artist")))}}]),a}(n.Component)),f=a(27),h=a.n(f),E=(a(60),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Results"},r.a.createElement("main",null,r.a.createElement("ul",{className:"wrapper container"},this.props.fourConcerts.map((function(e){return r.a.createElement("li",{className:"imgBacker"},r.a.createElement("h2",null,e.name),r.a.createElement("h3",null,e._embedded.venues[0].name),r.a.createElement("h4",null,e.dates.start.localDate," \ud83d\udcc5"),r.a.createElement("h4",null,e.dates.start.localTime," \ud83d\udd53"),r.a.createElement("div",{className:"imgHold"},r.a.createElement("img",{src:e.images[5].url})))}))),r.a.createElement(h.a,{StopPosition:0,ShowAtPosition:150,EasingType:"easeOutCubic",AnimationDuration:500,ContainerClassName:"ScrollUpButton__Container",TransitionClassName:"ScrollUpButton__Toggled",style:{},ToggledStyle:{}})))}}]),a}(n.Component)),g=(a(61),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Developed By ",r.a.createElement("a",{href:"http://www.keil.ca"},"Keil Martin"),", Using ",r.a.createElement("a",{href:"https://developer.ticketmaster.com/products-and-docs/apis/getting-started/"},"The Ticketmaster API"),", Juno 2019")))}),A=a(28),k=a.n(A),w=a(29),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getArtist=function(t,a){t.preventDefault();var n=Object(c.a)(e.state.allMusicVenues).filter((function(e){return e.classifications[0].genre.id===a})).slice(0,8);e.setState({finalArray:n}),w.scroller.scrollTo("Results",{duration:1200,smooth:!0})},e.state={allMusicVenues:[],filteredArray:[],finalArray:[],loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d()({url:"https://app.ticketmaster.com/discovery/v2/events.json",method:"GET",dataResponse:"json",params:{apikey:"1upokxsDOkQ6x4imtBWNcDKUEuuagvna",format:"json",city:"toronto",classificationName:"music",sort:"date,asc",size:"200"}}).then((function(t){e.setState({allMusicVenues:t.data._embedded.events,loading:!1})}))}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{class:"loadScreen"},r.a.createElement(k.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:6e3})):r.a.createElement("div",{className:"App"},r.a.createElement(p,{getArtistProp:this.getArtist}),r.a.createElement(E,{fourConcerts:this.state.finalArray}),r.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.026ffd9a.chunk.js.map