import React from "react"
import { Link } from "gatsby"

const ListOfLinks = () => {
  const linksArray = [
    {
      title: "Stichting Sterren",
      url: "https://www.missietumoronbekend.nl/carins-verhaal/",
    },
    {
      title: "Stichting Vrienden van Hederik",
      url: "https://www.missietumoronbekend.nl/hederiks-verhaal/",
    },
    {
      title: "NFK",
      url: "https://zeldzamekankers.nl/",
      isExternal: "_blank",
    },
  ]

  return (
    <div className="w-full">
      <ul className="flex flex-col sm:flex-row justify-center divide-y-2 divide-white divide-solid sm:divide-y-0 sm:divide-x-2">
        {linksArray.map(({ url, title, isExternal }, index) => {
          return (
            <li className="w-full" key={index}>
              {!isExternal ? (
                <Link
                  className="text-center text-xl px-6 py-2 sm:py-4 block w-full"
                  to={url}
                >
                  {title}
                </Link>
              ) : (
                <a
                  className="px-6 text-xl py-2 sm:py-4 block text-center w-full"
                  href={url}
                  target="_blank"
                >
                  {title}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListOfLinks
