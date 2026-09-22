import test from"node:test";import assert from"node:assert/strict";import{qixSocketUrl,qixHeaders,hyperCubeDefinition,cellsToRows}from"../lib/connectors/qix.js";
test("QIX URL is tenant scoped",()=>assert.equal(qixSocketUrl("https://demo.eu.qlikcloud.com/","abc","u1"),"wss://demo.eu.qlikcloud.com/app/abc/identity/u1"));
test("QIX auth stays in header",()=>assert.equal(qixHeaders("secret").Authorization,"Bearer secret"));
test("hypercube definition is generic",()=>{const x=hyperCubeDefinition(["Customer","Date"],["Sum(Quantity)"]);assert.equal(x.qHyperCubeDef.qDimensions.length,2);assert.equal(x.qHyperCubeDef.qMeasures.length,1)});
test("QIX cells normalize",()=>{const x=cellsToRows([[{qText:"ACME"},{qText:"12",qNum:12}]],["customer","quantity"]);assert.deepEqual(x,[{customer:"ACME",quantity:12}])});
