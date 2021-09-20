import React from "react"
import Menu from "./menu"
import CbfLogoIcon from "../assets/cbfErkendColorIcon.svg"
import MtoLogoIcon from "../assets/mtoLogoIcon.svg"
import InfoIcon from "../assets/infoIcon.svg"
import CloseIcon from "../assets/closeIcon.svg"

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="fixed top-0 left-0 border-opacity-100 opacity-100 w-full h-18 shadow-xl border-b-2 border-brown-200 z-50 bg-white">
        <div className="container w-full sm:max-w-screen-xl px-2">
          <div className="flex py-2 w-full">
            <a
              className="flex items-center mr-2"
              href="https://www.missietumoronbekend.nl/"
            >
              <MtoLogoIcon className="h-14 lg:h-20" />
            </a>

            <div className="flex flex-1 items-center flex-wrap order-3 md:order-2">
              <Menu />
            </div>

            <div className="border border-2 rounded-lg md:p-2 flex items-center order-1 md:order-3 indicator sm:ml-4">
              <label
                htmlFor="info-modal"
                className="modal-button md:hidden indicator-item indicator-top indicator-end"
              >
                <InfoIcon className="h-3 w-3" />
              </label>
              <input type="checkbox" id="info-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box flex flex-col">
                  <label className="flex justify-end" htmlFor="info-modal">
                    <CloseIcon className="h-6 w-6" />
                  </label>
                  <div className="flex mt-4">
                    <InfoIcon className="h-6 w-6 mr-4" />
                    <p>
                      Stichting Vrienden van Hederik is een CBF-erkend goed
                      doel.
                    </p>
                  </div>
                </div>
              </div>
              <CbfLogoIcon className="h-12 w-12" />
              <p className="hidden md:block mb-0 text-xs text-gray-400 font-thin">
                Stichting Vrienden <br /> van Hederik <br /> is een CBF-erkend <br />
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
