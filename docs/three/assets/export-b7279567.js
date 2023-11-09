import{V as A}from"./CoxeterDiagram-e3ee096f.js";var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v={exports:{}};(function(O,p){(function(f,d){O.exports=d()})(C,function(){return function(l){var f={};function d(n){if(f[n])return f[n].exports;var r=f[n]={i:n,l:!1,exports:{}};return l[n].call(r.exports,r,r.exports,d),r.l=!0,r.exports}return d.m=l,d.c=f,d.i=function(n){return n},d.d=function(n,r,a){d.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:a})},d.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(r,"a",r),r},d.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},d.p="",d(d.s=7)}([function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0});function n(r,a,h,x){var i=1,t=0,e=a+h,s=0;typeof x=="number"&&(i=x&65535,t=x>>>16&65535);for(var u=a;u<e;){for(s=Math.min(e-u,3850)+u;u<s;u++)i+=r[u]&255,t+=i;i=15*(i>>>16)+(i&65535),t=15*(t>>>16)+(t&65535)}return t%65521<<16|i%65521}f.adler32_buf=n},function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0});var n=d(2),r=d(0);function a(i){return(i&255)<<8|i>>8&255}function h(i){return(i&255)<<24|(i&65280)<<8|i>>8&65280|i>>24&255}var x=function(){function i(t){this.bufferOrLength=t,this.offset=0,t instanceof ArrayBuffer?this.array=new Uint8Array(t):this.array=new Uint8Array(t)}return i.prototype.writeUint32=function(t,e){e===void 0&&(e=!1),e&&(t=h(t)),this.array[this.offset++]=t>>24&255,this.array[this.offset++]=t>>16&255,this.array[this.offset++]=t>>8&255,this.array[this.offset++]=t&255},i.prototype.writeUint16=function(t,e){e===void 0&&(e=!1),e&&(t=a(t)),this.array[this.offset++]=t>>8&255,this.array[this.offset++]=t&255},i.prototype.writeUint8=function(t){this.array[this.offset++]=t&255},i.prototype.writeString=function(t){for(var e=0,s=t.length;e<s;e++)this.array[this.offset++]=t.charCodeAt(e)},i.prototype.readUint32=function(t){t===void 0&&(t=!1);var e=this.array[this.offset++]<<24;return e+=this.array[this.offset++]<<16,e+=this.array[this.offset++]<<8,e+=this.array[this.offset++]&255,t?h(e):e},i.prototype.readUint16=function(t){t===void 0&&(t=!1);var e=this.array[this.offset++]<<8;return e+=this.array[this.offset++]&255,t?a(e):e},i.prototype.readUint8=function(){return this.array[this.offset++]&255},i.prototype.readString=function(t){for(var e="",s=this.offset+t;this.offset<s;)e+=String.fromCharCode(this.array[this.offset++]);return e},i.prototype.skip=function(t){this.offset+=t},i.prototype.rewindUint32=function(){this.offset-=4},i.prototype.rewindString=function(t){this.offset-=t},i.prototype.startCRC=function(){if(this.crcStartOffset)throw new Error("CRC already started");this.crcStartOffset=this.offset},i.prototype.writeCRC=function(){if(this.crcStartOffset===void 0)throw new Error("CRC has not been started, cannot write");var t=n.crc32(this.array,this.crcStartOffset,this.offset-this.crcStartOffset);this.crcStartOffset=void 0,this.writeUint32(t)},i.prototype.startAdler=function(){if(this.adlerStartOffset)throw new Error("Adler already started");this.adlerStartOffset=this.offset},i.prototype.pauseAdler=function(){if(this.adlerStartOffset===void 0)throw new Error("Adler has not been started, cannot pause");this.savedAdlerValue=r.adler32_buf(this.array,this.adlerStartOffset,this.offset-this.adlerStartOffset,this.savedAdlerValue),this.adlerStartOffset=void 0},i.prototype.writeAdler=function(t){if(this.adlerStartOffset===void 0&&this.savedAdlerValue===void 0)throw new Error("CRC has not been started, cannot write");if(this.adlerStartOffset===void 0){t.writeUint32(this.savedAdlerValue),this.savedAdlerValue=void 0;return}var e=r.adler32_buf(this.array,this.adlerStartOffset,this.offset-this.adlerStartOffset,this.savedAdlerValue);this.adlerStartOffset=void 0,t.writeUint32(e)},i}();f.ArrayBufferWalker=x},function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0});var n=new Int32Array([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]);function r(a,h,x,i){for(var t=i===0?0:~~i^-1,e=h;e<h+x;e++){var s=a[e];t=n[(t^s)&255]^t>>>8}return t^-1}f.crc32=r},function(l,f,d){var n=this&&this.__extends||function(){var w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,o){c.__proto__=o}||function(c,o){for(var b in o)o.hasOwnProperty(b)&&(c[b]=o[b])};return function(c,o){w(c,o);function b(){this.constructor=c}c.prototype=o===null?Object.create(o):(b.prototype=o.prototype,new b)}}();Object.defineProperty(f,"__esModule",{value:!0});var r=d(1),a=d(8),h=d(6),x=d(5),i=d(4),t=d(9),e=Math.pow(2,31)-1,s=function(w){n(c,w);function c(o,b){var y=w.call(this,0)||this;return y.walker=o,y.bytesLeft=b,y.startChunk(),y}return c.prototype.startChunk=function(){var o=Math.min(e,this.bytesLeft);this.bytesLeftInChunk=o,this.bytesLeft-=o,this.walker.writeUint32(o),this.walker.startCRC(),this.walker.writeString("IDAT")},c.prototype.endChunk=function(){this.walker.writeCRC()},c.prototype.isFinished=function(){return this.bytesLeft===0&&this.bytesLeftInChunk===0},c.prototype.writeUint8=function(o){this.walker.writeUint8(o),--this.bytesLeftInChunk,this.bytesLeftInChunk===0&&(this.endChunk(),this.bytesLeft&&this.startChunk())},c.prototype.writeUint16=function(o,b){b===void 0&&(b=!1),b?(this.writeUint8(o&255),this.writeUint8(o>>8&255)):(this.writeUint8(o>>8&255),this.writeUint8(o&255))},c.prototype.writeUint32=function(o,b){b===void 0&&(b=!1),b?(this.writeUint8(o&255),this.writeUint8(o>>8&255),this.writeUint8(o>>16&255),this.writeUint8(o>>24&255)):(this.writeUint8(o>>24&255),this.writeUint8(o>>16&255),this.writeUint8(o>>8&255),this.writeUint8(o&255))},c.prototype.startAdler=function(){this.walker.startAdler()},c.prototype.pauseAdler=function(){this.walker.pauseAdler()},c.prototype.writeAdler=function(o){this.walker.writeAdler(this)},c}(r.ArrayBufferWalker),u=function(){function w(c,o){this.xOffset=0;var b=new a.BlobWriter;h.writePreheader(b),x.writeIHDR(b,{width:c,height:o,colorType:x.PNGColorType.RGBA,bitDepth:8,compressionMethod:0,filter:0,interface:0});var y=c*o*4+o,_=new s(b,t.calculateZlibbedLength(y)),U=new t.ZlibWriter(_,y);this.chunker=_,this.zlibWriter=U,this.walker=b,this.rowsLeft=o,this.width=c}return w.prototype.addPixels=function(c,o,b){if(!this.rowsLeft)throw new Error("too many rows");for(var y=0;y<b;++y){this.xOffset===0&&this.zlibWriter.writeUint8(0);var _=o+y*4;this.zlibWriter.writeUint8(c[_+0]),this.zlibWriter.writeUint8(c[_+1]),this.zlibWriter.writeUint8(c[_+2]),this.zlibWriter.writeUint8(c[_+3]),++this.xOffset,this.xOffset===this.width&&(this.xOffset=0,--this.rowsLeft)}},w.prototype.addRow=function(c){this.addPixels(c,0,c.length/4)},w.prototype.finishAndGetBlob=function(){if(this.rowsLeft)throw new Error(this.rowsLeft+" rows left");if(this.zlibWriter.end(),!this.chunker.isFinished())throw new Error("bug!");return i.writeIEND(this.walker),this.walker.getBlob("image/png")},w}();f.PNGRGBAWriter=u},function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0});var n="IEND";function r(a){a.writeUint32(0),a.startCRC(),a.writeString(n),a.writeCRC()}f.writeIEND=r,f.length=n.length+4+4},function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0}),function(r){r[r.Grayscale=0]="Grayscale",r[r.RGB=2]="RGB",r[r.Palette=3]="Palette",r[r.GrayscaleWithAlpha=4]="GrayscaleWithAlpha",r[r.RGBA=6]="RGBA"}(f.PNGColorType||(f.PNGColorType={}));function n(r,a){r.writeUint32(13),r.startCRC(),r.writeString("IHDR"),r.writeUint32(a.width),r.writeUint32(a.height),r.writeUint8(a.bitDepth),r.writeUint8(a.colorType),r.writeUint8(a.compressionMethod),r.writeUint8(a.filter),r.writeUint8(a.interface),r.writeCRC()}f.writeIHDR=n,f.IHDRLength=4+4+13+4},function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0});var n=`PNG\r

`;function r(a){a.writeString(n)}f.writePreheader=r,f.length=n.length},function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0});var n=d(3);f.PNGRGBAWriter=n.PNGRGBAWriter},function(l,f,d){var n=this&&this.__extends||function(){var i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(t,e){i(t,e);function s(){this.constructor=t}t.prototype=e===null?Object.create(e):(s.prototype=e.prototype,new s)}}();Object.defineProperty(f,"__esModule",{value:!0});var r=d(1),a=d(2),h=d(0),x=function(i){n(t,i);function t(e){e===void 0&&(e=1024*1024*16);var s=i.call(this,e)||this;return s.blobs=[],s}return t.prototype.writeUint32=function(e,s){s===void 0&&(s=!1),this.flushIfNoSpace(4),i.prototype.writeUint32.call(this,e,s)},t.prototype.writeUint16=function(e,s){s===void 0&&(s=!1),this.flushIfNoSpace(2),i.prototype.writeUint16.call(this,e,s)},t.prototype.writeUint8=function(e){this.flushIfNoSpace(1),i.prototype.writeUint8.call(this,e)},t.prototype.writeString=function(e){for(var s=0,u=e.length;s<u;s++)this.writeUint8(e.charCodeAt(s))},t.prototype.startCRC=function(){if(this.crcOffset!==void 0)throw new Error("CRC already started");this.crc=void 0,this.crcOffset=this.offset},t.prototype.writeCRC=function(){if(this.crcOffset===void 0)throw new Error("CRC has not been started, cannot write");var e=a.crc32(this.array,this.crcOffset,this.offset-this.crcOffset,this.crc);this.crcOffset=void 0,this.writeUint32(e)},t.prototype.startAdler=function(){if(this.adlerOffset!==void 0)throw new Error("Adler already started");this.adlerOffset=this.offset},t.prototype.pauseAdler=function(){if(this.adlerOffset===void 0)throw new Error("Adler has not been started, cannot pause");this.adler=h.adler32_buf(this.array,this.adlerOffset,this.offset-this.adlerOffset,this.adler),this.adlerOffset=void 0},t.prototype.writeAdler=function(e){if(this.adlerOffset===void 0&&this.adler===void 0)throw new Error("Adler has not been started, cannot pause");if(this.adlerOffset===void 0){e.writeUint32(this.adler),this.adler=void 0;return}var s=h.adler32_buf(this.array,this.adlerOffset,this.offset-this.adlerOffset,this.adler);this.adlerOffset=void 0,this.adler=void 0,e.writeUint32(s)},t.prototype.flushIfNoSpace=function(e){this.offset+e>this.array.length&&this.flush()},t.prototype.flush=function(){if(this.offset){this.crcOffset!==void 0&&(this.crc=a.crc32(this.array,this.crcOffset,this.offset-this.crcOffset,this.crc),this.crcOffset=0),this.adlerOffset!==void 0&&(this.adler=h.adler32_buf(this.array,this.adlerOffset,this.offset-this.adlerOffset,this.adler),this.adlerOffset=0);var e=new Uint8Array(this.array.buffer,0,this.offset),s=new Blob([e]);this.blobs.push(s),this.offset=0}},t.prototype.getBlob=function(e){return this.blob||(this.flush(),this.blob=new Blob(this.blobs,{type:e}),this.blobs=[],this.array=new Uint8Array(0)),this.blob},t}(r.ArrayBufferWalker);f.BlobWriter=x},function(l,f,d){Object.defineProperty(f,"__esModule",{value:!0}),f.ZLIB_WINDOW_SIZE=1024*32,f.BLOCK_SIZE=65535;function n(a){var h=Math.ceil(a/f.BLOCK_SIZE);return 1+1+5*h+4+a}f.calculateZlibbedLength=n;var r=function(){function a(h,x){this.walker=h,this.bytesLeftInWindow=0,this.bytesLeft=x,this.writeZlibHeader(),this.startBlock()}return a.prototype.writeZlibHeader=function(){var h=Math.LOG2E*Math.log(f.ZLIB_WINDOW_SIZE)-8,x=8,i=h<<4|x,t=0,e=0,s=e<<6|t<<5,u=31-(i*256+s)%31;s|=u,this.walker.writeUint8(i),this.walker.writeUint8(s)},a.prototype.startBlock=function(){var h=this.bytesLeft<f.BLOCK_SIZE?1:0,x=0,i=Math.min(this.bytesLeft,f.BLOCK_SIZE);this.walker.writeUint8(h|x<<1);var t=~i+65536&65535;this.walker.writeUint16(i,!0),this.walker.writeUint16(t,!0),this.bytesLeftInWindow=Math.min(this.bytesLeft,f.BLOCK_SIZE),this.walker.startAdler()},a.prototype.writeUint8=function(h){if(this.bytesLeft<=0)throw new Error("Ran out of space");this.bytesLeftInWindow===0&&this.bytesLeft>0&&(this.walker.pauseAdler(),this.startBlock()),this.walker.writeUint8(h),this.bytesLeftInWindow--,this.bytesLeft--},a.prototype.end=function(){this.walker.writeAdler(this.walker)},a}();f.ZlibWriter=r}])})})(v);var F=v.exports;function S(){return new Promise(O=>{setTimeout(O)})}const B=(O,p,l,f,d,n,r)=>{const{camera:a,composer:h}=O;h.renderer.setSize(n,r),h.renderer.setPixelRatio(1),h.setSize(n,r),h.setPixelRatio(1),a.aspect=n/r,a.setViewOffset(p,l,f,d,n,r),a.updateProjectionMatrix(),h.passes.forEach(u=>{var w,c;if((c=(w=u.material)==null?void 0:w.uniforms)!=null&&c.resolution){let o=n,b=r;u.material.uniforms.resolution.value.x<=1&&(o=1/o,b=1/b),u.material.uniforms.resolution.value.x=o,u.material.uniforms.resolution.value.y=b}u.resolution&&(u.resolution=new A(p,l))}),h.render();const x=new Uint8Array(n*r*4),i=h.renderer.getContext();i.readPixels(0,0,n,r,i.RGBA,i.UNSIGNED_BYTE,x);const t=n*4,e=new Uint8Array(t),s=r/2|0;for(let u=0;u<s;++u){const w=t*u,c=t*(r-u-1);e.set(x.slice(w,w+t),0),x.set(x.slice(c,c+t),w),x.set(e,c)}return{width:n,height:r,data:x}};async function R(O,p,l){const f=new F.PNGRGBAWriter(p,l),d=1e3,n=1e3;function r(a){console.log(`${a*100|0}%`)}r(0);for(let a=0;a<l;a+=n){const h=[],x=Math.min(n,l-a);for(let i=0;i<p;i+=d){const t=Math.min(d,p-i),e=B(O,p,l,i,a,t,x);if(!e)return;h.push(e)}for(let i=0;i<x;++i)h.forEach(t=>{const s=t.width*4*i;f.addPixels(t.data,s,t.width)});r(Math.min(1,(a+n)/l)),await S()}return f.finishAndGetBlob()}export{R as makeBigPng,B as renderChunk};