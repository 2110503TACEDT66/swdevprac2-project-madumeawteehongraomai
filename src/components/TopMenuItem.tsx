import Link from 'next/link'

export default function TopMenuItem ( { title, pageRef } : { title:string, pageRef:string } ) {
    return (
        <Link href={pageRef} className='w-32 text-center mt-auto mb-auto font-topitem text-xs text-[#333333] hover:text-red-500'>
            {title}
        </Link>
    )
}