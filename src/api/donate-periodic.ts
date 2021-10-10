import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { PeriodicDonateRequestModel } from "../services/periodicDonateRequestModel"
import { TestModeEnnum } from "./donate"

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

const isTestEnvironment = () : boolean => {
  return process.env.PAY_TEST_MODE === TestModeEnnum.True ? true : false
}

function createEmail(input: PeriodicDonateRequestModel): MailOptionsModel {
  return {
    from: process.env.GMAIL_ACCOUNT,
    to: process.env.EMAIL_TO,
    subject: "Nieuwe periodieke donatie",
    html: `<div>
              ${isTestEnvironment && '<h5>Let op: Deze aanvraag komt vanuit de test omgeving</h5>'}
              <h2>Nieuwe periodieke donatie</h2>
              <p>via steunmissietumoronbekend.nl<p>
              <p><b>Voornaam:</b> ${input.firstName}</p>
              <p><b>Achternaam:</b> ${input.insertion} ${input.lastName}</p>
              <p><b>Email:</b> ${input.email}</p>
              <p><b>Bedrag: </b>${input.amount}</p>
              <p><b>Periode: </b>${input.periodic}</p>
              <p><b>Iban: </b>${input.iban}</p>
          </div>
          `,
  }
}

export default function donatePeriodicHandler(
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
