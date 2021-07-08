import React from "react"
import NetherlandsIcon from "../assets/netherlandsIcon.svg"
import HospitalIcon from "../assets/hospitalIcon.svg"
import HeartIcon from "../assets/heartIcon.svg"
import TreatmentIcon from "../assets/treatmentIcon.svg"

const FactSection = () => {
  return (
    <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center">
      <div className="flex justify-center">
        <NetherlandsIcon  className="h-24 w-24 fill-current text-white"  />
        <div className="pl-4">
          <span className="text-5xl text-brown-200 font-black">ca 30</span>
          <p className="text-brown-200">Nederlanders krijgen per week een PTO</p>
        </div>
      </div>
      <div className="flex justify-center">
        <HospitalIcon className="h-24 w-24 fill-current text-white" />
       
        <div className="pl-4 flex flex-col">
          <span className="text-5xl text-brown-200 font-black">&gt;50%</span>
          <p className="text-brown-200">overlijdt binnen 2 maanden na het 1e bezoek aan het ziekenhuis</p>
        </div>
        </div>
    
      <div className="flex justify-center">
        <HeartIcon c className="h-24 w-24 fill-current text-white" />
        <div className="pl-4">
          <span className="text-5xl text-brown-200 font-black">17%</span>
          <p className="text-brown-200">van hen overleeft langer dan 1 jaar na eerste poli bezoek</p>
        </div>
      </div>
      <div className="flex justify-center">
        <TreatmentIcon  className="h-24 w-24 fill-current text-white"  />
        <div className="pl-4">
          <span className="text-5xl text-brown-200 font-black">2/3</span>
          <p className="text-brown-200">van PTO-patiënten wordt niet behandeld</p>
        </div>
      </div>
    </div>
  )
}

export default FactSection
