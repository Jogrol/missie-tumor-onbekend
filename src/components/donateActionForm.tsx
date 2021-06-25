import React from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  paymentPeriod: string,
  amount: string,
  firstName: string,
  insertion: string,
  lastName: string,
  email: string,
  newsLetters: boolean
}

enum FormNameEnum{
  PaymentPeriod = "paymentPeriod",
  Amount = "amount",
  FirstName = "firstName",
  Insertion = "insertion",
  LastName = "lastName",
  Email = "email",
  NewsLetters = "newsLetters" 
  
}

const DonateActionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>()

  const formModel = {
    paymentPeriod: [
      {
        id: 'eenmalig',
        value: 'eenmalig',
        name: FormNameEnum.PaymentPeriod,
        label: 'Eenmalig'
      }, {
        id: 'maandelijks',
        value: 'maandelijks',
        name: FormNameEnum.PaymentPeriod,
        label: 'Maandelijks'
      },{
        id: 'kwartaal',
        value: 'kwartaal',
        name: FormNameEnum.PaymentPeriod,
        label: 'Per kwartaal'
      }
    ]
  }
  

  const onSubmit = data => console.log(data)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-3 grid-rows-3 gap-12 w-full"
    >
      <fieldset className="row-span-3 col-span-1 flex flex-col space-y-4 w-full">
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
        </fieldset> 

      <fieldset className="row-span-1 col-span-2 col-start-2 w-full flex flex-row">
        <label className="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            className="form-radio h-8 w-8"
            name="amount"
            value=""
          ></input>
          <span className="ml-4 text-xl">10</span>
        </label>
        <label className="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            className="form-radio h-8 w-8"
            name="amount"
            value="20"
          ></input>
          <span className="ml-4 text-xl">20</span>
        </label>
        <label className="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            className="form-radio h-8 w-8"
            name="amount"
            value="40"
          ></input>
          <span className="ml-4 text-xl">40</span>
        </label>
        <label className="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            className="form-radio h-8 w-8"
            name="amount"
            value="Anders"
          ></input>
          <span className="ml-4 text-xl">Anders</span>
        </label>
      </fieldset>

      <fieldset className="row-span-1 col-span-2 col-start-2 flex flex-row gap-4">
        <label className="w-2/5">
          <span className="text-gray-700">Naam</span>
          <input
            type="email"
            className="form-input mt-1 block w-full h-full"
            placeholder="Naam"
          ></input>
        </label>
        <label className="w-1/5">
          <span className="text-gray-700">tussenvoegsel</span>
          <input
            type="email"
            className="form-input mt-1 block w-full h-full"
            placeholder="tussenvoegsel"
          ></input>
        </label>
        <label className="w-2/5">
          <span className="text-gray-700">Achternaam</span>
          <input
            type="email"
            className="form-input mt-1 block w-full h-full"
            placeholder="Achternaam"
          ></input>
        </label>
      </fieldset>

      <fieldset className="row-span-1 col-span-2 col-start-2 flex flex-row">
        <label className="w-full">
          <span className="text-gray-700">Email adres</span>
          <input
            type="email"
            className="form-input mt-1 block w-full h-full"
            placeholder="email adres"
          ></input>
        </label>
      </fieldset>

      <fieldset className="row-span-1 col-span-2 col-start-2 flex flex-row">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-8 w-8"></input>
          <span className="ml-2">Ja, ik wil de nieuwsbrief ontvangen</span>
        </label>
      </fieldset>

      <input type="submit"></input>
    </form>
  )
}

export default DonateActionForm
