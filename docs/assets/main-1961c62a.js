import{c as ct,P as fe,s as D,i as ut,a as te,m as L,e as dt,b as ft,d as oe,r as x,O as Be,B as Ve,F as K,M as Q,W as R,N as ae,f as H,R as re,g as F,U as O,S as M,C as k,V as P,h as ht,j as Te,D as vt,k as pt,l as Ge,n as Ee,o as mt,Z as Pe,A as De,p as xt,q as _,t as gt,u as Le,v as He,w as yt,x as $e,y as ee,z as We,E as bt,G as St,H as z,I as Qe,J as Se,K as A,L as wt,Q as Ct,T as Me,X as Tt,Y as Et,_ as Pt,$ as Dt,a0 as Mt,a1 as Ye,a2 as Je,a3 as he,a4 as ve,a5 as Nt,a6 as It,a7 as c,a8 as qe,a9 as Ke,aa as Ot,ab as Rt,ac as B,ad as At,ae as Ze,af as jt,ag as Ut,ah as Ft,ai as kt}from"./CoxeterDiagram-d96001d6.js";const _t=(t,e)=>t.map((n,r)=>n.map((a,i)=>-ct(e[r][i]*fe/a))),Xe=t=>{const e=dt(t).values;return{"+":e.filter(n=>n>0).length,"-":e.filter(n=>n<0).length,0:e.filter(n=>n===0).length}},et=(t,e=[],n=0,r=2)=>{e[n]=e[n]||[];for(let a=0;a<t.length;a++){const i=t.filter((s,o)=>o!==a).map(s=>s.filter((o,l)=>l!==a));e[n].push(Xe(i)),i.length>1&&n+1<r&&et(i,e,n+1)}return e},zt=t=>{const e=Xe(t);if(e["-"]===0&&e[0]===0)return"finite";if(e["-"]===0&&e[0]===1)return"affine";const n=et(t),r=n[0];if(r.every(a=>a["-"]===0&&a[0]===0))return"hyperbolic-compact";if(r.every(a=>a["-"]===0))return"hyperbolic-paracompact";for(let a=1;a<n.length;a++)if(n[a].every(s=>s["-"]===0))return"hyperbolic-lorentzian-level-"+(a+1);return"indefinite"},we=(t,e,n)=>{let r=0;for(let a=0;a<t.length;a++)r+=t[a]*e[a]*(a===t.length-1&&n||1);return r},tt=(t,e)=>we(t,t,e),Bt=(t,e,n)=>{t=t.slice();const r=2*we(t,e,n);for(let a=0;a<t.length;a++)t[a]-=r*(n||a!==t.length-1?e[a]:0);return t},rt=(t,e)=>{if(t=t.slice(),e===0){for(let r=0;r<t.length;r++)t[r]/=t[t.length-1];return t}const n=(e===-1&&ft(t[t.length-1])||1)/D(te(tt(t,e)));for(let r=0;r<t.length;r++)t[r]*=n;return t},Vt=t=>t.sort((e,n)=>{const[r,a]=e,[i,s]=n;return r===0&&a===1?1:i===0&&s===1||r<2&&i>=2?-1:i<2&&r>=2?1:r<2&&i<2?a===s?i-r:a-s:r===i?s-a:i-r}),pe=(t,e,n,r,a)=>{const i=oe(r);if(e>n.length-1||te(t)>1)return i;const[s,o]=n[e],l=o===r-1&&a||1,u=D(1-l*t*t),d=t;return i[s][s]=u,i[o][o]=u,i[s][o]=-l*d,i[o][s]=d,i},Gt=(t,e,n)=>{const r=e[0].length,a=new Array(r).fill().map(()=>new Array(r).fill(0));a[t][0]=1;for(let s=1;s<r;s++){const o=(s+t)%r;for(let l=0;l<s;l++){const u=(l+t)%r;a[o][l]=(e[o][u]-we(a[o].slice(0,l),a[u].slice(0,l)))/a[u][l]}if(a[o][s]=D(te(1-tt(a[o].slice(0,s)))),a[o][s]<1e-6&&s<r-1)return null}const i=(r-1+t)%r;return n===0?a[i][r-1]=.5:a[i][r-1]*=n,a},Lt=(t,e,n=!1)=>{const r=t[0].length;let a=null;const i=t.every((s,o)=>s.every((l,u)=>l===(o===u?1:-1)));if(n||i){if(a=new Array(r).fill(0).map(()=>new Array(r).fill(0)),r===2){const s=(t[0][1]+1)/2;return a[0][0]=D(s-t[0][1]),a[1][0]=-D(s-t[0][1]),a[0][1]=a[1][1]=D((e||1)*s),e===0&&(a[1][1]=.5),a}else if(r===3){const s=t[0][1],o=t[1][2],l=t[0][2],u=(s*s+o*o+l*l-2*s*o*l-1)/(s*s+o*o+l*l-2*s*o-2*s*l-2*o*l+2*s+2*o+2*l-3);return a[0][2]=a[1][2]=a[2][2]=e*D(e*u),a[2][1]=-D(1-u),a[1][1]=(o-u)/a[2][1],a[0][1]=(l-u)/a[2][1],a[1][0]=-D(1-a[1][1]**2-u),a[0][0]=D(1-a[0][1]**2-u),e===0&&(a[2][2]=.5),a}else if(r===4){const s=t[0][1],o=t[1][2],l=t[2][3],u=t[0][2],d=t[1][3],f=t[0][3],h=(s*s*l*l+o*o*f*f+u*u*d*d-s*s-o*o-l*l-u*u-d*d-f*f+2*s*d*f+2*s*o*u+2*o*l*d+2*l*u*f-2*o*u*d*f-2*s*o*l*f-2*s*l*u*d+1)/(2*(s*s*l+o*o*f+l*l*s+u*u*d+d*d*u+f*f*o-s*s-o*o-l*l-u*u-d*d-f*f-s*o*l-s*o*f-s*l*u-s*l*d-s*l*f-s*u*d-o*l*f-o*u*d-o*u*f-o*d*f-l*u*d-u*d*f+s*o*u+s*d*f+o*l*d+l*u*f+s*o+s*u+s*d+s*f+o*l+o*u+o*d+l*u+l*d+l*f+u*f+d*f-s-o-l-u-d-f+2));return a[0][3]=a[1][3]=a[2][3]=a[3][3]=e*D(e*h),a[3][2]=-D(1-h),a[2][2]=(l-h)/a[3][2],a[1][2]=(d-h)/a[3][2],a[0][2]=(f-h)/a[3][2],a[2][1]=-D(1-h-a[2][2]**2),a[1][1]=(o-h-a[1][2]*a[2][2])/a[2][1],a[0][1]=(u-h-a[0][2]*a[2][2])/a[2][1],a[1][0]=-D(1-h-a[1][1]**2-a[1][2]**2),a[0][0]=D(1-h-a[0][1]**2-a[0][2]**2),e===0&&(a[3][3]=.5),a}if(i){const s=[0];for(let o=1;o<r;o++)s[o]=(s[o-1]+1)/(3-s[o-1]);a[0][0]=1,a[1][0]=-1,a[0][1]=D(s[1]),a[1][1]=D(s[1]);for(let o=0;o<r;o++)for(let l=0;l<r;l++)o<2&&l<2||(a[o][l]=l<o-1?0:l===o-1?-(o*D(s[l]-s[l-1])):l<r-1?D(s[l]-s[l-1]):D(s[l-1]));return a}}for(let s=0;s<r&&(a=Gt(s,t,e),!a);s++);if(a&&n){const s=nt(new Array(r).fill(1),a,e);if(e!==0){const o=rt(s.slice().map((l,u)=>u===r-1?l-1:l),e);for(let l=0;l<r;l++)a[l]=Bt(a[l],o,e)}}return a},nt=(t,e,n)=>{let r=t.map(o=>isNaN(o)?1:+o),a=e.slice(),i;for(let o=0;o<r.length&&(i=ut(a),i.some(l=>l.some(u=>isNaN(u)||te(u)>1e8)));o++){console.warn("Non invertible matrix, retrying by shifting mirrors"),a.push(a.shift()),r.push(r.shift());if(o===r.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const s=L(i,r);return s[s.length-1]*=n||1,rt(s,n)};class Ht extends x.Component{componentDidCatch(e,n){this.props.onError(e,n)}render(){return this.props.error?null:this.props.children}}const me=(t,e)=>{let n;return(...r)=>(clearTimeout(n),n=setTimeout(()=>t(...r),e),()=>clearTimeout(n))};class ${constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $t=new Be(-1,1,1,-1,0,1),Ce=new Ve;Ce.setAttribute("position",new K([-1,3,0,-1,-1,0,3,-1,0],3));Ce.setAttribute("uv",new K([0,2,0,0,2,0],2));class le{constructor(e){this._mesh=new Q(Ce,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$t)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Wt={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class Qt extends ${constructor(e,n,r){super(),this.scene=e,this.camera=n;const a=r.focus!==void 0?r.focus:1,i=r.aspect!==void 0?r.aspect:n.aspect,s=r.aperture!==void 0?r.aperture:.025,o=r.maxblur!==void 0?r.maxblur:1;this.renderTargetDepth=new R(1,1,{minFilter:ae,magFilter:ae}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new H,this.materialDepth.depthPacking=re,this.materialDepth.blending=F;const l=Wt,u=O.clone(l.uniforms);u.tDepth.value=this.renderTargetDepth.texture,u.focus.value=a,u.aspect.value=i,u.aperture.value=s,u.maxblur.value=o,u.nearClip.value=n.near,u.farClip.value=n.far,this.materialBokeh=new M({defines:Object.assign({},l.defines),uniforms:u,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.uniforms=u,this.needsSwap=!1,this.fsQuad=new le(this.materialBokeh),this._oldClearColor=new k}render(e,n,r){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const a=e.getClearAlpha(),i=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=r.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(a),e.autoClear=i}setSize(e,n){this.renderTargetDepth.setSize(e,n)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Z={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class se extends ${constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof M?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=O.clone(e.uniforms),this.material=new M({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new le(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ne extends ${constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const a=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),i.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(a.EQUAL,1,4294967295),i.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),i.buffers.stencil.setLocked(!0)}}class Yt extends ${constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jt{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const r=e.getSize(new P);this._width=r.width,this._height=r.height,n=new R(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new se(Z),this.clock=new ht}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let a=0,i=this.passes.length;a<i;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),s.needsSwap){if(r){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ne!==void 0&&(s instanceof Ne?r=!0:s instanceof Yt&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new P);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qt extends ${constructor(e,n,r,a,i){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=i!==void 0?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new k}render(e,n,r){const a=e.autoClear;e.autoClear=!1;let i,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,i),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=a}}const ne={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new P(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Te},cameraInverseProjectionMatrix:{value:new Te},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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

		#if NORMAL_TEXTURE == 1
		uniform sampler2D tNormal;
		#endif

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

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			#if NORMAL_TEXTURE == 1
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
			#else
			return normalize( cross( dFdx( viewPosition ), dFdy( viewPosition ) ) );
			#endif
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
		}`},V={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new P(512,512)},sampleUvOffsets:{value:[new P(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},ie={createSampleWeights:function(t,e){const n=[];for(let r=0;r<=t;r++)n.push(Kt(r,e));return n},createSampleOffsets:function(t,e){const n=[];for(let r=0;r<=t;r++)n.push(e.clone().multiplyScalar(r));return n},configure:function(t,e,n,r){t.defines.KERNEL_RADIUS=e,t.uniforms.sampleUvOffsets.value=ie.createSampleOffsets(e,r),t.uniforms.sampleWeights.value=ie.createSampleWeights(e,n),t.needsUpdate=!0}};function Kt(t,e){return Math.exp(-(t*t)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const ce={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		#include <packing>

		void main() {

			float depth = 1.0 - unpackRGBAToDepth( texture2D( tDiffuse, vUv ) );
			gl_FragColor = vec4( vec3( depth ), opacity );

		}`};class xe extends ${constructor(e,n,r=!1,a=!1,i=new P(256,256)){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=r,this.supportsNormalTexture=a,this.originalClearColor=new k,this._oldClearColor=new k,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new P(i.x,i.y),this.saoRenderTarget=new R(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new R(this.resolution.x,this.resolution.y,{minFilter:ae,magFilter:ae}),this.depthRenderTarget=this.normalRenderTarget.clone();let s;this.supportsDepthTextureExtension&&(s=new vt,s.type=pt,this.beautyRenderTarget.depthTexture=s,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new H,this.depthMaterial.depthPacking=re,this.depthMaterial.blending=F,this.normalMaterial=new Ge,this.normalMaterial.blending=F,this.saoMaterial=new M({defines:Object.assign({},ne.defines),fragmentShader:ne.fragmentShader,vertexShader:ne.vertexShader,uniforms:O.clone(ne.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?s:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=F,this.vBlurMaterial=new M({uniforms:O.clone(V.uniforms),defines:Object.assign({},V.defines),vertexShader:V.vertexShader,fragmentShader:V.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?s:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=F,this.hBlurMaterial=new M({uniforms:O.clone(V.uniforms),defines:Object.assign({},V.defines),vertexShader:V.vertexShader,fragmentShader:V.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?s:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=F,this.materialCopy=new M({uniforms:O.clone(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,blending:F}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Ee,this.materialCopy.blendSrc=mt,this.materialCopy.blendDst=Pe,this.materialCopy.blendEquation=De,this.materialCopy.blendSrcAlpha=xt,this.materialCopy.blendDstAlpha=Pe,this.materialCopy.blendEquationAlpha=De,this.depthCopy=new M({uniforms:O.clone(ce.uniforms),vertexShader:ce.vertexShader,fragmentShader:ce.fragmentShader,blending:F}),this.fsQuad=new le(null)}render(e,n,r){if(this.renderToScreen&&(this.materialCopy.blending=F,this.materialCopy.uniforms.tDiffuse.value=r.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const i=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=i,this.hBlurMaterial.uniforms.depthCutoff.value=i,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(ie.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new P(0,1)),ie.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new P(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let s=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,s=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?s.blending=Ee:s.blending=F,this.renderPass(e,s,this.renderToScreen?null:r),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}renderPass(e,n,r,a,i){e.getClearColor(this.originalClearColor);const s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,a!=null&&(e.setClearColor(a),e.setClearAlpha(i||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}renderOverride(e,n,r,a,i){e.getClearColor(this.originalClearColor);const s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,a=n.clearColor||a,i=n.clearAlpha||i,a!=null&&(e.setClearColor(a),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(s)}setSize(e,n){this.beautyRenderTarget.setSize(e,n),this.saoRenderTarget.setSize(e,n),this.blurIntermediateRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.depthRenderTarget.setSize(e,n),this.saoMaterial.uniforms.size.value.set(e,n),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,n),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,n),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}xe.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const Zt={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new k(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class J extends ${constructor(e,n,r,a){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new P(e.x,e.y):new P(256,256),this.clearColor=new k(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new R(i,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new R(i,s);h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new R(i,s);p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),i=Math.round(i/2),s=Math.round(s/2)}const o=Zt;this.highPassUniforms=O.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new M({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];i=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new P(i,s),i=Math.round(i/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Z;this.copyUniforms=O.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new M({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:gt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new k,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new le(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(r,a);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,a),this.renderTargetsVertical[i].setSize(r,a),this.separableBlurMaterials[i].uniforms.texSize.value=new P(r,a),r=Math.round(r/2),a=Math.round(a/2)}render(e,n,r,a,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=J.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=J.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new M({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new P(.5,.5)},direction:{value:new P(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
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
				}`})}}J.BlurDirectionX=new P(1,0);J.BlurDirectionY=new P(0,1);const Xt={uniforms:{tDiffuse:{value:null},resolution:{value:new P(1/1024,1/512)}},vertexShader:`

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
	`},er={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`},tr={uniforms:{tDiffuse:{value:null},resolution:{value:new P}},vertexShader:`

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

		}`},rr=Math.PI/180;function nr(t){return t*rr}var X=function(){var t=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),r(++t%e.children.length)},!1);function n(d){return e.appendChild(d.dom),d}function r(d){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===d?"block":"none";t=d}var a=(performance||Date).now(),i=a,s=0,o=n(new X.Panel("FPS","#0ff","#002")),l=n(new X.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new X.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:n,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(l.update(d-a,200),d>=i+1e3&&(o.update(s*1e3/(d-i),100),i=d,s=0,u)){var f=performance.memory;u.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:e,setMode:r}};X.Panel=function(t,e,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),o=80*s,l=48*s,u=3*s,d=2*s,f=3*s,h=15*s,p=74*s,w=30*s,g=document.createElement("canvas");g.width=o,g.height=l,g.style.cssText="width:80px;height:48px";var y=g.getContext("2d");return y.font="bold "+9*s+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=n,y.fillRect(0,0,o,l),y.fillStyle=e,y.fillText(t,u,d),y.fillRect(f,h,p,w),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(f,h,p,w),{dom:g,update:function(v,S){r=Math.min(r,v),a=Math.max(a,v),y.fillStyle=n,y.globalAlpha=1,y.fillRect(0,0,o,h),y.fillStyle=e,y.fillText(i(v)+" "+t+" ("+i(r)+"-"+i(a)+")",u,d),y.drawImage(g,f+s,h,p-s,w,f,h,p-s,w),y.fillRect(f+p-s,h,s,w),y.fillStyle=n,y.globalAlpha=.9,y.fillRect(f+p-s,h,s,i((1-v/S)*w))}}};const ar=X,sr={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},ir={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new _}},vertexShader:`

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

		}`},or={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

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

		}`},lr={uniforms:{vSunPositionScreenSpace:{value:new _},fAspect:{value:1},sunColor:{value:new k(16772608)},bgColor:{value:new k(0)}},vertexShader:`

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

		}`};class cr extends ${constructor(e,n,r={}){super(),this.scene=e,this.camera=n,this.orthoScene=new He,this.orthoCamera=new Be(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=r.background||1297,this.sunColor=r.sunColor||16776960,this.multiplier=r.multiplier||.25,this.clipPosition=new yt,this.sunPosition=r.sunPosition||new _(0,1e3,1e3),this.screenSpacePosition=new _,this.rtTextureDepth=new R(1,1),this.rtTextureDepthMask=new R(1,1),this.rtTextureGodRays1=new R(1,1),this.rtTextureGodRays2=new R(1,1),this.materialDepth=new H;const a=sr;this.godrayMaskUniforms=O.clone(a.uniforms),this.materialGodraysDepthMask=new M({uniforms:this.godrayMaskUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader});const i=ir;this.godrayGenUniforms=O.clone(i.uniforms),this.materialGodraysGenerate=new M({uniforms:this.godrayGenUniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});const s=or;this.godrayCombineUniforms=O.clone(s.uniforms),this.materialGodraysCombine=new M({uniforms:this.godrayCombineUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader});const o=lr;this.godraysFakeSunUniforms=O.clone(o.uniforms),this.materialGodraysFakeSun=new M({uniforms:this.godraysFakeSunUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new Q(new $e(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,n,r,a){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=a,this.godrayGenUniforms.tInput.value=n,e.setRenderTarget(r),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,n,r){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const a=.74*window.innerHeight,i=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-i/2,this.screenSpacePosition.y-a/2,i,a),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(r),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=r.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(n),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,n){this.rtTextureDepth.setSize(e,n),this.rtTextureDepthMask.setSize(e,n);const r=e*this.multiplier,a=n*this.multiplier;this.rtTextureGodRays1.setSize(r,a),this.rtTextureGodRays2.setSize(r,a)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var at=`/* BEGIN HEADER */
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
  

  #if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor.rgb = instanceColor.rgb;
  #endif

  
  vec3 transformed;

  
  vec3 objectNormal;

  #if HYPERTYPE == 2 
  faceVertex(transformed, objectNormal);
  #elif HYPERTYPE == 1 
  edgeVertex(transformed, objectNormal);
  #elif HYPERTYPE == 0 
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
}`,ur=`/* BEGIN INCLUDE */

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
  
  v.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec3 xnormalize(in vec3 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.w *= .999999;
  
  
  
  
  
  
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

#if DIMENSIONS == 5
vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec5(v.v / n, v.u / n);
}
#elif DIMENSIONS == 6
vec6 xnormalize(in vec6 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u.x *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec6(v.v / n, v.u / n);
}
#elif DIMENSIONS == 7
vec7 xnormalize(in vec7 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec7(v.v / n, v.u / n);
}
#elif DIMENSIONS == 8
vec8 xnormalize(in vec8 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.u.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec8(v.v / n, v.u / n);
}
#elif DIMENSIONS == 9
vec9 xnormalize(in vec9 v) {
  if(curvature == 0.0) {
    return v;
  }
  
  v.t *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec9(v.v / n, v.u / n, v.t / n);
}
#endif

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

vec3 xproject(in vec3 v) {
  #if PROJECTION == 0 
  
  
  return v.xyz;
  #elif PROJECTION == 1 
  return vec3(v.xy, 0.);
  #elif PROJECTION == 2 
  return vec3(v.xy / v.z, 0.);
  #elif PROJECTION == 3 
  return vec3(v.xy / (v.z - 1.), 1.);
  #elif PROJECTION == 4 
  return vec3(v.xy / v.z, 1. / v.z);
  #elif PROJECTION == 5 
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
  #if PROJECTION == 0 
  return v.xyz / (v.w * fov4 + 1.);
  #elif PROJECTION == 1 
  return v.xyz;
  #elif PROJECTION == 2 
  return v.xyz / (v.w * fov4);
  #elif PROJECTION == 3 
  return v.xyz / (v.w * fov4 - 1.);
  #elif PROJECTION == 4 
  return vec3(v.xyz / v.w) / (v.w * fov4 + 1.);
  #elif PROJECTION == 5 
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
  #if PROJECTION == 0 
  return xproject(v.v / (v.u * fov5 + 1.));
  #elif PROJECTION == 1 
  return xproject(v.v);
  #elif PROJECTION == 2 
  return xproject(v.v / (v.u * fov5));
  #elif PROJECTION == 3 
  return xproject(v.v / (v.u * fov5 - 1.));
  #elif PROJECTION == 4 
  return xproject(v.v);
  #elif PROJECTION == 5 
  return xproject(v.v);
  #endif
}
#endif

#if DIMENSIONS >= 6
vec3 xproject(in vec6 v) {
  #if PROJECTION == 0 
  float nr = v.u.y * fov6 + 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 1 
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 2 
  float nr = v.u.y * fov6;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 3 
  float nr = v.u.y * fov6 - 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 4 
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 5 
  return xproject(vec5(v.v, v.u.x));
  #endif
}
#endif

#if DIMENSIONS >= 7
vec3 xproject(in vec7 v) {
  #if PROJECTION == 0 
  float nr = v.u.z * fov7 + 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 1 
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 2 
  float nr = v.u.z * fov7;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 3 
  float nr = v.u.z * fov7 - 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 4 
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 5 
  return xproject(vec6(v.v, v.u.xy));
  #endif
}
#endif

#if DIMENSIONS >= 8
vec3 xproject(in vec8 v) {
  #if PROJECTION == 0 
  float nr = v.u.w * fov8 + 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 1 
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 2 
  float nr = v.u.w * fov8;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 3 
  float nr = v.u.w * fov8 - 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 4 
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 5 
  return xproject(vec7(v.v, v.u.xyz));
  #endif
}
#endif

#if DIMENSIONS >= 9
vec3 xproject(in vec9 v) {
  #if PROJECTION == 0 
  float nr = v.t * fov9 + 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 1 
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 2 
  float nr = v.t * fov9;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 3 
  float nr = v.t * fov9 - 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 4 
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 5 
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
/* END INCLUDE */`,dr=`/* BEGIN INCLUDE */

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

  pos = trix(iCentroid, iPosition, iTarget, uv);
  next = trix(iCentroid, iPosition, iTarget, uv + vec2(EPS, 0.));
  other = trix(iCentroid, iPosition, iTarget, uv + vec2(0., EPS));

  if(length(uv) != 0. || segments > 1.) {
    pos = xnormalize(pos);
    next = xnormalize(next);
    other = xnormalize(other);
  }

  transformed = xproject(pos);
  objectNormal = cross(xproject(next) - transformed, xproject(other) - transformed);
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

  pos = mix(iPosition, iTarget, uv.y);
  next = mix(iPosition, iTarget, uv.y + EPS);
  
  pos = xnormalize(pos);
  next = xnormalize(next);

  transformed = xproject(pos);

  vec3 n = xproject(next) + NOISE; 
  vec3 k = normalize(transformed - n); 

    
    
  float r = (1. - uv.x) * TAU;
  vec3 v = normalize(cross(n, transformed));
  objectNormal = normalize(objectNormal = v * cos(r) + cross(k, v) * sin(r)); 
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
  transformed = inflate(transformed, pos, objectNormal, vertexThickness, .1);
}
#endif
/* END INCLUDE */`;const fr=at.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],Ie=at.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],hr=ur.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1]+`
`+dr.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],Oe=(t,e)=>t.replace(/\bvecN\b/g,`vec${e}`),q=new Set,N=(t,e,n="universal")=>{t=t.clone(),t.vertexColors=![H,M,Ge,ee].find(r=>t instanceof r),t._rt=e,t._type=n,t.uniforms={...t.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:1}};for(let r=4;r<=e.dimensions;r++)t.uniforms[`fov${r}`]={value:90};return e.dimensions<5&&(t.uniforms.rotationMatrix={value:e.matrix}),t.onBeforeCompile=r=>{const{dimensions:a,projection:i}=t._rt,s=[`#define DIMENSIONS ${a}`,`#define PROJECTION ${We.indexOf(i)}`,`#define HYPERTYPE ${["vertex","edge","face","universal"].indexOf(t._type)}`];Object.assign(r.uniforms,t.uniforms),t instanceof Le?r.vertexShader=r.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):t instanceof H||t instanceof ee?r.vertexShader=r.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):t instanceof M&&(r.vertexShader=r.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",Ie+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),r.vertexShader=[...s,Oe(fr,a),Oe(hr,a),r.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",Ie)].join(`
`)},t.customProgramCacheKey=()=>`hypermath_${t._type}_${t.constructor.name}_${t._rt.dimensions}_${t._rt.projection}`,t.addEventListener("dispose",()=>{q.delete(t)}),q.add(t),t},Re=window.location.search.includes("stats"),vr=()=>{let t;Re&&(t=new ar,t.dom.id="stats",document.body.appendChild(t.dom));const e=new bt;e.autoClear=!1,e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e.domElement);const n=new St(90,window.innerWidth/window.innerHeight,.01,1e4);n.position.set(0,0,-1),n.up.set(1,0,0),n.lookAt(0,0,0),n.zoom=Math.min(1,window.innerWidth/window.innerHeight),n.updateProjectionMatrix();const r=new He;n.updateProjectionMatrix(),r.add(n);const a=new Jt(e);a.setPixelRatio(window.devicePixelRatio);const i=new qt(r,n);return a.addPass(i),{composer:a,camera:n,scene:r,render:Re?()=>{t.update(),a.render()}:()=>a.render()}},Ae=t=>{let e=t.scene.getObjectByName("instanced-vertex");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.customDepthMaterial.dispose(),e.customDistanceMaterial.dispose());const n=z[t.ambiance],{dimensions:r}=t,a=new Qe(1,32,32),i=new Se().copy(a),s=r>4?9:r;i.setAttribute("instancePosition",new A(new Float32Array(t.maxVertices*s),s)),i.setAttribute("instanceTarget",new A(new Float32Array(t.maxVertices*s),s)),i.setAttribute("instanceCentroid",new A(new Float32Array(t.maxVertices*s),s)),i.setAttribute("instanceColor",new A(new Float32Array(t.maxVertices*3),3));const o=new Q(i,N(n.vertexMaterial,t,"vertex"));i.attributes.instanceTarget.array.fill(NaN),i.attributes.instanceCentroid.array.fill(NaN),o.geometry.instanceCount=0,o.frustumCulled=!1,o.customDepthMaterial=N(new H({depthPacking:re}),t,"vertex"),o.customDistanceMaterial=N(new ee,t,"vertex"),o.castShadow=n.shadow,o.name="instanced-vertex",o.visible=t.showVertices,t.scene.add(o)},je=t=>{let e=t.scene.getObjectByName("instanced-edge");e&&(t.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.customDepthMaterial.dispose(),e.customDistanceMaterial.dispose());const n=z[t.ambiance],{dimensions:r,curve:a,segments:i}=t,s=a?i:1,o=new wt(1,1,1,8,s,!0),l=new Se().copy(o),u=r>4?9:r;l.setAttribute("instancePosition",new A(new Float32Array(t.maxEdges*u),u)),l.setAttribute("instanceTarget",new A(new Float32Array(t.maxEdges*u),u)),l.setAttribute("instanceCentroid",new A(new Float32Array(t.maxEdges*u),u)),l.setAttribute("instanceColor",new A(new Float32Array(t.maxEdges*3),3));const d=new Q(l,N(n.edgeMaterial,t,"edge"));l.attributes.instanceCentroid.array.fill(NaN),d.geometry.instanceCount=0,d.frustumCulled=!1,d.customDepthMaterial=N(new H({depthPacking:re}),t,"edge"),d.customDistanceMaterial=N(new ee,t,"edge"),d.castShadow=n.shadow,d.name="instanced-edge",d.visible=t.showEdges,t.scene.add(d)},pr=t=>{let e=null,n=t.scene.getObjectByName("instanced-face");n&&(e=n.material.opacity,t.scene.remove(n),n.geometry.dispose(),n.material.dispose(),n.customDepthMaterial.dispose(),n.customDistanceMaterial.dispose());const r=z[t.ambiance],{dimensions:a,curve:i,segments:s}=t,o=new Ve,l=[],u=[],d=[],f=[],h=i?s:1,p=1/h;for(let v=0;v<h+1;v++)for(let S=0;S<v+1;S++)u.push((2*S-v)*p/2,v*p,0),d.push(0,0,1),f.push(p*S,1-p*v);for(let v=1;v<h+1;v++)for(let S=0;S<v;S++){const E=v*(v+1)/2+S,U=v*(v-1)/2+S;if(l.push(U,E,E+1),v<h){const I=(v+1)*(v+2)/2+S;l.push(I+1,E+1,E)}}o.setIndex(l),o.setAttribute("position",new K(u,3)),o.setAttribute("normal",new K(d,3)),o.setAttribute("uv",new K(f,2));const w=new Se().copy(o),g=a>4?9:a;w.setAttribute("instanceCentroid",new A(new Float32Array(t.maxFaces*g),g)),w.setAttribute("instancePosition",new A(new Float32Array(t.maxFaces*g),g)),w.setAttribute("instanceTarget",new A(new Float32Array(t.maxFaces*g),g)),w.setAttribute("instanceColor",new A(new Float32Array(t.maxFaces*3),3));const y=new Q(w,N(r.faceMaterial,t,"face"));y.geometry.instanceCount=0,y.frustumCulled=!1,y.customDepthMaterial=N(new H({depthPacking:re}),t,"face"),y.customDistanceMaterial=N(new ee,t,"face"),y.name="instanced-face",y.visible=t.showFaces,y.renderOrder=1,e&&(y.material.opacity=e),t.scene.add(y)},mr=(t,e=null)=>{const n=z[t.ambiance],r=t.scene.getObjectByName("instanced-vertex"),a=r.geometry.attributes.instancePosition.array,{dimensions:i}=t;let s=e?e[0]:0,o=e?e[1]:t.vertices.length;const l=i>4?9:i;r.geometry.instanceCount=o;for(let u=s;u<o;u++){let d=t.vertices[u].vertex;i>4&&(d=L(t.matrix,d));for(let p=0;p<i;p++)a[u*l+p]=d[p];const f=r.geometry.attributes.instanceColor.array,h=n.color(t.vertices[u],"vertex",i);f[u*3+0]=h.r,f[u*3+1]=h.g,f[u*3+2]=h.b}r.geometry.attributes.instancePosition.needsUpdate=!0,r.geometry.attributes.instanceColor.needsUpdate=!0},xr=(t,e=null)=>{const n=z[t.ambiance],r=t.scene.getObjectByName("instanced-edge"),a=r.geometry.attributes.instancePosition.array,i=r.geometry.attributes.instanceTarget.array,{dimensions:s}=t;let o=e?e[0]:0,l=e?e[1]:t.edges.length;const u=s>4?9:s;r.geometry.instanceCount=l;for(let d=o;d<l;d++){const f=t.edges[d];let h=t.vertices[f.start].vertex,p=t.vertices[f.end].vertex;s>4&&(h=L(t.matrix,h),p=L(t.matrix,p));for(let y=0;y<s;y++)a[d*u+y]=h[y],i[d*u+y]=p[y];const w=r.geometry.attributes.instanceColor.array,g=n.color(f,"edge",s);w[d*3+0]=g.r,w[d*3+1]=g.g,w[d*3+2]=g.b}r.geometry.attributes.instancePosition.needsUpdate=!0,r.geometry.attributes.instanceTarget.needsUpdate=!0,r.geometry.attributes.instanceColor.needsUpdate=!0},gr=(t,e=null)=>{const n=z[t.ambiance],r=t.scene.getObjectByName("instanced-face"),a=r.geometry.attributes.instanceCentroid.array,i=r.geometry.attributes.instancePosition.array,s=r.geometry.attributes.instanceTarget.array,{dimensions:o}=t;let l=e?e[0]:0,u=e?e[1]:t.faces.length,d=0;for(let h=0;h<l;h++){const p=t.faces[h].vertices.length;d+=p<3?0:p===3?1:p}const f=o>4?9:o;for(let h=l;h<u;h++){const p=t.faces[h];if(p.vertices.length<3)continue;let w;if(p.vertices.length===3)w=[[t.vertices[p.vertices[0]].vertex,t.vertices[p.vertices[1]].vertex,t.vertices[p.vertices[2]].vertex]],o>4&&(w[0][0]=L(t.matrix,w[0][0]),w[0][1]=L(t.matrix,w[0][1]),w[0][2]=L(t.matrix,w[0][2]));else{const g=new Array(p.vertices.length);for(let v=0;v<p.vertices.length;v++)g[v]=t.vertices[p.vertices[v]].vertex,o>4&&(g[v]=L(t.matrix,g[v]));const y=new Array(o).fill(0);for(let v=0;v<g.length;v++){const S=g[v];for(let E=0;E<o;E++)y[E]+=S[E]}for(let v=0;v<o;v++)y[v]/=g.length;w=new Array(g.length);for(let v=0;v<g.length;v++)w[v]=[y,g[v],g[(v+1)%g.length]]}for(let g=0;g<w.length;g++){let[y,v,S]=w[g];p.word.length%2===(t.curvature>0?0:1)&&([v,S]=[S,v]);for(let I=0;I<o;I++)a[d*f+I]=y[I],i[d*f+I]=v[I],s[d*f+I]=S[I];const E=r.geometry.attributes.instanceColor.array,U=n.color(p,"face",o);E[d*3+0]=U.r,E[d*3+1]=U.g,E[d*3+2]=U.b,d++}}r.geometry.instanceCount=d,r.geometry.attributes.instancePosition.needsUpdate=!0,r.geometry.attributes.instanceTarget.needsUpdate=!0,r.geometry.attributes.instanceCentroid.needsUpdate=!0,r.geometry.attributes.instanceColor.needsUpdate=!0},ue=(t,e)=>{const n=t.scene.getObjectByName(`instanced-${e}`);n.visible=t[e==="vertex"?"showVertices":e==="edge"?"showEdges":"showFaces"]},ge=(t,e=null)=>{if(t.currentOrder===0||e===null&&t.ranges.length===0||e!==null&&e>=t.ranges.length)return;const n=e!==null?t.ranges[e]:{vertices:[t.ranges[0].vertices[0],t.ranges[t.currentOrder-1].vertices[1]],edges:[t.ranges[0].edges[0],t.ranges[t.currentOrder-1].edges[1]],faces:[t.ranges[0].faces[0],t.ranges[t.currentOrder-1].faces[1]]};t.scene.getObjectByName("instanced-vertex").visible&&mr(t,n.vertices),t.scene.getObjectByName("instanced-edge").visible&&xr(t,n.edges),t.scene.getObjectByName("instanced-face").visible&&gr(t,n.faces),t.render(),document.title=`Coxeter Explorer - ${t.spaceType==="finite"?"S":t.spaceType==="affine"?"E":"H"}^${t.dimensions} ${t.currentOrder<t.order?`(${t.currentOrder}/${t.order})…`:""}- ${t.vertices.length} vertices, ${t.edges.length} edges, ${t.faces.length} faces`},yr=t=>{t.camera.fov=t.fov3,t.camera.updateProjectionMatrix(),t.render()},W=new se(Xt),br=t=>{const{composer:e,msaa:n,msaaSamples:r}=t,a=e.renderer.getDrawingBufferSize(new P),i=new R(a.width,a.height,{samples:n?r:0});if(e.reset(i),e.removePass(W),!n){const s=e.renderer.getPixelRatio();W.material.uniforms.resolution.value.x=1/(window.innerWidth*s),W.material.uniforms.resolution.value.y=1/(window.innerHeight*s),e.addPass(W)}t.render()},Sr=t=>{const e=z[t.ambiance],{scene:n,composer:r,camera:a}=t,i=t.scene.getObjectByName("instanced-vertex"),s=t.scene.getObjectByName("instanced-edge"),o=t.scene.getObjectByName("instanced-face");i.material.dispose(),s.material.dispose(),o.material.dispose(),i.material=N(e.vertexMaterial,t,"vertex"),s.material=N(e.edgeMaterial,t,"edge"),o.material=N(e.faceMaterial,t,"face"),e.env?n.environment=e.env:n.environment=null,typeof e.background!="number"?n.background=e.background:(n.background=null,r.renderer.setClearColor(new k(e.background),1));const l=[];n.traverse(h=>{h.isLight&&l.push(h)}),l.forEach(h=>{h.parent.remove(h)});let u=n.getObjectByName("ground");u&&(u.geometry.dispose(),u.material.dispose(),n.remove(u)),e.shadow&&(r.renderer.shadowMap.type=Ct,e.ground==="sphere"?u=new Q(new Qe(20,32,32),new Me({color:16777215,side:Tt,depthWrite:!1})):e.ground==="plane"&&(u=new Q(new $e(1e3,1e3),new Me({color:16777215,transparent:!0,opacity:.5,depthWrite:!1})),u.rotation.x=-Math.PI/2,u.position.y=-3),u.name="ground",u.receiveShadow=!0,n.add(u)),r.renderer.shadowMap.enabled=e.shadow,r.renderer.shadowMap.type=Et,i.castShadow=e.shadow,s.castShadow=e.shadow;const d=e.shadow?h=>{h.shadow&&(h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=a.near,h.shadow.camera.far=a.far,h.shadow.camera.fov=a.fov)}:()=>{};(e.lights||[]).forEach(h=>{d(h),n.add(h)}),(e.cameraLights||[]).forEach(h=>{d(h),a.add(h)});const f=e.fx||["copy"];if(r.renderer.toneMapping=f.includes("bloom")?Pt:Dt,r.renderer.toneMappingExposure=(f.includes("bloom"),1),r.passes.slice(1).forEach(h=>{r.removePass(h),h.dispose()}),f.forEach(h=>{if(h==="copy")r.addPass(r.copyPass);else if(h==="sao"){const p=new xe(n,a,!1,!0);p.depthMaterial=N(p.depthMaterial,t),p.normalMaterial=N(p.normalMaterial,t),p.params.output=xe.OUTPUT.Default,p.params.saoBias=.5,p.params.saoIntensity=1e-6,p.params.saoScale=10,p.params.saoKernelRadius=50,p.params.saoMinResolution=0,p.params.saoBlur=!0,p.params.saoBlurRadius=8,p.params.saoBlurStdDev=4,p.params.saoBlurDepthCutoff=.01,r.addPass(p)}else if(h==="bokeh"){const p=new Qt(n,a,{focus:.5,aperture:.005,maxblur:.005});p.materialDepth=N(p.materialDepth,t),r.addPass(p)}else if(h==="sobel"){const p=new se(er);r.addPass(p);const w=new se(tr);w.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,w.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,r.addPass(w)}else if(h==="bloom"){const p=new J(new P(window.innerWidth,window.innerHeight),1.5,0,0);r.addPass(p),o.material.opacity=t.dimensions===3?.075:.025}else if(h==="godray"){const p=new cr(n,a);p.materialDepth=N(p.materialDepth,t),r.addPass(p)}}),!t.msaa){const h=r.renderer.getPixelRatio();W.material.uniforms.resolution.value.x=1/(window.innerWidth*h),W.material.uniforms.resolution.value.y=1/(window.innerHeight*h),r.addPass(W)}st(t),r.render()},st=t=>{const{dimensions:e,curvature:n,projection:r,vertexThickness:a,edgeThickness:i}=t,s=t.curve?t.segments:1,o=q.values();for(let l=0;l<q.size;l++){const u=o.next().value;u.uniforms.curvature.value=n,u.uniforms.vertexThickness.value=a,u.uniforms.edgeThickness.value=i,u.needsUpdate=e!==u._rt.dimensions||r!==u._rt.projection,u._rt=t,u.uniforms.segments.value=s;for(let d=4;d<=e;d++)u.uniforms[`fov${d}`]||(u.uniforms[`fov${d}`]={value:1}),u.uniforms[`fov${d}`].value=Mt(nr(t[`fov${d}`])*.5);t.dimensions<5&&(u.uniforms.rotationMatrix.value=Ye(t.matrix))}},Ue=.95,Fe=25,j=(t,e,n,r,a,i,s)=>{he(a,ve(pe(t,n*2,r.combinations,i,s),a)),he(a,ve(pe(e,n*2+1,r.combinations,i,s),a))},wr=(t,e,n,r,a)=>{const{code:i}=t,s=.01;if(i==="ArrowLeft"||i==="KeyA")j(-s,0,0,e,n,r,a);else if(i==="ArrowRight"||i==="KeyD")j(s,0,0,e,n,r,a);else if(i==="ArrowUp"||i==="KeyW")j(0,-s,1,e,n,r,a);else if(i==="ArrowDown"||i==="KeyS")j(0,s,1,e,n,r,a);else if(i==="PageUp"||i==="KeyQ")j(-s,0,2,e,n,r,a);else if(i==="PageDown"||i==="KeyE")j(s,0,2,e,n,r,a);else if(i==="Digit1")j(0,-s,2,e,n,r,a);else if(i==="Digit3")j(0,s,2,e,n,r,a);else if(i==="KeyZ")j(-s,0,3,e,n,r,a);else if(i==="KeyC")j(s,0,3,e,n,r,a);else return;return!0},Cr=(t,e,n)=>{const r=x.useCallback(me(u=>n({matrix:u}),100),[]),a=x.useCallback(me(u=>n({zoom:u}),100),[]),i=x.useRef(null),s=x.useRef({pause:new Set,speed:null}),o=x.useRef(t.matrix.map(u=>u.slice()));x.useEffect(()=>{o.current=t.matrix.map(u=>u.slice())},[t.matrix]);const l=x.useCallback(()=>{if(t.dimensions>4)ge({currentOrder:t.currentOrder,dimensions:t.dimensions,curvature:t.curvature,ranges:t.ranges,matrix:o.current,render:t.render,scene:t.scene,spaceType:t.spaceType,vertices:t.vertices,edges:t.edges,faces:t.faces,ambiance:t.ambiance});else{const u=q.values();for(let f=0;f<q.size;f++){const h=u.next().value;h.uniforms.rotationMatrix.value=Ye(o.current)}const d=t.render;d()}},[t.dimensions,t.render,t.curvature,t.ranges,t.currentOrder,t.scene,t.spaceType,t.vertices,t.edges,t.faces,t.ambiance]);x.useEffect(()=>{s.current.speed=new Array(e.combinations.length).fill(0)},[e.combinations]),x.useEffect(()=>{Je(t.matrix)&&(s.current.speed=new Array(e.combinations.length).fill(0))},[e.combinations.length,t.matrix]),x.useEffect(()=>{const u=()=>{const{pause:d,speed:f}=s.current;let h=!1;for(let p=0;p<f.length;p++)f[p]===0||e.auto==="damp"&&d.has(p)||(h=!0,e.auto==="damp"&&(f[p]*=.96,te(f[p])<1e-4&&(f[p]=0,r(o.current))),he(o.current,ve(pe(f[p],p,e.combinations,t.dimensions,t.curvature),o.current)));h&&l(),i.current!==null&&(i.current=requestAnimationFrame(u))};return e.auto&&(i.current=requestAnimationFrame(u)),()=>{i.current&&(cancelAnimationFrame(i.current),i.current=null),r(o.current)}},[e.auto,e.combinations,t.dimensions,t.curvature,r,l]),x.useEffect(()=>{t.camera.position.z=-t.zoom},[t.camera,t.zoom]),x.useEffect(()=>{const u=new Map;let d=null,f=null;const h=()=>{const g=u.values(),y=g.next().value,v=g.next().value;return Nt(y[0]-v[0],y[1]-v[1])},p=g=>{if(!u.has(g.pointerId))return;let y=u.get(g.pointerId);const v=[(g.clientX-y[0])/window.innerHeight,-(g.clientY-y[1])/window.innerHeight];if(e.auto){const E=performance.now(),U=E-f;f=E;const I=[Fe*v[0]/U,Fe*v[1]/U];s.current.speed[e.shift*2]=I[0],s.current.speed[e.shift*2+1]=I[1]}if(u.set(g.pointerId,[g.clientX,g.clientY]),u.size===2){if(d===null){d=h();return}const E=h();t.camera.position.z*=d/E,d=E;const U=t.render;U(),a(-t.camera.position.z);return}let S=e.shift;!S&&g.shiftKey?S=1:!S&&g.altKey?S=2:!S&&g.ctrKey?S=3:!S&&g.metaKey&&(S=4),u.size>2&&(S+=u.size-2),j(fe*v[0],fe*v[1],S,{combinations:e.combinations,auto:e.auto,shift:e.shift},o.current,t.dimensions,t.curvature),l(),r(o.current)},w=g=>{if(g.button!==0||g.target.tagName!=="CANVAS")return;e.auto&&(f=performance.now(),s.current.pause.add(e.shift*2),s.current.pause.add(e.shift*2+1),s.current.speed[e.shift*2]=0,s.current.speed[e.shift*2+1]=0),u.set(g.pointerId,[g.clientX,g.clientY]);const y=v=>{e.auto&&(performance.now()-f>100?(s.current.speed[e.shift*2]=0,s.current.speed[e.shift*2+1]=0):e.auto==="free"&&(s.current.speed[e.shift*2]*=.5,s.current.speed[e.shift*2+1]*=.5),s.current.pause.delete(e.shift*2),s.current.pause.delete(e.shift*2+1)),d=null,u.delete(v.pointerId),document.removeEventListener("pointermove",p)};document.addEventListener("pointermove",p),document.addEventListener("pointerup",y,{once:!0})};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[e.auto,e.combinations,e.shift,t.dimensions,t.curvature,t.render,t.camera,l,r,a]),x.useEffect(()=>{const u=d=>{d.target===document.body&&wr(d,{combinations:e.combinations,auto:e.auto,shift:e.shift},o.current,t.dimensions,t.curvature)&&(l(),r(o.current))};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[l,e.auto,e.combinations,e.shift,t.curvature,t.dimensions,r]),x.useEffect(()=>{const u=d=>{d.target.tagName==="CANVAS"&&(t.camera.position.z*=d.deltaY<0?Ue:1/Ue,t.render(),a(-t.camera.position.z))};return document.addEventListener("wheel",u),()=>{document.removeEventListener("wheel",u)}},[t,a]),x.useEffect(()=>{const u=d=>{if(d.button!==0||d.target.tagName!=="CANVAS")return;const f=-t.camera.position.z,h=f<.5?5:f<2?.25:1;t.camera.position.z=-h,t.render(),a(h)};return document.addEventListener("dblclick",u),()=>{document.removeEventListener("dblclick",u)}},[t,a])};function Tr({runtime:t,rotations:e,updateParams:n}){return Cr(t,e,n),null}const Er=t=>{const{camera:e,composer:n}=t,r=1,a=window.innerWidth*r,i=window.innerHeight*r,s=n.renderer.domElement;if(s.width!==a||s.height!==i){e.aspect=a/i,e.zoom=Math.min(1,a/i),e.updateProjectionMatrix(),n.renderer.setSize(a,i),n.setSize(a,i);const o=n.renderer.getPixelRatio();n.setPixelRatio(o);const l=a*o,u=i*o;n.passes.forEach(d=>{var f,h;if((h=(f=d.material)==null?void 0:f.uniforms)!=null&&h.resolution){let p=l,w=u;d.material.uniforms.resolution.value.x<=1&&(p=1/p,w=1/w),d.material.uniforms.resolution.value.x=p,d.material.uniforms.resolution.value.y=w}d.resolution&&(d.resolution=new P(a,i))}),s.style.width=a+"px",s.style.height=i+"px"}t.render()},Pr=(t,e)=>{x.useEffect(()=>{e(n=>(br(n),n))},[t.msaa,t.msaaSamples,t.composer,e]),x.useEffect(()=>{e(n=>(yr(n),n))},[t.fov3,t.camera,t.composer,e]),x.useEffect(()=>{e(n=>(Ae(n),je(n),pr(n),n))},[t.dimensions,t.curve,t.segments,e]),x.useEffect(()=>{e(n=>(n.vertices.length&&(console.warn(`Extending vertex buffer to ${n.vertices.length}`),Ae(n)),n))},[t.maxVertices,e]),x.useEffect(()=>{e(n=>(n.edges.length&&(console.warn(`Extending edge buffer to ${n.edges.length}`),je(n)),n))},[t.maxEdges,e]),x.useEffect(()=>{e(n=>(Sr(n),n))},[t.ambiance,e]),x.useEffect(()=>{e(n=>(ue(n,"vertex"),ue(n,"edge"),ue(n,"face"),n))},[t.showVertices,t.showEdges,t.showFaces,e]),x.useEffect(()=>{e(n=>{if(!(n.currentOrder<0))return ge(n,n.currentOrder-1),n})},[t.currentOrder,t.vertices,t.edges,t.ranges,t.showVertices,t.showEdges,t.showFaces,e]),x.useEffect(()=>{e(n=>(ge(n),n))},[t.ambiance,t.showVertices,t.showEdges,t.showFaces,t.maxVertices,t.maxEdges,t.curve,t.segments,t.matrix,e]),x.useEffect(()=>{e(n=>(st(n),n.render(),n))},[t.fov4,t.fov5,t.fov6,t.fov7,t.fov8,t.fov9,t.vertexThickness,t.edgeThickness,t.projection,t.curvature,t.dimensions,t.curve,t.segments,t.maxVertices,t.maxEdges,t.matrix,e]),x.useEffect(()=>{const n=()=>{Er(t)};return window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[t])};function Dr({runtime:t,setRuntime:e}){return Pr(t,e),null}function Mr(){return new Worker(""+new URL("knuthbendix-tiling.worker-dbafa931.js",import.meta.url).href)}function Nr(){return new Worker(""+new URL("toddcoxeter-tiling.worker-f1092b89.js",import.meta.url).href)}function Ir(){return new Worker(""+new URL("fundamental.worker-575cdf7f.js",import.meta.url).href)}let de=class it{constructor(e,n){this.workerClass=n,this.name=e,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=Math.random()*16|0;return(e==="x"?n:n&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.warn(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(e){return e.uuid=it.uuid4(),this.processing++,this.times[e.uuid]=performance.now(),this.worker.postMessage(e),new Promise((n,r)=>{const a=s=>{if(s.data.uuid!==e.uuid)return;const o=performance.now()-this.times[e.uuid];if(delete this.times[e.uuid],console.debug(`Worker ${this.name} took ${o}ms`),this.processing--,this.worker.removeEventListener("message",a),this.worker.removeEventListener("error",i),s.data.error){r(s.data.error);return}n(s.data)},i=s=>{this.worker.removeEventListener("message",a),this.worker.removeEventListener("error",i),!(this.processing<=0)&&(delete this.times[e.uuid],this.processing--,this.processing=It(0,this.processing),console.error(`Can't call web worker ${this.name}`,s))};this.worker.addEventListener("message",a),this.worker.addEventListener("error",i)})}};const Or=()=>Object.values(ot).filter(t=>t.processing>0).forEach(t=>t.kill()),ot={knuthbendix:new de("knuthbendix",Mr),toddcoxeter:new de("toddcoxeter",Nr),fundamental:new de("toddcoxeter",Ir)},ke=async(t,e,n)=>{const r=ot[t.grouper.replace(/^auto-/,"")];if(t.currentOrder===0&&(Or(),e.current=!1),e.current===t.currentOrder){console.log("already processing at ",t.currentOrder);return}try{e.current=t.currentOrder;const{vertices:a,edges:i,faces:s,order:o}=await r.process({order:t.currentOrder,coxeter:t.coxeter,curvature:t.curvature,stellation:t.stellation,mirrors:t.mirrors,mirrorsPlanes:t.mirrorsPlanes,rootVertex:t.rootVertex,dimensions:t.dimensions});e.current=!1,n(l=>l.currentOrder!==o?(console.warn("Mismatched order, ignoring",l.currentOrder,o),{...l,currentOrder:0,vertices:[],edges:[],faces:[],ranges:[],renderError:null,processing:!0,error:"Mismatch Order"}):{...l,ranges:[...l.ranges,{vertices:[l.vertices.length,l.vertices.length+a.length],edges:[l.edges.length,l.edges.length+i.length],faces:[l.faces.length,l.faces.length+s.length]}],vertices:l.vertices.concat(a),edges:l.edges.concat(i),faces:l.faces.concat(s),currentOrder:o+1,processing:!1,error:null})}catch(a){e.current=!1,console.error(a);const i={...t,currentOrder:t.order,error:a.message,processing:!1};n(i)}},Rr=(t,e)=>{const n=x.useRef(!1);x.useEffect(()=>{e(r=>r.order<r.currentOrder?{...r,currentOrder:r.order}:r)},[t.order,t.currentOrder,e]),x.useEffect(()=>{e(r=>{const a=_t(r.coxeter,r.stellation),i=zt(a);if(!i)return{...r,spaceType:i};const s=i==="finite"?1:i==="affine"?0:-1,o=r.grouper===""||r.grouper.startsWith("auto-")?"auto-toddcoxeter":r.grouper,l=Lt(a,s,r.centered===null?o.replace(/^auto-/,"")==="toddcoxeter"&&s<=0||a.some(f=>f.some(h=>h===-1)):r.centered),u=nt(r.mirrors,l,s),d={...r,currentOrder:0,grouper:o,vertices:[],edges:[],faces:[],ranges:[],spaceType:i,curvature:s,mirrorsPlanes:l,rootVertex:u,renderError:null,processing:!0,error:null};return ke(d,n,e),d})},[t.dimensions,t.coxeter,t.mirrors,t.stellation,t.centered,t.grouper,e]),x.useEffect(()=>{e(r=>{var a;return r.order<=r.currentOrder?r:(a=r.ranges)!=null&&a[r.order]?{...r,currentOrder:r.order,askedOrder:null}:(ke(r,n,e),{...r,error:null,processing:!0})})},[e,t.order,t.currentOrder]),x.useEffect(()=>{e(r=>r.vertices.length>r.maxVertices?{...r,maxVertices:r.vertices.length}:r)},[t.vertices,e]),x.useEffect(()=>{e(r=>r.edges.length>r.maxEdges?{...r,maxEdges:r.edges.length}:r)},[t.edges,e]),x.useEffect(()=>{e(r=>{let a=0;for(let i=0;i<r.faces.length;i++){const s=r.faces[i].vertices.length;a+=s===3?1:s}return a>r.maxFaces?{...r,maxFaces:a}:r})},[t.faces,e])};function Ar({runtime:t,setRuntime:e}){return Rr(t,e),null}function jr({runtime:t,setRuntime:e,rotations:n,updateParams:r}){window.rt=t;const a=x.useCallback(i=>{e(s=>({...s,renderError:i.message}))},[e]);return x.useEffect(()=>()=>{t.curvature!==null&&r({matrix:oe(t.dimensions)})},[t.curvature]),c.jsx(c.Fragment,{children:c.jsxs(Ht,{error:t.renderError,onError:a,children:[c.jsx(Ar,{runtime:t,setRuntime:e}),c.jsx(Dr,{runtime:t,setRuntime:e}),c.jsx(Tr,{runtime:t,rotations:n,updateParams:r})]})})}function _e({allowNull:t,name:e,value:n,onChange:r,...a}){const i=x.useCallback(o=>{let{name:l,checked:u}=o.target,d;t?d=n===!1?!0:n?null:!1:d=u,r(l,d)},[t,r,n]),s=x.useRef(null);return x.useLayoutEffect(()=>{t&&s.current&&(n===null?s.current.indeterminate=!0:s.current.indeterminate=!1)},[n,t]),c.jsx("input",{type:"checkbox",ref:s,name:e,checked:n||!1,onChange:i})}function T({type:t,dimensions:e}){return c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"space",children:t===null||t==="indefinite"?"𝕏":t==="affine"?"𝔼":t==="finite"?"𝕊":"ℍ"}),e?c.jsx("sup",{children:e-1}):null,t!=null&&t.startsWith("hyperbolic")?c.jsx("sub",{children:{compact:" ",paracompact:"*"}[t.replace(/^hyperbolic-/,"")]||(t.startsWith("hyperbolic-lorentzian")?`L${t.replace(/^hyperbolic-lorentzian-level-/,"")}`:null)}):null]})}const Ur=(...t)=>{if(Array.isArray(t[0]))return{coxeter:t,dimensions:t.length,extended:!0};const e=t.length+1;return{coxeter:new Array(e).fill().map((r,a)=>new Array(e).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?t[Ke(a,s)]:2)),dimensions:e}},Fr=(...t)=>{const e=t.length+1;return{stellation:new Array(e).fill().map((r,a)=>new Array(e).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?t[Ke(a,s)]:1))}},m=(t,e,n,r)=>{const a=Ur(...t),{dimensions:i}=a,s={...qe,...a,showVertices:i<=3,showFaces:i<=4,curve:i>3,grouper:"toddcoxeter",ambiance:"colorful",matrix:oe(i),zoom:i<=3?2:i>4?3:5,...r||{}};if(e?s.mirrors=e:s.mirrors=new Array(i).fill().map((o,l)=>l===0?1:0),n?s.stellation=Fr(...n).stellation:s.stellation=new Array(i).fill().map((o,l)=>new Array(i).fill(1)),i>4)for(let o=4;o<=i;o++)s[`fov${o}`]=(10-o)*10;return s},b=(t,e,n,r)=>({...m(t,e,n),ambiance:"plain",showVertices:!1,curve:!0,zoom:1,...r}),G=(t,e,n,r)=>({...m(t,e,n),ambiance:"neon",showFaces:!1,showVertices:!1,grouper:"",edgeThickness:10,zoom:2,...r}),C=(t,e,n,r)=>({...m(t,e,n),ambiance:"neon",showFaces:!1,showVertices:!1,curve:!0,grouper:"",edgeThickness:10,zoom:1.5,...r}),Y=t=>{if(t===4)return{"":[1,0,0,0],Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(t===5)return{"":[1,0,0,0,0],Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(t===6)return{"":[1,0,0,0,0,0],Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(t===7)return{"":[1,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(t===8)return{"":[1,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(t===9)return{"":[1,0,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},kr=[{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:4})," Tesseract"]}),params:m([4,3,3],[1,0,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon",centered:!1,zoom:4.2})},{name:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:b([7,3],[1,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon"})},{name:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic",dimensions:3})," Ideal triangles"]}),params:b([[1,1/0,1/0],[1/0,1,1/0],[1/0,1/0,1]],[1,1,1],null,{grouper:"fundamental",showVertices:!1,showFaces:!0,curve:!0,segments:256,ambiance:"neon"})},{name:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic",dimensions:4})," Ideal tetrahedron"]}),params:b([3,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:256,ambiance:"pure"})},{name:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:C([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic",dimensions:4})," Ideal Pentahedron"]}),params:b([5,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:128,ambiance:"pure",zoom:1.5})},{name:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:4})," Flat Torus"]}),params:m([32,2,32],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",zoom:3})},{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite"})," Spherical space"]})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:m([3,3])},{name:"Cube",params:m([4,3])},{name:"Octahedron",params:m([3,4])},{name:"Dodecahedron",params:m([5,3])},{name:"Icosahedron",params:m([3,5])},{name:"Cuboctahedron",params:m([4,3],[0,1,0])},{name:"Icosidodecahedron",params:m([5,3],[0,1,0])},{name:"Truncated Tetrahedron",params:m([3,3],[1,1,0])},{name:"Truncated Cube",params:m([4,3],[1,1,0])},{name:"Truncate Octahedron",params:m([3,4],[1,1,0])},{name:"Truncate Dodecahedron",params:m([5,3],[1,1,0])},{name:"Truncate Icosahedron",params:m([3,5],[1,1,0])},{name:"Rhombicuboctahedron",params:m([4,3],[1,0,1])},{name:"Rhombicosidodecahedron",params:m([5,3],[1,0,1])},{name:"Truncated Cuboctahedron",params:m([4,3],[1,1,1])},{name:"Truncated Icosidodecahedron",params:m([5,3],[1,1,1])},{name:"Snub Cube",params:m([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:m([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:m([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:m([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:m([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:m([5,3],[1,0,0],[2,1])},{name:"Stellated Octahedron",params:m([2,2],["ß","ß","ß"])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:4})," Polychora"]})},...Object.entries(Y(4)).map(([t,e])=>[{name:`${t?`${t} `:""}5-cell`,params:m([3,3,3],e)},{name:`${t?`${t} `:""}8-cell`,params:m([4,3,3],e)},{name:`${t?`${t} `:""}16-cell`,params:m([3,3,4],e)},{name:`${t?`${t} `:""}24-cell`,params:m([3,4,3],e)},{name:`${t?`${t} `:""}120-cell`,params:m([5,3,3],e)},{name:`${t?`${t} `:""}600-cell`,params:m([3,3,5],e)}]).flat(),{name:"Snub 24-cell",params:m([3,4,3],["s","s",0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:5})," Polytera"]})},...Object.entries(Y(5)).map(([t,e])=>[{name:`${t?`${t} `:""}5-simplex`,params:m([3,3,3,3],e)},{name:`${t?`${t} `:""}5-cube`,params:m([4,3,3,3],e)},{name:`${t?`${t} `:""}5-orthoplex`,params:m([3,3,3,4],e)},{name:`${t?`${t} `:""}5-demicube`,params:m([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]],e)}]).flat(),{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:6})," Polypeta"]})},...Object.entries(Y(6)).map(([t,e])=>[{name:`${t?`${t} `:""}6-simplex`,params:m([3,3,3,3,3],e)},{name:`${t?`${t} `:""}6-cube`,params:m([4,3,3,3,3],e)},{name:`${t?`${t} `:""}6-orthoplex`,params:m([3,3,3,3,4],e)},{name:`${t?`${t} `:""}6-demicube`,params:m([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]],e)}]).flat(),{name:c.jsxs(c.Fragment,{children:["2",c.jsx("sub",{children:"21"})]}),params:m([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["1",c.jsx("sub",{children:"22"})]}),params:m([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:7})," Polyexa"]})},...Object.entries(Y(7)).map(([t,e])=>[{name:`${t?`${t} `:""}7-simplex`,params:m([3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}7-cube`,params:m([4,3,3,3,3,3],e)},{name:`${t?`${t} `:""}7-orthoplex`,params:m([3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}7-demicube`,params:m([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]],e)}]).flat(),{name:c.jsxs(c.Fragment,{children:["3",c.jsx("sub",{children:"21"})]}),params:m([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["2",c.jsx("sub",{children:"31"})]}),params:m([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:c.jsxs(c.Fragment,{children:["1",c.jsx("sub",{children:"32"})]}),params:m([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:8})," Polyzetta"]})},...Object.entries(Y(8)).map(([t,e])=>[{name:`${t?`${t} `:""}8-simplex`,params:m([3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}8-cube`,params:m([4,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}8-orthoplex`,params:m([3,3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}8-demicube`,params:m([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],e)}]).flat(),{name:c.jsxs(c.Fragment,{children:["1",c.jsx("sub",{children:"42"})]}),params:m([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,1,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["2",c.jsx("sub",{children:"41"})]}),params:m([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["4",c.jsx("sub",{children:"21"})]}),params:m([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"finite",dimensions:9}),"Polyyotta"]})},...Object.entries(Y(9)).map(([t,e])=>[{name:`${t?`${t} `:""}9-simplex`,params:m([3,3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}9-cube`,params:m([4,3,3,3,3,3,3,3],e)},{name:`${t?`${t} `:""}9-orthoplex`,params:m([3,3,3,3,3,3,3,4],e)},{name:`${t?`${t} `:""}9-demicube`,params:m([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],e)}]).flat(),{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"affine"})," Euclidean space"]})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:m([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:m([4,4],[1,0,0])},{name:"Hexagonal",params:m([6,3],[1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:G([4,3,4],[1,0,0,0])},{name:"Octet",params:G([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:G([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:G([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:G([3,3,4,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"24-cellic",params:G([3,4,3,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"4-simpletic",params:G([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter tesseractic",params:G([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0],null,{grouper:"toddcoxeter"})},{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:b([3,7],[1,0,0])},{name:"Order-8 triangular",params:b([3,8],[1,0,0])},{name:"Infinite Order triangular",params:b([3,1/0],[1,0,0])},{name:"Order-5 square",params:b([4,5],[1,0,0])},{name:"Order-6 square",params:b([4,6],[1,0,0])},{name:"Order-7 square",params:b([4,7],[1,0,0])},{name:"Order-8 square",params:b([4,8],[1,0,0])},{name:"Infinite Order square",params:b([4,1/0],[1,0,0])},{name:"Order-4 pentagonal",params:b([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:b([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:b([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:b([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:b([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:b([5,1/0],[1,0,0])},{name:"Order-4 hexagonal",params:b([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:b([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:b([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:b([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:b([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:b([6,1/0],[1,0,0])},{name:"Order-3 heptagonal",params:b([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:b([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:b([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:b([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:b([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:b([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:b([7,1/0],[1,0,0])},{name:"Order-3 octagonal",params:b([8,3],[1,0,0])},{name:"Order-4 octagonal",params:b([8,4],[1,0,0])},{name:"Order-5 octagonal",params:b([8,5],[1,0,0])},{name:"Order-6 octagonal",params:b([8,6],[1,0,0])},{name:"Order-7 octagonal",params:b([8,7],[1,0,0])},{name:"Order-8 octagonal",params:b([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:b([8,1/0],[1,0,0])},{name:"Order-3 apeirogonal",params:b([1/0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:b([1/0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:b([1/0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:b([1/0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:b([1/0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:b([1/0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:b([1/0,1/0],[1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic-compact",dimensions:4})," Honeycombs compacts"]})},{name:"Icosahedral",params:C([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:C([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:C([5,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 cubic",params:C([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:C([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral dodecahedral",params:C([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic octahedral",params:C([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Dodcahedral",params:C([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Icosahedral",params:C([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic-paracompact",dimensions:4})," Honeycombs paracompacts"]})},{name:"Triangular",params:C([3,6,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:C([6,3,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 tetrahedral",params:C([3,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-6 cubic",params:C([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-5 hexagonal",params:C([6,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 hexagonal",params:C([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 hexagonal",params:C([6,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Square",params:C([4,4,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated square",params:C([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-4 square",params:C([4,4,4],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral square",params:C([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic square",params:C([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter order square",params:C([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral Hexagonal",params:C([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Hexagonal",params:C([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Icosahedral Hexagonal",params:C([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal Triangular",params:C([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-4 Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Runcic Order-6 Hexagonal",params:C([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{grouper:"toddcoxeter"})},{name:"Quarter Order-4 hexagonal",params:C([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:C([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{grouper:"toddcoxeter"})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(T,{type:"hyperbolic-lorentzian-level-2",dimensions:4})," Honeycombs lorentzians"]})},{name:"3-3-7",params:C([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-4-7",params:C([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-5-7",params:C([3,5,7],[1,0,0,0],null,{grouper:"toddcoxeter"})}],_r=x.memo(function({name:e,params:n,onPreset:r}){return c.jsxs("div",{className:"preset",onClick:()=>r(n),children:[c.jsx("span",{className:"preset-name",children:e}),c.jsx(Ot,{coxeter:n.coxeter,mirrors:n.mirrors,stellation:n.stellation})]})}),ye=t=>{if(["string","number"].includes(typeof t))return t;if(t instanceof Array)return t.map(ye).join("");if(typeof t=="object"&&t)return ye(t.props.children)};function zr({onPreset:t,closePresets:e}){const[n,r]=x.useState(""),[a,i]=x.useState(""),s=x.useCallback(o=>{i(o.target.value),me(r(o.target.value),50)},[]);return c.jsxs("div",{className:"presets-modal",children:[c.jsxs("div",{className:"presets-header",children:[c.jsxs("div",{className:"presets-search",children:[c.jsx("input",{type:"text",placeholder:"Search",value:a,onChange:s}),c.jsx("button",{className:"presets-clear",onClick:()=>{r(""),i("")},children:"⌫"})]}),c.jsxs("div",{className:"presets-actions",children:[c.jsx("a",{className:"presets-author",href:"https://florian.mounier.dev/",children:"❓"}),c.jsx("button",{className:"presets-close",onClick:e,children:"✖️"})]})]}),c.jsx("div",{className:"presets-list",children:kr.map(({type:o,content:l,name:u,params:d},f)=>c.jsx(x.Fragment,{children:o==="title"?c.jsx("h2",{children:l}):o==="group"?c.jsx("h4",{children:l}):!n||ye(u).toLowerCase().includes(n.toLowerCase())?c.jsx(_r,{name:u,params:d,search:n,onPreset:t}):null},f))})]})}function Br({runtime:t,params:e,rotations:n,updateParams:r,updateRotations:a}){const[i,s]=x.useState("simple"),[o,l]=x.useState(!1),u=x.useCallback(()=>l(!1),[]),d=x.useCallback(v=>{let{name:S,value:E}=v.target;r({[S]:E})},[r]),f=x.useCallback((v,S)=>{r({[v]:S})},[r]),h=x.useCallback(()=>s(v=>({simple:"advanced",advanced:"empty",empty:"simple"})[v]),[]),p=x.useCallback(v=>{r(v),u()},[r,u]),w=x.useCallback(()=>{r({matrix:oe(t.dimensions)})},[r,t.dimensions]),g=x.useCallback(v=>{a("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,a]),y=x.useCallback(v=>{a("auto",n.auto==="free"?"damp":"free")},[n.auto,a]);return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`presets ${o?"shown":"hidden"}`,children:c.jsx(zr,{onPreset:p,closePresets:u})}),c.jsxs("div",{className:t.error?"error":"",title:t.error,children:[t.currentOrder<t.order?c.jsxs("aside",{className:"processing-counter",children:[t.currentOrder,"/",t.order]}):null,["simple","advanced"].includes(i)?c.jsx("button",{className:"preset-button button",onClick:()=>l(v=>!v),title:"Presets",children:"◭"}):null,["simple","advanced"].includes(i)?c.jsxs("aside",{className:"controls",children:[c.jsxs("button",{className:"controls-button button",onClick:g,title:"Rotation Mode",children:[c.jsx("span",{style:{display:"inline-block",transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:"⥁"}),c.jsx("sup",{children:n.shift+1})]}),c.jsxs("div",{className:"subcontrols",children:[c.jsx("button",{className:"button anim-view",onClick:y,title:"Animate rotations",children:n.auto==="free"?"⤞":n.auto==="damp"?"↠":"?"}),!Je(t.matrix)&&c.jsx("button",{className:"button reset-view",onClick:w,title:"Reset View",children:"⌖"})]})]}):null,c.jsx("button",{className:`space-button button${t.processing?" processing":""}`,onClick:h,title:`Space ${t.spaceType}`,children:c.jsx(T,{type:t.spaceType,dimensions:t.dimensions})}),["advanced"].includes(i)&&c.jsxs("aside",{className:"parameters",children:[(e.extended||e.grouper!=="")&&c.jsxs("label",{children:["Grouper",c.jsx("select",{name:"grouper",value:e.grouper,onChange:d,children:Rt.map(v=>c.jsx("option",{value:v,children:v===""?e.grouper===""?`Auto [${t.grouper.replace(/^auto-/,"")}]`:"Auto":v.replace(/_/g," ").replace(/./,S=>S.toUpperCase())},v))})]}),(e.extended||e.grouper)&&c.jsxs("label",{children:["inCentered",c.jsx(_e,{name:"centered",allowNull:!0,value:e.centered,onChange:f})]}),(e.extended||t.curvature<=0)&&c.jsx(B,{name:"order",label:"Precision",min:1,step:1,value:e.order,onChange:f}),c.jsx(B,{name:"segments",label:"Segments",min:1,step:1,value:e.segments,toggler:e.curve,togglerName:"curve",onChange:f}),c.jsx(B,{name:"dimensions",label:"Dimensions",min:2,max:9,step:1,value:e.dimensions,onChange:f}),c.jsxs("label",{children:["Projection",c.jsx("select",{name:"projection",value:e.projection,onChange:d,children:We.map(v=>c.jsx("option",{value:v,children:v.replace(/_/g," ").replace(/./,S=>S.toUpperCase())},v))})]}),c.jsx(B,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:e.vertexThickness,toggler:e.showVertices,togglerName:"showVertices",onChange:f}),c.jsx(B,{name:"edgeThickness",label:"Edges",min:0,step:1,value:e.edgeThickness,toggler:e.showEdges,togglerName:"showEdges",onChange:f}),(t.grouper.replace(/^auto-/,"")==="toddcoxeter"||t.grouper==="fundamental")&&c.jsxs("label",{children:["Faces",c.jsx(_e,{name:"showFaces",value:e.showFaces,onChange:f})]}),c.jsxs("label",{children:["Ambiance",c.jsx("select",{name:"ambiance",value:e.ambiance,onChange:d,children:(e.extended?Object.keys(z):Object.entries(z).filter(([v,{extended:S}])=>!S).map(([v])=>v)).map(v=>c.jsx("option",{value:v,children:v.replace(/_/g," ").replace(/./,S=>S.toUpperCase())},v))})]})]}),i==="advanced"&&c.jsxs("aside",{className:"view",children:[c.jsx(B,{name:"msaaSamples",label:"MSAA",min:0,step:1,value:e.msaaSamples,toggler:e.msaa,togglerName:"msaa",onChange:f}),c.jsx(B,{name:"fov3",label:"FOV3",min:0,step:1,value:e.fov3,onChange:f}),e.dimensions>3?[...Array(e.dimensions-3).keys()].map(v=>c.jsx(B,{label:`FOV${v+4}`,name:`fov${v+4}`,step:1,value:e[`fov${v+4}`],onChange:f},v)):null]}),["simple","advanced"].includes(i)&&c.jsx(At,{dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,extended:e.extended,onChange:f})]})]})}function Vr({gl:t,params:e,updateParams:n}){window.p=e;const[r,a]=x.useState(()=>({...e,...t,currentOrder:0,askedOrder:null,spaceType:null,curvature:null,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],faces:[],maxVertices:3e4,maxEdges:5e4,maxFaces:5e4,processing:!0,error:null,renderError:null})),[i,s]=x.useState({shift:0,maxShift:0,combinations:[],auto:"damp"});x.useEffect(()=>{a(l=>({...l,...Ze({order:e.order,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,matrix:e.matrix,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,zoom:e.zoom,curve:e.curve,segments:e.segments,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,centered:e.centered}).params}))},[e.order,e.ambiance,e.centered,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.showEdges,e.showFaces,e.showVertices,e.stellation,e.vertexThickness,e.zoom]),x.useEffect(()=>{s(l=>({...l,shift:0,maxShift:~~jt(Ut(e.dimensions,2)/2),combinations:Vt(Ft(new Array(e.dimensions).fill().map((u,d)=>d),2)),auto:"damp"}))},[e.dimensions]),x.useEffect(()=>{a(l=>e.grouper===""&&l.grouper.startsWith("auto-")?l:{...l,grouper:e.grouper})},[e.grouper]);const o=x.useCallback((l,u)=>{s(d=>({...d,[l]:u}))},[s]);return c.jsxs("div",{className:r.error||r.renderError?"error":"",title:r.error||r.renderError,children:[c.jsx(Br,{runtime:r,params:e,rotations:i,updateRotations:o,updateParams:n}),c.jsx(jr,{runtime:r,rotations:i,setRuntime:a,updateParams:n})]})}const lt=vr();Object.assign(window,lt);const Gr=t=>JSON.parse(t,(n,r)=>r==="Infinity"?1/0:r),Lr=t=>JSON.stringify(t,(n,r)=>r===1/0?"Infinity":r),ze=(t=null)=>{const{location:e}=window;if(e.hash)try{return Gr(atob(e.hash.slice(1)))}catch(n){console.warn(n),e.hash=""}return t},Hr=t=>{window.history.pushState(null,null,"#"+btoa(Lr(t)))},be=(t,e)=>t.length!==e.length?!1:t.every((n,r)=>Array.isArray(n)?be(n,e[r]):n===e[r]),$r=()=>{const[t,e]=x.useState(ze(qe)),n=x.useCallback(()=>{const a=ze();a&&(Object.entries(a).forEach(([i,s])=>{Array.isArray(s)&&be(s,t[i])&&(a[i]=t[i])}),e(a))},[t]),r=x.useCallback(a=>{e(i=>{if(!Object.entries(a).filter(([l,u])=>Array.isArray(u)?!be(u,i[l]):i[l]!==u).length)return i;const{params:s,badParams:o}=Ze({...i,...a});return o.length||Hr(s),s})},[]);return x.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),c.jsx(Vr,{gl:lt,params:t,updateParams:r})};kt.createRoot(document.getElementById("root")).render(c.jsx($r,{}));
