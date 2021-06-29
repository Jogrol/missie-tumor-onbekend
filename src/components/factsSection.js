import React from "react"
import NetherlandsIcon from "../assets/netherlandsIcon.svg"
import HandshakeIcon from "../assets/handshakeIcon.svg"
import CrowdIcon from "../assets/crowdIcon.svg"
import DonateIcon from "../assets/donateIcon.svg"

const FactSection = () => {
  return (
    <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div className="flex">
        <NetherlandsIcon  className="h-20 w-20 fill-current text-white"  />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">ca 30</span>
          <p className="text-brown-200">Nederlanders krijgen per week een PTO</p>
        </div>
      </div>
      <div className="flex">
        <HandshakeIcon className="h-20 w-20 fill-current text-white" />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">&gt;50%</span>
          <p className="text-brown-200">overlijdt binnen 2 maanden na het 1e bezoek aan het ziekenhuis</p>
        </div>
      </div>
      <div className="flex">
        <CrowdIcon c className="h-20 w-20 fill-current text-white" />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">17%</span>
          <p className="text-brown-200">van hen overleeft langer dan 1 jaar na eerste poli bezoek</p>
        </div>
      </div>
      <div className="flex">
        <DonateIcon  className="h-20 w-20 fill-current text-white"  />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">2/3</span>
          <p className="text-brown-200">van PTO-patiënten wordt niet behandeld</p>
        </div>
      </div>
    </div>
  )
}

export default FactSection
