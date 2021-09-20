import React from "react"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import Seo from "./seo"

interface LayoutPropsModel {
  title: string
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children, title }: LayoutPropsModel) => {
  return (
    <>
      <Seo title={title} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
