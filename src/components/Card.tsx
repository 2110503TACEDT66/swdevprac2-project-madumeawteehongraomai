'use client'
import Image from 'next/image';

import InteractiveCard from './InteractiveCard';

export default function Productcard( {companyName,imgSrc} : {companyName:string,imgSrc:string}){
    
    

    return(
        <InteractiveCard contentName={companyName}>
            <div className='h-[70%] relative rounded-t-lg mx-5 my-5'>
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover mx5 my-5'
                />
            </div>
            <div className='w-full h-[70%] text-black text-center mt-8'>{companyName}</div>
            
           
        
        </InteractiveCard>
    );
}