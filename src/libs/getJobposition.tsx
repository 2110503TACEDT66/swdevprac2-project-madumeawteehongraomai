import { JobpositionJson, JobpositionResponse } from "../../interface"
export default async function getJobposition(jid:string, token:string):Promise<JobpositionJson> {
    await new Promise( (resolve)=>setTimeout(resolve, 1000))
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/positions/${jid}`,{
        method: "GET",
        headers:{
            authorization: `Bearer ${token}`,
        },
    })
    if(!response.ok) {
        throw new Error("Failed to fetch company")
    }
    return await response.json()
}