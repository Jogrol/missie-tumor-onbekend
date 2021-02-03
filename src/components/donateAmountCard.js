import React from "react"
import content from "../content.json"

const DonateAmountCard = () => {
  return (
    <ul className="w-full">
      {content.donation.options.map(({ amount, description }) => {
        return (
          <li className="my-8">
            <div className="flex flex-wrap items-center">
              <span className="border-2 rounded-full h-36 w-36 text-4xl flex items-center justify-center shadow-2xl z-10 bg-yellow-400">
                € {amount},-
              </span>
              <span className="-ml-4 border-2 rounded-xl shadow-sm p-4 bg-yellow-100">
                {description}
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default DonateAmountCard
