import fetch from "node-fetch"

export default async function donate(req, res) {
  // POST data to an authenticated API
  const url = "https://rest-api.pay.nl/v8/transaction/start/json"

  const headers = {
    "Content-Type": "application/json",
  }

  const data = {
    amount: 100,
    finishUrl: "https://missietumoronbekendv2.gatsbyjs.io/",
    ipAddress: "10.20.30.40",
    testMode: 1,
    transaction: { currency: "EUR", description: "Order 1234" },
    statsData: { object: "nodejssdk" },
    enduser: {
      initials: "AM",
      lastName: "Pieters",
      emailAddress: "my@email.com",
    },
    saleData: { invoiceDate: "02-07-2021" },
    token: "10c0122f9fc4bae64ad209a357d2dbb5ed70c964",
    serviceId: "SL-6238-2891",
  }

  try {
    const result = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }).then(res => {
      return res.json()
    })

    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
