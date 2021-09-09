import React from "react"
import { ProgressDataModel } from "../models/projectProgressData.model"

const ProgressBar = ({
  progressie,
  target,
}: ProgressDataModel): JSX.Element => {
  const progressPercentage = `${Math.round((progressie / target) * 100)}%`

  return (
    <div className="overflow-hidden h-8 mb-4 text-xs flex bg-green-200 pl-4">
      <div
        style={{ width: progressPercentage }}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
      >
        <div className="text-xl font-bold">{progressPercentage}</div>
      </div>
    </div>
  )
}

export default ProgressBar
