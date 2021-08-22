import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import {
  NewsletterRequestProps,
  NewsletterRequestResultModel,
} from "../services/newsletterRequestModel"

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PASSWORD,
  },
})

export interface MailOptionsModel {
  from: string
  to: string
  subject: string
  html: string
}

function createEmail(input: NewsletterRequestProps): MailOptionsModel {
  return {
    from: process.env.GMAIL_ACCOUNT,
    to: "joeygrolleman@gmail.com",
    subject: "Nieuwe inschrijving nieuwsbrief",
    html: `<div> 
              <h2>Nieuwe inschrijving</h2>
              <p>via steunmissietumoronbekend.nl<p>
              <p><b>Voornaam:</b> ${input.firstName}</p>
              <p><b>Achternaam:</b> ${input.insertion} ${input.lastName}</p>
              <p><b>Email:</b> ${input.email}</p>
          </div>
          `,
  }
}

export default function newsletterHandler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  transporter.sendMail(
    createEmail(req.body.value),
    function (error: unknown, info: unknown) {
      if (error) {
        return res
          .status(500)
          .send({
            response: {
              success: false,
              info: error,
            } as NewsletterRequestResultModel,
          })
      } else {
        return res
          .status(200)
          .json({
            response: { success: true, info } as NewsletterRequestResultModel,
          })
      }
    }
  )
}
