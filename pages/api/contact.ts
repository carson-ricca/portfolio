import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.clientId;
const CLIENT_SECRET = process.env.clientSecret;
const REDIRECT_URI = process.env.redirectURI;
const REFRESH_TOKEN = process.env.refreshToken;
const TO_EMAIL = process.env.toEmail;
const FROM_EMAIL = process.env.fromEmail;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function handler(
  req: { body: { name: any; email: any; message: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
      end: { (arg0: { error: unknown }): any; new (): any };
    };
  }
) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      //@ts-expect-error
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "carsonriccaweb@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailData = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Portfolio Question from ${req.body.name}`,
      text: `Email: ${req.body.email}\nMessage: ${req.body.message}`,
    };

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
    return res.status(200).json({ message: "Mail is sent." });
  } catch (error) {
    return res.status(500).end({ error: error });
  }
}
