import React from "react"
import CbfLogoIcon from "../assets/cbfErkendBlackIcon.svg"
import MtoLogoBlckIcon from "../assets/mtoLogoBlackIcon.svg"
import FacebookIcon from "../assets/facebookIcon.svg"
import TwitterIcon from "../assets/twitterIcon.svg"
import LinkedinIcon from "../assets/linkedinIcon.svg"

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-brown-100 text-base-content shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 container gap-6 px-4 py-10 divide-y-2 divide-black sm:divide-y-0">
        <div className="col-span-1">
          <MtoLogoBlckIcon className="h-16" />
          <p className="mb-0 text-xs font-bold">
            Stichting Vrienden van Hederik
          </p>
          <p className="mb-0">
            <span className="font-bold text-xs">KvK-nummer:</span>
            <span className="font-light text-xs"> 78057272</span>
          </p>
          <p className="text-xs mb-1">
            <span className="font-bold text-xs">RSIN-nummer:</span>
            <span className="font-light text-xs"> 861248892</span>
          </p>
        </div>
        <div className="col-span-1 flex pt-6 sm:pt-0">
          <CbfLogoIcon className="h-20" />
          <p className="text-xs mt-6 mb-0">
            Stichting Vrienden van Hederik <br /> is een CBF-erkend goed doel.
          </p>
        </div>
        <div className="col-span-1 flex flex-col pt-6 sm:pt-0">
          <span className="footer-title">Een samenwerking van</span>
          <a
            className="link link-hover"
            href="https://zeldzamekankers.nl"
            target="_blank"
          >
            NFK Patiëntenplatform Zeldzame Kankers
          </a>
          <a
            className="link link-hover"
            href="https://www.missietumoronbekend.nl/carins-verhaal/"
            target="_blank"
          >
            Stichting Sterren
          </a>
          <p className="flex no-wrap items-start">
            <a
              className="link link-hover"
              href="https://www.missietumoronbekend.nl/hederiks-verhaal/"
              target="_blank"
            >
              Stichting Vrienden van Hederik
            </a>
          </p>
        </div>

        <div className="col-span-1 flex flex-col pt-6 sm:pt-0">
          <span className="footer-title">Informatie</span>
          <a
            className="link link-hover"
            href="https://www.missietumoronbekend.nl/info/"
            target="_blank"
          >
            Over ons
          </a>
          <a
            className="link link-hover"
            href="https://www.missietumoronbekend.nl/actueel/"
            target="_blank"
          >
            Actueel
          </a>
          <a className="link link-hover" href="/fondsenwerveringsbeleid/">
            Fondsenwerveringsbeleid
          </a>
        </div>
        <div className="col-span-1 flex flex-col pt-6 sm:pt-0">
          <span className="footer-title">Volg ons</span>
          <div className="flex gap-6">
            <a href="https://twitter.com/tumoronbekend?lang=nl" target="_blank">
              <TwitterIcon className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/missie-tumor-onbekend/"
              target="_blank"
            >
              <LinkedinIcon className="h-8 w-8" />
            </a>
            <a
              href="https://www.facebook.com/Missie-Tumor-Onbekend-102703861368466/"
              target="_blank"
            >
              <FacebookIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-brown-200 p-3 border border-t-2 border-white">
        <p className="text-white m-0">© 2020 Missie Tumor Onbekend</p>
      </div>
    </footer>
  )
}

export default Footer
