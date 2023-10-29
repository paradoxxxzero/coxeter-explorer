import{c as ht,P as he,s as N,i as pt,a as re,m as $,e as mt,b as xt,d as ce,r as g,O as Be,M as Q,B as Ve,F as X,W as A,N as ie,H as W,f as J,R as ue,g as _,U as R,S as M,C as F,V as P,h as gt,j as Te,D as yt,k as St,l as bt,n as He,o as Pe,p as wt,Z as Ne,A as Ie,q as Et,t as z,u as Ct,v as Le,w as Tt,x as Pt,y as Nt,L as It,z as Mt,E as Dt,G as Ot,I as $e,J as Rt,K as We,Q as ne,T as Qe,X as Je,Y as At,_ as jt,$ as k,a0 as qe,a1 as Ee,a2 as j,a3 as Ut,a4 as Ft,a5 as Me,a6 as _t,a7 as zt,a8 as kt,a9 as Gt,aa as Bt,ab as Ye,ac as Ke,ad as pe,ae as me,af as Vt,ag as Ht,ah as l,ai as Ze,aj as Xe,ak as Lt,al as $t,am as V,an as Wt,ao as et,ap as Qt,aq as Jt,ar as qt,as as Yt}from"./CoxeterDiagram-6afb7aeb.js";const Kt=(t,e)=>t.map((r,n)=>r.map((a,i)=>-ht(e[n][i]*he/a))),tt=t=>{const e=mt(t).values;return{"+":e.filter(r=>r>0).length,"-":e.filter(r=>r<0).length,0:e.filter(r=>r===0).length}},nt=(t,e=[],r=0,n=2)=>{e[r]=e[r]||[];for(let a=0;a<t.length;a++){const i=t.filter((s,o)=>o!==a).map(s=>s.filter((o,c)=>c!==a));e[r].push(tt(i)),i.length>1&&r+1<n&&nt(i,e,r+1)}return e},Zt=t=>{const e=tt(t);if(e["-"]===0&&e[0]===0)return"finite";if(e["-"]===0&&e[0]===1)return"affine";const r=nt(t),n=r[0];if(n.every(a=>a["-"]===0&&a[0]===0))return"hyperbolic-compact";if(n.every(a=>a["-"]===0))return"hyperbolic-paracompact";for(let a=1;a<r.length;a++)if(r[a].every(s=>s["-"]===0))return"hyperbolic-lorentzian-level-"+(a+1);return"indefinite"},Ce=(t,e,r)=>{let n=0;for(let a=0;a<t.length;a++)n+=t[a]*e[a]*(a===t.length-1&&r||1);return n},rt=(t,e)=>Ce(t,t,e),Xt=(t,e,r)=>{t=t.slice();const n=2*Ce(t,e,r);for(let a=0;a<t.length;a++)t[a]-=n*(r||a!==t.length-1?e[a]:0);return t},at=(t,e)=>{if(t=t.slice(),e===0){for(let n=0;n<t.length;n++)t[n]/=t[t.length-1];return t}const r=(e===-1&&xt(t[t.length-1])||1)/N(re(rt(t,e)));for(let n=0;n<t.length;n++)t[n]*=r;return t},en=t=>t.sort((e,r)=>{const[n,a]=e,[i,s]=r;return n===0&&a===1?1:i===0&&s===1||n<2&&i>=2?-1:i<2&&n>=2?1:n<2&&i<2?a===s?i-n:a-s:n===i?s-a:i-n}),xe=(t,e,r,n,a)=>{const i=ce(n);if(e>r.length-1||re(t)>1)return i;const[s,o]=r[e],c=o===n-1&&a||1,u=N(1-c*t*t),d=t;return i[s][s]=u,i[o][o]=u,i[s][o]=-c*d,i[o][s]=d,i},tn=(t,e,r)=>{const n=e[0].length,a=new Array(n).fill().map(()=>new Array(n).fill(0));a[t][0]=1;for(let s=1;s<n;s++){const o=(s+t)%n;for(let c=0;c<s;c++){const u=(c+t)%n;a[o][c]=(e[o][u]-Ce(a[o].slice(0,c),a[u].slice(0,c)))/a[u][c]}if(a[o][s]=N(re(1-rt(a[o].slice(0,s)))),a[o][s]<1e-6&&s<n-1)return null}const i=(n-1+t)%n;return r===0?a[i][n-1]=.5:a[i][n-1]*=r,a},st=(t,e,r=!1)=>{const n=t[0].length;let a=null;const i=t.every((s,o)=>s.every((c,u)=>c===(o===u?1:-1)));if(r||i){if(a=new Array(n).fill(0).map(()=>new Array(n).fill(0)),n===2){const s=(t[0][1]+1)/2;return a[0][0]=N(s-t[0][1]),a[1][0]=-N(s-t[0][1]),a[0][1]=a[1][1]=N((e||1)*s),e===0&&(a[1][1]=.5),a}else if(n===3){const s=t[0][1],o=t[1][2],c=t[0][2],u=(s*s+o*o+c*c-2*s*o*c-1)/(s*s+o*o+c*c-2*s*o-2*s*c-2*o*c+2*s+2*o+2*c-3);return a[0][2]=a[1][2]=a[2][2]=e*N(e*u),a[2][1]=-N(1-u),a[1][1]=(o-u)/a[2][1],a[0][1]=(c-u)/a[2][1],a[1][0]=-N(1-a[1][1]**2-u),a[0][0]=N(1-a[0][1]**2-u),e===0&&(a[2][2]=.5),a}else if(n===4){const s=t[0][1],o=t[1][2],c=t[2][3],u=t[0][2],d=t[1][3],f=t[0][3],v=(s*s*c*c+o*o*f*f+u*u*d*d-s*s-o*o-c*c-u*u-d*d-f*f+2*s*d*f+2*s*o*u+2*o*c*d+2*c*u*f-2*o*u*d*f-2*s*o*c*f-2*s*c*u*d+1)/(2*(s*s*c+o*o*f+c*c*s+u*u*d+d*d*u+f*f*o-s*s-o*o-c*c-u*u-d*d-f*f-s*o*c-s*o*f-s*c*u-s*c*d-s*c*f-s*u*d-o*c*f-o*u*d-o*u*f-o*d*f-c*u*d-u*d*f+s*o*u+s*d*f+o*c*d+c*u*f+s*o+s*u+s*d+s*f+o*c+o*u+o*d+c*u+c*d+c*f+u*f+d*f-s-o-c-u-d-f+2));return a[0][3]=a[1][3]=a[2][3]=a[3][3]=e*N(e*v),a[3][2]=-N(1-v),a[2][2]=(c-v)/a[3][2],a[1][2]=(d-v)/a[3][2],a[0][2]=(f-v)/a[3][2],a[2][1]=-N(1-v-a[2][2]**2),a[1][1]=(o-v-a[1][2]*a[2][2])/a[2][1],a[0][1]=(u-v-a[0][2]*a[2][2])/a[2][1],a[1][0]=-N(1-v-a[1][1]**2-a[1][2]**2),a[0][0]=N(1-v-a[0][1]**2-a[0][2]**2),e===0&&(a[3][3]=.5),a}if(i){const s=[0];for(let o=1;o<n;o++)s[o]=(s[o-1]+1)/(3-s[o-1]);a[0][0]=1,a[1][0]=-1,a[0][1]=N(s[1]),a[1][1]=N(s[1]);for(let o=0;o<n;o++)for(let c=0;c<n;c++)o<2&&c<2||(a[o][c]=c<o-1?0:c===o-1?-(o*N(s[c]-s[c-1])):c<n-1?N(s[c]-s[c-1]):N(s[c-1]));return a}}for(let s=0;s<n&&(a=tn(s,t,e),!a);s++);if(!a&&!r)return st(t,e,!0);if(a&&r){const s=it(new Array(n).fill(1),a,e);if(e!==0){const o=at(s.slice().map((c,u)=>u===n-1?c-1:c),e);for(let c=0;c<n;c++)a[c]=Xt(a[c],o,e)}}return a},it=(t,e,r)=>{let n=t.map(o=>isNaN(o)?1:+o),a=e.slice(),i;for(let o=0;o<n.length&&(i=pt(a),i.some(c=>c.some(u=>isNaN(u)||re(u)>1e8)));o++){console.warn("Non invertible matrix, retrying by shifting mirrors"),a.push(a.shift()),n.push(n.shift());if(o===n.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const s=$(i,n);return s[s.length-1]*=r||1,at(s,r)};class nn extends g.Component{componentDidCatch(e,r){this.props.onError(e,r)}render(){return this.props.error?null:this.props.children}}const ge=(t,e)=>{let r;return(...n)=>(clearTimeout(r),r=setTimeout(()=>t(...n),e),()=>clearTimeout(r))};var ee=function(){var t=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),n(++t%e.children.length)},!1);function r(d){return e.appendChild(d.dom),d}function n(d){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===d?"block":"none";t=d}var a=(performance||Date).now(),i=a,s=0,o=r(new ee.Panel("FPS","#0ff","#002")),c=r(new ee.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=r(new ee.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:r,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(c.update(d-a,200),d>=i+1e3&&(o.update(s*1e3/(d-i),100),i=d,s=0,u)){var f=performance.memory;u.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:e,setMode:n}};ee.Panel=function(t,e,r){var n=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),o=80*s,c=48*s,u=3*s,d=2*s,f=3*s,v=15*s,h=74*s,E=30*s,w=document.createElement("canvas");w.width=o,w.height=c,w.style.cssText="width:80px;height:48px";var p=w.getContext("2d");return p.font="bold "+9*s+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=r,p.fillRect(0,0,o,c),p.fillStyle=e,p.fillText(t,u,d),p.fillRect(f,v,h,E),p.fillStyle=r,p.globalAlpha=.9,p.fillRect(f,v,h,E),{dom:w,update:function(y,m){n=Math.min(n,y),a=Math.max(a,y),p.fillStyle=r,p.globalAlpha=1,p.fillRect(0,0,o,v),p.fillStyle=e,p.fillText(i(y)+" "+t+" ("+i(n)+"-"+i(a)+")",u,d),p.drawImage(w,f+s,v,h-s,E,f,v,h-s,E),p.fillRect(f+h-s,v,s,E),p.fillStyle=r,p.globalAlpha=.9,p.fillRect(f+h-s,v,s,i((1-y/m)*E))}}};const rn=ee;class G{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const an=new Be(-1,1,1,-1,0,1);class sn extends Ve{constructor(){super(),this.setAttribute("position",new X([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new X([0,2,0,0,2,0],2))}}const on=new sn;class ae{constructor(e){this._mesh=new Q(on,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,an)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const ln={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class cn extends G{constructor(e,r,n){super(),this.scene=e,this.camera=r;const a=n.focus!==void 0?n.focus:1,i=n.aperture!==void 0?n.aperture:.025,s=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new A(1,1,{minFilter:ie,magFilter:ie,type:W}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new J,this.materialDepth.depthPacking=ue,this.materialDepth.blending=_;const o=ln,c=R.clone(o.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=a,c.aspect.value=r.aspect,c.aperture.value=i,c.maxblur.value=s,c.nearClip.value=r.near,c.farClip.value=r.far,this.materialBokeh=new M({defines:Object.assign({},o.defines),uniforms:c,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=c,this.fsQuad=new ae(this.materialBokeh),this._oldClearColor=new F}render(e,r,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const a=e.getClearAlpha(),i=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(a),e.autoClear=i}setSize(e,r){this.materialBokeh.uniforms.aspect.value=e/r,this.renderTargetDepth.setSize(e,r)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const te={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class oe extends G{constructor(e,r){super(),this.textureID=r!==void 0?r:"tDiffuse",e instanceof M?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=R.clone(e.uniforms),this.material=new M({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ae(this.material)}render(e,r,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class De extends G{constructor(e,r){super(),this.scene=e,this.camera=r,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,r,n){const a=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),i.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(a.EQUAL,1,4294967295),i.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),i.buffers.stencil.setLocked(!0)}}class un extends G{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dn{constructor(e,r){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),r===void 0){const n=e.getSize(new P);this._width=n.width,this._height=n.height,r=new A(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:W}),r.texture.name="EffectComposer.rt1"}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oe(te),this.copyPass.material.blending=_,this.clock=new gt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,r){this.passes.splice(r,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const r=this.passes.indexOf(e);r!==-1&&this.passes.splice(r,1)}isLastEnabledPass(e){for(let r=e+1;r<this.passes.length;r++)if(this.passes[r].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const r=this.renderer.getRenderTarget();let n=!1;for(let a=0,i=this.passes.length;a<i;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}De!==void 0&&(s instanceof De?n=!0:s instanceof un&&(n=!1))}}this.renderer.setRenderTarget(r)}reset(e){if(e===void 0){const r=this.renderer.getSize(new P);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,r){this._width=e,this._height=r;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fn extends G{constructor(e,r,n=null,a=null,i=null){super(),this.scene=e,this.camera=r,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new F}render(e,r,n){const a=e.autoClear;e.autoClear=!1;let i,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const se={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new P(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Te},cameraInverseProjectionMatrix:{value:new Te},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform sampler2D tDepth;
		uniform sampler2D tNormal;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			return texture2D( tDepth, screenPosition ).x;
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`},H={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new P(512,512)},sampleUvOffsets:{value:[new P(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},le={createSampleWeights:function(t,e){const r=[];for(let n=0;n<=t;n++)r.push(vn(n,e));return r},createSampleOffsets:function(t,e){const r=[];for(let n=0;n<=t;n++)r.push(e.clone().multiplyScalar(n));return r},configure:function(t,e,r,n){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=le.createSampleOffsets(e,n),t.uniforms.sampleWeights.value=le.createSampleWeights(e,r),t.needsUpdate=!0}};function vn(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}class Y extends G{constructor(e,r,n=new P(256,256)){super(),this.scene=e,this.camera=r,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new F,this._oldClearColor=new F,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new P(n.x,n.y),this.saoRenderTarget=new A(this.resolution.x,this.resolution.y,{type:W}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const a=new yt;a.format=St,a.type=bt,this.normalRenderTarget=new A(this.resolution.x,this.resolution.y,{minFilter:ie,magFilter:ie,type:W,depthTexture:a}),this.normalMaterial=new He,this.normalMaterial.blending=_,this.saoMaterial=new M({defines:Object.assign({},se.defines),fragmentShader:se.fragmentShader,vertexShader:se.vertexShader,uniforms:R.clone(se.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=a,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=_,this.vBlurMaterial=new M({uniforms:R.clone(H.uniforms),defines:Object.assign({},H.defines),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=a,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=_,this.hBlurMaterial=new M({uniforms:R.clone(H.uniforms),defines:Object.assign({},H.defines),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=a,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=_,this.materialCopy=new M({uniforms:R.clone(te.uniforms),vertexShader:te.vertexShader,fragmentShader:te.fragmentShader,blending:_}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Pe,this.materialCopy.blendSrc=wt,this.materialCopy.blendDst=Ne,this.materialCopy.blendEquation=Ie,this.materialCopy.blendSrcAlpha=Et,this.materialCopy.blendDstAlpha=Ne,this.materialCopy.blendEquationAlpha=Ie,this.fsQuad=new ae(null)}render(e,r,n){this.renderToScreen&&(this.materialCopy.blending=_,this.materialCopy.uniforms.tDiffuse.value=n.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const i=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=i,this.hBlurMaterial.uniforms.depthCutoff.value=i,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(le.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new P(0,1)),le.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new P(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const s=this.materialCopy;this.params.output===Y.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===Y.OUTPUT.Default?s.blending=Pe:s.blending=_,this.renderPass(e,s,this.renderToScreen?null:n),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}renderPass(e,r,n,a,i){e.getClearColor(this.originalClearColor);const s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,a!=null&&(e.setClearColor(a),e.setClearAlpha(i||0),e.clear()),this.fsQuad.material=r,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}renderOverride(e,r,n,a,i){e.getClearColor(this.originalClearColor);const s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,a=r.clearColor||a,i=r.clearAlpha||i,a!=null&&(e.setClearColor(a),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=r,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}setSize(e,r){this.saoRenderTarget.setSize(e,r),this.blurIntermediateRenderTarget.setSize(e,r),this.normalRenderTarget.setSize(e,r),this.saoMaterial.uniforms.size.value.set(e,r),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,r),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,r),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}}Y.OUTPUT={Default:0,SAO:1,Normal:2};const hn={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new F(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class K extends G{constructor(e,r,n,a){super(),this.strength=r!==void 0?r:1,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new P(e.x,e.y):new P(256,256),this.clearColor=new F(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new A(i,s,{type:W}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const v=new A(i,s,{type:W});v.texture.name="UnrealBloomPass.h"+f,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const h=new A(i,s,{type:W});h.texture.name="UnrealBloomPass.v"+f,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),i=Math.round(i/2),s=Math.round(s/2)}const o=hn;this.highPassUniforms=R.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new M({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];i=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new P(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=te;this.copyUniforms=R.clone(d.uniforms),this.blendMaterial=new M({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Ct,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new F,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new ae(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,r){let n=Math.round(e/2),a=Math.round(r/2);this.renderTargetBright.setSize(n,a);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(n,a),this.renderTargetsVertical[i].setSize(n,a),this.separableBlurMaterials[i].uniforms.invSize.value=new P(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,r,n,a,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=K.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=K.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){const r=[];for(let n=0;n<e;n++)r.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new M({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new P(.5,.5)},direction:{value:new P(.5,.5)},gaussianCoefficients:{value:r}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new M({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}K.BlurDirectionX=new P(1,0);K.BlurDirectionY=new P(0,1);const pn={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mn extends G{constructor(){super();const e=pn;this.uniforms=R.clone(e.uniforms),this.material=new Tt({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ae(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,r,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===It?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ot&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const xn={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new P(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},gn={name:"LuminosityShader",uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float l = luminance( texel.rgb );

			gl_FragColor = vec4( l, l, l, texel.w );

		}`},yn={name:"SobelOperatorShader",uniforms:{tDiffuse:{value:null},resolution:{value:new P}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		void main() {

			vec2 texel = vec2( 1.0 / resolution.x, 1.0 / resolution.y );

		// kernel definition (in glsl matrices are filled in column-major order)

			const mat3 Gx = mat3( -1, -2, -1, 0, 0, 0, 1, 2, 1 ); // x direction kernel
			const mat3 Gy = mat3( -1, 0, 1, -2, 0, 2, -1, 0, 1 ); // y direction kernel

		// fetch the 3x3 neighbourhood of a fragment

		// first column

			float tx0y0 = texture2D( tDiffuse, vUv + texel * vec2( -1, -1 ) ).r;
			float tx0y1 = texture2D( tDiffuse, vUv + texel * vec2( -1,  0 ) ).r;
			float tx0y2 = texture2D( tDiffuse, vUv + texel * vec2( -1,  1 ) ).r;

		// second column

			float tx1y0 = texture2D( tDiffuse, vUv + texel * vec2(  0, -1 ) ).r;
			float tx1y1 = texture2D( tDiffuse, vUv + texel * vec2(  0,  0 ) ).r;
			float tx1y2 = texture2D( tDiffuse, vUv + texel * vec2(  0,  1 ) ).r;

		// third column

			float tx2y0 = texture2D( tDiffuse, vUv + texel * vec2(  1, -1 ) ).r;
			float tx2y1 = texture2D( tDiffuse, vUv + texel * vec2(  1,  0 ) ).r;
			float tx2y2 = texture2D( tDiffuse, vUv + texel * vec2(  1,  1 ) ).r;

		// gradient value in x direction

			float valueGx = Gx[0][0] * tx0y0 + Gx[1][0] * tx1y0 + Gx[2][0] * tx2y0 +
				Gx[0][1] * tx0y1 + Gx[1][1] * tx1y1 + Gx[2][1] * tx2y1 +
				Gx[0][2] * tx0y2 + Gx[1][2] * tx1y2 + Gx[2][2] * tx2y2;

		// gradient value in y direction

			float valueGy = Gy[0][0] * tx0y0 + Gy[1][0] * tx1y0 + Gy[2][0] * tx2y0 +
				Gy[0][1] * tx0y1 + Gy[1][1] * tx1y1 + Gy[2][1] * tx2y1 +
				Gy[0][2] * tx0y2 + Gy[1][2] * tx1y2 + Gy[2][2] * tx2y2;

		// magnitute of the total gradient

			float G = sqrt( ( valueGx * valueGx ) + ( valueGy * valueGy ) );

			gl_FragColor = vec4( vec3( G ), 1 );

		}`},Sn=Math.PI/180;function bn(t){return t*Sn}const wn={name:"GodRaysDepthMaskShader",uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},En={name:"GodRaysGenerateShader",uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new z}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		#define TAPS_PER_PASS 6.0

		varying vec2 vUv;

		uniform sampler2D tInput;

		uniform vec3 vSunPositionScreenSpace;
		uniform float fStepSize; // filter step size

		void main() {

		// delta from current pixel to "sun" position

			vec2 delta = vSunPositionScreenSpace.xy - vUv;
			float dist = length( delta );

		// Step vector (uv space)

			vec2 stepv = fStepSize * delta / dist;

		// Number of iterations between pixel and sun

			float iters = dist/fStepSize;

			vec2 uv = vUv.xy;
			float col = 0.0;

		// This breaks ANGLE in Chrome 22
		//	- see http://code.google.com/p/chromium/issues/detail?id=153105

		/*
		// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),
		// so i've just left the loop

		"for ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {",

		// Accumulate samples, making sure we dont walk past the light source.

		// The check for uv.y < 1 would not be necessary with "border" UV wrap
		// mode, with a black border color. I don't think this is currently
		// exposed by three.js. As a result there might be artifacts when the
		// sun is to the left, right or bottom of screen as these cases are
		// not specifically handled.

		"	col += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );",
		"	uv += stepv;",

		"}",
		*/

		// Unrolling loop manually makes it work in ANGLE

			float f = min( 1.0, max( vSunPositionScreenSpace.z / 1000.0, 0.0 ) ); // used to fade out godrays

			if ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

		// Should technically be dividing by 'iters but 'TAPS_PER_PASS' smooths out
		// objectionable artifacts, in particular near the sun position. The side
		// effect is that the result is darker than it should be around the sun, as
		// TAPS_PER_PASS is greater than the number of samples actually accumulated.
		// When the result is inverted (in the shader 'godrays_combine this produces
		// a slight bright spot at the position of the sun, even when it is occluded.

			gl_FragColor = vec4( col/TAPS_PER_PASS );
			gl_FragColor.a = 1.0;

		}`},Cn={name:"GodRaysCombineShader",uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tColors;
		uniform sampler2D tGodRays;

		uniform float fGodRayIntensity;

		void main() {

		// Since THREE.MeshDepthMaterial renders foreground objects white and background
		// objects black, the god-rays will be white streaks. Therefore value is inverted
		// before being combined with tColors

			gl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );
			gl_FragColor.a = 1.0;

		}`},Tn={name:"GodRaysFakeSunShader",uniforms:{vSunPositionScreenSpace:{value:new z},fAspect:{value:1},sunColor:{value:new F(16772608)},bgColor:{value:new F(0)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		varying vec2 vUv;

		uniform vec3 vSunPositionScreenSpace;
		uniform float fAspect;

		uniform vec3 sunColor;
		uniform vec3 bgColor;

		void main() {

			vec2 diff = vUv - vSunPositionScreenSpace.xy;

		// Correct for aspect ratio

			diff.x *= fAspect;

			float prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );
			prop = 0.35 * pow( 1.0 - prop, 3.0 );

			gl_FragColor.xyz = ( vSunPositionScreenSpace.z > 0.0 ) ? mix( sunColor, bgColor, 1.0 - prop ) : bgColor;
			gl_FragColor.w = 1.0;

		}`};class Pn extends G{constructor(e,r,n={}){super(),this.scene=e,this.camera=r,this.orthoScene=new $e,this.orthoCamera=new Be(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=n.background||1297,this.sunColor=n.sunColor||16776960,this.multiplier=n.multiplier||.25,this.clipPosition=new Rt,this.sunPosition=n.sunPosition||new z(0,1e3,1e3),this.screenSpacePosition=new z,this.rtTextureDepth=new A(1,1),this.rtTextureDepthMask=new A(1,1),this.rtTextureGodRays1=new A(1,1),this.rtTextureGodRays2=new A(1,1),this.materialDepth=new J;const a=wn;this.godrayMaskUniforms=R.clone(a.uniforms),this.materialGodraysDepthMask=new M({uniforms:this.godrayMaskUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader});const i=En;this.godrayGenUniforms=R.clone(i.uniforms),this.materialGodraysGenerate=new M({uniforms:this.godrayGenUniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});const s=Cn;this.godrayCombineUniforms=R.clone(s.uniforms),this.materialGodraysCombine=new M({uniforms:this.godrayCombineUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader});const o=Tn;this.godraysFakeSunUniforms=R.clone(o.uniforms),this.materialGodraysFakeSun=new M({uniforms:this.godraysFakeSunUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Q(new We(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,r,n,a){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=a,this.godrayGenUniforms.tInput.value=r,e.setRenderTarget(n),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,r,n){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const a=.74*window.innerHeight,i=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-i/2,this.screenSpacePosition.y-a/2,i,a),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(n),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=n.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(r),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,r){this.rtTextureDepth.setSize(e,r),this.rtTextureDepthMask.setSize(e,r);const n=e*this.multiplier,a=r*this.multiplier;this.rtTextureGodRays1.setSize(n,a),this.rtTextureGodRays2.setSize(n,a)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}const ot=`/* BEGIN HEADER */
uniform float curvature;
uniform float vertexThickness;
uniform float edgeThickness;
uniform float segments;
#if DIMENSIONS >= 4
uniform float fov4;
#endif
#if DIMENSIONS >= 5
uniform float fov5;
#endif
#if DIMENSIONS >= 6
uniform float fov6;
#endif
#if DIMENSIONS >= 7
uniform float fov7;
#endif
#if DIMENSIONS >= 8
uniform float fov8;
#endif
#if DIMENSIONS >= 9
uniform float fov9;
#endif

#if DIMENSIONS == 2
uniform mat2 rotationMatrix;
attribute vec2 instancePosition;
attribute vec2 instanceTarget;
attribute vec2 instanceCentroid;
#elif DIMENSIONS == 3
uniform mat3 rotationMatrix;
attribute vec3 instancePosition;
attribute vec3 instanceTarget;
attribute vec3 instanceCentroid;
#elif DIMENSIONS == 4
uniform mat4 rotationMatrix;
attribute vec4 instancePosition;
attribute vec4 instanceTarget;
attribute vec4 instanceCentroid;
#elif DIMENSIONS >= 5
attribute mat3 instancePosition;
attribute mat3 instanceTarget;
attribute mat3 instanceCentroid;

struct vec5 {
  vec4 v;
  float u;
};
#endif
#if DIMENSIONS >= 6
struct vec6 {
  vec4 v;
  vec2 u;
};
#endif
#if DIMENSIONS >= 7
struct vec7 {
  vec4 v;
  vec3 u;
};
#endif
#if DIMENSIONS >= 8
struct vec8 {
  vec4 v;
  vec4 u;
};
#endif
#if DIMENSIONS >= 9
struct vec9 {
  vec4 v;
  vec4 u;
  float t;
};
#endif

attribute vec3 instanceColor;

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  // Set color

  #if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor.rgb = instanceColor.rgb;
  #endif

  // <begin_vertex>
  vec3 transformed;

  // <beginnormal_vertex>
  vec3 objectNormal;

  #if HYPERTYPE == 2 // Face
  faceVertex(transformed, objectNormal);
  #elif HYPERTYPE == 1 // Edge
  edgeVertex(transformed, objectNormal);
  #elif HYPERTYPE == 0 // Vertex
  vertexVertex(transformed, objectNormal);
  #elif HYPERTYPE == 3
  if(!nan(iCentroid)) {
    faceVertex(transformed, objectNormal);
  } else if(!nan(iTarget)) {
    edgeVertex(transformed, objectNormal);
  } else {
    vertexVertex(transformed, objectNormal);
  }
  #endif

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}
`,Nn=`/* BEGIN INCLUDE */

bool nan(in vec2 v) {
  return isnan(v.x) || isnan(v.y);
}

bool nan(in vec3 v) {
  return nan(v.xy) || isnan(v.z);
}

bool nan(in vec4 v) {
  return nan(v.xyz) || isnan(v.w);
}

#if DIMENSIONS >= 5
bool nan(in vec5 v) {
  return nan(v.v) || isnan(v.u);
}
#endif

#if DIMENSIONS >= 6
bool nan(in vec6 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 7
bool nan(in vec7 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 8
bool nan(in vec8 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 9
bool nan(in vec9 v) {
  return nan(v.v) || nan(v.u) || isnan(v.t);
}
#endif

float trix(in float c, in float p, in float t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec2 trix(in vec2 c, in vec2 p, in vec2 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec3 trix(in vec3 c, in vec3 p, in vec3 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec4 trix(in vec4 c, in vec4 p, in vec4 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}

#if DIMENSIONS == 5
vec5 mix(in vec5 a, in vec5 b, in float t) {
  return vec5(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec5 trix(in vec5 c, in vec5 p, in vec5 t, in vec2 a) {
  return vec5(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 6
vec6 mix(in vec6 a, in vec6 b, in float t) {
  return vec6(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec6 trix(in vec6 c, in vec6 p, in vec6 t, in vec2 a) {
  return vec6(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 7
vec7 mix(in vec7 a, in vec7 b, in float t) {
  return vec7(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec7 trix(in vec7 c, in vec7 p, in vec7 t, in vec2 a) {
  return vec7(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 8
vec8 mix(in vec8 a, in vec8 b, in float t) {
  return vec8(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec8 trix(in vec8 c, in vec8 p, in vec8 t, in vec2 a) {
  return vec8(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 9
vec9 mix(in vec9 a, in vec9 b, in float t) {
  return vec9(mix(a.v, b.v, t), mix(a.u, b.u, t), mix(a.t, b.t, t));
}
vec9 trix(in vec9 c, in vec9 p, in vec9 t, in vec2 a) {
  return vec9(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a), trix(c.t, p.t, t.t, a));
}
#endif

float len(in vec2 v) {
  return length(v);
}

float len(in vec3 v) {
  return length(v);
}

float len(in vec4 v) {
  return length(v);
}

#if DIMENSIONS == 5
float len(in vec5 v) {
  return sqrt(dot(v.v, v.v) + v.u * v.u);
}
#elif DIMENSIONS == 6
float len(in vec6 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 7
float len(in vec7 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 8
float len(in vec8 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 9
float len(in vec9 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u) + v.t * v.t);
}
#endif

float xdot(in vec2 v) {
  return v.x * v.x + curvature * v.y * v.y;
}

float xdot(in vec3 v) {
  return dot(v.xy, v.xy) + curvature * v.z * v.z;
}

float xdot(in vec4 v) {
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
}

#if DIMENSIONS == 5
float xdot(in vec5 v) {
  return dot(v.v, v.v) + curvature * v.u * v.u;
}
#elif DIMENSIONS == 6
float xdot(in vec6 v) {
  return dot(v.v, v.v) + v.u.x * v.u.x + curvature * v.u.y * v.u.y;
}
#elif DIMENSIONS == 7
float xdot(in vec7 v) {
  return dot(v.v, v.v) + dot(v.u.xy, v.u.xy) + curvature * v.u.z * v.u.z;
}
#elif DIMENSIONS == 8
float xdot(in vec8 v) {
  return dot(v.v, v.v) + dot(v.u.xyz, v.u.xyz) + curvature * v.u.w * v.u.w;
}
#elif DIMENSIONS == 9
float xdot(in vec9 v) {
  return dot(v.v, v.v) + dot(v.u, v.u) + curvature * v.t * v.t;
}
#endif

vec2 xnormalize(in vec2 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec3 xnormalize(in vec3 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.w *= .999999;
  // float d = curvature * xdot(v);
  // if(d < 0.) {
  //   v.w = 0.;
  //   v.xyz /= sqrt(dot(v.xyz, v.xyz));
  //   return v;
  // }
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

#if DIMENSIONS == 5
vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.u *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec5(v.v / n, v.u / n);
}
#elif DIMENSIONS == 6
vec6 xnormalize(in vec6 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.u.x *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec6(v.v / n, v.u / n);
}
#elif DIMENSIONS == 7
vec7 xnormalize(in vec7 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.u.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec7(v.v / n, v.u / n);
}
#elif DIMENSIONS == 8
vec8 xnormalize(in vec8 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.u.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec8(v.v / n, v.u / n);
}
#elif DIMENSIONS == 9
vec9 xnormalize(in vec9 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  v.t *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec9(v.v / n, v.u / n, v.t / n);
}
#endif

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

vec3 xproject(in vec3 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  // Let the camera do the projection
  // return vec3(v.xy / (v.z - curvature), 0.);
  return v.xyz;
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #elif PROJECTION == 2 // KLEIN
  return vec3(v.xy / v.z, 0.);
  #elif PROJECTION == 3 // INVERTED
  return vec3(v.xy / (v.z - 1.), 1.);
  #elif PROJECTION == 4 // JEMISPHERE
  return vec3(v.xy / v.z, 1. / v.z);
  #elif PROJECTION == 5 // UPPERHALF
  v.xy /= v.z;
  v.z = 1. / v.z;

  v.yz *= 2. / (1. + v.x);
  v.x = 1.;
  v.z -= 2.;
  return v.zyx;
  #endif

  return v.xyz;
}

#if DIMENSIONS >= 4
vec3 xproject(in vec4 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  return v.xyz / (v.w * fov4 + 1.);
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return v.xyz;
  #elif PROJECTION == 2 // KLEIN
  return v.xyz / (v.w * fov4);
  #elif PROJECTION == 3 // INVERTED
  return v.xyz / (v.w * fov4 - 1.);
  #elif PROJECTION == 4 // JEMISPHERE
  return vec3(v.xyz / v.w) / (v.w * fov4 + 1.);
  #elif PROJECTION == 5 // UPPERHALF
  v.xyz /= v.w;
  v.w = 1. / v.w;

  v.yzw *= 2. / (1. + v.x);
  v.w -= 1.;
  return v.wyx;
  #endif
}
#endif

#if DIMENSIONS >= 5
vec3 xproject(in vec5 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  return xproject(v.v / (v.u * fov5 + 1.));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(v.v);
  #elif PROJECTION == 2 // KLEIN
  return xproject(v.v / (v.u * fov5));
  #elif PROJECTION == 3 // INVERTED
  return xproject(v.v / (v.u * fov5 - 1.));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(v.v);
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(v.v);
  #endif
}
#endif

#if DIMENSIONS >= 6
vec3 xproject(in vec6 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.u.y * fov6 + 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.u.y * fov6;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.u.y * fov6 - 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec5(v.v, v.u.x));
  #endif
}
#endif

#if DIMENSIONS >= 7
vec3 xproject(in vec7 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.u.z * fov7 + 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.u.z * fov7;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.u.z * fov7 - 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec6(v.v, v.u.xy));
  #endif
}
#endif

#if DIMENSIONS >= 8
vec3 xproject(in vec8 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.u.w * fov8 + 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.u.w * fov8;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.u.w * fov8 - 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec7(v.v, v.u.xyz));
  #endif
}
#endif

#if DIMENSIONS >= 9
vec3 xproject(in vec9 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.t * fov9 + 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.t * fov9;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.t * fov9 - 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec8(v.v, v.u));
  #endif
}
#endif

#if DIMENSIONS == 5
vec5 fromMat(in mat3 m) {
  return vec5(vec4(m[0], m[1][0]), m[1][1]);
}
#elif DIMENSIONS == 6
vec6 fromMat(in mat3 m) {
  return vec6(vec4(m[0], m[1][0]), vec2(m[1][1], m[1][2]));
}
#elif DIMENSIONS == 7
vec7 fromMat(in mat3 m) {
  return vec7(vec4(m[0], m[1][0]), vec3(m[1][1], m[1][2], m[2][0]));
}
#elif DIMENSIONS == 8
vec8 fromMat(in mat3 m) {
  return vec8(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]));
}
#elif DIMENSIONS == 9
vec9 fromMat(in mat3 m) {
  return vec9(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]), m[2][2]);
}
#endif
/* END INCLUDE */

// mat4 findRotationMatrix(in vec4 u, in vec4 v) {
//   vec4 w = u + v;
//   if(length(w) < 0.0001) {
//     return mat4(-1.);
//   }

//   return 2. * outerProduct(w, w) / dot(w, w) - mat4(1.);
// }
// mat3 findRotationMatrix(in vec3 u, in vec3 v) {
//   vec3 w = u + v;
//   if(length(w) < 0.0001) {
//     return mat3(-1.);
//   }

//   return 2. * outerProduct(w, w) / dot(w, w) - mat3(1.);
// }

// vec3 xprojectnormal(in vec4 n, in vec4 p, in vec3 pp) {
//   #if DIMENSIONS == 4

//   vec4 np = p + n;
//   vec3 npp = xproject(np);

//   return npp - pp;
//   #else
//   return n.xyz;
//   #endif
// }

// vec4 xprojectnormal(in vec4 p, in vec4 n) {
//   #if DIMENSIONS == 4
//   vec4 v = xproject(n);
//   #if PROJECTION == 'STEREOGRAPHIC'
//   return vec4(v.xyz * (p.w - curvature) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'ORTHOGRAPHIC'
//   return vec4(v.xyz + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'KLEIN'
//   return vec4(v.xyz * (p.w) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'INVERTED'
//   return vec4(n.xyz * (p.w + curvature) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'JEMISPHERE'
//   return vec4(v.xyz, 1.);
//   #endif
//   #if PROJECTION == 'UPPERHALF'
//   v.xyz /= v.w;
//   v.w = 1. / v.w;

//   v.xzw *= 2. / (1. + v.y);
//   v.y = 1.;
//   v.wxyz = v.yxzw;
//   v.z *= -1.;
//   return v;
//   #endif
//   #else
//   return n;
//   #endif
// }

// vec4 cross4(in vec4 v1, in vec4 v2, in vec4 v3) {
//   return vec4(v2.y * v3.z * v1.w -
//     v3.y * v2.z * v1.w -
//     v1.y * v3.z * v2.w +
//     v3.y * v1.z * v2.w +
//     v3.w * v1.y * v2.z -
//     v3.w * v2.y * v1.z, -v2.x * v3.z * v1.w +
//     v3.x * v2.z * v1.w +
//     v1.x * v3.z * v2.w -
//     v3.x * v1.z * v2.w -
//     v3.w * v1.x * v2.z +
//     v3.w * v2.x * v1.z, v2.x * v3.y * v1.w -
//     v3.x * v2.y * v1.w -
//     v1.x * v3.y * v2.w +
//     v3.x * v1.y * v2.w +
//     v3.w * v1.x * v2.y -
//     v3.w * v2.x * v1.y, -v1.x * v2.y * v3.z +
//     v1.x * v3.y * v2.z +
//     v2.x * v1.y * v3.z -
//     v2.x * v3.y * v1.z -
//     v3.x * v1.y * v2.z +
//     v3.x * v2.y * v1.z);
// }
`,In=`/* BEGIN INCLUDE */

const float TAU = 6.28318530717958647692528676655900576;
const float EPS = .001;
const float SCALING = .001;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

vecN pos;
vecN iPosition;
#if HYPERTYPE > 0
vecN next;
vecN iTarget;
#endif
#if HYPERTYPE > 1
vecN other;
vecN iCentroid;
#endif

vec3 inflate(in vec3 point, in vecN pos, in vec3 norm, in float size, in float min) {
  // Removing 3d length in perspective computation
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION == 0
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif

  float inv = max(min, 1. / len(pos));

  return size * SCALING * norm * inv + point;
}

#if HYPERTYPE == 2 || HYPERTYPE == 3
void faceVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  iTarget = fromMat(instanceTarget);
  iCentroid = fromMat(instanceCentroid);
  #else
  iPosition = rotationMatrix * instancePosition;
  iTarget = rotationMatrix * instanceTarget;
  iCentroid = rotationMatrix * instanceCentroid;
  #endif
  vec2 t = ease(uv);
  pos = trix(iCentroid, iPosition, iTarget, t);
  next = trix(iCentroid, iPosition, iTarget, t + vec2(EPS, 0.));
  other = trix(iCentroid, iPosition, iTarget, t + vec2(0., EPS));

  if(length(t) != 0. || segments > 1.) {
    pos = xnormalize(pos);
    next = xnormalize(next);
    other = xnormalize(other);
  }

  transformed = xproject(pos);

  vec3 nn = xproject(next) - transformed;
  vec3 oo = xproject(other) - transformed;

  // Refine if near collinearity
  if(length(nn) < .0001 || length(oo) < .0001) {
    next = trix(iCentroid, iPosition, iTarget, t + vec2(.1, 0.));
    other = trix(iCentroid, iPosition, iTarget, t + vec2(0., .1));

    if(length(t) != 0. || segments > 1.) {
      next = xnormalize(next);
      other = xnormalize(other);
    }

    nn = xproject(next) - transformed;
    oo = xproject(other) - transformed;
  }

  objectNormal = cross(nn, oo);
}
#endif

#if HYPERTYPE == 1 || HYPERTYPE == 3
void edgeVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  iTarget = fromMat(instanceTarget);
  #else
  iPosition = rotationMatrix * instancePosition;
  iTarget = rotationMatrix * instanceTarget;
  #endif

  float t = ease(uv.y);
  pos = mix(iPosition, iTarget, t);
  next = mix(iPosition, iTarget, t + EPS);
  // Position segments on hypersurface
  pos = xnormalize(pos);
  next = xnormalize(next);

  transformed = xproject(pos);

  vec3 n = xproject(next) + NOISE; // Avoid collinearity
  vec3 k = normalize(transformed - n); // current segment direction

    // Rodrigues' rotation formula
    // To rotate v around axis k by angle r:
  float r = (1. - uv.x) * TAU;
  vec3 v = normalize(cross(n, transformed));
  objectNormal = normalize(objectNormal = v * cos(r) + cross(k, v) * sin(r)); // + k * dot(k, v) * (1. - cos(r));
  transformed = inflate(transformed, pos, objectNormal, edgeThickness, 0.);
}
#endif

#if HYPERTYPE == 0 || HYPERTYPE == 3
void vertexVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  #else
  iPosition = rotationMatrix * instancePosition;
  #endif

  pos = xnormalize(iPosition);
  transformed = xproject(pos);
  objectNormal = normal;
  transformed = inflate(transformed, pos, objectNormal, vertexThickness, .01);
}
#endif
/* END INCLUDE */
`,Mn=`/* BEGIN INCLUDE */

#define PI 3.141592653589793
#define HALF_PI 1.5707963267948966

float ease(float t) {
  #if EASING == 1  // linear
  return t;
  #elif EASING == 2 // sine
  return -0.5 * (cos(PI * t) - 1.);
  #elif EASING == 3 // quadratic
  float p = 2. * t * t;
  return t < 0.5 ? p : -p + (4. * t) - 1.;
  #elif EASING == 4 // cubic
  return t < 0.5 ? 4. * pow(t, 3.) : 1. - pow(-2. * t + 2., 3.) / 2.;
  #elif EASING == 5 // quartic
  return t < 0.5 ? 8. * pow(t, 4.) : -8. * pow(t - 1., 4.) + 1.;
  #elif EASING == 6 // quintic
  return t < 0.5 ? 16. * pow(t, 5.) : 1. - pow(-2. * t + 2., 5.) / 2.;
  #elif EASING == 7 // exponential
  return t == 0. || t == 1. ? t : t < 0.5 ? +0.5 * pow(2., (20. * t) - 10.) : -0.5 * pow(2., 10. - (t * 20.)) + 1.;
  #elif EASING == 8 // circular
  return t < 0.5 ? 0.5 * (1. - sqrt(1. - 4. * t * t)) : 0.5 * (sqrt((3. - 2. * t) * (2. * t - 1.)) + 1.);
  #elif EASING == 9 // back
  const float c1 = 1.70158;
  const float c2 = c1 * 1.525;
  return .5 * (t < 0.5 ? (pow(2. * t, 2.) * ((c2 + 1.) * 2. * t - c2)) : (pow(2. * t - 2., 2.) * ((c2 + 1.) * (t * 2. - 2.) + c2) + 2.));
  #elif EASING == 10 // elastic
  const float c5 = (2. * PI) / 4.5;
  return t == 0. ? 0. : t == 1. ? 1. : t < 0.5 ? -(pow(2., 20. * t - 10.) * sin((20. * t - 11.125) * c5)) / 2. : (pow(2., -20. * t + 10.) * sin((20. * t - 11.125) * c5)) / 2. + 1.;
  #elif EASING == 11 // bounce
  float s = 7.5625;
  float p = 2.75;
  float l;
  if(t < (1. / p)) {
    l = s * pow(t, 2.);
  } else {
    if(t < (2. / p)) {
      t -= (1.5 / p);
      l = s * pow(t, 2.) + 0.75;
    } else {
      if(t < (2.5 / p)) {
        t -= (2.25 / p);
        l = s * pow(t, 2.) + 0.9375;
      } else {
        t -= (2.625 / p);
        l = s * pow(t, 2.) + 0.984375;
      }
    }
  }
  return l;
  #elif EASING == 12 // inverse_sine
  return acos(1. - (2. * t)) / PI;
  #elif EASING == 13 // inverse_quadratic
  return t < .5 ? sqrt(t / 2.) : .5 * (2. - sqrt(2.) * sqrt(1. - t));
  #elif EASING == 14 // inverse_cubic
  return t < 0.5 ? pow(t / 4., 1. / 3.) : 1. - pow((1. - t) / 4., 1. / 3.);
  #elif EASING == 15 // inverse_quartic
  return t < .5 ? pow(t / 8., 1. / 4.) : 1. - pow((1. - t) / 8., 1. / 4.);
  #elif EASING == 16 // inverse_quintic
  return t < .5 ? pow(t / 16., 1. / 5.) : 1. - pow((1. - t) / 16., 1. / 5.);
  #else
  return t;
  #endif
}

vec2 ease(vec2 t) {
  return vec2(ease(t.x), ease(t.y));
}
/* END INCLUDE */
`,Dn=ot.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],Oe=ot.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],On=Nn.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1]+`
`+Mn.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1]+`
`+In.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],Re=(t,e)=>t.replace(/\bvecN\b/g,`vec${e}`),Z=new Set,O=(t,e,r="universal")=>{t=t.clone(),t.vertexColors=![J,M,He,ne].find(n=>t instanceof n),t._rt=e,t._type=r,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let n=4;n<=e.dimensions;n++)t.uniforms[`fov${n}`]={value:90};return e.dimensions<5&&(t.uniforms.rotationMatrix={value:e.matrix}),t.onBeforeCompile=n=>{const{dimensions:a,projection:i,easing:s}=t._rt,o=[`#define DIMENSIONS ${a}`,`#define PROJECTION ${Qe.indexOf(i)}`,`#define EASING ${Je.indexOf(s)}`,`#define HYPERTYPE ${["vertex","edge","face","universal"].indexOf(t._type)}`];Object.assign(n.uniforms,t.uniforms),t instanceof Le?n.vertexShader=n.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof J||t instanceof ne?n.vertexShader=n.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof M&&(n.vertexShader=n.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",Oe+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),n.vertexShader=[...o,Re(Dn,a),Re(On,a),n.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",Oe)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t._type}_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}_${t._rt.easing}`,t.addEventListener("dispose",()=>{Z.delete(t)}),Z.add(t),t},Ae=window.location.search.includes("stats"),Rn=()=>{let t;Ae&&(t=new rn,t.dom.id="stats",document.body.appendChild(t.dom));const e=new At({stencil:!1,powerPreference:"high-performance"});e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e.domElement);const r=new jt(90,window.innerWidth/window.innerHeight,.01,1e3);r.position.set(0,0,-1),r.up.set(1,0,0),r.lookAt(0,0,0),r.zoom=Math.min(1,window.innerWidth/window.innerHeight),r.updateProjectionMatrix();const n=new $e;r.updateProjectionMatrix(),n.add(r);const a=new dn(e);a.setPixelRatio(window.devicePixelRatio);const i=new fn(n,r);return a.addPass(i),{composer:a,camera:r,scene:n,render:Ae?()=>{t.update(),a.render()}:()=>a.render()}},je=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.customDepthMaterial.dispose(),e.customDistanceMaterial.dispose());const r=k[t.ambiance],{dimensions:n}=t,a=new qe(1,32,32),i=new Ee().copy(a),s=n>4?9:n;i.setAttribute("instancePosition",new j(new Float32Array(t.maxVertices*s),s)),i.setAttribute("instanceTarget",new j(new Float32Array(t.maxVertices*s),s)),i.setAttribute("instanceCentroid",new j(new Float32Array(t.maxVertices*s),s)),i.setAttribute("instanceColor",new j(new Float32Array(t.maxVertices*3),3));const o=new Q(i,O(r.vertexMaterial,t,"vertex"));o.matrixAutoUpdate=!1,o.matrixWorldAutoUpdate=!1,i.attributes.instanceTarget.array.fill(NaN),i.attributes.instanceCentroid.array.fill(NaN),o.geometry.instanceCount=0,o.frustumCulled=!1,o.customDepthMaterial=O(new J({depthPacking:ue}),t,"vertex"),o.customDistanceMaterial=O(new ne,t,"vertex"),o.castShadow=r.shadow,o.name="instanced-vertex",o.visible=t.showVertices,t.scene.add(o)},Ue=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.customDepthMaterial.dispose(),e.customDistanceMaterial.dispose());const r=k[t.ambiance],{dimensions:n,curve:a,segments:i}=t,s=a?i:1,o=new Ut(1,1,1,8,s,!0),c=new Ee().copy(o),u=n>4?9:n;c.setAttribute("instancePosition",new j(new Float32Array(t.maxEdges*u),u)),c.setAttribute("instanceTarget",new j(new Float32Array(t.maxEdges*u),u)),c.setAttribute("instanceCentroid",new j(new Float32Array(t.maxEdges*u),u)),c.setAttribute("instanceColor",new j(new Float32Array(t.maxEdges*3),3));const d=new Q(c,O(r.edgeMaterial,t,"edge"));d.matrixAutoUpdate=!1,d.matrixWorldAutoUpdate=!1,c.attributes.instanceCentroid.array.fill(NaN),d.geometry.instanceCount=0,d.frustumCulled=!1,d.customDepthMaterial=O(new J({depthPacking:ue}),t,"edge"),d.customDistanceMaterial=O(new ne,t,"edge"),d.castShadow=r.shadow,d.name="instanced-edge",d.visible=t.showEdges,t.scene.add(d)},An=t=>{let e=null,r=t.scene.getObjectByName("instanced-face");r&&(e=r.material.opacity,t.scene.remove(r),r.geometry.dispose(),r.material.dispose(),r.customDepthMaterial.dispose(),r.customDistanceMaterial.dispose());const n=k[t.ambiance],{dimensions:a,curve:i,segments:s}=t,o=new Ve,c=[],u=[],d=[],f=[],v=i?s:1,h=1/v;for(let y=0;y<v+1;y++)for(let m=0;m<y+1;m++)u.push((2*m-y)*h/2,y*h,0),d.push(0,0,1),f.push(h*m,1-h*y);for(let y=1;y<v+1;y++)for(let m=0;m<y;m++){const b=y*(y+1)/2+m,D=y*(y-1)/2+m;if(c.push(D,b,b+1),y<v){const I=(y+1)*(y+2)/2+m;c.push(I+1,b+1,b)}}o.setIndex(c),o.setAttribute("position",new X(u,3)),o.setAttribute("normal",new X(d,3)),o.setAttribute("uv",new X(f,2));const E=new Ee().copy(o),w=a>4?9:a;E.setAttribute("instanceCentroid",new j(new Float32Array(t.maxFaces*w),w)),E.setAttribute("instancePosition",new j(new Float32Array(t.maxFaces*w),w)),E.setAttribute("instanceTarget",new j(new Float32Array(t.maxFaces*w),w)),E.setAttribute("instanceColor",new j(new Float32Array(t.maxFaces*3),3));const p=new Q(E,O(n.faceMaterial,t,"face"));p.matrixAutoUpdate=!1,p.matrixWorldAutoUpdate=!1,p.geometry.instanceCount=0,p.frustumCulled=!1,p.customDepthMaterial=O(new J({depthPacking:ue}),t,"face"),p.customDistanceMaterial=O(new ne,t,"face"),p.name="instanced-face",p.visible=t.showFaces,p.renderOrder=1,e&&(p.material.opacity=e),t.scene.add(p)},jn=(t,e=null)=>{const r=k[t.ambiance],n=t.scene.getObjectByName("instanced-vertex"),a=n.geometry.attributes.instancePosition.array,{dimensions:i}=t;let s=e?e[0]:0,o=e?e[1]:t.vertices.length;const c=i>4?9:i;n.geometry.instanceCount=o;for(let u=s;u<o;u++){let d=t.vertices[u].vertex;i>4&&(d=$(t.matrix,d));for(let h=0;h<i;h++)a[u*c+h]=d[h];const f=n.geometry.attributes.instanceColor.array,v=r.color(t.vertices[u],"vertex",i);f[u*3+0]=v.r,f[u*3+1]=v.g,f[u*3+2]=v.b}n.geometry.attributes.instancePosition.needsUpdate=!0,n.geometry.attributes.instanceColor.needsUpdate=!0},Un=(t,e=null)=>{const r=k[t.ambiance],n=t.scene.getObjectByName("instanced-edge"),a=n.geometry.attributes.instancePosition.array,i=n.geometry.attributes.instanceTarget.array,{dimensions:s}=t;let o=e?e[0]:0,c=e?e[1]:t.edges.length;const u=s>4?9:s;n.geometry.instanceCount=c;for(let d=o;d<c;d++){const f=t.edges[d];let v=t.vertices[f.start].vertex,h=t.vertices[f.end].vertex;s>4&&(v=$(t.matrix,v),h=$(t.matrix,h));for(let p=0;p<s;p++)a[d*u+p]=v[p],i[d*u+p]=h[p];const E=n.geometry.attributes.instanceColor.array,w=r.color(f,"edge",s);E[d*3+0]=w.r,E[d*3+1]=w.g,E[d*3+2]=w.b}n.geometry.attributes.instancePosition.needsUpdate=!0,n.geometry.attributes.instanceTarget.needsUpdate=!0,n.geometry.attributes.instanceColor.needsUpdate=!0},Fn=(t,e=null)=>{const r=k[t.ambiance],n=t.scene.getObjectByName("instanced-face"),a=n.geometry.attributes.instanceCentroid.array,i=n.geometry.attributes.instancePosition.array,s=n.geometry.attributes.instanceTarget.array,{dimensions:o}=t;let c=e?e[0]:0,u=e?e[1]:t.faces.length,d=0;for(let v=0;v<c;v++){const h=t.faces[v].vertices.length;d+=h<3?0:h===3?1:h}const f=o>4?9:o;for(let v=c;v<u;v++){const h=t.faces[v];if(h.vertices.length<3)continue;let E;if(h.vertices.length===3)E=[[t.vertices[h.vertices[0]].vertex,t.vertices[h.vertices[1]].vertex,t.vertices[h.vertices[2]].vertex]],o>4&&(E[0][0]=$(t.matrix,E[0][0]),E[0][1]=$(t.matrix,E[0][1]),E[0][2]=$(t.matrix,E[0][2]));else{const w=new Array(h.vertices.length);for(let y=0;y<h.vertices.length;y++)w[y]=t.vertices[h.vertices[y]].vertex,o>4&&(w[y]=$(t.matrix,w[y]));const p=new Array(o).fill(0);for(let y=0;y<w.length;y++){const m=w[y];for(let b=0;b<o;b++)p[b]+=m[b]}for(let y=0;y<o;y++)p[y]/=w.length;E=new Array(w.length);for(let y=0;y<w.length;y++)E[y]=[p,w[y],w[(y+1)%w.length]]}for(let w=0;w<E.length;w++){let[p,y,m]=E[w];h.word.length%2===(t.curvature>0?0:1)&&([y,m]=[m,y]);for(let I=0;I<o;I++)a[d*f+I]=p[I],i[d*f+I]=y[I],s[d*f+I]=m[I];const b=n.geometry.attributes.instanceColor.array,D=r.color(h,"face",o);b[d*3+0]=D.r,b[d*3+1]=D.g,b[d*3+2]=D.b,d++}}n.geometry.instanceCount=d,n.geometry.attributes.instancePosition.needsUpdate=!0,n.geometry.attributes.instanceTarget.needsUpdate=!0,n.geometry.attributes.instanceCentroid.needsUpdate=!0,n.geometry.attributes.instanceColor.needsUpdate=!0},de=(t,e)=>{const r=t.scene.getObjectByName(`instanced-${e}`);r.visible=t[e==="vertex"?"showVertices":e==="edge"?"showEdges":"showFaces"]},ye=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const r=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]],faces:[t.ranges[0].faces[0],t.ranges[t.currentOrder-1].faces[1]]};t.scene.getObjectByName("instanced-vertex").visible&&jn(t,r.vertices),t.scene.getObjectByName("instanced-edge").visible&&Un(t,r.edges),t.scene.getObjectByName("instanced-face").visible&&Fn(t,r.faces),t.render(),document.title=`Coxeter Explorer - ${t.spaceType==="finite"?"S":t.spaceType==="affine"?"E":"H"}^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges, ${t.faces.length} faces`},_n=t=>{t.camera.fov=t.fov3,t.camera.updateProjectionMatrix(),t.render()},fe=new oe(xn),zn=t=>{const{composer:e,msaa:r,msaaSamples:n}=t,a=e.renderer.getDrawingBufferSize(new P),i=new A(a.width,a.height,{samples:r?n:0,type:W});e.reset(i),lt(t)},lt=t=>{const e=k[t.ambiance],{scene:r,composer:n,camera:a}=t,i=t.scene.getObjectByName("instanced-vertex"),s=t.scene.getObjectByName("instanced-edge"),o=t.scene.getObjectByName("instanced-face");i.material.dispose(),s.material.dispose(),o.material.dispose(),i.material=O(e.vertexMaterial,t,"vertex"),s.material=O(e.edgeMaterial,t,"edge"),o.material=O(e.faceMaterial,t,"face"),e.env?r.environment=e.env:r.environment=null,typeof e.background!="number"?r.background=e.background:(r.background=null,n.renderer.setClearColor(new F(e.background),1));const c=[];r.traverse(v=>{v.isLight&&c.push(v)}),c.forEach(v=>{v.parent.remove(v)});let u=r.getObjectByName("ground");u&&(u.geometry.dispose(),u.material.dispose(),r.remove(u)),e.shadow&&(n.renderer.shadowMap.type=Ft,e.ground==="sphere"?u=new Q(new qe(20,32,32),new Me({color:16777215,side:_t,depthWrite:!1})):e.ground==="plane"&&(u=new Q(new We(1e3,1e3),new Me({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),u.rotation.y=2*Math.PI/3,u.position.x=-4),u.name="ground",u.receiveShadow=!0,r.add(u)),n.renderer.shadowMap.enabled=e.shadow,n.renderer.shadowMap.type=zt,i.castShadow=e.shadow,s.castShadow=e.shadow;const d=e.shadow?v=>{v.shadow&&(v.castShadow=!0,v.shadow.mapSize.width=2048,v.shadow.mapSize.height=2048,v.shadow.camera.near=a.near,v.shadow.camera.far=a.far,v.shadow.camera.fov=a.fov)}:()=>{};(e.lights||[]).forEach(v=>{d(v),r.add(v)}),(e.cameraLights||[]).forEach(v=>{d(v),a.add(v)});const f=e.fx||["copy"];n.renderer.toneMapping=e.toneMapping||kt,n.renderer.outputColorSpace=e.colorSpace||Gt,n.renderer.toneMappingExposure=e.exposure||1,n.passes.slice(1).forEach(v=>{n.removePass(v),v.dispose()}),f.forEach(v=>{if(v==="copy")n.addPass(n.copyPass);else if(v==="sao"){const h=new Y(r,a,!1,!0);h.normalMaterial=O(h.normalMaterial,t),h.params.output=Y.OUTPUT.Default,h.params.saoBias=.5,h.params.saoIntensity=1e-6,h.params.saoScale=10,h.params.saoKernelRadius=50,h.params.saoMinResolution=0,h.params.saoBlur=!0,h.params.saoBlurRadius=8,h.params.saoBlurStdDev=4,h.params.saoBlurDepthCutoff=.01,n.addPass(h)}else if(v==="bokeh"){const h=new cn(r,a,{focus:.5,aperture:.005,maxblur:.005});h.materialDepth=O(h.materialDepth,t),n.addPass(h)}else if(v==="sobel"){const h=new oe(gn);n.addPass(h);const E=new oe(yn);E.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,E.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,n.addPass(E)}else if(v==="bloom"){const h=new K(new P(window.innerWidth,window.innerHeight),.75,0,0);n.addPass(h)}else if(v==="godray"){const h=new Pn(r,a);h.materialDepth=O(h.materialDepth,t),n.addPass(h)}else if(v==="fxaa"&&!t.msaa){const h=n.renderer.getPixelRatio();fe.material.uniforms.resolution.value.x=1/(window.innerWidth*h),fe.material.uniforms.resolution.value.y=1/(window.innerHeight*h),n.addPass(fe)}else v==="output"&&n.addPass(new mn)}),ct(t),t.render()},ct=t=>{const{dimensions:e,curvature:r,projection:n,easing:a,vertexThickness:i,edgeThickness:s}=t,o=t.curve?t.segments:1,c=Z.values();for(let u=0;u<Z.size;u++){const d=c.next().value;d.uniforms.curvature.value=r,d.uniforms.vertexThickness.value=i,d.uniforms.edgeThickness.value=s,d.needsUpdate=e!==d._rt.dimensions||n!==d._rt.projection||a!==d._rt.easing,d._rt=t,d.uniforms.segments.value=o;for(let f=4;f<=e;f++)d.uniforms[`fov${f}`]||(d.uniforms[`fov${f}`]={value:1}),d.uniforms[`fov${f}`].value=Bt(bn(t[`fov${f}`])*.5);t.dimensions<5&&(d.uniforms.rotationMatrix.value=Ye(t.matrix))}},Fe=.95,_e=25,U=(t,e,r,n,a,i,s)=>{pe(a,me(xe(t,r*2,n.combinations,i,s),a)),pe(a,me(xe(e,r*2+1,n.combinations,i,s),a))},kn=(t,e,r,n,a)=>{const{code:i}=t,s=.01;if(i==="ArrowLeft"||i==="KeyA")U(-s,0,0,e,r,n,a);else if(i==="ArrowRight"||i==="KeyD")U(s,0,0,e,r,n,a);else if(i==="ArrowUp"||i==="KeyW")U(0,-s,1,e,r,n,a);else if(i==="ArrowDown"||i==="KeyS")U(0,s,1,e,r,n,a);else if(i==="PageUp"||i==="KeyQ")U(-s,0,2,e,r,n,a);else if(i==="PageDown"||i==="KeyE")U(s,0,2,e,r,n,a);else if(i==="Digit1")U(0,-s,2,e,r,n,a);else if(i==="Digit3")U(0,s,2,e,r,n,a);else if(i==="KeyZ")U(-s,0,3,e,r,n,a);else if(i==="KeyC")U(s,0,3,e,r,n,a);else return;return!0},Gn=(t,e,r)=>{const n=g.useCallback(ge(u=>r({matrix:u}),100),[]),a=g.useCallback(ge(u=>r({zoom:u}),100),[]),i=g.useRef(null),s=g.useRef({pause:new Set,speed:null}),o=g.useRef(t.matrix.map(u=>u.slice()));g.useEffect(()=>{o.current=t.matrix.map(u=>u.slice())},[t.matrix]);const c=g.useCallback(()=>{if(t.dimensions>4)ye({currentOrder:t.currentOrder,dimensions:t.dimensions,curvature:t.curvature,ranges:t.ranges,matrix:o.current,render:t.render,scene:t.scene,spaceType:t.spaceType,vertices:t.vertices,edges:t.edges,faces:t.faces,ambiance:t.ambiance});else{const u=Z.values();for(let f=0;f<Z.size;f++){const v=u.next().value;v.uniforms.rotationMatrix.value=Ye(o.current)}const d=t.render;d()}},[t.dimensions,t.render,t.curvature,t.ranges,t.currentOrder,t.scene,t.spaceType,t.vertices,t.edges,t.faces,t.ambiance]);g.useEffect(()=>{s.current.speed=new Array(e.combinations.length).fill(0)},[e.combinations]),g.useEffect(()=>{Ke(t.matrix)&&(s.current.speed=new Array(e.combinations.length).fill(0))},[e.combinations.length,t.matrix]),g.useEffect(()=>{const u=()=>{const{pause:d,speed:f}=s.current;let v=!1;for(let h=0;h<f.length;h++)f[h]===0||e.auto==="damp"&&d.has(h)||(v=!0,e.auto==="damp"&&(f[h]*=.96,re(f[h])<1e-4&&(f[h]=0,n(o.current))),pe(o.current,me(xe(f[h],h,e.combinations,t.dimensions,t.curvature),o.current)));v&&c(),i.current!==null&&(i.current=requestAnimationFrame(u))};return e.auto&&(i.current=requestAnimationFrame(u)),()=>{i.current&&(cancelAnimationFrame(i.current),i.current=null),n(o.current)}},[e.auto,e.combinations,t.dimensions,t.curvature,n,c]),g.useEffect(()=>{t.camera.position.z=-t.zoom},[t.camera,t.zoom]),g.useEffect(()=>{const u=new Map;let d=null,f=null;const v=()=>{const p=u.values(),y=p.next().value,m=p.next().value;return Vt(y[0]-m[0],y[1]-m[1])},h=p=>{p.button!==0||p.target.tagName!=="CANVAS"||(e.auto&&(f=performance.now(),s.current.pause.add(e.shift*2),s.current.pause.add(e.shift*2+1),s.current.speed[e.shift*2]=0,s.current.speed[e.shift*2+1]=0),u.set(p.pointerId,[p.clientX,p.clientY]))},E=p=>{if(!u.has(p.pointerId))return;let y=u.get(p.pointerId);const m=[(p.clientX-y[0])/window.innerHeight,-(p.clientY-y[1])/window.innerHeight];if(e.auto){const D=performance.now(),I=D-f;f=D;const B=[_e*m[0]/I,_e*m[1]/I];s.current.speed[e.shift*2]=B[0],s.current.speed[e.shift*2+1]=B[1]}if(u.set(p.pointerId,[p.clientX,p.clientY]),u.size===2){if(d===null){d=v();return}const D=v();t.camera.position.z*=d/D,d=D;const I=t.render;I(),a(-t.camera.position.z);return}let b=e.shift;!b&&p.shiftKey?b=1:!b&&p.altKey?b=2:!b&&p.ctrKey?b=3:!b&&p.metaKey&&(b=4),u.size>2&&(b+=u.size-2),U(he*m[0],he*m[1],b,{combinations:e.combinations,auto:e.auto,shift:e.shift},o.current,t.dimensions,t.curvature),c(),n(o.current)},w=p=>{u.has(p.pointerId)&&(e.auto&&(performance.now()-f>100?(s.current.speed[e.shift*2]=0,s.current.speed[e.shift*2+1]=0):e.auto==="free"&&(s.current.speed[e.shift*2]*=.5,s.current.speed[e.shift*2+1]*=.5),s.current.pause.delete(e.shift*2),s.current.pause.delete(e.shift*2+1)),d=null,u.delete(p.pointerId))};return document.addEventListener("pointerdown",h),document.addEventListener("pointermove",E),document.addEventListener("pointerup",w),()=>{document.removeEventListener("pointerdown",h),document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",w)}},[e.auto,e.combinations,e.shift,t.dimensions,t.curvature,t.render,t.camera,c,n,a]),g.useEffect(()=>{const u=d=>{d.target===document.body&&kn(d,{combinations:e.combinations,auto:e.auto,shift:e.shift},o.current,t.dimensions,t.curvature)&&(c(),n(o.current))};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[c,e.auto,e.combinations,e.shift,t.curvature,t.dimensions,n]),g.useEffect(()=>{const u=d=>{d.target.tagName==="CANVAS"&&(t.camera.position.z*=d.deltaY<0?Fe:1/Fe,t.render(),a(-t.camera.position.z))};return document.addEventListener("wheel",u),()=>{document.removeEventListener("wheel",u)}},[t,a]),g.useEffect(()=>{const u=d=>{if(d.button!==0||d.target.tagName!=="CANVAS")return;const f=-t.camera.position.z,v=f<.5?5:f<2?.25:1;t.camera.position.z=-v,t.render(),a(v)};return document.addEventListener("dblclick",u),()=>{document.removeEventListener("dblclick",u)}},[t,a])};function Bn({runtime:t,rotations:e,updateParams:r}){return Gn(t,e,r),null}const Se=(t,e=null,r=null,n=1)=>{const{camera:a,composer:i}=t;e=e||window.innerWidth,r=r||window.innerHeight;const s=i.renderer.domElement;if(s.width!==e||s.height!==r){a.aspect=e/r,a.zoom=Math.min(1,e/r),a.updateProjectionMatrix(),i.renderer.setSize(e,r),i.setSize(e,r),n=n||i.renderer.getPixelRatio(),i.setPixelRatio(n);const o=e*n,c=r*n;i.passes.forEach(u=>{var d,f;if((f=(d=u.material)==null?void 0:d.uniforms)!=null&&f.resolution){let v=o,h=c;u.material.uniforms.resolution.value.x<=1&&(v=1/v,h=1/h),u.material.uniforms.resolution.value.x=v,u.material.uniforms.resolution.value.y=h}u.resolution&&(u.resolution=new P(e,r))}),e!==window.innerWidth||r!==window.innerHeight?(s.style.width=null,s.style.height=null):(s.style.width=e+"px",s.style.height=r+"px")}t.render()},Vn=(t,e)=>{g.useEffect(()=>{e(r=>(_n(r),r))},[t.fov3,t.camera,t.composer,e]),g.useEffect(()=>{e(r=>(je(r),Ue(r),An(r),r))},[t.dimensions,t.curve,t.segments,e]),g.useEffect(()=>{e(r=>(r.vertices.length&&(console.warn(`Extending vertex buffer to ${r.vertices.length}`),je(r)),r))},[t.maxVertices,e]),g.useEffect(()=>{e(r=>(r.edges.length&&(console.warn(`Extending edge buffer to ${r.edges.length}`),Ue(r)),r))},[t.maxEdges,e]),g.useEffect(()=>{e(r=>(lt(r),r))},[t.ambiance,e]),g.useEffect(()=>{e(r=>(zn(r),r))},[t.msaa,t.msaaSamples,t.composer,e]),g.useEffect(()=>{e(r=>(de(r,"vertex"),de(r,"edge"),de(r,"face"),r))},[t.showVertices,t.showEdges,t.showFaces,e]),g.useEffect(()=>{e(r=>{if(!(r.currentOrder<0))return ye(r,r.currentOrder-1),r})},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges,t.showFaces,e]),g.useEffect(()=>{e(r=>(ye(r),r))},[t.ambiance,t.showVertices,t.showEdges,t.showFaces,t.maxVertices,t.maxEdges,t.curve,t.segments,t.matrix,e]),g.useEffect(()=>{e(r=>(ct(r),r.render(),r))},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.easing,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges,t.matrix,e]),g.useEffect(()=>{const r=()=>{Se(t)};return window.addEventListener("resize",r),window.addEventListener("orientationchange",r),()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)}},[t])};function Hn({runtime:t,setRuntime:e}){return Vn(t,e),null}function Ln(){return new Worker(""+new URL("knuthbendix-tiling.worker-dbafa931.js",import.meta.url).href)}function $n(){return new Worker(""+new URL("toddcoxeter-tiling.worker-f1092b89.js",import.meta.url).href)}function Wn(){return new Worker(""+new URL("fundamental.worker-575cdf7f.js",import.meta.url).href)}let ve=class ut{constructor(e,r){this.workerClass=r,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=Math.random()*16|0;return(e==="x"?r:r&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=ut.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((r,n)=>{const a=s=>{if(s.data.uuid!==e.uuid)return;const o=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${o}ms`),this.processing--,this.worker.removeEventListener("message",a),this.worker.removeEventListener("error",i),s.data.error){n(s.data.error);return}r(s.data)},i=s=>{this.worker.removeEventListener("message",a),this.worker.removeEventListener("error",i),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=Ht(0,this.processing),console.error(`Can't call web worker ${this.name}`,s))};this.worker.addEventListener("message",a),this.worker.addEventListener("error",i)})}};const Qn=()=>Object.values(dt).filter(t=>t.processing>0).forEach(t=>t.kill()),dt={knuthbendix:new ve("knuthbendix",Ln),toddcoxeter:new ve("toddcoxeter",$n),fundamental:new ve("toddcoxeter",Wn)},ze=async(t,e,r)=>{const n=dt[t.grouper.replace(/^auto-/,"")];if(t.currentOrder===0&&(Qn(),e.current=!1),e.current===t.currentOrder){console.log("already processing at ",t.currentOrder);return}try{e.current=t.currentOrder;const{vertices:a,edges:i,faces:s,order:o}=await n.process({order:t.currentOrder,coxeter:t.coxeter,curvature:t.curvature,stellation:t.stellation,mirrors:t.mirrors,mirrorsPlanes:t.mirrorsPlanes,rootVertex:t.rootVertex,dimensions:t.dimensions});e.current=!1,r(c=>c.currentOrder!==o?(console.warn("Mismatched order, ignoring",c.currentOrder,o),{...c,currentOrder:0,vertices:[],edges:[],faces:[],ranges:[],renderError:null,processing:!0,error:"Mismatch Order"}):{...c,ranges:[...c.ranges,{vertices:[c.vertices.length,c.vertices.length+a.length],edges:[c.edges.length,c.edges.length+i.length],faces:[c.faces.length,c.faces.length+s.length]}],vertices:c.vertices.concat(a),edges:c.edges.concat(i),faces:c.faces.concat(s),currentOrder:o+1,processing:!1,error:null})}catch(a){e.current=!1,console.error(a);const i={...t,currentOrder:t.order,error:a.message,processing:!1};r(i)}},Jn=(t,e)=>{const r=g.useRef(!1);g.useEffect(()=>{e(n=>n.order<n.currentOrder?{...n,currentOrder:n.order}:n)},[t.order,t.currentOrder,e]),g.useEffect(()=>{e(n=>{const a=Kt(n.coxeter,n.stellation),i=Zt(a);if(!i)return{...n,spaceType:i};const s=i==="finite"?1:i==="affine"?0:-1,o=n.grouper===""||n.grouper.startsWith("auto-")?"auto-toddcoxeter":n.grouper,c=st(a,s,n.centered===null?o.replace(/^auto-/,"")==="toddcoxeter"&&s<=0||a.some(f=>f.some(v=>v===-1)):n.centered),u=it(n.mirrors,c,s),d={...n,currentOrder:0,grouper:o,vertices:[],edges:[],faces:[],ranges:[],spaceType:i,curvature:s,mirrorsPlanes:c,rootVertex:u,renderError:null,processing:!0,error:null};return ze(d,r,e),d})},[t.dimensions,t.coxeter,t.mirrors,t.stellation,t.centered,t.grouper,e]),g.useEffect(()=>{e(n=>{var a;return n.order<=n.currentOrder?n:(a=n.ranges)!=null&&a[n.order]?{...n,currentOrder:n.order,askedOrder:null}:(ze(n,r,e),{...n,error:null,processing:!0})})},[e,t.order,t.currentOrder]),g.useEffect(()=>{e(n=>n.vertices.length>n.maxVertices?{...n,maxVertices:n.vertices.length}:n)},[t.vertices,e]),g.useEffect(()=>{e(n=>n.edges.length>n.maxEdges?{...n,maxEdges:n.edges.length}:n)},[t.edges,e]),g.useEffect(()=>{e(n=>n.easing==="auto"?{...n,easing:n.spaceType.startsWith("hyperbolic")&&n.projection!=="inverted"?"quintic":"linear"}:n)},[t.easing,t.spaceType,e]),g.useEffect(()=>{e(n=>{let a=0;for(let i=0;i<n.faces.length;i++){const s=n.faces[i].vertices.length;a+=s===3?1:s}return a>n.maxFaces?{...n,maxFaces:a}:n})},[t.faces,e])};function qn({runtime:t,setRuntime:e}){return Jn(t,e),null}function Yn({runtime:t,setRuntime:e,rotations:r,updateParams:n}){window.rt=t;const a=g.useCallback(i=>{e(s=>({...s,renderError:i.message}))},[e]);return g.useEffect(()=>()=>{t.curvature!==null&&n({matrix:ce(t.dimensions)})},[t.curvature]),l.jsx(l.Fragment,{children:l.jsxs(nn,{error:t.renderError,onError:a,children:[l.jsx(qn,{runtime:t,setRuntime:e}),l.jsx(Hn,{runtime:t,setRuntime:e}),l.jsx(Bn,{runtime:t,rotations:r,updateParams:n})]})})}function ke({allowNull:t,name:e,value:r,onChange:n,...a}){const i=g.useCallback(o=>{let{name:c,checked:u}=o.target,d;t?d=r===!1?!0:r?null:!1:d=u,n(c,d)},[t,n,r]),s=g.useRef(null);return g.useLayoutEffect(()=>{t&&s.current&&(r===null?s.current.indeterminate=!0:s.current.indeterminate=!1)},[r,t]),l.jsx("input",{type:"checkbox",ref:s,name:e,checked:r||!1,onChange:i})}function T({type:t,dimensions:e}){return l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"space",children:t===null||t==="indefinite"?"𝕏":t==="affine"?"𝔼":t==="finite"?"𝕊":"ℍ"}),e?l.jsx("sup",{children:e-1}):null,t!=null&&t.startsWith("hyperbolic")?l.jsx("sub",{children:{compact:" ",paracompact:"*"}[t.replace(/^hyperbolic-/,"")]||(t.startsWith("hyperbolic-lorentzian")?`L${t.replace(/^hyperbolic-lorentzian-level-/,"")}`:null)}):null]})}const Kn=(...t)=>{if(Array.isArray(t[0]))return{coxeter:t,dimensions:t.length,extended:!0};const e=t.length+1;return{coxeter:new Array(e).fill().map((n,a)=>new Array(e).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?t[Xe(a,s)]:2)),dimensions:e}},Zn=(...t)=>{const e=t.length+1;return{stellation:new Array(e).fill().map((n,a)=>new Array(e).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?t[Xe(a,s)]:1))}},x=(t,e,r,n)=>{const a=Kn(...t),{dimensions:i}=a,s={...Ze,...a,showVertices:i<=3,showFaces:i<=4,curve:i>3,grouper:"toddcoxeter",ambiance:"colorful",matrix:ce(i),zoom:i<=3?2:i>4?3:5,...n||{}};if(e?s.mirrors=e:s.mirrors=new Array(i).fill().map((o,c)=>c===0?1:0),r?s.stellation=Zn(...r).stellation:s.stellation=new Array(i).fill().map((o,c)=>new Array(i).fill(1)),i>4)for(let o=4;o<=i;o++)s[`fov${o}`]=(10-o)*10;return s},S=(t,e,r,n)=>({...x(t,e,r),ambiance:"plain",showVertices:!1,curve:!0,zoom:1,...n}),L=(t,e,r,n)=>({...x(t,e,r),ambiance:"neon",showFaces:!1,showVertices:!1,grouper:"",edgeThickness:10,zoom:2,...n}),C=(t,e,r,n)=>({...x(t,e,r),ambiance:"neon",showFaces:!1,showVertices:!1,curve:!0,grouper:"",edgeThickness:10,zoom:1.5,...n}),q=t=>{if(t===4)return{"":[1,0,0,0],Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(t===5)return{"":[1,0,0,0,0],Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(t===6)return{"":[1,0,0,0,0,0],Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(t===7)return{"":[1,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(t===8)return{"":[1,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(t===9)return{"":[1,0,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},Xn=[{type:"title",content:l.jsxs(l.Fragment,{children:[l.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:4})," Tesseract"]}),params:x([4,3,3],[1,0,0,0],null,{showVertices:!0,vertexThickness:150,showFaces:!0,curve:!0,ambiance:"neon",centered:!1,zoom:4.2})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:S([7,3],[1,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon"})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:3})," Ideal triangles"]}),params:S([[1,1/0,1/0],[1/0,1,1/0],[1/0,1/0,1]],[1,1,1],null,{grouper:"fundamental",showVertices:!1,showFaces:!0,curve:!0,segments:64,easing:"quartic",ambiance:"neon"})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:4})," Ideal tetrahedron"]}),params:S([3,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:64,easing:"quartic",ambiance:"pure"})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:4})," Horoball"]}),params:S([6,3,4],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:20,centered:!1,ambiance:"colorful"})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:C([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:4})," 7-3-3 paracompact honeycomb"]}),params:C([7,3,3],[1,0,0,0],null,{zoom:1.5,showFaces:!0,showVertices:!0,segments:16})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:4})," Ideal Pentahedron"]}),params:S([5,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:32,easing:"quartic",ambiance:"pure",zoom:1.5})},{name:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:4})," Flat Torus"]}),params:x([32,2,32],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",zoom:3,edgeThickness:5})},{type:"title",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite"})," Spherical space"]})},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:x([3,3])},{name:"Cube",params:x([4,3])},{name:"Octahedron",params:x([3,4])},{name:"Dodecahedron",params:x([5,3])},{name:"Icosahedron",params:x([3,5])},{name:"Cuboctahedron",params:x([4,3],[0,1,0])},{name:"Icosidodecahedron",params:x([5,3],[0,1,0])},{name:"Truncated Tetrahedron",params:x([3,3],[1,1,0])},{name:"Truncated Cube",params:x([4,3],[1,1,0])},{name:"Truncate Octahedron",params:x([3,4],[1,1,0])},{name:"Truncate Dodecahedron",params:x([5,3],[1,1,0])},{name:"Truncate Icosahedron",params:x([3,5],[1,1,0])},{name:"Rhombicuboctahedron",params:x([4,3],[1,0,1])},{name:"Rhombicosidodecahedron",params:x([5,3],[1,0,1])},{name:"Truncated Cuboctahedron",params:x([4,3],[1,1,1])},{name:"Truncated Icosidodecahedron",params:x([5,3],[1,1,1])},{name:"Snub Cube",params:x([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:x([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:x([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:x([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:x([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:x([5,3],[1,0,0],[2,1])},{name:"Stellated Octahedron",params:x([2,2],["ß","ß","ß"])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:4})," Polychora"]})},...Object.entries(q(4)).map(([t,e])=>[{name:`${t?`${t} `:""}5-cell`,params:x([3,3,3],e)},{name:`${t?`${t} `:""}8-cell`,params:x([4,3,3],e)},{name:`${t?`${t} `:""}16-cell`,params:x([3,3,4],e)},{name:`${t?`${t} `:""}24-cell`,params:x([3,4,3],e)},{name:`${t?`${t} `:""}120-cell`,params:x([5,3,3],e)},{name:`${t?`${t} `:""}600-cell`,params:x([3,3,5],e)}]).flat(),{name:"Snub 24-cell",params:x([3,4,3],["s","s",0,0])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:5})," Polytera"]})},...Object.entries(q(5)).map(([t,e])=>[{name:`${t?`${t} `:""}5-simplex`,params:x([3,3,3,3],e)},{name:`${t?`${t} `:""}5-cube`,params:x([4,3,3,3],e)},{name:`${t?`${t} `:""}5-orthoplex`,params:x([3,3,3,4],e)},{name:`${t?`${t} `:""}5-demicube`,params:x([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]],e)}]).flat(),{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:6})," Polypeta"]})},...Object.entries(q(6)).map(([t,e])=>[{name:`${t?`${t} `:""}6-simplex`,params:x([3,3,3,3,3],e)},{name:`${t?`${t} `:""}6-cube`,params:x([4,3,3,3,3],e)},{name:`${t?`${t} `:""}6-orthoplex`,params:x([3,3,3,3,4],e)},{name:`${t?`${t} `:""}6-demicube`,params:x([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]],e)}]).flat(),{name:l.jsxs(l.Fragment,{children:["2",l.jsx("sub",{children:"21"})]}),params:x([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:l.jsxs(l.Fragment,{children:["1",l.jsx("sub",{children:"22"})]}),params:x([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:7})," Polyexa"]})},...Object.entries(q(7)).map(([t,e])=>[{name:`${t?`${t} `:""}7-simplex`,params:x([3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}7-cube`,params:x([4,3,3,3,3,3],e)},{name:`${t?`${t} `:""}7-orthoplex`,params:x([3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}7-demicube`,params:x([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]],e)}]).flat(),{name:l.jsxs(l.Fragment,{children:["3",l.jsx("sub",{children:"21"})]}),params:x([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:l.jsxs(l.Fragment,{children:["2",l.jsx("sub",{children:"31"})]}),params:x([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:l.jsxs(l.Fragment,{children:["1",l.jsx("sub",{children:"32"})]}),params:x([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:8})," Polyzetta"]})},...Object.entries(q(8)).map(([t,e])=>[{name:`${t?`${t} `:""}8-simplex`,params:x([3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}8-cube`,params:x([4,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}8-orthoplex`,params:x([3,3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}8-demicube`,params:x([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],e)}]).flat(),{name:l.jsxs(l.Fragment,{children:["1",l.jsx("sub",{children:"42"})]}),params:x([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,1,0,0,0,0,0])},{name:l.jsxs(l.Fragment,{children:["2",l.jsx("sub",{children:"41"})]}),params:x([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:l.jsxs(l.Fragment,{children:["4",l.jsx("sub",{children:"21"})]}),params:x([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"finite",dimensions:9}),"Polyyotta"]})},...Object.entries(q(9)).map(([t,e])=>[{name:`${t?`${t} `:""}9-simplex`,params:x([3,3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}9-cube`,params:x([4,3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}9-orthoplex`,params:x([3,3,3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}9-demicube`,params:x([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],e)}]).flat(),{type:"title",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"affine"})," Euclidean space"]})},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:x([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:x([4,4],[1,0,0])},{name:"Hexagonal",params:x([6,3],[1,0,0])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:L([4,3,4],[1,0,0,0])},{name:"Octet",params:L([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:L([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:L([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:L([3,3,4,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"24-cellic",params:L([3,4,3,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"4-simpletic",params:L([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter tesseractic",params:L([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0],null,{grouper:"toddcoxeter"})},{type:"title",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:S([3,7],[1,0,0])},{name:"Order-8 triangular",params:S([3,8],[1,0,0])},{name:"Infinite Order triangular",params:S([3,1/0],[1,0,0])},{name:"Order-5 square",params:S([4,5],[1,0,0])},{name:"Order-6 square",params:S([4,6],[1,0,0])},{name:"Order-7 square",params:S([4,7],[1,0,0])},{name:"Order-8 square",params:S([4,8],[1,0,0])},{name:"Infinite Order square",params:S([4,1/0],[1,0,0])},{name:"Order-4 pentagonal",params:S([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:S([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:S([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:S([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:S([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:S([5,1/0],[1,0,0])},{name:"Order-4 hexagonal",params:S([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:S([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:S([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:S([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:S([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:S([6,1/0],[1,0,0])},{name:"Order-3 heptagonal",params:S([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:S([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:S([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:S([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:S([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:S([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:S([7,1/0],[1,0,0])},{name:"Order-3 octagonal",params:S([8,3],[1,0,0])},{name:"Order-4 octagonal",params:S([8,4],[1,0,0])},{name:"Order-5 octagonal",params:S([8,5],[1,0,0])},{name:"Order-6 octagonal",params:S([8,6],[1,0,0])},{name:"Order-7 octagonal",params:S([8,7],[1,0,0])},{name:"Order-8 octagonal",params:S([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:S([8,1/0],[1,0,0])},{name:"Order-3 apeirogonal",params:S([1/0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:S([1/0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:S([1/0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:S([1/0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:S([1/0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:S([1/0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:S([1/0,1/0],[1,0,0])},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic-compact",dimensions:4})," Honeycombs compacts"]})},{name:"Icosahedral",params:C([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:C([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:C([5,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 cubic",params:C([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:C([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral dodecahedral",params:C([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic octahedral",params:C([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Dodcahedral",params:C([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Icosahedral",params:C([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic-paracompact",dimensions:4})," Honeycombs paracompacts"]})},{name:"Triangular",params:C([3,6,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:C([6,3,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 tetrahedral",params:C([3,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-6 cubic",params:C([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-5 hexagonal",params:C([6,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 hexagonal",params:C([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 hexagonal",params:C([6,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Square",params:C([4,4,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated square",params:C([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-4 square",params:C([4,4,4],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral square",params:C([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic square",params:C([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter order square",params:C([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral Hexagonal",params:C([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Hexagonal",params:C([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Icosahedral Hexagonal",params:C([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal Triangular",params:C([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-4 Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Runcic Order-6 Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{grouper:"toddcoxeter"})},{name:"Quarter Order-4 hexagonal",params:C([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:C([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{grouper:"toddcoxeter"})},{type:"group",content:l.jsxs(l.Fragment,{children:[l.jsx(T,{type:"hyperbolic-lorentzian-level-2",dimensions:4})," Honeycombs lorentzians"]})},{name:"3-3-7",params:C([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-4-7",params:C([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-5-7",params:C([3,5,7],[1,0,0,0],null,{grouper:"toddcoxeter"})}],er=g.memo(function({name:e,params:r,onPreset:n}){return l.jsxs("div",{className:"preset",onClick:()=>n(r),children:[l.jsx("span",{className:"preset-name",children:e}),l.jsx(Lt,{coxeter:r.coxeter,mirrors:r.mirrors,stellation:r.stellation})]})}),be=t=>{if(["string","number"].includes(typeof t))return t;if(t instanceof Array)return t.map(be).join("");if(typeof t=="object"&&t)return be(t.props.children)};function tr({open:t,onPreset:e,onExportImage:r,closePresets:n}){const[a,i]=g.useState(""),[s,o]=g.useState(""),c=g.useCallback(u=>{o(u.target.value),ge(i(u.target.value),50)},[]);return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:`presets-overlay ${t?"shown":"hidden"}`,onClick:n}),l.jsx("div",{className:`presets ${t?"shown":"hidden"}`,children:l.jsxs("div",{className:"presets-modal",children:[l.jsxs("div",{className:"presets-header",children:[l.jsxs("div",{className:"presets-search",children:[l.jsx("input",{type:"text",placeholder:"Search",value:s,onChange:c}),l.jsx("button",{className:"presets-clear",onClick:()=>{i(""),o("")},children:"⌫"})]}),l.jsxs("div",{className:"presets-actions",children:[l.jsx("a",{className:"presets-author",href:"https://florian.mounier.dev/",children:"❓"}),l.jsx("button",{className:"presets-action",onClick:r,children:"📤"}),l.jsx("button",{className:"presets-action",onClick:n,children:"✖️"})]})]}),l.jsx("div",{className:"presets-list",children:Xn.map(({type:u,content:d,name:f,params:v},h)=>l.jsx(g.Fragment,{children:u==="title"?l.jsx("h2",{children:d}):u==="group"?l.jsx("h4",{children:d}):!a||be(f).toLowerCase().includes(a.toLowerCase())?l.jsx(er,{name:f,params:v,search:a,onPreset:e}):null},h))})]})})]})}function nr({runtime:t,params:e,rotations:r,updateParams:n,updateRotations:a}){const[i,s]=g.useState("simple"),[o,c]=g.useState(!1),u=g.useCallback(()=>{c(!1)},[]),d=g.useCallback(m=>{let{name:b,value:D}=m.target;n({[b]:D})},[n]),f=g.useCallback((m,b)=>{n({[m]:b})},[n]),v=g.useCallback(()=>s(m=>({simple:"advanced",advanced:"full",full:"empty",empty:"simple"})[m]),[]),h=g.useCallback(m=>{n(m),u()},[n,u]),E=g.useCallback(()=>{n({matrix:ce(t.dimensions)})},[n,t.dimensions]),w=g.useCallback(m=>{a("shift",(r.shift+1)%r.maxShift)},[r.maxShift,r.shift,a]),p=g.useCallback(m=>{a("auto",r.auto==="free"?"damp":"free")},[r.auto,a]),y=g.useCallback(()=>{const m=window.prompt("Select image resolution","5000x5000");if(!m||!m.includes("x")){console.error("Invalid resolution");return}const[b,D]=m.split("x").map(I=>parseInt(I));if(isNaN(b)||isNaN(D)){console.error("Invalid resolution");return}Se(t,b,D,1),t.composer.renderer.domElement.toBlob(I=>{const B=document.createElement("a");document.body.appendChild(B),B.style.display="none";const vt=window.URL.createObjectURL(I);B.href=vt,B.download=document.title,B.click(),Se(t)})},[t]);return l.jsxs(l.Fragment,{children:[l.jsx(tr,{open:o,onPreset:h,onExportImage:y,closePresets:u}),l.jsxs("div",{className:t.error?"error":"",title:t.error,children:[t.currentOrder<t.order?l.jsxs("aside",{className:"processing-counter",children:[t.currentOrder,"/",t.order]}):null,["simple","advanced","full"].includes(i)?l.jsx("button",{className:"preset-button button",onClick:()=>c(m=>!m),title:"Presets",children:"◭"}):null,["simple","advanced","full"].includes(i)?l.jsxs("aside",{className:"controls",children:[l.jsxs("button",{className:"controls-button button",onClick:w,title:"Rotation Mode",children:[l.jsx("span",{style:{display:"inline-block",transform:`rotate(${r.shift/r.maxShift*360}deg)`},children:"⥁"}),l.jsx("sup",{children:r.shift+1})]}),l.jsxs("div",{className:"subcontrols",children:[l.jsx("button",{className:"button anim-view",onClick:p,title:"Animate rotations",children:r.auto==="free"?"⤞":r.auto==="damp"?"↠":"?"}),!Ke(t.matrix)&&l.jsx("button",{className:"button reset-view",onClick:E,title:"Reset View",children:"⌖"})]})]}):null,l.jsx("button",{className:`space-button button${t.processing?" processing":""}${i==="empty"?" empty":""}`,onClick:v,title:`Space ${t.spaceType}`,children:l.jsx(T,{type:t.spaceType,dimensions:t.dimensions})}),["advanced","full"].includes(i)&&l.jsxs("aside",{className:"parameters",children:[(i==="full"||e.grouper!=="")&&l.jsxs("label",{className:"select-label",children:["Grouper",l.jsx("select",{name:"grouper",value:e.grouper,onChange:d,children:$t.map(m=>l.jsx("option",{value:m,children:m===""?e.grouper===""?`Auto [${t.grouper.replace(/^auto-/,"")}]`:"Auto":m.replace(/_/g," ").replace(/\b./g,b=>b.toUpperCase())},m))})]}),(i==="full"||e.grouper)&&l.jsxs("label",{className:"boolean-label",children:["inCentered",l.jsx(ke,{name:"centered",allowNull:!0,value:e.centered,onChange:f})]}),(i==="full"||t.curvature<=0)&&l.jsx(V,{name:"order",label:"Precision",min:1,step:1,value:e.order,onChange:f}),l.jsx(V,{name:"segments",label:"Segments",min:1,step:1,value:e.segments,toggler:e.curve,togglerName:"curve",onChange:f}),l.jsxs("label",{className:"select-label",children:["Easing",l.jsx("select",{name:"easing",value:e.easing,onChange:d,children:Je.map(m=>l.jsx("option",{value:m,children:m.replace(/_/g," ").replace(/\b./g,b=>b.toUpperCase())},m))})]}),l.jsx(V,{name:"dimensions",label:"Dimensions",min:2,max:9,step:1,value:e.dimensions,onChange:f}),l.jsxs("label",{className:"select-label",children:["Projection",l.jsx("select",{name:"projection",value:e.projection,onChange:d,children:Qe.map(m=>l.jsx("option",{value:m,children:m.replace(/_/g," ").replace(/./,b=>b.toUpperCase())},m))})]}),l.jsx(V,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:e.vertexThickness,toggler:e.showVertices,togglerName:"showVertices",onChange:f}),l.jsx(V,{name:"edgeThickness",label:"Edges",min:0,step:1,value:e.edgeThickness,toggler:e.showEdges,togglerName:"showEdges",onChange:f}),(t.grouper.replace(/^auto-/,"")==="toddcoxeter"||t.grouper==="fundamental")&&l.jsxs("label",{className:"boolean-label",children:["Faces",l.jsx(ke,{name:"showFaces",value:e.showFaces,onChange:f})]}),l.jsxs("label",{className:"select-label",children:["Ambiance",l.jsx("select",{name:"ambiance",value:e.ambiance,onChange:d,children:(i==="full"?Object.keys(k):Object.entries(k).filter(([m,{extended:b}])=>!b).map(([m])=>m)).map(m=>l.jsx("option",{value:m,children:m.replace(/_/g," ").replace(/./,b=>b.toUpperCase())},m))})]})]}),["advanced","full"].includes(i)&&l.jsxs("aside",{className:"view",children:[l.jsx(V,{name:"msaaSamples",label:"MSAA",min:0,step:1,value:e.msaaSamples,toggler:e.msaa,togglerName:"msaa",onChange:f}),l.jsx(V,{name:"fov3",label:"FOV3",min:0,step:1,value:e.fov3,onChange:f}),e.dimensions>3?[...Array(e.dimensions-3).keys()].map(m=>l.jsx(V,{label:`FOV${m+4}`,name:`fov${m+4}`,step:1,value:e[`fov${m+4}`],onChange:f},m)):null]}),["simple","advanced","full"].includes(i)&&l.jsx(Wt,{dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,extended:e.extended,onChange:f})]})]})}function rr({gl:t,params:e,updateParams:r}){window.p=e;const[n,a]=g.useState(()=>({...e,...t,currentOrder:0,askedOrder:null,spaceType:null,curvature:null,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],faces:[],maxVertices:3e4,maxEdges:5e4,maxFaces:5e4,processing:!0,error:null,renderError:null})),[i,s]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp"});g.useEffect(()=>{a(c=>({...c,...et({order:e.order,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,matrix:e.matrix,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,zoom:e.zoom,curve:e.curve,segments:e.segments,easing:e.easing,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,centered:e.centered}).params}))},[e.order,e.ambiance,e.centered,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.easing,e.showEdges,e.showFaces,e.showVertices,e.stellation,e.vertexThickness,e.zoom]),g.useEffect(()=>{s(c=>({...c,shift:0,maxShift:~~Qt(Jt(e.dimensions,2)/2),combinations:en(qt(new Array(e.dimensions).fill().map((u,d)=>d),2)),auto:"damp"}))},[e.dimensions]),g.useEffect(()=>{a(c=>e.grouper===""&&c.grouper.startsWith("auto-")?c:{...c,grouper:e.grouper})},[e.grouper]);const o=g.useCallback((c,u)=>{s(d=>({...d,[c]:u}))},[s]);return l.jsxs("div",{className:n.error||n.renderError?"error":"",title:n.error||n.renderError,children:[l.jsx(nr,{runtime:n,params:e,rotations:i,updateRotations:o,updateParams:r}),l.jsx(Yn,{runtime:n,rotations:i,setRuntime:a,updateParams:r})]})}const ft=Rn();Object.assign(window,ft);const ar=t=>JSON.parse(t,(r,n)=>n==="Infinity"?1/0:n),sr=t=>JSON.stringify(t,(r,n)=>n===1/0?"Infinity":n),Ge=(t=null)=>{const{location:e}=window;if(e.hash)try{return ar(atob(e.hash.slice(1)))}catch(r){console.warn(r),e.hash=""}return t},ir=t=>{window.history.pushState(null,null,"#"+btoa(sr(t)))},we=(t,e)=>t.length!==e.length?!1:t.every((r,n)=>Array.isArray(r)?we(r,e[n]):r===e[n]),or=()=>{const[t,e]=g.useState(Ge(Ze)),r=g.useCallback(()=>{const a=Ge();a&&(Object.entries(a).forEach(([i,s])=>{Array.isArray(s)&&we(s,t[i])&&(a[i]=t[i])}),e(a))},[t]),n=g.useCallback(a=>{e(i=>{if(!Object.entries(a).filter(([c,u])=>Array.isArray(u)?!we(u,i[c]):i[c]!==u).length)return i;const{params:s,badParams:o}=et({...i,...a});return o.length||ir(s),s})},[]);return g.useEffect(()=>(window.addEventListener("popstate",r),()=>{window.removeEventListener("popstate",r)}),[r]),l.jsx(rr,{gl:ft,params:t,updateParams:n})};Yt.createRoot(document.getElementById("root")).render(l.jsx(or,{}));
