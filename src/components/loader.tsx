import React from "react"

interface LoaderPropsModel {
  isLoading: boolean
}

const Loader = ({ isLoading }: LoaderPropsModel): JSX.Element => {
  return isLoading ? (
    <div className="absolute flex justify-center items-center w-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-green-500"></div>
    </div>
  ) : null
}

export default Loader
