import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response = null;
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.body.email,
      bcc: "info@your-domain.com",
      from: "info@your-domain.com",
      subject: "お問合せありがとうございました。",
      text: `${req.body.name} 様\nお問合せを受け付けました。回答をお待ちください。\n\n【件名】${req.body.subject}\n${req.body.message}`,
    };
    (async () => {
      try {
        response = await sgMail.send(msg);
      } catch (error: any) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }
  res.status(200);
  res.send(response);
}
