import React from "react"
import { Link } from "gatsby"
import MenuIcon from "../assets/menuIcon.svg"
import CloseIcon from "../assets/closeIcon.svg"

const Menu = (): JSX.Element => {
  return (
    <>
      <div className="hidden sm:flex flex-1 items-center gap-4 justify-end">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost rounded-btn">Projecten</button>
          <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box">
            <li>
              <Link to="/informatievoorziening-bewustwording">
                Informatievoorziening
              </Link>
            </li>
            <li>
              <Link to="/ondersteunen-van-wetenschappelijk-onderzoek">
                Wetenschappelijkonderzoek
              </Link>
            </li>
            <li>
              <Link to="/verbetering-inzet-zorg">Zorg</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline btn-sm" to="/">
          Steun ons
        </Link>
      </div>
      <div className="flex justify-end flex-1 sm:hidden">
        <div className="rounded-lg shadow bg-base-200 drawer drawer-end">
          <input id="menu" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col items-center justify-center drawer-content">
            <label htmlFor="menu" className="drawer-button">
              <MenuIcon className="h-6 w-6 text-blue-600" />
            </label>
          </div>
          <div className="drawer-side z-20">
            <label
              htmlFor="menu"
              className="drawer-overlay absolute top-0 left-0 w-screen h-screen"
            ></label>
            <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content absolute h-screen top-0 right-0">
              <li className="">
                <label
                  htmlFor="menu"
                  className="flex justify-end"
                >
                  <CloseIcon className="h-6 w-6 text-blue-600" />
                </label>
              </li>
              <li>
                <Link to="/">Steun ons</Link>
              </li>
              <li>
                <Link to="/informatievoorziening-bewustwording">
                  Informatievoorziening
                </Link>
              </li>
              <li>
                <Link to="/ondersteunen-van-wetenschappelijk-onderzoek">
                  Wetenschappelijkonderzoek
                </Link>
              </li>
              <li>
                <Link to="/verbetering-inzet-zorg">Zorg</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
