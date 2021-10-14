import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"
import { DonateRequestFormNameEnum } from "../../services/donateRequestModel"

export interface DonateAmountItem {
  value: number
  label: string
}

const donateAmountList = [
  {
    value: 10,
    label: formatNumberToEuro(10),
  },
  {
    value: 20,
    label: formatNumberToEuro(20),
  },
  {
    value: 50,
    label: formatNumberToEuro(50),
  },
  {
    value: 100,
    label: formatNumberToEuro(100),
  },
  {
    value: 150,
    label: formatNumberToEuro(150),
  },
  {
    value: 200,
    label: formatNumberToEuro(200),
  },
  {
    value: 0,
    label: "Anders",
  },
] as DonateAmountItem[]

export default donateAmountList
