import { Database } from "@/data/api/database";

export async function POST(request: Request) {
  const body = await request.json();
  const database = new Database();
  const authToken = await database.login(body.email, body.password);
  return Response.json({ authToken });
}
