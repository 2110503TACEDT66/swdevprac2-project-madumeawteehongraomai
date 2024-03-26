import getCompanies from "@/libs/getCompanies"
import CompanyCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default async function Company(){
    const companies = await getCompanies()
    return(
        <main className="text-center p-5">
            <h1 className="text-xl">select</h1>
            <Suspense fallback={<p>Loading ...<LinearProgress/></p>}>
            <CompanyCatalog companiesJson={companies}/>
            </Suspense>
        </main>
    )
}