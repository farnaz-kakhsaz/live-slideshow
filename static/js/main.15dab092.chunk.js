(this.webpackJsonpslideshow=this.webpackJsonpslideshow||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(52),o=a.n(r),c=a(18),l=a.n(c),m=a(162),s=a(159),g=l()((function(e){return{image:{maxWidth:400,width:"100%",borderRadius:10,marginBottom:e.spacing(1)}}}));function u(e){var t=e.image,a=e.text,n=g();return i.a.createElement(m.a,{textAlign:"center",color:"grey.400"},i.a.createElement("img",{className:n.image,src:t,alt:a}),i.a.createElement(s.a,null,a))}var p=a(67),d=l()((function(e){return{root:{"& $rightArrow, & $leftArrow":{color:e.palette.grey[400],fontSize:120,position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,cursor:"pointer",fontFamily:"'Courier New', monospace"}},rightArrow:{right:0},leftArrow:{left:0}}}));function f(e){var t=e.handleArrowClick,a=d();return i.a.createElement("div",{className:a.root},i.a.createElement("div",{className:a.rightArrow,onClick:t("right")},"\u203a"),i.a.createElement("div",{className:a.leftArrow,onClick:t("left")},"\u2039"))}var x=a(7),b=l()((function(e){return{dot:{backgroundColor:e.palette.grey[400],width:e.spacing(2),height:e.spacing(2),marginLeft:e.spacing(1),borderRadius:"50%",border:"none",cursor:"pointer",outline:"none"},activeDot:{backgroundColor:e.palette.grey[700]}}}));function h(e){var t=e.activeDot,a=e.index,n=e.handleDotClick,r=b();return i.a.createElement("div",{className:Object(x.a)(r.dot,t?r.activeDot:""),onClick:n(a)})}var E=a(160),w=a(53),y=a.n(w),j=a(54),v=Object(j.autoPlay)(y.a);function A(e){var t=e.children,a=e.options,r=e.showDots,o=e.showArrow,c=e.dotMarginTop,l=Object(n.useState)(0),s=Object(p.a)(l,2),g=s[0],u=s[1];var d=function(e){return function(t){u(e)}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{position:"relative",maxWidth:"100%"},o&&i.a.createElement(f,{handleArrowClick:function(e){return function(t){if("right"===e){var n=g+1>a.length-1?0:g+1;u(n)}else if("left"===e){var i=g-1<0?a.length-1:g-1;u(i)}}}}),i.a.createElement(E.a,null,i.a.createElement(v,{axis:"x",index:g,onChangeIndex:function(e){u(e)},enableMouseEvents:!0,interval:6e3,springConfig:{duration:"1s",easeFunction:"ease-in-out",delay:"0s"}},a.map((function(e,a){return i.a.createElement(m.a,{display:"flex",justifyContent:"center",key:a},Math.abs(g-a)<=2?t(e):null)}))))),r&&i.a.createElement(m.a,{display:"flex",justifyContent:"center",mt:c},a.map((function(e,t){return i.a.createElement(h,{dots:a.length,activeDot:t===g,index:t,handleDotClick:d,key:t})}))))}var k=a(55),C=a.n(k),S=a(56),D=a.n(S),O=a(57),F=a.n(O),M=a(58),z=a.n(M),I=a(59),N=a.n(I),T=a(60),H=a.n(T),W=a(61),R=a.n(W),U=a(62),B=a.n(U),J=a(63),L=a.n(J),P=a(64),$=a.n(P),K=a(65),Y=a.n(K),q=a(66),G=a.n(q),Q=a(163),V=a(161),X=[[{image:C.a,text:"Cyberpunk 2077"},{image:D.a,text:"Tom Clancy's Rainbow Six Siege"},{image:F.a,text:"Final Fantasy 7"}],[{image:z.a,text:"Mirror's Edge"},{image:N.a,text:"Hitman: Absolution"},{image:H.a,text:"Fall out 4"}],[{image:R.a,text:"Call of Duty: Advanced Warfare"},{image:B.a,text:"Killzone 5"},{image:L.a,text:"Hitman: Absolution"}],[{image:$.a,text:"Last of Us: Part 2"},{image:Y.a,text:"Tomb Raider"},{image:G.a,text:"Watch Dogs"}]];var Z=Object(Q.a)()((function(e){var t=e.width,a=[].concat.apply([],X);return i.a.createElement("section",null,i.a.createElement(m.a,{bgcolor:"rgb(21, 32, 43)",py:10},i.a.createElement(E.a,{maxWidth:"xl"},i.a.createElement(m.a,{fontFamily:"'Segoe UI', sans-serif",color:"grey.400",lineHeight:1,fontSize:36,textAlign:"center",mb:3},"Simple Slideshow"),i.a.createElement(A,{options:Object(Q.b)("md",t)?a:X,dotMarginTop:{xs:3}},(function(e){return Object(Q.b)("md",t)?i.a.createElement(u,{image:e.image,text:e.text}):i.a.createElement(V.a,{container:!0,justify:"space-between"},e.map((function(e,t){return i.a.createElement(u,{image:e.image,text:e.text,key:t})})))})),i.a.createElement(m.a,{fontFamily:"'Segoe UI', sans-serif",color:"grey.400",lineHeight:1,fontSize:36,textAlign:"center",mt:8,mb:3},"Slideshow with Dots"),i.a.createElement(A,{options:Object(Q.b)("md",t)?a:X,dotMarginTop:{xs:3},showDots:!0},(function(e){return Object(Q.b)("md",t)?i.a.createElement(u,{image:e.image,text:e.text}):i.a.createElement(V.a,{container:!0,justify:"space-between"},e.map((function(e,t){return i.a.createElement(u,{image:e.image,text:e.text,key:t})})))})),i.a.createElement(m.a,{fontFamily:"'Segoe UI', sans-serif",color:"grey.400",lineHeight:1,fontSize:36,textAlign:"center",mt:8,mb:3},"Slideshow with Dots and Arrow"),i.a.createElement(A,{options:Object(Q.b)("md",t)?a:X,dotMarginTop:{xs:3},showDots:!0,showArrow:!0},(function(e){return Object(Q.b)("md",t)?i.a.createElement(u,{image:e.image,text:e.text}):i.a.createElement(V.a,{container:!0,justify:"space-between"},e.map((function(e,t){return i.a.createElement(u,{image:e.image,text:e.text,key:t})})))})))))})),_=a(164);var ee=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,null),i.a.createElement(Z,null))};o.a.render(i.a.createElement(ee,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a.p+"static/media/image-1.4de03ef5.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/image-2.8519be52.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/image-3.4aeb2a8a.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/image-4.105758db.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/image-5.2509fe25.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/image-6.f3f16886.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/image-7.73d60203.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/image-8.772b89ba.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/image-9.7c9e9798.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/image-10.7a3427aa.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/image-11.d4fbd49b.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/image-12.0b8ebac2.jpg"},75:function(e,t,a){e.exports=a(137)}},[[75,1,2]]]);
//# sourceMappingURL=main.15dab092.chunk.js.map