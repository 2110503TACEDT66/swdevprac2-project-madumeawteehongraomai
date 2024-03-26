
import { CompanyJson } from "../../../../../../interface"
import getCompany from "@/libs/getCompany";
import { link } from "fs";

import Link from "next/link"
export default async function JobpositionCatalog({params}: {params:{cid:string}}) {
    const companyDetail = await getCompany(params.cid)
    const conpanyforjob = await companyDetail.data.jobpositions;


    return (
        <main className="bg-white h-screen flex flex-col">
            <div className="text-black mx-32 mt-10 text-5xl">
                POSITIONS
            </div>
            <div className="text-black mx-32 text-5xl font-bold">
                {companyDetail.data.name}
            </div>
            <hr className="my-4 border-gray-400 mx-32 mt-10" /> 
            <div className="m-5 flex flex-col flex-wrap mx-32 ">
                {conpanyforjob.map((job, index) => (
                    <Link href={`/companies/${companyDetail.data._id}/jobposition/${job._id}/booking`}>
                            <div key={index} className="p-4 m-4 text-black bg-gray-100 border-inherit">
                                <div className="text-5xl">{job.position}</div>
                                <div>{job.requirement}</div>
                                <div className="text-sm">{companyDetail.data.name}</div>
                            </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}