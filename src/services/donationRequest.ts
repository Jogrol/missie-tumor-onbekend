import { DonationRequestResultModel, DonationRequestProps, DonationApiRequestResultModel } from "./donationRequestModel"
import createErrorResult from "./shared/createErrorResult"




export default async function donationRequest(
  data: DonationRequestProps
): Promise<DonationRequestResultModel> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: data }),
  }

  try {
    const response = await fetch("/api/donate", requestOptions)

    const data: DonationApiRequestResultModel = await response.json()

    if (!data.transaction) {
      return createErrorResult("No redirectUrl found")
    }

    return {
      success: true,
      info: { redirectUrl: data.transaction.paymentURL },
    }
  } catch (error) {
    console.error(error)
    return createErrorResult(error)
  }
}