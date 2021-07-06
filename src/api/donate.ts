import fetch from "node-fetch"
import { DonateActionFormValues } from "../components/donateActionForm"
import { getDateByDdMmYyyy } from "../helpers/getDateByDdMmYyyy"
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
  saleData: { invoiceDate: string }
}

export default async function donateHandler(req, res) {

  console.log(req.connection.remoteAddress)
  
  const url = "https://rest-api.pay.nl/v8/transaction/start/json"

  const headers = {
    "Content-Type": "application/json",
  }

  const dtoMapper = (input: DonateActionFormValues): PaymentBodyObject => {
    return {
      token: "10c0122f9fc4bae64ad209a357d2dbb5ed70c964",
      serviceId: "SL-6238-2891",
      amount: parseInt(input.amount, 10)*100,
      finishUrl: "https://missietumoronbekendv2.gatsbyjs.io/",
      ipAddress: req.connection.remoteAddress,
      testMode: TestModeEnnum.True,
      transaction: {
        currency: "EUR",
        description: "Donatie Stichting Tumor Onbekend",
      },
      enduser: {
        initials: getInitials(input.firstName),
        lastName: input.lastName,
        emailAddress: input.email,
      },
      saleData: { invoiceDate: getDateByDdMmYyyy() },
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
