import { Database } from "@/data/api/database";

export async function GET(
  request: Request,
  { workId }: Record<string, string>
) {
  // read the favorites status from our database
  const database = new Database(request.headers.get("authToken"));
  const favStatus = await database.getFavoriteStatus(workId);
  // make a json response
  return Response.json(favStatus);
}

export async function POST(
  request: Request,
  { workId }: Record<string, string>
) {
  // read the body for the payload
  const body = await request.json();
  const status = body.status;
  // write the updated status to our database
  const database = new Database(request.headers.get("authToken"));
  await database.setFavoriteStatus(workId, status);
  // make a json response
  return Response.json(status);
}
