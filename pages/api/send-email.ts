// /pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { type, name, email, phone, company, message, service, documentType, pageCount, deadline, additionalInfo, position } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'traccoon1999@gmail.com',
        pass: 'gnvc cauk csja ifun', // Use an App Password instead of your actual password
      },
    });

    let emailContent = '';
    let subject = '';

    if (type === 'contact') {
      subject = `${name}様からのお問い合わせをお受け致しました。`;
      emailContent = `
        ${name}様

        この度、弊社へ見積もり依頼をくださり誠にありがとうございます。

        以下の内容でお問い合わせをお受け致しました:

        お名前: ${name}
        メールアドレス: ${email}
        電話番号: ${phone}
        企業名: ${company}
        お問い合わせ内容: ${message}

        ${name}様へ速やかに電話またはメールにて連絡いたしますので、どうぞよろしくお願いいたします。

        Irwin&co代表取締役 アーウィン海
      `;
    } else if (type === 'quote') {
      subject = `${name}様からの見積もり依頼をお受け致しました。`;
      emailContent = `
        ${name}様

        この度、弊社へ見積もり依頼をくださり誠にありがとうございます。

        以下の内容で見積もり依頼をお受け致しました:

        お名前: ${name}
        メールアドレス: ${email}
        電話番号: ${phone}
        企業名: ${company}
        ご希望のサービス: ${service}
        資料の種類: ${documentType}
        ページ数: ${pageCount}
        希望納期: ${deadline}
        追加情報: ${additionalInfo}

        ${name}様へ速やかに電話またはメールにて連絡いたしますので、どうぞよろしくお願いいたします。

        Irwin&co代表取締役 アーウィン海
      `;
    } else if (type === 'seminar') {
      subject = `${name}様からのセミナー申し込みをお受け致しました。`;
      emailContent = `
        ${name}様

        この度、弊社のセミナーにお申し込みいただき、誠にありがとうございます。

        以下の内容でセミナーのお申し込みをお受け致しました:

        お名前: ${name}
        メールアドレス: ${email}
        企業名: ${company}
        役職: ${position}
        メッセージ: ${message}

        ${name}様へ速やかに詳細情報をメールにてお送りいたしますので、どうぞよろしくお願いいたします。

        Irwin&co代表取締役 アーウィン海
      `;
    }

    const mailOptions = {
      from: 'traccoon1999@gmail.com',
      to: 'traccoon1999@gmail.com',
      subject: subject,
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);

    // Narrow down the error type
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: String(error) });
    }
  }
}
