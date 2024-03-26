import { JobpositionJson } from "../../interface"
export default async function getJobposition(jid:string):Promise<JobpositionJson> {
    await new Promise( (resolve)=>setTimeout(resolve, 1000))
    const response = await fetch(`http://localhost:5000/api/v1/positions/${jid}`)
    if(!response.ok) {
        throw new Error("Failed to fetch company")
    }
    return await response.json()
}