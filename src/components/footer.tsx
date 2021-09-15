import React from "react"
import CbfLogoIcon from "../assets/cbfErkendBlackIcon.svg"
import MtoLogoBlckIcon from "../assets/mtoLogoBlackIcon.svg"
interface LinkItem {
  title: string
  url: string
  isExternal?: string
  hasLogo: boolean
}

const Footer = (): JSX.Element => {
  const linksArray = [
    {
      title: "NFK Patiëntenplatform Zeldzame Kankers ",
      url: "https://zeldzamekankers.nl/",
      isExternal: "_blank",
    },
    {
      title: "Stichting Sterren",
      url: "https://www.missietumoronbekend.nl/carins-verhaal",
      isExternal: "_blank",
    },
    {
      title: "Stichting Vrienden van Hederik",
      url: "https://www.missietumoronbekend.nl/hederiks-verhaal",
      isExternal: "_blank",
      hasLogo: true,
    },
  ] as LinkItem[]

  return (
    <footer className="bg-brown-100">
      <div className="container w-full sm:max-w-screen-xxl grid sm:grid-cols-3 py-3 divide-x-2 divide-white">
        <div className="col-span-1 p-6">
          <p className="text-lg font-extrabold">Informatie</p>
          <MtoLogoBlckIcon className="h-16" />
          <div className="ml-2">
            <p className="mb-1 text-xs">
              <span className="font-bold">KvK-nummer:</span>
              <span className="font-light"> 62004980</span>
            </p>
            <p className="text-xs mb-1">
              <span className="font-bold">RSIN-nummer:</span>
              <span className="font-light"> 854590353</span>
            </p>
            <a
              className="text-black"
              href="https://www.missietumoronbekend.nl/info/"
              target="_blank"
              rel="noreferrer"
            >
              Meer informatie
            </a>
          </div>
        </div>
        <div className="col-span-1 p-6">
          <p className="text-lg font-extrabold">Is een samenwerking van</p>
          <ul className="list-inside">
            {linksArray.map(
              ({ url, title, hasLogo }: LinkItem, index: number) => {
                return (
                  <li className="font-sm" key={index}>
                    {/* <div className=''> */}
                    <a
                      className="text-black"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {title}
                    </a>
               
            
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div className="col-span-1 p-6">
          <p className="text-lg font-extrabold">Volg ons op</p>
        </div>
      </div>
      <div className="flex p-2 items-center w-full justify-center border-t-2 border-white bg-brown-200 ">
        <p className="text-white pt-4"> © 2021 Missie Tumor Onbekend</p>
      </div>
    </footer>
  )
}

export default Footer
