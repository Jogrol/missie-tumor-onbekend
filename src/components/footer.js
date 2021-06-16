import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const linksArray = [
    {
      title: "Stichting Sterren",
      url: "/de-onzichtbare-vijand",
    },
    {
      title: "Stichting Vrienden van Hederik",
      url: "/hederiks-verhaal",
    },
    {
      title: "NFK",
      url: "https://zeldzamekankers.nl/",
      isExternal: "_blank",
    },
  ]
  return (
    <>
      <div className="p-2 text-white text-bold">
        © 2021 Missie Tumor Onbekend
      </div>
      <ul className="flex flex-col sm:flex-row p-2 justify-center list-none text-white sm:divide-x-2">
        {linksArray.map(({ url, title, isExternal }, index) => {
          return (
            <li className="text-xs sm:px-4 sm:py-2" key={index}>
              {!isExternal ? (
                <Link className="text-white text-xs" to={url}>
                  {title}
                </Link>
              ) : (
                <a className="text-white text-xs" href={url} target="_blank">
                  {title}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Footer
