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
      <p className="text-xl bg-white rounded-lg flex flex-col items-center justify-center">
        Bedrag:
        <span className="ml-2 text-4xl font-black">
          {formatNumberToEuro(totalAmount)}
        </span>
      </p>
      {term ? <p className="text-center font-black">{term}</p> : null}
    </div>
  )
}

export default DonateWidgetSummary
