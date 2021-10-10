import React from "react"
import { DonateOption } from "./donateWidget"

interface DonateWidgetTabsPropsModel {
  tabs: DonateOption[]
  handleClick: Function
}

const DonateWidgetTabs = ({
  tabs,
  handleClick,
}: DonateWidgetTabsPropsModel): JSX.Element => {
  return (
    <div className="tabs tabs-boxed sm:flex sm:justify-center w-full">
      {tabs.map((i: DonateOption, index: number) => {
        return (
          <button
            key={index}
            className={`tab tab-lg w-full sm:w-auto h-full ${
              i.isActive ? "tab-active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {i.title}
          </button>
        )
      })}
    </div>
  )
}

export default DonateWidgetTabs
