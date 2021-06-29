import React, { useState } from "react"
import DonateActionForm from "./donateActionForm"
import DonateOptionTab from "./donateOptionTab"

// REFACTOR

const DonateSection = info => {
  const infoArray = Object.values(info).filter(item => item.title)

  const [currentOption, setOption] = useState(infoArray[0])

  if (!infoArray.length) {
    return null
  }

  const handleClick = item => {
    setOption(item)
  }

  return (
    <>
      <div className="flex flex-wrap w-full bg-brown-100 rounded-lg shadow-md">
        <div className="w-full sm:w-1/3">
          <div className="p-4">
            {infoArray.map((item, index) => {
              return (
                <DonateOptionTab
                  key={index}
                  {...item}
                  onClickFn={() => handleClick(item)}
                />
              )
            })}
          </div>
        </div>
        <div className="w-full sm:w-2/3">
          <div className="w-full h-full">
            <DonateActionForm {...currentOption} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DonateSection
