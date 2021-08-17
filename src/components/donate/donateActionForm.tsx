import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"

export type DonateActionFormValues = {
  paymentPeriod: string
  amount: number
  otherAmount: number
  firstName: string
  insertion: string
  lastName: string
  email: string
  newsLetter: boolean
}

enum FormNameEnum {
  PaymentPeriod = "paymentPeriod",
  Amount = "amount",
  OtherAmount = "otherAmount",
  FirstName = "firstName",
  Insertion = "insertion",
  LastName = "lastName",
  Email = "email",
  NewsLetter = "newsLetter",
}

const DonateActionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DonateActionFormValues>({
    mode: "onBlur",
    defaultValues: {
      amount: 10,
    },
  })
  const [step, setStep] = useState(0)
  const [errorMessage, setErrorMessage] = useState(null)

  const onSubmit = (data: DonateActionFormValues) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: data }),
    }
    fetch("/api/donate", requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.transaction.paymentURL) {
          return window.location.replace(data.transaction.paymentURL)
        }
        setErrorMessage("Er is een fout opgetreden. Probeer het opnieuw")
      })
      .catch(() =>
        setErrorMessage("Er is een fout opgetreden. Probeer het opnieuw")
      )
  }

  const donateOptions = [
    {
      value: 10,
      id: FormNameEnum.Amount,
    },
    {
      value: 20,
      id: FormNameEnum.Amount,
    },
    {
      value: 50,
      id: FormNameEnum.Amount,
    },
    {
      value: 100,
      id: FormNameEnum.Amount,
    },
    {
      value: 150,
      id: FormNameEnum.Amount,
    },
    {
      value: 200,
      id: FormNameEnum.Amount,
    },
    {
      value: 0,
      label: 'Anders',
      id: FormNameEnum.Amount,
    },
  ]

  return (
    <div>
      {errorMessage && (
        <p className="font-black text-red-300">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <fieldset className="w-full flex flex-col flex-wrap  sm:flex-row gap-6">
            {donateOptions.map(i => {
              return (
                <label key={i.value} className="flex-initial flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-6 w-6"
                    name={i.id}
                    value={i.value}
                    {...register(i.id)}
                  />
                  <span className="ml-4 text-xl">
                    {i.label ? i.label : formatNumberToEuro(i.value)}
                  </span>
                </label>
                
              )
            })}
            <label className="flex-initial flex items-center">
              {watch(FormNameEnum.Amount) === "0" &&
                <span className="ml-4 text-xl">
                  €
                  <input
                    type="number"
                    className="w-20 pl-2 "
                    placeholder="xxx"
                    {...register(FormNameEnum.OtherAmount)}
                  />
                  ,-
                </span>
              }
            </label>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="grid grid-cols-3 gap-2">
            <label className="border-2 col-span-2">
              <span className="hidden">Naam</span>
              <input
                type="text"
                className="p-4 block w-full h-full"
                placeholder="Naam"
                {...register(FormNameEnum.FirstName, { required: true })}
              ></input>
            </label>
            <label className="border-2 col-span-1">
              <span className="hidden">tussenvoegsel</span>
              <input
                type="text"
                className="p-4 block w-full h-full"
                placeholder="tussenvoegsel"
                {...register(FormNameEnum.Insertion)}
              ></input>
            </label>
            <label className="border-2 col-span-3">
              <span className="hidden">Achternaam</span>
              <input
                type="text"
                className="p-4 block w-full h-full"
                placeholder="Achternaam"
                {...register(FormNameEnum.LastName, { required: true })}
              ></input>
            </label>
            <label className="border-2 col-span-3">
              <span className="hidden">Email</span>
              <input
                type="email"
                className="p-4 block w-full h-full"
                placeholder="Email"
                {...register(FormNameEnum.Email, { required: true })}
              ></input>
            </label>
          </fieldset>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4 w-full items-center">
          <span>
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="ml-2 underline"
              >
                Terug
              </button>
            )}
          </span>
          <span>
            {step === 1 ? (
              <input
                className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-yellow-500 hover:bg-brown-100 hover:text-brown-200 hover:no-underline"
                type="submit"
              ></input>
            ) : (
              <button
                onClick={() => setStep(step + 1)}
                className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-yellow-500 hover:bg-brown-100 hover:text-brown-200 hover:no-underline"
              >
                Ga verder
              </button>
            )}
          </span>
        </div>
      </form>
    </div>
  )
}

export default DonateActionForm
