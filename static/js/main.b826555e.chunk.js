(this.webpackJsonpbeergeek=this.webpackJsonpbeergeek||[]).push([[0],{17:function(e,t,r){e.exports={beer_detail:"BeerDetail_beer_detail__3zwhb",beer_detail_info:"BeerDetail_beer_detail_info__2nIeM",beer_detail_desc:"BeerDetail_beer_detail_desc__2iYnX",beer_detail_tips:"BeerDetail_beer_detail_tips__2nf9g",beer_detail_foods:"BeerDetail_beer_detail_foods__31xpx"}},24:function(e,t,r){e.exports={login_container:"Login_login_container__FZG4y",login_btn:"Login_login_btn__2T1-a",login_error:"Login_login_error__3ORwV"}},47:function(e,t,r){},7:function(e,t,r){e.exports={layout:"Layout_layout__1nVz4",page_container:"Layout_page_container__3kVUm",header:"Layout_header__27HXS",logo:"Layout_logo__gXj3A",menu:"Layout_menu__3z6hQ",nav:"Layout_nav__1JLRV",username:"Layout_username__1WdfT",logout_btn:"Layout_logout_btn__1f_C_",loading_indicator:"Layout_loading_indicator__10N7o",not_found:"Layout_not_found__bzyy1"}},9:function(e,t,r){e.exports={beers:"Beers_beers__AZSk8",search_form:"Beers_search_form__2AUb-",search_paging:"Beers_search_paging__rZMyH",load_nav_btn:"Beers_load_nav_btn__Cat2G",nav_btn:"Beers_nav_btn__301F-",clear_btn:"Beers_clear_btn__3pxka",beer_list:"Beers_beer_list__1nvRX",card:"Beers_card__3Es4c",beer_info:"Beers_beer_info__1Qv5y",beer_title:"Beers_beer_title__upZT1",beer_abv:"Beers_beer_abv__nt4rm",high_abv:"Beers_high_abv__1xkVf"}},94:function(e,t,r){"use strict";r.r(t);r(47);var n=r(0),a=r.n(n),c=r(21),i=r.n(c),s=r(18),o=r(3),l=r(14),u=r(40),b=r(10),d=(r(42),r(2)),f=r.n(d),m=r(6),j=r(16),h=function(e){j.b.error(e)},p=Object(l.b)({name:"apiRequestsSlice",initialState:{errors:[],loadingStates:[]},reducers:{setLoading:function(e,t){var r=t.payload,n=r.actionName,a=r.actionState,c=e.loadingStates.find((function(e){return e.action===n}));c?c.loading=a:e.loadingStates.push({action:n,loading:a})},addError:function(e,t){var r=t.payload,n=r.actionName,a=r.error,c=e.errors.find((function(e){return e.action===n}));c?(c.error=a,c.hasError=!0):e.errors.push({action:n,error:a,hasError:!0})},removeError:function(e,t){var r=t.payload;e.errors=e.errors.filter((function(e){return e.action!==r.actionName}))},clearErrors:function(e){e.errors=[]}}}),_=p.actions,v=_.setLoading,g=_.addError,O=_.removeError,x=p.reducer,y=function(e){var t=e.dispatch,r=e.getState;return function(e){return function(n){return"function"!==typeof n?e(n):function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(v({actionName:n.name,actionState:!0})),e.next=4,n(t,r);case 4:t(v({actionName:n.name,actionState:!1})),e.next=13;break;case 7:throw e.prev=7,e.t0=e.catch(0),t(v({actionName:n.name,actionState:!1})),t(g({actionName:n.name,error:e.t0.message})),h(e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}}},N=r(12),w=r(15),k=r.n(w),E=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://yesno.wtf/api");case 2:return t=e.sent,e.abrupt("return","yes"===t.data.answer);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){localStorage.setItem("userData",JSON.stringify(e))},C=k.a.create({baseURL:"https://api.punkapi.com/v2"});C.interceptors.response.use((function(e){return e.status>=400&&h(e.statusText),e}),(function(e){if(h(e.message),!k.a.isCancel(e))return Promise.reject(e)}));var B=function(){var e=Object(m.a)(f.a.mark((function e(t,r){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/beers?".concat(t),{cancelToken:r});case 2:return a=e.sent,e.abrupt("return",null!==(n=null===a||void 0===a?void 0:a.data)&&void 0!==n?n:[]);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/beers/".concat(t));case 2:return n=e.sent,e.abrupt("return",1===(null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.length)?n.data[0]:void 0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L={beers:[],filters:{},paging:{pageSize:12,pageNumber:1,hasMore:!0},hasQueryParamsChanged:!0},F=Object(l.b)({name:"beersSlice",initialState:L,reducers:{fetchBeersSuccess:function(e,t){var r=t.payload,n=r.beers,a=r.hasMore;e.paging.hasMore=a,e.beers=n,e.beer=void 0,e.hasQueryParamsChanged=!1},fetchBeerSuccess:function(e,t){var r=t.payload.beer;e.beer=r,e.hasQueryParamsChanged=!1},setNameFilter:function(e,t){var r=t.payload;e.filters.name=r,e.paging.pageNumber=1,e.beers=[],e.hasQueryParamsChanged=!0},setMinAlcFilter:function(e,t){var r=t.payload;e.filters.minAlcohol=r,e.paging.pageNumber=1,e.beers=[],e.hasQueryParamsChanged=!0},setMaxAlcFilter:function(e,t){var r=t.payload;e.filters.maxAlcohol=r,e.paging.pageNumber=1,e.beers=[],e.hasQueryParamsChanged=!0},clearFilters:function(e){e.filters.name=void 0,e.filters.minAlcohol=void 0,e.filters.maxAlcohol=void 0,e.paging.pageNumber=1,e.beers=[],e.hasQueryParamsChanged=!0},setNextPage:function(e,t){var r=t.payload;e.paging.pageNumber=r,e.beers=[],e.hasQueryParamsChanged=!0},resetBeers:function(){return L}}}),M=F.actions,P=M.fetchBeersSuccess,z=M.fetchBeerSuccess,Q=F.actions,T=Q.setNameFilter,D=Q.setMinAlcFilter,I=Q.setMaxAlcFilter,R=Q.setNextPage,V=Q.clearFilters,q=Q.resetBeers,Z=function(e){return e.beers},J=function(e){return e.beers},X=function(e){return e.beers.hasQueryParamsChanged},H=function(e){return e.beers.paging},U=function(e){return e.beers.filters},G=F.reducer,W=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(r,n){var a,c,i,s,o,l,u,b,d,m,h;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().beers,c=a.filters,i=c.name,s=c.minAlcohol,o=c.maxAlcohol,l=a.paging,u=l.pageSize,b=l.pageNumber,d=$(u,b,i,s,o),t.next=4,B(d,e);case 4:m=t.sent,h=!(m.length<u),r(P({beers:m,hasMore:h})),0===m.length&&(f="Sorry bro, nothing to show!",j.b.warn(f));case 8:case"end":return t.stop()}var f}),t)})));return function(e,r){return t.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(r){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:n=t.sent,r(z({beer:n}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(e,t,r,n,a){return(e?"&per_page=".concat(e):"")+(t?"&page=".concat(t):"")+((r?"&beer_name=".concat(r):"")+(n?"&abv_gt=".concat(n):"")+(a?"&abv_lt=".concat(a):""))},K=function(){var e=localStorage.getItem("userData");return e?JSON.parse(e):null}(),ee={token:null===K||void 0===K?void 0:K.token,userName:null===K||void 0===K?void 0:K.userName},te=Object(l.b)({name:"authSlice",initialState:ee,reducers:{authSuccess:function(e,t){var r=t.payload,n=r.userName,a=r.token;e.userName=n,e.token=a,S({token:a,userName:n})},logoutSuccess:function(e){e.userName=void 0,e.token=void 0,S({token:void 0,userName:void 0})}}}),re=te.actions,ne=re.authSuccess,ae=re.logoutSuccess,ce=function(e){return e.auth.userName},ie=function(e){return e.auth.token},se=te.reducer,oe=function(e,t){return function(){var t=Object(m.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:a=t.sent,n(a?ne({userName:e,token:"fake_valid_token"}):g({actionName:r.name,error:"Invalid email or password."}));case 4:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()},le=function(e){return Object(N.c)({router:Object(s.b)(e),apiRequests:x,auth:se,beers:G})},ue=Object(b.a)(),be=le(ue);var de=Object(l.a)({reducer:be,middleware:function(e){var t=e().prepend(y).concat(Object(u.a)(ue));return t},devTools:false}),fe=function(){return{isAuthenticated:!!Object(o.e)(ie),userName:Object(o.e)(ce)}},me=r(7),je=r.n(me),he=r(1),pe=function(){var e=Object(o.d)(),t=fe(),r=t.isAuthenticated,a=t.userName,c=Object(n.useMemo)((function(){return r?a:""}),[r,a]);return Object(he.jsxs)("nav",{className:je.a.nav,children:[Object(he.jsx)("p",{className:je.a.username,children:c}),Object(he.jsx)("ul",{children:Object(he.jsx)("li",{children:r&&Object(he.jsx)("span",{className:je.a.logout_btn,onClick:function(){return e(function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ae()),t(q()),t(O({actionName:oe.name}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})})})]})};function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var ge=n.createElement("g",null),Oe=n.createElement("g",null),xe=n.createElement("g",null),ye=n.createElement("g",null),Ne=n.createElement("g",null),we=n.createElement("g",null),ke=n.createElement("g",null),Ee=n.createElement("g",null),Se=n.createElement("g",null),Ce=n.createElement("g",null),Be=n.createElement("g",null),Ae=n.createElement("g",null),Le=n.createElement("g",null),Fe=n.createElement("g",null),Me=n.createElement("g",null);function Pe(e,t){var r=e.title,a=e.titleId,c=ve(e,["title","titleId"]);return n.createElement("svg",_e({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 501.386 501.386",style:{enableBackground:"new 0 0 501.386 501.386"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,n.createElement("path",{style:{fill:"#E2E2E2"},d:"M465.056,190.007h-98.22v227.788h98.22c12.539,0,21.943-10.449,21.943-21.943V211.949 C486.999,200.456,477.595,190.007,465.056,190.007z M453.563,384.358h-53.29V223.443h53.29V384.358z"}),n.createElement("path",{style:{fill:"#FFD15C"},d:"M399.228,114.774v364.669c0,11.494-9.404,21.943-21.943,21.943H62.771 c-11.494,0-21.943-9.404-21.943-21.943V114.774H399.228z"}),n.createElement("g",null,n.createElement("path",{style:{fill:"#F8B64C"},d:"M321.905,190.007c-13.584,0-25.078,11.494-25.078,25.078v208.98 c0,13.584,11.494,25.078,25.078,25.078c13.584,0,25.078-11.494,25.078-25.078v-208.98 C346.983,201.501,335.489,190.007,321.905,190.007z"}),n.createElement("path",{style:{fill:"#F8B64C"},d:"M220.55,190.007c-13.584,0-25.078,11.494-25.078,25.078v208.98 c0,13.584,11.494,25.078,25.078,25.078s25.078-11.494,25.078-25.078v-208.98C244.583,201.501,234.134,190.007,220.55,190.007z"}),n.createElement("path",{style:{fill:"#F8B64C"},d:"M118.15,190.007c-13.584,0-25.078,11.494-25.078,25.078v208.98 c0,13.584,11.494,25.078,25.078,25.078c13.584,0,25.078-11.494,25.078-25.078v-208.98 C143.228,201.501,131.734,190.007,118.15,190.007z"})),n.createElement("path",{style:{fill:"#F2F2F2"},d:"M401.318,136.717c0,0,79.412-50.155-14.629-107.624c0,0-51.2-22.988-96.131,6.269 c0,0-80.457-83.592-167.184,6.269c0,0-61.649-29.257-89.861,8.359c-7.314,11.494-10.449,27.167-7.314,41.796 c3.135,18.808,7.314,55.38-3.135,102.4c-10.449,49.11-9.404,87.771-7.314,106.58c1.045,11.494,14.629,41.796,47.02,33.437 c18.808-4.18,29.257-24.033,30.302-42.841c2.09-27.167,6.269-77.322,7.314-136.882c0,0,1.045-18.808,25.078-18.808L401.318,136.717z "}),ge,Oe,xe,ye,Ne,we,ke,Ee,Se,Ce,Be,Ae,Le,Fe,Me)}var ze=n.forwardRef(Pe),Qe=(r.p,function(){return Object(he.jsx)("header",{className:je.a.header,children:Object(he.jsxs)("div",{className:je.a.menu,children:[Object(he.jsx)("a",{href:"/beers",title:"Beers",children:Object(he.jsx)(ze,{className:je.a.logo})}),Object(he.jsx)(pe,{})]})})}),Te=r(5),De=r(46),Ie=r(23),Re=function(e){return e.apiRequests},Ve=Object(Ie.a)(Re,(function(e){return e.errors})),qe=Object(Ie.a)(Re,(function(e){return e.loadingStates})),Ze=function(e,t){return t},Je=Object(Ie.a)(Ve,Ze,(function(e,t){return e.find((function(e){return e.action===t}))})),Xe=Object(Ie.a)(qe,Ze,(function(e,t){return e.find((function(e){return e.action===t}))})),He=function(e){var t,r=Object(o.e)((function(t){return Je(t,e)}));return{hasError:null!==(t=null===r||void 0===r?void 0:r.hasError)&&void 0!==t&&t,error:null===r||void 0===r?void 0:r.error}},Ue=r(24),Ge=r.n(Ue),We=function(){var e=Object(o.d)(),t=Object(De.a)(),r=t.register,n=t.handleSubmit,a=t.errors,c=He(oe.name),i=c.hasError,s=c.error,l=function(){var t=Object(m.a)(f.a.mark((function t(r){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=r.email,r.password,e(oe(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(he.jsx)("div",{className:Ge.a.login_container,children:Object(he.jsxs)("form",{onSubmit:n(l),children:[Object(he.jsx)("h3",{children:"Login"}),Object(he.jsx)("input",{name:"email",ref:r({validate:{isRequired:function(e){return!!e||"Email is required."}},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address."}}),placeholder:"Email"}),Object(he.jsx)("input",{name:"password",ref:r({required:!0}),type:"password",placeholder:"Password"}),Object(he.jsx)("div",{children:Object(he.jsx)("input",{className:Ge.a.login_btn,type:"submit"})}),Object(he.jsxs)("div",{className:Ge.a.login_error,children:[Object(he.jsx)("p",{children:i&&s}),Object(he.jsx)("p",{children:a.email&&a.email.message}),Object(he.jsx)("p",{children:a.password&&"Password is required."})]})]})})},Ye=r(27),$e=function(e){var t,r=Object(o.e)((function(t){return Xe(t,e)}));return null!==(t=null===r||void 0===r?void 0:r.loading)&&void 0!==t&&t},Ke=r(44),et=function(){return Object(he.jsx)("div",{className:je.a.loading_indicator,children:Object(he.jsx)(Ke.ThreeDots,{width:"140",height:"64",fill:"#f0a500"})})},tt=r(17),rt=r.n(tt),nt=function(){var e=Object(o.d)(),t=Object(Te.f)().id,r=$e(Y.name),a=Object(o.e)(J).beer;return Object(n.useEffect)((function(){e(Y(+t))}),[e,t]),r?Object(he.jsx)(et,{}):a?Object(he.jsxs)("div",{className:rt.a.beer_detail,children:[Object(he.jsx)("img",{src:a.image_url,alt:a.name}),Object(he.jsxs)("div",{className:rt.a.beer_detail_info,children:[Object(he.jsxs)("h3",{children:[a.name," - ",a.abv," %"]}),Object(he.jsx)("p",{className:rt.a.beer_detail_desc,children:a.description}),Object(he.jsxs)("p",{className:rt.a.beer_detail_tips,children:["Brewers tips: ",a.brewers_tips]}),Object(he.jsxs)("div",{className:rt.a.beer_detail_foods,children:[Object(he.jsx)("h3",{children:"Food pairings"}),a.food_pairing.map((function(e,t){return Object(he.jsx)("p",{children:e},t)}))]}),Object(he.jsx)(Ye.a,{to:"/beers",children:"Back"})]})]}):null},at=r(9),ct=r.n(at),it=r(45),st=r.n(it),ot=function(e){var t=e.beer,r=e.onClick;return Object(he.jsxs)("div",{onClick:function(){return r(t.id)},className:ct.a.card,children:[Object(he.jsx)(st.a,{height:80,children:Object(he.jsx)("img",{src:t.image_url,alt:t.name})}),Object(he.jsxs)("div",{className:ct.a.beer_info,children:[Object(he.jsx)("p",{className:ct.a.beer_title,children:t.name}),Object(he.jsxs)("p",{className:ct.a.beer_abv+(t.abv>5?" ".concat(ct.a.high_abv):""),children:[t.abv,"%"]})]})]})},lt=function(){var e=Object(o.d)(),t=He(W.name).hasError,r=$e(W.name),a=Object(o.e)(X),c=Object(o.e)(U),i=Object(o.e)(H),s=Object(o.e)(Z).beers,l=c.name,u=c.minAlcohol,b=c.maxAlcohol,d=i.pageNumber;Object(n.useEffect)((function(){if(a&&!t){var r=k.a.CancelToken.source(),n=r.cancel,c=r.token,i=setTimeout((function(){return e(W(c))}),600);return function(){n("Cancel prev. request"),clearTimeout(i)}}}),[e,a,t,l,u,b,d]);var f=Object(n.useCallback)((function(e){ue.push("beers/".concat(e))}),[]);return r?Object(he.jsx)(et,{}):Object(he.jsx)("div",{className:ct.a.beer_list,children:s.map((function(e,t){return Object(he.jsx)(ot,{beer:e,onClick:f},t)}))})},ut=function(){var e=Object(o.d)(),t=Object(o.e)(U),r=Object(o.e)(H),n=t.name,a=t.minAlcohol,c=t.maxAlcohol,i=r.hasMore,s=r.pageNumber;return Object(he.jsxs)("div",{className:ct.a.search_form,children:[Object(he.jsx)("button",{disabled:1===s,className:ct.a.nav_btn,onClick:function(){return e(R(s-1))},children:"Prev"}),Object(he.jsx)("input",{name:"name",placeholder:"Find me ...",value:null!==n&&void 0!==n?n:"",onChange:function(t){return e(T(t.target.value))}}),Object(he.jsx)("input",{name:"minAlcohol",type:"number",placeholder:"min",min:"0",max:"100",value:null!==a&&void 0!==a?a:"",onChange:function(t){return e(D(+t.target.value))}}),Object(he.jsx)("input",{name:"maxAlcohol",type:"number",placeholder:"max",min:"0",max:"100",value:null!==c&&void 0!==c?c:"",onChange:function(t){return e(I(+t.target.value))}}),Object(he.jsx)("button",{className:ct.a.clear_btn,title:"Clear filters",onClick:function(){return e(V())},children:"\u3024"}),Object(he.jsx)("button",{disabled:!i,className:ct.a.nav_btn,onClick:function(){return e(R(s+1))},children:"Next"})]})},bt=function(){return Object(he.jsxs)("div",{className:ct.a.beers,children:[Object(he.jsx)(ut,{}),Object(he.jsx)(lt,{})]})},dt=function(){return Object(he.jsxs)("div",{className:je.a.not_found,children:[Object(he.jsx)("p",{children:"404"}),Object(he.jsx)("p",{children:"No no no!"})]})},ft=function(){return fe().isAuthenticated?Object(he.jsx)("div",{className:je.a.page_container,children:Object(he.jsxs)(Te.c,{children:[Object(he.jsx)(Te.a,{exact:!0,path:["/","/beers","/beergeek"],children:Object(he.jsx)(bt,{})}),Object(he.jsx)(Te.a,{exact:!0,path:["/beers/:id","/beergeek/beers/:id"],children:Object(he.jsx)(nt,{})}),Object(he.jsx)(Te.a,{children:Object(he.jsx)(dt,{})})]})}):Object(he.jsx)("div",{className:je.a.page_container,children:Object(he.jsx)(We,{})})},mt=function(){return Object(he.jsxs)("div",{className:je.a.layout,children:[Object(he.jsx)(Qe,{}),Object(he.jsx)(ft,{}),Object(he.jsx)(j.a,{delay:3e3})]})},jt=function(){return Object(he.jsx)(a.a.StrictMode,{children:Object(he.jsx)(o.a,{store:de,children:Object(he.jsx)(s.a,{history:ue,children:Object(he.jsx)(mt,{})})})})};i.a.render(Object(he.jsx)(jt,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.b826555e.chunk.js.map