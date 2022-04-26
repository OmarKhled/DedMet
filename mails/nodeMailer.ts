// ar nodeoutlook = require("nodejs-nodemailer-outlook");
import nodemailer from "nodemailer";

const sendEmail = async (
  person: { name: string; email: string },
  licenseKey: string
) => {
  console.log(person, typeof person);
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "o.abuelfetohahmed@nu.edu.eg",
      pass: "Lava@00446",
    },
  });
  console.log(Object.keys(person));
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"DedMet" <o.abuelfetohahmed@nu.edu.eg>', // sender address
    to: person.email, // list of receivers
    subject: "DedMet Subscription License", // Subject line
    text: "Hello world?", // plain text body
    html: `<p>Thanks for buying DedMet Semester Subscription, Here you can find you extension license ${licenseKey}</p>`, // html body
  });

  console.log("Message sent: %s", person.email, info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  console.log("finished");
  return;
};

// sendEmail({ name: "omar khaled", email: "omrcorc@gmail.com" }, 1234);

export default sendEmail;
