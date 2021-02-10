import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import StatInfoCard from "./statInfoCard"
import ScrollIcon from "../assets/ScrollIcon.svg"

const StatsInformation = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
  )
}

export default StatsInformation
