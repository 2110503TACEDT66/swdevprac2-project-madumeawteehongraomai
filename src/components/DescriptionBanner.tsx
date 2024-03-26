import Link from "next/link";

export default function DescriptionBanner() {
    return (
        <div className="h-[100%] w-[50%] flex flex-col">
            <div className="w-[95%] h-[65%] ml-[2%] mt-[6%] p-5 bg-gray-300 rounded-lg shadow-lg -lg text-3xl font-family: 'Roboto' text-center">
                Kairu <span className="font-bold text-red-500 font-family: 'Roboto'">INSANE</span> Neon 1v5 cluth!!!!
            </div>
            <Link href={'/companies'} className="text-black w-[95%] ml-[2%] h-[15%] mt-[1%] text-center py-7 bg-gray-400 shadow-lg rounded-lg text-3xl hover:bg-red-500 w-[200px] py-2" >
                View All Companies  ...Click heres!!
            </Link>
        </div>
    )
}