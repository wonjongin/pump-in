import nodemailer from "nodemailer";

type EmailPayload = {
  subject: string;
  html: string;
  attachments: [{ filename: string; content: Buffer; encoding: string }];
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: +(process.env.SMTP_PORT || 0),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    to: process.env.MAIL_TO,
    ...data,
  });
};
