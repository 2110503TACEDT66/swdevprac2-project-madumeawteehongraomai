/*
import getJobposition from "@/libs/getJobposition"
import getCompany from "@/libs/getCompany"
import Link from "next/link"
export default async function JobpositionDetailPage({params} :{params:{jid:string}}){
    
    const jobDetail = await getJobposition(params.jid)
    
    return(
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
        
                <div className="flex flex-col" >
                    
                    <div className="text-md mx-5 text-left"> {jobDetail.data.address}</div>
                    <div className="text-md mx-5 text-left"> {jobDetail.data.tel}</div>
                    
                </div>

            </div>
        </main>
    )
}
*/