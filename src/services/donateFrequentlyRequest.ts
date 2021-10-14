import {
  DonateFrequentlyRequestPropsModel,
  DonateFrequentlyRequestResultModel,
} from "./donateFrequentlyRequestModel"
import createErrorResult from "./shared/createErrorResult"

export default async function donateFrequentlyRequest(
  data: DonateFrequentlyRequestPropsModel
): Promise<DonateFrequentlyRequestResultModel> {
  console.log("check", data)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: data }),
  }

  try {
    const response = await fetch("/api/donateFrequently", requestOptions)

    return response.json()
  } catch (error) {
    console.error(error)
    return createErrorResult("Email niet verstuurd")
  }
}
