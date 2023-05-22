(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{1274:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return F}});var a=r(1451),i=r(4184),o=r.n(i),l=r(8423),s=r(7294),d=r(3124),c=r(7968),u=r(5503);let f=e=>{let{componentCls:t,colorBgContainer:r,colorBgBody:n,colorText:a}=e;return{[`${t}-sider-light`]:{background:r,[`${t}-sider-trigger`]:{color:a,background:r},[`${t}-sider-zero-width-trigger`]:{color:a,background:r,border:`1px solid ${n}`,borderInlineStart:0}}}},g=e=>{let{antCls:t,componentCls:r,colorText:n,colorTextLightSolid:a,colorBgHeader:i,colorBgBody:o,colorBgTrigger:l,layoutHeaderHeight:s,layoutHeaderPaddingInline:d,layoutHeaderColor:c,layoutFooterPadding:u,layoutTriggerHeight:g,layoutZeroTriggerSize:h,motionDurationMid:m,motionDurationSlow:p,fontSize:b,borderRadius:x}=e;return{[r]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:o,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},[`${r}-sider`]:{position:"relative",minWidth:0,background:i,transition:`all ${m}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${t}-menu${t}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:g},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:g,color:a,lineHeight:`${g}px`,textAlign:"center",background:l,cursor:"pointer",transition:`all ${m}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:s,insetInlineEnd:-h,zIndex:1,width:h,height:h,color:a,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:i,borderStartStartRadius:0,borderStartEndRadius:x,borderEndEndRadius:x,borderEndStartRadius:0,cursor:"pointer",transition:`background ${p} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${p}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-h,borderStartStartRadius:x,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:x}}}}},f(e)),{"&-rtl":{direction:"rtl"}}),[`${r}-header`]:{height:s,paddingInline:d,color:c,lineHeight:`${s}px`,background:i,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:u,color:n,fontSize:b,background:o},[`${r}-content`]:{flex:"auto",minHeight:0}}};var h=(0,c.Z)("Layout",e=>{let{colorText:t,controlHeightSM:r,controlHeight:n,controlHeightLG:a,marginXXS:i}=e,o=1.25*a,l=(0,u.TS)(e,{layoutHeaderHeight:2*n,layoutHeaderPaddingInline:o,layoutHeaderColor:t,layoutFooterPadding:`${r}px ${o}px`,layoutTriggerHeight:a+2*i,layoutZeroTriggerSize:a});return[g(l)]},e=>{let{colorBgLayout:t}=e;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140"}}),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let p=s.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});function b(e){let{suffixCls:t,tagName:r,displayName:n}=e;return e=>{let n=s.forwardRef((n,a)=>s.createElement(e,Object.assign({ref:a,suffixCls:t,tagName:r},n)));return n}}let x=s.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:n,className:a,tagName:i}=e,l=m(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:c}=s.useContext(d.E_),u=c("layout",r),[f,g]=h(u),p=n?`${u}-${n}`:u;return f(s.createElement(i,Object.assign({className:o()(r||p,a,g),ref:t},l)))}),y=s.forwardRef((e,t)=>{let{direction:r}=s.useContext(d.E_),[n,i]=s.useState([]),{prefixCls:c,className:u,rootClassName:f,children:g,hasSider:b,tagName:x}=e,y=m(e,["prefixCls","className","rootClassName","children","hasSider","tagName"]),v=(0,l.Z)(y,["suffixCls"]),{getPrefixCls:w}=s.useContext(d.E_),k=w("layout",c),[C,$]=h(k),j=o()(k,{[`${k}-has-sider`]:"boolean"==typeof b?b:n.length>0,[`${k}-rtl`]:"rtl"===r},u,f,$),E=s.useMemo(()=>({siderHook:{addSider:e=>{i(t=>[].concat((0,a.Z)(t),[e]))},removeSider:e=>{i(t=>t.filter(t=>t!==e))}}}),[]);return C(s.createElement(p.Provider,{value:E},s.createElement(x,Object.assign({ref:t,className:j},v),g)))}),v=b({tagName:"section",displayName:"Layout"})(y),w=b({suffixCls:"header",tagName:"header",displayName:"Header"})(x),k=b({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(x),C=b({suffixCls:"content",tagName:"main",displayName:"Content"})(x);var $=r(1413),j={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},E=r(8615),S=function(e,t){return s.createElement(E.Z,(0,$.Z)((0,$.Z)({},e),{},{ref:t,icon:j}))};S.displayName="BarsOutlined";var D=s.forwardRef(S),N=r(6171),O=r(8073);let z=e=>!isNaN(parseFloat(e))&&isFinite(e);var T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let _={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},B=s.createContext({}),H=(n=0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return`${e}${n+=1}`}),R=s.forwardRef((e,t)=>{var{prefixCls:r,className:n,trigger:a,children:i,defaultCollapsed:c=!1,theme:u="dark",style:f={},collapsible:g=!1,reverseArrow:h=!1,width:m=200,collapsedWidth:b=80,zeroWidthTriggerStyle:x,breakpoint:y,onCollapse:v,onBreakpoint:w}=e,k=T(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]);let{siderHook:C}=(0,s.useContext)(p),[$,j]=(0,s.useState)("collapsed"in k?k.collapsed:c),[E,S]=(0,s.useState)(!1);(0,s.useEffect)(()=>{"collapsed"in k&&j(k.collapsed)},[k.collapsed]);let R=(e,t)=>{"collapsed"in k||j(e),null==v||v(e,t)},Z=(0,s.useRef)();Z.current=e=>{S(e.matches),null==w||w(e.matches),$!==e.matches&&R(e.matches,"responsive")},(0,s.useEffect)(()=>{let e;function t(e){return Z.current(e)}if("undefined"!=typeof window){let{matchMedia:r}=window;if(r&&y&&y in _){e=r(`(max-width: ${_[y]})`);try{e.addEventListener("change",t)}catch(r){e.addListener(t)}t(e)}}return()=>{try{null==e||e.removeEventListener("change",t)}catch(r){null==e||e.removeListener(t)}}},[y]),(0,s.useEffect)(()=>{let e=H("ant-sider-");return C.addSider(e),()=>C.removeSider(e)},[]);let F=()=>{R(!$,"clickTrigger")},{getPrefixCls:P}=(0,s.useContext)(d.E_),L=s.useMemo(()=>({siderCollapsed:$}),[$]);return s.createElement(B.Provider,{value:L},(()=>{let e=P("layout-sider",r),d=(0,l.Z)(k,["collapsed"]),c=$?b:m,p=z(c)?`${c}px`:String(c),y=0===parseFloat(String(b||0))?s.createElement("span",{onClick:F,className:o()(`${e}-zero-width-trigger`,`${e}-zero-width-trigger-${h?"right":"left"}`),style:x},a||s.createElement(D,null)):null,v={expanded:h?s.createElement(O.Z,null):s.createElement(N.Z,null),collapsed:h?s.createElement(N.Z,null):s.createElement(O.Z,null)},w=v[$?"collapsed":"expanded"],C=null!==a?y||s.createElement("div",{className:`${e}-trigger`,onClick:F,style:{width:p}},a||w):null,j=Object.assign(Object.assign({},f),{flex:`0 0 ${p}`,maxWidth:p,minWidth:p,width:p}),S=o()(e,`${e}-${u}`,{[`${e}-collapsed`]:!!$,[`${e}-has-trigger`]:g&&null!==a&&!y,[`${e}-below`]:!!E,[`${e}-zero-width`]:0===parseFloat(p)},n);return s.createElement("aside",Object.assign({className:S},d,{style:j,ref:t}),s.createElement("div",{className:`${e}-children`},i),g||E&&y?C:null)})())}),Z=v;Z.Header=w,Z.Footer=k,Z.Content=C,Z.Sider=R;var F=Z},3215:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/AppLayout",function(){return r(5223)}])},5223:function(e,t,r){"use strict";r.r(t);var n=r(2729),a=r(5893);r(7294);var i=r(4589),o=r(5226),l=r.n(o),s=r(1274),d=r(7795);function c(){let e=(0,n._)(["\n  background-color: #008080;\n  width: 100vw;\n  height: 100vh;\n"]);return c=function(){return e},e}let{Footer:u}=s.Z;i.ZP.div(c());let f=e=>{let{children:t}=e;return(0,a.jsx)("div",{style:{backgroundColor:"#008080",marginLeft:-8,marginRight:-3,marginTop:-8,marginBottom:-10,width:"100vw",height:"100vh"},children:(0,a.jsxs)(i.f6,{theme:l(),children:[(0,a.jsx)("div",{style:{width:"100%",height:"93.8%"},children:t}),(0,a.jsx)(d.default,{})]})})};t.default=f},7795:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(2729),a=r(5893),i=r(7294),o=r(8039);function l(){let e=(0,n._)(["\n  padding: 5rem;\n  background: ",";\n"]);return l=function(){return e},e}function s(){let[e,t]=(0,i.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{bottom:"0px"},children:(0,a.jsx)(o.$Q,{style:{width:"100vw",height:"49px"},children:(0,a.jsxs)(o.o8,{style:{justifyContent:"space-between"},children:[(0,a.jsxs)("div",{style:{position:"relative",display:"inline-block"},children:[(0,a.jsxs)(o.zx,{onClick:()=>t(!e),active:e,style:{fontWeight:"bold",fontFamily:"dunggeunmo-bold"},children:[(0,a.jsx)("img",{src:"https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png",style:{paddingRight:"5px",width:"20px"}}),"Start"]}),e&&(0,a.jsxs)(o.qy,{style:{position:"absolute",left:"0",bottom:"100%",width:"30vw"},onClick:()=>t(!1),children:[(0,a.jsxs)(o.MF,{onClick:()=>window.location.href="https://github.com/9utty",children:[(0,a.jsx)("span",{role:"img","aria-label":"\uD83D\uDC68‍\uD83D\uDCBB",children:"\uD83D\uDC68‍\uD83D\uDCBB"}),(0,a.jsx)("div",{style:{fontFamily:"dunggeunmo-bold"},children:"Profile?"})]}),(0,a.jsxs)(o.MF,{onClick:()=>window.location.href="https://github.com/9utty/MenuRecommendation",children:[(0,a.jsx)("span",{role:"img","aria-label":"\uD83D\uDCC1",children:"\uD83D\uDCC1"}),(0,a.jsx)("div",{style:{fontFamily:"dunggeunmo-bold"},children:"GitHub?"})]}),(0,a.jsx)(o.Z0,{}),(0,a.jsxs)(o.MF,{disabled:!0,children:[(0,a.jsx)("span",{role:"img","aria-label":"\uD83D\uDD19",children:"\uD83D\uDD19"}),(0,a.jsx)("div",{style:{fontFamily:"dunggeunmo-bold"},children:"Logout?"})]})]})]}),(0,a.jsx)(o.oi,{placeholder:"Search...",width:150,style:{fontFamily:"dunggeunmo"}})]})})})})}r(4589).ZP.div(l(),e=>{let{theme:t}=e;return t.desktopBackground}),s.story={name:"default"}},5226:function(e){"use strict";e.exports={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"}},2729:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{_:function(){return n}})}},function(e){e.O(0,[39,889,774,888,179],function(){return e(e.s=3215)}),_N_E=e.O()}]);