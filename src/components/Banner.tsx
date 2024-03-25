import VideoBanner from "./VideoBanner"



import DescriptionBanner from "./DescriptionBanner"

export default function Banner() {
    
    
    
    return (
        <div className="block mx-[8%] my-10 mt-0 absolute w-[85%] h-[60%] place-content-center bg-[#F4F4F4] flex flex-row">
            <VideoBanner></VideoBanner>

            
            <DescriptionBanner></DescriptionBanner>
        </div>
    )
}