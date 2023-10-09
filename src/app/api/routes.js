export async function GET(request) {
    const res = await fetch('localhost:8000/api/users', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()
    return Response.json({ data })
}