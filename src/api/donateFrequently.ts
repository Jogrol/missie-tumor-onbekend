import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { formatNumberToEuro } from "../helpers/formatNumberToEuro"
import {
  DonateFrequentlyRequestPropsModel,
  DonateFrequentlyRequestResultModel,
} from "../services/donateFrequentlyRequestModel"
import { isTestEnvironment } from "./helpers/isTestEnvironment"

const sendgrid = require("@sendgrid/mail")
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export interface MailOptionsModel {
  from: string
  to: string
  subject: string
  html: string
}

function createEmail(
  input: DonateFrequentlyRequestPropsModel
): MailOptionsModel {
  return {
    from: process.env.SENDGRID_AUTHORIZED_EMAIL,
    to: process.env.EMAIL_TO,
    subject: "Nieuwe donatie onvangen",
    html: `<div>
              ${
                isTestEnvironment() &&
                "<h5>Let op: Deze aanvraag komt vanuit de test omgeving</h5>"
              }
              <h2>Nieuwe donatie ontvangen</h2>
              <p>via steunmissietumoronbekend.nl<p>
              <p><b>Voornaam:</b> ${input.firstName}</p>
              <p><b>Achternaam:</b> ${input.insertion} ${input.lastName}</p>
              <p><b>Email:</b> ${input.email}</p>
              <p><b>Goedkeuring nieuwsbrief:</b> ${input.newsletter}</p>
              <p><b>Bedrag:</b> ${
                input.otherAmount
                  ? formatNumberToEuro(Number(input.otherAmount))
                  : formatNumberToEuro(Number(input.amount))
              }</p>
              <p><b>Periode: </b> ${input.term}</p>
              <p><b>Iban: </b> ${input.iban}</p>
              <p><b>Goedkeuring iban:</b> ${input.ibanApproval}</p>
          </div>
          `,
  }
}

export default function donateFrequentlyHandler(
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
          } as DonateFrequentlyRequestResultModel,
        })
      },
      error => {
        console.error(error)
        if (error.response) {
          return res.status(500).send({
            response: {
              success: false,
              info: error,
            } as DonateFrequentlyRequestResultModel,
          })
        }
      }
    )
    .catch(error => {
      return res.status(500).send({
        response: {
          success: false,
          info: error,
        } as DonateFrequentlyRequestResultModel,
      })
    })
}
