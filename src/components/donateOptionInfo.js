import React, { useState } from "react"
import DonateActionForm from './donateActionForm'
// import DonateActionForm from './donateActionForm.tsx'

const DonateOptionInfo = ({ title, description }) => {
  const [response, setResponse] = useState(null)
  const [data, setData] = useState({});


  const onSubmit = () => {
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    }
    fetch("/api/donate", requestOptions)
      .then(response => response.json())
      .then(data => setResponse(data))
  }

  return (
    <div className="w-full h-full p-2">
      <div className="bg-white h-full w-full p-4 rounded flex flex-col">
        <h4 className="mb-4">{title}</h4>
        <p className="flex-grow">{description}</p>
        <div className="w-full h-full">
          <DonateActionForm />


          
          {/* <DonateActionForm /> */}
          {/* <button onClick={() => onSubmit()}>Doneer hier</button> */}

        {/* {response && <pre className="block" >{JSON.stringify(response)}</pre> } */}
        </div>

        
      </div>
    </div>
  )
}

export default DonateOptionInfo
