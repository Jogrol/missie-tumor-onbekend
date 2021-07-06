import React, { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  paymentPeriod: string
  amount: string
  otherAmount: string
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

const DonateActionForm = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()
  const [step, setStep] = useState(0)
  const [amountIsAnders, setAmountIsAnders] = useState(false)

  const formModel = {
    paymentPeriod: [
      {
        id: "eenmalig",
        value: "eenmalig",
        name: FormNameEnum.PaymentPeriod,
        label: "Eenmalig",
      },
      {
        id: "maandelijks",
        value: "maandelijks",
        name: FormNameEnum.PaymentPeriod,
        label: "Maandelijks",
      },
      {
        id: "kwartaal",
        value: "kwartaal",
        name: FormNameEnum.PaymentPeriod,
        label: "Per kwartaal",
      },
    ],
  }

  const onSubmit = data => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* <fieldset className="row-span-3 col-span-1 flex flex-col space-y-4 w-full">
        {formModel.paymentPeriod.map(({id, value, name, label}) => {
          return  <label htmlFor="eenmalig" className="border-2 border-gray-200 p-4 flex items-center rounded-md">
          <input
            id={id}
            type="radio"
            className="form-radio h-8 w-8"
            {...register(name)}
            value={value}
          ></input>
          <span className="ml-4 text-xl">{label}</span>
        </label>
        })}
        </fieldset>  */}

        {step === 0 && (
          <fieldset className="w-full flex flex-col sm:flex-row gap-6">
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value="10"
                {...register(FormNameEnum.Amount)}
              />
              <span className="ml-4 text-xl">10</span>
            </label>
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value="20"
                {...register(FormNameEnum.Amount)}
              ></input>
              <span className="ml-4 text-xl">20</span>
            </label>
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value="40"
                {...register(FormNameEnum.Amount)}
              ></input>
              <span className="ml-4 text-xl">40</span>
            </label>
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value="Anders"
                {...register(FormNameEnum.Amount)}
              ></input>
              {watch(FormNameEnum.Amount) === "Anders" ? (
                <input
                  className="ml-4 text-xl"
                  placeholder="Anders"
                  {...register(FormNameEnum.OtherAmount)}
                />
              ) : (
                <span className="ml-4 text-xl">Anders</span>
              )}
            </label>
            {watch("amount") === "Anders"
              ? watch("otherAmount")
              : watch("amount")}
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
            <label className="col-span-3 mt-4 flex items-center justify-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6"
                {...register(FormNameEnum.NewsLetter)}
              ></input>
              <span className="ml-4 w-full">
                Ja, ik wil de nieuwsbrief ontvangen
              </span>
            </label>
          </fieldset>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4 w-full items-center">
          <span>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="underline">
                Terug
              </button>
            )}
          </span>
          <span>
            {step === 1 ? (
              <input type="submit"></input>
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
