(this.webpackJsonpspacexapp=this.webpackJsonpspacexapp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/logout_img.6cd2fc7e.png"},41:function(e,t,a){e.exports=a(77)},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(46),a(47),a(48),a(28),a(10)),s=a(11),i=a(16),u=a(15),m=a(12),p=a.n(m),h=(a(66),"https://run.mocky.io/v3/689bee42-50f3-4da7-9046-64bde3a0317b"),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={users:[],errors:{user:"",pwd:"",sbt:""}},e.submitHandler=function(t){t.preventDefault();var a=t.target[0].value,n=t.target[1].value,l=e.state,r=l.users,c=l.errors,o=0;if(0==a.length||0==n.length)return c.sbt="Please fill all the fields",void e.setState({errors:c});for(;o<r.length;){if(r[o].user==a){if(r[o].pwd!=n){c.pwd="Wrong Password";break}console.log("user",a,"pwd",n),localStorage.setItem("user",JSON.stringify(r[o])),e.props.history.push({pathname:"/home"});break}o++}o==r.length&&(c.user="User does not exist"),e.setState({errors:c})},e.getUserData=function(){p.a.get(h).then((function(t){console.log(t),e.setState({users:t.data}),console.log("users",e.state.users)})).catch((function(e){console.log(e)})).finally((function(){}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.state.errors;return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://www.spacexwiki.com/static/media/spacex-logo.9250222f.svg",alt:"SpaceX logo",width:"350px"}),l.a.createElement("form",{className:"SignIn-form",onSubmit:this.submitHandler},l.a.createElement("center",null,l.a.createElement("h3",null,"Sign In")),l.a.createElement("div",{className:"SI-form-group"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",placeholder:"Enter Username"}),e.user.length>0&&l.a.createElement("div",{className:"errmsg"},e.user)),l.a.createElement("div",{className:"SI-form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",placeholder:"Enter password"}),e.pwd.length>0&&l.a.createElement("div",{className:"errmsg"},e.pwd)),l.a.createElement("div",{className:"SI-form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"),e.sbt.length>0&&l.a.createElement("div",{className:"errmsg"},e.sbt))))}}]),a}(n.Component),E=(a(67),a(3)),g=a(17),f=a(78),v=a(38),b=a.n(v),y=function(e){var t=Object(E.f)(),a=localStorage.getItem("user"),n=JSON.parse(a);console.log("loggeduser",n),n||t.push({pathname:"/"});return l.a.createElement("div",{className:"hcontainer"},l.a.createElement("div",{className:"hlogo"},l.a.createElement(g.b,{to:"/home"},l.a.createElement("img",{src:"https://www.spacexwiki.com/static/media/spacex-logo.9250222f.svg",alt:"SpaceX logo",width:"280px"}))),l.a.createElement("div",{className:"hmenu"},l.a.createElement(g.b,{to:"/launches"},"LAUNCHES"),l.a.createElement(g.b,{to:"/rockets"},"ROCKETS"),l.a.createElement(g.b,{to:"/dragons"},"DRAGONS"),n&&"user"==n.role?l.a.createElement(f.a,{variant:"secondary",className:"badge"},n.role):l.a.createElement(f.a,{variant:"warning"}," ",n.role),l.a.createElement("h5",null,n&&n.user),l.a.createElement(g.b,{to:"/",onClick:function(){localStorage.removeItem("user")}},l.a.createElement("img",{src:b.a,alt:"logout img",width:"20px",className:"logout"}))))},k=(a(72),a(4)),w="COMPANY_INFO",O=function(e){return{type:w,payload:e}},N=function(e){return{type:"LAUNCHES_INFO",payload:e}},_=function(e){return{type:"ROCKETS_INFO",payload:e}},S=function(e){return{type:"DRAGONS_INFO",payload:e}},x=a(14),j="https://api.spacexdata.com/v3/info",C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.getUserData=function(){p.a.get(j).then((function(t){console.log(t),e.props.getInfo(t.data),console.log("info",e.props.info)})).catch((function(e){console.log(e)})).finally((function(){}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.props.info;return l.a.createElement("div",{className:"home"},l.a.createElement(y,this.props),l.a.createElement("div",{className:"homebox"},l.a.createElement("div",{className:"about"},l.a.createElement("h2",null,"ABOUT SPACEX"),l.a.createElement("p",null,e.summary)),l.a.createElement("div",{className:"cinfo"},l.a.createElement("h2",null,"COMPANY INFO"),l.a.createElement("ul",null,l.a.createElement("li",null,"Founded: ",e.founded),l.a.createElement("li",null,"Employees: ",e.employees),l.a.createElement("li",null,"Launch Sites: ",e.launch_sites),l.a.createElement("li",null,"Test Sites: ",e.test_sites),l.a.createElement("li",null,"Vehicles: ",e.vehicles))),l.a.createElement("div",{className:"cleaders"},l.a.createElement("h2",null,"COMPANY LEADERSHIP"),l.a.createElement("ul",null,l.a.createElement("li",null,"CEO: ",e.ceo),l.a.createElement("li",null,"COO: ",e.coo),l.a.createElement("li",null,"CTO: ",e.cto),l.a.createElement("li",null,"CTO of Propulsion: ",e.cto_propulsion)))))}}]),a}(n.Component),D=Object(x.b)((function(e){return{info:e.info}}),(function(e){return Object(k.a)({getInfo:O},e)}))(C),A=(a(74),a(79)),I=a(80),R="https://api.spacexdata.com/v3/launches",T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.getUserData=function(){p.a.get(R).then((function(t){console.log(t),e.props.getLaunches(t.data),console.log("launches",e.props.launches)})).catch((function(e){console.log(e)})).finally((function(){}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.props.launches;return l.a.createElement("div",{className:"launches"},l.a.createElement(y,null),l.a.createElement("img",{className:"limg",src:"https://www.spacex.com/static/images/backgrounds/fh_feature.webp",alt:"Launch image",height:"250px"}),l.a.createElement("h1",null,"SPACEX LAUNCHES"),l.a.createElement("div",{className:"launchbox"},e.map((function(e,t){return l.a.createElement(A.a,{style:{width:"18rem"},key:t,className:"lcard"},l.a.createElement(A.a.Img,{variant:"top",src:e.links.mission_patch_small,height:"150px"}),l.a.createElement(A.a.Body,null,l.a.createElement("h2",null,e.mission_name),l.a.createElement(A.a.Title,null,"Mission Details:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Rocket Name: ",e.rocket.rocket_name),l.a.createElement("li",null,"Rocket Type: ",e.rocket.rocket_type),l.a.createElement("li",null,"Launch Year: ",e.launch_year," "),l.a.createElement("li",null,"Launch Site: ",e.launch_site.site_name," "),l.a.createElement("li",null,"Launch: ",e.launch_success?"Success":"Failure"," ")),l.a.createElement("a",{href:e.links.video_link},l.a.createElement(I.a,{variant:"primary"},"Watch Video"))))}))))}}]),a}(n.Component),U=Object(x.b)((function(e){return{launches:e.launches}}),(function(e){return Object(k.a)({getLaunches:N},e)}))(T),P=(a(75),"https://api.spacexdata.com/v3/rockets"),F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.getUserData=function(){p.a.get(P).then((function(t){console.log(t),e.props.getRockets(t.data),console.log("rockets",e.props.rockets)})).catch((function(e){console.log(e)})).finally((function(){}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.props.rockets;return l.a.createElement("div",{className:"rockets"},l.a.createElement(y,null),l.a.createElement("img",{className:"rimg",src:"https://www.spacex.com/static/images/backgrounds/f9_feature.webp",alt:"Rocket image",height:"250px"}),l.a.createElement("h1",null,"SPACEX ROCKETS"),l.a.createElement("div",{className:"rocketbox"},e.map((function(e,t){return l.a.createElement(A.a,{style:{width:"18rem"},key:t,className:"rcard"},l.a.createElement(A.a.Body,null,l.a.createElement("h2",null,e.rocket_name),l.a.createElement(A.a.Text,null,e.description),l.a.createElement("h4",null,"Specs"),l.a.createElement("ul",null,l.a.createElement("li",null,"Height: ","".concat(e.height.meters,"m")," "),l.a.createElement("li",null,"Diameter: ","".concat(e.diameter.meters,"m")," "),l.a.createElement("li",null,"Mass: ","".concat(e.mass.kg,"kg")," "),l.a.createElement("li",null,"Booster: ",e.boosters," "),l.a.createElement("li",null,"Success Rate: ",e.success_rate_pct," ")),l.a.createElement("h4",null,"Engines"),l.a.createElement("ul",null,l.a.createElement("li",null,"Engines: ",e.engines.number," "),l.a.createElement("li",null,"Type: ",e.engines.type," "),l.a.createElement("li",null,"Version: ",e.engines.version," "),l.a.createElement("li",null,"Propellant 1: ",e.engines.propellant_1," "),l.a.createElement("li",null,"Propellant 2: ",e.engines.propellant_2," ")),l.a.createElement("a",{href:e.wikipedia},l.a.createElement(I.a,{variant:"primary"},"Read about ",e.rocket_name," on Wikipedia "))))}))))}}]),a}(n.Component),L=Object(x.b)((function(e){return{rockets:e.rockets}}),(function(e){return Object(k.a)({getRockets:_},e)}))(F),M=(a(76),"https://api.spacexdata.com/v3/dragons"),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.getUserData=function(){p.a.get(M).then((function(t){console.log(t),e.props.getDragons(t.data),console.log("dragons",e.props.dragons)})).catch((function(e){console.log(e)})).finally((function(){}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.props.dragons;return l.a.createElement("div",{className:"dragons"},l.a.createElement(y,null),l.a.createElement("img",{className:"dimg",src:"https://www.spacex.com/static/images/backgrounds/dragon_feature.webp",alt:"Rocket image",height:"250px"}),l.a.createElement("h1",null,"SPACEX DRAGONS"),l.a.createElement("div",{className:"dbox"},e.map((function(e,t){return l.a.createElement(A.a,{style:{width:"18rem"},key:t,className:"rcard"},l.a.createElement(A.a.Body,null,l.a.createElement("h2",null,e.name),l.a.createElement(A.a.Text,null,e.description),l.a.createElement("h4",null,"Specs"),l.a.createElement("ul",null,l.a.createElement("li",null,"Crew Capacity: ",e.crew_capacity," "),l.a.createElement("li",null,"Height w/Trunk: ","".concat(e.height_w_trunk.meters,"m")," "),l.a.createElement("li",null,"Diameter: ","".concat(e.diameter.meters,"m")," "),l.a.createElement("li",null,"Sidewall Angle: ",e.sidewall_angle_deg," "),l.a.createElement("li",null,"Orbit Duration: ","".concat(e.orbit_duration_yr," years")," ")),l.a.createElement("h4",null,"Heat Shield"),l.a.createElement("ul",null,l.a.createElement("li",null,"Material: ",e.heat_shield.material," "),l.a.createElement("li",null,"Size: ",e.heat_shield.size_meters," "),l.a.createElement("li",null,"Temperature: ",e.heat_shield.temp_degrees," "),l.a.createElement("li",null,"Partner: ",e.heat_shield.dev_partner," ")),l.a.createElement("h4",null,"Thrusters"),e.thrusters.map((function(e,t){return l.a.createElement("ul",{key:t},l.a.createElement("li",null,"Type: ",e.type," "),l.a.createElement("li",null,"Pods: ",e.pods," "),l.a.createElement("li",null,"Fuel 1: ",e.fuel_1," "),l.a.createElement("li",null,"Fuel 2: ",e.fuel_2," "),l.a.createElement("li",null,"Thrust: ","".concat(e.thrust.kN," kN")," "))})),l.a.createElement("a",{href:e.wikipedia},l.a.createElement(I.a,{variant:"primary"},"Read about ",e.name," on Wikipedia "))))}))))}}]),a}(n.Component),B=Object(x.b)((function(e){return{dragons:e.dragons}}),(function(e){return Object(k.a)({getDragons:S},e)}))(H);var W=function(){return l.a.createElement(g.a,{basename:"spacexapp"},l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:d}),l.a.createElement(E.a,{exact:!0,path:"/home",component:D}),l.a.createElement(E.a,{exact:!0,path:"/launches",component:U}),l.a.createElement(E.a,{exact:!0,path:"/rockets",component:L}),l.a.createElement(E.a,{exact:!0,path:"/dragons",component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=[];var G=[];var J=[];var K=[];var Y=Object(k.b)({info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return e=t.payload;default:return e}},launches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LAUNCHES_INFO":return e=t.payload;default:return e}},rockets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROCKETS_INFO":return e=t.payload;default:return e}},dragons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRAGONS_INFO":return e=t.payload;default:return e}}}),V=Object(k.c)(Y);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x.a,{store:V},l.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.6e4f7447.chunk.js.map