import React from "react"
import CbfLogoIcon from "../assets/cbfErkendBlackIcon.svg"
import MtoLogoBlckIcon from "../assets/mtoLogoBlackIcon.svg"
import FacebookIcon from "../assets/facebookIcon.svg"
import TwitterIcon from "../assets/twitterIcon.svg"
import LinkedinIcon from "../assets/linkedinIcon.svg"

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-brown-100 text-base-content shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 container gap-6 px-4 py-10 ">
        <div className="grid-cols-1 lg:col-span-2">
          <MtoLogoBlckIcon className="h-16" />
          <p className="mb-0 text-xs">
            <span className="font-bold">KvK-nummer:</span>
            <span className="font-light"> 62004980</span>
          </p>
          <p className="text-xs mb-1">
            <span className="font-bold">RSIN-nummer:</span>
            <span className="font-light"> 854590353</span>
          </p>
        </div>
        <div className="col-span-1 flex flex-col">
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
            <CbfLogoIcon className="h-14 mr-2" />
          </p>
        </div>
        <div className="col-span-1 flex flex-col">
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
        <div className="col-span-1 flex flex-col">
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
