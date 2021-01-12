import React from "react"
import Layout from "./layout"
import content from "../content.json"

const DonateAmountCard = () => {
  console.log(content)
  return (
    <ul>
      {content.donation.options.map(({ amount, description }) => {
        return (
          <li>
            <span>€ {amount},-</span>
            <span>{description}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default DonateAmountCard
