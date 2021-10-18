import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import {
  NewsletterRequestPropsModel,
  NewsletterRequestResultModel,
} from "../services/newsletterRequestModel"
import { isTestEnvironment } from "./helpers/isTestEnvironment"

const sendgrid = require("@sendgrid/mail")
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
export interface MailOptionsModel {
  from: string
  to: string
  subject: string
  html: string
}

function createEmail(input: NewsletterRequestPropsModel): MailOptionsModel {
  return {
    from: process.env.SENDGRID_AUTHORIZED_EMAIL,
    to: process.env.EMAIL_TO,
    subject: "Nieuwe inschrijving nieuwsbrief",
    html: `<div>
              ${
                isTestEnvironment() &&
                "<h5>Let op: Deze aanvraag komt vanuit de test omgeving</h5>"
              }
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
  sendgrid
    .send(createEmail(req.body.value))
    .then(
      () => {
        res.status(200).json({
          response: {
            success: true,
            info: "Message has sent",
          } as NewsletterRequestResultModel,
        })
      },
      error => {
        console.error(error)
        if (error.response) {
          return res.status(500).send({
            response: {
              success: false,
              info: error,
            } as NewsletterRequestResultModel,
          })
        }
      }
    )
    .catch(error => {
      return res.status(500).send({
        response: {
          success: false,
          info: error,
        } as NewsletterRequestResultModel,
      })
    })
}
