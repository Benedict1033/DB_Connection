"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[154],{8957:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(9302);function l(){const e=(0,t.Z)();e.notify.setDefaults({position:"bottom-right",timeout:2e3});const a=a=>{e.notify({color:"gray",message:a||"",html:!0})},n=a=>{e.notify({type:"positive",message:a||"Ok!",html:!0})},l=a=>{e.notify({type:"negative",message:a||"Fail",html:!0})};return{notifyDefault:a,notifySuccess:n,notifyError:l}}},7154:(e,a,n)=>{n.r(a),n.d(a,{default:()=>y});var t=n(9835);const l={class:"q-pa-md row items-start q-gutter-md"},i=(0,t._)("div",{class:"text-h6"},"這是API Mapping頁",-1),o=(0,t._)("div",{class:"text-subtitle2"},"需要Sys Admin的權限",-1),u=(0,t._)("div",{class:"text-h6"},"還沒開始實作",-1),s=(0,t._)("div",{class:"text-subtitle2"},"下下禮拜會開始實作",-1);function d(e,a,n,d,c,r){const v=(0,t.up)("q-icon"),g=(0,t.up)("q-toolbar-title"),m=(0,t.up)("q-toolbar"),D=(0,t.up)("q-card-section"),p=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(m,{class:"bg-grey-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,{name:"send"}),(0,t.Uk)("   API Mapping")])),_:1})])),_:1}),(0,t._)("div",l,[(0,t.Wm)(p,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[i,o])),_:1})])),_:1}),(0,t.Wm)(p,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[u,s])),_:1})])),_:1})])],64)}var c=n(499),r=n(8957);const v={name:"IndexPage",data(){const{notifyError:e}=(0,r.Z)(),a=(0,c.iH)(!1),n=(0,c.iH)(!1),l=(0,c.iH)([]),i=(0,c.iH)(!1),o=(0,c.iH)([]),u=(0,c.iH)([]),s=(0,c.iH)([]),d=(0,c.iH)([{name:"DBName",align:"left",label:"DBName",field:"DBName"},{name:"Deadline",align:"left",label:"Deadline",field:"Deadline",sortable:!0}]);(0,t.bv)((async()=>{const e=await fetch("https://localhost:44350/api/query_db");s.value=await e.json(),o.value=[...s.value].reverse()}));const v=()=>{if(""===d.value.DBName||""===d.value.ConnectiongString||""===d.value.ConnectionString2||""===d.value.Deadline||""===d.value.Deadline2)e("Value can't be null");else{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({DBName:d.value.DBName,ConnectiongString:d.value.ConnectiongString,ConnectiongString2:d.value.ConnectionString2,Deadline:d.value.Deadline,Deadline2:d.value.Deadline2})};fetch("https://localhost:44350/api/create_db",a).then((e=>e.text())).then((a=>{'"Create Success"'===a?window.location.reload():e(a)}))}},g=()=>{if(""===d.value.DBName||""===d.value.ConnectiongString||""===d.value.ConnectionString2||""===d.value.Deadline||""===d.value.Deadline2)e("Value can't be null");else{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({DBName:d.value.DBName,ConnectiongString:d.value.ConnectiongString,ConnectiongString2:d.value.ConnectionString2,Deadline:d.value.Deadline,Deadline2:d.value.Deadline2})};fetch("https://localhost:44350/api/update_db",a).then((e=>e.text())).then((a=>{'"Updated Success"'===a?window.location.reload():e(a)}))}},m=e=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({DBName:e,ConnectiongString:d.value.ConnectiongString,ConnectiongString2:d.value.ConnectionString2,Deadline:d.value.Deadline,Deadline2:d.value.Deadline2})};fetch("https://localhost:44350/api/delete_db",a).then(window.location.reload())},D=e=>{window.confirm("確定要刪除此項目嗎？")&&this.deleteRow(e)},p=()=>{i.value?(l.value=s.value.map((e=>e.DBName)),i.value=!0):(l.value=[],i.value=!1)},h=()=>{d.value.DBName="",d.value.ConnectiongString="",d.value.ConnectionString2="",d.value.Deadline="",d.value.Deadline2="",a.value=!a.value,n.value=!1},f=e=>{u.value=this.rows.find((a=>a.DBName===e)),d.value.DBName=u.value.DBName,d.value.ConnectiongString=u.value.ConnectiongString,d.value.ConnectionString2=u.value.BackupConnectiongString,d.value.Deadline=u.value.Deadline,d.value.Deadline2=u.value.BackupDeadline,a.value=!a.value,n.value=!0};return{selected:(0,c.iH)([]),columns:d,rows:o,addData:v,updateData:g,deleteRow:m,confirmDelete:D,expanded:l,isAllCollapsed:i,toggleExpandAll:p,show_dialog:a,showDialog:h,isEditing:n,showDetails:f}}};var g=n(1639),m=n(1663),D=n(1973),p=n(2857),h=n(4458),f=n(3190),S=n(9984),C=n.n(S);const w=(0,g.Z)(v,[["render",d]]),y=w;C()(v,"components",{QToolbar:m.Z,QToolbarTitle:D.Z,QIcon:p.Z,QCard:h.Z,QCardSection:f.Z})}}]);