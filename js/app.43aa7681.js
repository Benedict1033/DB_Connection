(()=>{"use strict";var e={8027:(e,t,a)=>{var r=a(1957),n=a(1947),o=a(499),i=a(9835);const s={id:"q-app"};function l(e,t,a,r,n,o){const l=(0,i.up)("router-view"),u=(0,i.up)("snackBar");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(l),(0,i.Wm)(u)])}var u=a(4170);const c=(0,o.qj)({type:"",message:"",duration:1e3,isShow:!1}),d=(0,o.qj)({applyId:0,requestNo:""}),p=(0,o.qj)({userName:"",password:"",userID:0,userRights:[]}),m=(0,o.qj)({formUrl:"",query:{}}),f=(e,t,a,r)=>{c.type=e,c.message=t,c.duration=a,c.isShow=r},h=(e,t)=>{d.applyId=e,d.requestNo=t},g=e=>{p.password="",p.userID=null!=e&&void 0!=e[0]?e[0].ID:0,p.userRights=e},A=(e,t)=>{m.formUrl=e,m.query=t},v=e=>u.ZP.formatDate(e,"YYYY-MM-DD HH:mm:ss"),E={snackBar:(0,o.OT)(c),apply:(0,o.OT)(d),userInfo:p,history:(0,o.OT)(m),setSnackBar:f,setApplyData:h,setUserRights:g,setToUrl:A,dateformat:v};var y=a(7524),T=a(9302),O={mixinData:{data(){return{}},computed:{autoHeight(){return function(e){if(e){var t=window.innerHeight;return t-e+"px"}return window.innerHeight+"px"}},autoWidth(){return function(e){if(e){var t=document.body.clientWidth;return t-e+"px"}return document.body.clientWidth+"px"}},getOperInfo(e){return EventusGlobal.getOperInfo(e)}},filters:{formatType(e){return O.formatType(e)},formatLocation(e){return O.formatLocation(e)},formatLocal(e){return EventusGlobal.formatLocal(e)},formatAlertStatus(e){return O.formatAlertStatus(e)},formatBool(e){return O.formatBool(e)},formatCommas(e){if(e>=0)return O.formatCommas(e)},trimText(e){if(""!=e&&e){var t=e.trim();return t=t.replace(/ /g,""),t.replace(/ /g,"")}}}},trimText(e){if(""!=e&&e){var t=e.trim();return t=t.replace(/ /g,""),t.replace(/ /g,"")}},oper(){return JSON.parse(sessionStorage.getItem("jsonObject"))},getOperInfo(e){var t=sessionStorage.getItem("jsonObject");if(t){var a=JSON.parse(t);e.oper=a.operId,e.deptId=a.deptId,e.deptName=a.deptName}return e},setConfirm(e,t){var a={dialog:!0};a.message=e,a.methods=t},setAlert(e,t="error",a=undefined){var r={dialog:!0};r.message=e,r.width="40%","success"==t?(r.title="Welcome",r.icon="mdi-emoticon-happy-outline",r.color="green"):"error"==t?(r.title="ERROR",r.icon="mdi-emoticon-dead-outline",r.color="red"):void 0!=a&&(r.title=a.title,r.icon=a.icon,r.color=a.color)},setSnackBar(e,t="negative",a="",r=6e3){E.setSnackBar(t,e,r)},isEmptyObj(e){return 0===Object.keys(e).length&&e.constructor===Object},formatCommas(e){var t=parseInt(e);if(t){var a=t.toString().split(".");return a[0].length>=4&&(a[0]=a[0].replace(/(\d)(?=(\d{3})+$)/g,"$1,")),a[1]&&a[1].length>=4&&(a[1]=a[1].replace(/(\d{3})/g,"$1 ")),a.join(".")}return""},formatBool(e){return e?"✔️":"✖️"},sleep(e){return new Promise((t=>setTimeout(t,e)))},arrayDiff(e,t){return t.filter((t=>e.indexOf(t)<0))},getApConfig(e){var t=O.oper().apConfig;return void 0==e?t:t[e]}};const b=O,S=((0,T.Z)(),y.Z.create({headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},url:"https://localhost:44350//api//",method:"post",timeout:18e4}));S.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),b.setSnackBar(e.message+", URL:"+e.request.responseURL,"negative"),Promise.reject(e)})),S.interceptors.response.use((function(e){return e.data?e:(console.log("[axiosAPI] response false",e),b.setSnackBar(e.data.Message,"negative"),Promise.reject(e))}),(function(e){return console.log("response error",e.request),b.setSnackBar(e.message+", URL:"+e.request.responseURL,"negative"),Promise.reject(e)}));const D={instance:S};var I=a(7286);const R=(0,o.qj)({data:[],loading:!1,headers:[{name:"action"},{name:"no",align:"left",label:"No"},{name:"assetNo",align:"left",label:"Asset Number",field:"ASSETNUMBER",sortable:!0},{name:"category",align:"left",label:"Category",field:"SUBCATEGORY",sortable:!0},{name:"machine",align:"left",label:"Machine",field:"CATEGORYNAME"},{name:"brand",align:"left",label:"Brand",field:"BRAND"},{name:"model",align:"left",label:"Model",field:"MODEL_NUMBER"},{name:"machineCode",align:"left",label:"Machine Code",field:"MACHINECODE",sortable:!0},{name:"manage",align:"left",label:"Manage",field:"MANAGE",sortable:!0},{name:"realLocation",align:"left",label:"Real Location",field:"REALLOCATION_NAME",sortable:!0}],totalCount:0}),N=(0,o.qj)({ASSETS:[],FROMNAME:"",BUYERNAME:"",ID:null,REQUESTNO:"",LOCATIONID:null,LOCATIONNAME:null,BUYERID:null,STATUS:1,APPLIER:null,CREATEDATE:null,LASTUPDATOR:null,LASTUPDATEDATE:null,HOAPPROVER:null,HOAPPROVEDATE:null}),P=(0,o.qj)({locationData:[]}),C=(0,o.qj)({buyerData:[]}),B=e=>new Promise(((t,a)=>{D.instance.post("/listLocation?sUserCode="+e).then((e=>e.data.Success?(null!=e.data.Data&&e.data.Data.length>0?P.locationData=e.data.Data.filter((function(e){return"IND"==e.ATTRIBUTE4})):P.locationData=[],t("")):(j(e.data.Message),a("")))).finally((()=>a("")))})),U=()=>new Promise(((e,t)=>{D.instance.post("/listBuyer").then((a=>a.data.Success?(null!=a.data.Data&&a.data.Data.length>0?C.buyerData=a.data.Data:C.buyerData=[],e("")):(j(a.data.Message),t("")))).finally((()=>t("")))})),L=e=>(N.BUYERID=null,N.LOCATIONID=null,N.STATUS=null,N.ID=null,N.REQUESTNO=null,N.APPLIER=null,N.CREATEDATE=null,N.FROMNAME=null,N.BUYERNAME=null,R.data=[],new Promise(((t,a)=>{if(null!=e){if(void 0==e.applyId||0==e.applyId&&""==e.requestNo)return t("");var r="/GetApplicationByID/"+e.applyId;""!=e.requestNo&&(r="/GetApplicationByNo/"+e.requestNo),D.instance.post(r).then((e=>(e.data.Success?null!=e.data.Data&&(N.BUYERID=e.data.Data.BUYERID,N.LOCATIONID=e.data.Data.LOCATIONID,N.STATUS=e.data.Data.STATUS,N.ID=e.data.Data.ID,N.REQUESTNO=e.data.Data.REQUESTNO,N.APPLIER=e.data.Data.APPLIER,N.CREATEDATE=e.data.Data.CREATEDATE,N.FROMNAME=e.data.Data.FROMNAME,N.BUYERNAME=e.data.Data.BUYERNAME,R.data=e.data.Data.ASSETS):b.setSnackBar(e.data.Message),t("")))).catch((e=>(console.log(e),a(""))))}}))),w=(e,t)=>{var a="";return-2==t?a="Would you like to reject application?":-1==t&&(a="Would you like to delete application?"),new Promise(((r,n)=>{I.Z.create({title:"Confirm",message:a,cancel:!0,persistent:!0}).onOk((()=>{k(e,t).then((()=>r("resolve")))})).onCancel((()=>{}))}))},k=(e,t,a)=>{if(b.setSnackBar("reset"),null==e.LOCATIONID||""==e.LOCATIONID||0==e.LOCATIONID)b.setSnackBar("Form Location can't be empty","negative");else if(null==e.BUYERID||""==e.BUYERID||0==e.LOCATIONID)b.setSnackBar("Buyer can't be empty","negative");else{if(0!=R.data.length||1!=t&&2!=t)return new Promise(((a,r)=>{const n=I.Z.create({message:"Uploading...",progress:!0,persistent:!0,ok:!1});e.ASSETS=R.data,e.STATUS=t,e.APPLIER=e.LASTUPDATOR=E.userInfo.userName;var o="";1==t?o="The application is saved, please click confirm to send.":2==t?o="The application is sent, please wait approval from HO.":3==t?(o="The application is approved.",e.HOAPPROVER=E.userInfo.userName):-2==t?(o="The application is rejected.",e.HOAPPROVER=E.userInfo.userName):-1==t&&(o="The application is deleted."),D.instance.post("/Save",e).then((e=>{if(e.data.Success){if(null!=e.data.Data){var t="";null!=N.REQUESTNO&&void 0!=N.REQUESTNO&&""!=N.REQUESTNO||(t="Application No. "+e.data.Data.REQUESTNO),N.REQUESTNO=e.data.Data.REQUESTNO,N.ID=e.data.Data.ID,n.update({title:o,message:t,progress:!1,ok:!0})}else n.hide();a("Resolved")}else n.update({title:"The application sent error, please check with MIS.",message:e.data.Message,progress:!1,ok:!0});a("Resolved")})).catch((e=>{n.update({title:"The application sent error, please check with MIS.",message:e,progress:!1,ok:!0}),n.hide(),r("Rejected")}))}));b.setSnackBar("Asset can't be empty","negative")}},j=(e,t="negative")=>{b.setSnackBar(e,t)},M={gridList:R,formData:N,listLocation:P,listBuyer:C,statusOptions:(0,o.OT)([{id:"1",desc:"Save Temp"},{id:"2",desc:"Waiting HO Approve"},{id:"3",desc:"HO Approved"},{id:"-1",desc:"Deleted"},{id:"-2",desc:"HO Rejected"}]),actGetApplication:L,actSave:k,actSetSanckBar:j,actDelete:w,actGetLocation:B,actGetBuyer:U};function q(e,t,a,r,n,o){return(0,i.wg)(),(0,i.iD)("div")}const Y={setup(){const e=(0,T.Z)(),t=(0,i.f3)("mapGlobalState"),{snackBar:a}=t;return(0,i.YP)((()=>a.message),(function(){"reset"!=a.message&&e.notify({group:"my-group",position:"center",type:a.type,message:a.message,timeout:a.duration})}),{deep:!0}),{...(0,o.BK)(a)}}};var H=a(1639);const x=(0,H.Z)(Y,[["render",q],["__scopeId","data-v-7ee798e4"]]),_=x,G={name:"App",components:{snackBar:_},setup(){(0,i.JJ)("mapGlobalState",E),(0,i.JJ)("mapApplcation",M)}},Z=(0,H.Z)(G,[["render",l]]),Q=Z;var F=a(1502),W=a(3340),J=a(8339),K=a(9613);const V=[{path:"/",component:()=>Promise.all([a.e(736),a.e(967)]).then(a.bind(a,4967)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(773)]).then(a.bind(a,8773))},{path:"home",component:()=>a.e(498).then(a.bind(a,2498))},{path:"Management",component:()=>Promise.all([a.e(736),a.e(280)]).then(a.bind(a,4280)),meta:{requireAuth:!0,permission:["Admin","DBA"]}},{path:"login",component:()=>Promise.all([a.e(736),a.e(773)]).then(a.bind(a,8773))},{path:"Mapping",component:()=>Promise.all([a.e(736),a.e(666)]).then(a.bind(a,7666)),meta:{requireAuth:!0,permission:["Admin","DBA"]}},{path:"Role",component:()=>Promise.all([a.e(736),a.e(291)]).then(a.bind(a,3291)),meta:{requireAuth:!0,permission:["Admin"]}},{path:"Right",component:()=>Promise.all([a.e(736),a.e(847)]).then(a.bind(a,6847))},{path:"API",component:()=>Promise.all([a.e(736),a.e(191)]).then(a.bind(a,5191)),meta:{requireAuth:!0,permission:["Admin","SysAdmin"]}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(862)]).then(a.bind(a,1862))}],$=V,X=(0,W.BC)((function(){const e=J.r5,t=(0,J.p7)({routes:$,history:e("")});return t.beforeEach(((e,t,a)=>{let r=K.Z.getItem("Login"),n=K.Z.getItem("Right"),o=e.meta.permission;r?"/login"!=E.history.formUrl.toLowerCase()&&"/"!==E.history.formUrl.toLowerCase()&&""!==E.history.formUrl.toLowerCase()?a({path:E.history.formUrl,query:E.history.query}):"/login"===e.path.toLowerCase()||"/"===e.path.toLowerCase()?a({path:"Home"}):o&&o[0]!==n&&o[1]!==n&&o[2]!==n?a({path:"/Right"}):a():(void 0!=e.fullPath&&""!=e.fullPath&&"/"!=e.fullPath&&"/login"!=e.fullPath&&E.setToUrl(e.path,e.query),"/login"===e.path.toLowerCase()?a():a({path:"/login"}))})),t}));async function z(e,t){const r=e(Q);r.use(n.Z,t);const i="function"===typeof F["default"]?await(0,F["default"])({}):F["default"],{storeKey:s}=await Promise.resolve().then(a.bind(a,1502)),l=(0,o.Xl)("function"===typeof X?await X({store:i}):X);return i.$router=l,{app:r,store:i,storeKey:s,router:l}}var ee=a(4328);const te={config:{},plugins:{Notify:ee.Z}};async function ae({app:e,router:t,store:a,storeKey:r}){e.use(t),e.use(a,r),e.mount("#q-app")}z(r.ri,te).then(ae)},1502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(3340),n=a(3100);const o=(0,r.h)((function(){const e=(0,n.MT)({modules:{},strict:!1});return e}))}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,(()=>{var e=[];a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{191:"326fa62a",280:"f7793564",291:"20d7d00d",498:"6ad1383e",666:"a38dfe19",773:"1c3c213b",847:"913268e7",862:"43e7f1f5",967:"a43932a7"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{191:"d9a54dca",280:"560ea8f2",498:"734ac972",666:"d9a54dca",967:"1fd2283f"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-project:";a.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[n];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(a))),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=i,o.href=t,a?a.parentNode.insertBefore(o,a.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],o=n.getAttribute("data-href");if(o===e||o===t)return n}},r=r=>new Promise(((n,o)=>{var i=a.miniCssF(r),s=a.p+i;if(t(i,s))return n();e(r,s,null,n,o)})),n={143:0};a.f.miniCss=(e,t)=>{var a={191:1,280:1,498:1,666:1,967:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((a,r)=>n=e[t]=[a,r]));r.push(n[2]=o);var i=a.p+a.u(t),s=new Error,l=r=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,s,l]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var c=l(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(8027)));r=a.O(r)})();