export {default}  from 'next-auth/middleware'

export const config ={
    matcher: ['/companies/:id/jobposition/:id/booking' ,"/profile"]
}