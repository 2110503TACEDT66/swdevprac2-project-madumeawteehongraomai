import Image from "next/image"
import TopMenuItem from './TopMenuItem';
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-b border-black border-solid flex flex-row-reverse">
            <div className="flex flex-row space-x-4">
                {session ? (
                    <TopMenuItem title='Log-Out' pageRef="/api/auth/signout"/>
                ) : (
                    <>
                        <TopMenuItem title='Log-IN' pageRef="/api/auth/signin"/>
                        <TopMenuItem title='register' pageRef="/register"/>
                    </>
                )}
            </div>
            <Link href="/" className="flex flex-row absolute left-0 h-full">
                <Image src={'/img/logo.png'} alt="logo" className="h-full w-auto border-0" width={0} height={0} sizes='100vh'/>
            </Link>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <TopMenuItem title='Companies' pageRef='/companies'/>
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            <TopMenuItem title="Profile" pageRef="/profile"/>
            
        </div>
    )
}