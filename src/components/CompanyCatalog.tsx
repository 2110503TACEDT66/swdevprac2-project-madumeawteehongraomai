import Link from "next/link";
import Productcard from "./Card";
import { CompanyJson } from "../../interface";
export default async function CompanyCatalog({companiesJson}:{companiesJson:CompanyJson}) {
    const companiesJsonReady =await companiesJson

    return(
        <>

        <div className="m-5 flex flex-row flex-wrap justify-around content-around p-2.5">
                {
                        companiesJsonReady?.data.map((CompanyItem)=>(
                        <Link href={`/companies/${CompanyItem._id}`} className="w-1/5">
                        <Productcard companyName={CompanyItem.name} imgSrc={'/img/profile.png'}
                        />
                        </Link>


                    ))
                }
            </div>

        </>
    )

} 