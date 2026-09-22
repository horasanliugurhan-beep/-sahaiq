export const REQUIRED_FIELDS=["customer_id","customer_name","date","quantity"];
export const OPTIONAL_FIELDS=["revenue","product","brand","region"];
export function normalizeRow(row,map){
 const get=k=>row[map[k]];
 const id=String(get("customer_id")??"").trim(),name=String(get("customer_name")??"").trim(),date=String(get("date")??"").trim();
 const quantity=Number(get("quantity")??0),revenue=Number(get("revenue")??0);
 if(!id||!name||!date||!Number.isFinite(quantity)) return null;
 return {customer_id:id,customer_name:name,date,quantity,revenue:Number.isFinite(revenue)?revenue:0,product:String(get("product")??""),brand:String(get("brand")??""),region:String(get("region")??"")};
}
export function validateMapping(map){return REQUIRED_FIELDS.filter(k=>!map?.[k]);}
