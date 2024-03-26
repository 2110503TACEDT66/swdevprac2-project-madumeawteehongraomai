import { JobpositionJson } from "../../interface"

export default async function getJobpositions():Promise<JobpositionJson>{
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/positions`)
    if(!response.ok) {
        throw new Error("Failed to fetch Companies")
    }
    return await response.json()
}