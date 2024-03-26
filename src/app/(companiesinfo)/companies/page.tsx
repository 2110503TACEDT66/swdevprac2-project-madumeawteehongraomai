import getCompanies from "@/libs/getCompanies"
import CompanyCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default async function Company(){
    const companies = await getCompanies()
    return(
        <main className="bg-white h-screen flex flex-col">
            <div className="text-black mx-32 mt-10 text-5xl">
                View
            </div>
            <div className="text-black mx-32 text-5xl font-bold">
                Companies
            </div>
            <hr className="my-4 border-gray-400 mx-32 mt-10" /> 
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p> }>
                <CompanyCatalog companiesJson={companies}/>
            </Suspense>
        </main>
    )
}