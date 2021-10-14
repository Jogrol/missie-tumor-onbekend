import React from "react"
import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"

interface DonateWidgetSummaryPropsModel {
  totalAmount: number
  term?: string
}

const DonateWidgetSummary = ({
  totalAmount,
  term,
}: DonateWidgetSummaryPropsModel): JSX.Element => {
  return (
    <div className="w-full">
      <div className="text-xl bg-yellow-100 p-4 rounded-lg flex flex-col items-center justify-center">
        <span>Bedrag:</span>
        <span className="ml-2 text-4xl font-black">
          {formatNumberToEuro(totalAmount)}
        </span>
        {term ? (
          <span className="text-center font-black mt-2">{term}</span>
        ) : null}
      </div>
    </div>
  )
}

export default DonateWidgetSummary
