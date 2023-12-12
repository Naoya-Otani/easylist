import { NextApiRequest, NextApiResponse } from "next";
export default async function updateFaculty(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO: Implement the updateFaculty function
  if (req.method !== "PUT") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  try {
    const { facultyId, facultyName, majors } = req.body;
  } catch (error) {}
}
