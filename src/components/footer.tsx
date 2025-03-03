import React from "react"
import CbfLogoIcon from "../assets/cbfErkendBlackIcon.svg"
import MtoLogoBlackIcon from "../assets/mtoLogoBlackIcon.svg"
import FacebookIcon from "../assets/facebookIcon.svg"
import TwitterIcon from "../assets/twitterIcon.svg"
import LinkedinIcon from "../assets/linkedinIcon.svg"
import InstagramIcon from "../assets/instagramIcon.svg"
import CbfLogoZw from "../images/CBF_LOGO_ZW.png"
import { Link } from "gatsby"
const CbfLogoZwAlt = "CBF Logo ZW"

const Footer = (): JSX.Element => {
  return (
    <footer className="shadow-xl bg-brown-100 text-base-content">
      <div className="container grid grid-cols-1 gap-6 px-4 py-10 divide-y-2 divide-black lg:px-2 sm:grid-cols-2 lg:grid-cols-5 sm:divide-y-0">
        <div className="col-span-1">
          <MtoLogoBlackIcon className="object-contain max-h-12" />
          <p className="mb-0 text-xs font-bold">
            Stichting Vrienden van Hederik
          </p>
          <p className="mb-0">
            <span className="text-xs font-bold">KvK-nummer:</span>
            <span className="text-xs font-light"> 78057272</span>
          </p>
          <p className="mb-1 text-xs">
            <span className="text-xs font-bold">RSIN-nummer:</span>
            <span className="text-xs font-light"> 861248892</span>
          </p>
        </div>
        <div className="pt-6 sm:pt-0">
          <img src={CbfLogoZw} alt={CbfLogoZwAlt} className="h-14" />
          <p className="mb-0 text-xs">
            Stichting Vrienden van Hederik is een CBF-erkend goed doel, en is
            ook een aangemerkt en erkent als een ANBI-instelling.
          </p>
        </div>
        <div className="flex flex-col col-span-1 pt-6 sm:pt-0">
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
          <p className="flex items-start no-wrap">
            <a
              className="link link-hover"
              href="https://www.missietumoronbekend.nl/patientenverhalen/hederiks-verhaal/"
              target="_blank"
            >
              Stichting Vrienden van Hederik
            </a>
          </p>
        </div>

        <div className="flex flex-col col-span-1 pt-6 sm:pt-0">
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
          <Link className="link link-hover" to="/fondsenwervingsbeleid/">
          Fondsenwervingsbeleid
          </Link>
          <Link className="link link-hover" to="/privacy-cookie-verklaring/">
            Privacy verklaring
          </Link>
        </div>
        <div className="flex flex-col col-span-1 pt-6 sm:pt-0">
          <span className="footer-title">Volg ons</span>
          <div className="flex gap-6">
            <a href="https://twitter.com/tumoronbekend?lang=nl" target="_blank">
              <TwitterIcon className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/missie-tumor-onbekend/"
              target="_blank"
            >
              <LinkedinIcon className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/Missie-Tumor-Onbekend-102703861368466/"
              target="_blank"
            >
              <FacebookIcon className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/missie_tumor_onbekend/"
              target="_blank"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-3 border border-t-2 border-white bg-brown-300">
        <div className="flex flex-wrap justify-center gap-4">
          <p className="m-0 text-sm text-white">
            Deze website is gemaakt door{" "}
            <a
              className="text-sm text-white underline"
              href="mailto:joeygrolleman@gmail.com?subject=Mail vanuit Steun Missie Tumor Onbekend"
            >
              Joey Grolleman
            </a>
          </p>
          <p className="m-0 text-sm text-white">© 2021 Missie Tumor Onbekend</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
