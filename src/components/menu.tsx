import React from "react"
import { Link } from "gatsby"
import MenuIcon from "../assets/menuIcon.svg"

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
        <div className="dropdown dropdown-end">
          <button className="h-full flex justify-center items-center">
            <MenuIcon className="h-8 w-8 text-blue-600" />
          </button>
          <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box">
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
    </>
  )
}

export default Menu
