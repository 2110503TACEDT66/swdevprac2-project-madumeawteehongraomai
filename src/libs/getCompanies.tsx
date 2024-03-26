import { CompanyJson } from "../../interface"

export default async function getCompanies():Promise<CompanyJson>{
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/companies`)
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        throw new Error("Failed to fetch create booking");
    }

    return data;
}