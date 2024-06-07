import nodemailer from "nodemailer";
import Mail from 'nodemailer/lib/mailer';
import connectToDatabase from '@util/connectDb'
import contactModel from '@models/contactModel'
import {renderHtml, renderText} from '@util/renderEmail'


 

export async function POST(req:Request) {
  await connectToDatabase();
  const r =  await req.json();
  const obj =  r.data;

  const {email, name, organization} = obj;

  const emailHtml = renderHtml(name, organization);
  const emailText = renderText(name, organization);
  
  const transport = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.NOREPLY_EMAIL,
      pass: process.env.NOREPLY_PASSWORD,
    },
  });
  
  const mailOptions: Mail.Options = {
    from: process.env.NOREPLY_EMAIL,
    to: email,
    cc: process.env.MY_EMAIL,
    subject: `Quote request to Weezac.pt`,
    html: emailHtml,
    text: emailText,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          console.log('Email sent');
          
          resolve('Email sent');
        } else {
          console.log('Email not been sent');
          reject(err.message);
        }
      });
    });
  
  try {
    const contact = new contactModel(obj);
    await contact.save();
    await sendMailPromise();
    return Response.json({ success: true, data: contact });

  } catch (error:any) {
    const erRay:string[] = [];
    var tifOptions = Object.keys(error.errors).map(function(key) {
      erRay.push(error.errors[key].message)
  });
    return Response.json({ success: false, error: erRay });

  }
   
  }

