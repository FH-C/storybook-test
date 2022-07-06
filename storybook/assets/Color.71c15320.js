import{R as h,Y as m,a4 as Te,a5 as ee,a6 as Fe,W as H,a7 as he,a8 as Le,a9 as ze,aa as $e,ab as Be}from"./vendor.fae529c4.js";function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function te(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function ne(e){var t=m.exports.useRef(e),n=m.exports.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var F=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},$=function(e){return"touches"in e},ve=function(e,t,n){var r=e.getBoundingClientRect(),o=$(t)?function(a,c){for(var i=0;i<a.length;i++)if(a[i].identifier===c)return a[i];return a[0]}(t.touches,n):t;return{left:F((o.pageX-(r.left+window.pageXOffset))/r.width),top:F((o.pageY-(r.top+window.pageYOffset))/r.height)}},ge=function(e){!$(e)&&e.preventDefault()},re=h.memo(function(e){var t=e.onMove,n=e.onKey,r=te(e,["onMove","onKey"]),o=m.exports.useRef(null),a=ne(t),c=ne(n),i=m.exports.useRef(null),l=m.exports.useRef(!1),s=m.exports.useMemo(function(){var k=function(v){ge(v),($(v)?v.touches.length>0:v.buttons>0)&&o.current?a(ve(o.current,v,i.current)):O(!1)},_=function(){return O(!1)};function O(v){var g=l.current,p=v?self.addEventListener:self.removeEventListener;p(g?"touchmove":"mousemove",k),p(g?"touchend":"mouseup",_)}return[function(v){var g=v.nativeEvent,p=o.current;if(p&&(ge(g),!function(E,C){return C&&!$(E)}(g,l.current)&&p)){if($(g)){l.current=!0;var x=g.changedTouches||[];x.length&&(i.current=x[0].identifier)}p.focus(),a(ve(p,g,i.current)),O(!0)}},function(v){var g=v.which||v.keyCode;g<37||g>40||(v.preventDefault(),c({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},O]},[c,a]),f=s[0],d=s[1],w=s[2];return m.exports.useEffect(function(){return w},[w]),h.createElement("div",T({},r,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:o,onKeyDown:d,tabIndex:0,role:"slider"}))}),B=function(e){return e.filter(Boolean).join(" ")},oe=function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=B(["react-colorful__pointer",e.className]);return h.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},h.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},M=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},Xe={grad:.9,turn:360,rad:360/(2*Math.PI)},ae=function(e){return e[0]==="#"&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},qe=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Xe[t]||1)},We=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Ge({h:qe(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ge=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},pe=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:M(e.h),s:M(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:M(o/2),a:M(r,2)}},ce=function(e){var t=pe(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},K=function(e){var t=pe(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},me=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),c=r*(1-n),i=r*(1-(t-a)*n),l=r*(1-(1-t+a)*n),s=a%6;return{r:M(255*[r,i,c,c,l,r][s]),g:M(255*[l,r,r,i,c,c][s]),b:M(255*[c,c,l,r,r,i][s]),a:M(o,2)}},Ae=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?be({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},ie=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},be=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),c=a-Math.min(t,n,r),i=c?a===t?(n-r)/c:a===n?2+(r-t)/c:4+(t-n)/c:0;return{h:M(60*(i<0?i+6:i)),s:M(a?c/a*100:0),v:M(a/255*100),a:o}},ye=h.memo(function(e){var t=e.hue,n=e.onChange,r=B(["react-colorful__hue",e.className]);return h.createElement("div",{className:r},h.createElement(re,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:F(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuetext":M(t)},h.createElement(oe,{className:"react-colorful__hue-pointer",left:t/360,color:ce({h:t,s:100,v:100,a:1})})))}),xe=h.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:ce({h:t.h,s:100,v:100,a:1})};return h.createElement("div",{className:"react-colorful__saturation",style:r},h.createElement(re,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:F(t.s+100*o.left,0,100),v:F(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+M(t.s)+"%, Brightness "+M(t.v)+"%"},h.createElement(oe,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:ce(t)})))}),we=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},ke=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")};function Ee(e,t,n){var r=ne(n),o=m.exports.useState(function(){return e.toHsva(t)}),a=o[0],c=o[1],i=m.exports.useRef({color:t,hsva:a});m.exports.useEffect(function(){if(!e.equal(t,i.current.color)){var s=e.toHsva(t);i.current={hsva:s,color:t},c(s)}},[t,e]),m.exports.useEffect(function(){var s;we(a,i.current.hsva)||e.equal(s=e.fromHsva(a),i.current.color)||(i.current={hsva:a,color:s},r(s))},[a,e,r]);var l=m.exports.useCallback(function(s){c(function(f){return Object.assign({},f,s)})},[]);return[a,l]}var D,Ve=typeof window!="undefined"?m.exports.useLayoutEffect:m.exports.useEffect,Ke=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:void 0},_e=function(){Ve(function(){if(typeof document!="undefined"&&!D){(D=document.createElement("style")).innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`;var e=Ke();e&&D.setAttribute("nonce",e),document.head.appendChild(D)}},[])},De=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,c=te(e,["className","colorModel","color","onChange"]);_e();var i=Ee(n,o,a),l=i[0],s=i[1],f=B(["react-colorful",t]);return h.createElement("div",T({},c,{className:f}),h.createElement(xe,{hsva:l,onChange:s}),h.createElement(ye,{hue:l.h,onChange:s,className:"react-colorful__last-control"}))},Ue={defaultColor:"000",toHsva:function(e){return be(ae(e))},fromHsva:function(e){return n=(t=me(e)).g,r=t.b,"#"+ie(t.r)+ie(n)+ie(r);var t,n,r},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||we(ae(e),ae(t))}},Ye=function(e){return h.createElement(De,T({},e,{colorModel:Ue}))},Je=function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+K(Object.assign({},n,{a:0}))+", "+K(Object.assign({},n,{a:1}))+")"},a=B(["react-colorful__alpha",t]);return h.createElement("div",{className:a},h.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),h.createElement(re,{onMove:function(c){r({a:c.left})},onKey:function(c){r({a:F(n.a+c.left)})},"aria-label":"Alpha","aria-valuetext":M(100*n.a)+"%"},h.createElement(oe,{className:"react-colorful__alpha-pointer",left:n.a,color:K(n)})))},Ce=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,c=te(e,["className","colorModel","color","onChange"]);_e();var i=Ee(n,o,a),l=i[0],s=i[1],f=B(["react-colorful",t]);return h.createElement("div",T({},c,{className:f}),h.createElement(xe,{hsva:l,onChange:s}),h.createElement(ye,{hue:l.h,onChange:s}),h.createElement(Je,{hsva:l,onChange:s,className:"react-colorful__last-control"}))},Qe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:We,fromHsva:K,equal:ke},Ze=function(e){return h.createElement(Ce,T({},e,{colorModel:Qe}))},et={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Ae,fromHsva:function(e){var t=me(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ke},tt=function(e){return h.createElement(Ce,T({},e,{colorModel:et}))},nt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const X=nt,Me={};for(const e of Object.keys(X))Me[X[e]]=e;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Se=u;for(const e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:n})}u.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),c=a-o;let i,l;a===o?i=0:t===a?i=(n-r)/c:n===a?i=2+(r-t)/c:r===a&&(i=4+(t-n)/c),i=Math.min(i*60,360),i<0&&(i+=360);const s=(o+a)/2;return a===o?l=0:s<=.5?l=c/(a+o):l=c/(2-a-o),[i,l*100,s*100]};u.rgb.hsv=function(e){let t,n,r,o,a;const c=e[0]/255,i=e[1]/255,l=e[2]/255,s=Math.max(c,i,l),f=s-Math.min(c,i,l),d=function(w){return(s-w)/6/f+1/2};return f===0?(o=0,a=0):(a=f/s,t=d(c),n=d(i),r=d(l),c===s?o=r-n:i===s?o=1/3+t-r:l===s&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,s*100]};u.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=u.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};u.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,c=(1-n-o)/(1-o)||0,i=(1-r-o)/(1-o)||0;return[a*100,c*100,i*100,o*100]};function rt(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}u.rgb.keyword=function(e){const t=Me[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(X)){const a=X[o],c=rt(e,a);c<n&&(n=c,r=o)}return r};u.keyword.rgb=function(e){return X[e]};u.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,c=t*.0193+n*.1192+r*.9505;return[o*100,a*100,c*100]};u.rgb.lab=function(e){const t=u.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,c=500*(n-r),i=200*(r-o);return[a,c,i]};u.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,c;if(n===0)return c=r*255,[c,c,c];r<.5?o=r*(1+n):o=r+n-r*n;const i=2*r-o,l=[0,0,0];for(let s=0;s<3;s++)a=t+1/3*-(s-1),a<0&&a++,a>1&&a--,6*a<1?c=i+(o-i)*6*a:2*a<1?c=o:3*a<2?c=i+(o-i)*(2/3-a)*6:c=i,l[s]=c*255;return l};u.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const c=(r+n)/2,i=r===0?2*o/(a+o):2*n/(r+n);return[t,i*100,c*100]};u.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),c=255*r*(1-n),i=255*r*(1-n*a),l=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,l,c];case 1:return[i,r,c];case 2:return[c,r,l];case 3:return[c,i,r];case 4:return[l,c,r];case 5:return[r,c,i]}};u.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,c;c=(2-n)*r;const i=(2-n)*o;return a=n*o,a/=i<=1?i:2-i,a=a||0,c/=2,[t,a*100,c*100]};u.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const c=Math.floor(6*t),i=1-r;a=6*t-c,(c&1)!=0&&(a=1-a);const l=n+a*(i-n);let s,f,d;switch(c){default:case 6:case 0:s=i,f=l,d=n;break;case 1:s=l,f=i,d=n;break;case 2:s=n,f=i,d=l;break;case 3:s=n,f=l,d=i;break;case 4:s=l,f=n,d=i;break;case 5:s=i,f=n,d=l;break}return[s*255,f*255,d*255]};u.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),c=1-Math.min(1,n*(1-o)+o),i=1-Math.min(1,r*(1-o)+o);return[a*255,c*255,i*255]};u.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,c;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,c=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),c=Math.min(Math.max(0,c),1),[o*255,a*255,c*255]};u.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),c=200*(n-r);return[o,a,c]};u.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,c;a=(t+16)/116,o=n/500+a,c=a-r/200;const i=a**3,l=o**3,s=c**3;return a=i>.008856?i:(a-16/116)/7.787,o=l>.008856?l:(o-16/116)/7.787,c=s>.008856?s:(c-16/116)/7.787,o*=95.047,a*=100,c*=108.883,[o,a,c]};u.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const c=Math.sqrt(n*n+r*r);return[t,c,o]};u.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),c=n*Math.sin(o);return[t,a,c]};u.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?u.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let c=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(c+=60),c};u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])};u.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};u.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};u.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};u.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(i=>i+i).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,c=r&255;return[o,a,c]};u.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),c=o-a;let i,l;return c<1?i=a/(1-c):i=0,c<=0?l=0:o===t?l=(n-r)/c%6:o===n?l=2+(r-t)/c:l=4+(t-n)/c,l/=6,l%=1,[l*360,c*100,i*100]};u.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};u.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};u.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,c=a%1,i=1-c;let l=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=c,o[2]=0;break;case 1:o[0]=i,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=c;break;case 3:o[0]=0,o[1]=i,o[2]=1;break;case 4:o[0]=c,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=i}return l=(1-n)*r,[(n*o[0]+l)*255,(n*o[1]+l)*255,(n*o[2]+l)*255]};u.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};u.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};u.hwb.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=1-n,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};u.gray.hsl=function(e){return[0,0,e[0]]};u.gray.hsv=u.gray.hsl;u.gray.hwb=function(e){return[0,100,e[0]]};u.gray.cmyk=function(e){return[0,0,0,e[0]]};u.gray.lab=function(e){return[e[0],0,0]};u.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const U=Se;function ot(){const e={},t=Object.keys(U);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function at(e){const t=ot(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(U[r]);for(let a=o.length,c=0;c<a;c++){const i=o[c],l=t[i];l.distance===-1&&(l.distance=t[r].distance+1,l.parent=r,n.unshift(i))}}return t}function ct(e,t){return function(n){return t(e(n))}}function it(e,t){const n=[t[e].parent,e];let r=U[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=ct(U[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}var lt=function(e){const t=at(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const c=r[a];t[c].parent!==null&&(n[c]=it(c,t))}return n};const le=Se,st=lt,L={},ut=Object.keys(le);function ft(e){const t=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function dt(e){const t=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,c=0;c<a;c++)o[c]=Math.round(o[c]);return o};return"conversion"in e&&(t.conversion=e.conversion),t}ut.forEach(e=>{L[e]={},Object.defineProperty(L[e],"channels",{value:le[e].channels}),Object.defineProperty(L[e],"labels",{value:le[e].labels});const t=st(e);Object.keys(t).forEach(r=>{const o=t[r];L[e][r]=dt(o),L[e][r].raw=ft(o)})});var I=L,ht=Te,vt=function(){return ht.Date.now()},gt=vt,pt=/\s/;function mt(e){for(var t=e.length;t--&&pt.test(e.charAt(t)););return t}var bt=mt,yt=bt,xt=/^\s+/;function wt(e){return e&&e.slice(0,yt(e)+1).replace(xt,"")}var kt=wt,Et=kt,Oe=ee,_t=Fe,Ie=0/0,Ct=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,St=/^0o[0-7]+$/i,Ot=parseInt;function It(e){if(typeof e=="number")return e;if(_t(e))return Ie;if(Oe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Oe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Et(e);var n=Mt.test(e);return n||St.test(e)?Ot(e.slice(2),n?2:8):Ct.test(e)?Ie:+e}var jt=It,Nt=ee,se=gt,je=jt,Rt="Expected a function",Ht=Math.max,Pt=Math.min;function Tt(e,t,n){var r,o,a,c,i,l,s=0,f=!1,d=!1,w=!0;if(typeof e!="function")throw new TypeError(Rt);t=je(t)||0,Nt(n)&&(f=!!n.leading,d="maxWait"in n,a=d?Ht(je(n.maxWait)||0,t):a,w="trailing"in n?!!n.trailing:w);function k(y){var j=r,R=o;return r=o=void 0,s=y,c=e.apply(R,j),c}function _(y){return s=y,i=setTimeout(g,t),f?k(y):c}function O(y){var j=y-l,R=y-s,A=t-j;return d?Pt(A,a-R):A}function v(y){var j=y-l,R=y-s;return l===void 0||j>=t||j<0||d&&R>=a}function g(){var y=se();if(v(y))return p(y);i=setTimeout(g,O(y))}function p(y){return i=void 0,w&&r?k(y):(r=o=void 0,c)}function x(){i!==void 0&&clearTimeout(i),s=0,r=l=o=i=void 0}function E(){return i===void 0?c:p(se())}function C(){var y=se(),j=v(y);if(r=arguments,o=this,l=y,j){if(i===void 0)return _(l);if(d)return clearTimeout(i),i=setTimeout(g,t),k(l)}return i===void 0&&(i=setTimeout(g,t)),c}return C.cancel=x,C.flush=E,C}var Ft=Tt,Lt=Ft,zt=ee,$t="Expected a function";function Bt(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError($t);return zt(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Lt(e,t,{leading:r,maxWait:t,trailing:o})}var Xt=Bt,q,W;function N(e,t){return At(e)||Gt(e,t)||Wt(e,t)||qt()}function qt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(e,t){if(!!e){if(typeof e=="string")return Ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ne(e,t)}}function Ne(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gt(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var c=e[Symbol.iterator](),i;!(r=(i=c.next()).done)&&(n.push(i.value),!(t&&n.length===t));r=!0);}catch(l){o=!0,a=l}finally{try{!r&&c.return!=null&&c.return()}finally{if(o)throw a}}return n}}function At(e){if(Array.isArray(e))return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function Vt(e,t){if(e==null)return{};var n=Kt(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Kt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Dt=H.div({position:"relative",maxWidth:250}),Ut=H(he)({position:"absolute",zIndex:1,top:4,left:4}),Yt=H.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Jt=H(Le)(function(e){var t=e.theme;return{fontFamily:t.typography.fonts.base}}),Qt=H.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Zt=H.div(function(e){var t=e.theme,n=e.active;return{width:16,height:16,boxShadow:n?"".concat(t.appBorderColor," 0 0 0 1px inset, ").concat(t.color.mediumdark,"50 0 0 0 4px"):"".concat(t.appBorderColor," 0 0 0 1px inset"),borderRadius:t.appBorderRadius}}),en=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,fe=function(t){var n=t.value,r=t.active,o=t.onClick,a=t.style,c=Vt(t,["value","active","onClick","style"]),i="linear-gradient(".concat(n,", ").concat(n,"), ").concat(en,", linear-gradient(#fff, #fff)");return h.createElement(Zt,ue({},c,{active:r,onClick:o,style:Object.assign({},a,{backgroundImage:i})}))};fe.displayName="Swatch";var tn=H(ze.Input)(function(e){var t=e.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:t.typography.fonts.base}}),nn=H($e)(function(e){var t=e.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:t.input.color}}),b;(function(e){e.RGB="rgb",e.HSL="hsl",e.HEX="hex"})(b||(b={}));var Y=Object.values(b),rn=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,on=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,an=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,de=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,cn=/^\s*#?([0-9a-f]{3})\s*$/i,ln=(q={},S(q,b.HEX,Ye),S(q,b.RGB,tt),S(q,b.HSL,Ze),q),J=(W={},S(W,b.HEX,"transparent"),S(W,b.RGB,"rgba(0, 0, 0, 0)"),S(W,b.HSL,"hsla(0, 0%, 0%, 0)"),W),Re=function(t){var n=t==null?void 0:t.match(rn);if(!n)return[0,0,0,1];var r=N(n,5),o=r[1],a=r[2],c=r[3],i=r[4],l=i===void 0?1:i;return[o,a,c,l].map(Number)},G=function(t){var n;if(!!t){var r=!0;if(on.test(t)){var o,a=Re(t),c=N(a,4),i=c[0],l=c[1],s=c[2],f=c[3],d=I.rgb.hsl([i,l,s])||[0,0,0],w=N(d,3),k=w[0],_=w[1],O=w[2];return o={valid:r,value:t,keyword:I.rgb.keyword([i,l,s]),colorSpace:b.RGB},S(o,b.RGB,t),S(o,b.HSL,"hsla(".concat(k,", ").concat(_,"%, ").concat(O,"%, ").concat(f,")")),S(o,b.HEX,"#".concat(I.rgb.hex([i,l,s]).toLowerCase())),o}if(an.test(t)){var v,g=Re(t),p=N(g,4),x=p[0],E=p[1],C=p[2],y=p[3],j=I.hsl.rgb([x,E,C])||[0,0,0],R=N(j,3),A=R[0],He=R[1],Pe=R[2];return v={valid:r,value:t,keyword:I.hsl.keyword([x,E,C]),colorSpace:b.HSL},S(v,b.RGB,"rgba(".concat(A,", ").concat(He,", ").concat(Pe,", ").concat(y,")")),S(v,b.HSL,t),S(v,b.HEX,"#".concat(I.hsl.hex([x,E,C]).toLowerCase())),v}var V=t.replace("#",""),z=I.keyword.rgb(V)||I.hex.rgb(V),Z=I.rgb.hsl(z),P=t;if(/[^#a-f0-9]/i.test(t)?P=V:de.test(t)&&(P="#".concat(V)),P.startsWith("#"))r=de.test(P);else try{I.keyword.hex(P)}catch{r=!1}return n={valid:r,value:P,keyword:I.rgb.keyword(z),colorSpace:b.HEX},S(n,b.RGB,"rgba(".concat(z[0],", ").concat(z[1],", ").concat(z[2],", 1)")),S(n,b.HSL,"hsla(".concat(Z[0],", ").concat(Z[1],"%, ").concat(Z[2],"%, 1)")),S(n,b.HEX,P),n}},sn=function(t,n,r){if(!t||!(n!=null&&n.valid))return J[r];if(r!==b.HEX)return(n==null?void 0:n[r])||J[r];if(!n.hex.startsWith("#"))try{return"#".concat(I.keyword.hex(n.hex))}catch{return J.hex}var o=n.hex.match(cn);if(!o)return de.test(n.hex)?n.hex:J.hex;var a=o[1].split(""),c=N(a,3),i=c[0],l=c[1],s=c[2];return"#".concat(i).concat(i).concat(l).concat(l).concat(s).concat(s)},un=function(t,n){var r=m.exports.useState(t||""),o=N(r,2),a=o[0],c=o[1],i=m.exports.useState(function(){return G(a)}),l=N(i,2),s=l[0],f=l[1],d=m.exports.useState((s==null?void 0:s.colorSpace)||b.HEX),w=N(d,2),k=w[0],_=w[1];m.exports.useEffect(function(){t===void 0&&(c(""),f(void 0),_(b.HEX))},[t]);var O=m.exports.useMemo(function(){return sn(a,s,k).toLowerCase()},[a,s,k]),v=m.exports.useCallback(function(p){var x=G(p);c((x==null?void 0:x.value)||p||""),!!x&&(f(x),_(x.colorSpace),n(x.value))},[n]),g=m.exports.useCallback(function(){var p=Y.indexOf(k)+1;p>=Y.length&&(p=0),_(Y[p]);var x=(s==null?void 0:s[Y[p]])||"";c(x),n(x)},[s,k,n]);return{value:a,realValue:O,updateValue:v,color:s,colorSpace:k,cycleColorSpace:g}},Q=function(t){return t.replace(/\s*/,"").toLowerCase()},fn=function(t,n,r){var o=m.exports.useState(n!=null&&n.valid?[n]:[]),a=N(o,2),c=a[0],i=a[1];m.exports.useEffect(function(){n===void 0&&i([])},[n]);var l=m.exports.useMemo(function(){var f=(t||[]).map(function(d){return typeof d=="string"?G(d):d.title?Object.assign({},G(d.color),{keyword:d.title}):G(d.color)});return f.concat(c).filter(Boolean).slice(-27)},[t,c]),s=m.exports.useCallback(function(f){!(f!=null&&f.valid)||l.some(function(d){return Q(d[r])===Q(f[r])})||i(function(d){return d.concat(f)})},[r,l]);return{presets:l,addPreset:s}},dn=function(t){var n=t.name,r=t.value,o=t.onChange,a=t.onFocus,c=t.onBlur,i=t.presetColors,l=t.startOpen,s=un(r,Xt(o,200)),f=s.value,d=s.realValue,w=s.updateValue,k=s.color,_=s.colorSpace,O=s.cycleColorSpace,v=fn(i,k,_),g=v.presets,p=v.addPreset,x=ln[_];return h.createElement(Dt,null,h.createElement(Ut,{trigger:"click",startOpen:l,closeOnClick:!0,onVisibilityChange:function(){return p(k)},tooltip:h.createElement(Yt,null,h.createElement(x,{color:d==="transparent"?"#000000":d,onChange:w,onFocus:a,onBlur:c}),g.length>0&&h.createElement(Qt,null,g.map(function(E,C){return h.createElement(he,{key:"".concat(E.value,"-").concat(C),hasChrome:!1,tooltip:h.createElement(Jt,{note:E.keyword||E.value})},h.createElement(fe,{value:E[_],active:k&&Q(E[_])===Q(k[_]),onClick:function(){return w(E.value)}}))})))},h.createElement(fe,{value:d,style:{margin:4}})),h.createElement(tn,{id:Be(n),value:f,onChange:function(C){return w(C.target.value)},onFocus:function(C){return C.target.select()},placeholder:"Choose color..."}),f?h.createElement(nn,{icon:"markup",onClick:O}):null)};dn.displayName="ColorControl";export{dn as ColorControl,dn as default};
//# sourceMappingURL=Color.71c15320.js.map
