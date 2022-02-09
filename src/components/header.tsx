import React from "react"
import Menu from "./menu"
import MtoLogoIcon from "../assets/mtoLogoIcon.svg"
import InfoIcon from "../assets/infoIcon.svg"
import CloseIcon from "../assets/closeIcon.svg"
import CbfLogoZw from "../images/CBF_LOGO_ZW.png"

const CbfLogoZwAlt = "CBF Logo ZW"

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="fixed top-0 left-0 z-50 w-full bg-white border-b-2 border-opacity-100 shadow-xl opacity-100 h-18 border-brown-200">
        <div className="container w-full px-2 sm:max-w-screen-xl">
          <div className="flex w-full py-2">
            <a
              className="flex items-center mr-2"
              href="https://www.missietumoronbekend.nl/"
            >
              <MtoLogoIcon className="h-14 lg:h-20" />
            </a>

            <div className="flex flex-wrap items-center flex-1 order-3 md:order-2">
              <Menu />
            </div>

            <div className="flex items-center order-1 ml-2 border border-2 rounded-lg md:p-2 md:order-3 indicator sm:ml-4">
              <label
                htmlFor="info-modal"
                className="modal-button md:hidden indicator-item indicator-top indicator-end"
              >
                <InfoIcon className="w-3 h-3" />
              </label>
              <input type="checkbox" id="info-modal" className="modal-toggle" />
              <div className="modal">
                <div className="flex flex-col modal-box">
                  <label className="flex justify-end" htmlFor="info-modal">
                    <CloseIcon className="w-6 h-6" />
                  </label>
                  <div className="flex items-center">
                    <img
                      src={CbfLogoZw}
                      alt={CbfLogoZwAlt}
                      className="object-cover h-20"
                    />
                    <p>
                      Stichting Vrienden van Hederik is een CBF-erkend goed
                      doel, en is ook een aangemerkt en erkent als een
                      ANBI-instelling.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={CbfLogoZw}
                alt={CbfLogoZwAlt}
                className="object-cover h-12"
              />
              <p className="hidden mb-0 text-xs font-thin text-gray-400 md:block">
                Stichting Vrienden <br /> van Hederik <br /> is een CBF-erkend
                <br />
                goed doel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
