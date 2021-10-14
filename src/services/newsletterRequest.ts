import {
  NewsletterRequestPropsModel,
  NewsletterRequestResultModel,
} from "./newsletterRequestModel"
import createErrorResult from "./shared/createErrorResult"

export default async function newsletterRequest(
  data: NewsletterRequestPropsModel
): Promise<NewsletterRequestResultModel> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: data }),
  }

  try {
    const response = await fetch("/api/newsletter", requestOptions)

    return response.json()
  } catch (error) {
    console.error(error)
    return createErrorResult("Email niet verstuurd")
  }
}
