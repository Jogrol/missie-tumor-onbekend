import React from "react"
import Menu from './menu'

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 border-opacity-100 opacity-100 w-full h-18 shadow-xl rounded z-50 bg-white">
        <div className="container w-full sm:max-w-screen-xl px-4">
          <div className="flex py-2 w-full">
            <a
              className="h-16 w-1/2 sm:w-1/4 flex justify-center items-center"
              href="https://www.missietumoronbekend.nl/"
            >
              <img
                src="https://www.missietumoronbekend.nl/wordpress/gatsby/wp-content/uploads/2021/06/mto_logo-1.png"
                alt="logo"
              ></img>
            </a>
            <Menu />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
