import BottomMenuItem from "./BottomMenuItem"
import Image from "next/image"

export default async function BottomMenu() {
    return (
        <div className="h-[374px] bg-[#2C2C2C] bottom-0 left-0 right-0 z-30 grid grid-cols-4">
            <Image src={'/img/logowhite.png'} alt="logo" className="h-[3vw] w-auto mt-[75px] ml-[100px]" width={0} height={0} sizes='100vh'/>
            <BottomMenuItem>
                <h1>Build by:</h1>
                <p>Thanakit Thepnok</p>
                <p>Thanakit Thepnok</p>
                <p>Thanakit Thepnok</p>
            </BottomMenuItem>
            <BottomMenuItem>
                <h1>Build by:</h1>
                <p>Thanakit Thepnok</p>
                <p>Thanakit Thepnok</p>
                <p>Thanakit Thepnok</p>
            </BottomMenuItem>
        </div>
    )
}