"use client"
import BookingList from "@/components/BookingList"
export default function MybookingPage() {
    return (
        <main className="h-[40vw] w-[100%] flex flex-col bg-white">
            <div className="text-5xl font-thin text-neutral-400 font-family: 'Roboto' pr-4 mt-8">VIEW</div>
            <div className="text-5xl font-bold text-black font-family: 'Roboto'  pr-4">INTERVIEW</div>
            <div className="flex justify-center w-10/12 mx-auto mt-8">
                <div className="border-b border-gray-300 w-full"></div> 
            </div>

            <BookingList></BookingList>
        </main>
    )
}