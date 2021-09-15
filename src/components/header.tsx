import React from "react"
import Menu from "./menu"
import CbfLogoIcon from "../assets/cbfErkendColorIcon.svg"
import MtoLogoIcon from "../assets/mtoLogoIcon.svg"

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="fixed top-0 left-0 border-opacity-100 opacity-100 w-full h-18 shadow-xl rounded z-50 bg-white">
        <div className="container w-full sm:max-w-screen-xl px-4">
          <div className="flex py-2 w-full">
            <a className="flex items-center" href="https://www.missietumoronbekend.nl/">
              <MtoLogoIcon className="h-14 sm:h-20" />
            </a>
            <div className="order-3 sm:order-2 flex flex-1 items-center justify-end ">
              <Menu />
            </div>
            <div className="flex items-center order-2 sm:order-3">
              <CbfLogoIcon className="ml-4 h-8 w-8 sm:h-16 sm:w-16 my-auto" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
