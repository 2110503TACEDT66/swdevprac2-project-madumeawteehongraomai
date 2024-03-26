export default async function createBooking(cid: string, jid: string, date: string, token: string) {
    // Parse the input date string into a Date object
    const parsedDate = new Date(date);

    // Convert the parsed date to the desired format ("YYYY-MM-DDTHH:mm:ss.SSSZ")
    const formattedDate = parsedDate.toISOString();

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/companies/${cid}/${jid}/interviews/`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            intvDate: formattedDate // Use the formatted date here
        }),
    });

    const data = await response.json();

    console.log(cid, jid, formattedDate); // Log the formatted date
    console.log(data);

    if (!response.ok) {
        throw new Error("Failed to fetch create booking");
    }

    return data;
}