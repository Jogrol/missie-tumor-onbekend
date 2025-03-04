import React from "react"
import NetherlandsIcon from "../assets/netherlandsIcon.svg"
import HospitalIcon from "../assets/hospitalIcon.svg"
import HeartIcon from "../assets/heartIcon.svg"
import TreatmentIcon from "../assets/treatmentIcon.svg"

interface StatsItemModel {
  readonly icon: JSX.Element
  readonly stat: string
  readonly description: string
}

const iconStyle = "h-16 w-16 text-blue-600"

const statsItems = [
  {
    icon: <NetherlandsIcon className={iconStyle} />,
    stat: "ca 30",
    description: "Nederlanders krijgen per week een PTO",
  },
  {
    icon: <HospitalIcon className={iconStyle} />,
    stat: "50%",
    description:
      "overlijdt binnen 2 maanden na het 1e bezoek aan het ziekenhuis",
  },
  {
    icon: <HeartIcon className={iconStyle} />,
    stat: "17%",
    description:
      "overleeft slechts langer dan 1 jaar na eerste ziekenhuis bezoek",
  },
  {
    icon: <TreatmentIcon className={iconStyle} />,
    stat: "67%",
    description: "van PTO-patiënten wordt niet behandeld",
  },
] as StatsItemModel[]

const Stats = (): JSX.Element => {
  return (
    <div className="w-full shadow-xl rounded-xl px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-4  bg-white gap-4">
      {statsItems.map((item: StatsItemModel, index: number) => {
        return (
          <div key={index} className="flex flex-row items-center">
            <div className="flex"> {item.icon}</div>
            <div className="pl-4">
              <span className="text-5xl text-brown-200 font-blue-600">
                {item.stat}
              </span>
              <p className="text-blue-600">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stats
