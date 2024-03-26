export default async function createBooking({cid, jid, date}:{cid:string, jid:string, date:Date}) {
    const response = await fetch(`http://localhost:5000/api/v1/companies/${cid}/${jid}/interviews/`,{
        method: "POST",
        body: JSON.stringify({
            intvDate: date
        }),
    })
    if(!response.ok){
        throw new Error("Failed to fetch create booking")

    }

    return await response.json()

}