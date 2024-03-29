import {
  DonateRequestResultModel,
  DonateRequestProps,
  DonateApiRequestResultModel,
} from "./donateRequestModel"
import createErrorResult from "./shared/createErrorResult"

export default async function donateRequest(
  data: DonateRequestProps
): Promise<DonateRequestResultModel> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: data }),
  }

  try {
    const response = await fetch("/api/donate", requestOptions)

    const data: DonateApiRequestResultModel = await response.json()

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
