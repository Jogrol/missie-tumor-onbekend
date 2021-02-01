import React from "react"
import DonateButton from "../ui-kit/donateButton"
import StatInfoCard from "./statInfoCard"

const StatsInformation = () => {
  return (
    <div className="container max-w-screen-lg">
      <div className="text-center">
        <h1>Samen moet het lukken</h1>
        <p>Help mee en doneer nu</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <StatInfoCard />
        </div>
        <div>
          <StatInfoCard />
        </div>
        <div>
          <StatInfoCard />
        </div>
        <div>
          <StatInfoCard />
        </div>
        <div>
          <StatInfoCard />
        </div>
        <div>
          <StatInfoCard />
        </div>
      </div>
      <div className="flex w-full justify-center mt-12">
        <DonateButton title="Doneer online" />
      </div>
    </div>
  )
}

export default StatsInformation
