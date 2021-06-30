import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { ProductType } from "./pay/src/datatypes/transaction-start"
import * as Paynl from "./pay/src/index"

Paynl.Config

// Paynl.Config.setTokenCode('AT-0067-6941');
Paynl.Config.setApiToken("10c0122f9fc4bae64ad209a357d2dbb5ed70c964")
Paynl.Config.setServiceId("SL-6238-2891")
// Paynl.Config.setServiceId('SL-0123-4567');

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  Paynl.Transaction.start({
    testMode: true,
    //the amount in euro
    amount: 1.0,
    currency: "EUR",
    ipAddress: "10.20.30.40",
    description: "Order 1234",
    invoiceDate: new Date(),
    enduser: {
      initials: "AM",
      lastName: "Pieters",
      emailAddress: "my@email.com",
    },

    //we redirect the user back to this url after the payment
    returnUrl: "/bedankt",

    //the ip address of the user
  }).subscribe(
    function (result) {
      //redirect the user to this url to complete the payment
      console.log(result.paymentURL)

      // the transactionId, use this to fetch the transaction later
      console.log(result.transactionId)
      res.send(JSON.stringify(result))
    },
    function (error) {
      console.error(error)
    }
  )
}
