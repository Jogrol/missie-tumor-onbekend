import React from "react"

const ProgressBar = ({ progressBarProps }): JSX.Element => {
  const progressPercentage = `${progressBarProps}%`

  return (
    <div className="flex h-8 overflow-hidden text-xs shadow-lg bg-brown-100 rounded-b-md">
      <div
        style={{ width: progressPercentage }}
        className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-brown-200"
      >
        <div className="pl-4 text-xl font-bold">{progressPercentage}</div>
      </div>
    </div>
  )
}

export default ProgressBar
