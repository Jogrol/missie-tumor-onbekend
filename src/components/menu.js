import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="hidden sm:flex justify-end flex-1 items-center gap-4">
      <Link className="btn btn-outline btn-sm" to="/">
        Steun ons
      </Link>
      <div className="dropdown dropdown-end">
        <div tabindex="0" class="btn btn-ghost rounded-btn">
          Projecten
        </div>
        <ul
          tabindex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box"
        >
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
  )
}

export default Menu
