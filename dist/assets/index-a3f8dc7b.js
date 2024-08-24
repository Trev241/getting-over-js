var Dm=(Ds,ai)=>()=>(ai||Ds((ai={exports:{}}).exports,ai),ai.exports),Um=Dm((Ds,ai)=>{(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();let u;const Be=new Array(128).fill(void 0);Be.push(void 0,null,!0,!1);let zi=Be.length;function si(i){zi===Be.length&&Be.push(Be.length+1);const e=zi;return zi=Be[e],Be[e]=i,e}function kc(i){return Be[i]}function Wc(i){i<132||(Be[i]=zi,zi=i)}function oa(i){const e=kc(i);return Wc(i),e}function fe(i){return i==null}let ln=null;function la(){return(ln===null||ln.byteLength===0)&&(ln=new Float64Array(u.memory.buffer)),ln}let cn=null;function Ye(){return(cn===null||cn.byteLength===0)&&(cn=new Int32Array(u.memory.buffer)),cn}const Vc=typeof TextDecoder>"u"?(0,ai.require)("util").TextDecoder:TextDecoder;let Us=new Vc("utf-8",{ignoreBOM:!0,fatal:!0});Us.decode();let hn=null;function jc(){return(hn===null||hn.byteLength===0)&&(hn=new Uint8Array(u.memory.buffer)),hn}function Xc(i,e){return i=i>>>0,Us.decode(jc().subarray(i,i+e))}function qc(){let i,e;try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.version(n);var t=Ye()[n/4+0],r=Ye()[n/4+1];return i=t,e=r,Xc(t,r)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(i,e,1)}}function A(i,e){if(!(i instanceof e))throw new Error(`expected instance of ${e.name}`);return i.ptr}let un=null;function yr(){return(un===null||un.byteLength===0)&&(un=new Float32Array(u.memory.buffer)),un}let qe=128;function $e(i){if(qe==1)throw new Error("out of js stack");return Be[--qe]=i,qe}function Is(i,e){return i=i>>>0,yr().subarray(i/4,i/4+e)}let dn=null;function Ns(){return(dn===null||dn.byteLength===0)&&(dn=new Uint32Array(u.memory.buffer)),dn}function Yc(i,e){return i=i>>>0,Ns().subarray(i/4,i/4+e)}let Vt=0;function Ur(i,e){const t=e(i.length*4,4)>>>0;return yr().set(i,t/4),Vt=i.length,t}function Os(i,e){const t=e(i.length*4,4)>>>0;return Ns().set(i,t/4),Vt=i.length,t}const Lt=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolygon:9,9:"ConvexPolygon",RoundCuboid:10,10:"RoundCuboid",RoundTriangle:11,11:"RoundTriangle",RoundConvexPolygon:12,12:"RoundConvexPolygon",HalfSpace:13,13:"HalfSpace"}),xr=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Generic:5,5:"Generic"}),pn=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",AngX:2,2:"AngX"}),Fs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawbroadphase_free(i>>>0));class Ir{static __wrap(e){e=e>>>0;const t=Object.create(Ir.prototype);return t.__wbg_ptr=e,Fs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Fs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawbroadphase_free(e)}constructor(){const e=u.rawbroadphase_new();return this.__wbg_ptr=e>>>0,this}}const Kc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawccdsolver_free(i>>>0));class ca{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Kc.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawccdsolver_free(e)}constructor(){const e=u.rawccdsolver_new();return this.__wbg_ptr=e>>>0,this}}const Jc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawcharactercollision_free(i>>>0));class zs{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Jc.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawcharactercollision_free(e)}constructor(){const e=u.rawcharactercollision_new();return this.__wbg_ptr=e>>>0,this}handle(){return u.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const e=u.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(e)}translationDeltaRemaining(){const e=u.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return F.__wrap(e)}toi(){return u.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const e=u.rawcharactercollision_worldWitness1(this.__wbg_ptr);return F.__wrap(e)}worldWitness2(){const e=u.rawcharactercollision_worldWitness2(this.__wbg_ptr);return F.__wrap(e)}worldNormal1(){const e=u.rawcharactercollision_worldNormal1(this.__wbg_ptr);return F.__wrap(e)}worldNormal2(){const e=u.rawcharactercollision_worldNormal2(this.__wbg_ptr);return F.__wrap(e)}}const Bs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawcolliderset_free(i>>>0));class et{static __wrap(e){e=e>>>0;const t=Object.create(et.prototype);return t.__wbg_ptr=e,Bs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Bs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawcolliderset_free(e)}coTranslation(e){const t=u.rawcolliderset_coTranslation(this.__wbg_ptr,e);return F.__wrap(t)}coRotation(e){const t=u.rawcolliderset_coRotation(this.__wbg_ptr,e);return He.__wrap(t)}coSetTranslation(e,t,r){u.rawcolliderset_coSetTranslation(this.__wbg_ptr,e,t,r)}coSetTranslationWrtParent(e,t,r){u.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,e,t,r)}coSetRotation(e,t){u.rawcolliderset_coSetRotation(this.__wbg_ptr,e,t)}coSetRotationWrtParent(e,t){u.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,e,t)}coIsSensor(e){return u.rawcolliderset_coIsSensor(this.__wbg_ptr,e)!==0}coShapeType(e){return u.rawcolliderset_coShapeType(this.__wbg_ptr,e)}coHalfspaceNormal(e){const t=u.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,e);return t===0?void 0:F.__wrap(t)}coHalfExtents(e){const t=u.rawcolliderset_coHalfExtents(this.__wbg_ptr,e);return t===0?void 0:F.__wrap(t)}coSetHalfExtents(e,t){A(t,F),u.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,e,t.__wbg_ptr)}coRadius(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coRadius(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=yr()[n/4+1];return t===0?void 0:r}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetRadius(e,t){u.rawcolliderset_coSetRadius(this.__wbg_ptr,e,t)}coHalfHeight(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coHalfHeight(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=yr()[n/4+1];return t===0?void 0:r}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetHalfHeight(e,t){u.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,e,t)}coRoundRadius(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coRoundRadius(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=yr()[n/4+1];return t===0?void 0:r}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetRoundRadius(e,t){u.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,e,t)}coVertices(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coVertices(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=Ye()[n/4+1];let a;return t!==0&&(a=Is(t,r).slice(),u.__wbindgen_free(t,r*4,4)),a}finally{u.__wbindgen_add_to_stack_pointer(16)}}coIndices(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coIndices(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=Ye()[n/4+1];let a;return t!==0&&(a=Yc(t,r).slice(),u.__wbindgen_free(t,r*4,4)),a}finally{u.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coTriMeshFlags(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=Ye()[n/4+1];return t===0?void 0:r>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coHeightfieldHeights(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=Ye()[n/4+1];let a;return t!==0&&(a=Is(t,r).slice(),u.__wbindgen_free(t,r*4,4)),a}finally{u.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(e){const t=u.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,e);return t===0?void 0:F.__wrap(t)}coParent(e){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coParent(n,this.__wbg_ptr,e);var t=Ye()[n/4+0],r=la()[n/8+1];return t===0?void 0:r}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(e,t){u.rawcolliderset_coSetEnabled(this.__wbg_ptr,e,t)}coIsEnabled(e){return u.rawcolliderset_coIsEnabled(this.__wbg_ptr,e)!==0}coSetContactSkin(e,t){u.rawcolliderset_coSetContactSkin(this.__wbg_ptr,e,t)}coContactSkin(e){return u.rawcolliderset_coContactSkin(this.__wbg_ptr,e)}coFriction(e){return u.rawcolliderset_coFriction(this.__wbg_ptr,e)}coRestitution(e){return u.rawcolliderset_coRestitution(this.__wbg_ptr,e)}coDensity(e){return u.rawcolliderset_coDensity(this.__wbg_ptr,e)}coMass(e){return u.rawcolliderset_coMass(this.__wbg_ptr,e)}coVolume(e){return u.rawcolliderset_coVolume(this.__wbg_ptr,e)}coCollisionGroups(e){return u.rawcolliderset_coCollisionGroups(this.__wbg_ptr,e)>>>0}coSolverGroups(e){return u.rawcolliderset_coSolverGroups(this.__wbg_ptr,e)>>>0}coActiveHooks(e){return u.rawcolliderset_coActiveHooks(this.__wbg_ptr,e)>>>0}coActiveCollisionTypes(e){return u.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,e)}coActiveEvents(e){return u.rawcolliderset_coActiveEvents(this.__wbg_ptr,e)>>>0}coContactForceEventThreshold(e){return u.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,e)}coContainsPoint(e,t){return A(t,F),u.rawcolliderset_coContainsPoint(this.__wbg_ptr,e,t.__wbg_ptr)!==0}coCastShape(e,t,r,n,a,o,s,l,c){A(t,F),A(r,Ae),A(n,F),A(a,He),A(o,F);const h=u.rawcolliderset_coCastShape(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s,l,c);return h===0?void 0:wn.__wrap(h)}coCastCollider(e,t,r,n,a,o,s){A(t,F),A(n,F);const l=u.rawcolliderset_coCastCollider(this.__wbg_ptr,e,t.__wbg_ptr,r,n.__wbg_ptr,a,o,s);return l===0?void 0:_n.__wrap(l)}coIntersectsShape(e,t,r,n){return A(t,Ae),A(r,F),A(n,He),u.rawcolliderset_coIntersectsShape(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr)!==0}coContactShape(e,t,r,n,a){A(t,Ae),A(r,F),A(n,He);const o=u.rawcolliderset_coContactShape(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a);return o===0?void 0:Bi.__wrap(o)}coContactCollider(e,t,r){const n=u.rawcolliderset_coContactCollider(this.__wbg_ptr,e,t,r);return n===0?void 0:Bi.__wrap(n)}coProjectPoint(e,t,r){A(t,F);const n=u.rawcolliderset_coProjectPoint(this.__wbg_ptr,e,t.__wbg_ptr,r);return mn.__wrap(n)}coIntersectsRay(e,t,r,n){return A(t,F),A(r,F),u.rawcolliderset_coIntersectsRay(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n)!==0}coCastRay(e,t,r,n,a){return A(t,F),A(r,F),u.rawcolliderset_coCastRay(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n,a)}coCastRayAndGetNormal(e,t,r,n,a){A(t,F),A(r,F);const o=u.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n,a);return o===0?void 0:gn.__wrap(o)}coSetSensor(e,t){u.rawcolliderset_coSetSensor(this.__wbg_ptr,e,t)}coSetRestitution(e,t){u.rawcolliderset_coSetRestitution(this.__wbg_ptr,e,t)}coSetFriction(e,t){u.rawcolliderset_coSetFriction(this.__wbg_ptr,e,t)}coFrictionCombineRule(e){return u.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,e)>>>0}coSetFrictionCombineRule(e,t){u.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,e,t)}coRestitutionCombineRule(e){return u.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,e)>>>0}coSetRestitutionCombineRule(e,t){u.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,e,t)}coSetCollisionGroups(e,t){u.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,e,t)}coSetSolverGroups(e,t){u.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,e,t)}coSetActiveHooks(e,t){u.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,e,t)}coSetActiveEvents(e,t){u.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,e,t)}coSetActiveCollisionTypes(e,t){u.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,e,t)}coSetShape(e,t){A(t,Ae),u.rawcolliderset_coSetShape(this.__wbg_ptr,e,t.__wbg_ptr)}coSetContactForceEventThreshold(e,t){u.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,e,t)}coSetDensity(e,t){u.rawcolliderset_coSetDensity(this.__wbg_ptr,e,t)}coSetMass(e,t){u.rawcolliderset_coSetMass(this.__wbg_ptr,e,t)}coSetMassProperties(e,t,r,n){A(r,F),u.rawcolliderset_coSetMassProperties(this.__wbg_ptr,e,t,r.__wbg_ptr,n)}constructor(){const e=u.rawcolliderset_new();return this.__wbg_ptr=e>>>0,this}len(){return u.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(e){return u.rawcolliderset_contains(this.__wbg_ptr,e)!==0}createCollider(e,t,r,n,a,o,s,l,c,h,_,p,f,w,g,m,d,T,M,R,E,P,I,J){try{const Y=u.__wbindgen_add_to_stack_pointer(-16);A(t,Ae),A(r,F),A(n,He),A(s,F),A(J,at),u.rawcolliderset_createCollider(Y,this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,o,s.__wbg_ptr,l,c,h,_,p,f,w,g,m,d,T,M,R,E,P,I,J.__wbg_ptr);var b=Ye()[Y/4+0],S=la()[Y/8+1];return b===0?void 0:S}finally{u.__wbindgen_add_to_stack_pointer(16)}}remove(e,t,r,n){A(t,lr),A(r,at),u.rawcolliderset_remove(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n)}isHandleValid(e){return u.rawcolliderset_contains(this.__wbg_ptr,e)!==0}forEachColliderHandle(e){try{u.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,$e(e))}finally{Be[qe++]=void 0}}}const Hs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawcollidershapecasthit_free(i>>>0));class _n{static __wrap(e){e=e>>>0;const t=Object.create(_n.prototype);return t.__wbg_ptr=e,Hs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Hs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawcollidershapecasthit_free(e)}colliderHandle(){return u.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr)}time_of_impact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const e=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(e)}witness2(){const e=u.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(e)}normal1(){const e=u.rawcollidershapecasthit_normal1(this.__wbg_ptr);return F.__wrap(e)}normal2(){const e=u.rawcollidershapecasthit_normal2(this.__wbg_ptr);return F.__wrap(e)}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(i=>u.__wbg_rawcontactforceevent_free(i>>>0));const Gs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawcontactmanifold_free(i>>>0));class ha{static __wrap(e){e=e>>>0;const t=Object.create(ha.prototype);return t.__wbg_ptr=e,Gs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Gs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawcontactmanifold_free(e)}normal(){const e=u.rawcontactmanifold_normal(this.__wbg_ptr);return F.__wrap(e)}local_n1(){const e=u.rawcontactmanifold_local_n1(this.__wbg_ptr);return F.__wrap(e)}local_n2(){const e=u.rawcontactmanifold_local_n2(this.__wbg_ptr);return F.__wrap(e)}subshape1(){return u.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return u.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return u.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(e){const t=u.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,e);return t===0?void 0:F.__wrap(t)}contact_local_p2(e){const t=u.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,e);return t===0?void 0:F.__wrap(t)}contact_dist(e){return u.rawcontactmanifold_contact_dist(this.__wbg_ptr,e)}contact_fid1(e){return u.rawcontactmanifold_contact_fid1(this.__wbg_ptr,e)>>>0}contact_fid2(e){return u.rawcontactmanifold_contact_fid2(this.__wbg_ptr,e)>>>0}contact_impulse(e){return u.rawcontactmanifold_contact_impulse(this.__wbg_ptr,e)}contact_tangent_impulse(e){return u.rawcontactmanifold_contact_tangent_impulse(this.__wbg_ptr,e)}num_solver_contacts(){return u.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(e){const t=u.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,e);return t===0?void 0:F.__wrap(t)}solver_contact_dist(e){return u.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,e)}solver_contact_friction(e){return u.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,e)}solver_contact_restitution(e){return u.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,e)}solver_contact_tangent_velocity(e){const t=u.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,e);return F.__wrap(t)}}const ks=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawcontactpair_free(i>>>0));class ua{static __wrap(e){e=e>>>0;const t=Object.create(ua.prototype);return t.__wbg_ptr=e,ks.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ks.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawcontactpair_free(e)}collider1(){return u.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return u.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return u.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(e){const t=u.rawcontactpair_contactManifold(this.__wbg_ptr,e);return t===0?void 0:ha.__wrap(t)}}const Zc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawdebugrenderpipeline_free(i>>>0));class Qc{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Zc.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawdebugrenderpipeline_free(e)}constructor(){const e=u.rawdebugrenderpipeline_new();return this.__wbg_ptr=e>>>0,this}vertices(){const e=u.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return oa(e)}colors(){const e=u.rawdebugrenderpipeline_colors(this.__wbg_ptr);return oa(e)}render(e,t,r,n,a){A(e,at),A(t,et),A(r,or),A(n,cr),A(a,Mr),u.rawdebugrenderpipeline_render(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr)}}const Ws=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawdeserializedworld_free(i>>>0));class da{static __wrap(e){e=e>>>0;const t=Object.create(da.prototype);return t.__wbg_ptr=e,Ws.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ws.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawdeserializedworld_free(e)}takeGravity(){const e=u.rawdeserializedworld_takeGravity(this.__wbg_ptr);return e===0?void 0:F.__wrap(e)}takeIntegrationParameters(){const e=u.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return e===0?void 0:Nr.__wrap(e)}takeIslandManager(){const e=u.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return e===0?void 0:lr.__wrap(e)}takeBroadPhase(){const e=u.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return e===0?void 0:Ir.__wrap(e)}takeNarrowPhase(){const e=u.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return e===0?void 0:Mr.__wrap(e)}takeBodies(){const e=u.rawdeserializedworld_takeBodies(this.__wbg_ptr);return e===0?void 0:at.__wrap(e)}takeColliders(){const e=u.rawdeserializedworld_takeColliders(this.__wbg_ptr);return e===0?void 0:et.__wrap(e)}takeImpulseJoints(){const e=u.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return e===0?void 0:or.__wrap(e)}takeMultibodyJoints(){const e=u.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return e===0?void 0:cr.__wrap(e)}}const $c=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_raweventqueue_free(i>>>0));class Vs{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,$c.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_raweventqueue_free(e)}constructor(e){const t=u.raweventqueue_new(e);return this.__wbg_ptr=t>>>0,this}drainCollisionEvents(e){try{u.raweventqueue_drainCollisionEvents(this.__wbg_ptr,$e(e))}finally{Be[qe++]=void 0}}drainContactForceEvents(e){try{u.raweventqueue_drainContactForceEvents(this.__wbg_ptr,$e(e))}finally{Be[qe++]=void 0}}clear(){u.raweventqueue_clear(this.__wbg_ptr)}}const js=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawgenericjoint_free(i>>>0));class Rt{static __wrap(e){e=e>>>0;const t=Object.create(Rt.prototype);return t.__wbg_ptr=e,js.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,js.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawgenericjoint_free(e)}static spring(e,t,r,n,a){A(n,F),A(a,F);const o=u.rawgenericjoint_spring(e,t,r,n.__wbg_ptr,a.__wbg_ptr);return Rt.__wrap(o)}static rope(e,t,r){A(t,F),A(r,F);const n=u.rawgenericjoint_rope(e,t.__wbg_ptr,r.__wbg_ptr);return Rt.__wrap(n)}static prismatic(e,t,r,n,a,o){A(e,F),A(t,F),A(r,F);const s=u.rawgenericjoint_prismatic(e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n,a,o);return s===0?void 0:Rt.__wrap(s)}static fixed(e,t,r,n){A(e,F),A(t,He),A(r,F),A(n,He);const a=u.rawgenericjoint_fixed(e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr);return Rt.__wrap(a)}static revolute(e,t){A(e,F),A(t,F);const r=u.rawgenericjoint_revolute(e.__wbg_ptr,t.__wbg_ptr);return r===0?void 0:Rt.__wrap(r)}}const Xs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawimpulsejointset_free(i>>>0));class or{static __wrap(e){e=e>>>0;const t=Object.create(or.prototype);return t.__wbg_ptr=e,Xs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Xs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawimpulsejointset_free(e)}jointType(e){return u.rawimpulsejointset_jointType(this.__wbg_ptr,e)}jointBodyHandle1(e){return u.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,e)}jointBodyHandle2(e){return u.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,e)}jointFrameX1(e){const t=u.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,e);return He.__wrap(t)}jointFrameX2(e){const t=u.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,e);return He.__wrap(t)}jointAnchor1(e){const t=u.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,e);return F.__wrap(t)}jointAnchor2(e){const t=u.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,e);return F.__wrap(t)}jointSetAnchor1(e,t){A(t,F),u.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,e,t.__wbg_ptr)}jointSetAnchor2(e,t){A(t,F),u.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,e,t.__wbg_ptr)}jointContactsEnabled(e){return u.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){u.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return u.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return u.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return u.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,e,t)}jointSetLimits(e,t,r,n){u.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,e,t,r,n)}jointConfigureMotorModel(e,t,r){u.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,e,t,r)}jointConfigureMotorVelocity(e,t,r,n){u.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,e,t,r,n)}jointConfigureMotorPosition(e,t,r,n,a){u.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,e,t,r,n,a)}jointConfigureMotor(e,t,r,n,a,o){u.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,e,t,r,n,a,o)}constructor(){const e=u.rawimpulsejointset_new();return this.__wbg_ptr=e>>>0,this}createJoint(e,t,r,n){return A(e,Rt),u.rawimpulsejointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,r,n)}remove(e,t){u.rawimpulsejointset_remove(this.__wbg_ptr,e,t)}len(){return u.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(e){return u.rawimpulsejointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{u.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,$e(e))}finally{Be[qe++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{u.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,$e(t))}finally{Be[qe++]=void 0}}}const qs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawintegrationparameters_free(i>>>0));class Nr{static __wrap(e){e=e>>>0;const t=Object.create(Nr.prototype);return t.__wbg_ptr=e,qs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,qs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawintegrationparameters_free(e)}constructor(){const e=u.rawintegrationparameters_new();return this.__wbg_ptr=e>>>0,this}get dt(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return u.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return u.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}get normalizedPredictionDistance(){return u.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numSolverIterations(){return u.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numAdditionalFrictionIterations(){return u.rawintegrationparameters_numAdditionalFrictionIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return u.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr)>>>0}get minIslandSize(){return u.rawimpulsejointset_len(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return u.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return u.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}set dt(e){u.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}set contact_natural_frequency(e){u.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,e)}set normalizedAllowedLinearError(e){u.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,e)}set normalizedPredictionDistance(e){u.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,e)}set numSolverIterations(e){u.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,e)}set numAdditionalFrictionIterations(e){u.rawintegrationparameters_set_numAdditionalFrictionIterations(this.__wbg_ptr,e)}set numInternalPgsIterations(e){u.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr,e)}set minIslandSize(e){u.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,e)}set maxCcdSubsteps(e){u.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,e)}set lengthUnit(e){u.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,e)}switchToStandardPgsSolver(){u.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolver(){u.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolverWithoutWarmstart(){u.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr)}}const Ys=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawislandmanager_free(i>>>0));class lr{static __wrap(e){e=e>>>0;const t=Object.create(lr.prototype);return t.__wbg_ptr=e,Ys.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ys.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawislandmanager_free(e)}constructor(){const e=u.rawislandmanager_new();return this.__wbg_ptr=e>>>0,this}forEachActiveRigidBodyHandle(e){try{u.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,$e(e))}finally{Be[qe++]=void 0}}}const eh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawkinematiccharactercontroller_free(i>>>0));class th{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,eh.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawkinematiccharactercontroller_free(e)}constructor(e){const t=u.rawkinematiccharactercontroller_new(e);return this.__wbg_ptr=t>>>0,this}up(){const e=u.rawcollidershapecasthit_normal2(this.__wbg_ptr);return F.__wrap(e)}setUp(e){A(e,F),u.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,e.__wbg_ptr)}normalNudgeFactor(){return u.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(e){u.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,e)}offset(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}setOffset(e){u.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,e)}slideEnabled(){return u.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(e){u.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,e)}autostepMaxHeight(){try{const r=u.__wbindgen_add_to_stack_pointer(-16);u.rawkinematiccharactercontroller_autostepMaxHeight(r,this.__wbg_ptr);var e=Ye()[r/4+0],t=yr()[r/4+1];return e===0?void 0:t}finally{u.__wbindgen_add_to_stack_pointer(16)}}autostepMinWidth(){try{const r=u.__wbindgen_add_to_stack_pointer(-16);u.rawkinematiccharactercontroller_autostepMinWidth(r,this.__wbg_ptr);var e=Ye()[r/4+0],t=yr()[r/4+1];return e===0?void 0:t}finally{u.__wbindgen_add_to_stack_pointer(16)}}autostepIncludesDynamicBodies(){const e=u.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return u.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(e,t,r){u.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,e,t,r)}disableAutostep(){u.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return u.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}setMaxSlopeClimbAngle(e){u.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,e)}minSlopeSlideAngle(){return u.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(e){u.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,e)}snapToGroundDistance(){try{const r=u.__wbindgen_add_to_stack_pointer(-16);u.rawkinematiccharactercontroller_snapToGroundDistance(r,this.__wbg_ptr);var e=Ye()[r/4+0],t=yr()[r/4+1];return e===0?void 0:t}finally{u.__wbindgen_add_to_stack_pointer(16)}}enableSnapToGround(e){u.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,e)}disableSnapToGround(){u.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return u.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(e,t,r,n,a,o,s,l,c,h,_){try{A(t,at),A(r,et),A(n,$s),A(o,F),u.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,o.__wbg_ptr,s,!fe(l),fe(l)?0:l,c,!fe(h),fe(h)?0:h,$e(_))}finally{Be[qe++]=void 0}}computedMovement(){const e=u.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return F.__wrap(e)}computedGrounded(){return u.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return u.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(e,t){return A(t,zs),u.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,e,t.__wbg_ptr)!==0}}const Ks=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawmultibodyjointset_free(i>>>0));class cr{static __wrap(e){e=e>>>0;const t=Object.create(cr.prototype);return t.__wbg_ptr=e,Ks.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ks.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawmultibodyjointset_free(e)}jointType(e){return u.rawmultibodyjointset_jointType(this.__wbg_ptr,e)}jointFrameX1(e){const t=u.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,e);return He.__wrap(t)}jointFrameX2(e){const t=u.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,e);return He.__wrap(t)}jointAnchor1(e){const t=u.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,e);return F.__wrap(t)}jointAnchor2(e){const t=u.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,e);return F.__wrap(t)}jointContactsEnabled(e){return u.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){u.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return u.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return u.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return u.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,e,t)}constructor(){const e=u.rawmultibodyjointset_new();return this.__wbg_ptr=e>>>0,this}createJoint(e,t,r,n){return A(e,Rt),u.rawmultibodyjointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,r,n)}remove(e,t){u.rawmultibodyjointset_remove(this.__wbg_ptr,e,t)}contains(e){return u.rawmultibodyjointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{u.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,$e(e))}finally{Be[qe++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{u.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,$e(t))}finally{Be[qe++]=void 0}}}const Js=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawnarrowphase_free(i>>>0));class Mr{static __wrap(e){e=e>>>0;const t=Object.create(Mr.prototype);return t.__wbg_ptr=e,Js.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Js.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawnarrowphase_free(e)}constructor(){const e=u.rawnarrowphase_new();return this.__wbg_ptr=e>>>0,this}contact_pairs_with(e,t){u.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,e,si(t))}contact_pair(e,t){const r=u.rawnarrowphase_contact_pair(this.__wbg_ptr,e,t);return r===0?void 0:ua.__wrap(r)}intersection_pairs_with(e,t){u.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,e,si(t))}intersection_pair(e,t){return u.rawnarrowphase_intersection_pair(this.__wbg_ptr,e,t)!==0}}const rh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawphysicspipeline_free(i>>>0));class ih{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,rh.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawphysicspipeline_free(e)}constructor(){const e=u.rawphysicspipeline_new();return this.__wbg_ptr=e>>>0,this}step(e,t,r,n,a,o,s,l,c,h){A(e,F),A(t,Nr),A(r,lr),A(n,Ir),A(a,Mr),A(o,at),A(s,et),A(l,or),A(c,cr),A(h,ca),u.rawphysicspipeline_step(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr)}stepWithEvents(e,t,r,n,a,o,s,l,c,h,_,p,f,w){A(e,F),A(t,Nr),A(r,lr),A(n,Ir),A(a,Mr),A(o,at),A(s,et),A(l,or),A(c,cr),A(h,ca),A(_,Vs),u.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,_.__wbg_ptr,si(p),si(f),si(w))}}const Zs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawpointcolliderprojection_free(i>>>0));class fn{static __wrap(e){e=e>>>0;const t=Object.create(fn.prototype);return t.__wbg_ptr=e,Zs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Zs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawpointcolliderprojection_free(e)}colliderHandle(){return u.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const e=u.rawpointcolliderprojection_point(this.__wbg_ptr);return F.__wrap(e)}isInside(){return u.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return u.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const r=u.__wbindgen_add_to_stack_pointer(-16);u.rawpointcolliderprojection_featureId(r,this.__wbg_ptr);var e=Ye()[r/4+0],t=Ye()[r/4+1];return e===0?void 0:t>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}}const Qs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawpointprojection_free(i>>>0));class mn{static __wrap(e){e=e>>>0;const t=Object.create(mn.prototype);return t.__wbg_ptr=e,Qs.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Qs.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawpointprojection_free(e)}point(){const e=u.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(e)}isInside(){return u.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const nh=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawquerypipeline_free(i>>>0));class $s{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,nh.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawquerypipeline_free(e)}constructor(){const e=u.rawquerypipeline_new();return this.__wbg_ptr=e>>>0,this}update(e){A(e,et),u.rawquerypipeline_update(this.__wbg_ptr,e.__wbg_ptr)}castRay(e,t,r,n,a,o,s,l,c,h,_){try{A(e,at),A(t,et),A(r,F),A(n,F);const p=u.rawquerypipeline_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,o,s,!fe(l),fe(l)?0:l,!fe(c),fe(c)?0:c,!fe(h),fe(h)?0:h,$e(_));return p===0?void 0:pa.__wrap(p)}finally{Be[qe++]=void 0}}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h,_){try{A(e,at),A(t,et),A(r,F),A(n,F);const p=u.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,o,s,!fe(l),fe(l)?0:l,!fe(c),fe(c)?0:c,!fe(h),fe(h)?0:h,$e(_));return p===0?void 0:_a.__wrap(p)}finally{Be[qe++]=void 0}}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,_,p){try{A(e,at),A(t,et),A(r,F),A(n,F),u.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,o,$e(s),l,!fe(c),fe(c)?0:c,!fe(h),fe(h)?0:h,!fe(_),fe(_)?0:_,$e(p))}finally{Be[qe++]=void 0,Be[qe++]=void 0}}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){try{const f=u.__wbindgen_add_to_stack_pointer(-16);A(e,at),A(t,et),A(r,F),A(n,He),A(a,Ae),u.rawquerypipeline_intersectionWithShape(f,this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o,!fe(s),fe(s)?0:s,!fe(l),fe(l)?0:l,!fe(c),fe(c)?0:c,$e(h));var _=Ye()[f/4+0],p=la()[f/8+1];return _===0?void 0:p}finally{u.__wbindgen_add_to_stack_pointer(16),Be[qe++]=void 0}}projectPoint(e,t,r,n,a,o,s,l,c){try{A(e,at),A(t,et),A(r,F);const h=u.rawquerypipeline_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n,a,!fe(o),fe(o)?0:o,!fe(s),fe(s)?0:s,!fe(l),fe(l)?0:l,$e(c));return h===0?void 0:fn.__wrap(h)}finally{Be[qe++]=void 0}}projectPointAndGetFeature(e,t,r,n,a,o,s,l){try{A(e,at),A(t,et),A(r,F);const c=u.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n,!fe(a),fe(a)?0:a,!fe(o),fe(o)?0:o,!fe(s),fe(s)?0:s,$e(l));return c===0?void 0:fn.__wrap(c)}finally{Be[qe++]=void 0}}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){try{A(e,at),A(t,et),A(r,F),u.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,$e(n),a,!fe(o),fe(o)?0:o,!fe(s),fe(s)?0:s,!fe(l),fe(l)?0:l,$e(c))}finally{Be[qe++]=void 0,Be[qe++]=void 0}}castShape(e,t,r,n,a,o,s,l,c,h,_,p,f,w){try{A(e,at),A(t,et),A(r,F),A(n,He),A(a,F),A(o,Ae);const g=u.rawquerypipeline_castShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s,l,c,h,!fe(_),fe(_)?0:_,!fe(p),fe(p)?0:p,!fe(f),fe(f)?0:f,$e(w));return g===0?void 0:_n.__wrap(g)}finally{Be[qe++]=void 0}}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,_){try{A(e,at),A(t,et),A(r,F),A(n,He),A(a,Ae),u.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,$e(o),s,!fe(l),fe(l)?0:l,!fe(c),fe(c)?0:c,!fe(h),fe(h)?0:h,$e(_))}finally{Be[qe++]=void 0,Be[qe++]=void 0}}collidersWithAabbIntersectingAabb(e,t,r){try{A(e,F),A(t,F),u.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,$e(r))}finally{Be[qe++]=void 0}}}const eo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawraycolliderhit_free(i>>>0));class pa{static __wrap(e){e=e>>>0;const t=Object.create(pa.prototype);return t.__wbg_ptr=e,eo.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,eo.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawraycolliderhit_free(e)}colliderHandle(){return u.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr)}timeOfImpact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const to=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawraycolliderintersection_free(i>>>0));class _a{static __wrap(e){e=e>>>0;const t=Object.create(_a.prototype);return t.__wbg_ptr=e,to.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,to.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawraycolliderintersection_free(e)}colliderHandle(){return u.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const e=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(e)}time_of_impact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return u.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const r=u.__wbindgen_add_to_stack_pointer(-16);u.rawpointcolliderprojection_featureId(r,this.__wbg_ptr);var e=Ye()[r/4+0],t=Ye()[r/4+1];return e===0?void 0:t>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}}const ro=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawrayintersection_free(i>>>0));class gn{static __wrap(e){e=e>>>0;const t=Object.create(gn.prototype);return t.__wbg_ptr=e,ro.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ro.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawrayintersection_free(e)}normal(){const e=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(e)}time_of_impact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return u.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const r=u.__wbindgen_add_to_stack_pointer(-16);u.rawpointcolliderprojection_featureId(r,this.__wbg_ptr);var e=Ye()[r/4+0],t=Ye()[r/4+1];return e===0?void 0:t>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}}const io=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawrigidbodyset_free(i>>>0));class at{static __wrap(e){e=e>>>0;const t=Object.create(at.prototype);return t.__wbg_ptr=e,io.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,io.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawrigidbodyset_free(e)}rbTranslation(e){const t=u.rawrigidbodyset_rbTranslation(this.__wbg_ptr,e);return F.__wrap(t)}rbRotation(e){const t=u.rawrigidbodyset_rbRotation(this.__wbg_ptr,e);return He.__wrap(t)}rbSleep(e){u.rawrigidbodyset_rbSleep(this.__wbg_ptr,e)}rbIsSleeping(e){return u.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,e)!==0}rbIsMoving(e){return u.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,e)!==0}rbNextTranslation(e){const t=u.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,e);return F.__wrap(t)}rbNextRotation(e){const t=u.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,e);return He.__wrap(t)}rbSetTranslation(e,t,r,n){u.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,e,t,r,n)}rbSetRotation(e,t,r){u.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,e,t,r)}rbSetLinvel(e,t,r){A(t,F),u.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,e,t.__wbg_ptr,r)}rbSetAngvel(e,t,r){u.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,e,t,r)}rbSetNextKinematicTranslation(e,t,r){u.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,e,t,r)}rbSetNextKinematicRotation(e,t){u.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,e,t)}rbRecomputeMassPropertiesFromColliders(e,t){A(t,et),u.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,e,t.__wbg_ptr)}rbSetAdditionalMass(e,t,r){u.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,e,t,r)}rbSetAdditionalMassProperties(e,t,r,n,a){A(r,F),u.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,e,t,r.__wbg_ptr,n,a)}rbLinvel(e){const t=u.rawrigidbodyset_rbLinvel(this.__wbg_ptr,e);return F.__wrap(t)}rbAngvel(e){return u.rawrigidbodyset_rbAngvel(this.__wbg_ptr,e)}rbLockTranslations(e,t,r){u.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,e,t,r)}rbSetEnabledTranslations(e,t,r,n){u.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,e,t,r,n)}rbLockRotations(e,t,r){u.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,e,t,r)}rbDominanceGroup(e){return u.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,e)}rbSetDominanceGroup(e,t){u.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,e,t)}rbEnableCcd(e,t){u.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,e,t)}rbSetSoftCcdPrediction(e,t){u.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,e,t)}rbMass(e){return u.rawrigidbodyset_rbMass(this.__wbg_ptr,e)}rbInvMass(e){return u.rawrigidbodyset_rbInvMass(this.__wbg_ptr,e)}rbEffectiveInvMass(e){const t=u.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,e);return F.__wrap(t)}rbLocalCom(e){const t=u.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,e);return F.__wrap(t)}rbWorldCom(e){const t=u.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,e);return F.__wrap(t)}rbInvPrincipalInertiaSqrt(e){return u.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr,e)}rbPrincipalInertia(e){return u.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,e)}rbEffectiveWorldInvInertiaSqrt(e){return u.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr,e)}rbEffectiveAngularInertia(e){return u.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,e)}rbWakeUp(e){u.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,e)}rbIsCcdEnabled(e){return u.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,e)!==0}rbSoftCcdPrediction(e){return u.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,e)}rbNumColliders(e){return u.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,e)>>>0}rbCollider(e,t){return u.rawrigidbodyset_rbCollider(this.__wbg_ptr,e,t)}rbBodyType(e){return u.rawrigidbodyset_rbBodyType(this.__wbg_ptr,e)}rbSetBodyType(e,t,r){u.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,e,t,r)}rbIsFixed(e){return u.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,e)!==0}rbIsKinematic(e){return u.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,e)!==0}rbIsDynamic(e){return u.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,e)!==0}rbLinearDamping(e){return u.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,e)}rbAngularDamping(e){return u.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,e)}rbSetLinearDamping(e,t){u.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,e,t)}rbSetAngularDamping(e,t){u.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,e,t)}rbSetEnabled(e,t){u.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,e,t)}rbIsEnabled(e){return u.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,e)!==0}rbGravityScale(e){return u.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,e)}rbSetGravityScale(e,t,r){u.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,e,t,r)}rbResetForces(e,t){u.rawrigidbodyset_rbResetForces(this.__wbg_ptr,e,t)}rbResetTorques(e,t){u.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,e,t)}rbAddForce(e,t,r){A(t,F),u.rawrigidbodyset_rbAddForce(this.__wbg_ptr,e,t.__wbg_ptr,r)}rbApplyImpulse(e,t,r){A(t,F),u.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,e,t.__wbg_ptr,r)}rbAddTorque(e,t,r){u.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,e,t,r)}rbApplyTorqueImpulse(e,t,r){u.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,e,t,r)}rbAddForceAtPoint(e,t,r,n){A(t,F),A(r,F),u.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n)}rbApplyImpulseAtPoint(e,t,r,n){A(t,F),A(r,F),u.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n)}rbAdditionalSolverIterations(e){return u.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,e)>>>0}rbSetAdditionalSolverIterations(e,t){u.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,e,t)}rbUserData(e){return u.rawrigidbodyset_rbUserData(this.__wbg_ptr,e)>>>0}rbSetUserData(e,t){u.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,e,t)}rbUserForce(e){const t=u.rawrigidbodyset_rbUserForce(this.__wbg_ptr,e);return F.__wrap(t)}rbUserTorque(e){return u.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,e)}constructor(){const e=u.rawrigidbodyset_new();return this.__wbg_ptr=e>>>0,this}createRigidBody(e,t,r,n,a,o,s,l,c,h,_,p,f,w,g,m,d,T,M,R,E,P){return A(t,F),A(r,He),A(s,F),A(l,F),u.rawrigidbodyset_createRigidBody(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n,a,o,s.__wbg_ptr,l.__wbg_ptr,c,h,_,p,f,w,g,m,d,T,M,R,E,P)}remove(e,t,r,n,a){A(t,lr),A(r,et),A(n,or),A(a,cr),u.rawrigidbodyset_remove(this.__wbg_ptr,e,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr)}len(){return u.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(e){return u.rawrigidbodyset_contains(this.__wbg_ptr,e)!==0}forEachRigidBodyHandle(e){try{u.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,$e(e))}finally{Be[qe++]=void 0}}propagateModifiedBodyPositionsToColliders(e){A(e,et),u.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,e.__wbg_ptr)}}const no=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawrotation_free(i>>>0));class He{static __wrap(e){e=e>>>0;const t=Object.create(He.prototype);return t.__wbg_ptr=e,no.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,no.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawrotation_free(e)}static identity(){const e=u.rawrotation_identity();return He.__wrap(e)}static fromAngle(e){const t=u.rawrotation_fromAngle(e);return He.__wrap(t)}get im(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}get re(){return u.rawrotation_re(this.__wbg_ptr)}get angle(){return u.rawrotation_angle(this.__wbg_ptr)}}const ah=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawserializationpipeline_free(i>>>0));class sh{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ah.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawserializationpipeline_free(e)}constructor(){const e=u.rawserializationpipeline_new();return this.__wbg_ptr=e>>>0,this}serializeAll(e,t,r,n,a,o,s,l,c){A(e,F),A(t,Nr),A(r,lr),A(n,Ir),A(a,Mr),A(o,at),A(s,et),A(l,or),A(c,cr);const h=u.rawserializationpipeline_serializeAll(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr);return oa(h)}deserializeAll(e){const t=u.rawserializationpipeline_deserializeAll(this.__wbg_ptr,si(e));return t===0?void 0:da.__wrap(t)}}const ao=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawshape_free(i>>>0));class Ae{static __wrap(e){e=e>>>0;const t=Object.create(Ae.prototype);return t.__wbg_ptr=e,ao.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ao.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawshape_free(e)}static cuboid(e,t){const r=u.rawshape_cuboid(e,t);return Ae.__wrap(r)}static roundCuboid(e,t,r){const n=u.rawshape_roundCuboid(e,t,r);return Ae.__wrap(n)}static ball(e){const t=u.rawshape_ball(e);return Ae.__wrap(t)}static halfspace(e){A(e,F);const t=u.rawshape_halfspace(e.__wbg_ptr);return Ae.__wrap(t)}static capsule(e,t){const r=u.rawshape_capsule(e,t);return Ae.__wrap(r)}static polyline(e,t){const r=Ur(e,u.__wbindgen_malloc),n=Vt,a=Os(t,u.__wbindgen_malloc),o=Vt,s=u.rawshape_polyline(r,n,a,o);return Ae.__wrap(s)}static trimesh(e,t,r){const n=Ur(e,u.__wbindgen_malloc),a=Vt,o=Os(t,u.__wbindgen_malloc),s=Vt,l=u.rawshape_trimesh(n,a,o,s,r);return Ae.__wrap(l)}static heightfield(e,t){const r=Ur(e,u.__wbindgen_malloc),n=Vt;A(t,F);const a=u.rawshape_heightfield(r,n,t.__wbg_ptr);return Ae.__wrap(a)}static segment(e,t){A(e,F),A(t,F);const r=u.rawshape_segment(e.__wbg_ptr,t.__wbg_ptr);return Ae.__wrap(r)}static triangle(e,t,r){A(e,F),A(t,F),A(r,F);const n=u.rawshape_triangle(e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr);return Ae.__wrap(n)}static roundTriangle(e,t,r,n){A(e,F),A(t,F),A(r,F);const a=u.rawshape_roundTriangle(e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n);return Ae.__wrap(a)}static convexHull(e){const t=Ur(e,u.__wbindgen_malloc),r=Vt,n=u.rawshape_convexHull(t,r);return n===0?void 0:Ae.__wrap(n)}static roundConvexHull(e,t){const r=Ur(e,u.__wbindgen_malloc),n=Vt,a=u.rawshape_roundConvexHull(r,n,t);return a===0?void 0:Ae.__wrap(a)}static convexPolyline(e){const t=Ur(e,u.__wbindgen_malloc),r=Vt,n=u.rawshape_convexPolyline(t,r);return n===0?void 0:Ae.__wrap(n)}static roundConvexPolyline(e,t){const r=Ur(e,u.__wbindgen_malloc),n=Vt,a=u.rawshape_roundConvexPolyline(r,n,t);return a===0?void 0:Ae.__wrap(a)}castShape(e,t,r,n,a,o,s,l,c,h){A(e,F),A(t,He),A(r,F),A(n,Ae),A(a,F),A(o,He),A(s,F);const _=u.rawshape_castShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,s.__wbg_ptr,l,c,h);return _===0?void 0:wn.__wrap(_)}intersectsShape(e,t,r,n,a){return A(e,F),A(t,He),A(r,Ae),A(n,F),A(a,He),u.rawshape_intersectsShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr)!==0}contactShape(e,t,r,n,a,o){A(e,F),A(t,He),A(r,Ae),A(n,F),A(a,He);const s=u.rawshape_contactShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o);return s===0?void 0:Bi.__wrap(s)}containsPoint(e,t,r){return A(e,F),A(t,He),A(r,F),u.rawshape_containsPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr)!==0}projectPoint(e,t,r,n){A(e,F),A(t,He),A(r,F);const a=u.rawshape_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n);return mn.__wrap(a)}intersectsRay(e,t,r,n,a){return A(e,F),A(t,He),A(r,F),A(n,F),u.rawshape_intersectsRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a)!==0}castRay(e,t,r,n,a,o){return A(e,F),A(t,He),A(r,F),A(n,F),u.rawshape_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,o)}castRayAndGetNormal(e,t,r,n,a,o){A(e,F),A(t,He),A(r,F),A(n,F);const s=u.rawshape_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,o);return s===0?void 0:gn.__wrap(s)}}const so=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawshapecasthit_free(i>>>0));class wn{static __wrap(e){e=e>>>0;const t=Object.create(wn.prototype);return t.__wbg_ptr=e,so.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,so.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawshapecasthit_free(e)}time_of_impact(){return u.rawrotation_re(this.__wbg_ptr)}witness1(){const e=u.rawshapecasthit_witness1(this.__wbg_ptr);return F.__wrap(e)}witness2(){const e=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return F.__wrap(e)}normal1(){const e=u.rawcollidershapecasthit_witness2(this.__wbg_ptr);return F.__wrap(e)}normal2(){const e=u.rawcollidershapecasthit_normal1(this.__wbg_ptr);return F.__wrap(e)}}const oo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawshapecontact_free(i>>>0));class Bi{static __wrap(e){e=e>>>0;const t=Object.create(Bi.prototype);return t.__wbg_ptr=e,oo.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,oo.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawshapecontact_free(e)}distance(){return u.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}point1(){const e=u.rawpointprojection_point(this.__wbg_ptr);return F.__wrap(e)}point2(){const e=u.rawpointcolliderprojection_point(this.__wbg_ptr);return F.__wrap(e)}normal1(){const e=u.rawcontactforceevent_total_force(this.__wbg_ptr);return F.__wrap(e)}normal2(){const e=u.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return F.__wrap(e)}}const lo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>u.__wbg_rawvector_free(i>>>0));class F{static __wrap(e){e=e>>>0;const t=Object.create(F.prototype);return t.__wbg_ptr=e,lo.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,lo.unregister(this),e}free(){const e=this.__destroy_into_raw();u.__wbg_rawvector_free(e)}static zero(){const e=u.rawvector_zero();return F.__wrap(e)}constructor(e,t){const r=u.rawvector_new(e,t);return this.__wbg_ptr=r>>>0,this}get x(){return u.rawrotation_re(this.__wbg_ptr)}set x(e){u.rawvector_set_x(this.__wbg_ptr,e)}get y(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}set y(e){u.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}xy(){const e=u.rawvector_xy(this.__wbg_ptr);return F.__wrap(e)}yx(){const e=u.rawvector_yx(this.__wbg_ptr);return F.__wrap(e)}}let co=class{constructor(i,e){this.x=i,this.y=e}};class U{static new(e,t){return new co(e,t)}static zeros(){return U.new(0,0)}static fromRaw(e){if(!e)return null;let t=U.new(e.x,e.y);return e.free(),t}static intoRaw(e){return new F(e.x,e.y)}static copy(e,t){e.x=t.x,e.y=t.y}}class je{static identity(){return 0}static fromRaw(e){if(!e)return null;let t=e.angle;return e.free(),t}static intoRaw(e){return He.fromAngle(e)}}var jt;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(jt||(jt={}));class fa{constructor(e,t,r){this.rawSet=e,this.colliderSet=t,this.handle=r}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,r){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,r)}restrictTranslations(e,t,r){this.setEnabledTranslations(e,e,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(e){this.rawSet.rbSetAdditionalSolverIterations(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}setSoftCcdPrediction(e){this.rawSet.rbSetSoftCcdPrediction(this.handle,e)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let e=this.rawSet.rbTranslation(this.handle);return U.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return je.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return U.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return je.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,t)}setLinvel(e,t){let r=U.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,r,t),r.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e,t)}setAngvel(e,t){this.rawSet.rbSetAngvel(this.handle,e,t)}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e)}linvel(){return U.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return this.rawSet.rbAngvel(this.handle)}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return U.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return U.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return U.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return this.rawSet.rbInvPrincipalInertiaSqrt(this.handle)}principalInertia(){return this.rawSet.rbPrincipalInertia(this.handle)}effectiveWorldInvInertiaSqrt(){return this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle)}effectiveAngularInertia(){return this.rawSet.rbEffectiveAngularInertia(this.handle)}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,r,n){let a=U.intoRaw(t);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,a,r,n),a.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const r=U.intoRaw(e);this.rawSet.rbAddForce(this.handle,r,t),r.free()}applyImpulse(e,t){const r=U.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,r,t),r.free()}addTorque(e,t){this.rawSet.rbAddTorque(this.handle,e,t)}applyTorqueImpulse(e,t){this.rawSet.rbApplyTorqueImpulse(this.handle,e,t)}addForceAtPoint(e,t,r){const n=U.intoRaw(e),a=U.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,n,a,r),n.free(),a.free()}applyImpulseAtPoint(e,t,r){const n=U.intoRaw(e),a=U.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,n,a,r),n.free(),a.free()}userForce(){return U.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return this.rawSet.rbUserTorque(this.handle)}}class tr{constructor(e){this.enabled=!0,this.status=e,this.translation=U.zeros(),this.rotation=je.identity(),this.gravityScale=1,this.linvel=U.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=U.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=0,this.principalAngularInertia=0,this.rotationsEnabled=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new tr(jt.Dynamic)}static kinematicPositionBased(){return new tr(jt.KinematicPositionBased)}static kinematicVelocityBased(){return new tr(jt.KinematicVelocityBased)}static fixed(){return new tr(jt.Fixed)}static newDynamic(){return new tr(jt.Dynamic)}static newKinematicPositionBased(){return new tr(jt.KinematicPositionBased)}static newKinematicVelocityBased(){return new tr(jt.KinematicVelocityBased)}static newStatic(){return new tr(jt.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setAdditionalSolverIterations(e){return this.additionalSolverIterations=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t){if(typeof e!="number"||typeof t!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t},this}setRotation(e){return this.rotation=e,this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t){if(typeof e!="number"||typeof t!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t},this}setAngvel(e){return this.angvel=e,this}setAdditionalMassProperties(e,t,r){return this.mass=e,U.copy(this.centerOfMass,t),this.principalAngularInertia=r,this.massOnly=!1,this}enabledTranslations(e,t){return this.translationsEnabledX=e,this.translationsEnabledY=t,this}restrictTranslations(e,t){return this.enabledTranslations(e,t)}lockTranslations(){return this.restrictTranslations(!1,!1)}lockRotations(){return this.rotationsEnabled=!1,this}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setSoftCcdPrediction(e){return this.softCcdPrediction=e,this}setUserData(e){return this.userData=e,this}}class vn{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let r=this.index(e);for(;this.data.length<=r;)this.data.push(null);this.data[r]==null&&(this.size+=1),this.data[r]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class ho{constructor(e){this.raw=e||new at,this.map=new vn,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new fa(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let r=U.intoRaw(t.translation),n=je.intoRaw(t.rotation),a=U.intoRaw(t.linvel),o=U.intoRaw(t.centerOfMass),s=this.raw.createRigidBody(t.enabled,r,n,t.gravityScale,t.mass,t.massOnly,o,a,t.angvel,t.principalAngularInertia,t.translationsEnabledX,t.translationsEnabledY,t.rotationsEnabled,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.softCcdPrediction,t.ccdEnabled,t.dominanceGroup,t.additionalSolverIterations);r.free(),n.free(),a.free(),o.free();const l=new fa(this.raw,e,s);return l.userData=t.userData,this.map.set(s,l),l}remove(e,t,r,n,a){for(let o=0;o<this.raw.rbNumColliders(e);o+=1)r.unmap(this.raw.rbCollider(e,o));n.forEachJointHandleAttachedToRigidBody(e,o=>n.unmap(o)),a.forEachJointHandleAttachedToRigidBody(e,o=>a.unmap(o)),this.raw.remove(e,t.raw,r.raw,n.raw,a.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(r=>{t(this.get(r))})}getAll(){return this.map.getAll()}}class uo{constructor(e){this.raw=e||new Nr}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numAdditionalFrictionIterations(){return this.raw.numAdditionalFrictionIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set contact_natural_frequency(e){this.raw.contact_natural_frequency=e}set lengthUnit(e){this.raw.lengthUnit=e}set normalizedAllowedLinearError(e){this.raw.normalizedAllowedLinearError=e}set normalizedPredictionDistance(e){this.raw.normalizedPredictionDistance=e}set numSolverIterations(e){this.raw.numSolverIterations=e}set numAdditionalFrictionIterations(e){this.raw.numAdditionalFrictionIterations=e}set numInternalPgsIterations(e){this.raw.numInternalPgsIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}switchToStandardPgsSolver(){this.raw.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.raw.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.raw.switchToSmallStepsPgsSolverWithoutWarmstart()}}var Dt;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring"})(Dt||(Dt={}));var ma;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(ma||(ma={}));var ga;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(ga||(ga={}));class hr{constructor(e,t,r){this.rawSet=e,this.bodySet=t,this.handle=r}static newTyped(e,t,r){switch(e.jointType(r)){case xr.Revolute:return new go(e,t,r);case xr.Prismatic:return new mo(e,t,r);case xr.Fixed:return new po(e,t,r);case xr.Spring:return new fo(e,t,r);case xr.Rope:return new _o(e,t,r);default:return new hr(e,t,r)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}anchor1(){return U.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return U.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=U.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=U.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class wa extends hr{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,r){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,r)}configureMotor(e,t,r,n){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,r,n)}}class po extends hr{}class _o extends hr{}class fo extends hr{}class mo extends wa{rawAxis(){return pn.LinX}}class go extends wa{rawAxis(){return pn.AngX}}class Or{constructor(){}static fixed(e,t,r,n){let a=new Or;return a.anchor1=e,a.anchor2=r,a.frame1=t,a.frame2=n,a.jointType=Dt.Fixed,a}static spring(e,t,r,n,a){let o=new Or;return o.anchor1=n,o.anchor2=a,o.length=e,o.stiffness=t,o.damping=r,o.jointType=Dt.Spring,o}static rope(e,t,r){let n=new Or;return n.anchor1=t,n.anchor2=r,n.length=e,n.jointType=Dt.Rope,n}static revolute(e,t){let r=new Or;return r.anchor1=e,r.anchor2=t,r.jointType=Dt.Revolute,r}static prismatic(e,t,r){let n=new Or;return n.anchor1=e,n.anchor2=t,n.axis=r,n.jointType=Dt.Prismatic,n}intoRaw(){let e=U.intoRaw(this.anchor1),t=U.intoRaw(this.anchor2),r,n,a=!1,o=0,s=0;switch(this.jointType){case Dt.Fixed:let l=je.intoRaw(this.frame1),c=je.intoRaw(this.frame2);n=Rt.fixed(e,l,t,c),l.free(),c.free();break;case Dt.Spring:n=Rt.spring(this.length,this.stiffness,this.damping,e,t);break;case Dt.Rope:n=Rt.rope(this.length,e,t);break;case Dt.Prismatic:r=U.intoRaw(this.axis),this.limitsEnabled&&(a=!0,o=this.limits[0],s=this.limits[1]),n=Rt.prismatic(e,t,r,a,o,s),r.free();break;case Dt.Revolute:n=Rt.revolute(e,t);break}return e.free(),t.free(),n}}class wo{constructor(e){this.raw=e||new or,this.map=new vn,e&&e.forEachJointHandle(t=>{this.map.set(t,hr.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,r,n,a){const o=t.intoRaw(),s=this.raw.createJoint(o,r,n,a);o.free();let l=hr.newTyped(this.raw,e,s);return this.map.set(s,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Fr{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case xr.Revolute:return new yo(e,t);case xr.Prismatic:return new bo(e,t);case xr.Fixed:return new vo(e,t);default:return new Fr(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class va extends Fr{}class vo extends Fr{}class bo extends va{rawAxis(){return pn.LinX}}class yo extends va{rawAxis(){return pn.AngX}}class xo{constructor(e){this.raw=e||new cr,this.map=new vn,e&&e.forEachJointHandle(t=>{this.map.set(t,Fr.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,r,n){const a=e.intoRaw(),o=this.raw.createJoint(a,t,r,n);a.free();let s=Fr.newTyped(this.raw,o);return this.map.set(o,s),s}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var Hi;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(Hi||(Hi={}));class Mo{constructor(e){this.raw=e||new ca}free(){this.raw&&this.raw.free(),this.raw=void 0}}class So{constructor(e){this.raw=e||new lr}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class Eo{constructor(e){this.raw=e||new Ir}free(){this.raw&&this.raw.free(),this.raw=void 0}}class To{constructor(e){this.raw=e||new Mr,this.tempManifold=new Ro(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactPairsWith(e,t){this.raw.contact_pairs_with(e,t)}intersectionPairsWith(e,t){this.raw.intersection_pairs_with(e,t)}contactPair(e,t,r){const n=this.raw.contact_pair(e,t);if(n){const a=n.collider1()!=e;let o;for(o=0;o<n.numContactManifolds();++o)this.tempManifold.raw=n.contactManifold(o),this.tempManifold.raw&&r(this.tempManifold,a),this.tempManifold.free();n.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class Ro{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return U.fromRaw(this.raw.normal())}localNormal1(){return U.fromRaw(this.raw.local_n1())}localNormal2(){return U.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return U.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return U.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulse(e){return this.raw.contact_tangent_impulse(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return U.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return U.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class oi{constructor(e,t,r,n,a){this.distance=e,this.point1=t,this.point2=r,this.normal1=n,this.normal2=a}static fromRaw(e){if(!e)return null;const t=new oi(e.distance(),U.fromRaw(e.point1()),U.fromRaw(e.point2()),U.fromRaw(e.normal1()),U.fromRaw(e.normal2()));return e.free(),t}}var li;(function(i){i[i.Vertex=0]="Vertex",i[i.Face=1]="Face",i[i.Unknown=2]="Unknown"})(li||(li={}));class Gi{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new Gi(U.fromRaw(e.point()),e.isInside());return e.free(),t}}class ki{constructor(e,t,r,n,a){this.featureType=li.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new ki(e.get(t.colliderHandle()),U.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),r}}let oh=class{constructor(i,e){this.origin=i,this.dir=e}pointAt(i){return{x:this.origin.x+this.dir.x*i,y:this.origin.y+this.dir.y*i}}};class Wi{constructor(e,t,r,n){this.featureType=li.Unknown,this.featureId=void 0,this.timeOfImpact=e,this.normal=t,n!==void 0&&(this.featureId=n),r!==void 0&&(this.featureType=r)}static fromRaw(e){if(!e)return null;const t=new Wi(e.time_of_impact(),U.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class Vi{constructor(e,t,r,n,a){this.featureType=li.Unknown,this.featureId=void 0,this.collider=e,this.timeOfImpact=t,this.normal=r,a!==void 0&&(this.featureId=a),n!==void 0&&(this.featureType=n)}static fromRaw(e,t){if(!t)return null;const r=new Vi(e.get(t.colliderHandle()),t.time_of_impact(),U.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),r}}class bn{constructor(e,t){this.collider=e,this.timeOfImpact=t}static fromRaw(e,t){if(!t)return null;const r=new bn(e.get(t.colliderHandle()),t.timeOfImpact());return t.free(),r}}class ci{constructor(e,t,r,n,a){this.time_of_impact=e,this.witness1=t,this.witness2=r,this.normal1=n,this.normal2=a}static fromRaw(e,t){if(!t)return null;const r=new ci(t.time_of_impact(),U.fromRaw(t.witness1()),U.fromRaw(t.witness2()),U.fromRaw(t.normal1()),U.fromRaw(t.normal2()));return t.free(),r}}class ji extends ci{constructor(e,t,r,n,a,o){super(t,r,n,a,o),this.collider=e}static fromRaw(e,t){if(!t)return null;const r=new ji(e.get(t.colliderHandle()),t.time_of_impact(),U.fromRaw(t.witness1()),U.fromRaw(t.witness2()),U.fromRaw(t.normal1()),U.fromRaw(t.normal2()));return t.free(),r}}class xt{static fromRaw(e,t){const r=e.coShapeType(t);let n,a,o,s,l,c,h;switch(r){case Lt.Ball:return new ya(e.coRadius(t));case Lt.Cuboid:return n=e.coHalfExtents(t),new Ma(n.x,n.y);case Lt.RoundCuboid:return n=e.coHalfExtents(t),a=e.coRoundRadius(t),new Sa(n.x,n.y,a);case Lt.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new Ea(l,c);case Lt.Segment:return o=e.coVertices(t),new Ta(U.new(o[0],o[1]),U.new(o[2],o[3]));case Lt.Polyline:return o=e.coVertices(t),s=e.coIndices(t),new Ca(o,s);case Lt.Triangle:return o=e.coVertices(t),new Ra(U.new(o[0],o[1]),U.new(o[2],o[3]),U.new(o[4],o[5]));case Lt.RoundTriangle:return o=e.coVertices(t),a=e.coRoundRadius(t),new Aa(U.new(o[0],o[1]),U.new(o[2],o[3]),U.new(o[4],o[5]),a);case Lt.HalfSpace:return h=U.fromRaw(e.coHalfspaceNormal(t)),new xa(h);case Lt.TriMesh:o=e.coVertices(t),s=e.coIndices(t);const _=e.coTriMeshFlags(t);return new Pa(o,s,_);case Lt.HeightField:const p=e.coHeightfieldScale(t),f=e.coHeightfieldHeights(t);return new La(f,p);case Lt.ConvexPolygon:return o=e.coVertices(t),new yn(o,!1);case Lt.RoundConvexPolygon:return o=e.coVertices(t),a=e.coRoundRadius(t),new xn(o,a,!1);default:throw new Error("unknown shape type: "+r)}}castShape(e,t,r,n,a,o,s,l,c,h){let _=U.intoRaw(e),p=je.intoRaw(t),f=U.intoRaw(r),w=U.intoRaw(a),g=je.intoRaw(o),m=U.intoRaw(s),d=this.intoRaw(),T=n.intoRaw(),M=ci.fromRaw(null,d.castShape(_,p,f,T,w,g,m,l,c,h));return _.free(),p.free(),f.free(),w.free(),g.free(),m.free(),d.free(),T.free(),M}intersectsShape(e,t,r,n,a){let o=U.intoRaw(e),s=je.intoRaw(t),l=U.intoRaw(n),c=je.intoRaw(a),h=this.intoRaw(),_=r.intoRaw(),p=h.intersectsShape(o,s,_,l,c);return o.free(),s.free(),l.free(),c.free(),h.free(),_.free(),p}contactShape(e,t,r,n,a,o){let s=U.intoRaw(e),l=je.intoRaw(t),c=U.intoRaw(n),h=je.intoRaw(a),_=this.intoRaw(),p=r.intoRaw(),f=oi.fromRaw(_.contactShape(s,l,p,c,h,o));return s.free(),l.free(),c.free(),h.free(),_.free(),p.free(),f}containsPoint(e,t,r){let n=U.intoRaw(e),a=je.intoRaw(t),o=U.intoRaw(r),s=this.intoRaw(),l=s.containsPoint(n,a,o);return n.free(),a.free(),o.free(),s.free(),l}projectPoint(e,t,r,n){let a=U.intoRaw(e),o=je.intoRaw(t),s=U.intoRaw(r),l=this.intoRaw(),c=Gi.fromRaw(l.projectPoint(a,o,s,n));return a.free(),o.free(),s.free(),l.free(),c}intersectsRay(e,t,r,n){let a=U.intoRaw(t),o=je.intoRaw(r),s=U.intoRaw(e.origin),l=U.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(a,o,s,l,n);return a.free(),o.free(),s.free(),l.free(),c.free(),h}castRay(e,t,r,n,a){let o=U.intoRaw(t),s=je.intoRaw(r),l=U.intoRaw(e.origin),c=U.intoRaw(e.dir),h=this.intoRaw(),_=h.castRay(o,s,l,c,n,a);return o.free(),s.free(),l.free(),c.free(),h.free(),_}castRayAndGetNormal(e,t,r,n,a){let o=U.intoRaw(t),s=je.intoRaw(r),l=U.intoRaw(e.origin),c=U.intoRaw(e.dir),h=this.intoRaw(),_=Wi.fromRaw(h.castRayAndGetNormal(o,s,l,c,n,a));return o.free(),s.free(),l.free(),c.free(),h.free(),_}}var wt;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolygon=9]="ConvexPolygon",i[i.RoundCuboid=10]="RoundCuboid",i[i.RoundTriangle=11]="RoundTriangle",i[i.RoundConvexPolygon=12]="RoundConvexPolygon",i[i.HalfSpace=13]="HalfSpace"})(wt||(wt={}));var ba;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=152]="FIX_INTERNAL_EDGES"})(ba||(ba={}));class ya extends xt{constructor(e){super(),this.type=wt.Ball,this.radius=e}intoRaw(){return Ae.ball(this.radius)}}class xa extends xt{constructor(e){super(),this.type=wt.HalfSpace,this.normal=e}intoRaw(){let e=U.intoRaw(this.normal),t=Ae.halfspace(e);return e.free(),t}}class Ma extends xt{constructor(e,t){super(),this.type=wt.Cuboid,this.halfExtents=U.new(e,t)}intoRaw(){return Ae.cuboid(this.halfExtents.x,this.halfExtents.y)}}class Sa extends xt{constructor(e,t,r){super(),this.type=wt.RoundCuboid,this.halfExtents=U.new(e,t),this.borderRadius=r}intoRaw(){return Ae.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.borderRadius)}}class Ea extends xt{constructor(e,t){super(),this.type=wt.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Ae.capsule(this.halfHeight,this.radius)}}class Ta extends xt{constructor(e,t){super(),this.type=wt.Segment,this.a=e,this.b=t}intoRaw(){let e=U.intoRaw(this.a),t=U.intoRaw(this.b),r=Ae.segment(e,t);return e.free(),t.free(),r}}let Ra=class extends xt{constructor(i,e,t){super(),this.type=wt.Triangle,this.a=i,this.b=e,this.c=t}intoRaw(){let i=U.intoRaw(this.a),e=U.intoRaw(this.b),t=U.intoRaw(this.c),r=Ae.triangle(i,e,t);return i.free(),e.free(),t.free(),r}};class Aa extends xt{constructor(e,t,r,n){super(),this.type=wt.RoundTriangle,this.a=e,this.b=t,this.c=r,this.borderRadius=n}intoRaw(){let e=U.intoRaw(this.a),t=U.intoRaw(this.b),r=U.intoRaw(this.c),n=Ae.roundTriangle(e,t,r,this.borderRadius);return e.free(),t.free(),r.free(),n}}class Ca extends xt{constructor(e,t){super(),this.type=wt.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return Ae.polyline(this.vertices,this.indices)}}class Pa extends xt{constructor(e,t,r){super(),this.type=wt.TriMesh,this.vertices=e,this.indices=t,this.flags=r}intoRaw(){return Ae.trimesh(this.vertices,this.indices,this.flags)}}class yn extends xt{constructor(e,t){super(),this.type=wt.ConvexPolygon,this.vertices=e,this.skipConvexHullComputation=!!t}intoRaw(){return this.skipConvexHullComputation?Ae.convexPolyline(this.vertices):Ae.convexHull(this.vertices)}}class xn extends xt{constructor(e,t,r){super(),this.type=wt.RoundConvexPolygon,this.vertices=e,this.borderRadius=t,this.skipConvexHullComputation=!!r}intoRaw(){return this.skipConvexHullComputation?Ae.roundConvexPolyline(this.vertices,this.borderRadius):Ae.roundConvexHull(this.vertices,this.borderRadius)}}class La extends xt{constructor(e,t){super(),this.type=wt.HeightField,this.heights=e,this.scale=t}intoRaw(){let e=U.intoRaw(this.scale),t=Ae.heightfield(this.heights,e);return e.free(),t}}class Ao{constructor(e){this.raw=e||new ih}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,r,n,a,o,s,l,c,h,_,p){let f=U.intoRaw(e);_?this.raw.stepWithEvents(f,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw,_.raw,p,p?p.filterContactPair:null,p?p.filterIntersectionPair:null):this.raw.step(f,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw,h.raw),f.free()}}var Da;(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(Da||(Da={}));class Co{constructor(e){this.raw=e||new $s}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e){this.raw.update(e.raw)}castRay(e,t,r,n,a,o,s,l,c,h){let _=U.intoRaw(r.origin),p=U.intoRaw(r.dir),f=bn.fromRaw(t,this.raw.castRay(e.raw,t.raw,_,p,n,a,o,s,l,c,h));return _.free(),p.free(),f}castRayAndGetNormal(e,t,r,n,a,o,s,l,c,h){let _=U.intoRaw(r.origin),p=U.intoRaw(r.dir),f=Vi.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,_,p,n,a,o,s,l,c,h));return _.free(),p.free(),f}intersectionsWithRay(e,t,r,n,a,o,s,l,c,h,_){let p=U.intoRaw(r.origin),f=U.intoRaw(r.dir),w=g=>o(Vi.fromRaw(t,g));this.raw.intersectionsWithRay(e.raw,t.raw,p,f,n,a,w,s,l,c,h,_),p.free(),f.free()}intersectionWithShape(e,t,r,n,a,o,s,l,c,h){let _=U.intoRaw(r),p=je.intoRaw(n),f=a.intoRaw(),w=this.raw.intersectionWithShape(e.raw,t.raw,_,p,f,o,s,l,c,h);return _.free(),p.free(),f.free(),w}projectPoint(e,t,r,n,a,o,s,l,c){let h=U.intoRaw(r),_=ki.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,n,a,o,s,l,c));return h.free(),_}projectPointAndGetFeature(e,t,r,n,a,o,s,l){let c=U.intoRaw(r),h=ki.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,n,a,o,s,l));return c.free(),h}intersectionsWithPoint(e,t,r,n,a,o,s,l,c){let h=U.intoRaw(r);this.raw.intersectionsWithPoint(e.raw,t.raw,h,n,a,o,s,l,c),h.free()}castShape(e,t,r,n,a,o,s,l,c,h,_,p,f,w){let g=U.intoRaw(r),m=je.intoRaw(n),d=U.intoRaw(a),T=o.intoRaw(),M=ji.fromRaw(t,this.raw.castShape(e.raw,t.raw,g,m,d,T,s,l,c,h,_,p,f,w));return g.free(),m.free(),d.free(),T.free(),M}intersectionsWithShape(e,t,r,n,a,o,s,l,c,h,_){let p=U.intoRaw(r),f=je.intoRaw(n),w=a.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,p,f,w,o,s,l,c,h,_),p.free(),f.free(),w.free()}collidersWithAabbIntersectingAabb(e,t,r){let n=U.intoRaw(e),a=U.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(n,a,r),n.free(),a.free()}}class Ua{constructor(e){this.raw=e||new sh}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,r,n,a,o,s,l,c){let h=U.intoRaw(e);const _=this.raw.serializeAll(h,t.raw,r.raw,n.raw,a.raw,o.raw,s.raw,l.raw,c.raw);return h.free(),_}deserializeAll(e){return Mn.fromRaw(this.raw.deserializeAll(e))}}class Po{constructor(e,t){this.vertices=e,this.colors=t}}class Lo{constructor(e){this.raw=e||new Qc}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,r,n,a){this.raw.render(e.raw,t.raw,r.raw,n.raw,a.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Do{}class Uo{constructor(e,t,r,n,a){this.params=t,this.bodies=r,this.colliders=n,this.queries=a,this.raw=new th(e),this.rawCharacterCollision=new zs,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=U.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(e){this.raw.setNormalNudgeFactor(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,r){this.raw.enableAutostep(e,t,r)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,r,n,a){let o=U.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,o,this._applyImpulsesToDynamicBodies,this._characterMass,r,n,this.colliders.castClosure(a)),o.free()}computedMovement(){return U.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let r=this.rawCharacterCollision;return t=t??new Do,t.translationDeltaApplied=U.fromRaw(r.translationDeltaApplied()),t.translationDeltaRemaining=U.fromRaw(r.translationDeltaRemaining()),t.toi=r.toi(),t.witness1=U.fromRaw(r.worldWitness1()),t.witness2=U.fromRaw(r.worldWitness2()),t.normal1=U.fromRaw(r.worldNormal1()),t.normal2=U.fromRaw(r.worldNormal2()),t.collider=this.colliders.get(r.handle()),t}else return null}}class Mn{constructor(e,t,r,n,a,o,s,l,c,h,_,p,f,w){this.gravity=e,this.integrationParameters=new uo(t),this.islands=new So(r),this.broadPhase=new Eo(n),this.narrowPhase=new To(a),this.bodies=new ho(o),this.colliders=new No(s),this.impulseJoints=new wo(l),this.multibodyJoints=new xo(c),this.ccdSolver=new Mo(h),this.queryPipeline=new Co(_),this.physicsPipeline=new Ao(p),this.serializationPipeline=new Ua(f),this.debugRenderPipeline=new Lo(w),this.characterControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0}static fromRaw(e){return e?new Mn(U.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new Ua().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new Po(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(e){this.integrationParameters.lengthUnit=e}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(e){this.integrationParameters.numSolverIterations=e}get numAdditionalFrictionIterations(){return this.integrationParameters.numAdditionalFrictionIterations}set numAdditionalFrictionIterations(e){this.integrationParameters.numAdditionalFrictionIterations=e}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(e){this.integrationParameters.numInternalPgsIterations=e}switchToStandardPgsSolver(){this.integrationParameters.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.integrationParameters.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart()}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new Uo(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createCollider(e,t){let r=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,r)}createImpulseJoint(e,t,r,n){return this.impulseJoints.createJoint(this.bodies,e,t.handle,r.handle,n)}createMultibodyJoint(e,t,r,n){return this.multibodyJoints.createJoint(e,t.handle,r.handle,n)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,r,n,a,o,s,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,r,n,a,o,s,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,r,n,a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,r,n,a,o,s,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,r,n,a,o?o.handle:null,s?s.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,r,n,a,o,s){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}projectPointAndGetFeature(e,t,r,n,a,o){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,r,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(o))}intersectionsWithPoint(e,t,r,n,a,o,s){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(s))}castShape(e,t,r,n,a,o,s,l,c,h,_,p){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,r,n,a,o,s,l,c,h?h.handle:null,_?_.handle:null,this.colliders.castClosure(p))}intersectionsWithShape(e,t,r,n,a,o,s,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,r,this.colliders.castClosure(n),a,o,s?s.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,r){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(r))}contactPairsWith(e,t){this.narrowPhase.contactPairsWith(e.handle,this.colliders.castClosure(t))}intersectionPairsWith(e,t){this.narrowPhase.intersectionPairsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,r){this.narrowPhase.contactPair(e.handle,t.handle,r)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}}var Sn;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Sn||(Sn={}));class Io{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return U.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return U.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class lh{constructor(e,t){this.raw=t||new Vs(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new Io;this.raw.drainContactForceEvents(r=>{t.raw=r,e(t),t.free()})}clear(){this.raw.clear()}}var En;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(En||(En={}));var Ia;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(Ia||(Ia={}));var Tn;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Tn||(Tn={}));class Na{constructor(e,t,r,n){this.colliderSet=e,this.handle=t,this._parent=r,this._shape=n}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=xt.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return U.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return je.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(e){return this.colliderSet.raw.coSetContactSkin(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,r){let n=U.intoRaw(t);this.colliderSet.raw.coSetMassProperties(this.handle,e,n,r),n.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return U.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=U.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return U.fromRaw(e)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=U.intoRaw(e),r=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),r}projectPoint(e,t){let r=U.intoRaw(e),n=Gi.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,r,t));return r.free(),n}intersectsRay(e,t){let r=U.intoRaw(e.origin),n=U.intoRaw(e.dir),a=this.colliderSet.raw.coIntersectsRay(this.handle,r,n,t);return r.free(),n.free(),a}castShape(e,t,r,n,a,o,s,l){let c=U.intoRaw(e),h=U.intoRaw(r),_=je.intoRaw(n),p=U.intoRaw(a),f=t.intoRaw(),w=ci.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,c,f,h,_,p,o,s,l));return c.free(),h.free(),_.free(),p.free(),f.free(),w}castCollider(e,t,r,n,a,o){let s=U.intoRaw(e),l=U.intoRaw(r),c=ji.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,s,t.handle,l,n,a,o));return s.free(),l.free(),c}intersectsShape(e,t,r){let n=U.intoRaw(t),a=je.intoRaw(r),o=e.intoRaw(),s=this.colliderSet.raw.coIntersectsShape(this.handle,o,n,a);return n.free(),a.free(),o.free(),s}contactShape(e,t,r,n){let a=U.intoRaw(t),o=je.intoRaw(r),s=e.intoRaw(),l=oi.fromRaw(this.colliderSet.raw.coContactShape(this.handle,s,a,o,n));return a.free(),o.free(),s.free(),l}contactCollider(e,t){return oi.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,r){let n=U.intoRaw(e.origin),a=U.intoRaw(e.dir),o=this.colliderSet.raw.coCastRay(this.handle,n,a,t,r);return n.free(),a.free(),o}castRayAndGetNormal(e,t,r){let n=U.intoRaw(e.origin),a=U.intoRaw(e.dir),o=Wi.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,n,a,t,r));return n.free(),a.free(),o}}var zr;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(zr||(zr={}));class _t{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=zr.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=je.identity(),this.translation=U.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Hi.Average,this.restitutionCombineRule=Hi.Average,this.activeCollisionTypes=Tn.DEFAULT,this.activeEvents=Sn.NONE,this.activeHooks=En.NONE,this.mass=0,this.centerOfMass=U.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=0,this.rotationsEnabled=!0}static ball(e){const t=new ya(e);return new _t(t)}static capsule(e,t){const r=new Ea(e,t);return new _t(r)}static segment(e,t){const r=new Ta(e,t);return new _t(r)}static triangle(e,t,r){const n=new Ra(e,t,r);return new _t(n)}static roundTriangle(e,t,r,n){const a=new Aa(e,t,r,n);return new _t(a)}static polyline(e,t){const r=new Ca(e,t);return new _t(r)}static trimesh(e,t,r){const n=new Pa(e,t,r);return new _t(n)}static cuboid(e,t){const r=new Ma(e,t);return new _t(r)}static roundCuboid(e,t,r){const n=new Sa(e,t,r);return new _t(n)}static halfspace(e){const t=new xa(e);return new _t(t)}static heightfield(e,t){const r=new La(e,t);return new _t(r)}static convexHull(e){const t=new yn(e,!1);return new _t(t)}static convexPolyline(e){const t=new yn(e,!0);return new _t(t)}static roundConvexHull(e,t){const r=new xn(e,t,!1);return new _t(r)}static roundConvexPolyline(e,t){const r=new xn(e,t,!0);return new _t(r)}setTranslation(e,t){if(typeof e!="number"||typeof t!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t},this}setRotation(e){return this.rotation=e,this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setContactSkin(e){return this.contactSkin=e,this}setDensity(e){return this.massPropsMode=zr.Density,this.density=e,this}setMass(e){return this.massPropsMode=zr.Mass,this.mass=e,this}setMassProperties(e,t,r){return this.massPropsMode=zr.MassProps,this.mass=e,U.copy(this.centerOfMass,t),this.principalAngularInertia=r,this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class No{constructor(e){this.raw=e||new et,this.map=new vn,e&&e.forEachColliderHandle(t=>{this.map.set(t,new Na(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,r){let n=r!=null&&r!=null;if(n&&isNaN(r))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let a=t.shape.intoRaw(),o=U.intoRaw(t.translation),s=je.intoRaw(t.rotation),l=U.intoRaw(t.centerOfMass),c=this.raw.createCollider(t.enabled,a,o,s,t.massPropsMode,t.mass,l,t.principalAngularInertia,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,t.contactSkin,n,n?r:0,e.raw);a.free(),o.free(),s.free(),l.free();let h=n?e.get(r):null,_=new Na(this,c,h,t.shape);return this.map.set(c,_),_}remove(e,t,r,n){this.raw.remove(e,t.raw,r.raw,n),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}function ch(){return qc()}const tt=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return Tn},get ActiveEvents(){return Sn},get ActiveHooks(){return En},Ball:ya,BroadPhase:Eo,CCDSolver:Mo,Capsule:Ea,CharacterCollision:Do,get CoefficientCombineRule(){return Hi},Collider:Na,ColliderDesc:_t,ColliderSet:No,ColliderShapeCastHit:ji,ConvexPolygon:yn,Cuboid:Ma,DebugRenderBuffers:Po,DebugRenderPipeline:Lo,EventQueue:lh,get FeatureType(){return li},FixedImpulseJoint:po,FixedMultibodyJoint:vo,HalfSpace:xa,Heightfield:La,ImpulseJoint:hr,ImpulseJointSet:wo,IntegrationParameters:uo,IslandManager:So,get JointAxesMask(){return ga},JointData:Or,get JointType(){return Dt},KinematicCharacterController:Uo,get MassPropsMode(){return zr},get MotorModel(){return ma},MultibodyJoint:Fr,MultibodyJointSet:xo,NarrowPhase:To,PhysicsPipeline:Ao,PointColliderProjection:ki,PointProjection:Gi,Polyline:Ca,PrismaticImpulseJoint:mo,PrismaticMultibodyJoint:bo,get QueryFilterFlags(){return Da},QueryPipeline:Co,Ray:oh,RayColliderHit:bn,RayColliderIntersection:Vi,RayIntersection:Wi,RevoluteImpulseJoint:go,RevoluteMultibodyJoint:yo,RigidBody:fa,RigidBodyDesc:tr,RigidBodySet:ho,get RigidBodyType(){return jt},RopeImpulseJoint:_o,RotationOps:je,RoundConvexPolygon:xn,RoundCuboid:Sa,RoundTriangle:Aa,Segment:Ta,SerializationPipeline:Ua,Shape:xt,ShapeCastHit:ci,ShapeContact:oi,get ShapeType(){return wt},get SolverFlags(){return Ia},SpringImpulseJoint:fo,TempContactForceEvent:Io,TempContactManifold:Ro,TriMesh:Pa,get TriMeshFlags(){return ba},Triangle:Ra,UnitImpulseJoint:wa,UnitMultibodyJoint:va,Vector2:co,VectorOps:U,World:Mn,version:ch},Symbol.toStringTag,{value:"Module"}));/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Oa="152",hh=0,Oo=1,uh=2,Fo=1,dh=2,ur=3,Sr=0,At=1,dr=2,Er=0,hi=1,zo=2,Bo=3,Ho=4,ph=5,ui=100,_h=101,fh=102,Go=103,ko=104,mh=200,gh=201,wh=202,vh=203,Wo=204,Vo=205,bh=206,yh=207,xh=208,Mh=209,Sh=210,Eh=0,Th=1,Rh=2,Fa=3,Ah=4,Ch=5,Ph=6,Lh=7,jo=0,Dh=1,Uh=2,pr=0,Ih=1,Nh=2,Oh=3,Fh=4,zh=5,Xo=300,di=301,pi=302,za=303,Ba=304,Rn=306,Ha=1e3,Xt=1001,Ga=1002,Mt=1003,qo=1004,ka=1005,Bt=1006,Bh=1007,Xi=1008,Br=1009,Hh=1010,Gh=1011,Yo=1012,kh=1013,Hr=1014,Gr=1015,qi=1016,Wh=1017,Vh=1018,_i=1020,jh=1021,qt=1023,Xh=1024,qh=1025,kr=1026,fi=1027,Yh=1028,Kh=1029,Jh=1030,Zh=1031,Qh=1033,Wa=33776,Va=33777,ja=33778,Xa=33779,Ko=35840,Jo=35841,Zo=35842,Qo=35843,$h=36196,$o=37492,el=37496,tl=37808,rl=37809,il=37810,nl=37811,al=37812,sl=37813,ol=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,pl=37820,_l=37821,qa=36492,eu=36283,fl=36284,ml=36285,gl=36286,wl=3e3,Wr=3001,tu=3200,ru=3201,iu=0,nu=1,Vr="",Pe="srgb",rr="srgb-linear",vl="display-p3",Ya=7680,au=519,bl=35044,yl="300 es",Ka=1035;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ja=Math.PI/180,Za=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function su(i,e){return(i%e+e)%e}function Qa(i,e,t){return(1-t)*i+t*e}function xl(i){return(i&i-1)===0&&i!==0}function ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*n+e.x,this.y=a*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,r,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=r,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],h=r[4],_=r[7],p=r[2],f=r[5],w=r[8],g=n[0],m=n[3],d=n[6],T=n[1],M=n[4],R=n[7],E=n[2],P=n[5],I=n[8];return a[0]=o*g+s*T+l*E,a[3]=o*m+s*M+l*P,a[6]=o*d+s*R+l*I,a[1]=c*g+h*T+_*E,a[4]=c*m+h*M+_*P,a[7]=c*d+h*R+_*I,a[2]=p*g+f*T+w*E,a[5]=p*m+f*M+w*P,a[8]=p*d+f*R+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-r*a*h+r*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],_=h*o-s*c,p=s*l-h*a,f=c*a-o*l,w=t*_+r*p+n*f;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/w;return e[0]=_*g,e[1]=(n*c-h*r)*g,e[2]=(s*r-n*o)*g,e[3]=p*g,e[4]=(h*t-n*l)*g,e[5]=(n*a-s*t)*g,e[6]=f*g,e[7]=(r*l-c*t)*g,e[8]=(o*t-r*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Ne;function Ml(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Sl={};function Ki(i){i in Sl||(Sl[i]=!0,console.warn(i))}function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const lu=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cu=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function hu(i){return i.convertSRGBToLinear().applyMatrix3(cu)}function uu(i){return i.applyMatrix3(lu).convertLinearToSRGB()}const du={[rr]:i=>i,[Pe]:i=>i.convertSRGBToLinear(),[vl]:hu},pu={[rr]:i=>i,[Pe]:i=>i.convertLinearToSRGB(),[vl]:uu},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return rr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=du[e],n=pu[t];if(r===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let wi;class El{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Cn("canvas")),wi.width=e.width,wi.height=e.height;const r=wi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=gi(a[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gi(t[r]/255)*255):t[r]=gi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Tl{constructor(e=null){this.isSource=!0,this.uuid=Yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(ts(n[o].image)):a.push(ts(n[o]))}else a=ts(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _u=0;class It extends mi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,r=Xt,n=Xt,a=Bt,o=Xi,s=qt,l=Br,c=It.DEFAULT_ANISOTROPY,h=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Yi(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wr?Pe:Vr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pe?Wr:wl}set encoding(e){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?Pe:Vr}}It.DEFAULT_IMAGE=null,It.DEFAULT_MAPPING=Xo,It.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,r=0,n=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],_=o[5],p=o[9],f=o[2],w=o[6],g=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(p-w)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(p+w)<.1&&Math.abs(s+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(s+1)/2,T=(_+1)/2,M=(g+1)/2,R=(l+h)/4,E=(c+f)/4,P=(p+w)/4;return d>T&&d>M?d<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(d),n=R/r,a=E/r):T>M?T<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(T),r=R/n,a=P/n):M<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),r=E/a,n=P/a),this.set(r,n,a,t),this}let m=Math.sqrt((w-p)*(w-p)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(w-p)/m,this.y=(c-f)/m,this.z=(h-l)/m,this.w=Math.acos((s+_+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jr extends mi{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Wr?Pe:Vr),this.texture=new It(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Bt,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rl extends It{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fu extends It{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,o,s){let l=r[n+0],c=r[n+1],h=r[n+2],_=r[n+3];const p=a[o+0],f=a[o+1],w=a[o+2],g=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=_;return}if(s===1){e[t+0]=p,e[t+1]=f,e[t+2]=w,e[t+3]=g;return}if(_!==g||l!==p||c!==f||h!==w){let m=1-s;const d=l*p+c*f+h*w+_*g,T=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const E=Math.sqrt(M),P=Math.atan2(E,d*T);m=Math.sin(m*P)/E,s=Math.sin(s*P)/E}const R=s*T;if(l=l*m+p*R,c=c*m+f*R,h=h*m+w*R,_=_*m+g*R,m===1-s){const E=1/Math.sqrt(l*l+c*c+h*h+_*_);l*=E,c*=E,h*=E,_*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,n,a,o){const s=r[n],l=r[n+1],c=r[n+2],h=r[n+3],_=a[o],p=a[o+1],f=a[o+2],w=a[o+3];return e[t]=s*w+h*_+l*f-c*p,e[t+1]=l*w+h*p+c*_-s*f,e[t+2]=c*w+h*f+s*p-l*_,e[t+3]=h*w-s*_-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),h=s(n/2),_=s(a/2),p=l(r/2),f=l(n/2),w=l(a/2);switch(o){case"XYZ":this._x=p*h*_+c*f*w,this._y=c*f*_-p*h*w,this._z=c*h*w+p*f*_,this._w=c*h*_-p*f*w;break;case"YXZ":this._x=p*h*_+c*f*w,this._y=c*f*_-p*h*w,this._z=c*h*w-p*f*_,this._w=c*h*_+p*f*w;break;case"ZXY":this._x=p*h*_-c*f*w,this._y=c*f*_+p*h*w,this._z=c*h*w+p*f*_,this._w=c*h*_-p*f*w;break;case"ZYX":this._x=p*h*_-c*f*w,this._y=c*f*_+p*h*w,this._z=c*h*w-p*f*_,this._w=c*h*_+p*f*w;break;case"YZX":this._x=p*h*_+c*f*w,this._y=c*f*_+p*h*w,this._z=c*h*w-p*f*_,this._w=c*h*_-p*f*w;break;case"XZY":this._x=p*h*_-c*f*w,this._y=c*f*_-p*h*w,this._z=c*h*w+p*f*_,this._w=c*h*_+p*f*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],_=t[10],p=r+s+_;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(o-n)*f}else if(r>s&&r>_){const f=2*Math.sqrt(1+r-s-_);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(a+c)/f}else if(s>_){const f=2*Math.sqrt(1+s-r-_);this._w=(a-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+_-r-s);this._w=(o-n)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-r*c,this._z=a*h+o*c+r*l-n*s,this._w=o*h-r*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*r+t*this._x,this._y=f*n+t*this._y,this._z=f*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),_=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*_+this._w*p,this._x=r*_+this._x*p,this._y=n*_+this._y*p,this._z=a*_+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(a),r*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,r=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*n-s*r,h=l*r+s*t-a*n,_=l*n+a*r-o*t,p=-a*t-o*r-s*n;return this.x=c*l+p*-a+h*-s-_*-o,this.y=h*l+p*-o+_*-a-c*-s,this.z=_*l+p*-s+c*-o-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new z,Al=new Ji;class Zi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),vi.copy(e.boundingBox),vi.applyMatrix4(e.matrixWorld),this.union(vi);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const a=n.attributes.position;for(let o=0,s=a.count;o<s;o++)fr.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fr)}else n.boundingBox===null&&n.computeBoundingBox(),vi.copy(n.boundingBox),vi.applyMatrix4(e.matrixWorld),this.union(vi)}const r=e.children;for(let n=0,a=r.length;n<a;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Pn.subVectors(this.max,Qi),bi.subVectors(e.a,Qi),yi.subVectors(e.b,Qi),xi.subVectors(e.c,Qi),Tr.subVectors(yi,bi),Rr.subVectors(xi,yi),Xr.subVectors(bi,xi);let t=[0,-Tr.z,Tr.y,0,-Rr.z,Rr.y,0,-Xr.z,Xr.y,Tr.z,0,-Tr.x,Rr.z,0,-Rr.x,Xr.z,0,-Xr.x,-Tr.y,Tr.x,0,-Rr.y,Rr.x,0,-Xr.y,Xr.x,0];return!is(t,bi,yi,xi,Pn)||(t=[1,0,0,0,1,0,0,0,1],!is(t,bi,yi,xi,Pn))?!1:(Ln.crossVectors(Tr,Rr),t=[Ln.x,Ln.y,Ln.z],is(t,bi,yi,xi,Pn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _r=[new z,new z,new z,new z,new z,new z,new z,new z],fr=new z,vi=new Zi,bi=new z,yi=new z,xi=new z,Tr=new z,Rr=new z,Xr=new z,Qi=new z,Pn=new z,Ln=new z,qr=new z;function is(i,e,t,r,n){for(let a=0,o=i.length-3;a<=o;a+=3){qr.fromArray(i,a);const s=n.x*Math.abs(qr.x)+n.y*Math.abs(qr.y)+n.z*Math.abs(qr.z),l=e.dot(qr),c=t.dot(qr),h=r.dot(qr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const mu=new Zi,$i=new z,ns=new z;class as{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):mu.setFromPoints(e).getCenter(r);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector($i,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(ns)),this.expandByPoint($i.copy(e.center).sub(ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mr=new z,ss=new z,Dn=new z,Ar=new z,os=new z,Un=new z,ls=new z;class gu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){ss.copy(e).add(t).multiplyScalar(.5),Dn.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(ss);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Dn),s=Ar.dot(this.direction),l=-Ar.dot(Dn),c=Ar.lengthSq(),h=Math.abs(1-o*o);let _,p,f,w;if(h>0)if(_=o*l-s,p=o*s-l,w=a*h,_>=0)if(p>=-w)if(p<=w){const g=1/h;_*=g,p*=g,f=_*(_+o*p+2*s)+p*(o*_+p+2*l)+c}else p=a,_=Math.max(0,-(o*p+s)),f=-_*_+p*(p+2*l)+c;else p=-a,_=Math.max(0,-(o*p+s)),f=-_*_+p*(p+2*l)+c;else p<=-w?(_=Math.max(0,-(-o*a+s)),p=_>0?-a:Math.min(Math.max(-a,-l),a),f=-_*_+p*(p+2*l)+c):p<=w?(_=0,p=Math.min(Math.max(-a,-l),a),f=p*(p+2*l)+c):(_=Math.max(0,-(o*a+s)),p=_>0?a:Math.min(Math.max(-a,-l),a),f=-_*_+p*(p+2*l)+c);else p=o>0?-a:a,_=Math.max(0,-(o*p+s)),f=-_*_+p*(p+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,_),n&&n.copy(ss).addScaledVector(Dn,p),f}intersectSphere(e,t){mr.subVectors(e.center,this.origin);const r=mr.dot(this.direction),n=mr.dot(mr)-r*r,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,_=1/this.direction.z,p=this.origin;return c>=0?(r=(e.min.x-p.x)*c,n=(e.max.x-p.x)*c):(r=(e.max.x-p.x)*c,n=(e.min.x-p.x)*c),h>=0?(a=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),r>o||a>n||((a>r||isNaN(r))&&(r=a),(o<n||isNaN(n))&&(n=o),_>=0?(s=(e.min.z-p.z)*_,l=(e.max.z-p.z)*_):(s=(e.max.z-p.z)*_,l=(e.min.z-p.z)*_),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,r,n,a){os.subVectors(t,e),Un.subVectors(r,e),ls.crossVectors(os,Un);let o=this.direction.dot(ls),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Ar.subVectors(this.origin,e);const l=s*this.direction.dot(Un.crossVectors(Ar,Un));if(l<0)return null;const c=s*this.direction.dot(os.cross(Ar));if(c<0||l+c>o)return null;const h=-s*Ar.dot(ls);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,r,n,a,o,s,l,c,h,_,p,f,w,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=r,d[12]=n,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=h,d[10]=_,d[14]=p,d[3]=f,d[7]=w,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Mi.setFromMatrixColumn(e,0).length(),a=1/Mi.setFromMatrixColumn(e,1).length(),o=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const p=o*h,f=o*_,w=s*h,g=s*_;t[0]=l*h,t[4]=-l*_,t[8]=c,t[1]=f+w*c,t[5]=p-g*c,t[9]=-s*l,t[2]=g-p*c,t[6]=w+f*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,f=l*_,w=c*h,g=c*_;t[0]=p+g*s,t[4]=w*s-f,t[8]=o*c,t[1]=o*_,t[5]=o*h,t[9]=-s,t[2]=f*s-w,t[6]=g+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,f=l*_,w=c*h,g=c*_;t[0]=p-g*s,t[4]=-o*_,t[8]=w+f*s,t[1]=f+w*s,t[5]=o*h,t[9]=g-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,f=o*_,w=s*h,g=s*_;t[0]=l*h,t[4]=w*c-f,t[8]=p*c+g,t[1]=l*_,t[5]=g*c+p,t[9]=f*c-w,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,f=o*c,w=s*l,g=s*c;t[0]=l*h,t[4]=g-p*_,t[8]=w*_+f,t[1]=_,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=f*_+w,t[10]=p-g*_}else if(e.order==="XZY"){const p=o*l,f=o*c,w=s*l,g=s*c;t[0]=l*h,t[4]=-_,t[8]=c*h,t[1]=p*_+g,t[5]=o*h,t[9]=f*_-w,t[2]=w*_-f,t[6]=s*h,t[10]=g*_+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,vu)}lookAt(e,t,r){const n=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Cr.crossVectors(r,Nt),Cr.lengthSq()===0&&(Math.abs(r.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Cr.crossVectors(r,Nt)),Cr.normalize(),In.crossVectors(Nt,Cr),n[0]=Cr.x,n[4]=In.x,n[8]=Nt.x,n[1]=Cr.y,n[5]=In.y,n[9]=Nt.y,n[2]=Cr.z,n[6]=In.z,n[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],h=r[1],_=r[5],p=r[9],f=r[13],w=r[2],g=r[6],m=r[10],d=r[14],T=r[3],M=r[7],R=r[11],E=r[15],P=n[0],I=n[4],J=n[8],b=n[12],S=n[1],Y=n[5],ee=n[9],N=n[13],G=n[2],X=n[6],te=n[10],q=n[14],K=n[3],ne=n[7],Q=n[11],ye=n[15];return a[0]=o*P+s*S+l*G+c*K,a[4]=o*I+s*Y+l*X+c*ne,a[8]=o*J+s*ee+l*te+c*Q,a[12]=o*b+s*N+l*q+c*ye,a[1]=h*P+_*S+p*G+f*K,a[5]=h*I+_*Y+p*X+f*ne,a[9]=h*J+_*ee+p*te+f*Q,a[13]=h*b+_*N+p*q+f*ye,a[2]=w*P+g*S+m*G+d*K,a[6]=w*I+g*Y+m*X+d*ne,a[10]=w*J+g*ee+m*te+d*Q,a[14]=w*b+g*N+m*q+d*ye,a[3]=T*P+M*S+R*G+E*K,a[7]=T*I+M*Y+R*X+E*ne,a[11]=T*J+M*ee+R*te+E*Q,a[15]=T*b+M*N+R*q+E*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],_=e[6],p=e[10],f=e[14],w=e[3],g=e[7],m=e[11],d=e[15];return w*(+a*l*_-n*c*_-a*s*p+r*c*p+n*s*f-r*l*f)+g*(+t*l*f-t*c*p+a*o*p-n*o*f+n*c*h-a*l*h)+m*(+t*c*_-t*s*f-a*o*_+r*o*f+a*s*h-r*c*h)+d*(-n*s*h-t*l*_+t*s*p+n*o*_-r*o*p+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],_=e[9],p=e[10],f=e[11],w=e[12],g=e[13],m=e[14],d=e[15],T=_*m*c-g*p*c+g*l*f-s*m*f-_*l*d+s*p*d,M=w*p*c-h*m*c-w*l*f+o*m*f+h*l*d-o*p*d,R=h*g*c-w*_*c+w*s*f-o*g*f-h*s*d+o*_*d,E=w*_*l-h*g*l-w*s*p+o*g*p+h*s*m-o*_*m,P=t*T+r*M+n*R+a*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=T*I,e[1]=(g*p*a-_*m*a-g*n*f+r*m*f+_*n*d-r*p*d)*I,e[2]=(s*m*a-g*l*a+g*n*c-r*m*c-s*n*d+r*l*d)*I,e[3]=(_*l*a-s*p*a-_*n*c+r*p*c+s*n*f-r*l*f)*I,e[4]=M*I,e[5]=(h*m*a-w*p*a+w*n*f-t*m*f-h*n*d+t*p*d)*I,e[6]=(w*l*a-o*m*a-w*n*c+t*m*c+o*n*d-t*l*d)*I,e[7]=(o*p*a-h*l*a+h*n*c-t*p*c-o*n*f+t*l*f)*I,e[8]=R*I,e[9]=(w*_*a-h*g*a-w*r*f+t*g*f+h*r*d-t*_*d)*I,e[10]=(o*g*a-w*s*a+w*r*c-t*g*c-o*r*d+t*s*d)*I,e[11]=(h*s*a-o*_*a-h*r*c+t*_*c+o*r*f-t*s*f)*I,e[12]=E*I,e[13]=(h*g*n-w*_*n+w*r*p-t*g*p-h*r*m+t*_*m)*I,e[14]=(w*s*n-o*g*n-w*r*l+t*g*l+o*r*m-t*s*m)*I,e[15]=(o*_*n-h*s*n+h*r*l-t*_*l-o*r*p+t*s*p)*I,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+r,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,o){return this.set(1,r,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,_=s+s,p=a*c,f=a*h,w=a*_,g=o*h,m=o*_,d=s*_,T=l*c,M=l*h,R=l*_,E=r.x,P=r.y,I=r.z;return n[0]=(1-(g+d))*E,n[1]=(f+R)*E,n[2]=(w-M)*E,n[3]=0,n[4]=(f-R)*P,n[5]=(1-(p+d))*P,n[6]=(m+T)*P,n[7]=0,n[8]=(w+M)*I,n[9]=(m-T)*I,n[10]=(1-(p+g))*I,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=Mi.set(n[0],n[1],n[2]).length();const o=Mi.set(n[4],n[5],n[6]).length(),s=Mi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Kt.copy(this);const l=1/a,c=1/o,h=1/s;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=c,Kt.elements[5]*=c,Kt.elements[6]*=c,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),r.x=a,r.y=o,r.z=s,this}makePerspective(e,t,r,n,a,o){const s=this.elements,l=2*a/(t-e),c=2*a/(r-n),h=(t+e)/(t-e),_=(r+n)/(r-n),p=-(o+a)/(o-a),f=-2*o*a/(o-a);return s[0]=l,s[4]=0,s[8]=h,s[12]=0,s[1]=0,s[5]=c,s[9]=_,s[13]=0,s[2]=0,s[6]=0,s[10]=p,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,r,n,a,o){const s=this.elements,l=1/(t-e),c=1/(r-n),h=1/(o-a),_=(t+e)*l,p=(r+n)*c,f=(o+a)*h;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-_,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-p,s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Mi=new z,Kt=new mt,wu=new z(0,0,0),vu=new z(1,1,1),Cr=new z,In=new z,Nt=new z,Cl=new mt,Pl=new Ji;class Nn{constructor(e=0,t=0,r=0,n=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],_=n[2],p=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-_,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const Dl=new z,Si=new Ji,gr=new mt,On=new z,en=new z,yu=new z,xu=new Ji,Ul=new z(1,0,0),Il=new z(0,1,0),Nl=new z(0,0,1),Mu={type:"added"},Ol={type:"removed"};class Ot extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new z,t=new Nn,r=new Ji,n=new z(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ne}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?On.copy(e):On.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),en.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(en,On,this.up):gr.lookAt(On,en,this.up),this.quaternion.setFromRotationMatrix(gr),n&&(gr.extractRotation(n.matrixWorld),Si.setFromRotationMatrix(gr),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ol)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ol)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(r=r.concat(o))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,e,yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const _=l[c];a(e.shapes,_)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),_=o(e.shapes),p=o(e.skeletons),f=o(e.animations),w=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),_.length>0&&(r.shapes=_),p.length>0&&(r.skeletons=p),f.length>0&&(r.animations=f),w.length>0&&(r.nodes=w)}return r.object=n,r;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Ot.DEFAULT_UP=new z(0,1,0),Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new z,wr=new z,cs=new z,vr=new z,Ei=new z,Ti=new z,Fl=new z,hs=new z,us=new z,ds=new z;let Fn=!1;class Zt{constructor(e=new z,t=new z,r=new z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Jt.subVectors(e,t),n.cross(Jt);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){Jt.subVectors(n,t),wr.subVectors(r,t),cs.subVectors(e,t);const o=Jt.dot(Jt),s=Jt.dot(wr),l=Jt.dot(cs),c=wr.dot(wr),h=wr.dot(cs),_=o*c-s*s;if(_===0)return a.set(-2,-1,-1);const p=1/_,f=(c*l-s*h)*p,w=(o*h-s*l)*p;return a.set(1-f-w,w,f)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,vr),vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getUV(e,t,r,n,a,o,s,l){return Fn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fn=!0),this.getInterpolation(e,t,r,n,a,o,s,l)}static getInterpolation(e,t,r,n,a,o,s,l){return this.getBarycoord(e,t,r,n,vr),l.setScalar(0),l.addScaledVector(a,vr.x),l.addScaledVector(o,vr.y),l.addScaledVector(s,vr.z),l}static isFrontFacing(e,t,r,n){return Jt.subVectors(r,t),wr.subVectors(e,t),Jt.cross(wr).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Jt.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return Fn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fn=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return Zt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let o,s;Ei.subVectors(n,r),Ti.subVectors(a,r),hs.subVectors(e,r);const l=Ei.dot(hs),c=Ti.dot(hs);if(l<=0&&c<=0)return t.copy(r);us.subVectors(e,n);const h=Ei.dot(us),_=Ti.dot(us);if(h>=0&&_<=h)return t.copy(n);const p=l*_-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(r).addScaledVector(Ei,o);ds.subVectors(e,a);const f=Ei.dot(ds),w=Ti.dot(ds);if(w>=0&&f<=w)return t.copy(a);const g=f*c-l*w;if(g<=0&&c>=0&&w<=0)return s=c/(c-w),t.copy(r).addScaledVector(Ti,s);const m=h*w-f*_;if(m<=0&&_-h>=0&&f-w>=0)return Fl.subVectors(a,n),s=(_-h)/(_-h+(f-w)),t.copy(n).addScaledVector(Fl,s);const d=1/(m+g+p);return o=g*d,s=p*d,t.copy(r).addScaledVector(Ei,o).addScaledVector(Ti,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Su=0;class zn extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=hi,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wo,this.blendDst=Vo,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?i+(e-i)*6*t:t<.5?e:t<.6666666666666666?i+(e-i)*6*(.6666666666666666-t):i}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Yt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=Yt.workingColorSpace){if(e=su(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=ps(o,a,e+.3333333333333333),this.g=ps(o,a,e),this.b=ps(o,a,e-.3333333333333333)}return Yt.toWorkingColorSpace(this,n),this}setStyle(e,t=Pe){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pe){const r=zl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pe){return Yt.fromWorkingColorSpace(bt.copy(this),e),Math.round(Ct(bt.r*255,0,255))*65536+Math.round(Ct(bt.g*255,0,255))*256+Math.round(Ct(bt.b*255,0,255))}getHexString(e=Pe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(bt.copy(this),t);const r=bt.r,n=bt.g,a=bt.b,o=Math.max(r,n,a),s=Math.min(r,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const _=o-s;switch(c=h<=.5?_/(o+s):_/(2-o-s),o){case r:l=(n-a)/_+(n<a?6:0);break;case n:l=(a-r)/_+2;break;case a:l=(r-n)/_+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Pe){Yt.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,r=bt.g,n=bt.b;return e!==Pe?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=r,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(Bn);const r=Qa(Qt.h,Bn.h,t),n=Qa(Qt.s,Bn.s,t),a=Qa(Qt.l,Bn.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Je;Je.NAMES=zl;class Ri extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new z,Hn=new Ke;class ir{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXY(t,Hn.x,Hn.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),n=Ut(n,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bl extends ir{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Hl extends ir{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yr extends ir{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Eu=0;const Ht=new mt,_s=new Ot,Ai=new z,Ft=new Zi,tn=new Zi,ut=new z;class Kr extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ml(e)?Hl:Bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ne().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,r){return Ht.makeTranslation(e,t,r),this.applyMatrix4(Ht),this}scale(e,t,r){return Ht.makeScale(e,t,r),this.applyMatrix4(Ht),this}lookAt(e){return _s.lookAt(e),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];Ft.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const r=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(Ft.min,tn.min),Ft.expandByPoint(ut),ut.addVectors(Ft.max,tn.max),Ft.expandByPoint(ut)):(Ft.expandByPoint(tn.min),Ft.expandByPoint(tn.max))}Ft.getCenter(r);let n=0;for(let a=0,o=e.count;a<o;a++)ut.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(ut));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)ut.fromBufferAttribute(s,c),l&&(Ai.fromBufferAttribute(e,c),ut.add(Ai)),n=Math.max(n,r.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ir(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<s;S++)c[S]=new z,h[S]=new z;const _=new z,p=new z,f=new z,w=new Ke,g=new Ke,m=new Ke,d=new z,T=new z;function M(S,Y,ee){_.fromArray(n,S*3),p.fromArray(n,Y*3),f.fromArray(n,ee*3),w.fromArray(o,S*2),g.fromArray(o,Y*2),m.fromArray(o,ee*2),p.sub(_),f.sub(_),g.sub(w),m.sub(w);const N=1/(g.x*m.y-m.x*g.y);isFinite(N)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(N),T.copy(f).multiplyScalar(g.x).addScaledVector(p,-m.x).multiplyScalar(N),c[S].add(d),c[Y].add(d),c[ee].add(d),h[S].add(T),h[Y].add(T),h[ee].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:r.length}]);for(let S=0,Y=R.length;S<Y;++S){const ee=R[S],N=ee.start,G=ee.count;for(let X=N,te=N+G;X<te;X+=3)M(r[X+0],r[X+1],r[X+2])}const E=new z,P=new z,I=new z,J=new z;function b(S){I.fromArray(a,S*3),J.copy(I);const Y=c[S];E.copy(Y),E.sub(I.multiplyScalar(I.dot(Y))).normalize(),P.crossVectors(J,Y);const ee=P.dot(h[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=ee}for(let S=0,Y=R.length;S<Y;++S){const ee=R[S],N=ee.start,G=ee.count;for(let X=N,te=N+G;X<te;X+=3)b(r[X+0]),b(r[X+1]),b(r[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ir(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,f=r.count;p<f;p++)r.setXYZ(p,0,0,0);const n=new z,a=new z,o=new z,s=new z,l=new z,c=new z,h=new z,_=new z;if(e)for(let p=0,f=e.count;p<f;p+=3){const w=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);n.fromBufferAttribute(t,w),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,a),_.subVectors(n,a),h.cross(_),s.fromBufferAttribute(r,w),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,m),s.add(h),l.add(h),c.add(h),r.setXYZ(w,s.x,s.y,s.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)n.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,a),_.subVectors(n,a),h.cross(_),r.setXYZ(p+0,h.x,h.y,h.z),r.setXYZ(p+1,h.x,h.y,h.z),r.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,_=s.normalized,p=new c.constructor(l.length*h);let f=0,w=0;for(let g=0,m=l.length;g<m;g++){s.isInterleavedBufferAttribute?f=l[g]*s.data.stride+s.offset:f=l[g]*h;for(let d=0;d<h;d++)p[w++]=c[f++]}return new ir(p,h,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kr,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,_=c.length;h<_;h++){const p=c[h],f=e(p,r);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let _=0,p=c.length;_<p;_++){const f=c[_];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],_=a[c];for(let p=0,f=_.length;p<f;p++)h.push(_[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const _=o[c];this.addGroup(_.start,_.count,_.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new mt,nr=new gu,Gn=new as,kl=new z,Ci=new z,Pi=new z,Li=new z,fs=new z,kn=new z,Wn=new Ke,Vn=new Ke,jn=new Ke,Wl=new z,Vl=new z,jl=new z,Xn=new z,qn=new z;class Gt extends Ot{constructor(e=new Kr,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){kn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],_=a[l];h!==0&&(fs.fromBufferAttribute(_,e),o?kn.addScaledVector(fs,h):kn.addScaledVector(fs.sub(t),h))}t.add(kn)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Gn.copy(r.boundingSphere),Gn.applyMatrix4(a),nr.copy(e.ray).recast(e.near),!(Gn.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Gn,kl)===null||nr.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(Gl.copy(a).invert(),nr.copy(e.ray).applyMatrix4(Gl),!(r.boundingBox!==null&&nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let r;const n=this.geometry,a=this.material,o=n.index,s=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,_=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,w=_.length;f<w;f++){const g=_[f],m=a[g.materialIndex],d=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=d,R=T;M<R;M+=3){const E=o.getX(M),P=o.getX(M+1),I=o.getX(M+2);r=Yn(this,m,e,nr,l,c,h,E,P,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,p.start),w=Math.min(o.count,p.start+p.count);for(let g=f,m=w;g<m;g+=3){const d=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);r=Yn(this,a,e,nr,l,c,h,d,T,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let f=0,w=_.length;f<w;f++){const g=_[f],m=a[g.materialIndex],d=Math.max(g.start,p.start),T=Math.min(s.count,Math.min(g.start+g.count,p.start+p.count));for(let M=d,R=T;M<R;M+=3){const E=M,P=M+1,I=M+2;r=Yn(this,m,e,nr,l,c,h,E,P,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,p.start),w=Math.min(s.count,p.start+p.count);for(let g=f,m=w;g<m;g+=3){const d=g,T=g+1,M=g+2;r=Yn(this,a,e,nr,l,c,h,d,T,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Tu(i,e,t,r,n,a,o,s){let l;if(e.side===At?l=r.intersectTriangle(o,a,n,!0,s):l=r.intersectTriangle(n,a,o,e.side===Sr,s),l===null)return null;qn.copy(s),qn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qn);return c<t.near||c>t.far?null:{distance:c,point:qn.clone(),object:i}}function Yn(i,e,t,r,n,a,o,s,l,c){i.getVertexPosition(s,Ci),i.getVertexPosition(l,Pi),i.getVertexPosition(c,Li);const h=Tu(i,e,t,r,Ci,Pi,Li,Xn);if(h){n&&(Wn.fromBufferAttribute(n,s),Vn.fromBufferAttribute(n,l),jn.fromBufferAttribute(n,c),h.uv=Zt.getInterpolation(Xn,Ci,Pi,Li,Wn,Vn,jn,new Ke)),a&&(Wn.fromBufferAttribute(a,s),Vn.fromBufferAttribute(a,l),jn.fromBufferAttribute(a,c),h.uv1=Zt.getInterpolation(Xn,Ci,Pi,Li,Wn,Vn,jn,new Ke),h.uv2=h.uv1),o&&(Wl.fromBufferAttribute(o,s),Vl.fromBufferAttribute(o,l),jl.fromBufferAttribute(o,c),h.normal=Zt.getInterpolation(Xn,Ci,Pi,Li,Wl,Vl,jl,new z),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const _={a:s,b:l,c,normal:new z,materialIndex:0};Zt.getNormal(Ci,Pi,Li,_.normal),h.face=_}return h}class br extends Kr{constructor(e=1,t=1,r=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],_=[];let p=0,f=0;w("z","y","x",-1,-1,r,t,e,o,a,0),w("z","y","x",1,-1,r,t,-e,o,a,1),w("x","z","y",1,1,e,r,t,n,o,2),w("x","z","y",1,-1,e,r,-t,n,o,3),w("x","y","z",1,-1,e,t,r,n,a,4),w("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Yr(c,3)),this.setAttribute("normal",new Yr(h,3)),this.setAttribute("uv",new Yr(_,2));function w(g,m,d,T,M,R,E,P,I,J,b){const S=R/I,Y=E/J,ee=R/2,N=E/2,G=P/2,X=I+1,te=J+1;let q=0,K=0;const ne=new z;for(let Q=0;Q<te;Q++){const ye=Q*Y-N;for(let ae=0;ae<X;ae++){const B=ae*S-ee;ne[g]=B*T,ne[m]=ye*M,ne[d]=G,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[d]=P>0?1:-1,h.push(ne.x,ne.y,ne.z),_.push(ae/I),_.push(1-Q/J),q+=1}}for(let Q=0;Q<J;Q++)for(let ye=0;ye<I;ye++){const ae=p+ye+X*Q,B=p+ye+X*(Q+1),Z=p+(ye+1)+X*(Q+1),ue=p+(ye+1)+X*Q;l.push(ae,B,ue),l.push(B,Z,ue),K+=6}s.addGroup(f,K,b),f+=K,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const r=Di(i[t]);for(const n in r)e[n]=r[n]}return e}function Ru(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xl(i){return i.getRenderTarget()===null?i.outputColorSpace:rr}const Au={clone:Di,merge:St};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class ql extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends ql{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ii=1;class Lu extends Ot{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r;const n=new kt(Ui,Ii,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const a=new kt(Ui,Ii,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new kt(Ui,Ii,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new kt(Ui,Ii,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new kt(Ui,Ii,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(Ui,Ii,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[n,a,o,s,l,c]=this.children,h=e.getRenderTarget(),_=e.toneMapping,p=e.xr.enabled;e.toneMapping=pr,e.xr.enabled=!1;const f=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,n),e.setRenderTarget(r,1),e.render(t,a),e.setRenderTarget(r,2),e.render(t,o),e.setRenderTarget(r,3),e.render(t,s),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=f,e.setRenderTarget(r,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=_,e.xr.enabled=p,r.texture.needsPMREMUpdate=!0}}class Yl extends It{constructor(e,t,r,n,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:di,super(e,t,r,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wr?Pe:Vr),this.texture=new Yl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new br(5,5,5),a=new Jr({name:"CubemapFromEquirect",uniforms:Di(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:At,blending:Er});a.uniforms.tEquirect.value=t;const o=new Gt(n,a),s=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Bt),new Lu(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(a)}}const ms=new z,Uu=new z,Iu=new Ne;class Zr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ms.subVectors(r,t).cross(Uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ms),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Iu.getNormalMatrix(e),n=this.coplanarPoint(ms).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new as,Kn=new z;class Kl{constructor(e=new Zr,t=new Zr,r=new Zr,n=new Zr,a=new Zr,o=new Zr){this.planes=[e,t,r,n,a,o]}set(e,t,r,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,n=r[0],a=r[1],o=r[2],s=r[3],l=r[4],c=r[5],h=r[6],_=r[7],p=r[8],f=r[9],w=r[10],g=r[11],m=r[12],d=r[13],T=r[14],M=r[15];return t[0].setComponents(s-n,_-l,g-p,M-m).normalize(),t[1].setComponents(s+n,_+l,g+p,M+m).normalize(),t[2].setComponents(s+a,_+c,g+f,M+d).normalize(),t[3].setComponents(s-a,_-c,g-f,M-d).normalize(),t[4].setComponents(s-o,_-h,g-w,M-T).normalize(),t[5].setComponents(s+o,_+h,g+w,M+T).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Kn.x=n.normal.x>0?e.max.x:e.min.x,Kn.y=n.normal.y>0?e.max.y:e.min.y,Kn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Kn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jl(){let i=null,e=!1,t=null,r=null;function n(a,o){t(a,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Nu(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,h){const _=c.array,p=c.usage,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,_,p),c.onUploadCallback();let w;if(_ instanceof Float32Array)w=i.FLOAT;else if(_ instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)w=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=i.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=i.SHORT;else if(_ instanceof Uint32Array)w=i.UNSIGNED_INT;else if(_ instanceof Int32Array)w=i.INT;else if(_ instanceof Int8Array)w=i.BYTE;else if(_ instanceof Uint8Array)w=i.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:f,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,_){const p=h.array,f=h.updateRange;i.bindBuffer(_,c),f.count===-1?i.bufferSubData(_,0,p):(t?i.bufferSubData(_,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(_,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=r.get(c);(!p||p.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const _=r.get(c);_===void 0?r.set(c,n(c,h)):_.version<c.version&&(a(_.buffer,c,h),_.version=c.version)}return{get:o,remove:s,update:l}}class gs extends Kr{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,h=l+1,_=e/s,p=t/l,f=[],w=[],g=[],m=[];for(let d=0;d<h;d++){const T=d*p-o;for(let M=0;M<c;M++){const R=M*_-a;w.push(R,-T,0),g.push(0,0,1),m.push(M/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<s;T++){const M=T+c*d,R=T+c*(d+1),E=T+1+c*(d+1),P=T+1+c*d;f.push(M,R,P),f.push(R,E,P)}this.setIndex(f),this.setAttribute("position",new Yr(w,3)),this.setAttribute("normal",new Yr(g,3)),this.setAttribute("uv",new Yr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku="vec3 transformed = vec3( position );",Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,td=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,id=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ed=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Ld=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Rp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,c_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:Ou,alphamap_pars_fragment:Fu,alphatest_fragment:zu,alphatest_pars_fragment:Bu,aomap_fragment:Hu,aomap_pars_fragment:Gu,begin_vertex:ku,beginnormal_vertex:Wu,bsdfs:Vu,iridescence_fragment:ju,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:Ju,color_fragment:Zu,color_pars_fragment:Qu,color_pars_vertex:$u,color_vertex:ed,common:td,cube_uv_reflection_fragment:rd,defaultnormal_vertex:id,displacementmap_pars_vertex:nd,displacementmap_vertex:ad,emissivemap_fragment:sd,emissivemap_pars_fragment:od,encodings_fragment:ld,encodings_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:dd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Ed,envmap_vertex:_d,fog_vertex:fd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:wd,gradientmap_pars_fragment:vd,lightmap_fragment:bd,lightmap_pars_fragment:yd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:Md,lights_pars_begin:Sd,lights_toon_fragment:Td,lights_toon_pars_fragment:Rd,lights_phong_fragment:Ad,lights_phong_pars_fragment:Cd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Dd,lights_fragment_maps:Ud,lights_fragment_end:Id,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:zd,map_fragment:Bd,map_pars_fragment:Hd,map_particle_fragment:Gd,map_particle_pars_fragment:kd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Vd,morphcolor_vertex:jd,morphnormal_vertex:Xd,morphtarget_pars_vertex:qd,morphtarget_vertex:Yd,normal_fragment_begin:Kd,normal_fragment_maps:Jd,normal_pars_fragment:Zd,normal_pars_vertex:Qd,normal_vertex:$d,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ip,iridescence_pars_fragment:np,output_fragment:ap,packing:sp,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:_p,shadowmap_vertex:fp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:wp,skinning_vertex:vp,skinnormal_vertex:bp,specularmap_fragment:yp,specularmap_pars_fragment:xp,tonemapping_fragment:Mp,tonemapping_pars_fragment:Sp,transmission_fragment:Ep,transmission_pars_fragment:Tp,uv_pars_fragment:Rp,uv_pars_vertex:Ap,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Up,backgroundCube_frag:Ip,cube_vert:Np,cube_frag:Op,depth_vert:Fp,depth_frag:zp,distanceRGBA_vert:Bp,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:kp,linedashed_vert:Wp,linedashed_frag:Vp,meshbasic_vert:jp,meshbasic_frag:Xp,meshlambert_vert:qp,meshlambert_frag:Yp,meshmatcap_vert:Kp,meshmatcap_frag:Jp,meshnormal_vert:Zp,meshnormal_frag:Qp,meshphong_vert:$p,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:r_,meshtoon_vert:i_,meshtoon_frag:n_,points_vert:a_,points_frag:s_,shadow_vert:o_,shadow_frag:l_,sprite_vert:c_,sprite_frag:h_},se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}}},ar={basic:{uniforms:St([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:St([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:St([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:St([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:St([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:St([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:St([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:St([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:St([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:St([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:St([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:St([se.common,se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:St([se.lights,se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};ar.physical={uniforms:St([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Jn={r:0,b:0,g:0};function u_(i,e,t,r,n,a,o){const s=new Je(0);let l=a===!0?0:1,c,h,_=null,p=0,f=null;function w(m,d){let T=!1,M=d.isScene===!0?d.background:null;switch(M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?g(s,l):M&&M.isColor&&(g(M,1),T=!0),i.xr.getEnvironmentBlendMode()){case"opaque":T=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,o),T=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,o),T=!0;break}(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Rn)?(h===void 0&&(h=new Gt(new br(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:Di(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=M.colorSpace!==Pe,(_!==M||p!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,_=M,p=M.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Gt(new gs(2,2),new Jr({name:"BackgroundMaterial",uniforms:Di(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(_!==M||p!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,_=M,p=M.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(Jn,Xl(i)),r.buffers.color.setClear(Jn.r,Jn.g,Jn.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),l=d,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(s,l)},render:w}}function d_(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=m(null);let c=l,h=!1;function _(G,X,te,q,K){let ne=!1;if(o){const Q=g(q,te,X);c!==Q&&(c=Q,f(c.object)),ne=d(G,q,te,K),ne&&T(G,q,te,K)}else{const Q=X.wireframe===!0;(c.geometry!==q.id||c.program!==te.id||c.wireframe!==Q)&&(c.geometry=q.id,c.program=te.id,c.wireframe=Q,ne=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,J(G,X,te,q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function p(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function f(G){return r.isWebGL2?i.bindVertexArray(G):a.bindVertexArrayOES(G)}function w(G){return r.isWebGL2?i.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function g(G,X,te){const q=te.wireframe===!0;let K=s[G.id];K===void 0&&(K={},s[G.id]=K);let ne=K[X.id];ne===void 0&&(ne={},K[X.id]=ne);let Q=ne[q];return Q===void 0&&(Q=m(p()),ne[q]=Q),Q}function m(G){const X=[],te=[],q=[];for(let K=0;K<n;K++)X[K]=0,te[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:te,attributeDivisors:q,object:G,attributes:{},index:null}}function d(G,X,te,q){const K=c.attributes,ne=X.attributes;let Q=0;const ye=te.getAttributes();for(const ae in ye)if(ye[ae].location>=0){const B=K[ae];let Z=ne[ae];if(Z===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),B===void 0||B.attribute!==Z||Z&&B.data!==Z.data)return!0;Q++}return c.attributesNum!==Q||c.index!==q}function T(G,X,te,q){const K={},ne=X.attributes;let Q=0;const ye=te.getAttributes();for(const ae in ye)if(ye[ae].location>=0){let B=ne[ae];B===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const Z={};Z.attribute=B,B&&B.data&&(Z.data=B.data),K[ae]=Z,Q++}c.attributes=K,c.attributesNum=Q,c.index=q}function M(){const G=c.newAttributes;for(let X=0,te=G.length;X<te;X++)G[X]=0}function R(G){E(G,0)}function E(G,X){const te=c.newAttributes,q=c.enabledAttributes,K=c.attributeDivisors;te[G]=1,q[G]===0&&(i.enableVertexAttribArray(G),q[G]=1),K[G]!==X&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,X),K[G]=X)}function P(){const G=c.newAttributes,X=c.enabledAttributes;for(let te=0,q=X.length;te<q;te++)X[te]!==G[te]&&(i.disableVertexAttribArray(te),X[te]=0)}function I(G,X,te,q,K,ne){r.isWebGL2===!0&&(te===i.INT||te===i.UNSIGNED_INT)?i.vertexAttribIPointer(G,X,te,K,ne):i.vertexAttribPointer(G,X,te,q,K,ne)}function J(G,X,te,q){if(r.isWebGL2===!1&&(G.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const K=q.attributes,ne=te.getAttributes(),Q=X.defaultAttributeValues;for(const ye in ne){const ae=ne[ye];if(ae.location>=0){let B=K[ye];if(B===void 0&&(ye==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),ye==="instanceColor"&&G.instanceColor&&(B=G.instanceColor)),B!==void 0){const Z=B.normalized,ue=B.itemSize,he=t.get(B);if(he===void 0)continue;const L=he.buffer,Ce=he.type,Te=he.bytesPerElement;if(B.isInterleavedBufferAttribute){const oe=B.data,Me=oe.stride,ke=B.offset;if(oe.isInstancedInterleavedBuffer){for(let we=0;we<ae.locationSize;we++)E(ae.location+we,oe.meshPerAttribute);G.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let we=0;we<ae.locationSize;we++)R(ae.location+we);i.bindBuffer(i.ARRAY_BUFFER,L);for(let we=0;we<ae.locationSize;we++)I(ae.location+we,ue/ae.locationSize,Ce,Z,Me*Te,(ke+ue/ae.locationSize*we)*Te)}else{if(B.isInstancedBufferAttribute){for(let oe=0;oe<ae.locationSize;oe++)E(ae.location+oe,B.meshPerAttribute);G.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let oe=0;oe<ae.locationSize;oe++)R(ae.location+oe);i.bindBuffer(i.ARRAY_BUFFER,L);for(let oe=0;oe<ae.locationSize;oe++)I(ae.location+oe,ue/ae.locationSize,Ce,Z,ue*Te,ue/ae.locationSize*oe*Te)}}else if(Q!==void 0){const Z=Q[ye];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(ae.location,Z);break;case 3:i.vertexAttrib3fv(ae.location,Z);break;case 4:i.vertexAttrib4fv(ae.location,Z);break;default:i.vertexAttrib1fv(ae.location,Z)}}}}P()}function b(){ee();for(const G in s){const X=s[G];for(const te in X){const q=X[te];for(const K in q)w(q[K].object),delete q[K];delete X[te]}delete s[G]}}function S(G){if(s[G.id]===void 0)return;const X=s[G.id];for(const te in X){const q=X[te];for(const K in q)w(q[K].object),delete q[K];delete X[te]}delete s[G.id]}function Y(G){for(const X in s){const te=s[X];if(te[G.id]===void 0)continue;const q=te[G.id];for(const K in q)w(q[K].object),delete q[K];delete te[G.id]}}function ee(){N(),h=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:_,reset:ee,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:R,disableUnusedAttributes:P}}function p_(i,e,t,r){const n=r.isWebGL2;let a;function o(c){a=c}function s(c,h){i.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,_){if(_===0)return;let p,f;if(n)p=i,f="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](a,c,h,_),t.update(h,a,_)}this.setMode=o,this.render=s,this.renderInstances=l}function __(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,R=o||e.has("OES_texture_float"),E=M&&R,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:_,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:w,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:E,maxSamples:P}}function f_(i){const e=this;let t=null,r=0,n=!1,a=!1;const o=new Zr,s=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(_,p){const f=_.length!==0||p||r!==0||n;return n=p,r=_.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,p){t=h(_,p,0)},this.setState=function(_,p,f){const w=_.clippingPlanes,g=_.clipIntersection,m=_.clipShadows,d=i.get(_);if(!n||w===null||w.length===0||a&&!m)a?h(null):c();else{const T=a?0:r,M=T*4;let R=d.clippingState||null;l.value=R,R=h(w,p,M,f);for(let E=0;E!==M;++E)R[E]=t[E];d.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(_,p,f,w){const g=_!==null?_.length:0;let m=null;if(g!==0){if(m=l.value,w!==!0||m===null){const d=f+g*4,T=p.matrixWorldInverse;s.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,R=f;M!==g;++M,R+=4)o.copy(_[M]).applyMatrix4(T,s),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function m_(i){let e=new WeakMap;function t(o,s){return s===za?o.mapping=di:s===Ba&&(o.mapping=pi),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===za||s===Ba)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Du(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class g_ extends ql{constructor(e=-1,t=1,r=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,Zl=[.125,.215,.35,.446,.526,.582],$r=20,ws=new g_,Ql=new Je;let vs=null;const ei=(1+Math.sqrt(5))/2,Oi=1/ei,$l=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ei,Oi),new z(0,ei,-Oi),new z(Oi,0,ei),new z(-Oi,0,ei),new z(ei,Oi,0),new z(-ei,Oi,0)];class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){vs=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vs),e.scissorTest=!1,Zn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:qi,format:qt,colorSpace:rr,depthBuffer:!1},n=tc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(a)),this._blurMaterial=v_(a,e,t)}return n}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,r,n){const a=new kt(90,1,t,r),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ql),l.toneMapping=pr,l.autoClear=!1;const _=new Ri({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),p=new Gt(new br,_);let f=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(Ql),f=!0);for(let g=0;g<6;g++){const m=g%3;m===0?(a.up.set(0,o[g],0),a.lookAt(s[g],0,0)):m===1?(a.up.set(0,0,o[g]),a.lookAt(0,s[g],0)):(a.up.set(0,o[g],0),a.lookAt(0,0,s[g]));const d=this._cubeSize;Zn(n,m*d,g>2?d:0,d,d),l.setRenderTarget(n),f&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===di||e.mapping===pi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Zn(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,ws)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=$l[(n-1)%$l.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",a),this._halfBlur(o,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,_=new Gt(this._lodPlanes[n],c),p=c.uniforms,f=this._sizeLods[r]-1,w=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*$r-1),g=a/w,m=isFinite(a)?1+Math.floor(h*g):$r;m>$r&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$r}`);const d=[];let T=0;for(let I=0;I<$r;++I){const J=I/g,b=Math.exp(-J*J/2);d.push(b),I===0?T+=b:I<m&&(T+=2*b)}for(let I=0;I<d.length;I++)d[I]=d[I]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:M}=this;p.dTheta.value=w,p.mipInt.value=M-r;const R=this._sizeLods[n],E=3*R*(n>M-Ni?n-M+Ni:0),P=4*(this._cubeSize-R);Zn(t,E,P,3*R,2*R),l.setRenderTarget(t),l.render(_,ws)}}function w_(i){const e=[],t=[],r=[];let n=i;const a=i-Ni+1+Zl.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>i-Ni?l=Zl[o-i+Ni-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),h=-c,_=1+c,p=[h,h,_,h,_,_,h,h,_,_,h,_],f=6,w=6,g=3,m=2,d=1,T=new Float32Array(g*w*f),M=new Float32Array(m*w*f),R=new Float32Array(d*w*f);for(let P=0;P<f;P++){const I=P%3*2/3-1,J=P>2?0:-1,b=[I,J,0,I+2/3,J,0,I+2/3,J+1,0,I,J,0,I+2/3,J+1,0,I,J+1,0];T.set(b,g*w*P),M.set(p,m*w*P);const S=[P,P,P,P,P,P];R.set(S,d*w*P)}const E=new Kr;E.setAttribute("position",new ir(T,g)),E.setAttribute("uv",new ir(M,m)),E.setAttribute("faceIndex",new ir(R,d)),e.push(E),n>Ni&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function tc(i,e,t){const r=new jr(i,e,t);return r.texture.mapping=Rn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zn(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function v_(i,e,t){const r=new Float32Array($r),n=new z(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function rc(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function ic(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function bs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b_(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===za||l===Ba,h=l===di||l===pi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let _=e.get(s);return t===null&&(t=new ec(i)),_=c?t.fromEquirectangular(s,_):t.fromCubemap(s,_),e.set(s,_),_.texture}else{if(e.has(s))return e.get(s).texture;{const _=s.image;if(c&&_&&_.height>0||h&&_&&n(_)){t===null&&(t=new ec(i));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function y_(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function x_(i,e,t,r){const n={},a=new WeakMap;function o(_){const p=_.target;p.index!==null&&e.remove(p.index);for(const w in p.attributes)e.remove(p.attributes[w]);p.removeEventListener("dispose",o),delete n[p.id];const f=a.get(p);f&&(e.remove(f),a.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(_,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,t.memory.geometries++),p}function l(_){const p=_.attributes;for(const w in p)e.update(p[w],i.ARRAY_BUFFER);const f=_.morphAttributes;for(const w in f){const g=f[w];for(let m=0,d=g.length;m<d;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(_){const p=[],f=_.index,w=_.attributes.position;let g=0;if(f!==null){const T=f.array;g=f.version;for(let M=0,R=T.length;M<R;M+=3){const E=T[M+0],P=T[M+1],I=T[M+2];p.push(E,P,P,I,I,E)}}else{const T=w.array;g=w.version;for(let M=0,R=T.length/3-1;M<R;M+=3){const E=M+0,P=M+1,I=M+2;p.push(E,P,P,I,I,E)}}const m=new(Ml(p)?Hl:Bl)(p,1);m.version=g;const d=a.get(_);d&&e.remove(d),a.set(_,m)}function h(_){const p=a.get(_);if(p){const f=_.index;f!==null&&p.version<f.version&&c(_)}else c(_);return a.get(_)}return{get:s,update:l,getWireframeAttribute:h}}function M_(i,e,t,r){const n=r.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function h(p,f){i.drawElements(a,f,s,p*l),t.update(f,a,1)}function _(p,f,w){if(w===0)return;let g,m;if(n)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,f,s,p*l,w),t.update(f,a,w)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=_}function S_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function E_(i,e){return i[0]-e[0]}function T_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function R_(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,o=new ft,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,_){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const w=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=w!==void 0?w.length:0;let m=a.get(h);if(m===void 0||m.count!==g){let M=function(){G.dispose(),a.delete(h),h.removeEventListener("dispose",M)};var f=M;m!==void 0&&m.texture.dispose();const R=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],J=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let S=0;R===!0&&(S=1),E===!0&&(S=2),P===!0&&(S=3);let Y=h.attributes.position.count*S,ee=1;Y>e.maxTextureSize&&(ee=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const N=new Float32Array(Y*ee*4*g),G=new Rl(N,Y,ee,g);G.type=Gr,G.needsUpdate=!0;const X=S*4;for(let te=0;te<g;te++){const q=I[te],K=J[te],ne=b[te],Q=Y*ee*4*te;for(let ye=0;ye<q.count;ye++){const ae=ye*X;R===!0&&(o.fromBufferAttribute(q,ye),N[Q+ae+0]=o.x,N[Q+ae+1]=o.y,N[Q+ae+2]=o.z,N[Q+ae+3]=0),E===!0&&(o.fromBufferAttribute(K,ye),N[Q+ae+4]=o.x,N[Q+ae+5]=o.y,N[Q+ae+6]=o.z,N[Q+ae+7]=0),P===!0&&(o.fromBufferAttribute(ne,ye),N[Q+ae+8]=o.x,N[Q+ae+9]=o.y,N[Q+ae+10]=o.z,N[Q+ae+11]=ne.itemSize===4?o.w:1)}}m={count:g,texture:G,size:new Ke(Y,ee)},a.set(h,m),h.addEventListener("dispose",M)}let d=0;for(let M=0;M<p.length;M++)d+=p[M];const T=h.morphTargetsRelative?1:1-d;_.getUniforms().setValue(i,"morphTargetBaseInfluence",T),_.getUniforms().setValue(i,"morphTargetInfluences",p),_.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const w=p===void 0?0:p.length;let g=r[h.id];if(g===void 0||g.length!==w){g=[];for(let R=0;R<w;R++)g[R]=[R,0];r[h.id]=g}for(let R=0;R<w;R++){const E=g[R];E[0]=R,E[1]=p[R]}g.sort(T_);for(let R=0;R<8;R++)R<w&&g[R][1]?(s[R][0]=g[R][0],s[R][1]=g[R][1]):(s[R][0]=Number.MAX_SAFE_INTEGER,s[R][1]=0);s.sort(E_);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let T=0;for(let R=0;R<8;R++){const E=s[R],P=E[0],I=E[1];P!==Number.MAX_SAFE_INTEGER&&I?(m&&h.getAttribute("morphTarget"+R)!==m[P]&&h.setAttribute("morphTarget"+R,m[P]),d&&h.getAttribute("morphNormal"+R)!==d[P]&&h.setAttribute("morphNormal"+R,d[P]),n[R]=I,T+=I):(m&&h.hasAttribute("morphTarget"+R)===!0&&h.deleteAttribute("morphTarget"+R),d&&h.hasAttribute("morphNormal"+R)===!0&&h.deleteAttribute("morphNormal"+R),n[R]=0)}const M=h.morphTargetsRelative?1:1-T;_.getUniforms().setValue(i,"morphTargetBaseInfluence",M),_.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function A_(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,h=l.geometry,_=e.get(l,h);return n.get(_)!==c&&(e.update(_),n.set(_,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER)),_}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const nc=new It,ac=new Rl,sc=new fu,oc=new Yl,lc=[],cc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Fi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=lc[n];if(a===void 0&&(a=new Float32Array(n),lc[n]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Qn(i,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function D_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function U_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,r))return;dc.set(r),i.uniformMatrix2fv(this.addr,!1,dc),ct(t,r)}}function I_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,r))return;uc.set(r),i.uniformMatrix3fv(this.addr,!1,uc),ct(t,r)}}function N_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,r))return;hc.set(r),i.uniformMatrix4fv(this.addr,!1,hc),ct(t,r)}}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function H_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function W_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function V_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2D(e||nc,n)}function j_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||sc,n)}function X_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||oc,n)}function q_(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||ac,n)}function Y_(i){switch(i){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return U_;case 35675:return I_;case 35676:return N_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return z_;case 35669:case 35673:return B_;case 5125:return H_;case 36294:return G_;case 36295:return k_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function K_(i,e){i.uniform1fv(this.addr,e)}function J_(i,e){const t=Fi(e,this.size,2);i.uniform2fv(this.addr,t)}function Z_(i,e){const t=Fi(e,this.size,3);i.uniform3fv(this.addr,t)}function Q_(i,e){const t=Fi(e,this.size,4);i.uniform4fv(this.addr,t)}function $_(i,e){const t=Fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ef(i,e){const t=Fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tf(i,e){const t=Fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rf(i,e){i.uniform1iv(this.addr,e)}function nf(i,e){i.uniform2iv(this.addr,e)}function af(i,e){i.uniform3iv(this.addr,e)}function sf(i,e){i.uniform4iv(this.addr,e)}function of(i,e){i.uniform1uiv(this.addr,e)}function lf(i,e){i.uniform2uiv(this.addr,e)}function cf(i,e){i.uniform3uiv(this.addr,e)}function hf(i,e){i.uniform4uiv(this.addr,e)}function uf(i,e,t){const r=this.cache,n=e.length,a=Qn(t,n);lt(r,a)||(i.uniform1iv(this.addr,a),ct(r,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||nc,a[o])}function df(i,e,t){const r=this.cache,n=e.length,a=Qn(t,n);lt(r,a)||(i.uniform1iv(this.addr,a),ct(r,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||sc,a[o])}function pf(i,e,t){const r=this.cache,n=e.length,a=Qn(t,n);lt(r,a)||(i.uniform1iv(this.addr,a),ct(r,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||oc,a[o])}function _f(i,e,t){const r=this.cache,n=e.length,a=Qn(t,n);lt(r,a)||(i.uniform1iv(this.addr,a),ct(r,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||ac,a[o])}function ff(i){switch(i){case 5126:return K_;case 35664:return J_;case 35665:return Z_;case 35666:return Q_;case 35674:return $_;case 35675:return ef;case 35676:return tf;case 5124:case 35670:return rf;case 35667:case 35671:return nf;case 35668:case 35672:return af;case 35669:case 35673:return sf;case 5125:return of;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return _f}}class mf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Y_(t.type)}}class gf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=ff(t.type)}}class wf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],r)}}}const ys=/(\w+)(\])?(\[|\.)?/g;function pc(i,e){i.seq.push(e),i.map[e.id]=e}function vf(i,e,t){const r=i.name,n=r.length;for(ys.lastIndex=0;;){const a=ys.exec(r),o=ys.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){pc(t,c===void 0?new mf(s,i,e):new gf(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new wf(s),pc(t,h)),t=h}}}class $n{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);vf(a,o,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function _c(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}let bf=0;function yf(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function xf(i){switch(i){case rr:return["Linear","( value )"];case Pe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function fc(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+yf(i.getShaderSource(e),o)}else return n}function Mf(i,e){const t=xf(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Sf(i,e){let t;switch(e){case Ih:t="Linear";break;case Nh:t="Reinhard";break;case Oh:t="OptimizedCineon";break;case Fh:t="ACESFilmic";break;case zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ef(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rn).join(`
`)}function Tf(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Rf(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function rn(i){return i!==""}function mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Af=/^[ \t]*#include +<([\w\d./]+)>/gm;function xs(i){return i.replace(Af,Cf)}function Cf(i,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xs(t)}const Pf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(Pf,Lf)}function Lf(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function vc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Df(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function Uf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case pi:e="ENVMAP_TYPE_CUBE";break;case Rn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function If(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Nf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Uh:e="ENVMAP_BLENDING_ADD";break}return e}function Of(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Ff(i,e,t,r){const n=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Df(t),c=Uf(t),h=If(t),_=Nf(t),p=Of(t),f=t.isWebGL2?"":Ef(t),w=Tf(a),g=n.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[w].filter(rn).join(`
`),m.length>0&&(m+=`
`),d=[f,w].filter(rn).join(`
`),d.length>0&&(d+=`
`)):(m=[vc(t),"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rn).join(`
`),d=[f,vc(t),"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pr?"#define TONE_MAPPING":"",t.toneMapping!==pr?Le.tonemapping_pars_fragment:"",t.toneMapping!==pr?Sf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,Mf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rn).join(`
`)),o=xs(o),o=mc(o,t),o=gc(o,t),s=xs(s),s=mc(s,t),s=gc(s,t),o=wc(o),s=wc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=T+m+o,R=T+d+s,E=_c(n,n.VERTEX_SHADER,M),P=_c(n,n.FRAGMENT_SHADER,R);if(n.attachShader(g,E),n.attachShader(g,P),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),i.debug.checkShaderErrors){const b=n.getProgramInfoLog(g).trim(),S=n.getShaderInfoLog(E).trim(),Y=n.getShaderInfoLog(P).trim();let ee=!0,N=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,g,E,P);else{const G=fc(n,E,"vertex"),X=fc(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+G+`
`+X)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(S===""||Y==="")&&(N=!1);N&&(this.diagnostics={runnable:ee,programLog:b,vertexShader:{log:S,prefix:m},fragmentShader:{log:Y,prefix:d}})}n.deleteShader(E),n.deleteShader(P);let I;this.getUniforms=function(){return I===void 0&&(I=new $n(n,g)),I};let J;return this.getAttributes=function(){return J===void 0&&(J=Rf(n,g)),J},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=bf++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=P,this}let zf=0;class Bf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Hf(e),t.set(e,r)),r}}class Hf{constructor(e){this.id=zf++,this.code=e,this.usedTimes=0}}function Gf(i,e,t,r,n,a,o){const s=new Ll,l=new Bf,c=[],h=n.isWebGL2,_=n.logarithmicDepthBuffer,p=n.vertexTextures;let f=n.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function m(b,S,Y,ee,N){const G=ee.fog,X=N.geometry,te=b.isMeshStandardMaterial?ee.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||te),K=q&&q.mapping===Rn?q.image.height:null,ne=w[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=Q!==void 0?Q.length:0;let ae=0;X.morphAttributes.position!==void 0&&(ae=1),X.morphAttributes.normal!==void 0&&(ae=2),X.morphAttributes.color!==void 0&&(ae=3);let B,Z,ue,he;if(ne){const be=ar[ne];B=be.vertexShader,Z=be.fragmentShader}else B=b.vertexShader,Z=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const L=i.getRenderTarget(),Ce=N.isInstancedMesh===!0,Te=!!b.map,oe=!!b.matcap,Me=!!q,ke=!!b.aoMap,we=!!b.lightMap,Ue=!!b.bumpMap,dt=!!b.normalMap,gt=!!b.displacementMap,pt=!!b.emissiveMap,ht=!!b.metalnessMap,We=!!b.roughnessMap,rt=b.clearcoat>0,Pt=b.iridescence>0,x=b.sheen>0,v=b.transmission>0,H=rt&&!!b.clearcoatMap,re=rt&&!!b.clearcoatNormalMap,ie=rt&&!!b.clearcoatRoughnessMap,le=Pt&&!!b.iridescenceMap,Se=Pt&&!!b.iridescenceThicknessMap,pe=x&&!!b.sheenColorMap,j=x&&!!b.sheenRoughnessMap,ge=!!b.specularMap,ve=!!b.specularColorMap,xe=!!b.specularIntensityMap,de=v&&!!b.transmissionMap,me=v&&!!b.thicknessMap,Fe=!!b.gradientMap,Ve=!!b.alphaMap,it=b.alphaTest>0,C=!!b.extensions,k=!!X.attributes.uv1,$=!!X.attributes.uv2,ce=!!X.attributes.uv3;return{isWebGL2:h,shaderID:ne,shaderName:b.type,vertexShader:B,fragmentShader:Z,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:rr,map:Te,matcap:oe,envMap:Me,envMapMode:Me&&q.mapping,envMapCubeUVHeight:K,aoMap:ke,lightMap:we,bumpMap:Ue,normalMap:dt,displacementMap:p&&gt,emissiveMap:pt,normalMapObjectSpace:dt&&b.normalMapType===nu,normalMapTangentSpace:dt&&b.normalMapType===iu,metalnessMap:ht,roughnessMap:We,clearcoat:rt,clearcoatMap:H,clearcoatNormalMap:re,clearcoatRoughnessMap:ie,iridescence:Pt,iridescenceMap:le,iridescenceThicknessMap:Se,sheen:x,sheenColorMap:pe,sheenRoughnessMap:j,specularMap:ge,specularColorMap:ve,specularIntensityMap:xe,transmission:v,transmissionMap:de,thicknessMap:me,gradientMap:Fe,opaque:b.transparent===!1&&b.blending===hi,alphaMap:Ve,alphaTest:it,combine:b.combine,mapUv:Te&&g(b.map.channel),aoMapUv:ke&&g(b.aoMap.channel),lightMapUv:we&&g(b.lightMap.channel),bumpMapUv:Ue&&g(b.bumpMap.channel),normalMapUv:dt&&g(b.normalMap.channel),displacementMapUv:gt&&g(b.displacementMap.channel),emissiveMapUv:pt&&g(b.emissiveMap.channel),metalnessMapUv:ht&&g(b.metalnessMap.channel),roughnessMapUv:We&&g(b.roughnessMap.channel),clearcoatMapUv:H&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:j&&g(b.sheenRoughnessMap.channel),specularMapUv:ge&&g(b.specularMap.channel),specularColorMapUv:ve&&g(b.specularColorMap.channel),specularIntensityMapUv:xe&&g(b.specularIntensityMap.channel),transmissionMapUv:de&&g(b.transmissionMap.channel),thicknessMapUv:me&&g(b.thicknessMap.channel),alphaMapUv:Ve&&g(b.alphaMap.channel),vertexTangents:dt&&!!X.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:$,vertexUv3s:ce,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Te||Ve),fog:!!G,useFog:b.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:pr,useLegacyLights:i.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dr,flipSided:b.side===At,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:C&&b.extensions.derivatives===!0,extensionFragDepth:C&&b.extensions.fragDepth===!0,extensionDrawBuffers:C&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||r.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)S.push(Y),S.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(T(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){s.disableAll(),S.isWebGL2&&s.enable(0),S.supportsVertexTextures&&s.enable(1),S.instancing&&s.enable(2),S.instancingColor&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),b.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.useLegacyLights&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),b.push(s.mask)}function R(b){const S=w[b.type];let Y;if(S){const ee=ar[S];Y=Au.clone(ee.uniforms)}else Y=b.uniforms;return Y}function E(b,S){let Y;for(let ee=0,N=c.length;ee<N;ee++){const G=c[ee];if(G.cacheKey===S){Y=G,++Y.usedTimes;break}}return Y===void 0&&(Y=new Ff(i,S,b,a),c.push(Y)),Y}function P(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function I(b){l.remove(b)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:R,acquireProgram:E,releaseProgram:P,releaseShaderCache:I,programs:c,dispose:J}}function kf(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function r(a,o,s){i.get(a)[o]=s}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yc(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function o(_,p,f,w,g,m){let d=i[e];return d===void 0?(d={id:_.id,object:_,geometry:p,material:f,groupOrder:w,renderOrder:_.renderOrder,z:g,group:m},i[e]=d):(d.id=_.id,d.object=_,d.geometry=p,d.material=f,d.groupOrder=w,d.renderOrder=_.renderOrder,d.z=g,d.group=m),e++,d}function s(_,p,f,w,g,m){const d=o(_,p,f,w,g,m);f.transmission>0?r.push(d):f.transparent===!0?n.push(d):t.push(d)}function l(_,p,f,w,g,m){const d=o(_,p,f,w,g,m);f.transmission>0?r.unshift(d):f.transparent===!0?n.unshift(d):t.unshift(d)}function c(_,p){t.length>1&&t.sort(_||Wf),r.length>1&&r.sort(p||bc),n.length>1&&n.sort(p||bc)}function h(){for(let _=e,p=i.length;_<p;_++){const f=i[_];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:s,unshift:l,finish:h,sort:c}}function Vf(){let i=new WeakMap;function e(r,n){const a=i.get(r);let o;return a===void 0?(o=new yc,i.set(r,[o])):n>=a.length?(o=new yc,a.push(o)):o=a[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Xf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qf=0;function Yf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kf(i,e){const t=new jf,r=Xf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new z);const a=new z,o=new mt,s=new mt;function l(h,_){let p=0,f=0,w=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let g=0,m=0,d=0,T=0,M=0,R=0,E=0,P=0,I=0,J=0;h.sort(Yf);const b=_===!0?Math.PI:1;for(let Y=0,ee=h.length;Y<ee;Y++){const N=h[Y],G=N.color,X=N.intensity,te=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=G.r*X*b,f+=G.g*X*b,w+=G.b*X*b;else if(N.isLightProbe)for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],X);else if(N.isDirectionalLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const ne=N.shadow,Q=r.get(N);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=N.shadow.matrix,R++}n.directional[g]=K,g++}else if(N.isSpotLight){const K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(G).multiplyScalar(X*b),K.distance=te,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[d]=K;const ne=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,ne.updateMatrices(N),N.castShadow&&J++),n.spotLightMatrix[d]=ne.matrix,N.castShadow){const Q=r.get(N);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,n.spotShadow[d]=Q,n.spotShadowMap[d]=q,P++}d++}else if(N.isRectAreaLight){const K=t.get(N);K.color.copy(G).multiplyScalar(X),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=K,T++}else if(N.isPointLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*b),K.distance=N.distance,K.decay=N.decay,N.castShadow){const ne=N.shadow,Q=r.get(N);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,Q.shadowCameraNear=ne.camera.near,Q.shadowCameraFar=ne.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=N.shadow.matrix,E++}n.point[m]=K,m++}else if(N.isHemisphereLight){const K=t.get(N);K.skyColor.copy(N.color).multiplyScalar(X*b),K.groundColor.copy(N.groundColor).multiplyScalar(X*b),n.hemi[M]=K,M++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=f,n.ambient[2]=w;const S=n.hash;(S.directionalLength!==g||S.pointLength!==m||S.spotLength!==d||S.rectAreaLength!==T||S.hemiLength!==M||S.numDirectionalShadows!==R||S.numPointShadows!==E||S.numSpotShadows!==P||S.numSpotMaps!==I)&&(n.directional.length=g,n.spot.length=d,n.rectArea.length=T,n.point.length=m,n.hemi.length=M,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=P+I-J,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=J,S.directionalLength=g,S.pointLength=m,S.spotLength=d,S.rectAreaLength=T,S.hemiLength=M,S.numDirectionalShadows=R,S.numPointShadows=E,S.numSpotShadows=P,S.numSpotMaps=I,n.version=qf++)}function c(h,_){let p=0,f=0,w=0,g=0,m=0;const d=_.matrixWorldInverse;for(let T=0,M=h.length;T<M;T++){const R=h[T];if(R.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),p++}else if(R.isSpotLight){const E=n.spot[w];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),w++}else if(R.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(d),s.identity(),o.copy(R.matrixWorld),o.premultiply(d),s.extractRotation(o),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(R.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(d),f++}else if(R.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:n}}function xc(i,e){const t=new Kf(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function o(h){r.push(h)}function s(h){n.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Jf(i,e){let t=new WeakMap;function r(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new xc(i,e),t.set(a,[l])):o>=s.length?(l=new xc(i,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class Zf extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $f=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tm(i,e,t){let r=new Kl;const n=new Ke,a=new Ke,o=new ft,s=new Zf({depthPacking:ru}),l=new Qf,c={},h=t.maxTextureSize,_={[Sr]:At,[At]:Sr,[dr]:dr},p=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:$f,fragmentShader:em}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const w=new Kr;w.setAttribute("position",new ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Gt(w,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let d=this.type;this.render=function(E,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const J=i.getRenderTarget(),b=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Er),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ee=d!==ur&&this.type===ur,N=d===ur&&this.type!==ur;for(let G=0,X=E.length;G<X;G++){const te=E[G],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const K=q.getFrameExtents();if(n.multiply(K),a.copy(q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/K.x),n.x=a.x*K.x,q.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/K.y),n.y=a.y*K.y,q.mapSize.y=a.y)),q.map===null||ee===!0||N===!0){const Q=this.type!==ur?{minFilter:Mt,magFilter:Mt}:{};q.map!==null&&q.map.dispose(),q.map=new jr(n.x,n.y,Q),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ne=q.getViewportCount();for(let Q=0;Q<ne;Q++){const ye=q.getViewport(Q);o.set(a.x*ye.x,a.y*ye.y,a.x*ye.z,a.y*ye.w),Y.viewport(o),q.updateMatrices(te,Q),r=q.getFrustum(),R(P,I,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===ur&&T(q,I),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(J,b,S)};function T(E,P){const I=e.update(g);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jr(n.x,n.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,I,p,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,I,f,g,null)}function M(E,P,I,J){let b=null;const S=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)b=S;else if(b=I.isPointLight===!0?l:s,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=b.uuid,ee=P.uuid;let N=c[Y];N===void 0&&(N={},c[Y]=N);let G=N[ee];G===void 0&&(G=b.clone(),N[ee]=G),b=G}if(b.visible=P.visible,b.wireframe=P.wireframe,J===ur?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:_[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=i.properties.get(b);Y.light=I}return b}function R(E,P,I,J,b){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ur)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const Y=e.update(E),ee=E.material;if(Array.isArray(ee)){const N=Y.groups;for(let G=0,X=N.length;G<X;G++){const te=N[G],q=ee[te.materialIndex];if(q&&q.visible){const K=M(E,q,J,b);i.renderBufferDirect(I,null,Y,K,E,te)}}}else if(ee.visible){const N=M(E,ee,J,b);i.renderBufferDirect(I,null,Y,N,E,null)}}const S=E.children;for(let Y=0,ee=S.length;Y<ee;Y++)R(S[Y],P,I,J,b)}}function rm(i,e,t){const r=t.isWebGL2;function n(){let C=!1;const k=new ft;let $=null;const ce=new ft(0,0,0,0);return{setMask:function(be){$!==be&&!C&&(i.colorMask(be,be,be,be),$=be)},setLocked:function(be){C=be},setClear:function(be,Ze,Xe,yt,Dr){Dr===!0&&(be*=yt,Ze*=yt,Xe*=yt),k.set(be,Ze,Xe,yt),ce.equals(k)===!1&&(i.clearColor(be,Ze,Xe,yt),ce.copy(k))},reset:function(){C=!1,$=null,ce.set(-1,0,0,0)}}}function a(){let C=!1,k=null,$=null,ce=null;return{setTest:function(be){be?L(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(be){k!==be&&!C&&(i.depthMask(be),k=be)},setFunc:function(be){if($!==be){switch(be){case Eh:i.depthFunc(i.NEVER);break;case Th:i.depthFunc(i.ALWAYS);break;case Rh:i.depthFunc(i.LESS);break;case Fa:i.depthFunc(i.LEQUAL);break;case Ah:i.depthFunc(i.EQUAL);break;case Ch:i.depthFunc(i.GEQUAL);break;case Ph:i.depthFunc(i.GREATER);break;case Lh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=be}},setLocked:function(be){C=be},setClear:function(be){ce!==be&&(i.clearDepth(be),ce=be)},reset:function(){C=!1,k=null,$=null,ce=null}}}function o(){let C=!1,k=null,$=null,ce=null,be=null,Ze=null,Xe=null,yt=null,Dr=null;return{setTest:function(nt){C||(nt?L(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(nt){k!==nt&&!C&&(i.stencilMask(nt),k=nt)},setFunc:function(nt,Wt,sr){($!==nt||ce!==Wt||be!==sr)&&(i.stencilFunc(nt,Wt,sr),$=nt,ce=Wt,be=sr)},setOp:function(nt,Wt,sr){(Ze!==nt||Xe!==Wt||yt!==sr)&&(i.stencilOp(nt,Wt,sr),Ze=nt,Xe=Wt,yt=sr)},setLocked:function(nt){C=nt},setClear:function(nt){Dr!==nt&&(i.clearStencil(nt),Dr=nt)},reset:function(){C=!1,k=null,$=null,ce=null,be=null,Ze=null,Xe=null,yt=null,Dr=null}}}const s=new n,l=new a,c=new o,h=new WeakMap,_=new WeakMap;let p={},f={},w=new WeakMap,g=[],m=null,d=!1,T=null,M=null,R=null,E=null,P=null,I=null,J=null,b=!1,S=null,Y=null,ee=null,N=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,q=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),te=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),te=q>=2);let ne=null,Q={};const ye=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),B=new ft().fromArray(ye),Z=new ft().fromArray(ae);function ue(C,k,$,ce){const be=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(C,Ze),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<$;Xe++)r&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(k,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(k+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ze}const he={};he[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(he[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),L(i.DEPTH_TEST),l.setFunc(Fa),gt(!1),pt(Oo),L(i.CULL_FACE),Ue(Er);function L(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function Ce(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function Te(C,k){return f[C]!==k?(i.bindFramebuffer(C,k),f[C]=k,r&&(C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=k),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=k)),!0):!1}function oe(C,k){let $=g,ce=!1;if(C)if($=w.get(k),$===void 0&&($=[],w.set(k,$)),C.isWebGLMultipleRenderTargets){const be=C.texture;if($.length!==be.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Xe=be.length;Ze<Xe;Ze++)$[Ze]=i.COLOR_ATTACHMENT0+Ze;$.length=be.length,ce=!0}}else $[0]!==i.COLOR_ATTACHMENT0&&($[0]=i.COLOR_ATTACHMENT0,ce=!0);else $[0]!==i.BACK&&($[0]=i.BACK,ce=!0);ce&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Me(C){return m!==C?(i.useProgram(C),m=C,!0):!1}const ke={[ui]:i.FUNC_ADD,[_h]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};if(r)ke[Go]=i.MIN,ke[ko]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ke[Go]=C.MIN_EXT,ke[ko]=C.MAX_EXT)}const we={[mh]:i.ZERO,[gh]:i.ONE,[wh]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Sh]:i.SRC_ALPHA_SATURATE,[xh]:i.DST_COLOR,[bh]:i.DST_ALPHA,[vh]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[Mh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA};function Ue(C,k,$,ce,be,Ze,Xe,yt){if(C===Er){d===!0&&(Ce(i.BLEND),d=!1);return}if(d===!1&&(L(i.BLEND),d=!0),C!==ph){if(C!==T||yt!==b){if((M!==ui||P!==ui)&&(i.blendEquation(i.FUNC_ADD),M=ui,P=ui),yt)switch(C){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,E=null,I=null,J=null,T=C,b=yt}return}be=be||k,Ze=Ze||$,Xe=Xe||ce,(k!==M||be!==P)&&(i.blendEquationSeparate(ke[k],ke[be]),M=k,P=be),($!==R||ce!==E||Ze!==I||Xe!==J)&&(i.blendFuncSeparate(we[$],we[ce],we[Ze],we[Xe]),R=$,E=ce,I=Ze,J=Xe),T=C,b=!1}function dt(C,k){C.side===dr?Ce(i.CULL_FACE):L(i.CULL_FACE);let $=C.side===At;k&&($=!$),gt($),C.blending===hi&&C.transparent===!1?Ue(Er):Ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),s.setMask(C.colorWrite);const ce=C.stencilWrite;c.setTest(ce),ce&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),We(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(C){S!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),S=C)}function pt(C){C!==hh?(L(i.CULL_FACE),C!==Y&&(C===Oo?i.cullFace(i.BACK):C===uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),Y=C}function ht(C){C!==ee&&(te&&i.lineWidth(C),ee=C)}function We(C,k,$){C?(L(i.POLYGON_OFFSET_FILL),(N!==k||G!==$)&&(i.polygonOffset(k,$),N=k,G=$)):Ce(i.POLYGON_OFFSET_FILL)}function rt(C){C?L(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function Pt(C){C===void 0&&(C=i.TEXTURE0+X-1),ne!==C&&(i.activeTexture(C),ne=C)}function x(C,k,$){$===void 0&&(ne===null?$=i.TEXTURE0+X-1:$=ne);let ce=Q[$];ce===void 0&&(ce={type:void 0,texture:void 0},Q[$]=ce),(ce.type!==C||ce.texture!==k)&&(ne!==$&&(i.activeTexture($),ne=$),i.bindTexture(C,k||he[C]),ce.type=C,ce.texture=k)}function v(){const C=Q[ne];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(C){B.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),B.copy(C))}function me(C){Z.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Z.copy(C))}function Fe(C,k){let $=_.get(k);$===void 0&&($=new WeakMap,_.set(k,$));let ce=$.get(C);ce===void 0&&(ce=i.getUniformBlockIndex(k,C.name),$.set(C,ce))}function Ve(C,k){const $=_.get(k).get(C);h.get(k)!==$&&(i.uniformBlockBinding(k,$,C.__bindingPointIndex),h.set(k,$))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ne=null,Q={},f={},w=new WeakMap,g=[],m=null,d=!1,T=null,M=null,R=null,E=null,P=null,I=null,J=null,b=!1,S=null,Y=null,ee=null,N=null,G=null,B.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:L,disable:Ce,bindFramebuffer:Te,drawBuffers:oe,useProgram:Me,setBlending:Ue,setMaterial:dt,setFlipSided:gt,setCullFace:pt,setLineWidth:ht,setPolygonOffset:We,setScissorTest:rt,activeTexture:Pt,bindTexture:x,unbindTexture:v,compressedTexImage2D:H,compressedTexImage3D:re,texImage2D:ve,texImage3D:xe,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:j,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:le,compressedTexSubImage2D:Se,compressedTexSubImage3D:pe,scissor:de,viewport:me,reset:it}}function im(i,e,t,r,n,a,o){const s=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,_=n.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(x,v){return d?new OffscreenCanvas(x,v):Cn("canvas")}function M(x,v,H,re){let ie=1;if((x.width>re||x.height>re)&&(ie=re/Math.max(x.width,x.height)),ie<1||v===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const le=v?ou:Math.floor,Se=le(ie*x.width),pe=le(ie*x.height);g===void 0&&(g=T(Se,pe));const j=H?T(Se,pe):g;return j.width=Se,j.height=pe,j.getContext("2d").drawImage(x,0,0,Se,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Se+"x"+pe+")."),j}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function R(x){return xl(x.width)&&xl(x.height)}function E(x){return s?!1:x.wrapS!==Xt||x.wrapT!==Xt||x.minFilter!==Mt&&x.minFilter!==Bt}function P(x,v){return x.generateMipmaps&&v&&x.minFilter!==Mt&&x.minFilter!==Bt}function I(x){i.generateMipmap(x)}function J(x,v,H,re,ie=!1){if(s===!1)return v;if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let le=v;return v===i.RED&&(H===i.FLOAT&&(le=i.R32F),H===i.HALF_FLOAT&&(le=i.R16F),H===i.UNSIGNED_BYTE&&(le=i.R8)),v===i.RG&&(H===i.FLOAT&&(le=i.RG32F),H===i.HALF_FLOAT&&(le=i.RG16F),H===i.UNSIGNED_BYTE&&(le=i.RG8)),v===i.RGBA&&(H===i.FLOAT&&(le=i.RGBA32F),H===i.HALF_FLOAT&&(le=i.RGBA16F),H===i.UNSIGNED_BYTE&&(le=re===Pe&&ie===!1?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)),(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function b(x,v,H){return P(x,H)===!0||x.isFramebufferTexture&&x.minFilter!==Mt&&x.minFilter!==Bt?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function S(x){return x===Mt||x===qo||x===ka?i.NEAREST:i.LINEAR}function Y(x){const v=x.target;v.removeEventListener("dispose",Y),N(v),v.isVideoTexture&&w.delete(v)}function ee(x){const v=x.target;v.removeEventListener("dispose",ee),X(v)}function N(x){const v=r.get(x);if(v.__webglInit===void 0)return;const H=x.source,re=m.get(H);if(re){const ie=re[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&G(x),Object.keys(re).length===0&&m.delete(H)}r.remove(x)}function G(x){const v=r.get(x);i.deleteTexture(v.__webglTexture);const H=x.source,re=m.get(H);delete re[v.__cacheKey],o.memory.textures--}function X(x){const v=x.texture,H=r.get(x),re=r.get(v);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ie=0,le=v.length;ie<le;ie++){const Se=r.get(v[ie]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),r.remove(v[ie])}r.remove(v),r.remove(x)}let te=0;function q(){te=0}function K(){const x=te;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),te+=1,x}function ne(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function Q(x,v){const H=r.get(x);if(x.isVideoTexture&&rt(x),x.isRenderTargetTexture===!1&&x.version>0&&H.__version!==x.version){const re=x.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(H,x,v);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function ye(x,v){const H=r.get(x);if(x.version>0&&H.__version!==x.version){Ce(H,x,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function ae(x,v){const H=r.get(x);if(x.version>0&&H.__version!==x.version){Ce(H,x,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function B(x,v){const H=r.get(x);if(x.version>0&&H.__version!==x.version){Te(H,x,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const Z={[Ha]:i.REPEAT,[Xt]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},ue={[Mt]:i.NEAREST,[qo]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Bh]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR};function he(x,v,H){if(H?(i.texParameteri(x,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,Z[v.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,ue[v.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,ue[v.minFilter])):(i.texParameteri(x,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(x,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Xt||v.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(x,i.TEXTURE_MAG_FILTER,S(v.magFilter)),i.texParameteri(x,i.TEXTURE_MIN_FILTER,S(v.minFilter)),v.minFilter!==Mt&&v.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Mt||v.minFilter!==ka&&v.minFilter!==Xi||v.type===Gr&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===qi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||r.get(v).__currentAnisotropy)&&(i.texParameterf(x,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy)}}function L(x,v){let H=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",Y));const re=v.source;let ie=m.get(re);ie===void 0&&(ie={},m.set(re,ie));const le=ne(v);if(le!==x.__cacheKey){ie[le]===void 0&&(ie[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[le].usedTimes++;const Se=ie[x.__cacheKey];Se!==void 0&&(ie[x.__cacheKey].usedTimes--,Se.usedTimes===0&&G(v)),x.__cacheKey=le,x.__webglTexture=ie[le].texture}return H}function Ce(x,v,H){let re=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(re=i.TEXTURE_3D);const ie=L(x,v),le=v.source;t.bindTexture(re,x.__webglTexture,i.TEXTURE0+H);const Se=r.get(le);if(le.version!==Se.__version||ie===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=E(v)&&R(v.image)===!1;let j=M(v.image,pe,!1,h);j=Pt(v,j);const ge=R(j)||s,ve=a.convert(v.format,v.colorSpace);let xe=a.convert(v.type),de=J(v.internalFormat,ve,xe,v.colorSpace);he(re,v,ge);let me;const Fe=v.mipmaps,Ve=s&&v.isVideoTexture!==!0,it=Se.__version===void 0||ie===!0,C=b(v,j,ge);if(v.isDepthTexture)de=i.DEPTH_COMPONENT,s?v.type===Gr?de=i.DEPTH_COMPONENT32F:v.type===Hr?de=i.DEPTH_COMPONENT24:v.type===_i?de=i.DEPTH24_STENCIL8:de=i.DEPTH_COMPONENT16:v.type===Gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===kr&&de===i.DEPTH_COMPONENT&&v.type!==Yo&&v.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Hr,xe=a.convert(v.type)),v.format===fi&&de===i.DEPTH_COMPONENT&&(de=i.DEPTH_STENCIL,v.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=_i,xe=a.convert(v.type))),it&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,de,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,de,j.width,j.height,0,ve,xe,null));else if(v.isDataTexture)if(Fe.length>0&&ge){Ve&&it&&t.texStorage2D(i.TEXTURE_2D,C,de,Fe[0].width,Fe[0].height);for(let k=0,$=Fe.length;k<$;k++)me=Fe[k],Ve?t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,ve,xe,me.data):t.texImage2D(i.TEXTURE_2D,k,de,me.width,me.height,0,ve,xe,me.data);v.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(i.TEXTURE_2D,C,de,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ve,xe,j.data)):t.texImage2D(i.TEXTURE_2D,0,de,j.width,j.height,0,ve,xe,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,C,de,Fe[0].width,Fe[0].height,j.depth);for(let k=0,$=Fe.length;k<$;k++)me=Fe[k],v.format!==qt?ve!==null?Ve?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,j.depth,ve,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,de,me.width,me.height,j.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,j.depth,ve,xe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,de,me.width,me.height,j.depth,0,ve,xe,me.data)}else{Ve&&it&&t.texStorage2D(i.TEXTURE_2D,C,de,Fe[0].width,Fe[0].height);for(let k=0,$=Fe.length;k<$;k++)me=Fe[k],v.format!==qt?ve!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,k,de,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,ve,xe,me.data):t.texImage2D(i.TEXTURE_2D,k,de,me.width,me.height,0,ve,xe,me.data)}else if(v.isDataArrayTexture)Ve?(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,C,de,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ve,xe,j.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,j.width,j.height,j.depth,0,ve,xe,j.data);else if(v.isData3DTexture)Ve?(it&&t.texStorage3D(i.TEXTURE_3D,C,de,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ve,xe,j.data)):t.texImage3D(i.TEXTURE_3D,0,de,j.width,j.height,j.depth,0,ve,xe,j.data);else if(v.isFramebufferTexture){if(it)if(Ve)t.texStorage2D(i.TEXTURE_2D,C,de,j.width,j.height);else{let k=j.width,$=j.height;for(let ce=0;ce<C;ce++)t.texImage2D(i.TEXTURE_2D,ce,de,k,$,0,ve,xe,null),k>>=1,$>>=1}}else if(Fe.length>0&&ge){Ve&&it&&t.texStorage2D(i.TEXTURE_2D,C,de,Fe[0].width,Fe[0].height);for(let k=0,$=Fe.length;k<$;k++)me=Fe[k],Ve?t.texSubImage2D(i.TEXTURE_2D,k,0,0,ve,xe,me):t.texImage2D(i.TEXTURE_2D,k,de,ve,xe,me);v.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(i.TEXTURE_2D,C,de,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,xe,j)):t.texImage2D(i.TEXTURE_2D,0,de,ve,xe,j);P(v,ge)&&I(re),Se.__version=le.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Te(x,v,H){if(v.image.length!==6)return;const re=L(x,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+H);const le=r.get(ie);if(ie.version!==le.__version||re===!0){t.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,j=[];for(let k=0;k<6;k++)!Se&&!pe?j[k]=M(v.image[k],!1,!0,c):j[k]=pe?v.image[k].image:v.image[k],j[k]=Pt(v,j[k]);const ge=j[0],ve=R(ge)||s,xe=a.convert(v.format,v.colorSpace),de=a.convert(v.type),me=J(v.internalFormat,xe,de,v.colorSpace),Fe=s&&v.isVideoTexture!==!0,Ve=le.__version===void 0||re===!0;let it=b(v,ge,ve);he(i.TEXTURE_CUBE_MAP,v,ve);let C;if(Se){Fe&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,it,me,ge.width,ge.height);for(let k=0;k<6;k++){C=j[k].mipmaps;for(let $=0;$<C.length;$++){const ce=C[$];v.format!==qt?xe!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,0,0,ce.width,ce.height,xe,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,0,0,ce.width,ce.height,xe,de,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,me,ce.width,ce.height,0,xe,de,ce.data)}}}else{C=v.mipmaps,Fe&&Ve&&(C.length>0&&it++,t.texStorage2D(i.TEXTURE_CUBE_MAP,it,me,j[0].width,j[0].height));for(let k=0;k<6;k++)if(pe){Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,j[k].width,j[k].height,xe,de,j[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,me,j[k].width,j[k].height,0,xe,de,j[k].data);for(let $=0;$<C.length;$++){const ce=C[$].image[k].image;Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,0,0,ce.width,ce.height,xe,de,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,me,ce.width,ce.height,0,xe,de,ce.data)}}else{Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,xe,de,j[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,me,xe,de,j[k]);for(let $=0;$<C.length;$++){const ce=C[$];Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,0,0,xe,de,ce.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,me,xe,de,ce.image[k])}}}P(v,ve)&&I(i.TEXTURE_CUBE_MAP),le.__version=ie.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function oe(x,v,H,re,ie){const le=a.convert(H.format,H.colorSpace),Se=a.convert(H.type),pe=J(H.internalFormat,le,Se,H.colorSpace);r.get(v).__hasExternalTextures||(ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,pe,v.width,v.height,v.depth,0,le,Se,null):t.texImage2D(ie,0,pe,v.width,v.height,0,le,Se,null)),t.bindFramebuffer(i.FRAMEBUFFER,x),We(v)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,r.get(H).__webglTexture,0,ht(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,r.get(H).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(x,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,x),v.depthBuffer&&!v.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(H||We(v)){const ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Gr?re=i.DEPTH_COMPONENT32F:ie.type===Hr&&(re=i.DEPTH_COMPONENT24));const le=ht(v);We(v)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,re,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,le,re,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,x)}else if(v.depthBuffer&&v.stencilBuffer){const re=ht(v);H&&We(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,v.width,v.height):We(v)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,x)}else{const re=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0;ie<re.length;ie++){const le=re[ie],Se=a.convert(le.format,le.colorSpace),pe=a.convert(le.type),j=J(le.internalFormat,Se,pe,le.colorSpace),ge=ht(v);H&&We(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,j,v.width,v.height):We(v)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const H=r.get(v.depthTexture).__webglTexture,re=ht(v);if(v.depthTexture.format===kr)We(v)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(v.depthTexture.format===fi)We(v)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function we(x){const v=r.get(x),H=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ke(v.__webglFramebuffer,x)}else if(H){v.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[re]),v.__webglDepthbuffer[re]=i.createRenderbuffer(),Me(v.__webglDepthbuffer[re],x,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Me(v.__webglDepthbuffer,x,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(x,v,H){const re=r.get(x);v!==void 0&&oe(re.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),H!==void 0&&we(x)}function dt(x){const v=x.texture,H=r.get(x),re=r.get(v);x.addEventListener("dispose",ee),x.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=v.version,o.memory.textures++);const ie=x.isWebGLCubeRenderTarget===!0,le=x.isWebGLMultipleRenderTargets===!0,Se=R(x)||s;if(ie){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)H.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),le)if(n.drawBuffers){const pe=x.texture;for(let j=0,ge=pe.length;j<ge;j++){const ve=r.get(pe[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&x.samples>0&&We(x)===!1){const pe=le?v:[v];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<pe.length;j++){const ge=pe[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const ve=a.convert(ge.format,ge.colorSpace),xe=a.convert(ge.type),de=J(ge.internalFormat,ve,xe,ge.colorSpace,x.isXRRenderTarget===!0),me=ht(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,de,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),he(i.TEXTURE_CUBE_MAP,v,Se);for(let pe=0;pe<6;pe++)oe(H.__webglFramebuffer[pe],x,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe);P(v,Se)&&I(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const pe=x.texture;for(let j=0,ge=pe.length;j<ge;j++){const ve=pe[j],xe=r.get(ve);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),he(i.TEXTURE_2D,ve,Se),oe(H.__webglFramebuffer,x,ve,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D),P(ve,Se)&&I(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(s?pe=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),he(pe,v,Se),oe(H.__webglFramebuffer,x,v,i.COLOR_ATTACHMENT0,pe),P(v,Se)&&I(pe),t.unbindTexture()}x.depthBuffer&&we(x)}function gt(x){const v=R(x)||s,H=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let re=0,ie=H.length;re<ie;re++){const le=H[re];if(P(le,v)){const Se=x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=r.get(le).__webglTexture;t.bindTexture(Se,pe),I(Se),t.unbindTexture()}}}function pt(x){if(s&&x.samples>0&&We(x)===!1){const v=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],H=x.width,re=x.height;let ie=i.COLOR_BUFFER_BIT;const le=[],Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=r.get(x),j=x.isWebGLMultipleRenderTargets===!0;if(j)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){le.push(i.COLOR_ATTACHMENT0+ge),x.depthBuffer&&le.push(Se);const ve=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ve===!1&&(x.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),j&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]),ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),j){const xe=r.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,H,re,0,0,H,re,ie,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const ve=r.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ht(x){return Math.min(_,x.samples)}function We(x){const v=r.get(x);return s&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(x){const v=o.render.frame;w.get(x)!==v&&(w.set(x,v),x.update())}function Pt(x,v){const H=x.colorSpace,re=x.format,ie=x.type;return x.isCompressedTexture===!0||x.format===Ka||H!==rr&&H!==Vr&&(H===Pe?s===!1?e.has("EXT_sRGB")===!0&&re===qt?(x.format=Ka,x.minFilter=Bt,x.generateMipmaps=!1):v=El.sRGBToLinear(v):(re!==qt||ie!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=ye,this.setTexture3D=ae,this.setTextureCube=B,this.rebindTextures=Ue,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=We}function nm(i,e,t){const r=t.isWebGL2;function n(a,o=Vr){let s;if(a===Br)return i.UNSIGNED_BYTE;if(a===Wh)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Vh)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Hh)return i.BYTE;if(a===Gh)return i.SHORT;if(a===Yo)return i.UNSIGNED_SHORT;if(a===kh)return i.INT;if(a===Hr)return i.UNSIGNED_INT;if(a===Gr)return i.FLOAT;if(a===qi)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===jh)return i.ALPHA;if(a===qt)return i.RGBA;if(a===Xh)return i.LUMINANCE;if(a===qh)return i.LUMINANCE_ALPHA;if(a===kr)return i.DEPTH_COMPONENT;if(a===fi)return i.DEPTH_STENCIL;if(a===Ka)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Yh)return i.RED;if(a===Kh)return i.RED_INTEGER;if(a===Jh)return i.RG;if(a===Zh)return i.RG_INTEGER;if(a===Qh)return i.RGBA_INTEGER;if(a===Wa||a===Va||a===ja||a===Xa)if(o===Pe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ko||a===Jo||a===Zo||a===Qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===$h)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===$o||a===el)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===$o)return o===Pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===el)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===tl||a===rl||a===il||a===nl||a===al||a===sl||a===ol||a===ll||a===cl||a===hl||a===ul||a===dl||a===pl||a===_l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===tl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===rl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===il)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===al)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===sl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ol)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ll)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===cl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===hl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ul)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===pl)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_l)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===qa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===qa)return o===Pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===eu||a===fl||a===ml||a===gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(a===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===_i?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class am extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sm={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,r),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],_=c.joints["thumb-tip"],p=h.position.distanceTo(_.position),f=.02,w=.005;c.inputState.pinching&&p>f+w?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-w&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ea;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class om extends It{constructor(e,t,r,n,a,o,s,l,c,h){if(h=h!==void 0?h:kr,h!==kr&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===kr&&(r=Hr),r===void 0&&h===fi&&(r=_i),super(null,n,a,o,s,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class lm extends mi{constructor(e,t){super();const r=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,_=null,p=null,f=null,w=null;const g=t.getContextAttributes();let m=null,d=null;const T=[],M=[],R=new Set,E=new Map,P=new kt;P.layers.enable(1),P.viewport=new ft;const I=new kt;I.layers.enable(2),I.viewport=new ft;const J=[P,I],b=new am;b.layers.enable(1),b.layers.enable(2);let S=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=T[B];return Z===void 0&&(Z=new Ms,T[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=T[B];return Z===void 0&&(Z=new Ms,T[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=T[B];return Z===void 0&&(Z=new Ms,T[B]=Z),Z.getHandSpace()};function ee(B){const Z=M.indexOf(B.inputSource);if(Z===-1)return;const ue=T[Z];ue!==void 0&&(ue.update(B.inputSource,B.frame,c||o),ue.dispatchEvent({type:B.type,data:B.inputSource}))}function N(){n.removeEventListener("select",ee),n.removeEventListener("selectstart",ee),n.removeEventListener("selectend",ee),n.removeEventListener("squeeze",ee),n.removeEventListener("squeezestart",ee),n.removeEventListener("squeezeend",ee),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",G);for(let B=0;B<T.length;B++){const Z=M[B];Z!==null&&(M[B]=null,T[B].disconnect(Z))}S=null,Y=null,e.setRenderTarget(m),f=null,p=null,_=null,n=null,d=null,ae.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",ee),n.addEventListener("selectstart",ee),n.addEventListener("selectend",ee),n.addEventListener("squeeze",ee),n.addEventListener("squeezestart",ee),n.addEventListener("squeezeend",ee),n.addEventListener("end",N),n.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:f}),d=new jr(f.framebufferWidth,f.framebufferHeight,{format:qt,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ue=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?fi:kr,ue=g.stencil?_i:Hr);const L={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};_=new XRWebGLBinding(n,t),p=_.createProjectionLayer(L),n.updateRenderState({layers:[p]}),d=new jr(p.textureWidth,p.textureHeight,{format:qt,type:Br,depthTexture:new om(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(d);Ce.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),ae.setContext(n),ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function G(B){for(let Z=0;Z<B.removed.length;Z++){const ue=B.removed[Z],he=M.indexOf(ue);he>=0&&(M[he]=null,T[he].disconnect(ue))}for(let Z=0;Z<B.added.length;Z++){const ue=B.added[Z];let he=M.indexOf(ue);if(he===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=M.length){M.push(ue),he=Ce;break}else if(M[Ce]===null){M[Ce]=ue,he=Ce;break}if(he===-1)break}const L=T[he];L&&L.connect(ue)}}const X=new z,te=new z;function q(B,Z,ue){X.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(ue.matrixWorld);const he=X.distanceTo(te),L=Z.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,Te=L[14]/(L[10]-1),oe=L[14]/(L[10]+1),Me=(L[9]+1)/L[5],ke=(L[9]-1)/L[5],we=(L[8]-1)/L[0],Ue=(Ce[8]+1)/Ce[0],dt=Te*we,gt=Te*Ue,pt=he/(-we+Ue),ht=pt*-we;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ht),B.translateZ(pt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const We=Te+pt,rt=oe+pt,Pt=dt-ht,x=gt+(he-ht),v=Me*oe/rt*We,H=ke*oe/rt*We;B.projectionMatrix.makePerspective(Pt,x,v,H,We,rt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function K(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;b.near=I.near=P.near=B.near,b.far=I.far=P.far=B.far,(S!==b.near||Y!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,Y=b.far);const Z=B.parent,ue=b.cameras;K(b,Z);for(let he=0;he<ue.length;he++)K(ue[he],Z);ue.length===2?q(b,P,I):b.projectionMatrix.copy(P.projectionMatrix),ne(B,b,Z)};function ne(B,Z,ue){ue===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(ue.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const he=B.children;for(let L=0,Ce=he.length;L<Ce;L++)he[L].updateMatrixWorld(!0);B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Za*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(B){l=B,p!==null&&(p.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.getPlanes=function(){return R};let Q=null;function ye(B,Z){if(h=Z.getViewerPose(c||o),w=Z,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let he=!1;ue.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let L=0;L<ue.length;L++){const Ce=ue[L];let Te=null;if(f!==null)Te=f.getViewport(Ce);else{const Me=_.getViewSubImage(p,Ce);Te=Me.viewport,L===0&&(e.setRenderTargetTextures(d,Me.colorTexture,p.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(d))}let oe=J[L];oe===void 0&&(oe=new kt,oe.layers.enable(L),oe.viewport=new ft,J[L]=oe),oe.matrix.fromArray(Ce.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ce.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Te.x,Te.y,Te.width,Te.height),L===0&&(b.matrix.copy(oe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(oe)}}for(let ue=0;ue<T.length;ue++){const he=M[ue],L=T[ue];he!==null&&L!==void 0&&L.update(he,Z,c||o)}if(Q&&Q(B,Z),Z.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ue=null;for(const he of R)Z.detectedPlanes.has(he)||(ue===null&&(ue=[]),ue.push(he));if(ue!==null)for(const he of ue)R.delete(he),E.delete(he),r.dispatchEvent({type:"planeremoved",data:he});for(const he of Z.detectedPlanes)if(!R.has(he))R.add(he),E.set(he,Z.lastChangedTime),r.dispatchEvent({type:"planeadded",data:he});else{const L=E.get(he);he.lastChangedTime>L&&(E.set(he,he.lastChangedTime),r.dispatchEvent({type:"planechanged",data:he}))}}w=null}const ae=new Jl;ae.setAnimationLoop(ye),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function cm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,Xl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,T,M,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),_(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,R)):d.isMeshMatcapMaterial?(a(m,d),w(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),g(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,T,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===At&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===At&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function _(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function w(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function hm(i,e,t,r){let n={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,M){const R=M.program;r.uniformBlockBinding(T,R)}function c(T,M){let R=n[T.id];R===void 0&&(w(T),R=h(T),n[T.id]=R,T.addEventListener("dispose",m));const E=M.program;r.updateUBOMapping(T,E);const P=e.render.frame;a[T.id]!==P&&(p(T),a[T.id]=P)}function h(T){const M=_();T.__bindingPointIndex=M;const R=i.createBuffer(),E=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,E,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,R),R}function _(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const M=n[T.id],R=T.uniforms,E=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,I=R.length;P<I;P++){const J=R[P];if(f(J,P,E)===!0){const b=J.__offset,S=Array.isArray(J.value)?J.value:[J.value];let Y=0;for(let ee=0;ee<S.length;ee++){const N=S[ee],G=g(N);typeof N=="number"?(J.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,b+Y,J.__data)):N.isMatrix3?(J.__data[0]=N.elements[0],J.__data[1]=N.elements[1],J.__data[2]=N.elements[2],J.__data[3]=N.elements[0],J.__data[4]=N.elements[3],J.__data[5]=N.elements[4],J.__data[6]=N.elements[5],J.__data[7]=N.elements[0],J.__data[8]=N.elements[6],J.__data[9]=N.elements[7],J.__data[10]=N.elements[8],J.__data[11]=N.elements[0]):(N.toArray(J.__data,Y),Y+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,J.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,M,R){const E=T.value;if(R[M]===void 0){if(typeof E=="number")R[M]=E;else{const P=Array.isArray(E)?E:[E],I=[];for(let J=0;J<P.length;J++)I.push(P[J].clone());R[M]=I}return!0}else if(typeof E=="number"){if(R[M]!==E)return R[M]=E,!0}else{const P=Array.isArray(R[M])?R[M]:[R[M]],I=Array.isArray(E)?E:[E];for(let J=0;J<P.length;J++){const b=P[J];if(b.equals(I[J])===!1)return b.copy(I[J]),!0}}return!1}function w(T){const M=T.uniforms;let R=0;const E=16;let P=0;for(let I=0,J=M.length;I<J;I++){const b=M[I],S={boundary:0,storage:0},Y=Array.isArray(b.value)?b.value:[b.value];for(let ee=0,N=Y.length;ee<N;ee++){const G=Y[ee],X=g(G);S.boundary+=X.boundary,S.storage+=X.storage}if(b.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=R,I>0){P=R%E;const ee=E-P;P!==0&&ee-S.boundary<0&&(R+=E-P,b.__offset=R)}R+=S.storage}return P=R%E,P>0&&(R+=E-P),T.__size=R,T.__cache={},this}function g(T){const M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const R=o.indexOf(M.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(n[M.id]),delete n[M.id],delete a[M.id]}function d(){for(const T in n)i.deleteBuffer(n[T]);o=[],n={},a={}}return{bind:l,update:c,dispose:d}}function um(){const i=Cn("canvas");return i.style.display="block",i}class Mc{constructor(e={}){const{canvas:t=um(),context:r=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let p;r!==null?p=r.getContextAttributes().alpha:p=o;let f=null,w=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Pe,this.useLegacyLights=!0,this.toneMapping=pr,this.toneMappingExposure=1;const d=this;let T=!1,M=0,R=0,E=null,P=-1,I=null;const J=new ft,b=new ft;let S=null,Y=t.width,ee=t.height,N=1,G=null,X=null;const te=new ft(0,0,Y,ee),q=new ft(0,0,Y,ee);let K=!1;const ne=new Kl;let Q=!1,ye=!1,ae=null;const B=new mt,Z=new z,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return E===null?N:1}let L=r;function Ce(y,O){for(let W=0;W<y.length;W++){const D=y[W],V=t.getContext(D,O);if(V!==null)return V}return null}try{const y={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oa}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),L=Ce(O,y),L===null)throw Ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Te,oe,Me,ke,we,Ue,dt,gt,pt,ht,We,rt,Pt,x,v,H,re,ie,le,Se,pe,j,ge,ve;function xe(){Te=new y_(L),oe=new __(L,Te,e),Te.init(oe),j=new nm(L,Te,oe),Me=new rm(L,Te,oe),ke=new S_(L),we=new kf,Ue=new im(L,Te,Me,we,oe,j,ke),dt=new m_(d),gt=new b_(d),pt=new Nu(L,oe),ge=new d_(L,Te,pt,oe),ht=new x_(L,pt,ke,ge),We=new A_(L,ht,pt,ke),le=new R_(L,oe,Ue),H=new f_(we),rt=new Gf(d,dt,gt,Te,oe,ge,H),Pt=new cm(d,we),x=new Vf,v=new Jf(Te,oe),ie=new u_(d,dt,gt,Me,We,p,l),re=new tm(d,We,oe),ve=new hm(L,ke,oe,Me),Se=new p_(L,Te,ke,oe),pe=new M_(L,Te,ke,oe),ke.programs=rt.programs,d.capabilities=oe,d.extensions=Te,d.properties=we,d.renderLists=x,d.shadowMap=re,d.state=Me,d.info=ke}xe();const de=new lm(d,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(y){y!==void 0&&(N=y,this.setSize(Y,ee,!1))},this.getSize=function(y){return y.set(Y,ee)},this.setSize=function(y,O,W=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,ee=O,t.width=Math.floor(y*N),t.height=Math.floor(O*N),W===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Y*N,ee*N).floor()},this.setDrawingBufferSize=function(y,O,W){Y=y,ee=O,N=W,t.width=Math.floor(y*W),t.height=Math.floor(O*W),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(J)},this.getViewport=function(y){return y.copy(te)},this.setViewport=function(y,O,W,D){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,O,W,D),Me.viewport(J.copy(te).multiplyScalar(N).floor())},this.getScissor=function(y){return y.copy(q)},this.setScissor=function(y,O,W,D){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,O,W,D),Me.scissor(b.copy(q).multiplyScalar(N).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(y){Me.setScissorTest(K=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){X=y},this.getClearColor=function(y){return y.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(y=!0,O=!0,W=!0){let D=0;y&&(D|=L.COLOR_BUFFER_BIT),O&&(D|=L.DEPTH_BUFFER_BIT),W&&(D|=L.STENCIL_BUFFER_BIT),L.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),x.dispose(),v.dispose(),we.dispose(),dt.dispose(),gt.dispose(),We.dispose(),ge.dispose(),ve.dispose(),rt.dispose(),de.dispose(),de.removeEventListener("sessionstart",be),de.removeEventListener("sessionend",Ze),ae&&(ae.dispose(),ae=null),Xe.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=ke.autoReset,O=re.enabled,W=re.autoUpdate,D=re.needsUpdate,V=re.type;xe(),ke.autoReset=y,re.enabled=O,re.autoUpdate=W,re.needsUpdate=D,re.type=V}function Ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function it(y){const O=y.target;O.removeEventListener("dispose",it),C(O)}function C(y){k(y),we.remove(y)}function k(y){const O=we.get(y).programs;O!==void 0&&(O.forEach(function(W){rt.releaseProgram(W)}),y.isShaderMaterial&&rt.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,W,D,V,_e){O===null&&(O=ue);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,Re=Am(y,O,W,D,V);Me.setMaterial(D,Ee);let De=W.index,Ge=1;D.wireframe===!0&&(De=ht.getWireframeAttribute(W),Ge=2);const Oe=W.drawRange,Ie=W.attributes.position;let Qe=Oe.start*Ge,Et=(Oe.start+Oe.count)*Ge;_e!==null&&(Qe=Math.max(Qe,_e.start*Ge),Et=Math.min(Et,(_e.start+_e.count)*Ge)),De!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,De.count)):Ie!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,Ie.count));const er=Et-Qe;if(er<0||er===1/0)return;ge.setup(V,D,Re,W,De);let ri,ot=Se;if(De!==null&&(ri=pt.get(De),ot=pe,ot.setIndex(ri)),V.isMesh)D.wireframe===!0?(Me.setLineWidth(D.wireframeLinewidth*he()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(V.isLine){let ze=D.linewidth;ze===void 0&&(ze=1),Me.setLineWidth(ze*he()),V.isLineSegments?ot.setMode(L.LINES):V.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else V.isPoints?ot.setMode(L.POINTS):V.isSprite&&ot.setMode(L.TRIANGLES);if(V.isInstancedMesh)ot.renderInstances(Qe,er,V.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rs=Math.min(W.instanceCount,ze);ot.renderInstances(Qe,er,Rs)}else ot.render(Qe,er)},this.compile=function(y,O){function W(D,V,_e){D.transparent===!0&&D.side===dr&&D.forceSinglePass===!1?(D.side=At,D.needsUpdate=!0,sa(D,V,_e),D.side=Sr,D.needsUpdate=!0,sa(D,V,_e),D.side=dr):sa(D,V,_e)}w=v.get(y),w.init(),m.push(w),y.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(w.pushLight(D),D.castShadow&&w.pushShadow(D))}),w.setupLights(d.useLegacyLights),y.traverse(function(D){const V=D.material;if(V)if(Array.isArray(V))for(let _e=0;_e<V.length;_e++){const Ee=V[_e];W(Ee,y,D)}else W(V,y,D)}),m.pop(),w=null};let $=null;function ce(y){$&&$(y)}function be(){Xe.stop()}function Ze(){Xe.start()}const Xe=new Jl;Xe.setAnimationLoop(ce),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(y){$=y,de.setAnimationLoop(y),y===null?Xe.stop():Xe.start()},de.addEventListener("sessionstart",be),de.addEventListener("sessionend",Ze),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),y.isScene===!0&&y.onBeforeRender(d,y,O,E),w=v.get(y,m.length),w.init(),m.push(w),B.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(B),ye=this.localClippingEnabled,Q=H.init(this.clippingPlanes,ye),f=x.get(y,g.length),f.init(),g.push(f),yt(y,O,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(G,X),Q===!0&&H.beginShadows();const W=w.state.shadowsArray;if(re.render(W,y,O),Q===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(f,y),w.setupLights(d.useLegacyLights),O.isArrayCamera){const D=O.cameras;for(let V=0,_e=D.length;V<_e;V++){const Ee=D[V];Dr(f,y,Ee,Ee.viewport)}}else Dr(f,y,O);E!==null&&(Ue.updateMultisampleRenderTarget(E),Ue.updateRenderTargetMipmap(E)),y.isScene===!0&&y.onAfterRender(d,y,O),ge.resetDefaultState(),P=-1,I=null,m.pop(),m.length>0?w=m[m.length-1]:w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function yt(y,O,W,D){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ne.intersectsSprite(y)){D&&Z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(B);const _e=We.update(y),Ee=y.material;Ee.visible&&f.push(y,_e,Ee,W,Z.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ne.intersectsObject(y))){y.isSkinnedMesh&&y.skeleton.frame!==ke.render.frame&&(y.skeleton.update(),y.skeleton.frame=ke.render.frame);const _e=We.update(y),Ee=y.material;if(D&&(_e.boundingSphere===null&&_e.computeBoundingSphere(),Z.copy(_e.boundingSphere.center).applyMatrix4(y.matrixWorld).applyMatrix4(B)),Array.isArray(Ee)){const Re=_e.groups;for(let De=0,Ge=Re.length;De<Ge;De++){const Oe=Re[De],Ie=Ee[Oe.materialIndex];Ie&&Ie.visible&&f.push(y,_e,Ie,W,Z.z,Oe)}}else Ee.visible&&f.push(y,_e,Ee,W,Z.z,null)}}const V=y.children;for(let _e=0,Ee=V.length;_e<Ee;_e++)yt(V[_e],O,W,D)}function Dr(y,O,W,D){const V=y.opaque,_e=y.transmissive,Ee=y.transparent;w.setupLightsView(W),Q===!0&&H.setGlobalState(d.clippingPlanes,W),_e.length>0&&nt(V,_e,O,W),D&&Me.viewport(J.copy(D)),V.length>0&&Wt(V,O,W),_e.length>0&&Wt(_e,O,W),Ee.length>0&&Wt(Ee,O,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function nt(y,O,W,D){if(ae===null){const Re=oe.isWebGL2;ae=new jr(1024,1024,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?qi:Br,minFilter:Xi,samples:Re&&s===!0?4:0})}const V=d.getRenderTarget();d.setRenderTarget(ae),d.clear();const _e=d.toneMapping;d.toneMapping=pr,Wt(y,W,D),Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae);let Ee=!1;for(let Re=0,De=O.length;Re<De;Re++){const Ge=O[Re],Oe=Ge.object,Ie=Ge.geometry,Qe=Ge.material,Et=Ge.group;if(Qe.side===dr&&Oe.layers.test(D.layers)){const er=Qe.side;Qe.side=At,Qe.needsUpdate=!0,sr(Oe,W,D,Ie,Qe,Et),Qe.side=er,Qe.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae)),d.setRenderTarget(V),d.toneMapping=_e}function Wt(y,O,W){const D=O.isScene===!0?O.overrideMaterial:null;for(let V=0,_e=y.length;V<_e;V++){const Ee=y[V],Re=Ee.object,De=Ee.geometry,Ge=D===null?Ee.material:D,Oe=Ee.group;Re.layers.test(W.layers)&&sr(Re,O,W,De,Ge,Oe)}}function sr(y,O,W,D,V,_e){y.onBeforeRender(d,O,W,D,V,_e),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(d,O,W,D,y,_e),V.transparent===!0&&V.side===dr&&V.forceSinglePass===!1?(V.side=At,V.needsUpdate=!0,d.renderBufferDirect(W,O,D,V,y,_e),V.side=Sr,V.needsUpdate=!0,d.renderBufferDirect(W,O,D,V,y,_e),V.side=dr):d.renderBufferDirect(W,O,D,V,y,_e),y.onAfterRender(d,O,W,D,V,_e)}function sa(y,O,W){O.isScene!==!0&&(O=ue);const D=we.get(y),V=w.state.lights,_e=w.state.shadowsArray,Ee=V.state.version,Re=rt.getParameters(y,V.state,_e,O,W),De=rt.getProgramCacheKey(Re);let Ge=D.programs;D.environment=y.isMeshStandardMaterial?O.environment:null,D.fog=O.fog,D.envMap=(y.isMeshStandardMaterial?gt:dt).get(y.envMap||D.environment),Ge===void 0&&(y.addEventListener("dispose",it),Ge=new Map,D.programs=Ge);let Oe=Ge.get(De);if(Oe!==void 0){if(D.currentProgram===Oe&&D.lightsStateVersion===Ee)return Bc(y,Re),Oe}else Re.uniforms=rt.getUniforms(y),y.onBuild(W,Re,d),y.onBeforeCompile(Re,d),Oe=rt.acquireProgram(Re,De),Ge.set(De,Oe),D.uniforms=Re.uniforms;const Ie=D.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=H.uniform),Bc(y,Re),D.needsLights=Pm(y),D.lightsStateVersion=Ee,D.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix);const Qe=Oe.getUniforms(),Et=$n.seqWithValue(Qe.seq,Ie);return D.currentProgram=Oe,D.uniformsList=Et,Oe}function Bc(y,O){const W=we.get(y);W.outputColorSpace=O.outputColorSpace,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Am(y,O,W,D,V){O.isScene!==!0&&(O=ue),Ue.resetTextureUnits();const _e=O.fog,Ee=D.isMeshStandardMaterial?O.environment:null,Re=E===null?d.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:rr,De=(D.isMeshStandardMaterial?gt:dt).get(D.envMap||Ee),Ge=D.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!D.normalMap&&!!W.attributes.tangent,Ie=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color,er=D.toneMapped?d.toneMapping:pr,ri=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=ri!==void 0?ri.length:0,ze=we.get(D),Rs=w.state.lights;if(Q===!0&&(ye===!0||y!==I)){const zt=y===I&&D.id===P;H.setState(D,y,zt)}let As=!1;D.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Rs.state.version||ze.outputColorSpace!==Re||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==De||D.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==H.numPlanes||ze.numIntersection!==H.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==Oe||ze.morphTargets!==Ie||ze.morphNormals!==Qe||ze.morphColors!==Et||ze.toneMapping!==er||oe.isWebGL2===!0&&ze.morphTargetsCount!==ot)&&(As=!0):(As=!0,ze.__version=D.version);let ii=ze.currentProgram;As===!0&&(ii=sa(D,O,V));let Hc=!1,on=!1,Cs=!1;const Tt=ii.getUniforms(),ni=ze.uniforms;if(Me.useProgram(ii.program)&&(Hc=!0,on=!0,Cs=!0),D.id!==P&&(P=D.id,on=!0),Hc||I!==y){if(Tt.setValue(L,"projectionMatrix",y.projectionMatrix),oe.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),I!==y&&(I=y,on=!0,Cs=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const zt=Tt.map.cameraPosition;zt!==void 0&&zt.setValue(L,Z.setFromMatrixPosition(y.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||V.isSkinnedMesh)&&Tt.setValue(L,"viewMatrix",y.matrixWorldInverse)}if(V.isSkinnedMesh){Tt.setOptional(L,V,"bindMatrix"),Tt.setOptional(L,V,"bindMatrixInverse");const zt=V.skeleton;zt&&(oe.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Tt.setValue(L,"boneTexture",zt.boneTexture,Ue),Tt.setValue(L,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ps=W.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&oe.isWebGL2===!0)&&le.update(V,W,ii),(on||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,Tt.setValue(L,"receiveShadow",V.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(ni.envMap.value=De,ni.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),on&&(Tt.setValue(L,"toneMappingExposure",d.toneMappingExposure),ze.needsLights&&Cm(ni,Cs),_e&&D.fog===!0&&Pt.refreshFogUniforms(ni,_e),Pt.refreshMaterialUniforms(ni,D,N,ee,ae),$n.upload(L,ze.uniformsList,ni,Ue)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&($n.upload(L,ze.uniformsList,ni,Ue),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Tt.setValue(L,"center",V.center),Tt.setValue(L,"modelViewMatrix",V.modelViewMatrix),Tt.setValue(L,"normalMatrix",V.normalMatrix),Tt.setValue(L,"modelMatrix",V.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const zt=D.uniformsGroups;for(let Ls=0,Lm=zt.length;Ls<Lm;Ls++)if(oe.isWebGL2){const Gc=zt[Ls];ve.update(Gc,ii),ve.bind(Gc,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Cm(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Pm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(y,O,W){we.get(y.texture).__webglTexture=O,we.get(y.depthTexture).__webglTexture=W;const D=we.get(y);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=W===void 0,D.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const W=we.get(y);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,W=0){E=y,M=O,R=W;let D=!0,V=null,_e=!1,Ee=!1;if(y){const Re=we.get(y);Re.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(L.FRAMEBUFFER,null),D=!1):Re.__webglFramebuffer===void 0?Ue.setupRenderTarget(y):Re.__hasExternalTextures&&Ue.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ee=!0);const Ge=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(V=Ge[O],_e=!0):oe.isWebGL2&&y.samples>0&&Ue.useMultisampledRTT(y)===!1?V=we.get(y).__webglMultisampledFramebuffer:V=Ge,J.copy(y.viewport),b.copy(y.scissor),S=y.scissorTest}else J.copy(te).multiplyScalar(N).floor(),b.copy(q).multiplyScalar(N).floor(),S=K;if(Me.bindFramebuffer(L.FRAMEBUFFER,V)&&oe.drawBuffers&&D&&Me.drawBuffers(y,V),Me.viewport(J),Me.scissor(b),Me.setScissorTest(S),_e){const Re=we.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,W)}else if(Ee){const Re=we.get(y.texture),De=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,W||0,De)}P=-1},this.readRenderTargetPixels=function(y,O,W,D,V,_e,Ee){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Me.bindFramebuffer(L.FRAMEBUFFER,Re);try{const De=y.texture,Ge=De.format,Oe=De.type;if(Ge!==qt&&j.convert(Ge)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Oe===qi&&(Te.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Oe!==Br&&j.convert(Oe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Gr&&(oe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-D&&W>=0&&W<=y.height-V&&L.readPixels(O,W,D,V,j.convert(Ge),j.convert(Oe),_e)}finally{const De=E!==null?we.get(E).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(y,O,W=0){const D=Math.pow(2,-W),V=Math.floor(O.image.width*D),_e=Math.floor(O.image.height*D);Ue.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,y.x,y.y,V,_e),Me.unbindTexture()},this.copyTextureToTexture=function(y,O,W,D=0){const V=O.image.width,_e=O.image.height,Ee=j.convert(W.format),Re=j.convert(W.type);Ue.setTexture2D(W,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,y.x,y.y,V,_e,Ee,Re,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,D,y.x,y.y,Ee,Re,O.image),D===0&&W.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(y,O,W,D,V=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=y.max.x-y.min.x+1,Ee=y.max.y-y.min.y+1,Re=y.max.z-y.min.z+1,De=j.convert(D.format),Ge=j.convert(D.type);let Oe;if(D.isData3DTexture)Ue.setTexture3D(D,0),Oe=L.TEXTURE_3D;else if(D.isDataArrayTexture)Ue.setTexture2DArray(D,0),Oe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Ie=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Et=L.getParameter(L.UNPACK_SKIP_PIXELS),er=L.getParameter(L.UNPACK_SKIP_ROWS),ri=L.getParameter(L.UNPACK_SKIP_IMAGES),ot=W.isCompressedTexture?W.mipmaps[0]:W.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,y.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,y.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?L.texSubImage3D(Oe,V,O.x,O.y,O.z,_e,Ee,Re,De,Ge,ot.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Oe,V,O.x,O.y,O.z,_e,Ee,Re,De,ot.data)):L.texSubImage3D(Oe,V,O.x,O.y,O.z,_e,Ee,Re,De,Ge,ot),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ie),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),L.pixelStorei(L.UNPACK_SKIP_ROWS,er),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ri),V===0&&D.generateMipmaps&&L.generateMipmap(Oe),Me.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){M=0,R=0,E=null,Me.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pe?Wr:wl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?Pe:rr}}class dm extends Mc{}dm.prototype.isWebGL1Renderer=!0;class pm extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);class _m{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},r={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const a=document.createElement("div");return a.id="webglmessage",a.style.fontFamily="monospace",a.style.fontSize="13px",a.style.fontWeight="normal",a.style.textAlign="center",a.style.background="#fff",a.style.color="#000",a.style.padding="1.5em",a.style.width="400px",a.style.margin="5em auto 0",r[e]?n=n.replace("$0","graphics card"):n=n.replace("$0","browser"),n=n.replace("$1",t[e]),a.innerHTML=n,a}}const Sc=_m,ta=(i,e)=>{let t=i.translation();e.position.x=t.x,e.position.y=t.y,e.rotation.z=i.rotation()};let Ec,Tc,Ss=new tt.EventQueue(!0);Ss.drainCollisionEvents((i,e,t)=>{console.log("Collision detected")}),Ss.drainContactForceEvents(i=>{i.collider1(),i.collider2()});const nn=new pm,Pr=new kt(75,window.innerWidth/window.innerHeight,.1,1e3);Pr.position.z=10;var an=new z,sn=new z;const ra=new Mc;ra.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(ra.domElement);let $t=new tt.World({x:0,y:-9.81}),Rc=100,Ac=1,fm=0,mm=-3;const gm=new br(Rc,Ac,1),wm=new Ri({color:16777215}),Cc=new Gt(gm,wm);nn.add(Cc);let Pc=$t.createRigidBody(tt.RigidBodyDesc.fixed().setTranslation(fm,mm).setCcdEnabled(!0));$t.createCollider(tt.ColliderDesc.cuboid(Rc/2,Ac/2).setCollisionGroups(131073).setRestitution(0).setRestitutionCombineRule(tt.CoefficientCombineRule.Min).setActiveEvents(tt.ActiveEvents.COLLISION_EVENTS),Pc);const Lc=.5,Dc=1,vm=new br(Lc,Dc,1),bm=new Ri({color:65280}),Uc=new Gt(vm,bm);nn.add(Uc);let ti=$t.createRigidBody(new tt.RigidBodyDesc(tt.RigidBodyType.Dynamic).setTranslation(0,0).setCanSleep(!0).setCcdEnabled(!0));ti.lockRotations(!0,!0);let ym=$t.createCollider(tt.ColliderDesc.cuboid(Lc/2,Dc/2).setTranslation(0,0).setRestitution(0).setRestitutionCombineRule(tt.CoefficientCombineRule.Min).setCollisionGroups(65538),ti);const ia=.25,xm=new br(ia,ia,1),Mm=new Ri({color:16776960}),Ic=new Gt(xm,Mm);nn.add(Ic);let na=$t.createRigidBody(new tt.RigidBodyDesc(tt.RigidBodyType.Dynamic).setTranslation(0,0).setGravityScale(0).setCanSleep(!0).setCcdEnabled(!0)),Sm=$t.createCollider(tt.ColliderDesc.cuboid(ia/2,ia/2).setTranslation(0,0).setRestitution(0).setRestitutionCombineRule(tt.CoefficientCombineRule.Min).setCollisionGroups(65538).setActiveEvents(tt.ActiveEvents.COLLISION_EVENTS),na),Lr=1.75,Nc=.125,Oc=.25;const Em=new br(Lr,Nc,.25),Tm=new Ri({color:255}),Es=new Gt(Em,Tm);Es.position.z=.5,nn.add(Es);let aa=$t.createRigidBody(new tt.RigidBodyDesc(tt.RigidBodyType.Dynamic).setTranslation(0,0).setGravityScale(0).setCanSleep(!0).setCcdEnabled(!0)),Fc=$t.createCollider(tt.ColliderDesc.cuboid(Lr/2,Nc/2).setCollisionGroups(65536).setTranslation(0,0),aa),zc=$t.createImpulseJoint(tt.JointData.revolute({x:0,y:0},{x:-Lr/2,y:0}),ti,aa,!0);zc.configureMotorModel(tt.MotorModel.ForceBased);let Ts;{let i=tt.JointData.prismatic({x:0,y:0},{x:Lr/2,y:0},{x:1,y:0});i.limitsEnabled=!0,i.limits=[0,Lr-Oc],Ts=$t.createImpulseJoint(i,na,aa,!0),Ts.configureMotorModel(tt.MotorModel.ForceBased)}ym.setMass(.01),ti.setGravityScale(9),Sm.setMass(.001),Fc.setMass(.001);function Rm(){$t.step(Ss),ta(ti,Uc),ta(na,Ic),ta(Pc,Cc),ta(aa,Es),Fc.rotation(),zc.configureMotorPosition(Ec,15,.1),Ts.configureMotorPosition(Math.min(Lr-Math.min(Tc,Lr),Lr-Oc),50,1);const i=ti.translation();Pr.position.x=i.x,Pr.position.y=i.y,ra.render(nn,Pr)}if(Sc.isWebGL2Available())ra.setAnimationLoop(Rm);else{const i=Sc.getWebGL2ErrorMessage();document.getElementById("container").appendChild(i)}window.addEventListener("mousemove",i=>{an.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight)*2+1,.5),an.unproject(Pr),an.sub(Pr.position).normalize();var e=-Pr.position.z/an.z;sn.copy(Pr.position).add(an.multiplyScalar(e));const t=ti.translation();na.translation(),Tc=Math.hypot(sn.y-t.y,sn.x-t.x),Ec=Math.atan2(sn.y-t.y,sn.x-t.x)})}),Im=Um();export{Im as default};
