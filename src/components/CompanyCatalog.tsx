import Link from "next/link";
import Productcard from "./Card";
import { CompanyJson } from "../../interface";
export default async function CompanyCatalog({companiesJson}:{companiesJson:CompanyJson}) {

    return(
        <>

        <div style={{margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap",marginLeft:130}}>
                {
                        companiesJson.data.map((CompanyItem)=>(
                        <Link href={`/companies/${CompanyItem._id}`} className="w-1/5">
                        <Productcard companyName={CompanyItem.name} imgSrc={'/img/kbank.jpg'}
                        />
                        </Link>


                    ))
                }
            </div>

        </>
    )

} 