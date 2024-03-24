import Link from 'next/link'

export default function TopMenuItem ( { title, pageRef } : { title:string, pageRef:string } ) {
    return (
        <Link href={pageRef} className='w-32 text-center mt-auto mb-auto font-topitem text-xs text-gray-500'>
            {title}
        </Link>
    )
}