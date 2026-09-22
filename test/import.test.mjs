import test from"node:test";import assert from"node:assert/strict";import{parseCsv}from"../lib/import/csv.js";import{normalizeRow,validateMapping}from"../lib/import/schema.js";
test("CSV parser handles quoted comma",()=>{const x=parseCsv('id,name,date,qty\n1,"ACME, Ltd",2026-09-01,4');assert.equal(x[0].name,"ACME, Ltd")});
test("mapping validation requires core fields",()=>{assert.deepEqual(validateMapping({customer_id:"id"}).sort(),["customer_name","date","quantity"].sort())});
test("normalizer rejects incomplete rows",()=>{assert.equal(normalizeRow({id:"1"},{customer_id:"id"}),null)});
