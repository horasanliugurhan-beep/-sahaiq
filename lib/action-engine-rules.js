export const PRIORITY={HIGH:3,MEDIUM:2,LOW:1};
export const CATEGORY={RETENTION:"retention",RECOVERY:"recovery",OPPORTUNITY:"opportunity",MAINTENANCE:"maintenance"};
const SLA={champion:14,loyal:30,at_risk:7,new:14,standard:60};
const action=(ctx,x)=>({...x,customerId:ctx.customer.id,customerName:ctx.customer.name,segmentKey:ctx.rfm.segment_key,lastContactDays:ctx.lastContactDays??null});
function champion(ctx){if(ctx.rfm.segment_key!=="champion"||((ctx.lastContactDays??9999)<=SLA.champion))return null;return action(ctx,{ruleKey:"champion-silent",priority:3,category:CATEGORY.RETENTION,reason:"High-value customer needs follow-up",nextAction:"Contact the account and review recent demand."});}
function risk(ctx){if(ctx.rfm.segment_key!=="at_risk")return null;return action(ctx,{ruleKey:"at-risk",priority:3,category:CATEGORY.RECOVERY,reason:`High-value account has been silent for ${ctx.rfm.recency_days} days`,nextAction:"Review lost demand and schedule a recovery conversation."});}
function decline(ctx){if(!ctx.trend?.isDropping)return null;return action(ctx,{ruleKey:"sales-decline",priority:3,category:CATEGORY.OPPORTUNITY,reason:`YTD sales are ${Math.abs(ctx.trend.pct)}% below comparison period`,nextAction:"Investigate price, stock, competitor and demand changes."});}
function loyal(ctx){if(ctx.rfm.segment_key!=="loyal"||((ctx.lastContactDays??9999)<=SLA.loyal))return null;return action(ctx,{ruleKey:"loyal-followup",priority:2,category:CATEGORY.MAINTENANCE,reason:"Loyal customer contact SLA exceeded",nextAction:"Schedule a routine follow-up."});}
export const RULES=[champion,risk,decline,loyal];
export function evaluateRules(ctx){return RULES.map(r=>r(ctx)).filter(Boolean)}
export function sortActions(xs){return [...xs].sort((a,b)=>b.priority-a.priority||String(a.customerName).localeCompare(String(b.customerName)))}
