export class DataConnector{constructor(config={}){this.config=config}async test(){throw new Error("Not implemented")}async fetch(){throw new Error("Not implemented")}}
export class QlikConnector extends DataConnector{
 async test(){const {tenantUrl,apiKey}=this.config;if(!tenantUrl||!apiKey)return{ok:false,message:"Tenant URL and credential are required"};return{ok:true,message:"Configuration present; remote connectivity must be verified by the deployment."}}
 async fetch(){throw new Error("Qlik extraction adapter is not enabled in the public demo yet. Configure deployment-specific authorization first.")}
}
