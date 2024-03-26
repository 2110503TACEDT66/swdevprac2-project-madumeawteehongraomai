import { CompanyJson } from "../../interface"

export default async function getCompanies():Promise<CompanyJson>{
    const response = await fetch("http://localhost:5000/api/v1/companies")
    if(!response.ok) {
        throw new Error("Failed to fetch Companies")
    }
    return await response.json()
}