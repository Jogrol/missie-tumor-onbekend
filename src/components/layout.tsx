import React from "react"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

interface LayoutPropsModel {
  children: JSX.Element[]
}

const Layout = ({ children }: LayoutPropsModel) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
