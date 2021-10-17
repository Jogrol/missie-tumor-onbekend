import React from "react"
import CbfLogoIcon from "../assets/cbfErkendBlackIcon.svg"
import MtoLogoBlackIcon from "../assets/mtoLogoBlackIcon.svg"
import FacebookIcon from "../assets/facebookIcon.svg"
import TwitterIcon from "../assets/twitterIcon.svg"
import LinkedinIcon from "../assets/linkedinIcon.svg"
import InstagramIcon from "../assets/instagramIcon.svg"
import { Link } from "gatsby"

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-brown-100 text-base-content shadow-xl">
      <div className="px-4 lg:px-2 py-10 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y-2 divide-black sm:divide-y-0">
        <div className="col-span-1">
          <MtoLogoBlackIcon className="max-h-12 object-contain" />
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
        <div className="col-span-1 flex flex-col justify-start pt-6 sm:pt-0">
          <CbfLogoIcon className="h-16 w-16" />
          <p className="text-xs mb-0">
            Stichting Vrienden van Hederik is een CBF-erkend goed doel, en is
            ook een aangemerkt en erkent als een ANBI-instelling.
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
            href="https://www.missietumoronbekend.nl/patientenverhalen/carins-verhaal/"
            target="_blank"
          >
            Stichting Sterren
          </a>
          <p className="flex no-wrap items-start">
            <a
              className="link link-hover"
              href="https://www.missietumoronbekend.nl/patientenverhalen/hederiks-verhaal/"
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
          <Link className="link link-hover" to="/fondsenwerveringsbeleid/">
            Fondsenwerveringsbeleid
          </Link>
          <Link className="link link-hover" to="/privacy-cookie-verklaring/">
            Privacy verklaring
          </Link>
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
            <a
              href="https://www.instagram.com/missie_tumor_onbekend/"
              target="_blank"
            >
              <InstagramIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-brown-300 p-3 border border-t-2 border-white pb-12 sm:pb-20">
        <div className="flex flex-wrap justify-center gap-4">
          <p className="text-white text-sm m-0">
            Deze website is gemaakt door{" "}
            <a
              className="text-white text-sm underline"
              href="mailto:joeygrolleman@gmail.com?subject=Mail vanuit Steun Missie Tumor Onbekend"
            >
              Joey Grolleman
            </a>
          </p>
          <p className="text-white text-sm m-0">© 2021 Missie Tumor Onbekend</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
