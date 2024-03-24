import Image from "next/image"
import TopMenuItem from './TopMenuItem';

export default async function TopMenu() {
    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-2 border-neutral-300 border-solid flex flex-row-reverse">
            <Image src={'/img/logo.jpg'} alt="logo" className="h-full w-auto" width={0} height={0} sizes='100vh'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>
        </div>
    )
}