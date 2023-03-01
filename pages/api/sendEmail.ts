import { sendEmail } from "lib/email";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const { title, desc, files } = JSON.parse(req.body);

    await sendEmail({
      subject: title,
      html: desc,
      attachments: files,
    });
    return res.status(200).json({ message: "Email sent successfully" });
  }
}
