import React, { useState } from "react"

const DonateActionForm = ({ title, description }) => {
  const [response, setResponse] = useState(null)

  const onSubmit = () => {
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    }
    fetch("/api/handler", requestOptions)
      .then(response => response.json())
      .then(data => setResponse(data))
  }

  return (
    <div className="w-full h-full p-4">
      <div className="bg-white h-full w-full p-8 rounded flex flex-col">
        <h4 className="mb-4">{title}</h4>
        <p className="flex-grow">{description}</p>
        <div>
          <button onClick={() => onSubmit()}>Doneer hier</button>

        {response && <pre className="blocknwh" >{JSON.stringify(response)}</pre> }
        </div>

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
