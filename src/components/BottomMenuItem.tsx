

export default function BottomMenuItem ( { children } : {  children :React.ReactNode} ) {
    return (
        <div className='block grid grid-cols-1 mt-[75px] ml-[200px] py-1'>
            {children}
        </div>
    )
}