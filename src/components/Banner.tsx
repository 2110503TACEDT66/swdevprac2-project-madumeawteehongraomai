import Image from "next/image";

export default function Banner() {
    return (
        <div>
            <Image src={'/img/cover1.jpg'}
            alt="cover"
            fill={true}
            objectFit="cover"/>
            <div>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <p className='text-xl'>Website for booking Vaccine and show list of hospitals</p>
            </div>
        </div>
    )
}