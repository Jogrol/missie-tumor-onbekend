import fetch from "node-fetch"
import { DonateActionFormValues } from "../components/donate/donateActionForm"
import { getInitials } from "../helpers/getInitials"

export enum TestModeEnnum {
  False = 0,
  True = 1,
}
export type PaymentBodyObject = {
  token: string
  serviceId: string
  amount: number
  finishUrl: string
  ipAddress: string
  testMode: TestModeEnnum
  transaction: {
    currency: "EUR"
    description: "Donatie Stichting Tumor Onbekend"
  }
  enduser: {
    initials: string
    lastName: string
    emailAddress: string
  }
}

export default async function donateHandler(req, res) {

  const url = "https://rest-api.pay.nl/v8/transaction/start/json"

  const headers = {
    "Content-Type": "application/json",
  }

  const dtoMapper = (input: DonateActionFormValues): PaymentBodyObject => {
    return {
      token: process.env.PAY_API_TOKEN,
      serviceId: process.env.PAY_SERVICE_ID,
      amount: input.amount*100,
      finishUrl: "https://steunmissietumoronbekend.nl/bedankt-voor-uw-donatie/",
      ipAddress: req.connection.remoteAddress,
      testMode: TestModeEnnum.False,
      transaction: {
        currency: "EUR",
        description: "Donatie Stichting Tumor Onbekend",
      },
      enduser: {
        initials: getInitials(input.firstName),
        lastName: input.lastName,
        emailAddress: input.email,
      },
    }
  }

  try {
    const result = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(dtoMapper(req.body.value)),
    }).then(res => {
      return res.json()
    })
    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
