(this["webpackJsonplive-slideshow"]=this["webpackJsonplive-slideshow"]||[]).push([[3],{233:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return k}));var a=i(5),n=i(1),o=i(13),s=i(0),l=i(50),r=i(43),c=i(2),b=i(3),u=i(26),d=(i(7),i(4)),j=i(35),h=i(6),O=i(36),p=function(e,t){var i,a,n,o;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((i=e.classList).remove.apply(i,Object(u.a)(t.imgFullWidth.split(" "))),(a=e.classList).add.apply(a,Object(u.a)(t.imgFullHeight.split(" ")))):((n=e.classList).remove.apply(n,Object(u.a)(t.imgFullHeight.split(" "))),(o=e.classList).add.apply(o,Object(u.a)(t.imgFullWidth.split(" ")))))};var m=s.forwardRef((function(e,t){var i=e.children,a=e.classes,n=e.className,o=(e.cols,e.component),l=void 0===o?"li":o,r=(e.rows,Object(b.a)(e,["children","classes","className","cols","component","rows"])),u=s.useRef(null);return s.useEffect((function(){!function(e,t){e&&(e.complete?p(e,t):e.addEventListener("load",(function(){p(e,t)})))}(u.current,a)})),s.useEffect((function(){var e=Object(j.a)((function(){p(u.current,a)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[a]),s.createElement(l,Object(c.a)({className:Object(d.a)(a.root,n),ref:t},r),s.createElement("div",{className:a.tile},s.Children.map(i,(function(e){return s.isValidElement(e)?"img"===e.type||Object(O.a)(e,["Image"])?s.cloneElement(e,{ref:u}):e:null}))))})),f=Object(h.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(m);function g(e){var t=e.children,i=Object(o.a)(e,["children"]);return Object(n.jsx)(f,Object(a.a)(Object(a.a)({},i),{},{children:t}))}var v=i(12),w=i(207),x=Object(w.a)((function(e){var t,i;return{gridListTile:{"&:before":{content:"''",position:"absolute",top:0,left:0,bottom:0,right:0,background:"linear-gradient(233.88deg, rgba(254, 0, 90, 0.4) 0%, rgba(255, 45, 30, 0.4) 98.91%)",WebkitTransition:"all 0.5s ease-in-out",MozTransition:"all 0.5s ease-in-out",OTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out",opacity:0,zIndex:1},"&:hover":{"&:before":{opacity:1}},"&:hover $img":{WebkitFilter:"blur(4px)",filter:"blur(4px)",transform:"scale(1.2)",left:0},"&:hover $button":{opacity:1},position:"relative",height:"100px !important"},img:{WebkitTransition:"all 0.5s ease-in-out",MozTransition:"all 0.5s ease-in-out",OTransition:"all 0.5s ease-in-out",transition:"all 0.5s ease-in-out"},button:(i={},Object(v.a)(i,e.breakpoints.down("xs"),{minWidth:e.spacing(6),fontSize:e.typography.fontSize-2}),Object(v.a)(i,"&:before",(t={},Object(v.a)(t,e.breakpoints.down("xs"),{height:1}),Object(v.a)(t,"position","absolute"),Object(v.a)(t,"content","''"),Object(v.a)(t,"left","50%"),Object(v.a)(t,"bottom",0),Object(v.a)(t,"background",e.palette.common.white),Object(v.a)(t,"height",e.spacing(.25)),Object(v.a)(t,"width",0),Object(v.a)(t,"WebkitTransition","all 0.5s ease-in-out"),Object(v.a)(t,"MozTransition","all 0.5s ease-in-out"),Object(v.a)(t,"OTransition","all 0.5s ease-in-out"),Object(v.a)(t,"transition","all 0.5s ease-in-out"),t)),Object(v.a)(i,"&:hover",{"&:before":{width:"100%",left:"0"}}),Object(v.a)(i,"height",e.spacing(5)),Object(v.a)(i,"position","absolute"),Object(v.a)(i,"top","50%"),Object(v.a)(i,"left","50%"),Object(v.a)(i,"transform","translate(-50%, -50%)"),Object(v.a)(i,"WebkitTransition","all 0.5s ease-in-out"),Object(v.a)(i,"MozTransition","all 0.5s ease-in-out"),Object(v.a)(i,"OTransition","all 0.5s ease-in-out"),Object(v.a)(i,"transition","all 0.5s ease-in-out"),Object(v.a)(i,"background","transparent"),Object(v.a)(i,"cursor","pointer"),Object(v.a)(i,"border","none"),Object(v.a)(i,"color","white"),Object(v.a)(i,"fontSize",e.typography.fontSize+2),Object(v.a)(i,"zIndex",1),Object(v.a)(i,"opacity",0),Object(v.a)(i,"outline","none"),i)}}));function k(e){var t=e.item,i=e.index,s=e.whichImageFade,c=e.handleRemoveItem,b=Object(o.a)(e,["item","index","whichImageFade","handleRemoveItem"]),u=x();return Object(n.jsx)(r.a,{in:s!==i,timeout:700,children:Object(n.jsxs)(g,Object(a.a)(Object(a.a)({className:u.gridListTile},b),{},{children:[Object(n.jsx)("img",{className:u.img,src:t.image,alt:t.title}),Object(n.jsx)(l.a,{className:u.button,onClick:c(i),children:"Delete"})]}))})}}}]);
//# sourceMappingURL=3.9aca487e.chunk.js.map