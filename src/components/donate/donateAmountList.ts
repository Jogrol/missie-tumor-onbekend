import { DonationRequestFormNameEnum } from "../../services/donationRequestModel"

export interface DonateAmountItem {
  id: DonationRequestFormNameEnum
  value: number
  label?: string
}

const donateAmountList = [
  {
    value: 10,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 20,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 50,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 100,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 150,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 200,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 0,
    label: "Anders",
    id: DonationRequestFormNameEnum.Amount,
  },
] as DonateAmountItem[]

export default donateAmountList
