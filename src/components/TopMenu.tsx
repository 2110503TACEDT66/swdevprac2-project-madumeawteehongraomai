import Image from "next/image"
import TopMenuItem from './TopMenuItem';
import Link from "next/link";

export default async function TopMenu() {
    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-2 border-neutral-300 border-solid flex flex-row-reverse">
            <Link href="/" className="flex flex-row absolute left-0 h-full">
                <Image src={'/img/logo.png'} alt="logo" className="h-full w-auto" width={0} height={0} sizes='100vh'/>
            </Link>
            <TopMenuItem title='Booking' pageRef='/booking'/>
        </div>
    )
}