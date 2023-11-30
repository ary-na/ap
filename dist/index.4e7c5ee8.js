let t;function e(t,e){return Object.keys(e).forEach(function(i){"default"===i||"__esModule"===i||Object.prototype.hasOwnProperty.call(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[i]}})}),t}function i(t,e,i,o){Object.defineProperty(t,e,{get:i,set:o,enumerable:!0,configurable:!0})}var o,r="",s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(t,e)=>{if(e=Symbol[t])return e;throw Error("Symbol."+t+" is not defined")},p=(t,e,i)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,f=(t,e)=>{for(var i in e||(e={}))d.call(e,i)&&p(t,i,e[i]);if(c)for(var i of c(e))h.call(e,i)&&p(t,i,e[i]);return t},m=(t,e)=>a(t,l(e)),g=(t,e,i,o)=>{for(var r,a=o>1?void 0:o?n(e,i):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(o?r(e,i,a):r(a))||a);return o&&a&&s(e,i,a),a},b=function(t,e){this[0]=t,this[1]=e},v=t=>{var e,i=t[u("asyncIterator")],o=!1,r={};return null==i?(i=t[u("iterator")](),e=t=>r[t]=e=>i[t](e)):(i=i.call(t),e=t=>r[t]=e=>{if(o){if(o=!1,"throw"===t)throw e;return e}return o=!0,{done:!1,value:new b(new Promise(o=>{var r=i[t](e);if(!(r instanceof Object))throw TypeError("Object expected");o(r)}),1)}}),r[u("iterator")]=()=>r,e("next"),"throw"in i?e("throw"):r.throw=t=>{throw t},"return"in i&&e("return"),r},y=new WeakMap,_=new WeakMap,w=new WeakMap,x=new WeakSet,k=new WeakMap,C=class{constructor(t,e){this.handleFormData=t=>{let e=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();e||r||"string"!=typeof i||!(i.length>0)||void 0===o||(Array.isArray(o)?o.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,o.toString()))},this.handleFormSubmit=t=>{var e;let i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=y.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),k.set(this.host,[])},this.handleInteraction=t=>{let e=k.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let t of this.form.querySelectorAll("*"))if("function"==typeof t.checkValidity&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let t of this.form.querySelectorAll("*"))if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=f({form:t=>{let e=t.form;if(e){let i=t.getRootNode().getElementById(e);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),k.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),k.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,y.has(this.form)?y.get(this.form).add(this.host):y.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),_.has(this.form)||(_.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),w.has(this.form)||(w.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=y.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),_.has(this.form)&&(this.form.reportValidity=_.get(this.form),_.delete(this.form)),w.has(this.form)&&(this.form.checkValidity=w.get(this.form),w.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?x.add(t):x.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,i=!!x.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},$=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),A=Object.freeze(m(f({},$),{valid:!1,valueMissing:!0})),E=Object.freeze(m(f({},$),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,S=z.ShadowRoot&&(void 0===z.ShadyCSS||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),O=new WeakMap;class L{constructor(t,e,i){if(this._$cssResult$=!0,i!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(S&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=O.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&O.set(e,t))}return t}toString(){return this.cssText}}const D=t=>new L("string"==typeof t?t:t+"",void 0,T),I=(t,...e)=>new L(1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]),t,T),P=(t,e)=>{if(S)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),o=z.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}},M=S?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return D(e)})(t):t,{is:F,defineProperty:R,getOwnPropertyDescriptor:N,getOwnPropertyNames:V,getOwnPropertySymbols:B,getPrototypeOf:H}=Object,U=globalThis,j=U.trustedTypes,q=j?j.emptyScript:"",W=U.reactiveElementPolyfillSupport,K=(t,e)=>t,X={toAttribute(t,e){switch(e){case Boolean:t=t?q:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Y=(t,e)=>!F(t,e),G={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;class Q extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&R(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:r}=N(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){let s=o?.call(this);r.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;let t=H(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){let t=this.properties;for(let e of[...V(t),...B(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(M(i));else void 0!==t&&e.push(M(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return P(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:X).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){let t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:X;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,r){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??Y)(o?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}}Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[K("elementProperties")]=new Map,Q[K("finalized")]=new Map,W?.({ReactiveElement:Q}),(U.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,J=Z.trustedTypes,tt=J?J.createPolicy("lit-html",{createHTML:t=>t}):void 0,te="$lit$",ti=`lit$${(Math.random()+"").slice(9)}$`,to="?"+ti,tr=`<${to}>`,ts=document,ta=()=>ts.createComment(""),tn=t=>null===t||"object"!=typeof t&&"function"!=typeof t,tl=Array.isArray,tc=t=>tl(t)||"function"==typeof t?.[Symbol.iterator],td="[ 	\n\f\r]",th=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tu=/-->/g,tp=/>/g,tf=RegExp(`>|${td}(?:([^\\s"'>=/]+)(${td}*=${td}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tm=/'/g,tg=/"/g,tb=/^(?:script|style|textarea|title)$/i,tv=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),ty=tv(1),t_=tv(2),tw=Symbol.for("lit-noChange"),tx=Symbol.for("lit-nothing"),tk=new WeakMap,tC=ts.createTreeWalker(ts,129);function t$(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tt?tt.createHTML(e):e}const tA=(t,e)=>{let i=t.length-1,o=[],r,s=2===e?"<svg>":"",a=th;for(let e=0;e<i;e++){let i=t[e],n,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,null!==(l=a.exec(i)));)d=a.lastIndex,a===th?"!--"===l[1]?a=tu:void 0!==l[1]?a=tp:void 0!==l[2]?(tb.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=tf):void 0!==l[3]&&(a=tf):a===tf?">"===l[0]?(a=r??th,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?tf:'"'===l[3]?tg:tm):a===tg||a===tm?a=tf:a===tu||a===tp?a=th:(a=tf,r=void 0);let h=a===tf&&t[e+1].startsWith("/>")?" ":"";s+=a===th?i+tr:c>=0?(o.push(n),i.slice(0,c)+te+i.slice(c)+ti+h):i+ti+(-2===c?e:h)}return[t$(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class tE{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0,a=t.length-1,n=this.parts,[l,c]=tA(t,e);if(this.el=tE.createElement(l,i),tC.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=tC.nextNode())&&n.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let t of o.getAttributeNames())if(t.endsWith(te)){let e=c[s++],i=o.getAttribute(t).split(ti),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?tL:"?"===a[1]?tD:"@"===a[1]?tI:tO}),o.removeAttribute(t)}else t.startsWith(ti)&&(n.push({type:6,index:r}),o.removeAttribute(t));if(tb.test(o.tagName)){let t=o.textContent.split(ti),e=t.length-1;if(e>0){o.textContent=J?J.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],ta()),tC.nextNode(),n.push({type:2,index:++r});o.append(t[e],ta())}}}else if(8===o.nodeType){if(o.data===to)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(ti,t+1));)n.push({type:7,index:r}),t+=ti.length-1}}r++}}static createElement(t,e){let i=ts.createElement("template");return i.innerHTML=t,i}}function tz(t,e,i=t,o){if(e===tw)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl,s=tn(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t))._$AT(t,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=tz(t,r._$AS(t,e.values),r,o)),e}class tS{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??ts).importNode(e,!0);tC.currentNode=o;let r=tC.nextNode(),s=0,a=0,n=i[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new tT(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new tP(r,this,t)),this._$AV.push(e),n=i[++a]}s!==n?.index&&(r=tC.nextNode(),s++)}return tC.currentNode=ts,o}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tT{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=tx,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){tn(t=tz(this,t,e))?t===tx||null==t||""===t?(this._$AH!==tx&&this._$AR(),this._$AH=tx):t!==this._$AH&&t!==tw&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):tc(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tx&&tn(this._$AH)?this._$AA.nextSibling.data=t:this.$(ts.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tE.createElement(t$(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let t=new tS(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=tk.get(t.strings);return void 0===e&&tk.set(t.strings,e=new tE(t)),e}T(t){tl(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let r of t)o===e.length?e.push(i=new tT(this.k(ta()),this.k(ta()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tO{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=tx,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=tx}_$AI(t,e=this,i,o){let r=this.strings,s=!1;if(void 0===r)(s=!tn(t=tz(this,t,e,0))||t!==this._$AH&&t!==tw)&&(this._$AH=t);else{let o,a;let n=t;for(t=r[0],o=0;o<r.length-1;o++)(a=tz(this,n[i+o],e,o))===tw&&(a=this._$AH[o]),s||=!tn(a)||a!==this._$AH[o],a===tx?t=tx:t!==tx&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!o&&this.O(t)}O(t){t===tx?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tL extends tO{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===tx?void 0:t}}class tD extends tO{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==tx)}}class tI extends tO{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=tz(this,t,e,0)??tx)===tw)return;let i=this._$AH,o=t===tx&&i!==tx||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==tx&&(i===tx||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tP{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tz(this,t)}}const tM=Z.litHtmlPolyfillSupport;tM?.(tE,tT),(Z.litHtmlVersions??=[]).push("3.1.0");const tF=(t,e,i)=>{let o=i?.renderBefore??e,r=o._$litPart$;if(void 0===r){let t=i?.renderBefore??null;o._$litPart$=r=new tT(e.insertBefore(ta(),t),t,void 0,i??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tR extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tF(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tw}}tR._$litElement$=!0,tR.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:tR});const tN=globalThis.litElementPolyfillSupport;tN?.({LitElement:tR}),(globalThis.litElementVersions??=[]).push("4.0.2");var tV=I`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,tB=I`
  ${tV}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tH={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y},tU=(t=tH,e,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),"accessor"===o){let{name:o}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};function tj(t){return(e,i)=>"object"==typeof i?tU(t,e,i):((t,e,i)=>{let o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tq(t){return tj({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tW(t){return(e,i)=>{Object.assign("function"==typeof e?e:e[i],t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tK=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tX(t,e){return(i,o,r)=>{let s=e=>e.renderRoot?.querySelector(t)??null;if(e){let{get:t,set:e}="object"==typeof o?i:r??(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return tK(i,o,{get(){let i=t.call(this);return void 0===i&&(null!==(i=s(this))||this.hasUpdated)&&e.call(this,i),i}})}return tK(i,o,{get(){return s(this)}})}}var tY=class extends tR{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let i=new CustomEvent(t,f({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){let o=customElements.get(t);if(!o){customElements.define(t,class extends e{},i);return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),r&&s&&r===s||console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}};tY.version="2.12.0",tY.dependencies={},g([tj()],tY.prototype,"dir",2),g([tj()],tY.prototype,"lang",2);var tG=class extends tY{render(){return ty` <slot></slot> `}};tG.styles=tB,tG.define("sl-visually-hidden");var tQ=I`
  ${tV}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,tZ=I`
  ${tV}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const tJ=Math.min,t0=Math.max,t1=Math.round,t2=Math.floor,t5=t=>({x:t,y:t}),t3={left:"right",right:"left",bottom:"top",top:"bottom"},t6={start:"end",end:"start"};function t4(t,e){return"function"==typeof t?t(e):t}function t7(t){return t.split("-")[0]}function t8(t){return t.split("-")[1]}function t9(t){return"x"===t?"y":"x"}function et(t){return"y"===t?"height":"width"}function ee(t){return["top","bottom"].includes(t7(t))?"y":"x"}function ei(t){return t.replace(/start|end/g,t=>t6[t])}function eo(t){return t.replace(/left|right|bottom|top/g,t=>t3[t])}function er(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function es(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ea(t,e,i){let o,{reference:r,floating:s}=t,a=ee(e),n=t9(ee(e)),l=et(n),c=t7(e),d="y"===a,h=r.x+r.width/2-s.width/2,u=r.y+r.height/2-s.height/2,p=r[l]/2-s[l]/2;switch(c){case"top":o={x:h,y:r.y-s.height};break;case"bottom":o={x:h,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:u};break;case"left":o={x:r.x-s.width,y:u};break;default:o={x:r.x,y:r.y}}switch(t8(e)){case"start":o[n]-=p*(i&&d?-1:1);break;case"end":o[n]+=p*(i&&d?-1:1)}return o}const en=async(t,e,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,n=s.filter(Boolean),l=await (null==a.isRTL?void 0:a.isRTL(e)),c=await a.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=ea(c,o,l),u=o,p={},f=0;for(let i=0;i<n.length;i++){let{name:s,fn:m}=n[i],{x:g,y:b,data:v,reset:y}=await m({x:d,y:h,initialPlacement:o,placement:u,strategy:r,middlewareData:p,rects:c,platform:a,elements:{reference:t,floating:e}});if(d=null!=g?g:d,h=null!=b?b:h,p={...p,[s]:{...p[s],...v}},y&&f<=50){f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await a.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:d,y:h}=ea(c,u,l)),i=-1;continue}}return{x:d,y:h,placement:u,strategy:r,middlewareData:p}};async function el(t,e){var i;void 0===e&&(e={});let{x:o,y:r,platform:s,rects:a,elements:n,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=t4(e,t),f=er(p),m=n[u?"floating"===h?"reference":"floating":h],g=es(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(m)))||i?m:m.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(n.floating)),boundary:c,rootBoundary:d,strategy:l})),b="floating"===h?{...a.floating,x:o,y:r}:a.reference,v=await (null==s.getOffsetParent?void 0:s.getOffsetParent(n.floating)),y=await (null==s.isElement?void 0:s.isElement(v))&&await (null==s.getScale?void 0:s.getScale(v))||{x:1,y:1},_=es(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:v,strategy:l}):b);return{top:(g.top-_.top+f.top)/y.y,bottom:(_.bottom-g.bottom+f.bottom)/y.y,left:(g.left-_.left+f.left)/y.x,right:(_.right-g.right+f.right)/y.x}}const ec=t=>({name:"arrow",options:t,async fn(e){let{x:i,y:o,placement:r,rects:s,platform:a,elements:n,middlewareData:l}=e,{element:c,padding:d=0}=t4(t,e)||{};if(null==c)return{};let h=er(d),u={x:i,y:o},p=t9(ee(r)),f=et(p),m=await a.getDimensions(c),g="y"===p,b=g?"clientHeight":"clientWidth",v=s.reference[f]+s.reference[p]-u[p]-s.floating[f],y=u[p]-s.reference[p],_=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c)),w=_?_[b]:0;w&&await (null==a.isElement?void 0:a.isElement(_))||(w=n.floating[b]||s.floating[f]);let x=w/2-m[f]/2-1,k=tJ(h[g?"top":"left"],x),C=tJ(h[g?"bottom":"right"],x),$=w-m[f]-C,A=w/2-m[f]/2+(v/2-y/2),E=t0(k,tJ(A,$)),z=!l.arrow&&null!=t8(r)&&A!=E&&s.reference[f]/2-(A<k?k:C)-m[f]/2<0,S=z?A<k?A-k:A-$:0;return{[p]:u[p]+S,data:{[p]:E,centerOffset:A-E-S,...z&&{alignmentOffset:S}},reset:z}}});async function ed(t,e){let{placement:i,platform:o,elements:r}=t,s=await (null==o.isRTL?void 0:o.isRTL(r.floating)),a=t7(i),n=t8(i),l="y"===ee(i),c=["left","top"].includes(a)?-1:1,d=s&&l?-1:1,h=t4(e,t),{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return n&&"number"==typeof f&&(p="end"===n?-1*f:f),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}const eh=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){let i,o;let{placement:r,rects:s,platform:a,elements:n}=e,{apply:l=()=>{},...c}=t4(t,e),d=await el(e,c),h=t7(r),u=t8(r),p="y"===ee(r),{width:f,height:m}=s.floating;"top"===h||"bottom"===h?(i=h,o=u===(await (null==a.isRTL?void 0:a.isRTL(n.floating))?"start":"end")?"left":"right"):(o=h,i="end"===u?"top":"bottom");let g=m-d[i],b=f-d[o],v=!e.middlewareData.shift,y=g,_=b;if(p){let t=f-d.left-d.right;_=u||v?tJ(b,t):t}else{let t=m-d.top-d.bottom;y=u||v?tJ(g,t):t}if(v&&!u){let t=t0(d.left,0),e=t0(d.right,0),i=t0(d.top,0),o=t0(d.bottom,0);p?_=f-2*(0!==t||0!==e?t+e:t0(d.left,d.right)):y=m-2*(0!==i||0!==o?i+o:t0(d.top,d.bottom))}await l({...e,availableWidth:_,availableHeight:y});let w=await a.getDimensions(n.floating);return f!==w.width||m!==w.height?{reset:{rects:!0}}:{}}}};function eu(t){return em(t)?(t.nodeName||"").toLowerCase():"#document"}function ep(t){var e;return(null==t?void 0:null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function ef(t){var e;return null==(e=(em(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function em(t){return t instanceof Node||t instanceof ep(t).Node}function eg(t){return t instanceof Element||t instanceof ep(t).Element}function eb(t){return t instanceof HTMLElement||t instanceof ep(t).HTMLElement}function ev(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof ep(t).ShadowRoot)}function ey(t){let{overflow:e,overflowX:i,overflowY:o,display:r}=ek(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function e_(t){let e=ew(),i=ek(t);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some(t=>(i.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(i.contain||"").includes(t))}function ew(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function ex(t){return["html","body","#document"].includes(eu(t))}function ek(t){return ep(t).getComputedStyle(t)}function eC(t){return eg(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function e$(t){if("html"===eu(t))return t;let e=t.assignedSlot||t.parentNode||ev(t)&&t.host||ef(t);return ev(e)?e.host:e}function eA(t,e,i){var o;void 0===e&&(e=[]),void 0===i&&(i=!0);let r=function t(e){let i=e$(e);return ex(i)?e.ownerDocument?e.ownerDocument.body:e.body:eb(i)&&ey(i)?i:t(i)}(t),s=r===(null==(o=t.ownerDocument)?void 0:o.body),a=ep(r);return s?e.concat(a,a.visualViewport||[],ey(r)?r:[],a.frameElement&&i?eA(a.frameElement):[]):e.concat(r,eA(r,[],i))}function eE(t){let e=ek(t),i=parseFloat(e.width)||0,o=parseFloat(e.height)||0,r=eb(t),s=r?t.offsetWidth:i,a=r?t.offsetHeight:o,n=t1(i)!==s||t1(o)!==a;return n&&(i=s,o=a),{width:i,height:o,$:n}}function ez(t){return eg(t)?t:t.contextElement}function eS(t){let e=ez(t);if(!eb(e))return t5(1);let i=e.getBoundingClientRect(),{width:o,height:r,$:s}=eE(e),a=(s?t1(i.width):i.width)/o,n=(s?t1(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),n&&Number.isFinite(n)||(n=1),{x:a,y:n}}const eT=t5(0);function eO(t){let e=ep(t);return ew()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:eT}function eL(t,e,i,o){var r;void 0===e&&(e=!1),void 0===i&&(i=!1);let s=t.getBoundingClientRect(),a=ez(t),n=t5(1);e&&(o?eg(o)&&(n=eS(o)):n=eS(t));let l=(void 0===(r=i)&&(r=!1),o&&(!r||o===ep(a))&&r)?eO(a):t5(0),c=(s.left+l.x)/n.x,d=(s.top+l.y)/n.y,h=s.width/n.x,u=s.height/n.y;if(a){let t=ep(a),e=o&&eg(o)?ep(o):o,i=t.frameElement;for(;i&&o&&e!==t;){let t=eS(i),e=i.getBoundingClientRect(),o=ek(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,s=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,d*=t.y,h*=t.x,u*=t.y,c+=r,d+=s,i=ep(i).frameElement}}return es({width:h,height:u,x:c,y:d})}function eD(t){return eL(ef(t)).left+eC(t).scrollLeft}function eI(t,e,i){let o;if("viewport"===e)o=function(t,e){let i=ep(t),o=ef(t),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,n=0,l=0;if(r){s=r.width,a=r.height;let t=ew();(!t||t&&"fixed"===e)&&(n=r.offsetLeft,l=r.offsetTop)}return{width:s,height:a,x:n,y:l}}(t,i);else if("document"===e)o=function(t){let e=ef(t),i=eC(t),o=t.ownerDocument.body,r=t0(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=t0(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),a=-i.scrollLeft+eD(t),n=-i.scrollTop;return"rtl"===ek(o).direction&&(a+=t0(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:a,y:n}}(ef(t));else if(eg(e))o=function(t,e){let i=eL(t,!0,"fixed"===e),o=i.top+t.clientTop,r=i.left+t.clientLeft,s=eb(t)?eS(t):t5(1),a=t.clientWidth*s.x;return{width:a,height:t.clientHeight*s.y,x:r*s.x,y:o*s.y}}(e,i);else{let i=eO(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return es(o)}function eP(t,e){return eb(t)&&"fixed"!==ek(t).position?e?e(t):t.offsetParent:null}function eM(t,e){let i=ep(t);if(!eb(t))return i;let o=eP(t,e);for(;o&&["table","td","th"].includes(eu(o))&&"static"===ek(o).position;)o=eP(o,e);return o&&("html"===eu(o)||"body"===eu(o)&&"static"===ek(o).position&&!e_(o))?i:o||function(t){let e=e$(t);for(;eb(e)&&!ex(e);){if(e_(e))return e;e=e$(e)}return null}(t)||i}const eF=async function(t){let{reference:e,floating:i,strategy:o}=t,r=this.getOffsetParent||eM,s=this.getDimensions;return{reference:function(t,e,i){let o=eb(e),r=ef(e),s="fixed"===i,a=eL(t,!0,s,e),n={scrollLeft:0,scrollTop:0},l=t5(0);if(o||!o&&!s){if(("body"!==eu(e)||ey(r))&&(n=eC(e)),o){let t=eL(e,!0,s,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else r&&(l.x=eD(r))}return{x:a.left+n.scrollLeft-l.x,y:a.top+n.scrollTop-l.y,width:a.width,height:a.height}}(e,await r(i),o),floating:{x:0,y:0,...await s(i)}}},eR={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:o}=t,r=eb(i),s=ef(i);if(i===s)return e;let a={scrollLeft:0,scrollTop:0},n=t5(1),l=t5(0);if((r||!r&&"fixed"!==o)&&(("body"!==eu(i)||ey(s))&&(a=eC(i)),eb(i))){let t=eL(i);n=eS(i),l.x=t.x+i.clientLeft,l.y=t.y+i.clientTop}return{width:e.width*n.x,height:e.height*n.y,x:e.x*n.x-a.scrollLeft*n.x+l.x,y:e.y*n.y-a.scrollTop*n.y+l.y}},getDocumentElement:ef,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t,s=[..."clippingAncestors"===i?function(t,e){let i=e.get(t);if(i)return i;let o=eA(t,[],!1).filter(t=>eg(t)&&"body"!==eu(t)),r=null,s="fixed"===ek(t).position,a=s?e$(t):t;for(;eg(a)&&!ex(a);){let e=ek(a),i=e_(a);i||"fixed"!==e.position||(r=null),(s?!i&&!r:!i&&"static"===e.position&&!!r&&["absolute","fixed"].includes(r.position)||ey(a)&&!i&&function t(e,i){let o=e$(e);return!(o===i||!eg(o)||ex(o))&&("fixed"===ek(o).position||t(o,i))}(t,a))?o=o.filter(t=>t!==a):r=e,a=e$(a)}return e.set(t,o),o}(e,this._c):[].concat(i),o],a=s[0],n=s.reduce((t,i)=>{let o=eI(e,i,r);return t.top=t0(o.top,t.top),t.right=tJ(o.right,t.right),t.bottom=tJ(o.bottom,t.bottom),t.left=t0(o.left,t.left),t},eI(e,a,r));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},getOffsetParent:eM,getElementRects:eF,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return eE(t)},getScale:eS,isElement:eg,isRTL:function(t){return"rtl"===ek(t).direction}},eN=(t,e,i)=>{let o=new Map,r={platform:eR,...i},s={...r.platform,_c:o};return en(t,e,{...r,platform:s})},eV={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},eB=t=>(...e)=>({_$litDirective$:t,values:e});class eH{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eU=eB(class extends eH{constructor(t){if(super(t),t.type!==eV.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.it){for(let i in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.st?.has(i)&&this.it.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.it)t in e||(i.remove(t),this.it.delete(t));for(let t in e){let o=!!e[t];o===this.it.has(t)||this.st?.has(t)||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return tw}});function ej(t){return function(t){for(let e=t;e;e=eq(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=eq(t);e;e=eq(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||"none"!==t.filter||"BODY"===e.tagName))return e}return null}(t)}function eq(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var eW=class extends tY{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else{var t;this.anchor instanceof Element||null!==(t=this.anchor)&&"object"==typeof t&&"getBoundingClientRect"in t?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=function(t,e,i,o){let r;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:n="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,d=ez(t),h=s||a?[...d?eA(d):[],...eA(e)]:[];h.forEach(t=>{s&&t.addEventListener("scroll",i,{passive:!0}),a&&t.addEventListener("resize",i)});let u=d&&l?function(t,e){let i,o=null,r=ef(t);function s(){clearTimeout(i),o&&o.disconnect(),o=null}return!function a(n,l){void 0===n&&(n=!1),void 0===l&&(l=1),s();let{left:c,top:d,width:h,height:u}=t.getBoundingClientRect();if(n||e(),!h||!u)return;let p=t2(d),f=t2(r.clientWidth-(c+h)),m={rootMargin:-p+"px "+-f+"px "+-t2(r.clientHeight-(d+u))+"px "+-t2(c)+"px",threshold:t0(0,tJ(1,l))||1},g=!0;function b(t){let e=t[0].intersectionRatio;if(e!==l){if(!g)return a();e?a(!1,e):i=setTimeout(()=>{a(!1,1e-7)},100)}g=!1}try{o=new IntersectionObserver(b,{...m,root:r.ownerDocument})}catch(t){o=new IntersectionObserver(b,m)}o.observe(t)}(!0),s}(d,i):null,p=-1,f=null;n&&(f=new ResizeObserver(t=>{let[o]=t;o&&o.target===d&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{f&&f.observe(e)})),i()}),d&&!c&&f.observe(d),f.observe(e));let m=c?eL(t):null;return c&&function e(){let o=eL(t);m&&(o.x!==m.x||o.y!==m.y||o.width!==m.width||o.height!==m.height)&&i(),m=o,r=requestAnimationFrame(e)}(),i(),()=>{h.forEach(t=>{s&&t.removeEventListener("scroll",i),a&&t.removeEventListener("resize",i)}),u&&u(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){var t,e,i;if(!this.active||!this.anchorEl)return;let o=[{name:"offset",options:t={mainAxis:this.distance,crossAxis:this.skidding},async fn(e){let{x:i,y:o}=e,r=await ed(e,t);return{x:i+r.x,y:o+r.y,data:r}}}];this.sync?o.push(eh({apply:({rects:t})=>{let e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&o.push({name:"flip",options:e={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(t){var i,o,r,s,a;let{placement:n,middlewareData:l,rects:c,initialPlacement:d,platform:h,elements:u}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...y}=t4(e,t);if(null!=(i=l.arrow)&&i.alignmentOffset)return{};let _=t7(n),w=t7(d)===d,x=await (null==h.isRTL?void 0:h.isRTL(u.floating)),k=m||(w||!v?[eo(d)]:function(t){let e=eo(t);return[ei(t),e,ei(e)]}(d));m||"none"===b||k.push(...function(t,e,i,o){let r=t8(t),s=function(t,e,i){let o=["left","right"],r=["right","left"];switch(t){case"top":case"bottom":if(i)return e?r:o;return e?o:r;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(t7(t),"start"===i,o);return r&&(s=s.map(t=>t+"-"+r),e&&(s=s.concat(s.map(ei)))),s}(d,v,b,x));let C=[d,...k],$=await el(t,y),A=[],E=(null==(o=l.flip)?void 0:o.overflows)||[];if(p&&A.push($[_]),f){let t=function(t,e,i){void 0===i&&(i=!1);let o=t8(t),r=t9(ee(t)),s=et(r),a="x"===r?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=eo(a)),[a,eo(a)]}(n,c,x);A.push($[t[0]],$[t[1]])}if(E=[...E,{placement:n,overflows:A}],!A.every(t=>t<=0)){let t=((null==(r=l.flip)?void 0:r.index)||0)+1,e=C[t];if(e)return{data:{index:t,overflows:E},reset:{placement:e}};let i=null==(s=E.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:s.placement;if(!i)switch(g){case"bestFit":{let t=null==(a=E.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:a[0];t&&(i=t);break}case"initialPlacement":i=d}if(n!==i)return{reset:{placement:i}}}return{}}}),this.shift&&o.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(t){let{x:e,y:o,placement:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:n={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...l}=t4(i,t),c={x:e,y:o},d=await el(t,l),h=ee(t7(r)),u=t9(h),p=c[u],f=c[h];if(s){let t="y"===u?"top":"left",e="y"===u?"bottom":"right",i=p+d[t],o=p-d[e];p=t0(i,tJ(p,o))}if(a){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",i=f+d[t],o=f-d[e];f=t0(i,tJ(f,o))}let m=n.fn({...t,[u]:p,[h]:f});return{...m,data:{x:m.x-e,y:m.y-o}}}}),this.autoSize?o.push(eh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&o.push(ec({element:this.arrowEl,padding:this.arrowPadding}));let r="absolute"===this.strategy?t=>eR.getOffsetParent(t,ej):eR.getOffsetParent;eN(this.anchorEl,this.popup,{placement:this.placement,middleware:o,strategy:this.strategy,platform:m(f({},eR),{getOffsetParent:r})}).then(({x:t,y:e,middlewareData:i,placement:o})=>{let r="rtl"===getComputedStyle(this).direction,s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){let t=i.arrow.x,e=i.arrow.y,o="",a="",n="",l="";if("start"===this.arrowPlacement){let i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",l=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,l=r?i:"",n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",o="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:n,left:l,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return ty`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${eU({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ty`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};eW.styles=tZ,g([tX(".popup")],eW.prototype,"popup",2),g([tX(".popup__arrow")],eW.prototype,"arrowEl",2),g([tj()],eW.prototype,"anchor",2),g([tj({type:Boolean,reflect:!0})],eW.prototype,"active",2),g([tj({reflect:!0})],eW.prototype,"placement",2),g([tj({reflect:!0})],eW.prototype,"strategy",2),g([tj({type:Number})],eW.prototype,"distance",2),g([tj({type:Number})],eW.prototype,"skidding",2),g([tj({type:Boolean})],eW.prototype,"arrow",2),g([tj({attribute:"arrow-placement"})],eW.prototype,"arrowPlacement",2),g([tj({attribute:"arrow-padding",type:Number})],eW.prototype,"arrowPadding",2),g([tj({type:Boolean})],eW.prototype,"flip",2),g([tj({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],eW.prototype,"flipFallbackPlacements",2),g([tj({attribute:"flip-fallback-strategy"})],eW.prototype,"flipFallbackStrategy",2),g([tj({type:Object})],eW.prototype,"flipBoundary",2),g([tj({attribute:"flip-padding",type:Number})],eW.prototype,"flipPadding",2),g([tj({type:Boolean})],eW.prototype,"shift",2),g([tj({type:Object})],eW.prototype,"shiftBoundary",2),g([tj({attribute:"shift-padding",type:Number})],eW.prototype,"shiftPadding",2),g([tj({attribute:"auto-size"})],eW.prototype,"autoSize",2),g([tj()],eW.prototype,"sync",2),g([tj({type:Object})],eW.prototype,"autoSizeBoundary",2),g([tj({attribute:"auto-size-padding",type:Number})],eW.prototype,"autoSizePadding",2);var eK=new Map,eX=new WeakMap;function eY(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function eG(t,e){eK.set(t,null!=e?e:{keyframes:[],options:{duration:0}})}function eQ(t,e,i){let o=eX.get(t);if(null==o?void 0:o[e])return eY(o[e],i.dir);let r=eK.get(e);return r?eY(r,i.dir):{keyframes:[],options:{duration:0}}}function eZ(t,e){return new Promise(i=>{t.addEventListener(e,function o(r){r.target===t&&(t.removeEventListener(e,o),i())})})}function eJ(t,e,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=t.animate(e,m(f({},i),{duration:e1()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function e0(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function e1(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function e2(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{let i=requestAnimationFrame(e);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function e5(t,e){return t.map(t=>m(f({},t),{height:"auto"===t.height?`${e}px`:t.height}))}const e3=new Set,e6=new MutationObserver(it),e4=new Map;let e7=document.documentElement.dir||"ltr",e8=document.documentElement.lang||navigator.language;function e9(...e){e.map(e=>{let i=e.$code.toLowerCase();e4.has(i)?e4.set(i,Object.assign(Object.assign({},e4.get(i)),e)):e4.set(i,e),t||(t=e)}),it()}function it(){e7=document.documentElement.dir||"ltr",e8=document.documentElement.lang||navigator.language,[...e3.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}e6.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class ie{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){e3.add(this.host)}hostDisconnected(){e3.delete(this.host)}dir(){return`${this.host.dir||e7}`.toLowerCase()}lang(){return`${this.host.lang||e8}`.toLowerCase()}getTranslationData(t){var e,i;let o=new Intl.Locale(t.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),s=null!==(i=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"",a=e4.get(`${r}-${s}`),n=e4.get(r);return{locale:o,language:r,region:s,primary:a,secondary:n}}exists(e,i){var o;let{primary:r,secondary:s}=this.getTranslationData(null!==(o=i.lang)&&void 0!==o?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!r&&!!r[e]||!!s&&!!s[e]||!!i.includeFallback&&!!t&&!!t[e]}term(e,...i){let o;let{primary:r,secondary:s}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(s&&s[e])o=s[e];else{if(!t||!t[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=t[e]}return"function"==typeof o?o(...i):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}var ii={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};e9(ii);var io=class extends ie{};function ir(t,e){let i=f({waitUntilFirstUpdate:!1},e);return(e,o)=>{let{update:r}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach(e=>{if(t.has(e)){let r=t.get(e),s=this[e];r!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,s)}}),r.call(this,t)}}}e9(ii);var is=class extends tY{constructor(){super(),this.localize=new io(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&!this.disabled&&"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=e0(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=e0(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await e2(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=eQ(this,"tooltip.show",{dir:this.localize.dir()});await eJ(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await e2(this.body);let{keyframes:t,options:e}=eQ(this,"tooltip.hide",{dir:this.localize.dir()});await eJ(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,eZ(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,eZ(this,"sl-after-hide")}render(){return ty`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${eU({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};is.styles=tQ,is.dependencies={"sl-popup":eW},g([tX("slot:not([name])")],is.prototype,"defaultSlot",2),g([tX(".tooltip__body")],is.prototype,"body",2),g([tX("sl-popup")],is.prototype,"popup",2),g([tj()],is.prototype,"content",2),g([tj()],is.prototype,"placement",2),g([tj({type:Boolean,reflect:!0})],is.prototype,"disabled",2),g([tj({type:Number})],is.prototype,"distance",2),g([tj({type:Boolean,reflect:!0})],is.prototype,"open",2),g([tj({type:Number})],is.prototype,"skidding",2),g([tj()],is.prototype,"trigger",2),g([tj({type:Boolean})],is.prototype,"hoist",2),g([ir("open",{waitUntilFirstUpdate:!0})],is.prototype,"handleOpenChange",1),g([ir(["content","distance","hoist","placement","skidding"])],is.prototype,"handleOptionsChange",1),g([ir("disabled")],is.prototype,"handleDisabledChange",1),eG("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),eG("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),is.define("sl-tooltip");var ia=I`
  ${tV}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,il=I`
  ${tV}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,ic=I`
  ${tV}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,id=(t="value")=>(e,i)=>{let o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,s,a){var n;let l=o.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){let e=l.converter||X,o=("function"==typeof e?e:null!=(n=null==e?void 0:e.fromAttribute)?n:X.fromAttribute)(a,l.type);this[t]!==o&&(this[i]=o)}r.call(this,e,s,a)}},ih=I`
  ${tV}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,iu={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},ip=[{name:"default",resolver:t=>(function(t=""){if(!r){let t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)r=e.getAttribute("data-shoelace");else{let e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)),i="";e&&(i=e.getAttribute("src")),r=i.split("/").slice(0,-1).join("/")}}return r.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")})(`assets/icons/${t}.svg`)},{name:"system",resolver:t=>t in iu?`data:image/svg+xml,${encodeURIComponent(iu[t])}`:""}],im=[];function ig(t){return ip.find(e=>e.name===t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:ib}={j:te,P:ti,A:to,C:1,M:tA,L:tS,R:tc,V:tz,D:tT,I:tO,H:tD,N:tI,U:tL,B:tP},iv=(t,e)=>void 0===e?void 0!==t?._$litType$:t?._$litType$===e,iy=t=>void 0===t.strings,i_={},iw=(t,e=i_)=>t._$AH=e;var ix=Symbol(),ik=Symbol(),iC=new Map,i$=class extends tY{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let r;if(null==e?void 0:e.spriteSheet)return ty`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(!(r=await fetch(t,{mode:"cors"})).ok)return 410===r.status?ix:ik}catch(t){return ik}try{let t=document.createElement("div");t.innerHTML=await r.text();let e=t.firstElementChild;if((null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase())!=="svg")return ix;o||(o=new DOMParser);let s=o.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");if(!s)return ix;return s.part.add("svg"),document.adoptNode(s)}catch(t){return ix}}connectedCallback(){super.connectedCallback(),im.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,im=im.filter(e=>e!==t)}getIconSource(){let t=ig(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:i}=this.getIconSource(),o=i?ig(this.library):void 0;if(!e){this.svg=null;return}let r=iC.get(e);if(r||(r=this.resolveIcon(e,o),iC.set(e,r)),!this.initialRender)return;let s=await r;if(s===ik&&iC.delete(e),e===this.getIconSource().url){if(iv(s)){this.svg=s;return}switch(s){case ik:case ix:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(t=null==o?void 0:o.mutator)||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};i$.styles=ih,g([tq()],i$.prototype,"svg",2),g([tj({reflect:!0})],i$.prototype,"name",2),g([tj()],i$.prototype,"src",2),g([tj()],i$.prototype,"label",2),g([tj({reflect:!0})],i$.prototype,"library",2),g([ir("label")],i$.prototype,"handleLabelChange",1),g([ir(["name","src","library"])],i$.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iA=t=>t??tx,iE=eB(class extends eH{constructor(t){if(super(t),t.type!==eV.PROPERTY&&t.type!==eV.ATTRIBUTE&&t.type!==eV.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!iy(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===tw||e===tx)return e;let i=t.element,o=t.name;if(t.type===eV.PROPERTY){if(e===i[o])return tw}else if(t.type===eV.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return tw}else if(t.type===eV.ATTRIBUTE&&i.getAttribute(o)===e+"")return tw;return iw(t),e}});var iz=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return ty`
      <label
        part="base"
        class=${eU({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${iA(this.value)}
          .indeterminate=${iE(this.indeterminate)}
          .checked=${iE(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?ty`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?ty`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};iz.styles=ic,iz.dependencies={"sl-icon":i$},g([tX('input[type="checkbox"]')],iz.prototype,"input",2),g([tq()],iz.prototype,"hasFocus",2),g([tj()],iz.prototype,"title",2),g([tj()],iz.prototype,"name",2),g([tj()],iz.prototype,"value",2),g([tj({reflect:!0})],iz.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],iz.prototype,"disabled",2),g([tj({type:Boolean,reflect:!0})],iz.prototype,"checked",2),g([tj({type:Boolean,reflect:!0})],iz.prototype,"indeterminate",2),g([id("checked")],iz.prototype,"defaultChecked",2),g([tj({reflect:!0})],iz.prototype,"form",2),g([tj({type:Boolean,reflect:!0})],iz.prototype,"required",2),g([ir("disabled",{waitUntilFirstUpdate:!0})],iz.prototype,"handleDisabledChange",1),g([ir(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],iz.prototype,"handleStateChange",1);var iS=I`
  ${tV}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,iT=class extends tY{constructor(){super(...arguments),this.localize=new io(this)}render(){return ty`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};iT.styles=iS;var iO=class t extends tY{constructor(){super(...arguments),this.localize=new io(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await e2(this.childrenContainer);let{keyframes:t,options:e}=eQ(this,"tree-item.collapse",{dir:this.localize.dir()});await eJ(this.childrenContainer,e5(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await e2(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:t,options:e}=eQ(this,"tree-item.expand",{dir:this.localize.dir()});await eJ(this.childrenContainer,e5(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>t.isTreeItem(i)&&(e||!i.disabled)):[]}render(){var t,e;let i="rtl"===this.localize.dir(),o=!this.loading&&(!this.isLeaf||this.lazy);return ty`
      <div
        part="base"
        class="${eU({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":o,"tree-item--rtl":"rtl"===this.localize.dir()})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${eU({"tree-item__expand-button":!0,"tree-item__expand-button--visible":o})}
            aria-hidden="true"
          >
            ${this.loading?ty` <sl-spinner></sl-spinner> `:void 0}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${this.selectable?ty`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${iE(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `:void 0}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};function iL(t,e,i){var o;return Object.is(o=t<e?e:t>i?i:t,-0)?0:o}function iD(t,e=!1){function i(t){let e=t.getChildrenItems({includeDisabled:!1});if(e.length){let i=e.every(t=>t.selected),o=e.every(t=>!t.selected&&!t.indeterminate);t.selected=i,t.indeterminate=!i&&!o}}!function t(o){for(let i of o.getChildrenItems())i.selected=e?o.selected||i.selected:!i.disabled&&o.selected,t(i);e&&i(o)}(t),function t(e){let o=e.parentElement;iO.isTreeItem(o)&&(i(o),t(o))}(t)}iO.styles=il,iO.dependencies={"sl-checkbox":iz,"sl-icon":i$,"sl-spinner":iT},g([tq()],iO.prototype,"indeterminate",2),g([tq()],iO.prototype,"isLeaf",2),g([tq()],iO.prototype,"loading",2),g([tq()],iO.prototype,"selectable",2),g([tj({type:Boolean,reflect:!0})],iO.prototype,"expanded",2),g([tj({type:Boolean,reflect:!0})],iO.prototype,"selected",2),g([tj({type:Boolean,reflect:!0})],iO.prototype,"disabled",2),g([tj({type:Boolean,reflect:!0})],iO.prototype,"lazy",2),g([tX("slot:not([name])")],iO.prototype,"defaultSlot",2),g([tX("slot[name=children]")],iO.prototype,"childrenSlot",2),g([tX(".tree-item__item")],iO.prototype,"itemElement",2),g([tX(".tree-item__children")],iO.prototype,"childrenContainer",2),g([tX(".tree-item__expand-button slot")],iO.prototype,"expandButtonSlot",2),g([ir("loading",{waitUntilFirstUpdate:!0})],iO.prototype,"handleLoadingChange",1),g([ir("disabled")],iO.prototype,"handleDisabledChange",1),g([ir("selected")],iO.prototype,"handleSelectedChange",1),g([ir("expanded",{waitUntilFirstUpdate:!0})],iO.prototype,"handleExpandedChange",1),g([ir("expanded",{waitUntilFirstUpdate:!0})],iO.prototype,"handleExpandAnimation",1),g([ir("lazy",{waitUntilFirstUpdate:!0})],iO.prototype,"handleLazyChange",1),eG("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),eG("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var iI=class extends tY{constructor(){super(),this.selection="single",this.localize=new io(this),this.clickTarget=null,this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{let i=t.querySelector(`[slot="${e}-icon"]`);null===i?t.append(this.getExpandButtonIcon(e)):i.hasAttribute("data-default")&&i.replaceWith(this.getExpandButtonIcon(e))})},this.handleTreeChanged=t=>{for(let e of t){let t=[...e.addedNodes].filter(iO.isTreeItem),i=[...e.removedNodes].filter(iO.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),iO.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(t){let e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){let i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){let e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),iD(t);else if("single"===this.selection||t.isLeaf)for(let e of this.getAllTreeItems())e.selected=e===t;else"leaf"===this.selection&&(t.expanded=!t.expanded);let i=this.selectedItems;(e.length!==i.length||i.some(t=>!e.includes(t)))&&Promise.all(i.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;let e=this.getFocusableItems(),i="ltr"===this.localize.dir(),o="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();let r=e.findIndex(t=>t.matches(":focus")),s=e[r],a=t=>{let i=e[iL(t,0,e.length-1)];this.focusItem(i)},n=t=>{s.expanded=t};"ArrowDown"===t.key?a(r+1):"ArrowUp"===t.key?a(r-1):i&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?a(r+1):n(!0):i&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key?!s||s.disabled||s.isLeaf||!s.expanded?a(r-1):n(!1):"Home"===t.key?a(0):"End"===t.key?a(e.length-1):"Enter"!==t.key&&" "!==t.key||s.disabled||this.selectItem(s)}}handleClick(t){let e=t.target,i=e.closest("sl-tree-item"),o=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});i&&!i.disabled&&e===this.clickTarget&&(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t="multiple"===this.selection,e=this.getAllTreeItems();for(let i of(this.setAttribute("aria-multiselectable",t?"true":"false"),e))i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>iD(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var i;if(t.disabled)return!1;let o=null==(i=t.parentElement)?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(t),!e.has(t)})}render(){return ty`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};iI.styles=ia,g([tX("slot:not([name])")],iI.prototype,"defaultSlot",2),g([tX("slot[name=expand-icon]")],iI.prototype,"expandedIconSlot",2),g([tX("slot[name=collapse-icon]")],iI.prototype,"collapsedIconSlot",2),g([tj()],iI.prototype,"selection",2),g([ir("selection")],iI.prototype,"handleSelectionChange",1),iI.define("sl-tree"),iO.define("sl-tree-item");var iP=I`
  ${tV}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,iM=0,iF=class extends tY{constructor(){super(...arguments),this.attrId=++iM,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return ty`
      <slot
        part="base"
        class=${eU({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};iF.styles=iP,g([tj({reflect:!0})],iF.prototype,"name",2),g([tj({type:Boolean,reflect:!0})],iF.prototype,"active",2),g([ir("active")],iF.prototype,"handleActiveChange",1),iF.define("sl-tab-panel");var iR=I`
  ${tV}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,iN=I`
  ${tV}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iV=Symbol.for(""),iB=t=>{if(t?.r===iV)return t?._$litStatic$},iH=(t,...e)=>({_$litStatic$:e.reduce((e,i,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:iV}),iU=new Map,ij=t=>(e,...i)=>{let o,r;let s=i.length,a=[],n=[],l,c=0,d=!1;for(;c<s;){for(l=e[c];c<s&&void 0!==(o=iB(r=i[c]));)l+=o+e[++c],d=!0;c!==s&&n.push(r),a.push(l),c++}if(c===s&&a.push(e[s]),d){let t=a.join("$$lit$$");void 0===(e=iU.get(t))&&(a.raw=a,iU.set(t,e=a)),i=n}return t(e,...i)},iq=ij(ty);ij(t_);var iW=class extends tY{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?iH`a`:iH`button`;return iq`
      <${e}
        part="base"
        class=${eU({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${iA(t?void 0:this.disabled)}
        type=${iA(t?void 0:"button")}
        href=${iA(t?this.href:void 0)}
        target=${iA(t?this.target:void 0)}
        download=${iA(t?this.download:void 0)}
        rel=${iA(t&&this.target?"noreferrer noopener":void 0)}
        role=${iA(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${iA(this.name)}
          library=${iA(this.library)}
          src=${iA(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};iW.styles=iN,iW.dependencies={"sl-icon":i$},g([tX(".icon-button")],iW.prototype,"button",2),g([tq()],iW.prototype,"hasFocus",2),g([tj()],iW.prototype,"name",2),g([tj()],iW.prototype,"library",2),g([tj()],iW.prototype,"src",2),g([tj()],iW.prototype,"href",2),g([tj()],iW.prototype,"target",2),g([tj()],iW.prototype,"download",2),g([tj()],iW.prototype,"label",2),g([tj({type:Boolean,reflect:!0})],iW.prototype,"disabled",2);var iK=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return ty`
      <span
        part="base"
        class=${eU({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?ty`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};iK.styles=iR,iK.dependencies={"sl-icon-button":iW},g([tj({reflect:!0})],iK.prototype,"variant",2),g([tj({reflect:!0})],iK.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],iK.prototype,"pill",2),g([tj({type:Boolean})],iK.prototype,"removable",2),iK.define("sl-tag");var iX=I`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,iY=I`
  ${tV}
  ${iX}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,iG=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{let e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},iQ=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new iG(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){"number"==typeof t.top&&(this.input.scrollTop=t.top),"number"==typeof t.left&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o){this.input.setRangeText(t,e,i,o),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return ty`
      <div
        part="form-control"
        class=${eU({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${eU({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${iA(this.name)}
              .value=${iE(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${iA(this.placeholder)}
              rows=${iA(this.rows)}
              minlength=${iA(this.minlength)}
              maxlength=${iA(this.maxlength)}
              autocapitalize=${iA(this.autocapitalize)}
              autocorrect=${iA(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${iA(this.spellcheck)}
              enterkeyhint=${iA(this.enterkeyhint)}
              inputmode=${iA(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};iQ.styles=iY,g([tX(".textarea__control")],iQ.prototype,"input",2),g([tq()],iQ.prototype,"hasFocus",2),g([tj()],iQ.prototype,"title",2),g([tj()],iQ.prototype,"name",2),g([tj()],iQ.prototype,"value",2),g([tj({reflect:!0})],iQ.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],iQ.prototype,"filled",2),g([tj()],iQ.prototype,"label",2),g([tj({attribute:"help-text"})],iQ.prototype,"helpText",2),g([tj()],iQ.prototype,"placeholder",2),g([tj({type:Number})],iQ.prototype,"rows",2),g([tj()],iQ.prototype,"resize",2),g([tj({type:Boolean,reflect:!0})],iQ.prototype,"disabled",2),g([tj({type:Boolean,reflect:!0})],iQ.prototype,"readonly",2),g([tj({reflect:!0})],iQ.prototype,"form",2),g([tj({type:Boolean,reflect:!0})],iQ.prototype,"required",2),g([tj({type:Number})],iQ.prototype,"minlength",2),g([tj({type:Number})],iQ.prototype,"maxlength",2),g([tj()],iQ.prototype,"autocapitalize",2),g([tj()],iQ.prototype,"autocorrect",2),g([tj()],iQ.prototype,"autocomplete",2),g([tj({type:Boolean})],iQ.prototype,"autofocus",2),g([tj()],iQ.prototype,"enterkeyhint",2),g([tj({type:Boolean,converter:{fromAttribute:t=>!!t&&"false"!==t,toAttribute:t=>t?"true":"false"}})],iQ.prototype,"spellcheck",2),g([tj()],iQ.prototype,"inputmode",2),g([id()],iQ.prototype,"defaultValue",2),g([ir("disabled",{waitUntilFirstUpdate:!0})],iQ.prototype,"handleDisabledChange",1),g([ir("rows",{waitUntilFirstUpdate:!0})],iQ.prototype,"handleRowsChange",1),g([ir("value",{waitUntilFirstUpdate:!0})],iQ.prototype,"handleValueChange",1),iQ.define("sl-textarea");var iZ=I`
  ${tV}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,iJ=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return ty`
      <label
        part="base"
        class=${eU({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${iA(this.value)}
          .checked=${iE(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};iJ.styles=iZ,g([tX('input[type="checkbox"]')],iJ.prototype,"input",2),g([tq()],iJ.prototype,"hasFocus",2),g([tj()],iJ.prototype,"title",2),g([tj()],iJ.prototype,"name",2),g([tj()],iJ.prototype,"value",2),g([tj({reflect:!0})],iJ.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],iJ.prototype,"disabled",2),g([tj({type:Boolean,reflect:!0})],iJ.prototype,"checked",2),g([id("checked")],iJ.prototype,"defaultChecked",2),g([tj({reflect:!0})],iJ.prototype,"form",2),g([tj({type:Boolean,reflect:!0})],iJ.prototype,"required",2),g([ir("checked",{waitUntilFirstUpdate:!0})],iJ.prototype,"handleCheckedChange",1),g([ir("disabled",{waitUntilFirstUpdate:!0})],iJ.prototype,"handleDisabledChange",1),iJ.define("sl-switch");var i0=I`
  ${tV}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,i1=0,i2=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.attrId=++i1,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,ty`
      <div
        part="base"
        class=${eU({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?ty`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};i2.styles=i0,i2.dependencies={"sl-icon-button":iW},g([tX(".tab")],i2.prototype,"tab",2),g([tj({reflect:!0})],i2.prototype,"panel",2),g([tj({type:Boolean,reflect:!0})],i2.prototype,"active",2),g([tj({type:Boolean})],i2.prototype,"closable",2),g([tj({type:Boolean,reflect:!0})],i2.prototype,"disabled",2),g([ir("active")],i2.prototype,"handleActiveChange",1),g([ir("disabled")],i2.prototype,"handleDisabledChange",1),i2.define("sl-tab");var i5=I`
  ${tV}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,i3=new Set;function i6(t){if(i3.add(t),!document.body.classList.contains("sl-scroll-lock")){let t=function(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function i4(t){i3.delete(t),0===i3.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function i7(t,e,i="vertical",o="smooth"){let r={top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)},s=r.top+e.scrollTop,a=r.left+e.scrollLeft,n=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;("horizontal"===i||"both"===i)&&(a<n?e.scrollTo({left:a,behavior:o}):a+t.clientWidth>l&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:o})),("vertical"===i||"both"===i)&&(s<c?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>d&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}var i8=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(t=>"disabled"===t.attributeName)&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((t,e)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(i=this.getActiveTab())?i:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>t.includeDisabled?"sl-tab"===e.tagName.toLowerCase():"sl-tab"===e.tagName.toLowerCase()&&!e.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>"sl-tab-panel"===t.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let e=this.tabs.find(t=>t.matches(":focus")),i="rtl"===this.localize.dir();if((null==e?void 0:e.tagName.toLowerCase())==="sl-tab"){let o=this.tabs.indexOf(e);"Home"===t.key?o=0:"End"===t.key?o=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key?o--:(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key)&&o++,o<0&&(o=this.tabs.length-1),o>this.tabs.length-1&&(o=0),this.tabs[o].focus({preventScroll:!0}),"auto"===this.activation&&this.setActiveTab(this.tabs[o],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&i7(this.tabs[o],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=f({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let i=this.activeTab;this.activeTab=t,this.tabs.forEach(t=>t.active=t===this.activeTab),this.panels.forEach(t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&i7(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(e=>e.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,i=t.clientHeight,o="rtl"===this.localize.dir(),r=this.getAllTabs(),s=r.slice(0,r.indexOf(t)).reduce((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${s.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(e=>e.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t="rtl"===this.localize.dir();return ty`
      <div
        part="base"
        class=${eU({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?ty`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?ty`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};i8.styles=i5,i8.dependencies={"sl-icon-button":iW},g([tX(".tab-group")],i8.prototype,"tabGroup",2),g([tX(".tab-group__body")],i8.prototype,"body",2),g([tX(".tab-group__nav")],i8.prototype,"nav",2),g([tX(".tab-group__indicator")],i8.prototype,"indicator",2),g([tq()],i8.prototype,"hasScrollControls",2),g([tj()],i8.prototype,"placement",2),g([tj()],i8.prototype,"activation",2),g([tj({attribute:"no-scroll-controls",type:Boolean})],i8.prototype,"noScrollControls",2),g([ir("noScrollControls",{waitUntilFirstUpdate:!0})],i8.prototype,"updateScrollControls",1),g([ir("placement",{waitUntilFirstUpdate:!0})],i8.prototype,"syncIndicator",1),i8.define("sl-tab-group");var i9=I`
  ${tV}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ot=class extends tY{constructor(){super(...arguments),this.effect="none"}render(){return ty`
      <div
        part="base"
        class=${eU({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ot.styles=i9,g([tj()],ot.prototype,"effect",2),ot.define("sl-skeleton");var oe=I`
  ${tV}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function oi(t,e){function i(i){let o=t.getBoundingClientRect(),r=t.ownerDocument.defaultView,s=o.left+r.scrollX,a=o.top+r.scrollY,n=i.pageX-s,l=i.pageY-a;(null==e?void 0:e.onMove)&&e.onMove(n,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var oo=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),oi(this,{onMove:(t,i)=>{let o=this.vertical?i:t;"end"===this.primary&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(t=>{let i;i=t.endsWith("%")?this.size*(parseFloat(t)/100):parseFloat(t),e&&!this.vertical&&(i=this.size-i),o>=i-this.snapThreshold&&o<=i+this.snapThreshold&&(o=i)}),this.position=iL(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position,i=(t.shiftKey?10:1)*("end"===this.primary?-1:1);t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=i),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=i),"Home"===t.key&&(e="end"===this.primary?100:0),"End"===t.key&&(e="end"===this.primary?0:100),this.position=iL(e,0,100)}}handleResize(t){let{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return"end"===this.primary?i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${o}`:i&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${r}`,this.style[e]="",ty`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${iA(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};oo.styles=oe,g([tX(".divider")],oo.prototype,"divider",2),g([tj({type:Number,reflect:!0})],oo.prototype,"position",2),g([tj({attribute:"position-in-pixels",type:Number})],oo.prototype,"positionInPixels",2),g([tj({type:Boolean,reflect:!0})],oo.prototype,"vertical",2),g([tj({type:Boolean,reflect:!0})],oo.prototype,"disabled",2),g([tj()],oo.prototype,"primary",2),g([tj()],oo.prototype,"snap",2),g([tj({type:Number,attribute:"snap-threshold"})],oo.prototype,"snapThreshold",2),g([ir("position")],oo.prototype,"handlePositionChange",1),g([ir("positionInPixels")],oo.prototype,"handlePositionInPixelsChange",1),g([ir("vertical")],oo.prototype,"handleVerticalChange",1),oo.define("sl-split-panel");var or=I`
  ${tV}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os="important",oa=" !"+os,on=eB(class extends eH{constructor(t){if(super(t),t.type!==eV.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(let t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(let t in e){let o=e[t];if(null!=o){this.ut.add(t);let e="string"==typeof o&&o.endsWith(oa);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?os:""):i[t]=o}}return tw}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ol extends eH{constructor(t){if(super(t),this.et=tx,t.type!==eV.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===tx||null==t)return this.vt=void 0,this.et=t;if(t===tw)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;let e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ol.directiveName="unsafeHTML",ol.resultType=1;const oc=eB(ol);var od=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let e="rtl"===this.localize.dir(),{left:i,right:o,width:r}=this.rating.getBoundingClientRect();return iL(e?this.roundToPrecision((o-t)/r*this.max,this.precision):this.roundToPrecision((t-i)/r*this.max,this.precision),0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),o=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key){let e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key){let e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){let i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys()),i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,ty`
      <div
        part="base"
        class=${eU({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(e=>i>e&&i<e+1?ty`
                <span
                  class=${eU({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${on({clipPath:t?`inset(0 ${(i-e)*100}% 0 0)`:`inset(0 0 0 ${(i-e)*100}%)`})}
                  >
                    ${oc(this.getSymbol(e+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${on({clipPath:t?`inset(0 0 0 ${100-(i-e)*100}%)`:`inset(0 ${100-(i-e)*100}% 0 0)`})}
                  >
                    ${oc(this.getSymbol(e+1))}
                  </div>
                </span>
              `:ty`
              <span
                class=${eU({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1,"rating__symbol--active":i>=e+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${oc(this.getSymbol(e+1))}
              </span>
            `)}
        </span>
      </div>
    `}};od.styles=or,od.dependencies={"sl-icon":i$},g([tX(".rating")],od.prototype,"rating",2),g([tq()],od.prototype,"hoverValue",2),g([tq()],od.prototype,"isHovering",2),g([tj()],od.prototype,"label",2),g([tj({type:Number})],od.prototype,"value",2),g([tj({type:Number})],od.prototype,"max",2),g([tj({type:Number})],od.prototype,"precision",2),g([tj({type:Boolean,reflect:!0})],od.prototype,"readonly",2),g([tj({type:Boolean,reflect:!0})],od.prototype,"disabled",2),g([tj()],od.prototype,"getSymbol",2),g([tW({passive:!0})],od.prototype,"handleTouchMove",1),g([ir("hoverValue")],od.prototype,"handleHoverValueChange",1),g([ir("isHovering")],od.prototype,"handleIsHoveringChange",1),od.define("sl-rating");var oh=I`
  ${tV}
  ${iX}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,ou=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new iG(this,"help-text","label"),this.localize=new io(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>ty`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,i=null!==e.closest(".select__clear"),o=null!==e.closest("sl-icon-button");if(!i&&!o){if("Escape"===t.key&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}!this.currentOption||this.currentOption.disabled||(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.getAllOptions(),i=e.indexOf(this.currentOption),o=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(o=i+1)>e.length-1&&(o=0):"ArrowUp"===t.key?(o=i-1)<0&&(o=e.length-1):"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),this.setCurrentOption(e[o])}if(1===t.key.length||"Backspace"===t.key){let e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}for(let i of(t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase(),e))if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){let e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let e=t.target.closest("sl-option"),i=this.value;!e||e.disabled||(this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("sl-option")?(t.forEach(t=>i.push(t.value)),this.setSelectedOptions(t.filter(t=>e.includes(t.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){!0===e||!1===e?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i,o;this.selectedOptions=this.getAllOptions().filter(t=>t.selected),this.multiple?(this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=null!=(e=null==(t=this.selectedOptions[0])?void 0:t.value)?e:"",this.displayLabel=null!=(o=null==(i=this.selectedOptions[0])?void 0:i.getTextLabel())?o:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(t,e);return ty`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof i?oc(i):i}
        </div>`}return e===this.maxOptionsVisible?ty`<sl-tag>+${this.selectedOptions.length-e}</sl-tag>`:ty``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await e2(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=eQ(this,"select.show",{dir:this.localize.dir()});await eJ(this.popup.popup,t,e),this.currentOption&&i7(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await e2(this);let{keyframes:t,options:e}=eQ(this,"select.hide",{dir:this.localize.dir()});await eJ(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,eZ(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,eZ(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&0===this.value.length;return ty`
      <div
        part="form-control"
        class=${eU({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${eU({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?ty`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?ty`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ou.styles=oh,ou.dependencies={"sl-icon":i$,"sl-popup":eW,"sl-tag":iK},g([tX(".select")],ou.prototype,"popup",2),g([tX(".select__combobox")],ou.prototype,"combobox",2),g([tX(".select__display-input")],ou.prototype,"displayInput",2),g([tX(".select__value-input")],ou.prototype,"valueInput",2),g([tX(".select__listbox")],ou.prototype,"listbox",2),g([tq()],ou.prototype,"hasFocus",2),g([tq()],ou.prototype,"displayLabel",2),g([tq()],ou.prototype,"currentOption",2),g([tq()],ou.prototype,"selectedOptions",2),g([tj()],ou.prototype,"name",2),g([tj({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],ou.prototype,"value",2),g([id()],ou.prototype,"defaultValue",2),g([tj({reflect:!0})],ou.prototype,"size",2),g([tj()],ou.prototype,"placeholder",2),g([tj({type:Boolean,reflect:!0})],ou.prototype,"multiple",2),g([tj({attribute:"max-options-visible",type:Number})],ou.prototype,"maxOptionsVisible",2),g([tj({type:Boolean,reflect:!0})],ou.prototype,"disabled",2),g([tj({type:Boolean})],ou.prototype,"clearable",2),g([tj({type:Boolean,reflect:!0})],ou.prototype,"open",2),g([tj({type:Boolean})],ou.prototype,"hoist",2),g([tj({type:Boolean,reflect:!0})],ou.prototype,"filled",2),g([tj({type:Boolean,reflect:!0})],ou.prototype,"pill",2),g([tj()],ou.prototype,"label",2),g([tj({reflect:!0})],ou.prototype,"placement",2),g([tj({attribute:"help-text"})],ou.prototype,"helpText",2),g([tj({reflect:!0})],ou.prototype,"form",2),g([tj({type:Boolean,reflect:!0})],ou.prototype,"required",2),g([tj()],ou.prototype,"getTag",2),g([ir("disabled",{waitUntilFirstUpdate:!0})],ou.prototype,"handleDisabledChange",1),g([ir("value",{waitUntilFirstUpdate:!0})],ou.prototype,"handleValueChange",1),g([ir("open",{waitUntilFirstUpdate:!0})],ou.prototype,"handleOpenChange",1),eG("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),eG("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),ou.define("sl-select"),iT.define("sl-spinner");var op=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],of=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let i=e.getTime()-t.getTime(),{unit:o,value:r}=op.find(t=>Math.abs(i)<t.max);if(this.isoTime=e.toISOString(),this.titleTime=this.localize.date(e,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(i/r),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let t;t="minute"===o?om("second"):"hour"===o?om("minute"):"day"===o?om("hour"):om("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),t)}return ty` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};function om(t){let e={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return e-Date.now()%e}g([tq()],of.prototype,"isoTime",2),g([tq()],of.prototype,"relativeTime",2),g([tq()],of.prototype,"titleTime",2),g([tj()],of.prototype,"date",2),g([tj()],of.prototype,"format",2),g([tj()],of.prototype,"numeric",2),g([tj({type:Boolean})],of.prototype,"sync",2),of.define("sl-relative-time");var og=I`
  ${tV}
  ${iX}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,ob=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this),this.hasSlotController=new iG(this,"help-text","label"),this.localize=new io(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${100*t}%`)}syncTooltip(t){if(null!==this.output){let e=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r="rtl"===this.localize.dir(),s=e*t;if(r){let r=`${e-s}px + ${t} * ${o}`;this.output.style.translate=`calc((${r} - ${i/2}px - ${o} / 2))`}else{let e=`${s}px - ${t} * ${o}`;this.output.style.translate=`calc(${e} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return ty`
      <div
        part="form-control"
        class=${eU({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${eU({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${iA(this.name)}
              ?disabled=${this.disabled}
              min=${iA(this.min)}
              max=${iA(this.max)}
              step=${iA(this.step)}
              .value=${iE(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":ty`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ob.styles=og,g([tX(".range__control")],ob.prototype,"input",2),g([tX(".range__tooltip")],ob.prototype,"output",2),g([tq()],ob.prototype,"hasFocus",2),g([tq()],ob.prototype,"hasTooltip",2),g([tj()],ob.prototype,"title",2),g([tj()],ob.prototype,"name",2),g([tj({type:Number})],ob.prototype,"value",2),g([tj()],ob.prototype,"label",2),g([tj({attribute:"help-text"})],ob.prototype,"helpText",2),g([tj({type:Boolean,reflect:!0})],ob.prototype,"disabled",2),g([tj({type:Number})],ob.prototype,"min",2),g([tj({type:Number})],ob.prototype,"max",2),g([tj({type:Number})],ob.prototype,"step",2),g([tj()],ob.prototype,"tooltip",2),g([tj({attribute:!1})],ob.prototype,"tooltipFormatter",2),g([tj({reflect:!0})],ob.prototype,"form",2),g([id()],ob.prototype,"defaultValue",2),g([tW({passive:!0})],ob.prototype,"handleThumbDragStart",1),g([ir("value",{waitUntilFirstUpdate:!0})],ob.prototype,"handleValueChange",1),g([ir("disabled",{waitUntilFirstUpdate:!0})],ob.prototype,"handleDisabledChange",1),g([ir("hasTooltip",{waitUntilFirstUpdate:!0})],ob.prototype,"syncRange",1),ob.define("sl-range");var ov=I`
  ${tV}

  :host {
    display: contents;
  }
`,oy=class extends tY{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(null!==t){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(t=>this.resizeObserver.unobserve(t)),this.observedElements=[],e.forEach(t=>{this.resizeObserver.observe(t),this.observedElements.push(t)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return ty` <slot @slotchange=${this.handleSlotChange}></slot> `}};oy.styles=ov,g([tj({type:Boolean,reflect:!0})],oy.prototype,"disabled",2),g([ir("disabled",{waitUntilFirstUpdate:!0})],oy.prototype,"handleDisabledChange",1),oy.define("sl-resize-observer");var o_=I`
  ${tV}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,ow=class extends tY{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return ty`
      <span
        part="base"
        class=${eU({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?ty` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};ow.styles=o_,ow.dependencies={"sl-icon":i$},g([tq()],ow.prototype,"checked",2),g([tq()],ow.prototype,"hasFocus",2),g([tj()],ow.prototype,"value",2),g([tj({reflect:!0})],ow.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],ow.prototype,"disabled",2),g([ir("checked")],ow.prototype,"handleCheckedChange",1),g([ir("disabled",{waitUntilFirstUpdate:!0})],ow.prototype,"handleDisabledChange",1),ow.define("sl-radio");var ox=I`
  ${tV}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,ok=I`
  ${ox}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,oC=class extends tY{constructor(){super(...arguments),this.hasSlotController=new iG(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return iq`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${eU({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${iA(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};oC.styles=ok,g([tX(".button")],oC.prototype,"input",2),g([tX(".hidden-input")],oC.prototype,"hiddenInput",2),g([tq()],oC.prototype,"hasFocus",2),g([tj({type:Boolean,reflect:!0})],oC.prototype,"checked",2),g([tj()],oC.prototype,"value",2),g([tj({type:Boolean,reflect:!0})],oC.prototype,"disabled",2),g([tj({reflect:!0})],oC.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],oC.prototype,"pill",2),g([ir("disabled",{waitUntilFirstUpdate:!0})],oC.prototype,"handleDisabledChange",1),oC.define("sl-radio-button");var o$=I`
  ${tV}
  ${iX}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,oA=I`
  ${tV}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,oE=class extends tY{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=oz(t.target);null==e||e.classList.add("sl-button-group__button--focus")}handleBlur(t){let e=oz(t.target);null==e||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){let e=oz(t.target);null==e||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){let e=oz(t.target);null==e||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let i=t.indexOf(e),o=oz(e);o&&(o.classList.add("sl-button-group__button"),o.classList.toggle("sl-button-group__button--first",0===i),o.classList.toggle("sl-button-group__button--inner",i>0&&i<t.length-1),o.classList.toggle("sl-button-group__button--last",i===t.length-1),o.classList.toggle("sl-button-group__button--radio","sl-radio-button"===o.tagName.toLowerCase()))})}render(){return ty`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function oz(t){var e;let i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}oE.styles=oA,g([tX("slot")],oE.prototype,"defaultSlot",2),g([tq()],oE.prototype,"disableRole",2),g([tj()],oE.prototype,"label",2);var oS=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this),this.hasSlotController=new iG(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return""!==this.customValidityMessage?E:t?A:$}get validationMessage(){let t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),o=this.value;e.disabled||(this.value=e.value,i.forEach(t=>t.checked=t===e),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let i=this.getAllRadios().filter(t=>!t.disabled),o=null!=(e=i.find(t=>t.checked))?e:i[0],r=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value,a=i.indexOf(o)+r;a<0&&(a=i.length-1),a>i.length-1&&(a=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||(t.tabIndex=-1)}),this.value=i[a].value,i[a].checked=!0,this.hasButtonGroup?i[a].shadowRoot.querySelector("button").focus():(i[a].tabIndex=0,i[a].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){let t=this.getAllRadios(),e=t.find(t=>t.checked)||t[0];e&&e.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let i=this.getAllRadios();if(await Promise.all(i.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=i.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),!i.some(t=>t.checked)){if(this.hasButtonGroup){let e=null==(t=i[0].shadowRoot)?void 0:t.querySelector("button");e&&(e.tabIndex=0)}else i[0].tabIndex=0}if(this.hasButtonGroup){let t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=ty`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return ty`
      <fieldset
        part="form-control"
        class=${eU({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?ty`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};oS.styles=o$,oS.dependencies={"sl-button-group":oE},g([tX("slot:not([name])")],oS.prototype,"defaultSlot",2),g([tX(".radio-group__validation-input")],oS.prototype,"validationInput",2),g([tq()],oS.prototype,"hasButtonGroup",2),g([tq()],oS.prototype,"errorMessage",2),g([tq()],oS.prototype,"defaultValue",2),g([tj()],oS.prototype,"label",2),g([tj({attribute:"help-text"})],oS.prototype,"helpText",2),g([tj()],oS.prototype,"name",2),g([tj({reflect:!0})],oS.prototype,"value",2),g([tj({reflect:!0})],oS.prototype,"size",2),g([tj({reflect:!0})],oS.prototype,"form",2),g([tj({type:Boolean,reflect:!0})],oS.prototype,"required",2),g([ir("size",{waitUntilFirstUpdate:!0})],oS.prototype,"handleSizeChange",1),g([ir("value")],oS.prototype,"handleValueChange",1),oS.define("sl-radio-group");var oT=I`
  ${tV}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,oO=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return ty`
      <div
        part="base"
        class=${eU({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${iA(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${on({width:`${this.value}%`})}>
          ${this.indeterminate?"":ty` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};oO.styles=oT,g([tj({type:Number,reflect:!0})],oO.prototype,"value",2),g([tj({type:Boolean,reflect:!0})],oO.prototype,"indeterminate",2),g([tj()],oO.prototype,"label",2),oO.define("sl-progress-bar");var oL=I`
  ${tV}

  :host {
    display: inline-block;
  }
`;let oD=null;class oI{}oI.render=function(t,e){oD(t,e)},self.QrCreator=oI,function(t){function e(e,i){t:{var o=i.text,r=i.v,s=i.N,a=i.K,n=i.P;for(s=Math.max(1,s||1),a=Math.min(40,a||40);s<=a;s+=1)try{var l=function(e,i,o,r){var s={},a=t(o,i);a.u(e),a.J(),r=r||0;var n=a.h(),l=a.h()+2*r;return s.text=e,s.level=i,s.version=o,s.O=l,s.a=function(t,e){return t-=r,e-=r,!(0>t)&&!(t>=n)&&!(0>e)&&!(e>=n)&&a.a(t,e)},s}(o,r,s,n);break t}catch(t){}l=void 0}if(!l)return null;for(o=e.getContext("2d"),i.background&&(o.fillStyle=i.background,o.fillRect(i.left,i.top,i.size,i.size)),r=l.O,a=i.size/r,o.beginPath(),n=0;n<r;n+=1)for(s=0;s<r;s+=1){var c=o,d=i.left+s*a,h=i.top+n*a,u=n,p=s,f=l.a,m=d+a,g=h+a,b=u-1,v=u+1,y=p-1,_=p+1,w=Math.floor(Math.min(.5,Math.max(0,i.R))*a),x=f(u,p),k=f(b,y),C=f(b,p);b=f(b,_);var $=f(u,_);_=f(v,_),p=f(v,p),v=f(v,y),u=f(u,y),d=Math.round(d),h=Math.round(h),m=Math.round(m),g=Math.round(g),x?function(t,e,i,o,r,s,a,n,l,c){function d(e,i,o,r,a,n,l){e?(t.lineTo(i+n,o+l),t.arcTo(i,o,r,a,s)):t.lineTo(i,o)}a?t.moveTo(e+s,i):t.moveTo(e,i),d(n,o,i,o,r,-s,0),d(l,o,r,e,r,0,-s),d(c,e,r,e,i,s,0),d(a,e,i,o,i,0,s)}(c,d,h,m,g,w,!C&&!u,!C&&!$,!p&&!$,!p&&!u):function(t,e,i,o,r,s,a,n,l,c){function d(e,i,o,r){t.moveTo(e+o,i),t.lineTo(e,i),t.lineTo(e,i+r),t.arcTo(e,i,e+o,i,s)}a&&d(e,i,s,s),n&&d(o,i,-s,s),l&&d(o,r,-s,-s),c&&d(e,r,s,-s)}(c,d,h,m,g,w,C&&u&&k,C&&$&&b,p&&$&&_,p&&u&&v)}return function(t,e){var i=e.fill;if("string"==typeof i)t.fillStyle=i;else{var o=i.type,r=i.colorStops;if(i=i.position.map(t=>Math.round(t*e.size)),"linear-gradient"===o)var s=t.createLinearGradient.apply(t,i);else if("radial-gradient"===o)s=t.createRadialGradient.apply(t,i);else throw Error("Unsupported fill");r.forEach(([t,e])=>{s.addColorStop(t,e)}),t.fillStyle=s}}(o,i),o.fill(),e}var i={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};oD=function(t,o){var r={};Object.assign(r,i,t),r.N=r.minVersion,r.K=r.maxVersion,r.v=r.ecLevel,r.left=r.left,r.top=r.top,r.size=r.size,r.fill=r.fill,r.background=r.background,r.text=r.text,r.R=r.radius,r.P=r.quiet,o instanceof HTMLCanvasElement?((o.width!==r.size||o.height!==r.size)&&(o.width=r.size,o.height=r.size),o.getContext("2d").clearRect(0,0,o.width,o.height),e(o,r)):((t=document.createElement("canvas")).width=r.size,t.height=r.size,r=e(t,r),o.appendChild(r))}}(function(){function t(i,s){function n(t,e){for(var i=-1;7>=i;i+=1)if(!(-1>=t+i||h<=t+i))for(var o=-1;7>=o;o+=1)-1>=e+o||h<=e+o||(d[t+i][e+o]=0<=i&&6>=i&&(0==o||6==o)||0<=o&&6>=o&&(0==i||6==i)||2<=i&&4>=i&&2<=o&&4>=o)}function l(t,o){for(var s=h=4*i+17,l=Array(s),f=0;f<s;f+=1){l[f]=Array(s);for(var m=0;m<s;m+=1)l[f][m]=null}for(d=l,n(0,0),n(h-7,0),n(0,h-7),s=r.G(i),l=0;l<s.length;l+=1)for(f=0;f<s.length;f+=1){m=s[l];var g=s[f];if(null==d[m][g])for(var b=-2;2>=b;b+=1)for(var v=-2;2>=v;v+=1)d[m+b][g+v]=-2==b||2==b||-2==v||2==v||0==b&&0==v}for(s=8;s<h-8;s+=1)null==d[s][6]&&(d[s][6]=0==s%2);for(s=8;s<h-8;s+=1)null==d[6][s]&&(d[6][s]=0==s%2);for(l=0,s=r.w(c<<3|o);15>l;l+=1)f=!t&&1==(s>>l&1),d[6>l?l:8>l?l+1:h-15+l][8]=f,d[8][8>l?h-l-1:9>l?15-l:14-l]=f;if(d[h-8][8]=!t,7<=i){for(l=0,s=r.A(i);18>l;l+=1)f=!t&&1==(s>>l&1),d[Math.floor(l/3)][l%3+h-8-3]=f;for(l=0;18>l;l+=1)f=!t&&1==(s>>l&1),d[l%3+h-8-3][Math.floor(l/3)]=f}if(null==u){for(t=a.I(i,c),y=[],_=0,s=w={B:function(){return y},c:function(t){return 1==(y[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i+=1)w.m(1==(t>>>e-i-1&1))},f:function(){return _},m:function(t){var e=Math.floor(_/8);y.length<=e&&y.push(0),t&&(y[e]|=128>>>_%8),_+=1}},l=0;l<p.length;l+=1)f=p[l],s.put(4,4),s.put(f.b(),r.f(4,i)),f.write(s);for(l=f=0;l<t.length;l+=1)f+=t[l].j;if(s.f()>8*f)throw Error("code length overflow. ("+s.f()+">"+8*f+")");for(s.f()+4<=8*f&&s.put(0,4);0!=s.f()%8;)s.m(!1);for(;!(s.f()>=8*f)&&(s.put(236,8),!(s.f()>=8*f));)s.put(17,8);var y,_,w,x=0;for(b=0,f=l=0,m=Array(t.length),g=Array(t.length);b<t.length;b+=1){var k=t[b].j,C=t[b].o-k;for(v=0,l=Math.max(l,k),f=Math.max(f,C),m[b]=Array(k);v<m[b].length;v+=1)m[b][v]=255&s.B()[v+x];for(x+=k,v=r.C(C),k=e(m[b],v.b()-1).l(v),g[b]=Array(v.b()-1),v=0;v<g[b].length;v+=1)C=v+k.b()-g[b].length,g[b][v]=0<=C?k.c(C):0}for(v=s=0;v<t.length;v+=1)s+=t[v].o;for(s=Array(s),v=x=0;v<l;v+=1)for(b=0;b<t.length;b+=1)v<m[b].length&&(s[x]=m[b][v],x+=1);for(v=0;v<f;v+=1)for(b=0;b<t.length;b+=1)v<g[b].length&&(s[x]=g[b][v],x+=1);u=s}for(t=u,s=-1,l=h-1,f=7,m=0,o=r.F(o),g=h-1;0<g;g-=2)for(6==g&&--g;;){for(b=0;2>b;b+=1)null==d[l][g-b]&&(v=!1,m<t.length&&(v=1==(t[m]>>>f&1)),o(l,g-b)&&(v=!v),d[l][g-b]=v,-1==--f&&(m+=1,f=7));if(0>(l+=s)||h<=l){l-=s,s=-s;break}}}var c=o[s],d=null,h=0,u=null,p=[],f={u:function(e){var i,o;i=e,o=t.s(i),e={S:function(){return 4},b:function(){return o.length},write:function(t){for(var e=0;e<o.length;e+=1)t.put(o[e],8)}},p.push(e),u=null},a:function(t,e){if(0>t||h<=t||0>e||h<=e)throw Error(t+","+e);return d[t][e]},h:function(){return h},J:function(){for(var t=0,e=0,i=0;8>i;i+=1){l(!0,i);var o=r.D(f);(0==i||t>o)&&(t=o,e=i)}l(!1,e)}};return f}function e(t,i){if(void 0===t.length)throw Error(t.length+"/"+i);var o=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var o=Array(t.length-e+i),r=0;r<t.length-e;r+=1)o[r]=t[r+e];return o}(),r={c:function(t){return o[t]},b:function(){return o.length},multiply:function(t){for(var i=Array(r.b()+t.b()-1),o=0;o<r.b();o+=1)for(var a=0;a<t.b();a+=1)i[o+a]^=s.i(s.g(r.c(o))+s.g(t.c(a)));return e(i,0)},l:function(t){if(0>r.b()-t.b())return r;for(var i=s.g(r.c(0))-s.g(t.c(0)),o=Array(r.b()),a=0;a<r.b();a+=1)o[a]=r.c(a);for(a=0;a<t.b();a+=1)o[a]^=s.i(s.g(t.c(a))+i);return e(o,0).l(t)}};return r}t.s=function(t){for(var e=[],i=0;i<t.length;i++){var o=t.charCodeAt(i);128>o?e.push(o):2048>o?e.push(192|o>>6,128|63&o):55296>o||57344<=o?e.push(224|o>>12,128|o>>6&63,128|63&o):(i++,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return e};var i,o={L:1,M:0,Q:3,H:2},r=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];return{w:function(e){for(var i=e<<10;0<=t(i)-t(1335);)i^=1335<<t(i)-t(1335);return(e<<10|i)^21522},A:function(e){for(var i=e<<12;0<=t(i)-t(7973);)i^=7973<<t(i)-t(7973);return e<<12|i},G:function(t){return i[t-1]},F:function(t){switch(t){case 0:return function(t,e){return 0==(t+e)%2};case 1:return function(t){return 0==t%2};case 2:return function(t,e){return 0==e%3};case 3:return function(t,e){return 0==(t+e)%3};case 4:return function(t,e){return 0==(Math.floor(t/2)+Math.floor(e/3))%2};case 5:return function(t,e){return 0==t*e%2+t*e%3};case 6:return function(t,e){return 0==(t*e%2+t*e%3)%2};case 7:return function(t,e){return 0==(t*e%3+(t+e)%2)%2};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var i=e([1],0),o=0;o<t;o+=1)i=i.multiply(e([1,s.i(o)],0));return i},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),i=0,o=0;o<e;o+=1)for(var r=0;r<e;r+=1){for(var s=0,a=t.a(o,r),n=-1;1>=n;n+=1)if(!(0>o+n||e<=o+n))for(var l=-1;1>=l;l+=1)0>r+l||e<=r+l||(0!=n||0!=l)&&a==t.a(o+n,r+l)&&(s+=1);5<s&&(i+=3+s-5)}for(o=0;o<e-1;o+=1)for(r=0;r<e-1;r+=1)s=0,t.a(o,r)&&(s+=1),t.a(o+1,r)&&(s+=1),t.a(o,r+1)&&(s+=1),t.a(o+1,r+1)&&(s+=1),(0==s||4==s)&&(i+=3);for(o=0;o<e;o+=1)for(r=0;r<e-6;r+=1)t.a(o,r)&&!t.a(o,r+1)&&t.a(o,r+2)&&t.a(o,r+3)&&t.a(o,r+4)&&!t.a(o,r+5)&&t.a(o,r+6)&&(i+=40);for(r=0;r<e;r+=1)for(o=0;o<e-6;o+=1)t.a(o,r)&&!t.a(o+1,r)&&t.a(o+2,r)&&t.a(o+3,r)&&t.a(o+4,r)&&!t.a(o+5,r)&&t.a(o+6,r)&&(i+=40);for(r=s=0;r<e;r+=1)for(o=0;o<e;o+=1)t.a(o,r)&&(s+=1);return i+Math.abs(100*s/e/e-50)/5*10}}}(),s=function(){for(var t=Array(256),e=Array(256),i=0;8>i;i+=1)t[i]=1<<i;for(i=8;256>i;i+=1)t[i]=t[i-4]^t[i-5]^t[i-6]^t[i-8];for(i=0;255>i;i+=1)e[t[i]]=i;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),a=(i=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],{I:function(t,e){var r=function(t,e){switch(e){case o.L:return i[4*(t-1)];case o.M:return i[4*(t-1)+1];case o.Q:return i[4*(t-1)+2];case o.H:return i[4*(t-1)+3]}}(t,e);if(void 0===r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);t=r.length/3,e=[];for(var s=0;s<t;s+=1)for(var a=r[3*s],n=r[3*s+1],l=r[3*s+2],c=0;c<a;c+=1){var d={};d.o=n,d.j=l,e.push(d)}return e}});return t}());var oP=QrCreator,oM=class extends tY{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&oP.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var t;return ty`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(t=this.label)?void 0:t.length)>0?this.label:this.value}
        style=${on({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};oM.styles=oL,g([tX("canvas")],oM.prototype,"canvas",2),g([tj()],oM.prototype,"value",2),g([tj()],oM.prototype,"label",2),g([tj({type:Number})],oM.prototype,"size",2),g([tj()],oM.prototype,"fill",2),g([tj()],oM.prototype,"background",2),g([tj({type:Number})],oM.prototype,"radius",2),g([tj({attribute:"error-correction"})],oM.prototype,"errorCorrection",2),g([ir(["background","errorCorrection","fill","radius","size","value"])],oM.prototype,"generate",1),oM.define("sl-qr-code");var oF=I`
  ${tV}

  :host {
    display: contents;
  }
`,oR=class extends tY{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return ty` <slot></slot> `}};oR.styles=oF,g([tj({reflect:!0})],oR.prototype,"attr",2),g([tj({attribute:"attr-old-value",type:Boolean,reflect:!0})],oR.prototype,"attrOldValue",2),g([tj({attribute:"char-data",type:Boolean,reflect:!0})],oR.prototype,"charData",2),g([tj({attribute:"char-data-old-value",type:Boolean,reflect:!0})],oR.prototype,"charDataOldValue",2),g([tj({attribute:"child-list",type:Boolean,reflect:!0})],oR.prototype,"childList",2),g([tj({type:Boolean,reflect:!0})],oR.prototype,"disabled",2),g([ir("disabled")],oR.prototype,"handleDisabledChange",1),g([ir("attr",{waitUntilFirstUpdate:!0}),ir("attr-old-value",{waitUntilFirstUpdate:!0}),ir("char-data",{waitUntilFirstUpdate:!0}),ir("char-data-old-value",{waitUntilFirstUpdate:!0}),ir("childList",{waitUntilFirstUpdate:!0})],oR.prototype,"handleChange",1),oR.define("sl-mutation-observer"),eW.define("sl-popup");var oN=I`
  ${tV}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,oV=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){let t=2*Math.PI*parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=t-this.value/100*t;this.indicatorOffset=`${e}px`}}render(){return ty`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};oV.styles=oN,g([tX(".progress-ring__indicator")],oV.prototype,"indicator",2),g([tq()],oV.prototype,"indicatorOffset",2),g([tj({type:Number,reflect:!0})],oV.prototype,"value",2),g([tj()],oV.prototype,"label",2),oV.define("sl-progress-ring");var oB=I`
  ${tV}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,oH=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){let t=this.getTextLabel();if(void 0===this.cachedTextLabel){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var t;return(null!=(t=this.textContent)?t:"").trim()}render(){return ty`
      <div
        part="base"
        class=${eU({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};oH.styles=oB,oH.dependencies={"sl-icon":i$},g([tX(".option__label")],oH.prototype,"defaultSlot",2),g([tq()],oH.prototype,"current",2),g([tq()],oH.prototype,"selected",2),g([tq()],oH.prototype,"hasHover",2),g([tj({reflect:!0})],oH.prototype,"value",2),g([tj({type:Boolean,reflect:!0})],oH.prototype,"disabled",2),g([ir("disabled")],oH.prototype,"handleDisabledChange",1),g([ir("selected")],oH.prototype,"handleSelectedChange",1),g([ir("value")],oH.prototype,"handleValueChange",1),oH.define("sl-option");var oU=I`
  ${tV}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oj=(t,e)=>{let i=t._$AN;if(void 0===i)return!1;for(let t of i)t._$AO?.(e,!1),oj(t,e);return!0},oq=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===i?.size)},oW=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),oY(e)}};function oK(t){void 0!==this._$AN?(oq(this),this._$AM=t,oW(this)):this._$AM=t}function oX(t,e=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(o))for(let t=i;t<o.length;t++)oj(o[t],!1),oq(o[t]);else null!=o&&(oj(o,!1),oq(o))}else oj(this,t)}}const oY=t=>{t.type==eV.CHILD&&(t._$AP??=oX,t._$AQ??=oK)};class oG extends eH{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),oW(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(oj(this,t),oq(this))}setValue(t){if(iy(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oQ=()=>new oZ;class oZ{}const oJ=new WeakMap,o0=eB(class extends oG{render(t){return tx}update(t,[e]){let i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),tx}ot(t){if("function"==typeof this.G){let e=this.ct??globalThis,i=oJ.get(e);void 0===i&&(i=new WeakMap,oJ.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?oJ.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var o1=class{constructor(t,e,i){this.popupRef=oQ(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{let t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===this.localize.dir();if(!e)return;let{left:o,top:r,width:s,height:a}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+s:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+s:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+a}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),!this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(let t of e.assignedElements())if(0!==(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']")).length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var o;let r=null!=(o=e.get(i))?o:new CSSUnitValue(0,"px");return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){let t="ltr"===this.localize.dir();return this.isConnected?ty`
      <sl-popup
        ${o0(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:ty` <slot name="submenu" hidden></slot> `}},o2=class extends tY{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new io(this),this.hasSlotController=new iG(this,"submenu"),this.submenuController=new o1(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(void 0===this.cachedTextLabel){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return ty`
      <div
        id="anchor"
        part="base"
        class=${eU({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};o2.styles=oU,o2.dependencies={"sl-icon":i$,"sl-popup":eW},g([tX("slot:not([name])")],o2.prototype,"defaultSlot",2),g([tX(".menu-item")],o2.prototype,"menuItem",2),g([tj()],o2.prototype,"type",2),g([tj({type:Boolean,reflect:!0})],o2.prototype,"checked",2),g([tj()],o2.prototype,"value",2),g([tj({type:Boolean,reflect:!0})],o2.prototype,"disabled",2),g([ir("checked")],o2.prototype,"handleCheckedChange",1),g([ir("disabled")],o2.prototype,"handleDisabledChange",1),g([ir("type")],o2.prototype,"handleTypeChange",1),o2.define("sl-menu-item");var o5=I`
  ${tV}
  ${iX}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,o3=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new iG(this,"help-text","label"),this.localize=new io(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o){this.input.setRangeText(t,e,i,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&!this.readonly,s=r&&("number"==typeof this.value||this.value.length>0);return ty`
      <div
        part="form-control"
        class=${eU({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${eU({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${iA(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${iA(this.placeholder)}
              minlength=${iA(this.minlength)}
              maxlength=${iA(this.maxlength)}
              min=${iA(this.min)}
              max=${iA(this.max)}
              step=${iA(this.step)}
              .value=${iE(this.value)}
              autocapitalize=${iA(this.autocapitalize)}
              autocomplete=${iA(this.autocomplete)}
              autocorrect=${iA(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${iA(this.pattern)}
              enterkeyhint=${iA(this.enterkeyhint)}
              inputmode=${iA(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?ty`
                  <button
                    part="clear-button"
                    class=${eU({input__clear:!0,"input__clear--visible":s})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?ty`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?ty`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:ty`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};o3.styles=o5,o3.dependencies={"sl-icon":i$},g([tX(".input__control")],o3.prototype,"input",2),g([tq()],o3.prototype,"hasFocus",2),g([tj()],o3.prototype,"title",2),g([tj({reflect:!0})],o3.prototype,"type",2),g([tj()],o3.prototype,"name",2),g([tj()],o3.prototype,"value",2),g([id()],o3.prototype,"defaultValue",2),g([tj({reflect:!0})],o3.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],o3.prototype,"filled",2),g([tj({type:Boolean,reflect:!0})],o3.prototype,"pill",2),g([tj()],o3.prototype,"label",2),g([tj({attribute:"help-text"})],o3.prototype,"helpText",2),g([tj({type:Boolean})],o3.prototype,"clearable",2),g([tj({type:Boolean,reflect:!0})],o3.prototype,"disabled",2),g([tj()],o3.prototype,"placeholder",2),g([tj({type:Boolean,reflect:!0})],o3.prototype,"readonly",2),g([tj({attribute:"password-toggle",type:Boolean})],o3.prototype,"passwordToggle",2),g([tj({attribute:"password-visible",type:Boolean})],o3.prototype,"passwordVisible",2),g([tj({attribute:"no-spin-buttons",type:Boolean})],o3.prototype,"noSpinButtons",2),g([tj({reflect:!0})],o3.prototype,"form",2),g([tj({type:Boolean,reflect:!0})],o3.prototype,"required",2),g([tj()],o3.prototype,"pattern",2),g([tj({type:Number})],o3.prototype,"minlength",2),g([tj({type:Number})],o3.prototype,"maxlength",2),g([tj()],o3.prototype,"min",2),g([tj()],o3.prototype,"max",2),g([tj()],o3.prototype,"step",2),g([tj()],o3.prototype,"autocapitalize",2),g([tj()],o3.prototype,"autocorrect",2),g([tj()],o3.prototype,"autocomplete",2),g([tj({type:Boolean})],o3.prototype,"autofocus",2),g([tj()],o3.prototype,"enterkeyhint",2),g([tj({type:Boolean,converter:{fromAttribute:t=>!!t&&"false"!==t,toAttribute:t=>t?"true":"false"}})],o3.prototype,"spellcheck",2),g([tj()],o3.prototype,"inputmode",2),g([ir("disabled",{waitUntilFirstUpdate:!0})],o3.prototype,"handleDisabledChange",1),g([ir("step",{waitUntilFirstUpdate:!0})],o3.prototype,"handleStepChange",1),g([ir("value",{waitUntilFirstUpdate:!0})],o3.prototype,"handleValueChange",1),o3.define("sl-input");var o6=I`
  ${tV}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,o4=class extends tY{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],i=t.composedPath().find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});i&&("checkbox"===i.type&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}}))}handleKeyDown(t){if("Enter"===t.key||" "===t.key){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),i=this.getCurrentItem(),o=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?o++:"ArrowUp"===t.key?o--:"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!t.inert&&!!this.isMenuItem(t))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return ty`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};o4.styles=o6,g([tX("slot")],o4.prototype,"defaultSlot",2),o4.define("sl-menu");var o7=I`
  ${tV}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,o8=class extends tY{render(){return ty` <slot part="base" class="menu-label"></slot> `}};o8.styles=o7,o8.define("sl-menu-label");var o9=I`
  ${tV}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,rt=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.position=50}handleDrag(t){let{width:e}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();t.preventDefault(),oi(this.base,{onMove:t=>{this.position=parseFloat(iL(t/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let o=t.shiftKey?10:1,r=this.position;t.preventDefault(),(e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key)&&(r-=o),(e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key)&&(r+=o),"Home"===t.key&&(r=0),"End"===t.key&&(r=100),r=iL(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){let t="rtl"===this.localize.dir();return ty`
      <div
        part="base"
        id="image-comparer"
        class=${eU({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${on({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${on({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};rt.styles=o9,rt.scopedElement={"sl-icon":i$},g([tX(".image-comparer")],rt.prototype,"base",2),g([tX(".image-comparer__handle")],rt.prototype,"handle",2),g([tj({type:Number,reflect:!0})],rt.prototype,"position",2),g([ir("position",{waitUntilFirstUpdate:!0})],rt.prototype,"handlePositionChange",1),rt.define("sl-image-comparer");var re=I`
  ${tV}

  :host {
    display: block;
  }
`,ri=new Map,ro=class extends tY{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(t=>e.setAttribute(t.name,t.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await function(t,e="cors"){let i=ri.get(t);if(void 0!==i)return Promise.resolve(i);let o=fetch(t,{mode:e}).then(async e=>{let i={ok:e.ok,status:e.status,html:await e.text()};return ri.set(t,i),i});return ri.set(t,o),o}(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(t=>this.executeScript(t)),this.emit("sl-load")}catch(t){this.emit("sl-error",{detail:{status:-1}})}}render(){return ty`<slot></slot>`}};ro.styles=re,g([tj()],ro.prototype,"src",2),g([tj()],ro.prototype,"mode",2),g([tj({attribute:"allow-scripts",type:Boolean})],ro.prototype,"allowScripts",2),g([ir("src")],ro.prototype,"handleSrcChange",1),ro.define("sl-include"),i$.define("sl-icon"),iW.define("sl-icon-button");var rr=I`
  ${tV}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function rs(t){let e=[];return!function i(o){if(o instanceof Element){var r;if(o.hasAttribute("inert"))return;!e.includes(o)&&function(t){let e=t.tagName.toLowerCase();return!("-1"===t.getAttribute("tabindex")||t.hasAttribute("disabled"))&&("input"!==e||"radio"!==t.getAttribute("type")||!!t.hasAttribute("checked"))&&(!!t.offsetParent||!!t.offsetWidth||!!t.offsetHeight||!!t.getClientRects().length)&&"hidden"!==window.getComputedStyle(t).visibility&&(!!(("audio"===e||"video"===e)&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e))}(o)&&e.push(o),o instanceof HTMLSlotElement&&(null==(r=o.getRootNode({composed:!0}))?void 0:r.host)!==t&&o.assignedElements({flatten:!0}).forEach(t=>{i(t)}),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&i(o.shadowRoot)}[...o.children].forEach(t=>i(t))}(t),e.sort((t,e)=>{let i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var ra=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if("Tab"===t.key){if(this.open&&(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var t,e,i;let o=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(i=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:i.activeElement:document.activeElement;this.containingElement&&(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let i=e.getAllItems(),o=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{("ArrowDown"===t.key||"Home"===t.key)&&(e.setCurrentItem(o),o.focus()),("ArrowUp"===t.key||"End"===t.key)&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let t;let e=this.trigger.assignedElements({flatten:!0}).find(t=>(function(t){var e,i;let o=rs(t);return{start:null!=(e=o[0])?e:null,end:null!=(i=o[o.length-1])?i:null}})(t).start);if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,eZ(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,eZ(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await e2(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=eQ(this,"dropdown.show",{dir:this.localize.dir()});await eJ(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await e2(this);let{keyframes:t,options:e}=eQ(this,"dropdown.hide",{dir:this.localize.dir()});await eJ(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return ty`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${eU({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};ra.styles=rr,ra.dependencies={"sl-popup":eW},g([tX(".dropdown")],ra.prototype,"popup",2),g([tX(".dropdown__trigger")],ra.prototype,"trigger",2),g([tX(".dropdown__panel")],ra.prototype,"panel",2),g([tj({type:Boolean,reflect:!0})],ra.prototype,"open",2),g([tj({reflect:!0})],ra.prototype,"placement",2),g([tj({type:Boolean,reflect:!0})],ra.prototype,"disabled",2),g([tj({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ra.prototype,"stayOpenOnSelect",2),g([tj({attribute:!1})],ra.prototype,"containingElement",2),g([tj({type:Number})],ra.prototype,"distance",2),g([tj({type:Number})],ra.prototype,"skidding",2),g([tj({type:Boolean})],ra.prototype,"hoist",2),g([ir("open",{waitUntilFirstUpdate:!0})],ra.prototype,"handleOpenChange",1),eG("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),eG("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),ra.define("sl-dropdown");var rn=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";let t="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],e=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),t.length-1)),i=t[e]+this.unit,o=parseFloat((this.value/Math.pow(1e3,e)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};g([tj({type:Number})],rn.prototype,"value",2),g([tj()],rn.prototype,"unit",2),g([tj()],rn.prototype,"display",2),rn.define("sl-format-bytes");var rl=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.date=new Date,this.hourFormat="auto"}render(){let t=new Date(this.date),e="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return ty`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};g([tj()],rl.prototype,"date",2),g([tj()],rl.prototype,"weekday",2),g([tj()],rl.prototype,"era",2),g([tj()],rl.prototype,"year",2),g([tj()],rl.prototype,"month",2),g([tj()],rl.prototype,"day",2),g([tj()],rl.prototype,"hour",2),g([tj()],rl.prototype,"minute",2),g([tj()],rl.prototype,"second",2),g([tj({attribute:"time-zone-name"})],rl.prototype,"timeZoneName",2),g([tj({attribute:"time-zone"})],rl.prototype,"timeZone",2),g([tj({attribute:"hour-format"})],rl.prototype,"hourFormat",2),rl.define("sl-format-date");var rc=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};g([tj({type:Number})],rc.prototype,"value",2),g([tj()],rc.prototype,"type",2),g([tj({attribute:"no-grouping",type:Boolean})],rc.prototype,"noGrouping",2),g([tj()],rc.prototype,"currency",2),g([tj({attribute:"currency-display"})],rc.prototype,"currencyDisplay",2),g([tj({attribute:"minimum-integer-digits",type:Number})],rc.prototype,"minimumIntegerDigits",2),g([tj({attribute:"minimum-fraction-digits",type:Number})],rc.prototype,"minimumFractionDigits",2),g([tj({attribute:"maximum-fraction-digits",type:Number})],rc.prototype,"maximumFractionDigits",2),g([tj({attribute:"minimum-significant-digits",type:Number})],rc.prototype,"minimumSignificantDigits",2),g([tj({attribute:"maximum-significant-digits",type:Number})],rc.prototype,"maximumSignificantDigits",2),rc.define("sl-format-number");var rd=I`
  ${tV}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,rh=class extends tY{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};rh.styles=rd,g([tj({type:Boolean,reflect:!0})],rh.prototype,"vertical",2),g([ir("vertical")],rh.prototype,"handleVerticalChange",1),rh.define("sl-divider");var ru=I`
  ${tV}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,rp=[],rf=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e,i;if("Tab"!==t.key||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();let o=rs(this.element),r=[...function* t(e=document.activeElement){null!=e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*v(t(e.shadowRoot.activeElement))))}()].pop(),s=o.findIndex(t=>t===r);if(-1===s){this.currentFocus=o[0],null==(e=this.currentFocus)||e.focus({preventScroll:!0});return}let a="forward"===this.tabDirection?1:-1;s+a>=o.length?s=0:s+a<0?s=o.length-1:s+=a,this.currentFocus=o[s],null==(i=this.currentFocus)||i.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){rp.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){rp=rp.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return rp[rp.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=rs(this.element);if(!this.element.matches(":focus-within")){let e=t[0],i=t[t.length-1],o="forward"===this.tabDirection?e:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!0}))}}}};function rm(t){return t.charAt(0).toUpperCase()+t.slice(1)}var rg=class extends tY{constructor(){super(...arguments),this.hasSlotController=new iG(this,"footer"),this.localize=new io(this),this.modal=new rf(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{!this.contained&&"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),i6(this)))}disconnectedCallback(){super.disconnectedCallback(),i4(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let t=eQ(this,"drawer.denyClose",{dir:this.localize.dir()});eJ(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),i6(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([e2(this.drawer),e2(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=eQ(this,`drawer.show${rm(this.placement)}`,{dir:this.localize.dir()}),i=eQ(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([eJ(this.panel,e.keyframes,e.options),eJ(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),i4(this)),await Promise.all([e2(this.drawer),e2(this.overlay)]);let t=eQ(this,`drawer.hide${rm(this.placement)}`,{dir:this.localize.dir()}),e=eQ(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([eJ(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),eJ(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),i6(this)),this.open&&this.contained&&(this.modal.deactivate(),i4(this))}async show(){if(!this.open)return this.open=!0,eZ(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,eZ(this,"sl-after-hide")}render(){return ty`
      <div
        part="base"
        class=${eU({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${iA(this.noHeader?this.label:void 0)}
          aria-labelledby=${iA(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":ty`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};rg.styles=ru,rg.dependencies={"sl-icon-button":iW},g([tX(".drawer")],rg.prototype,"drawer",2),g([tX(".drawer__panel")],rg.prototype,"panel",2),g([tX(".drawer__overlay")],rg.prototype,"overlay",2),g([tj({type:Boolean,reflect:!0})],rg.prototype,"open",2),g([tj({reflect:!0})],rg.prototype,"label",2),g([tj({reflect:!0})],rg.prototype,"placement",2),g([tj({type:Boolean,reflect:!0})],rg.prototype,"contained",2),g([tj({attribute:"no-header",type:Boolean,reflect:!0})],rg.prototype,"noHeader",2),g([ir("open",{waitUntilFirstUpdate:!0})],rg.prototype,"handleOpenChange",1),g([ir("contained",{waitUntilFirstUpdate:!0})],rg.prototype,"handleNoModalChange",1),eG("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),eG("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),eG("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),eG("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),eG("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),eG("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),eG("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),eG("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),eG("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),eG("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),eG("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),rg.define("sl-drawer");var rb=I`
  ${tV}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,rv=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]"),r=this.from,s="";i?[r,s]=this.from.trim().split("."):o&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));let a="getElementById"in e?e.getElementById(r):null;a?t=o?a.getAttribute(s)||"":i?a[s]||"":a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){let e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),r="success"===t?this.successIcon:this.errorIcon,s=eQ(this,"copy.in",{dir:"ltr"}),a=eQ(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?i:o,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await r.animate(a.keyframes,a.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return ty`
      <sl-tooltip
        class=${eU({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};rv.styles=rb,rv.dependencies={"sl-icon":i$,"sl-tooltip":is},g([tX('slot[name="copy-icon"]')],rv.prototype,"copyIcon",2),g([tX('slot[name="success-icon"]')],rv.prototype,"successIcon",2),g([tX('slot[name="error-icon"]')],rv.prototype,"errorIcon",2),g([tX("sl-tooltip")],rv.prototype,"tooltip",2),g([tq()],rv.prototype,"isCopying",2),g([tq()],rv.prototype,"status",2),g([tj()],rv.prototype,"value",2),g([tj()],rv.prototype,"from",2),g([tj({type:Boolean,reflect:!0})],rv.prototype,"disabled",2),g([tj({attribute:"copy-label"})],rv.prototype,"copyLabel",2),g([tj({attribute:"success-label"})],rv.prototype,"successLabel",2),g([tj({attribute:"error-label"})],rv.prototype,"errorLabel",2),g([tj({attribute:"feedback-duration",type:Number})],rv.prototype,"feedbackDuration",2),g([tj({attribute:"tooltip-placement"})],rv.prototype,"tooltipPlacement",2),g([tj({type:Boolean})],rv.prototype,"hoist",2),eG("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),eG("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),rv.define("sl-copy-button");var ry=I`
  ${tV}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,r_=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){("Enter"===t.key||" "===t.key)&&(t.preventDefault(),this.open?this.hide():this.show()),("ArrowUp"===t.key||"ArrowLeft"===t.key)&&(t.preventDefault(),this.hide()),("ArrowDown"===t.key||"ArrowRight"===t.key)&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await e2(this.body);let{keyframes:t,options:e}=eQ(this,"details.show",{dir:this.localize.dir()});await eJ(this.body,e5(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await e2(this.body);let{keyframes:t,options:e}=eQ(this,"details.hide",{dir:this.localize.dir()});await eJ(this.body,e5(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,eZ(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,eZ(this,"sl-after-hide")}render(){let t="rtl"===this.localize.dir();return ty`
      <details
        part="base"
        class=${eU({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};r_.styles=ry,r_.dependencies={"sl-icon":i$},g([tX(".details")],r_.prototype,"details",2),g([tX(".details__header")],r_.prototype,"header",2),g([tX(".details__body")],r_.prototype,"body",2),g([tX(".details__expand-icon-slot")],r_.prototype,"expandIconSlot",2),g([tj({type:Boolean,reflect:!0})],r_.prototype,"open",2),g([tj()],r_.prototype,"summary",2),g([tj({type:Boolean,reflect:!0})],r_.prototype,"disabled",2),g([ir("open",{waitUntilFirstUpdate:!0})],r_.prototype,"handleOpenChange",1),eG("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),eG("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),r_.define("sl-details");var rw=I`
  ${tV}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,rx=class extends tY{constructor(){super(...arguments),this.hasSlotController=new iG(this,"footer"),this.localize=new io(this),this.modal=new rf(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),i6(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),i4(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let t=eQ(this,"dialog.denyClose",{dir:this.localize.dir()});eJ(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),i6(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([e2(this.dialog),e2(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=eQ(this,"dialog.show",{dir:this.localize.dir()}),i=eQ(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([eJ(this.panel,e.keyframes,e.options),eJ(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([e2(this.dialog),e2(this.overlay)]);let t=eQ(this,"dialog.hide",{dir:this.localize.dir()}),e=eQ(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([eJ(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),eJ(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,i4(this);let i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,eZ(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,eZ(this,"sl-after-hide")}render(){return ty`
      <div
        part="base"
        class=${eU({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${iA(this.noHeader?this.label:void 0)}
          aria-labelledby=${iA(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":ty`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};rx.styles=rw,rx.dependencies={"sl-icon-button":iW},g([tX(".dialog")],rx.prototype,"dialog",2),g([tX(".dialog__panel")],rx.prototype,"panel",2),g([tX(".dialog__overlay")],rx.prototype,"overlay",2),g([tj({type:Boolean,reflect:!0})],rx.prototype,"open",2),g([tj({reflect:!0})],rx.prototype,"label",2),g([tj({attribute:"no-header",type:Boolean,reflect:!0})],rx.prototype,"noHeader",2),g([ir("open",{waitUntilFirstUpdate:!0})],rx.prototype,"handleOpenChange",1),eG("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),eG("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),eG("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),eG("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),eG("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),rx.define("sl-dialog");var rk=I`
  ${tV}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,rC=class extends tY{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return ty` <slot></slot> `}};rC.styles=rk,rC.define("sl-carousel-item"),iz.define("sl-checkbox");var r$=I`
  ${tV}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,rA=class extends tY{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new iG(this,"[default]","prefix","suffix"),this.localize=new io(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:$}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?iH`a`:iH`button`;return iq`
      <${e}
        part="base"
        class=${eU({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${iA(t?void 0:this.disabled)}
        type=${iA(t?void 0:this.type)}
        title=${this.title}
        name=${iA(t?void 0:this.name)}
        value=${iA(t?void 0:this.value)}
        href=${iA(t?this.href:void 0)}
        target=${iA(t?this.target:void 0)}
        download=${iA(t?this.download:void 0)}
        rel=${iA(t?this.rel:void 0)}
        role=${iA(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?iq` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?iq`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};function rE(t,e){var i,o;"string"==typeof(i=t)&&-1!==i.indexOf(".")&&1===parseFloat(i)&&(t="100%");let r="string"==typeof(o=t)&&-1!==o.indexOf("%");return(t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),1e-6>Math.abs(t-e))?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function rz(t){return Math.min(1,Math.max(0,t))}function rS(t){return(isNaN(t=parseFloat(t))||t<0||t>1)&&(t=1),t}function rT(t){return 1>=Number(t)?`${100*Number(t)}%`:t}function rO(t){return 1===t.length?"0"+t:String(t)}function rL(t,e,i){let o=Math.max(t=rE(t,255),e=rE(e,255),i=rE(i,255)),r=Math.min(t,e,i),s=0,a=0,n=(o+r)/2;if(o===r)a=0,s=0;else{let l=o-r;switch(a=n>.5?l/(2-o-r):l/(o+r),o){case t:s=(e-i)/l+(e<i?6:0);break;case e:s=(i-t)/l+2;break;case i:s=(t-e)/l+4}s/=6}return{h:s,s:a,l:n}}function rD(t,e,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function rI(t,e,i){let o=Math.max(t=rE(t,255),e=rE(e,255),i=rE(i,255)),r=Math.min(t,e,i),s=0,a=o-r;if(o===r)s=0;else{switch(o){case t:s=(e-i)/a+(e<i?6:0);break;case e:s=(i-t)/a+2;break;case i:s=(t-e)/a+4}s/=6}return{h:s,s:0===o?0:a/o,v:o}}function rP(t,e,i,o){let r=[rO(Math.round(t).toString(16)),rO(Math.round(e).toString(16)),rO(Math.round(i).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function rM(t){return parseInt(t,16)}rA.styles=ox,rA.dependencies={"sl-icon":i$,"sl-spinner":iT},g([tX(".button")],rA.prototype,"button",2),g([tq()],rA.prototype,"hasFocus",2),g([tq()],rA.prototype,"invalid",2),g([tj()],rA.prototype,"title",2),g([tj({reflect:!0})],rA.prototype,"variant",2),g([tj({reflect:!0})],rA.prototype,"size",2),g([tj({type:Boolean,reflect:!0})],rA.prototype,"caret",2),g([tj({type:Boolean,reflect:!0})],rA.prototype,"disabled",2),g([tj({type:Boolean,reflect:!0})],rA.prototype,"loading",2),g([tj({type:Boolean,reflect:!0})],rA.prototype,"outline",2),g([tj({type:Boolean,reflect:!0})],rA.prototype,"pill",2),g([tj({type:Boolean,reflect:!0})],rA.prototype,"circle",2),g([tj()],rA.prototype,"type",2),g([tj()],rA.prototype,"name",2),g([tj()],rA.prototype,"value",2),g([tj()],rA.prototype,"href",2),g([tj()],rA.prototype,"target",2),g([tj()],rA.prototype,"rel",2),g([tj()],rA.prototype,"download",2),g([tj()],rA.prototype,"form",2),g([tj({attribute:"formaction"})],rA.prototype,"formAction",2),g([tj({attribute:"formenctype"})],rA.prototype,"formEnctype",2),g([tj({attribute:"formmethod"})],rA.prototype,"formMethod",2),g([tj({attribute:"formnovalidate",type:Boolean})],rA.prototype,"formNoValidate",2),g([tj({attribute:"formtarget"})],rA.prototype,"formTarget",2),g([ir("disabled",{waitUntilFirstUpdate:!0})],rA.prototype,"handleDisabledChange",1);const rF={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},rR="(?:[-\\\\+]?\\\\d*\\\\.\\\\d+%?)|(?:[-\\\\+]?\\\\d+%?)",rN=`[\\s|\\(]+(${rR})[,|\\s]+(${rR})[,|\\s]+(${rR})\\s*\\)?`,rV=`[\\s|\\(]+(${rR})[,|\\s]+(${rR})[,|\\s]+(${rR})[,|\\s]+(${rR})\\s*\\)?`,rB={CSS_UNIT:new RegExp(rR),rgb:RegExp("rgb"+rN),rgba:RegExp("rgba"+rV),hsl:RegExp("hsl"+rN),hsla:RegExp("hsla"+rV),hsv:RegExp("hsv"+rN),hsva:RegExp("hsva"+rV),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function rH(t){return!!rB.CSS_UNIT.exec(String(t))}class rU{constructor(t="",e={}){if(t instanceof rU)return t;if("number"==typeof t){var i;t={r:(i=t)>>16,g:(65280&i)>>8,b:255&i}}this.originalInput=t;let o=function(t){let e={r:0,g:0,b:0},i=1,o=null,r=null,s=null,a=!1,n=!1;if("string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(rF[t])t=rF[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=rB.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=rB.rgba.exec(t))?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=rB.hsl.exec(t))?{h:i[1],s:i[2],l:i[3]}:(i=rB.hsla.exec(t))?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=rB.hsv.exec(t))?{h:i[1],s:i[2],v:i[3]}:(i=rB.hsva.exec(t))?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=rB.hex8.exec(t))?{r:rM(i[1]),g:rM(i[2]),b:rM(i[3]),a:rM(i[4])/255,format:e?"name":"hex8"}:(i=rB.hex6.exec(t))?{r:rM(i[1]),g:rM(i[2]),b:rM(i[3]),format:e?"name":"hex"}:(i=rB.hex4.exec(t))?{r:rM(i[1]+i[1]),g:rM(i[2]+i[2]),b:rM(i[3]+i[3]),a:rM(i[4]+i[4])/255,format:e?"name":"hex8"}:!!(i=rB.hex3.exec(t))&&{r:rM(i[1]+i[1]),g:rM(i[2]+i[2]),b:rM(i[3]+i[3]),format:e?"name":"hex"}}(t)),"object"==typeof t){if(rH(t.r)&&rH(t.g)&&rH(t.b)){var l,c,d;l=t.r,c=t.g,d=t.b,e={r:255*rE(l,255),g:255*rE(c,255),b:255*rE(d,255)},a=!0,n="%"===String(t.r).substr(-1)?"prgb":"rgb"}else rH(t.h)&&rH(t.s)&&rH(t.v)?(o=rT(t.s),r=rT(t.v),e=function(t,e,i){t=6*rE(t,360),e=rE(e,100),i=rE(i,100);let o=Math.floor(t),r=t-o,s=i*(1-e),a=i*(1-r*e),n=i*(1-(1-r)*e),l=o%6;return{r:255*[i,a,s,s,n,i][l],g:255*[n,i,i,a,s,s][l],b:255*[s,s,n,i,i,a][l]}}(t.h,o,r),a=!0,n="hsv"):rH(t.h)&&rH(t.s)&&rH(t.l)&&(o=rT(t.s),s=rT(t.l),e=function(t,e,i){let o,r,s;if(t=rE(t,360),e=rE(e,100),i=rE(i,100),0===e)r=i,s=i,o=i;else{let a=i<.5?i*(1+e):i+e-i*e,n=2*i-a;o=rD(n,a,t+1/3),r=rD(n,a,t),s=rD(n,a,t-1/3)}return{r:255*o,g:255*r,b:255*s}}(t.h,o,s),a=!0,n="hsl");Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)}return i=rS(i),{ok:a,format:t.format||n,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??o.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return 128>this.getBrightness()}isLight(){return!this.isDark()}getBrightness(){let t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){let t=this.toRgb(),e=t.r/255,i=t.g/255,o=t.b/255;return .2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))}getAlpha(){return this.a}setAlpha(t){return this.a=rS(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:t}=this.toHsl();return 0===t}toHsv(){let t=rI(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){let t=rI(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${o}%)`:`hsva(${e}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){let t=rL(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){let t=rL(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${o}%)`:`hsla(${e}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return rP(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,o,r){let s=[rO(Math.round(t).toString(16)),rO(Math.round(e).toString(16)),rO(Math.round(i).toString(16)),rO(Math.round(255*parseFloat(o)).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){let t=t=>`${Math.round(100*rE(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){let t=t=>Math.round(100*rE(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;let t="#"+rP(this.r,this.g,this.b,!1);for(let[e,i]of Object.entries(rF))if(t===i)return e;return!1}toString(t){let e=!!t;t=t??this.format;let i=!1,o=this.a<1&&this.a>=0;return!e&&o&&(t.startsWith("hex")||"name"===t)?"name"===t&&0===this.a?this.toName():this.toRgbString():("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new rU(this.toString())}lighten(t=10){let e=this.toHsl();return e.l+=t/100,e.l=rz(e.l),new rU(e)}brighten(t=10){let e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-(t/100*255)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-(t/100*255)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-(t/100*255)))),new rU(e)}darken(t=10){let e=this.toHsl();return e.l-=t/100,e.l=rz(e.l),new rU(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){let e=this.toHsl();return e.s-=t/100,e.s=rz(e.s),new rU(e)}saturate(t=10){let e=this.toHsl();return e.s+=t/100,e.s=rz(e.s),new rU(e)}greyscale(){return this.desaturate(100)}spin(t){let e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new rU(e)}mix(t,e=50){let i=this.toRgb(),o=new rU(t).toRgb(),r=e/100;return new rU({r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a})}analogous(t=6,e=30){let i=this.toHsl(),o=360/e,r=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,r.push(new rU(i));return r}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new rU(t)}monochromatic(t=6){let e=this.toHsv(),{h:i}=e,{s:o}=e,{v:r}=e,s=[],a=1/t;for(;t--;)s.push(new rU({h:i,s:o,v:r})),r=(r+a)%1;return s}splitcomplement(){let t=this.toHsl(),{h:e}=t;return[this,new rU({h:(e+72)%360,s:t.s,l:t.l}),new rU({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){let e=this.toRgb(),i=new rU(t).toRgb(),o=e.a+i.a*(1-e.a);return new rU({r:(e.r*e.a+i.r*i.a*(1-e.a))/o,g:(e.g*e.a+i.g*i.a*(1-e.a))/o,b:(e.b*e.a+i.b*i.a*(1-e.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let e=this.toHsl(),{h:i}=e,o=[this],r=360/t;for(let s=1;s<t;s++)o.push(new rU({h:(i+s*r)%360,s:e.s,l:e.l}));return o}equals(t){return this.toRgbString()===new rU(t).toRgbString()}}var rj="EyeDropper"in window,rq=class extends tY{constructor(){super(),this.formControlController=new C(this),this.isSafeValue=!1,this.localize=new io(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect(),r=this.value,s=this.value;i.focus(),t.preventDefault(),oi(e,{onMove:t=>{this.alpha=iL(t/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect(),r=this.value,s=this.value;i.focus(),t.preventDefault(),oi(e,{onMove:t=>{this.hue=iL(t/o*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:o,height:r}=e.getBoundingClientRect(),s=this.value,a=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,oi(e,{onMove:(t,e)=>{this.saturation=iL(t/o*100,0,100),this.brightness=iL(100-e/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=iL(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=iL(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=iL(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=iL(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=iL(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=iL(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=iL(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=iL(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){let e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){let t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let e=new rU(t);if(!e.isValid)return null;let i=e.toHsl(),o={h:i.h,s:100*i.s,l:100*i.l,a:i.a},r=e.toRgb(),s=e.toHexString(),a=e.toHex8String(),n=e.toHsv(),l={h:n.h,s:100*n.s,v:100*n.v,a:n.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(a)}}setColor(t){let e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){rj&&new EyeDropper().open().then(t=>{let e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,o=100){let r=new rU(`hsva(${t}, ${e}, ${i}, ${o/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let i=this.parseColor(e);null!==i?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=100*i.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(t=>""!==t.trim()),o=ty`
      <div
        part="base"
        class=${eU({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?ty`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${on({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${eU({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${on({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${iA(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${on({left:`${0===this.hue?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${iA(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?ty`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${on({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${on({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${iA(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${on({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":ty`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${rj?ty`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?ty`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(t=>{let e=this.parseColor(t);return e?ty`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${iA(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${on({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:ty`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${eU({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${on({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};rq.styles=r$,rq.dependencies={"sl-button-group":oE,"sl-button":rA,"sl-dropdown":ra,"sl-icon":i$,"sl-input":o3,"sl-visually-hidden":tG},g([tX('[part~="base"]')],rq.prototype,"base",2),g([tX('[part~="input"]')],rq.prototype,"input",2),g([tX(".color-dropdown")],rq.prototype,"dropdown",2),g([tX('[part~="preview"]')],rq.prototype,"previewButton",2),g([tX('[part~="trigger"]')],rq.prototype,"trigger",2),g([tq()],rq.prototype,"hasFocus",2),g([tq()],rq.prototype,"isDraggingGridHandle",2),g([tq()],rq.prototype,"isEmpty",2),g([tq()],rq.prototype,"inputValue",2),g([tq()],rq.prototype,"hue",2),g([tq()],rq.prototype,"saturation",2),g([tq()],rq.prototype,"brightness",2),g([tq()],rq.prototype,"alpha",2),g([tj()],rq.prototype,"value",2),g([id()],rq.prototype,"defaultValue",2),g([tj()],rq.prototype,"label",2),g([tj()],rq.prototype,"format",2),g([tj({type:Boolean,reflect:!0})],rq.prototype,"inline",2),g([tj({reflect:!0})],rq.prototype,"size",2),g([tj({attribute:"no-format-toggle",type:Boolean})],rq.prototype,"noFormatToggle",2),g([tj()],rq.prototype,"name",2),g([tj({type:Boolean,reflect:!0})],rq.prototype,"disabled",2),g([tj({type:Boolean})],rq.prototype,"hoist",2),g([tj({type:Boolean})],rq.prototype,"opacity",2),g([tj({type:Boolean})],rq.prototype,"uppercase",2),g([tj()],rq.prototype,"swatches",2),g([tj({reflect:!0})],rq.prototype,"form",2),g([tj({type:Boolean,reflect:!0})],rq.prototype,"required",2),g([ir("format",{waitUntilFirstUpdate:!0})],rq.prototype,"handleFormatChange",1),g([ir("opacity",{waitUntilFirstUpdate:!0})],rq.prototype,"handleOpacityChange",1),g([ir("value")],rq.prototype,"handleValueChange",1),rq.define("sl-color-picker");var rW=I`
  ${tV}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,rK=class extends tY{constructor(){super(...arguments),this.hasSlotController=new iG(this,"footer","header","image")}render(){return ty`
      <div
        part="base"
        class=${eU({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};rK.styles=rW,rK.define("sl-card");var rX=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},rY=I`
  ${tV}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,rG=class{constructor(t){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{"touch"!==t.pointerType&&this.mouseDragging&&0===t.button&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{let e=this.host.scrollContainer,i=!!t.movementX||!!t.movementY;!this.dragging&&i?(e.setPointerCapture(t.pointerId),this.handleDragStart()):e.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=t,t.addController(this)}async hostConnected(){let t=this.host;await t.updateComplete;let e=t.scrollContainer;e.addEventListener("scroll",this.handleScroll,{passive:!0}),e.addEventListener("scrollend",this.handleScrollEnd,!0),e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){let t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){let t=this.host;this.dragging=!0,t.scrollContainer.style.setProperty("scroll-snap-type","unset"),t.requestUpdate()}handleDrag(t){this.host.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY})}handleDragEnd(){let t=this.host,e=t.scrollContainer;e.removeEventListener("pointermove",this.handlePointerMove);let i=e.scrollLeft,o=e.scrollTop;e.style.removeProperty("scroll-snap-type");let r=e.scrollLeft,s=e.scrollTop;e.style.setProperty("scroll-snap-type","unset"),e.scrollTo({left:i,top:o,behavior:"auto"}),e.scrollTo({left:r,top:s,behavior:e1()?"auto":"smooth"}),requestAnimationFrame(async()=>{(i!==r||o!==s)&&await eZ(e,"scrollend"),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,t.requestUpdate()})}},rQ=(t,e)=>{let i=0;return function(...o){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...o)},e)}},rZ=(t,e,i)=>{let o=t[e];t[e]=function(...t){o.call(this,...t),i.call(this,o,...t)}};if(!("onscrollend"in window)){let t=new Set,e=new WeakMap;document.addEventListener("pointerdown",e=>{t.add(e.pointerId)}),document.addEventListener("pointerup",e=>{t.delete(e.pointerId)}),rZ(EventTarget.prototype,"addEventListener",function(i,o){if("scroll"!==o)return;let r=rQ(()=>{t.size?r():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",r,{passive:!0}),e.set(this,r)}),rZ(EventTarget.prototype,"removeEventListener",function(t,i){if("scroll"!==i)return;let o=e.get(this);o&&t.call(this,"scroll",o,{passive:!0})})}var rJ=class extends tY{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new rX(this,()=>this.next()),this.scrollController=new rG(this),this.intersectionObserverEntries=new Map,this.localize=new io(this),this.handleSlotChange=t=>{t.some(t=>[...t.addedNodes,...t.removedNodes].some(t=>this.isCarouselItem(t)&&!t.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));let t=new IntersectionObserver(t=>{t.forEach(t=>{this.intersectionObserverEntries.set(t.target,t);let e=t.target;e.toggleAttribute("inert",!t.isIntersecting),e.classList.toggle("--in-view",t.isIntersecting),e.setAttribute("aria-hidden",t.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=t,t.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:o}=this;return Math.ceil(o?t/i:(t-e)/i+1)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,i="rtl"===this.localize.dir(),o=null!==e.closest('[part~="pagination-item"]'),r="ArrowDown"===t.key||!i&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key,s="ArrowUp"===t.key||!i&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key;t.preventDefault(),s&&this.previous(),r&&this.next(),"Home"===t.key&&this.goToSlide(0),"End"===t.key&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var t;let e=null==(t=this.shadowRoot)?void 0:t.querySelector('[part~="pagination-item--active"]');e&&e.focus()})}}handleScrollEnd(){let t=this.getSlides(),e=[...this.intersectionObserverEntries.values()].find(t=>t.isIntersecting);if(this.loop&&(null==e?void 0:e.target.hasAttribute("data-clone"))){let t=Number(e.target.getAttribute("data-clone"));this.goToSlide(t,"auto")}else if(e){let i=t.indexOf(e.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(t){return t instanceof Element&&"sl-carousel-item"===t.tagName.toLowerCase()}initializeSlides(){let t=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((e,i)=>{t.unobserve(e),e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",i+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)}),this.goToSlide(this.activeSlide,"auto")}createClones(){let t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),o=t.slice(0,e);i.reverse().forEach((e,i)=>{let o=e.cloneNode(!0);o.setAttribute("data-clone",String(t.length-i-1)),this.prepend(o)}),o.forEach((t,e)=>{let i=t.cloneNode(!0);i.setAttribute("data-clone",String(e)),this.append(i)})}handelSlideChange(){let t=this.getSlides();t.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((t,i)=>{(i+e)%e==0?t.style.removeProperty("scroll-snap-align"):t.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:i,loop:o,scrollContainer:r}=this,s=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!s.length)return;let n=o?(t+s.length)%s.length:iL(t,0,s.length-1);this.activeSlide=n;let l=iL(t+(o?i:0),0,a.length-1),c=a[l],d=r.getBoundingClientRect(),h=c.getBoundingClientRect();r.scrollTo({left:h.left-d.left+r.scrollLeft,top:h.top-d.top+r.scrollTop,behavior:e1()?"auto":e})}render(){let{scrollController:t,slidesPerMove:e}=this,i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext(),a="ltr"===this.localize.dir();return ty`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${eU({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?ty`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${eU({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${eU({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?ty`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*(t,e){if(void 0!==t){let i=0;for(let o of t)yield e(o,i++)}}(/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*(t,e,i=1){let o=void 0===e?0:t;e??=t;for(let t=o;i>0?t<e:e<t;t+=i)yield t}(i),t=>{let r=t===o;return ty`
                    <button
                      part="pagination-item ${r?"pagination-item--active":""}"
                      class="${eU({"carousel__pagination-item":!0,"carousel__pagination-item--active":r})}"
                      role="tab"
                      aria-selected="${r?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",t+1,i)}"
                      tabindex=${r?"0":"-1"}
                      @click=${()=>this.goToSlide(t*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};rJ.styles=rY,rJ.dependencies={"sl-icon":i$},g([tj({type:Boolean,reflect:!0})],rJ.prototype,"loop",2),g([tj({type:Boolean,reflect:!0})],rJ.prototype,"navigation",2),g([tj({type:Boolean,reflect:!0})],rJ.prototype,"pagination",2),g([tj({type:Boolean,reflect:!0})],rJ.prototype,"autoplay",2),g([tj({type:Number,attribute:"autoplay-interval"})],rJ.prototype,"autoplayInterval",2),g([tj({type:Number,attribute:"slides-per-page"})],rJ.prototype,"slidesPerPage",2),g([tj({type:Number,attribute:"slides-per-move"})],rJ.prototype,"slidesPerMove",2),g([tj()],rJ.prototype,"orientation",2),g([tj({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],rJ.prototype,"mouseDragging",2),g([tX(".carousel__slides")],rJ.prototype,"scrollContainer",2),g([tX(".carousel__pagination")],rJ.prototype,"paginationContainer",2),g([tq()],rJ.prototype,"activeSlide",2),g([ir("loop",{waitUntilFirstUpdate:!0}),ir("slidesPerPage",{waitUntilFirstUpdate:!0})],rJ.prototype,"initializeSlides",1),g([ir("activeSlide")],rJ.prototype,"handelSlideChange",1),g([ir("slidesPerMove")],rJ.prototype,"updateSlidesSnap",1),g([ir("autoplay")],rJ.prototype,"handleAutoplayChange",1),g([ir("mouseDragging")],rJ.prototype,"handleMouseDraggingChange",1),rJ.define("sl-carousel"),rA.define("sl-button"),oE.define("sl-button-group");var r0=I`
  ${tV}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,r1=class extends tY{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return ty`
      <span
        part="base"
        class=${eU({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};r1.styles=r0,g([tj({reflect:!0})],r1.prototype,"variant",2),g([tj({type:Boolean,reflect:!0})],r1.prototype,"pill",2),g([tj({type:Boolean,reflect:!0})],r1.prototype,"pulse",2),r1.define("sl-badge");var r2=I`
  ${tV}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,r5=class extends tY{constructor(){super(...arguments),this.hasSlotController=new iG(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){let t=!!this.href;return ty`
      <div
        part="base"
        class=${eU({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${t?ty`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${iA(this.target?this.target:void 0)}"
                rel=${iA(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:ty`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};r5.styles=r2,g([tj()],r5.prototype,"href",2),g([tj()],r5.prototype,"target",2),g([tj()],r5.prototype,"rel",2),r5.define("sl-breadcrumb-item");var r3=I`
  ${tV}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,r6=class extends tY{constructor(){super(...arguments),this.localize=new io(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>"sl-breadcrumb-item"===t.tagName.toLowerCase());t.forEach((e,i)=>{let o=e.querySelector('[slot="separator"]');null===o?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),ty`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};r6.styles=r3,r6.dependencies={"sl-icon":i$},g([tX("slot")],r6.prototype,"defaultSlot",2),g([tX('slot[name="separator"]')],r6.prototype,"separatorSlot",2),g([tj()],r6.prototype,"label",2),r6.define("sl-breadcrumb");var r4=I`
  ${tV}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,r7=class extends tY{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){let t=ty`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `,e=ty``;return e=this.initials?ty`<div part="initials" class="avatar__initials">${this.initials}</div>`:ty`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,ty`
      <div
        part="base"
        class=${eU({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};r7.styles=r4,r7.dependencies={"sl-icon":i$},g([tq()],r7.prototype,"hasError",2),g([tj()],r7.prototype,"image",2),g([tj()],r7.prototype,"label",2),g([tj()],r7.prototype,"initials",2),g([tj()],r7.prototype,"loading",2),g([tj({reflect:!0})],r7.prototype,"shape",2),g([ir("image")],r7.prototype,"handleImageChange",1),r7.define("sl-avatar");var r8=I`
  ${tV}

  :host {
    display: contents;
  }
`,r9={};i(r9,"easings",()=>lr);var st={};i(st,"bounce",()=>se);const se=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var si={};i(si,"flash",()=>so);const so=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var sr={};i(sr,"headShake",()=>ss);const ss=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var sa={};i(sa,"heartBeat",()=>sn);const sn=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var sl={};i(sl,"jello",()=>sc);const sc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sd={};i(sd,"pulse",()=>sh);const sh=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var su={};i(su,"rubberBand",()=>sp);const sp=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var sf={};i(sf,"shake",()=>sm);const sm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sg={};i(sg,"shakeX",()=>sb);const sb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sv={};i(sv,"shakeY",()=>sy);const sy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var s_={};i(s_,"swing",()=>sw);const sw=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var sx={};i(sx,"tada",()=>sk);const sk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var sC={};i(sC,"wobble",()=>s$);const s$=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var sA={};i(sA,"backInDown",()=>sE);const sE=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var sz={};i(sz,"backInLeft",()=>sS);const sS=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var sT={};i(sT,"backInRight",()=>sO);const sO=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var sL={};i(sL,"backInUp",()=>sD);const sD=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var sI={};i(sI,"backOutDown",()=>sP);const sP=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var sM={};i(sM,"backOutLeft",()=>sF);const sF=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var sR={};i(sR,"backOutRight",()=>sN);const sN=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var sV={};i(sV,"backOutUp",()=>sB);const sB=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var sH={};i(sH,"bounceIn",()=>sU);const sU=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var sj={};i(sj,"bounceInDown",()=>sq);const sq=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var sW={};i(sW,"bounceInLeft",()=>sK);const sK=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var sX={};i(sX,"bounceInRight",()=>sY);const sY=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var sG={};i(sG,"bounceInUp",()=>sQ);const sQ=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var sZ={};i(sZ,"bounceOut",()=>sJ);const sJ=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var s0={};i(s0,"bounceOutDown",()=>s1);const s1=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var s2={};i(s2,"bounceOutLeft",()=>s5);const s5=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var s3={};i(s3,"bounceOutRight",()=>s6);const s6=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var s4={};i(s4,"bounceOutUp",()=>s7);const s7=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var s8={};i(s8,"fadeIn",()=>s9);const s9=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var at={};i(at,"fadeInBottomLeft",()=>ae);const ae=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ai={};i(ai,"fadeInBottomRight",()=>ao);const ao=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ar={};i(ar,"fadeInDown",()=>as);const as=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aa={};i(aa,"fadeInDownBig",()=>an);const an=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var al={};i(al,"fadeInLeft",()=>ac);const ac=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ad={};i(ad,"fadeInLeftBig",()=>ah);const ah=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var au={};i(au,"fadeInRight",()=>ap);const ap=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var af={};i(af,"fadeInRightBig",()=>am);const am=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ag={};i(ag,"fadeInTopLeft",()=>ab);const ab=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var av={};i(av,"fadeInTopRight",()=>ay);const ay=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var a_={};i(a_,"fadeInUp",()=>aw);const aw=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ax={};i(ax,"fadeInUpBig",()=>ak);const ak=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var aC={};i(aC,"fadeOut",()=>a$);const a$=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var aA={};i(aA,"fadeOutBottomLeft",()=>aE);const aE=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var az={};i(az,"fadeOutBottomRight",()=>aS);const aS=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var aT={};i(aT,"fadeOutDown",()=>aO);const aO=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var aL={};i(aL,"fadeOutDownBig",()=>aD);const aD=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var aI={};i(aI,"fadeOutLeft",()=>aP);const aP=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var aM={};i(aM,"fadeOutLeftBig",()=>aF);const aF=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var aR={};i(aR,"fadeOutRight",()=>aN);const aN=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var aV={};i(aV,"fadeOutRightBig",()=>aB);const aB=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var aH={};i(aH,"fadeOutTopLeft",()=>aU);const aU=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var aj={};i(aj,"fadeOutTopRight",()=>aq);const aq=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var aW={};i(aW,"fadeOutUp",()=>aK);const aK=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var aX={};i(aX,"fadeOutUpBig",()=>aY);const aY=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var aG={};i(aG,"flip",()=>aQ);const aQ=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var aZ={};i(aZ,"flipInX",()=>aJ);const aJ=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var a0={};i(a0,"flipInY",()=>a1);const a1=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var a2={};i(a2,"flipOutX",()=>a5);const a5=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var a3={};i(a3,"flipOutY",()=>a6);const a6=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var a4={};i(a4,"lightSpeedInLeft",()=>a7);const a7=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var a8={};i(a8,"lightSpeedInRight",()=>a9);const a9=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var nt={};i(nt,"lightSpeedOutLeft",()=>ne);const ne=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var ni={};i(ni,"lightSpeedOutRight",()=>no);const no=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var nr={};i(nr,"rotateIn",()=>ns);const ns=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var na={};i(na,"rotateInDownLeft",()=>nn);const nn=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var nl={};i(nl,"rotateInDownRight",()=>nc);const nc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var nd={};i(nd,"rotateInUpLeft",()=>nh);const nh=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var nu={};i(nu,"rotateInUpRight",()=>np);const np=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var nf={};i(nf,"rotateOut",()=>nm);const nm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var ng={};i(ng,"rotateOutDownLeft",()=>nb);const nb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var nv={};i(nv,"rotateOutDownRight",()=>ny);const ny=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var n_={};i(n_,"rotateOutUpLeft",()=>nw);const nw=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var nx={};i(nx,"rotateOutUpRight",()=>nk);const nk=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var nC={};i(nC,"slideInDown",()=>n$);const n$=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var nA={};i(nA,"slideInLeft",()=>nE);const nE=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var nz={};i(nz,"slideInRight",()=>nS);const nS=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var nT={};i(nT,"slideInUp",()=>nO);const nO=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var nL={};i(nL,"slideOutDown",()=>nD);const nD=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var nI={};i(nI,"slideOutLeft",()=>nP);const nP=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var nM={};i(nM,"slideOutRight",()=>nF);const nF=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var nR={};i(nR,"slideOutUp",()=>nN);const nN=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var nV={};i(nV,"hinge",()=>nB);const nB=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var nH={};i(nH,"jackInTheBox",()=>nU);const nU=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var nj={};i(nj,"rollIn",()=>nq);const nq=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var nW={};i(nW,"rollOut",()=>nK);const nK=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var nX={};i(nX,"zoomIn",()=>nY);const nY=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var nG={};i(nG,"zoomInDown",()=>nQ);const nQ=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var nZ={};i(nZ,"zoomInLeft",()=>nJ);const nJ=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var n0={};i(n0,"zoomInRight",()=>n1);const n1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var n2={};i(n2,"zoomInUp",()=>n5);const n5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var n3={};i(n3,"zoomOut",()=>n6);const n6=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var n4={};i(n4,"zoomOutDown",()=>n7);const n7=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var n8={};i(n8,"zoomOutLeft",()=>n9);const n9=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var lt={};i(lt,"zoomOutRight",()=>le);const le=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var li={};i(li,"zoomOutUp",()=>lo);const lo=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],lr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};e(r9,st),e(r9,si),e(r9,sr),e(r9,sa),e(r9,sl),e(r9,sd),e(r9,su),e(r9,sf),e(r9,sg),e(r9,sv),e(r9,s_),e(r9,sx),e(r9,sC),e(r9,sA),e(r9,sz),e(r9,sT),e(r9,sL),e(r9,sI),e(r9,sM),e(r9,sR),e(r9,sV),e(r9,sH),e(r9,sj),e(r9,sW),e(r9,sX),e(r9,sG),e(r9,sZ),e(r9,s0),e(r9,s2),e(r9,s3),e(r9,s4),e(r9,s8),e(r9,at),e(r9,ai),e(r9,ar),e(r9,aa),e(r9,al),e(r9,ad),e(r9,au),e(r9,af),e(r9,ag),e(r9,av),e(r9,a_),e(r9,ax),e(r9,aC),e(r9,aA),e(r9,az),e(r9,aT),e(r9,aL),e(r9,aI),e(r9,aM),e(r9,aR),e(r9,aV),e(r9,aH),e(r9,aj),e(r9,aW),e(r9,aX),e(r9,aG),e(r9,aZ),e(r9,a0),e(r9,a2),e(r9,a3),e(r9,a4),e(r9,a8),e(r9,nt),e(r9,ni),e(r9,nr),e(r9,na),e(r9,nl),e(r9,nd),e(r9,nu),e(r9,nf),e(r9,ng),e(r9,nv),e(r9,n_),e(r9,nx),e(r9,nC),e(r9,nA),e(r9,nz),e(r9,nT),e(r9,nL),e(r9,nI),e(r9,nM),e(r9,nR),e(r9,nV),e(r9,nH),e(r9,nj),e(r9,nW),e(r9,nX),e(r9,nG),e(r9,nZ),e(r9,n0),e(r9,n2),e(r9,n3),e(r9,n4),e(r9,n8),e(r9,lt),e(r9,li);var ls=class extends tY{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return null!=(e=null==(t=this.animation)?void 0:t.currentTime)?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;let i=null!=(t=r9.easings[this.easing])?t:this.easing,o=null!=(e=this.keyframes)?e:r9[this.name],r=(await this.defaultSlot).assignedElements()[0];return!!r&&!!o&&(this.destroyAnimation(),this.animation=r.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;null==(t=this.animation)||t.cancel()}finish(){var t;null==(t=this.animation)||t.finish()}render(){return ty` <slot @slotchange=${this.handleSlotChange}></slot> `}};ls.styles=r8,g([(t,e)=>tK(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],ls.prototype,"defaultSlot",2),g([tj()],ls.prototype,"name",2),g([tj({type:Boolean,reflect:!0})],ls.prototype,"play",2),g([tj({type:Number})],ls.prototype,"delay",2),g([tj()],ls.prototype,"direction",2),g([tj({type:Number})],ls.prototype,"duration",2),g([tj()],ls.prototype,"easing",2),g([tj({attribute:"end-delay",type:Number})],ls.prototype,"endDelay",2),g([tj()],ls.prototype,"fill",2),g([tj({type:Number})],ls.prototype,"iterations",2),g([tj({attribute:"iteration-start",type:Number})],ls.prototype,"iterationStart",2),g([tj({attribute:!1})],ls.prototype,"keyframes",2),g([tj({attribute:"playback-rate",type:Number})],ls.prototype,"playbackRate",2),g([ir(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ls.prototype,"handleAnimationChange",1),g([ir("play")],ls.prototype,"handlePlayChange",1),g([ir("playbackRate")],ls.prototype,"handlePlaybackRateChange",1),ls.define("sl-animation");var la=I`
  ${tV}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,ln=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ll=class extends tY{constructor(){super(...arguments),this.hasSlotController=new iG(this,"icon","suffix"),this.localize=new io(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await e2(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=eQ(this,"alert.show",{dir:this.localize.dir()});await eJ(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await e2(this.base);let{keyframes:t,options:e}=eQ(this,"alert.hide",{dir:this.localize.dir()});await eJ(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,eZ(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,eZ(this,"sl-after-hide")}async toast(){return new Promise(t=>{null===ln.parentElement&&document.body.append(ln),ln.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ln.removeChild(this),t(),null===ln.querySelector("sl-alert")&&ln.remove()},{once:!0})})}render(){return ty`
      <div
        part="base"
        class=${eU({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?ty`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};ll.styles=la,ll.dependencies={"sl-icon-button":iW},g([tX('[part~="base"]')],ll.prototype,"base",2),g([tj({type:Boolean,reflect:!0})],ll.prototype,"open",2),g([tj({type:Boolean,reflect:!0})],ll.prototype,"closable",2),g([tj({reflect:!0})],ll.prototype,"variant",2),g([tj({type:Number})],ll.prototype,"duration",2),g([ir("open",{waitUntilFirstUpdate:!0})],ll.prototype,"handleOpenChange",1),g([ir("duration")],ll.prototype,"handleDurationChange",1),eG("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),eG("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),ll.define("sl-alert");var lc=I`
  ${tV}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,ld=class extends tY{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return ty`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?ty`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};ld.styles=lc,ld.dependencies={"sl-icon":i$},g([tX(".animated-image__animated")],ld.prototype,"animatedImage",2),g([tq()],ld.prototype,"frozenFrame",2),g([tq()],ld.prototype,"isLoaded",2),g([tj()],ld.prototype,"src",2),g([tj()],ld.prototype,"alt",2),g([tj({type:Boolean,reflect:!0})],ld.prototype,"play",2),g([ir("play",{waitUntilFirstUpdate:!0})],ld.prototype,"handlePlayChange",1),g([ir("src")],ld.prototype,"handleSrcChange",1),ld.define("sl-animated-image");(function(){let t=new Map,e={set(e,i,o){t.has(e)||t.set(e,new Map);let r=t.get(e);r.has(i)||0===r.size?r.set(i,o):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;let o=t.get(e);o.delete(i),0===o.size&&t.delete(e)}},i="transitionend",o=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),t),r=t=>{t.dispatchEvent(new Event(i))},s=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),a=t=>s(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(o(t)):null,n=t=>{if(!s(t)||0===t.getClientRects().length)return!1;let e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){let e=t.closest("summary");if(e&&e.parentNode!==i||null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){let e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},d=()=>{},h=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,p=[],f=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{let e=u();if(e){let i=t.NAME,o=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=o,t.jQueryInterface)}},"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",()=>{for(let t of p)t()}),p.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,b=(t,e,o=!0)=>{if(!o)return void g(t);let s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t),o=Number.parseFloat(e),r=Number.parseFloat(i);return o||r?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5,a=!1,n=({target:o})=>{o===e&&(a=!0,e.removeEventListener(i,n),g(t))};e.addEventListener(i,n),setTimeout(()=>{a||r(e)},s)},v=(t,e,i,o)=>{let r=t.length,s=t.indexOf(e);return -1===s?!i&&o?t[r-1]:t[0]:(s+=i?1:-1,o&&(s=(s+r)%r),t[Math.max(0,Math.min(s,r-1))])},y=/[^.]*(?=\..*)\.|.*/,_=/\..*/,w=/::\d+$/,x={},k=1,C={mouseenter:"mouseover",mouseleave:"mouseout"},$=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function E(t){let e=A(t);return t.uidEvent=e,x[e]=x[e]||{},x[e]}function z(t,e,i=null){return Object.values(t).find(t=>t.callable===e&&t.delegationSelector===i)}function S(t,e,i){let o="string"==typeof e,r=L(t);return $.has(r)||(r=t),[o,o?i:e||i,r]}function T(t,e,i,o,r){var s,a,n;if("string"!=typeof e||!t)return;let[l,c,d]=S(e,i,o);e in C&&(s=c,c=function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return s.call(this,t)});let h=E(t),u=h[d]||(h[d]={}),p=z(u,c,l?i:null);if(p)return void(p.oneOff=p.oneOff&&r);let f=A(c,e.replace(y,"")),m=l?(a=c,function e(o){let r=t.querySelectorAll(i);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(let n of r)if(n===s)return I(o,{delegateTarget:s}),e.oneOff&&D.off(t,o.type,i,a),a.apply(s,[o])}):(n=c,function e(i){return I(i,{delegateTarget:t}),e.oneOff&&D.off(t,i.type,n),n.apply(t,[i])});m.delegationSelector=l?i:null,m.callable=c,m.oneOff=r,m.uidEvent=f,u[f]=m,t.addEventListener(d,m,l)}function O(t,e,i,o,r){let s=z(e[i],o,r);s&&(t.removeEventListener(i,s,!!r),delete e[i][s.uidEvent])}function L(t){return C[t=t.replace(_,"")]||t}let D={on(t,e,i,o){T(t,e,i,o,!1)},one(t,e,i,o){T(t,e,i,o,!0)},off(t,e,i,o){if("string"!=typeof e||!t)return;let[r,s,a]=S(e,i,o),n=a!==e,l=E(t),c=l[a]||{},d=e.startsWith(".");if(void 0===s){if(d)for(let i of Object.keys(l))!function(t,e,i,o){for(let[r,s]of Object.entries(e[i]||{}))r.includes(o)&&O(t,e,i,s.callable,s.delegationSelector)}(t,l,i,e.slice(1));for(let[i,o]of Object.entries(c)){let r=i.replace(w,"");n&&!e.includes(r)||O(t,l,a,o.callable,o.delegationSelector)}}else{if(!Object.keys(c).length)return;O(t,l,a,s,r?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;let o=u(),r=null,s=!0,a=!0,n=!1;e!==L(e)&&o&&(r=o.Event(e,i),o(t).trigger(r),s=!r.isPropagationStopped(),a=!r.isImmediatePropagationStopped(),n=r.isDefaultPrevented());let l=I(new Event(e,{bubbles:s,cancelable:!0}),i);return n&&l.preventDefault(),a&&t.dispatchEvent(l),l.defaultPrevented&&r&&r.preventDefault(),l}};function I(t,e={}){for(let[i,o]of Object.entries(e))try{t[i]=o}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>o})}return t}function P(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function M(t){return t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}let F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${M(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${M(e)}`)},getDataAttributes(t){if(!t)return{};let e={};for(let i of Object.keys(t.dataset).filter(t=>t.startsWith("bs")&&!t.startsWith("bsConfig"))){let o=i.replace(/^bs/,"");e[o=o.charAt(0).toLowerCase()+o.slice(1,o.length)]=P(t.dataset[i])}return e},getDataAttribute:(t,e)=>P(t.getAttribute(`data-bs-${M(e)}`))};class R{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){let i=s(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...s(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(let[i,o]of Object.entries(e)){let e=t[i],r=s(e)?"element":null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${o}".`)}}}class N extends R{constructor(t,i){super(),(t=a(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){for(let t of(e.remove(this._element,this.constructor.DATA_KEY),D.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this)))this[t]=null}_queueCallback(t,e,i=!0){b(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(a(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}let V=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?o(i.trim()):null}return e},B={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){let i=[],o=t.parentNode.closest(e);for(;o;)i.push(o),o=o.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){let e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(t=>!l(t)&&n(t))},getSelectorFromElement(t){let e=V(t);return e&&B.findOne(e)?e:null},getElementFromSelector(t){let e=V(t);return e?B.findOne(e):null},getMultipleElementsFromSelector(t){let e=V(t);return e?B.find(e):[]}},H=(t,e="hide")=>{let i=`click.dismiss${t.EVENT_KEY}`,o=t.NAME;D.on(document,i,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;let r=B.getElementFromSelector(this)||this.closest(`.${o}`);t.getOrCreateInstance(r)[e]()})},U=".bs.alert",j=`close${U}`,q=`closed${U}`;class W extends N{static get NAME(){return"alert"}close(){if(D.trigger(this._element,j).defaultPrevented)return;this._element.classList.remove("show");let t=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),D.trigger(this._element,q),this.dispose()}static jQueryInterface(t){return this.each(function(){let e=W.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw TypeError(`No method named "${t}"`);e[t](this)}})}}H(W,"close"),m(W);let K='[data-bs-toggle="button"]';class X extends N{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){let e=X.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}D.on(document,"click.bs.button.data-api",K,t=>{t.preventDefault();let e=t.target.closest(K);X.getOrCreateInstance(e).toggle()}),m(X);let Y=".bs.swipe",G=`touchstart${Y}`,Q=`touchmove${Y}`,Z=`touchend${Y}`,J=`pointerdown${Y}`,tt=`pointerup${Y}`,te={endCallback:null,leftCallback:null,rightCallback:null},ti={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class to extends R{constructor(t,e){super(),this._element=t,t&&to.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return te}static get DefaultType(){return ti}static get NAME(){return"swipe"}dispose(){D.off(this._element,Y)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){let t=Math.abs(this._deltaX);if(t<=40)return;let e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(D.on(this._element,J,t=>this._start(t)),D.on(this._element,tt,t=>this._end(t)),this._element.classList.add("pointer-event")):(D.on(this._element,G,t=>this._start(t)),D.on(this._element,Q,t=>this._move(t)),D.on(this._element,Z,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}let tr=".bs.carousel",ts=".data-api",ta="next",tn="prev",tl="left",tc="right",td=`slide${tr}`,th=`slid${tr}`,tu=`keydown${tr}`,tp=`mouseenter${tr}`,tf=`mouseleave${tr}`,tm=`dragstart${tr}`,tg=`load${tr}${ts}`,tb=`click${tr}${ts}`,tv="carousel",ty="active",t_=".active",tw=".carousel-item",tx=t_+tw,tk={ArrowLeft:tc,ArrowRight:tl},tC={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},t$={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class tA extends N{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=B.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===tv&&this.cycle()}static get Default(){return tC}static get DefaultType(){return t$}static get NAME(){return"carousel"}next(){this._slide(ta)}nextWhenVisible(){!document.hidden&&n(this._element)&&this.next()}prev(){this._slide(tn)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?D.one(this._element,th,()=>this.cycle()):this.cycle())}to(t){let e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void D.one(this._element,th,()=>this.to(t));let i=this._getItemIndex(this._getActive());i!==t&&this._slide(t>i?ta:tn,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&D.on(this._element,tu,t=>this._keydown(t)),"hover"===this._config.pause&&(D.on(this._element,tp,()=>this.pause()),D.on(this._element,tf,()=>this._maybeEnableCycle())),this._config.touch&&to.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let t of B.find(".carousel-item img",this._element))D.on(t,tm,t=>t.preventDefault());this._swipeHelper=new to(this._element,{leftCallback:()=>this._slide(this._directionToOrder(tl)),rightCallback:()=>this._slide(this._directionToOrder(tc)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}})}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;let e=tk[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;let e=B.findOne(t_,this._indicatorsElement);e.classList.remove(ty),e.removeAttribute("aria-current");let i=B.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(ty),i.setAttribute("aria-current","true"))}_updateInterval(){let t=this._activeElement||this._getActive();if(!t)return;let e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;let i=this._getActive(),o=t===ta,r=e||v(this._getItems(),i,o,this._config.wrap);if(r===i)return;let s=this._getItemIndex(r),a=e=>D.trigger(this._element,e,{relatedTarget:r,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:s});if(a(td).defaultPrevented||!i||!r)return;let n=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=r;let l=o?"carousel-item-start":"carousel-item-end",c=o?"carousel-item-next":"carousel-item-prev";r.classList.add(c),h(r),i.classList.add(l),r.classList.add(l),this._queueCallback(()=>{r.classList.remove(l,c),r.classList.add(ty),i.classList.remove(ty,c,l),this._isSliding=!1,a(th)},i,this._isAnimated()),n&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return B.findOne(tx,this._element)}_getItems(){return B.find(tw,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return f()?t===tl?tn:ta:t===tl?ta:tn}_orderToDirection(t){return f()?t===tn?tl:tc:t===tn?tc:tl}static jQueryInterface(t){return this.each(function(){let e=tA.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)})}}D.on(document,tb,"[data-bs-slide], [data-bs-slide-to]",function(t){let e=B.getElementFromSelector(this);if(!e||!e.classList.contains(tv))return;t.preventDefault();let i=tA.getOrCreateInstance(e),o=this.getAttribute("data-bs-slide-to");return o?i.to(o):"next"===F.getDataAttribute(this,"slide")?i.next():i.prev(),void i._maybeEnableCycle()}),D.on(window,tg,()=>{for(let t of B.find('[data-bs-ride="carousel"]'))tA.getOrCreateInstance(t)}),m(tA);let tE=".bs.collapse",tz=`show${tE}`,tS=`shown${tE}`,tT=`hide${tE}`,tO=`hidden${tE}`,tL=`click${tE}.data-api`,tD="show",tI="collapse",tP="collapsing",tM=`:scope .${tI} .${tI}`,tF='[data-bs-toggle="collapse"]',tR={parent:null,toggle:!0},tN={parent:"(null|element)",toggle:"boolean"};class tV extends N{constructor(t,e){for(let i of(super(t,e),this._isTransitioning=!1,this._triggerArray=[],B.find(tF))){let t=B.getSelectorFromElement(i),e=B.find(t).filter(t=>t===this._element);null!==t&&e.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return tR}static get DefaultType(){return tN}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t=>t!==this._element).map(t=>tV.getOrCreateInstance(t,{toggle:!1}))),t.length&&t[0]._isTransitioning||D.trigger(this._element,tz).defaultPrevented)return;for(let e of t)e.hide();let e=this._getDimension();this._element.classList.remove(tI),this._element.classList.add(tP),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(tP),this._element.classList.add(tI,tD),this._element.style[e]="",D.trigger(this._element,tS)},this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown()||D.trigger(this._element,tT).defaultPrevented)return;let t=this._getDimension();for(let e of(this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,h(this._element),this._element.classList.add(tP),this._element.classList.remove(tI,tD),this._triggerArray)){let t=B.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(tP),this._element.classList.add(tI),D.trigger(this._element,tO)},this._element,!0)}_isShown(t=this._element){return t.classList.contains(tD)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=a(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(this._config.parent)for(let t of this._getFirstLevelChildren(tF)){let e=B.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(t){let e=B.find(tM,this._config.parent);return B.find(t,this._config.parent).filter(t=>!e.includes(t))}_addAriaAndCollapsedClass(t,e){if(t.length)for(let i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){let e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){let i=tV.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw TypeError(`No method named "${t}"`);i[t]()}})}}D.on(document,tL,tF,function(t){for(let e of(("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault(),B.getMultipleElementsFromSelector(this)))tV.getOrCreateInstance(e,{toggle:!1}).toggle()}),m(tV);var tB="bottom",tH="right",tU="left",tj="auto",tq=["top",tB,tH,tU],tW="start",tK="clippingParents",tX="viewport",tY="popper",tG="reference",tQ=tq.reduce(function(t,e){return t.concat([e+"-"+tW,e+"-end"])},[]),tZ=[].concat(tq,[tj]).reduce(function(t,e){return t.concat([e,e+"-"+tW,e+"-end"])},[]),tJ="beforeRead",t0="read",t1="afterRead",t2="beforeMain",t5="main",t3="afterMain",t6="beforeWrite",t4="write",t7="afterWrite",t8=[tJ,t0,t1,t2,t5,t3,t6,t4,t7];function t9(t){return t?(t.nodeName||"").toLowerCase():null}function et(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ee(t){return t instanceof et(t).Element||t instanceof Element}function ei(t){return t instanceof et(t).HTMLElement||t instanceof HTMLElement}function eo(t){return"undefined"!=typeof ShadowRoot&&(t instanceof et(t).ShadowRoot||t instanceof ShadowRoot)}let er={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach(function(t){var i=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];ei(r)&&t9(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(t){var e=o[t];!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)}))})},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach(function(t){var o=e.elements[t],r=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce(function(t,e){return t[e]="",t},{});ei(o)&&t9(o)&&(Object.assign(o.style,s),Object.keys(r).forEach(function(t){o.removeAttribute(t)}))})}},requires:["computeStyles"]};function es(t){return t.split("-")[0]}var ea=Math.max,en=Math.min,el=Math.round;function ec(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ed(){return!/^((?!chrome|android).)*safari/i.test(ec())}function eh(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var o=t.getBoundingClientRect(),r=1,s=1;e&&ei(t)&&(r=t.offsetWidth>0&&el(o.width)/t.offsetWidth||1,s=t.offsetHeight>0&&el(o.height)/t.offsetHeight||1);var a=(ee(t)?et(t):window).visualViewport,n=!ed()&&i,l=(o.left+(n&&a?a.offsetLeft:0))/r,c=(o.top+(n&&a?a.offsetTop:0))/s,d=o.width/r,h=o.height/s;return{width:d,height:h,top:c,right:l+d,bottom:c+h,left:l,x:l,y:c}}function eu(t){var e=eh(t),i=t.offsetWidth,o=t.offsetHeight;return 1>=Math.abs(e.width-i)&&(i=e.width),1>=Math.abs(e.height-o)&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:o}}function ep(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&eo(i)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ef(t){return et(t).getComputedStyle(t)}function em(t){return((ee(t)?t.ownerDocument:t.document)||window.document).documentElement}function eg(t){return"html"===t9(t)?t:t.assignedSlot||t.parentNode||(eo(t)?t.host:null)||em(t)}function eb(t){return ei(t)&&"fixed"!==ef(t).position?t.offsetParent:null}function ev(t){for(var e=et(t),i=eb(t);i&&["table","td","th"].indexOf(t9(i))>=0&&"static"===ef(i).position;)i=eb(i);return i&&("html"===t9(i)||"body"===t9(i)&&"static"===ef(i).position)?e:i||function(t){var e=/firefox/i.test(ec());if(/Trident/i.test(ec())&&ei(t)&&"fixed"===ef(t).position)return null;var i=eg(t);for(eo(i)&&(i=i.host);ei(i)&&0>["html","body"].indexOf(t9(i));){var o=ef(i);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return i;i=i.parentNode}return null}(t)||e}function ey(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function e_(t,e,i){return ea(t,en(e,i))}function ew(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ex(t,e){return e.reduce(function(e,i){return e[i]=t,e},{})}let ek={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,o=t.name,r=t.options,s=i.elements.arrow,a=i.modifiersData.popperOffsets,n=es(i.placement),l=ey(n),c=[tU,tH].indexOf(n)>=0?"height":"width";if(s&&a){var d,h=ew("number"!=typeof(d="function"==typeof(d=r.padding)?d(Object.assign({},i.rects,{placement:i.placement})):d)?d:ex(d,tq)),u=eu(s),p="y"===l?"top":tU,f="y"===l?tB:tH,m=i.rects.reference[c]+i.rects.reference[l]-a[l]-i.rects.popper[c],g=a[l]-i.rects.reference[l],b=ev(s),v=b?"y"===l?b.clientHeight||0:b.clientWidth||0:0,y=h[p],_=v-u[c]-h[f],w=v/2-u[c]/2+(m/2-g/2),x=e_(y,w,_);i.modifiersData[o]=((e={})[l]=x,e.centerOffset=x-w,e)}},effect:function(t){var e=t.state,i=t.options.element,o=void 0===i?"[data-popper-arrow]":i;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&ep(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function eC(t){return t.split("-")[1]}var e$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function eA(t){var e,i=t.popper,o=t.popperRect,r=t.placement,s=t.variation,a=t.offsets,n=t.position,l=t.gpuAcceleration,c=t.adaptive,d=t.roundOffsets,h=t.isFixed,u=a.x,p=void 0===u?0:u,f=a.y,m=void 0===f?0:f,g="function"==typeof d?d({x:p,y:m}):{x:p,y:m};p=g.x,m=g.y;var b=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),y=tU,_="top",w=window;if(c){var x=ev(i),k="clientHeight",C="clientWidth";x===et(i)&&"static"!==ef(x=em(i)).position&&"absolute"===n&&(k="scrollHeight",C="scrollWidth"),("top"===r||(r===tU||r===tH)&&"end"===s)&&(_=tB,m-=(h&&x===w&&w.visualViewport?w.visualViewport.height:x[k])-o.height,m*=l?1:-1),r!==tU&&("top"!==r&&r!==tB||"end"!==s)||(y=tH,p-=(h&&x===w&&w.visualViewport?w.visualViewport.width:x[C])-o.width,p*=l?1:-1)}var $,A,E,z,S,T,O=Object.assign({position:n},c&&e$),L=!0===d?($={x:p,y:m},A=et(i),E=$.x,z=$.y,{x:el(E*(S=A.devicePixelRatio||1))/S||0,y:el(z*S)/S||0}):{x:p,y:m};return p=L.x,m=L.y,l?Object.assign({},O,((T={})[_]=v?"0":"",T[y]=b?"0":"",T.transform=1>=(w.devicePixelRatio||1)?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",T)):Object.assign({},O,((e={})[_]=v?m+"px":"",e[y]=b?p+"px":"",e.transform="",e))}let eE={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,o=i.gpuAcceleration,r=i.adaptive,s=i.roundOffsets,a=void 0===s||s,n={placement:es(e.placement),variation:eC(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:void 0===o||o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,eA(Object.assign({},n,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:void 0===r||r,roundOffsets:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,eA(Object.assign({},n,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ez={passive:!0};let eS={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,o=t.options,r=o.scroll,s=void 0===r||r,a=o.resize,n=void 0===a||a,l=et(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(t){t.addEventListener("scroll",i.update,ez)}),n&&l.addEventListener("resize",i.update,ez),function(){s&&c.forEach(function(t){t.removeEventListener("scroll",i.update,ez)}),n&&l.removeEventListener("resize",i.update,ez)}},data:{}};var eT={left:"right",right:"left",bottom:"top",top:"bottom"};function eO(t){return t.replace(/left|right|bottom|top/g,function(t){return eT[t]})}var eL={start:"end",end:"start"};function eD(t){return t.replace(/start|end/g,function(t){return eL[t]})}function eI(t){var e=et(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function eP(t){return eh(em(t)).left+eI(t).scrollLeft}function eM(t){var e=ef(t),i=e.overflow,o=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+r+o)}function eF(t,e){void 0===e&&(e=[]);var i,o=function t(e){return["html","body","#document"].indexOf(t9(e))>=0?e.ownerDocument.body:ei(e)&&eM(e)?e:t(eg(e))}(t),r=o===(null==(i=t.ownerDocument)?void 0:i.body),s=et(o),a=r?[s].concat(s.visualViewport||[],eM(o)?o:[]):o,n=e.concat(a);return r?n:n.concat(eF(eg(a)))}function eR(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function eN(t,e,i){var o,r,s,a,n,l,c,d,h,u;return e===tX?eR(function(t,e){var i=et(t),o=em(t),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,n=0,l=0;if(r){s=r.width,a=r.height;var c=ed();(c||!c&&"fixed"===e)&&(n=r.offsetLeft,l=r.offsetTop)}return{width:s,height:a,x:n+eP(t),y:l}}(t,i)):ee(e)?((o=eh(e,!1,"fixed"===i)).top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o):eR((r=em(t),a=em(r),n=eI(r),l=null==(s=r.ownerDocument)?void 0:s.body,c=ea(a.scrollWidth,a.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),d=ea(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),h=-n.scrollLeft+eP(r),u=-n.scrollTop,"rtl"===ef(l||a).direction&&(h+=ea(a.clientWidth,l?l.clientWidth:0)-c),{width:c,height:d,x:h,y:u}))}function eV(t){var e,i=t.reference,o=t.element,r=t.placement,s=r?es(r):null,a=r?eC(r):null,n=i.x+i.width/2-o.width/2,l=i.y+i.height/2-o.height/2;switch(s){case"top":e={x:n,y:i.y-o.height};break;case tB:e={x:n,y:i.y+i.height};break;case tH:e={x:i.x+i.width,y:l};break;case tU:e={x:i.x-o.width,y:l};break;default:e={x:i.x,y:i.y}}var c=s?ey(s):null;if(null!=c){var d="y"===c?"height":"width";switch(a){case tW:e[c]=e[c]-(i[d]/2-o[d]/2);break;case"end":e[c]=e[c]+(i[d]/2-o[d]/2)}}return e}function eB(t,e){void 0===e&&(e={});var i,o,r,s,a,n,l=e,c=l.placement,d=void 0===c?t.placement:c,h=l.strategy,u=void 0===h?t.strategy:h,p=l.boundary,f=void 0===p?tK:p,m=l.rootBoundary,g=l.elementContext,b=void 0===g?tY:g,v=l.altBoundary,y=l.padding,_=void 0===y?0:y,w=ew("number"!=typeof _?_:ex(_,tq)),x=b===tY?tG:tY,k=t.rects.popper,C=t.elements[void 0!==v&&v?x:b],$=(i=ee(C)?C:C.contextElement||em(t.elements.popper),a=(s=[].concat("clippingParents"===f?(o=eF(eg(i)),ee(r=["absolute","fixed"].indexOf(ef(i).position)>=0&&ei(i)?ev(i):i)?o.filter(function(t){return ee(t)&&ep(t,r)&&"body"!==t9(t)}):[]):[].concat(f),[void 0===m?tX:m]))[0],(n=s.reduce(function(t,e){var o=eN(i,e,u);return t.top=ea(o.top,t.top),t.right=en(o.right,t.right),t.bottom=en(o.bottom,t.bottom),t.left=ea(o.left,t.left),t},eN(i,a,u))).width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n),A=eh(t.elements.reference),E=eV({reference:A,element:k,strategy:"absolute",placement:d}),z=eR(Object.assign({},k,E)),S=b===tY?z:A,T={top:$.top-S.top+w.top,bottom:S.bottom-$.bottom+w.bottom,left:$.left-S.left+w.left,right:S.right-$.right+w.right},O=t.modifiersData.offset;if(b===tY&&O){var L=O[d];Object.keys(T).forEach(function(t){var e=[tH,tB].indexOf(t)>=0?1:-1,i=["top",tB].indexOf(t)>=0?"y":"x";T[t]+=L[i]*e})}return T}let eH={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var r=i.mainAxis,s=void 0===r||r,a=i.altAxis,n=void 0===a||a,l=i.fallbackPlacements,c=i.padding,d=i.boundary,h=i.rootBoundary,u=i.altBoundary,p=i.flipVariations,f=void 0===p||p,m=i.allowedAutoPlacements,g=e.options.placement,b=es(g),v=l||(b!==g&&f?function(t){if(es(t)===tj)return[];var e=eO(t);return[eD(t),e,eD(e)]}(g):[eO(g)]),y=[g].concat(v).reduce(function(t,i){var o,r,s,a,n,l,u,p,g,b,v,y;return t.concat(es(i)===tj?(r=(o={placement:i,boundary:d,rootBoundary:h,padding:c,flipVariations:f,allowedAutoPlacements:m}).placement,s=o.boundary,a=o.rootBoundary,n=o.padding,l=o.flipVariations,p=void 0===(u=o.allowedAutoPlacements)?tZ:u,0===(v=(b=(g=eC(r))?l?tQ:tQ.filter(function(t){return eC(t)===g}):tq).filter(function(t){return p.indexOf(t)>=0})).length&&(v=b),Object.keys(y=v.reduce(function(t,i){return t[i]=eB(e,{placement:i,boundary:s,rootBoundary:a,padding:n})[es(i)],t},{})).sort(function(t,e){return y[t]-y[e]})):i)},[]),_=e.rects.reference,w=e.rects.popper,x=new Map,k=!0,C=y[0],$=0;$<y.length;$++){var A=y[$],E=es(A),z=eC(A)===tW,S=["top",tB].indexOf(E)>=0,T=S?"width":"height",O=eB(e,{placement:A,boundary:d,rootBoundary:h,altBoundary:u,padding:c}),L=S?z?tH:tU:z?tB:"top";_[T]>w[T]&&(L=eO(L));var D=eO(L),I=[];if(s&&I.push(O[E]<=0),n&&I.push(O[L]<=0,O[D]<=0),I.every(function(t){return t})){C=A,k=!1;break}x.set(A,I)}if(k)for(var P=function(t){var e=y.find(function(e){var i=x.get(e);if(i)return i.slice(0,t).every(function(t){return t})});if(e)return C=e,"break"},M=f?3:1;M>0&&"break"!==P(M);M--);e.placement!==C&&(e.modifiersData[o]._skip=!0,e.placement=C,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function eU(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ej(t){return["top",tH,tB,tU].some(function(e){return t[e]>=0})}let eq={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,o=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,a=eB(e,{elementContext:"reference"}),n=eB(e,{altBoundary:!0}),l=eU(a,o),c=eU(n,r,s),d=ej(l),h=ej(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":h})}},eW={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,o=t.name,r=i.offset,s=void 0===r?[0,0]:r,a=tZ.reduce(function(t,i){var o,r,a,n,l,c;return t[i]=(o=e.rects,a=[tU,"top"].indexOf(r=es(i))>=0?-1:1,l=(n="function"==typeof s?s(Object.assign({},o,{placement:i})):s)[0],c=n[1],l=l||0,c=(c||0)*a,[tU,tH].indexOf(r)>=0?{x:c,y:l}:{x:l,y:c}),t},{}),n=a[e.placement],l=n.x,c=n.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[o]=a}},eK={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=eV({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},eX={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,o=t.name,r=i.mainAxis,s=i.altAxis,a=i.boundary,n=i.rootBoundary,l=i.altBoundary,c=i.padding,d=i.tether,h=void 0===d||d,u=i.tetherOffset,p=void 0===u?0:u,f=eB(e,{boundary:a,rootBoundary:n,padding:c,altBoundary:l}),m=es(e.placement),g=eC(e.placement),b=!g,v=ey(m),y="x"===v?"y":"x",_=e.modifiersData.popperOffsets,w=e.rects.reference,x=e.rects.popper,k="function"==typeof p?p(Object.assign({},e.rects,{placement:e.placement})):p,C="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),$=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,A={x:0,y:0};if(_){if(void 0===r||r){var E,z="y"===v?"top":tU,S="y"===v?tB:tH,T="y"===v?"height":"width",O=_[v],L=O+f[z],D=O-f[S],I=h?-x[T]/2:0,P=g===tW?w[T]:x[T],M=g===tW?-x[T]:-w[T],F=e.elements.arrow,R=h&&F?eu(F):{width:0,height:0},N=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},V=N[z],B=N[S],H=e_(0,w[T],R[T]),U=b?w[T]/2-I-H-V-C.mainAxis:P-H-V-C.mainAxis,j=b?-w[T]/2+I+H+B+C.mainAxis:M+H+B+C.mainAxis,q=e.elements.arrow&&ev(e.elements.arrow),W=q?"y"===v?q.clientTop||0:q.clientLeft||0:0,K=null!=(E=null==$?void 0:$[v])?E:0,X=e_(h?en(L,O+U-K-W):L,O,h?ea(D,O+j-K):D);_[v]=X,A[v]=X-O}if(void 0!==s&&s){var Y,G,Q="x"===v?"top":tU,Z="x"===v?tB:tH,J=_[y],tt="y"===y?"height":"width",te=J+f[Q],ti=J-f[Z],to=-1!==["top",tU].indexOf(m),tr=null!=(G=null==$?void 0:$[y])?G:0,ts=to?te:J-w[tt]-x[tt]-tr+C.altAxis,ta=to?J+w[tt]+x[tt]-tr-C.altAxis:ti,tn=h&&to?(Y=e_(ts,J,ta))>ta?ta:Y:e_(h?ts:te,J,h?ta:ti);_[y]=tn,A[y]=tn-J}e.modifiersData[o]=A}},requiresIfExists:["offset"]};var eY={placement:"bottom",modifiers:[],strategy:"absolute"};function eG(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some(function(t){return!(t&&"function"==typeof t.getBoundingClientRect)})}function eQ(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,o=void 0===i?[]:i,r=e.defaultOptions,s=void 0===r?eY:r;return function(t,e,i){void 0===i&&(i=s);var r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},eY,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},n=[],l=!1,c={state:a,setOptions:function(i){var r="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},s,a.options,r),a.scrollParents={reference:ee(t)?eF(t):t.contextElement?eF(t.contextElement):[],popper:eF(e)};var l,h,u,p,f,m=(l=Object.keys(f=[].concat(o,a.options.modifiers).reduce(function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t},{})).map(function(t){return f[t]}),h=new Map,u=new Set,p=[],l.forEach(function(t){h.set(t.name,t)}),l.forEach(function(t){u.has(t.name)||function t(e){u.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!u.has(e)){var i=h.get(e);i&&t(i)}}),p.push(e)}(t)}),t8.reduce(function(t,e){return t.concat(p.filter(function(t){return t.phase===e}))},[]));return a.orderedModifiers=m.filter(function(t){return t.enabled}),a.orderedModifiers.forEach(function(t){var e=t.name,i=t.options,o=t.effect;if("function"==typeof o){var r=o({state:a,name:e,instance:c,options:void 0===i?{}:i});n.push(r||function(){})}}),c.update()},forceUpdate:function(){if(!l){var t=a.elements,e=t.reference,i=t.popper;if(eG(e,i)){a.rects={reference:(o=ev(i),r="fixed"===a.options.strategy,h=ei(o),u=ei(o)&&(n=el((s=o.getBoundingClientRect()).width)/o.offsetWidth||1,d=el(s.height)/o.offsetHeight||1,1!==n||1!==d),p=em(o),f=eh(e,u,r),m={scrollLeft:0,scrollTop:0},g={x:0,y:0},(h||!h&&!r)&&(("body"!==t9(o)||eM(p))&&(m=o!==et(o)&&ei(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:eI(o)),ei(o)?((g=eh(o,!0)).x+=o.clientLeft,g.y+=o.clientTop):p&&(g.x=eP(p))),{x:f.left+m.scrollLeft-g.x,y:f.top+m.scrollTop-g.y,width:f.width,height:f.height}),popper:eu(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(t){return a.modifiersData[t.name]=Object.assign({},t.data)});for(var o,r,s,n,d,h,u,p,f,m,g,b=0;b<a.orderedModifiers.length;b++)if(!0!==a.reset){var v=a.orderedModifiers[b],y=v.fn,_=v.options,w=void 0===_?{}:_,x=v.name;"function"==typeof y&&(a=y({state:a,options:w,name:x,instance:c})||a)}else a.reset=!1,b=-1}}},update:function(){return r||(r=new Promise(function(t){Promise.resolve().then(function(){r=void 0,t(new Promise(function(t){c.forceUpdate(),t(a)}))})})),r},destroy:function(){d(),l=!0}};if(!eG(t,e))return c;function d(){n.forEach(function(t){return t()}),n=[]}return c.setOptions(i).then(function(t){!l&&i.onFirstUpdate&&i.onFirstUpdate(t)}),c}}var eZ=eQ(),eJ=eQ({defaultModifiers:[eS,eK,eE,er]}),e0=eQ({defaultModifiers:[eS,eK,eE,er,eW,eH,eX,ek,eq]});let e1=Object.freeze(Object.defineProperty({__proto__:null,afterMain:t3,afterRead:t1,afterWrite:t7,applyStyles:er,arrow:ek,auto:tj,basePlacements:tq,beforeMain:t2,beforeRead:tJ,beforeWrite:t6,bottom:tB,clippingParents:tK,computeStyles:eE,createPopper:e0,createPopperBase:eZ,createPopperLite:eJ,detectOverflow:eB,end:"end",eventListeners:eS,flip:eH,hide:eq,left:tU,main:t5,modifierPhases:t8,offset:eW,placements:tZ,popper:tY,popperGenerator:eQ,popperOffsets:eK,preventOverflow:eX,read:t0,reference:tG,right:tH,start:tW,top:"top",variationPlacements:tQ,viewport:tX,write:t4},Symbol.toStringTag,{value:"Module"})),e2="dropdown",e5=".bs.dropdown",e3=".data-api",e6="ArrowDown",e4=`hide${e5}`,e7=`hidden${e5}`,e8=`show${e5}`,e9=`shown${e5}`,it=`click${e5}${e3}`,ie=`keydown${e5}${e3}`,ii=`keyup${e5}${e3}`,io="show",ir='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',is=`${ir}.${io}`,ia=".dropdown-menu",il=f()?"top-end":"top-start",ic=f()?"top-start":"top-end",id=f()?"bottom-end":"bottom-start",ih=f()?"bottom-start":"bottom-end",iu=f()?"left-start":"right-start",ip=f()?"right-start":"left-start",im={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ig={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ib extends N{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=B.next(this._element,ia)[0]||B.prev(this._element,ia)[0]||B.findOne(ia,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return im}static get DefaultType(){return ig}static get NAME(){return e2}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;let t={relatedTarget:this._element};if(!D.trigger(this._element,e8,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(let t of[].concat(...document.body.children))D.on(t,"mouseover",d);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(io),this._element.classList.add(io),D.trigger(this._element,e9,t)}}hide(){if(l(this._element)||!this._isShown())return;let t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!D.trigger(this._element,e4,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(let t of[].concat(...document.body.children))D.off(t,"mouseover",d);this._popper&&this._popper.destroy(),this._menu.classList.remove(io),this._element.classList.remove(io),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),D.trigger(this._element,e7,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!s(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw TypeError(`${e2.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===e1)throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:s(this._config.reference)?t=a(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);let e=this._getPopperConfig();this._popper=e0(t,this._menu,e)}_isShown(){return this._menu.classList.contains(io)}_getPlacement(){let t=this._parent;if(t.classList.contains("dropend"))return iu;if(t.classList.contains("dropstart"))return ip;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";let e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ic:il:e?ih:id}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){let{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){let t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){let i=B.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(t=>n(t));i.length&&v(i,e,t===e6,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){let e=ib.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(2!==t.button&&("keyup"!==t.type||"Tab"===t.key))for(let e of B.find(is)){let i=ib.getInstance(e);if(!i||!1===i._config.autoClose)continue;let o=t.composedPath(),r=o.includes(i._menu);if(o.includes(i._element)||"inside"===i._config.autoClose&&!r||"outside"===i._config.autoClose&&r||i._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;let s={relatedTarget:i._element};"click"===t.type&&(s.clickEvent=t),i._completeHide(s)}}static dataApiKeydownHandler(t){let e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,o=["ArrowUp",e6].includes(t.key);if(!o&&!i||e&&!i)return;t.preventDefault();let r=this.matches(ir)?this:B.prev(this,ir)[0]||B.next(this,ir)[0]||B.findOne(ir,t.delegateTarget.parentNode),s=ib.getOrCreateInstance(r);if(o)return t.stopPropagation(),s.show(),void s._selectMenuItem(t);s._isShown()&&(t.stopPropagation(),s.hide(),r.focus())}}D.on(document,ie,ir,ib.dataApiKeydownHandler),D.on(document,ie,ia,ib.dataApiKeydownHandler),D.on(document,it,ib.clearMenus),D.on(document,ii,ib.clearMenus),D.on(document,it,ir,function(t){t.preventDefault(),ib.getOrCreateInstance(this).toggle()}),m(ib);let iv="backdrop",iy="show",i_=`mousedown.bs.${iv}`,iw={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},ix={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ik extends R{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return iw}static get DefaultType(){return ix}static get NAME(){return iv}show(t){if(!this._config.isVisible)return void g(t);this._append();let e=this._getElement();this._config.isAnimated&&h(e),e.classList.add(iy),this._emulateAnimation(()=>{g(t)})}hide(t){this._config.isVisible?(this._getElement().classList.remove(iy),this._emulateAnimation(()=>{this.dispose(),g(t)})):g(t)}dispose(){this._isAppended&&(D.off(this._element,i_),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){let t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=a(t.rootElement),t}_append(){if(this._isAppended)return;let t=this._getElement();this._config.rootElement.append(t),D.on(t,i_,()=>{g(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){b(t,this._getElement(),this._config.isAnimated)}}let iC=".bs.focustrap",i$=`focusin${iC}`,iA=`keydown.tab${iC}`,iE="backward",iz={autofocus:!0,trapElement:null},iS={autofocus:"boolean",trapElement:"element"};class iT extends R{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return iz}static get DefaultType(){return iS}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),D.off(document,iC),D.on(document,i$,t=>this._handleFocusin(t)),D.on(document,iA,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,D.off(document,iC))}_handleFocusin(t){let{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;let i=B.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===iE?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?iE:"forward")}}let iO=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",iL=".sticky-top",iD="padding-right",iI="margin-right";class iP{constructor(){this._element=document.body}getWidth(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){let t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,iD,e=>e+t),this._setElementAttributes(iO,iD,e=>e+t),this._setElementAttributes(iL,iI,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,iD),this._resetElementAttributes(iO,iD),this._resetElementAttributes(iL,iI)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){let o=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+o)return;this._saveInitialAttribute(t,e);let r=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(r))}px`)})}_saveInitialAttribute(t,e){let i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{let i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)})}_applyManipulationCallback(t,e){if(s(t))e(t);else for(let i of B.find(t,this._element))e(i)}}let iM=".bs.modal",iF=`hide${iM}`,iR=`hidePrevented${iM}`,iN=`hidden${iM}`,iV=`show${iM}`,iB=`shown${iM}`,iH=`resize${iM}`,iU=`click.dismiss${iM}`,ij=`mousedown.dismiss${iM}`,iq=`keydown.dismiss${iM}`,iW=`click${iM}.data-api`,iK="modal-open",iX="show",iY="modal-static",iG={backdrop:!0,focus:!0,keyboard:!0},iQ={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class iZ extends N{constructor(t,e){super(t,e),this._dialog=B.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new iP,this._addEventListeners()}static get Default(){return iG}static get DefaultType(){return iQ}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||D.trigger(this._element,iV,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(iK),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){this._isShown&&!this._isTransitioning&&(D.trigger(this._element,iF).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(iX),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){D.off(window,iM),D.off(this._dialog,iM),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ik({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new iT({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let e=B.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),h(this._element),this._element.classList.add(iX),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,D.trigger(this._element,iB,{relatedTarget:t})},this._dialog,this._isAnimated())}_addEventListeners(){D.on(this._element,iq,t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),D.on(window,iH,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),D.on(this._element,ij,t=>{D.one(this._element,iU,e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(iK),this._resetAdjustments(),this._scrollBar.reset(),D.trigger(this._element,iN)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(D.trigger(this._element,iR).defaultPrevented)return;let t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(iY)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(iY),this._queueCallback(()=>{this._element.classList.remove(iY),this._queueCallback(()=>{this._element.style.overflowY=e},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){let t=f()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){let t=f()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){let i=iZ.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw TypeError(`No method named "${t}"`);i[t](e)}})}}D.on(document,iW,'[data-bs-toggle="modal"]',function(t){let e=B.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),D.one(e,iV,t=>{t.defaultPrevented||D.one(e,iN,()=>{n(this)&&this.focus()})});let i=B.findOne(".modal.show");i&&iZ.getInstance(i).hide(),iZ.getOrCreateInstance(e).toggle(this)}),H(iZ),m(iZ);let iJ=".bs.offcanvas",i0=".data-api",i1=`load${iJ}${i0}`,i2="show",i5="showing",i3="hiding",i6=".offcanvas.show",i4=`show${iJ}`,i7=`shown${iJ}`,i8=`hide${iJ}`,i9=`hidePrevented${iJ}`,ot=`hidden${iJ}`,oe=`resize${iJ}`,oi=`click${iJ}${i0}`,oo=`keydown.dismiss${iJ}`,or={backdrop:!0,keyboard:!0,scroll:!1},os={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class oa extends N{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return or}static get DefaultType(){return os}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||D.trigger(this._element,i4,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new iP).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(i5),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(i2),this._element.classList.remove(i5),D.trigger(this._element,i7,{relatedTarget:t})},this._element,!0))}hide(){this._isShown&&(D.trigger(this._element,i8).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(i3),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(i2,i3),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new iP).reset(),D.trigger(this._element,ot)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let t=!!this._config.backdrop;return new ik({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():D.trigger(this._element,i9)}:null})}_initializeFocusTrap(){return new iT({trapElement:this._element})}_addEventListeners(){D.on(this._element,oo,t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():D.trigger(this._element,i9))})}static jQueryInterface(t){return this.each(function(){let e=oa.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw TypeError(`No method named "${t}"`);e[t](this)}})}}D.on(document,oi,'[data-bs-toggle="offcanvas"]',function(t){let e=B.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;D.one(e,ot,()=>{n(this)&&this.focus()});let i=B.findOne(i6);i&&i!==e&&oa.getInstance(i).hide(),oa.getOrCreateInstance(e).toggle(this)}),D.on(window,i1,()=>{for(let t of B.find(i6))oa.getOrCreateInstance(t).show()}),D.on(window,oe,()=>{for(let t of B.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&oa.getOrCreateInstance(t).hide()}),H(oa),m(oa);let on={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ol=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),oc=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,od=(t,e)=>{let i=t.nodeName.toLowerCase();return e.includes(i)?!ol.has(i)||!!oc.test(t.nodeValue):e.filter(t=>t instanceof RegExp).some(t=>t.test(i))},oh={allowList:on,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ou={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},op={entry:"(string|element|function|null)",selector:"(string|element)"};class of extends R{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return oh}static get DefaultType(){return ou}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){let t=document.createElement("div");for(let[e,i]of(t.innerHTML=this._maybeSanitize(this._config.template),Object.entries(this._config.content)))this._setContent(t,i,e);let e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(let[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},op)}_setContent(t,e,i){let o=B.findOne(i,t);o&&((e=this._resolvePossibleFunction(e))?s(e)?this._putElementInTemplate(a(e),o):this._config.html?o.innerHTML=this._maybeSanitize(e):o.textContent=e:o.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);let o=(new window.DOMParser).parseFromString(t,"text/html");for(let t of[].concat(...o.body.querySelectorAll("*"))){let i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}let o=[].concat(...t.attributes),r=[].concat(e["*"]||[],e[i]||[]);for(let e of o)od(e,r)||t.removeAttribute(e.nodeName)}return o.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}let om=new Set(["sanitize","allowList","sanitizeFn"]),og="fade",ob="show",ov=".modal",oy="hide.bs.modal",o_="hover",ow="focus",ox={AUTO:"auto",TOP:"top",RIGHT:f()?"left":"right",BOTTOM:"bottom",LEFT:f()?"right":"left"},ok={allowList:on,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},oC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class o$ extends N{constructor(t,e){if(void 0===e1)throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ok}static get DefaultType(){return oC}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),D.off(this._element.closest(ov),oy,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;let t=D.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();let i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));let{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(i),D.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(ob),"ontouchstart"in document.documentElement)for(let t of[].concat(...document.body.children))D.on(t,"mouseover",d);this._queueCallback(()=>{D.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!D.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ob),"ontouchstart"in document.documentElement)for(let t of[].concat(...document.body.children))D.off(t,"mouseover",d);this._activeTrigger.click=!1,this._activeTrigger[ow]=!1,this._activeTrigger[o_]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),D.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){let e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(og,ob),e.classList.add(`bs-${this.constructor.NAME}-auto`);let i=(t=>{do t+=Math.floor(1e6*Math.random());while(document.getElementById(t))return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(og),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new of({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(og)}_isShown(){return this.tip&&this.tip.classList.contains(ob)}_createPopper(t){let e=ox[g(this._config.placement,[this,t,this._element]).toUpperCase()];return e0(this._element,t,this._getPopperConfig(e))}_getOffset(){let{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element])}_getPopperConfig(t){let e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[e])}}_setListeners(){for(let t of this._config.trigger.split(" "))if("click"===t)D.on(this._element,this.constructor.eventName("click"),this._config.selector,t=>{this._initializeOnDelegatedTarget(t).toggle()});else if("manual"!==t){let e=t===o_?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=t===o_?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");D.on(this._element,e,this._config.selector,t=>{let e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?ow:o_]=!0,e._enter()}),D.on(this._element,i,this._config.selector,t=>{let e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?ow:o_]=e._element.contains(t.relatedTarget),e._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},D.on(this._element.closest(ov),oy,this._hideModalHandler)}_fixTitle(){let t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){let e=F.getDataAttributes(this._element);for(let t of Object.keys(e))om.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:a(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){let t={};for(let[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){let e=o$.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw TypeError(`No method named "${t}"`);e[t]()}})}}m(o$);let oA={...o$.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},oE={...o$.DefaultType,content:"(null|string|element|function)"};class oz extends o${static get Default(){return oA}static get DefaultType(){return oE}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){let e=oz.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw TypeError(`No method named "${t}"`);e[t]()}})}}m(oz);let oS=".bs.scrollspy",oT=`activate${oS}`,oO=`click${oS}`,oL=`load${oS}.data-api`,oD="active",oI="[href]",oP=".nav-link",oM=`${oP}, .nav-item > ${oP}, .list-group-item`,oF={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class oN extends N{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return oF}static get DefaultType(){return oR}static get NAME(){return"scrollspy"}refresh(){for(let t of(this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver(),this._observableSections.values()))this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=a(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map(t=>Number.parseFloat(t))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(D.off(this._config.target,oO),D.on(this._config.target,oO,oI,t=>{let e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();let i=this._rootElement||window,o=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:o,behavior:"smooth"});i.scrollTop=o}}))}_getNewObserver(){let t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),t)}_observerCallback(t){let e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},o=(this._rootElement||document.documentElement).scrollTop,r=o>=this._previousScrollData.parentScrollTop;for(let s of(this._previousScrollData.parentScrollTop=o,t)){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(s));continue}let t=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&t){if(i(s),!o)return}else r||t||i(s)}}_initializeTargetsAndObservables(){for(let t of(this._targetLinks=new Map,this._observableSections=new Map,B.find(oI,this._config.target))){if(!t.hash||l(t))continue;let e=B.findOne(decodeURI(t.hash),this._element);n(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(oD),this._activateParents(t),D.trigger(this._element,oT,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))B.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(oD);else for(let e of B.parents(t,".nav, .list-group"))for(let t of B.prev(e,oM))t.classList.add(oD)}_clearActiveClass(t){for(let e of(t.classList.remove(oD),B.find(`${oI}.${oD}`,t)))e.classList.remove(oD)}static jQueryInterface(t){return this.each(function(){let e=oN.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw TypeError(`No method named "${t}"`);e[t]()}})}}D.on(window,oL,()=>{for(let t of B.find('[data-bs-spy="scroll"]'))oN.getOrCreateInstance(t)}),m(oN);let oV=".bs.tab",oB=`hide${oV}`,oH=`hidden${oV}`,oU=`show${oV}`,oj=`shown${oV}`,oq=`click${oV}`,oW=`keydown${oV}`,oK=`load${oV}`,oX="ArrowRight",oY="ArrowDown",oG="Home",oQ="active",oZ="fade",oJ="show",o0=".dropdown-toggle",o1=`:not(${o0})`,o2='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',o5=`.nav-link${o1}, .list-group-item${o1}, [role="tab"]${o1}, ${o2}`,o3=`.${oQ}[data-bs-toggle="tab"], .${oQ}[data-bs-toggle="pill"], .${oQ}[data-bs-toggle="list"]`;class o6 extends N{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),D.on(this._element,oW,t=>this._keydown(t)))}static get NAME(){return"tab"}show(){let t=this._element;if(this._elemIsActive(t))return;let e=this._getActiveElem(),i=e?D.trigger(e,oB,{relatedTarget:t}):null;D.trigger(t,oU,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(oQ),this._activate(B.getElementFromSelector(t)),this._queueCallback(()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),D.trigger(t,oj,{relatedTarget:e})):t.classList.add(oJ)},t,t.classList.contains(oZ)))}_deactivate(t,e){t&&(t.classList.remove(oQ),t.blur(),this._deactivate(B.getElementFromSelector(t)),this._queueCallback(()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),D.trigger(t,oH,{relatedTarget:e})):t.classList.remove(oJ)},t,t.classList.contains(oZ)))}_keydown(t){let e;if(!["ArrowLeft",oX,"ArrowUp",oY,oG,"End"].includes(t.key))return;t.stopPropagation(),t.preventDefault();let i=this._getChildren().filter(t=>!l(t));if([oG,"End"].includes(t.key))e=i[t.key===oG?0:i.length-1];else{let o=[oX,oY].includes(t.key);e=v(i,t.target,o,!0)}e&&(e.focus({preventScroll:!0}),o6.getOrCreateInstance(e).show())}_getChildren(){return B.find(o5,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){for(let i of(this._setAttributeIfNotExists(t,"role","tablist"),e))this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);let e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){let e=B.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){let i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;let o=(t,o)=>{let r=B.findOne(t,i);r&&r.classList.toggle(o,e)};o(o0,oQ),o(".dropdown-menu",oJ),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(oQ)}_getInnerElement(t){return t.matches(o5)?t:B.findOne(o5,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each(function(){let e=o6.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw TypeError(`No method named "${t}"`);e[t]()}})}}D.on(document,oq,o2,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||o6.getOrCreateInstance(this).show()}),D.on(window,oK,()=>{for(let t of B.find(o3))o6.getOrCreateInstance(t)}),m(o6);let o4=".bs.toast",o7=`mouseover${o4}`,o8=`mouseout${o4}`,o9=`focusin${o4}`,rt=`focusout${o4}`,re=`hide${o4}`,ri=`hidden${o4}`,ro=`show${o4}`,rr=`shown${o4}`,rs="hide",ra="show",rn="showing",rl={animation:"boolean",autohide:"boolean",delay:"number"},rc={animation:!0,autohide:!0,delay:5e3};class rd extends N{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return rc}static get DefaultType(){return rl}static get NAME(){return"toast"}show(){D.trigger(this._element,ro).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(rs),h(this._element),this._element.classList.add(ra,rn),this._queueCallback(()=>{this._element.classList.remove(rn),D.trigger(this._element,rr),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(D.trigger(this._element,re).defaultPrevented||(this._element.classList.add(rn),this._queueCallback(()=>{this._element.classList.add(rs),this._element.classList.remove(rn,ra),D.trigger(this._element,ri)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ra),super.dispose()}isShown(){return this._element.classList.contains(ra)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();let i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){D.on(this._element,o7,t=>this._onInteraction(t,!0)),D.on(this._element,o8,t=>this._onInteraction(t,!1)),D.on(this._element,o9,t=>this._onInteraction(t,!0)),D.on(this._element,rt,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){let e=rd.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw TypeError(`No method named "${t}"`);e[t](this)}})}}H(rd),m(rd)})(),r="/shoelace";
//# sourceMappingURL=index.4e7c5ee8.js.map
