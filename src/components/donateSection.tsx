import { Link } from "gatsby"
import React, { useState } from "react"
// import { Link } from "@reach/router"
// import DonateOptionInfo from "./donate/donateOptionInfo"
// import DonateOptionTab from "./donate/donateOptionTab"
import DonateWidget from "./donate/donateWidget"
import donateWidgetConfig from "./donate/donateWidgetConfig"

const DonateSection = info => {
  return (
    <div>
      <p className="container sm:max-w-screen-md mb-4">
        Informeer u <Link to="/fondsenwervingsbeleid/">hier</Link> over ons
        beleid ten aanzien van het werven van fondsen, donateurs en sponsoring.
      </p>
      <DonateWidget donateOptions={donateWidgetConfig} />
      <p className="container sm:max-w-screen-md mt-8 text-sm">
        *Missie Tumor Onbekend is opgericht als een samenwerking tussen de
        voormalige Stichting Sterren, Stichting Vrienden van Hederik en de
        Nederlandse Federatie van Kankerpatiënten organisaties (NFK). Stichting
        Vrienden van Hederik werft binnen Missie Tumor Onbekend fondsen bij
        particulieren, bedrijven en instanties. U zult daarom op uw
        bankafschrift Stichting Vrienden van Hederik zien als vertegenwoordiger
        van Missie Tumor Onbekend. De beide stichtingen zijn opgericht door
        nabestaanden van PTO-patiënten en werken samen om o.a. betere zorg, meer
        onderzoek en meer kennis en bewustwording over PTO te bewerkstelligen.
        Lees meer:{" "}
        <a href="https://www.missietumoronbekend.nl/overons/">
          Over ons - Missie Tumor Onbekend
        </a>
      </p>
    </div>
  )
}

export default DonateSection
