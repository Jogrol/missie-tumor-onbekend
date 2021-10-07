import React from "react"
import { ProgressDataModel } from "../models/projectProgressData.model"

const ProgressBar = ({
  progressie,
  target,
}: ProgressDataModel): JSX.Element => {
  const progressPercentage = `${Math.round((progressie / target) * 100)}%`

  return (
    <div className="overflow-hidden h-8 text-xs flex bg-brown-100">
      <div
        style={{ width: progressPercentage }}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brown-200"
      >
        <div className="text-xl pl-4 font-bold">{progressPercentage}</div>
      </div>
    </div>
  )
}

export default ProgressBar
