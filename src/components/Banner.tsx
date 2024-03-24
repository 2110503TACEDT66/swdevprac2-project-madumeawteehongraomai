import Image from "next/image";

export default function Banner() {
    return (
        <div className="block relative p-5 m-0 w-[100vw] h-[80vh]">
            <Image src={'/img/cover1.jpg'}
            alt="cover"
            fill={true}
            objectFit="cover"/>
            <div className="relative text-[40px] text-black text-center top-24 z-20">
                <h1 className='text-4xl font-medium'>Online Job Fair Registration</h1>
                <p className='text-xl'>Website for booking interview</p>
            </div>
        </div>
    )
}