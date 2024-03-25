export default function DescriptionBanner() {
    return (
        <div className="h-[100%] w-[50%] flex flex-col">
            <div className="w-[95%] h-[65%] ml-[2%] mt-[6%] p-5 bg-gray-500 shadow-lg rounded-lg text-3xl">
                Description for web
            </div>
            <button className="text-black w-[95%] ml-[2%] h-[15%] mt-[1%] bg-gray-400 shadow-lg rounded-lg text-3xl">
                Click Me
            </button>
        </div>
    )
}