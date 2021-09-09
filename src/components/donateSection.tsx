import React, { useState } from "react"
import { Link } from "@reach/router"
import DonateOptionInfo from "./donate/donateOptionInfo"
import DonateOptionTab from "./donate/donateOptionTab"

const DonateSection = info => {
  const infoArray = Object.values(info).filter(item => item.title)

  const [currentOption, setOption] = useState(infoArray[0])

  if (!infoArray.length) {
    return null
  }

  const handleClick = item => {
    setOption(item)
  }

  return (
    <div>
      <p className="container sm:max-w-screen-md mb-4">
        Informeer u <Link to="fondsenwerveringsbeleid/">hier</Link> over ons
        beleid ten aanzien van het werven van fondsen, donateurs en sponsoring.
      </p>
      <div className="flex flex-wrap w-full bg-brown-100 rounded-lg shadow-md h-200">
        <div className="w-full sm:w-1/3">
          <div className="p-4">
            {infoArray.map((item, index) => {
              return (
                <DonateOptionTab
                  key={index}
                  {...item}
                  onClickFn={() => handleClick(item)}
                />
              )
            })}
          </div>
        </div>
        <div className="w-full sm:w-2/3">
          <div className="w-full h-full">
            <DonateOptionInfo {...currentOption} />
          </div>
        </div>
      </div>
      <p className="container sm:max-w-screen-md mt-8 italic text-sm text-center">
        *Missie Tumor Onbekend is het samenwerkingsverband tussen Stichting
        Sterren en Stichting Vrienden van Hederik. Stichting Vrienden van
        Hederik werft namens de samenwerkende stichtingen binnen Missie Tumor
        Onbekend fondsen bij particulieren, bedrijven en instanties. U zult
        daarom op uw bankafschrift Stichting Vrienden van Hederik zien als
        vertegenwoordiger van Missie Tumor Onbekend. De beide stichtingen zijn
        opgericht door nabestaanden van PTO-patiënten en werken samen om o.a.
        betere zorg, meer onderzoek en meer kennis en bewustwording over PTO te
        bewerkstelligen. Missie Tumor Onbekend is aangesloten bij het Platform
        Zeldzame Kankers van de NFK.
        <br />
        <a href="https://www.missietumoronbekend.nl/info/">
          Info | Missie Tumor Onbekend
        </a>
      </p>
    </div>
  )
}

export default DonateSection
