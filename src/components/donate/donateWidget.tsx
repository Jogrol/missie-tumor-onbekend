import React, { useEffect, useState } from "react"

export interface DonateWidgetPropsModel {
  donateOptions: DonateOption[]
}

export interface DonateOption {
  title: string
  description: string
  hasDonateActionForm?: boolean
  isActive: boolean
}

const DonateWidget = ({
  donateOptions,
}: DonateWidgetPropsModel): JSX.Element => {
  const [options, setOptions] = useState<DonateOption[]>([])

  function setActive(activeIndex: number) {
    const activateOptions = options.map(
      (option: DonateOption, index: number) => {
        return { ...option, isActive: index === activeIndex ? true : false }
      }
    )

    setOptions(activateOptions)
  }

  useEffect(() => {
    setOptions(donateOptions)
  }, [donateOptions])

  return (
    <div className="w-full">
      <div className="tabs tabs-boxed sm:flex sm:justify-center">
        {options.map((i: DonateOption, index: number) => {
          return (
            <button
              key={index}
              className={`tab tab-lg w-full sm:w-auto h-full ${
                i.isActive ? "tab-active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              {i.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DonateWidget
