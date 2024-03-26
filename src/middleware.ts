export {default}  from 'next-auth/middleware'

export const config ={
    matcher: ['/companies/[cid]/jobposition/[jid]/booking' ,"/profile"]
}