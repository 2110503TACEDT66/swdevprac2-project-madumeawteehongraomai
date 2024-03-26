
import { CompanyResponse } from "../../interface"
export default async function getCompany(cid:string):Promise<CompanyResponse> {
    await new Promise( (resolve)=>setTimeout(resolve, 1000))
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/companies/${cid}`)
    if(!response.ok) {
        throw new Error("Failed to fetch company")
    }
    return await response.json()
}