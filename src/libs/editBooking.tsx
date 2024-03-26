export default async function editBooking(id: string, date: string, token: string) {
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.toISOString();

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/interviews/${id}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            intvDate: formattedDate
        }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        throw new Error("Failed to fetch create booking");
    }

    return data;
}