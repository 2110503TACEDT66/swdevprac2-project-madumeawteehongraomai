import Image from "next/image";
import getCompany from "@/libs/getCompany";
import Link from "next/link";

export default async function CompanyDetailPage({ params }: { params: { cid: string } }) {
    const companyDetail = await getCompany(params.cid);

    

    return (
        <main className="bg-white h-screen flex flex-col">
            <div className="text-black mx-32 mt-10 text-5xl">
                View
            </div>
            <div className="text-black mx-32 text-5xl font-bold">
                Companies
            </div>
            <div className="flex flex-row my-4 border-gray-400 mx-32 mt-10">
                <Image 
                    src={'/img/kbank.jpg'}
                    alt="company Image"
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="flex flex-col ml-8">
                    <div className="text-md mx-5 text-left text-black text-xl">
                        Kasikornbank, often stylised as KBank and formerly known as the Thai Farmers Bank, is a banking group in Thailand. KBank was established on 8 June 1945 by Choti Lamsam, with registered capital of five million baht. It has been listed on the Stock Exchange of Thailand since 1976.
                    </div>
                    <div className="text-md mx-5 text-left text-black text-xl mt-8">
                        TEL: {companyDetail.data.tel}
                    </div>
                    <div className="text-md mx-5 text-left text-black text-xl">
                        WEBSITE: {companyDetail.data.website}
                    </div>
                    <Link href={`/companies/${companyDetail.data._id}/jobposition`} className="text-black w-[80%] ml-[2%] h-[25%] mt-[1%] text-center py-6 bg-gray-400 shadow-lg  text-2xl hover:bg-red-500 w-[200px] py-2">view jobposition</Link>
                </div>
            </div>
        </main>
    );
}

