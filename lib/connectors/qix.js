const trim=v=>String(v||"").trim().replace(/\/$/,"");
export function qixSocketUrl(tenantUrl,appId,identity="sahaiq"){if(!tenantUrl||!appId)throw new Error("tenantUrl and appId are required");const u=new URL(trim(tenantUrl));const proto=u.protocol==="https:"?"wss:":"ws:";return proto+"//"+u.host+"/app/"+encodeURIComponent(appId)+"/identity/"+encodeURIComponent(identity)}
export function qixHeaders(apiKey){if(!apiKey)throw new Error("apiKey is required");return{Authorization:"Bearer "+apiKey,"User-Agent":"SahaIQ/0.1"}}
export class QixRpcClient{
 constructor(socket){this.socket=socket;this.seq=0;this.pending=new Map();socket.addEventListener("message",e=>{let m;try{m=JSON.parse(e.data)}catch{return}if(!m.id)return;const p=this.pending.get(m.id);if(!p)return;this.pending.delete(m.id);m.error?p.reject(new Error(m.error.message||"QIX error")):p.resolve(m.result)})}
 call(handle,method,params=[]){const id=++this.seq;return new Promise((resolve,reject)=>{this.pending.set(id,{resolve,reject});this.socket.send(JSON.stringify({jsonrpc:"2.0",id,handle,method,params}))})}
 async openDoc(appId){return this.call(-1,"OpenDoc",[appId,"","","",false])}
 async createSessionObject(handle,definition){return this.call(handle,"CreateSessionObject",[definition])}
 async getLayout(handle){return this.call(handle,"GetLayout",[])}
 async getHyperCubeData(handle,path="/qHyperCubeDef",pages=[{qTop:0,qLeft:0,qHeight:1000,qWidth:10}]){return this.call(handle,"GetHyperCubeData",[path,pages])}
}
export function hyperCubeDefinition(dimensions=[],measures=[]){return{qInfo:{qType:"sahaiq-export"},qHyperCubeDef:{qDimensions:dimensions.map(field=>({qDef:{qFieldDefs:[field]}})),qMeasures:measures.map(expression=>({qDef:{qDef:expression}})),qInitialDataFetch:[{qTop:0,qLeft:0,qHeight:1000,qWidth:Math.max(1,dimensions.length+measures.length)}]}}}
export function cellsToRows(matrix,columns){return(matrix||[]).map(row=>Object.fromEntries(columns.map((c,i)=>[c,row[i]?.qNum!=="NaN"&&Number.isFinite(row[i]?.qNum)?row[i].qNum:(row[i]?.qText??null)])))}
