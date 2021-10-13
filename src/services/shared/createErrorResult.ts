import { DonationRequestResultModel } from "../donationRequestModel"

export default function createErrorResult(
  error: string
): DonationRequestResultModel {
  return {
    success: false,
    errorMessage: error,
  }
}
