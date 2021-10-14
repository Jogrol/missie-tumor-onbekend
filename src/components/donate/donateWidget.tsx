import React, { useEffect, useState } from "react"
import { DonateOption, DonationTypeEnum } from "./donateWidgetConfig"
import DonateWidgetTabs from "./donateWidgetTabs"
import DonateActionForm from "./donateActionForm"
import DonateWidgetForm from "./donateWidgetForm"
export interface DonateWidgetPropsModel {
  donateOptions: DonateOption[]
}

const DonateWidget = ({
  donateOptions,
}: DonateWidgetPropsModel): JSX.Element => {
  const [options, setOptions] = useState<DonateOption[]>(donateOptions)
  const [currentOption, setCurrentOption] = useState<DonateOption>(
    donateOptions.filter(option => option.isActive)[0]
  )

  function setActive(activeIndex: number): void {
    const activateOptions = options.map(
      (option: DonateOption, index: number) => {
        return { ...option, isActive: index === activeIndex ? true : false }
      }
    )
    setOptions(activateOptions)
  }

  function setActiveOption(): void {
    const activeOption = options.filter(option => option.isActive)[0]

    setCurrentOption(activeOption)
  }

  function renderDonationType(type: DonationTypeEnum) {
    const renderDonationType = {
      [DonationTypeEnum.Form]: <DonateWidgetForm />,
      default: "hhello",
    }

    return renderDonationType[type] ?? renderDonationType.default
  }

  useEffect(() => {
    setActiveOption()
  }, [options, currentOption])

  return (
    <div className="container min-h-96 border-4 rounded-xl shadow-md sm:px-4 pt-6 pb-6">
      <DonateWidgetTabs tabs={options} handleClick={setActive} />
      <div className="px-4">
        <h3 key={currentOption.title} className="text-black">{currentOption.title}</h3>
        <p>{currentOption.description}</p>
      </div>
      <div className="w-full p-4">
        {renderDonationType(currentOption.donationType)}
      </div>
    </div>
  )
}

export default DonateWidget
