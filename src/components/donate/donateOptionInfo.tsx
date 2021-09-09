import React from "react"
import DonateActionForm from "./donateActionForm"

const DonateOptionInfo = ({
  title,
  description,
  hasDonateActionForm = false,
  hasLinktoFormPage = false,
  hasEmailAdress = false,
}) => {
  return (
    <div className="w-full h-full p-6">
      <div className="bg-white h-full w-full p-4 rounded flex flex-col">
        <h4 className="mb-4">{title}</h4>
        <p className="flex-grow">{description}</p>
        <div className="w-full h-full">

          {hasDonateActionForm && <DonateActionForm />}
          {hasLinktoFormPage && (
            <a href="https://www.missietumoronbekend.nl/steun-onze-missie/">
              Missie Tumor Onbekend, perodieke donatie
            </a>
          )}
          {hasEmailAdress && <a href="mailto:warnyta@missietumoronbekend.nl?subject=Mail vanuit Steun Missie Tumor Onbekend">warnyta@missietumoronbekend.nl</a>}
        </div>
      </div>
    </div>
  )
}

export default DonateOptionInfo
