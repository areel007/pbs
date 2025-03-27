export async function GET() {
  return new Response(
    JSON.stringify({ message: "Hello World, from the server!" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
