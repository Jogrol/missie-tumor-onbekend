import React from "react"
import DonateButton from "../ui-kit/donateButton"
import StatInfoCard from "./statInfoCard"

const StatsInformation = () => {
  return (
    <div className="container sm:max-w-screen-lg px-4 h-full">
      <div className="flex flex-col flex-no-wrap justify-between  w-full h-full">
        <div className="flex-1 flex items-center">
          <h1 className="text-4xl sm:text-8xl pt-4">Samen moet het lukken</h1>
        </div>
        <div className="flex-grow w-full flex items-center">
          <div className="flex flex-wrap gap-6 ">
            <div className="w-24 h-24 sm:w-52 sm:h-52">
              <StatInfoCard />
            </div>
            <div className="w-24 h-24 sm:w-52 sm:h-52">
              <StatInfoCard />
            </div>
            <div className="w-24 h-24 sm:w-52 sm:h-52">
              <StatInfoCard />
            </div>
            <div className="w-24 h-24 sm:w-52 sm:h-52">
              <StatInfoCard />
            </div>
            <div className="w-24 h-24 sm:w-52 sm:h-52">
              <StatInfoCard />
            </div>
            <div className="w-24 h-24 sm:w-52 sm:h-52">
              <StatInfoCard />
            </div>
          </div>
        </div>
        <div className="flex-1 pb-2 flex flex-col justify-end sm:justify-center items-center">
          <DonateButton title="Doneer online" />
        </div>
      </div>
    </div>
  )
}

export default StatsInformation
