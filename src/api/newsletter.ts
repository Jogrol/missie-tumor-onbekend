const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PASSWORD,
  },
})

const mailOptions = {
  from: process.env.GMAIL_ACCOUNT,
  to: "joeygrolleman@gmail.com",
  subject: "Inschrijving nieuwsbrief",
  html: `<div> 
            <h2>Nieuwe inschrijving</h2>
            <p>via steunmissietumoronbekend.nl<p>
            <p><b>Voornaam:</b> Joey</p>
            <p><b>Achternaam:</b> Grolleman</p>
            <p><b>Email:</b> joeygrolleman@gmail.com</p>
        </div>
        `,
}

export default function newsletterHandler(req, res) {


    // 
    if (req.body) {
        
    }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log("Email sent: " + info.response)
    }
  })
}
