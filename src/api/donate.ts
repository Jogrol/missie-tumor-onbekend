import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import fetch from "node-fetch"
import { formatNameToInititals } from "../helpers/formatNameToInititals"
import { DonateRequestProps } from "../services/donateRequestModel"


export enum TestModeEnnum {
  False = "0",
  True = "1",
}
export type PaymentBodyObject = {
  token: string
  serviceId: string
  amount: number
  finishUrl: string
  ipAddress: string
  testMode: string
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

export default async function donateHandler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const url = "https://rest-api.pay.nl/v8/transaction/start/json"

  const headers = {
    "Content-Type": "application/json",
  }

  console.log(req)
  console.log(' req.localAddress',  req.socket?.localAddress)
  console.log(' req.readyState',  req.socket?.readyState)
  console.log(' req.remoteAddress',  req.socket?.remoteAddress)

  const dtoMapper = (input: DonateRequestProps): PaymentBodyObject => {
    return {
      token: process.env.PAY_API_TOKEN,
      serviceId: process.env.PAY_SERVICE_ID,
      amount: input.otherAmount ? input.otherAmount * 100 : input.amount * 100,
      finishUrl: "https://steunmissietumoronbekend.nl/bedankt-voor-uw-donatie/",
      ipAddress: req.socket?.remoteAddress || req.socket?.localAddress || "127.0.0.1",
      testMode: process.env.PAY_TEST_MODE,
      transaction: {
        currency: "EUR",
        description: "Donatie Stichting Tumor Onbekend",
      },
      enduser: {
        initials: formatNameToInititals(input.firstName),
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
      if(!res.ok) {
        throw new Error(`HTTP RESPONSE ERROR: ${res.statusText}}`)
      }
      return res.json()
    })
    res.status(200).json(result)
  } catch (error) {
    console.error(`HTTP ERROR: ${error.message}}`)
    res.status(500).send(error)
  }
}
