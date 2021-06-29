import React from "react"

const DonateActionForm = ({ title, description }) => {
  return (
    <div className="w-full h-full p-4">
      <div className="bg-white h-full w-full p-8 rounded flex flex-col">
        <h4 className="mb-4">{title}</h4>
        <p className="flex-grow">{description}</p>
        <span className="flex justify-center sm:justify-end">
          <button className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-yellow-500 hover:bg-brown-100 hover:text-brown-200 hover:no-underline">
            Ga verder
          </button>
        </span>
      </div>
    </div>
  )
}

export default DonateActionForm
