import React, { useState } from "react"
import { useForm } from "react-hook-form"


export type DonateActionFormValues = {
  paymentPeriod: string
  amount: number 
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
  const otherAmountValue = watch(FormNameEnum.OtherAmount)

  const onSubmit = (data: DonateActionFormValues) => {
    if (data.amount === "Anders" && data.otherAmount) {
      data.amount = data.otherAmount
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: data }),
    }
    fetch("/api/donate", requestOptions)
      .then(response => response.json())
      .then(data => window.location.replace(data.transaction.paymentURL))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <fieldset className="w-full flex flex-col sm:flex-row gap-6">
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value={10}
                {...register(FormNameEnum.Amount)}
              />
              <span className="ml-4 text-xl">€ 10,-</span>
            </label>
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value={20}
                {...register(FormNameEnum.Amount)}
              ></input>
              <span className="ml-4 text-xl">€ 20,-</span>
            </label>
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value={50}
                {...register(FormNameEnum.Amount)}
              ></input>
              <span className="ml-4 text-xl">€ 50,-</span>
            </label>
            <label className="flex-initial flex items-center">
              <input
                type="radio"
                className="form-radio h-6 w-6"
                name="amount"
                value={100}
                {...register(FormNameEnum.Amount)}
              ></input>
              <span className="ml-4 text-xl">€ 100,-</span>
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
                <span className="ml-4 text-xl">
                  €
                  <input
                    type="number"
                    className="w-20 pl-2 "
                    placeholder="xxxx"
                    {...register(FormNameEnum.OtherAmount)}
                  />
                  ,-
                </span>
              ) : (
                  <span className="ml-4 text-xl">
                    { otherAmountValue ? `€ ${otherAmountValue}` : '€ ....,-'}
                </span>
              )}
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
