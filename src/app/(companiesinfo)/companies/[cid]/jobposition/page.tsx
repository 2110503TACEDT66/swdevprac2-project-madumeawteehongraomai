
import { CompanyJson } from "../../../../../../interface"
import getCompany from "@/libs/getCompany";

import Link from "next/link"
export default async function JobpositionCatalog({ companiesJson,params}: { companiesJson: CompanyJson ,params:{cid:string}}) {
    const companyDetail = await getCompany(params.cid)
    const conpanyforjob = await companyDetail.data.jobpositions;


    return (
        <>
            <div className="m-5 flex flex-row flex-wrap justify-around content-around p-2.5">
                {conpanyforjob.map((job, index) => (
                    <div key={index} className="border p-4 m-2">
                        <div>{companyDetail.data.name}</div>
                        <div>{job.position}</div>
                        <div>{job.requirement}</div>
                       
                    </div>
                ))}
            </div>
        </>
    );
}