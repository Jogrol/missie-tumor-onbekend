import React from "react"
import StickyFooter from "./stickyFooter"

interface stickyFooterWrapperPropsModel {
  children: JSX.Element | JSX.Element[]
  inView: boolean
}

const StickyFooterWrapper = ({
  children,
  inView,
}: stickyFooterWrapperPropsModel) => {

  return (
    <>
      {children}
      <StickyFooter inView={inView} />
    </>
  )
}

export default StickyFooterWrapper
