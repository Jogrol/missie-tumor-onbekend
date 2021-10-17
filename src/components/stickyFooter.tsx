import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

interface StickyFooterPropsModel {
  readonly inView: boolean
}

const StickyFooter = ({ inView }: StickyFooterPropsModel): JSX.Element => {
  return inView ? null : (
    <div className="fixed bottom-0 left-0 w-full z-30 flex justify-center gap-1 sm:gap-8 bg-gray-200 py-1 px-4">
      <button
        className="btn btn-sm sm:btn-lg btn-primary sm:w-96"
        onClick={() => scrollTo("#scroll-to-donate")}
      >
        Doneer nu
      </button>
      <a
        className="btn btn-sm sm:btn-lg btn-secondary sm:w-96"
        href="https://nl.research.net/r/PTO_2021"
        target="_blank"
      >
        <span className="sm:hidden">Deel jouw verhaal</span>
        <span className="hidden sm:block"> Deel nu jouw verhaal met PTO</span>
      
      </a>
    </div>
  )
}

export default StickyFooter
