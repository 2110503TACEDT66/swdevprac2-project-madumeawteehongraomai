import Image from "next/image"
import getCompany from "@/libs/getCompany"
export default async function CompanyDetailPage({params} :{params:{cid:string}}){
    
    const companyDetail = await getCompany(params.cid)
    
    return(
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={'/img/profile.png'}
                alt="company Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="flex flex-col" >
                    <div className="text-md mx-5 text-left"> {companyDetail.data.name}</div> 
                    <div className="text-md mx-5 text-left"> {companyDetail.data.address} </div> 
                    <div className="text-md mx-5 text-left">{companyDetail.data.tel}</div> 
                    <div className="text-md mx-5 text-left">{companyDetail.data.website}</div> 
                    <div className="text-md mx-5 text-left">{companyDetail.data.description}</div> 

                </div>

            </div>
        </main>
    )
}