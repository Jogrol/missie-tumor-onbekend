import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import StatInfoCard from "./statInfoCard"
import ScrollIcon from "../assets/ScrollIcon.svg"

const StatsInformation = () => {
  return (
    <div className="container px-4 h-full">
      <div className="flex flex-col flex-no-wrap justify-between w-full h-3/4">
        <div className="flex-1 flex items-center">
          <h1 className="text-4xl sm:text-8xl pt-4">Samen moet het lukken</h1>
        </div>
        <div className="flex-grow w-full sm:mt-8 sm:w-2/3 flex items-center">
          <div className="flex flex-wrap justify-center sm:justify-start gap-6">
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
        <div className="flex-1 pt-4 pb-4 sm:pb-12 sm:pt-12 flex flex-col justify-end sm:justify-center items-center">
          <button
            onClick={() => scrollTo("#scroll-to-donate")}
            className="flex flex-row items-center uppercase px-4 py-3 rounded-lg border bg-yellow-500 hover:bg-yellow-300 hover:scale-150 focus:ring-2"
          >
            Doneer nu
            <ScrollIcon className="animate-bounce ml-4 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default StatsInformation
