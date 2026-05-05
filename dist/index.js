"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=u(function(C,q){
var l=require('@stdlib/strided-base-smskmap/dist'),R=require('@stdlib/math-base-special-invf/dist');function _(e,r,i,a,s,n,t){return l(e,r,i,a,s,n,t,R)}q.exports=_
});var c=u(function(D,o){
var E=require('@stdlib/strided-base-smskmap/dist').ndarray,O=require('@stdlib/math-base-special-invf/dist');function b(e,r,i,a,s,n,t,y,j,x){return E(e,r,i,a,s,n,t,y,j,x,O)}o.exports=b
});var d=u(function(F,f){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=m(),h=c();g(p,"ndarray",h);f.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=d(),v,k=z(w(__dirname,"./native.js"));k instanceof Error?v=A:v=k;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
