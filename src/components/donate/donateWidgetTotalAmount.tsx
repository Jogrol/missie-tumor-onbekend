import React from "react"
import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"
import { DonationRequestFormNameEnum } from "../../services/donationRequestModel"

interface DonateWidgetTotalAmountPropsModel {
  total: number
}

const DonateWidgetTotalAmount = ({
  total,
}: DonateWidgetTotalAmountPropsModel): JSX.Element => {
  return (
    <p className="text-xl bg-white rounded-lg p-4 flex flex-col items-center justify-center">
      Bedrag:
      <span className="ml-2 text-4xl font-black">
        {formatNumberToEuro(total)}
      </span>
    </p>
  )
}

export default DonateWidgetTotalAmount
