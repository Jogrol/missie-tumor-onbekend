import React from "react"
import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"
import { DonationRequestFormNameEnum } from "../../services/donationRequestModel"

interface DonateWidgetTotalAmountPropsModel {
  totalAmount: number
  term: string
}

const DonateWidgetTotalAmount = ({
  totalAmount,
  term,
}: DonateWidgetTotalAmountPropsModel): JSX.Element => {
  return (
    <div className="w-full">
      <p className="text-xl bg-white rounded-lg flex flex-col items-center justify-center">
        Bedrag:
        <span className="ml-2 text-4xl font-black">
          {formatNumberToEuro(totalAmount)}
        </span>
      </p>
      <p className="text-center font-black">{term}</p>
    </div>
  )
}

export default DonateWidgetTotalAmount
