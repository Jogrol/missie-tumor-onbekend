import React from "react"
import NetherlandsIcon from "../assets/netherlandsIcon.svg"
import HandshakeIcon from "../assets/handshakeIcon.svg"
import CrowdIcon from "../assets/crowdIcon.svg"
import DonateIcon from "../assets/donateIcon.svg"

const FactSection = () => {
  return (
    <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div className="flex">
        <NetherlandsIcon className="h-16" />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">12.000</span>
          <p className="text-brown-200">lorem ipsus</p>
        </div>
      </div>
      <div className="flex">
        <HandshakeIcon className="h-16 w-16 fill-current text-white" />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">300</span>
          <p className="text-brown-200">lorem ipsus ipsum</p>
        </div>
      </div>
      <div className="flex">
        <CrowdIcon className="h-16 fill-current text-white" />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">53%</span>
          <p className="text-brown-200">lorem ipsus</p>
        </div>
      </div>
      <div className="flex">
        <DonateIcon className="h-16 fill-current text-white" />
        <div className="pl-4">
          <span className="text-6xl text-brown-200 font-black">€1500</span>
          <p className="text-brown-200">lorem ipsus</p>
        </div>
      </div>
    </div>
  )
}

export default FactSection
