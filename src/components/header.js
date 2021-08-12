import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
            {/* //desktop */}
            <div class="flex justify-end flex-1 items-center gap-4">
              <Link className="btn btn-outline btn-sm" to="/">
                Steun ons
              </Link>
              <div class="dropdown dropdown-end">
                <div tabindex="0" class="btn btn-ghost rounded-btn">
                  Projecten
                </div>
                <ul
                  tabindex="0"
                  class="p-2 shadow menu dropdown-content bg-base-100 rounded-box"
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
