import { DonationRequestFormNameEnum } from "../../services/donationRequestModels";

export interface DonateOption {
  id: DonationRequestFormNameEnum
  value: number
  label?: string
}
