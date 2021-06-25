import React from "react"
import { useForm } from "react-hook-form"
// REFACTOR

const DonateActionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)

  console.log(watch("example"))

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-3 grid-rows-3 gap-12 w-full"
    >
      <fieldset className="row-span-3 col-span-1 flex flex-col space-y-4 w-full">
        <label class="border-2 border-gray-200 p-4 flex items-center rounded-md">
          <input
            type="radio"
            class="form-radio h-8 w-8"
            name="period"
            value="3"
          ></input>
          <span class="ml-4 text-xl">Eenmalig</span>
        </label>
        <label class="border-2 border-gray-200 p-4 flex items-center rounded-md">
          <input
            type="radio"
            class="form-radio h-8 w-8"
            name="period"
            value="3"
          ></input>
          <span class="ml-4 text-xl">Maandelijks</span>
        </label>
        <label class="border-2 border-gray-200 p-4 flex items-center rounded-md">
          <input
            type="radio"
            class="form-radio h-8 w-8"
            name="period"
            value="3"
          ></input>
          <span class="ml-4 text-xl">Per kwartaal</span>
        </label>
      </fieldset>

      <fieldset className="row-span-1 col-span-2 col-start-2 w-full flex flex-row">
        <label class="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            class="form-radio h-8 w-8"
            name="amount"
            value=""
          ></input>
          <span class="ml-4 text-xl">10</span>
        </label>
        <label class="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            class="form-radio h-8 w-8"
            name="amount"
            value="20"
          ></input>
          <span class="ml-4 text-xl">20</span>
        </label>
        <label class="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            class="form-radio h-8 w-8"
            name="amount"
            value="40"
          ></input>
          <span class="ml-4 text-xl">40</span>
        </label>
        <label class="border-2 border-gray-200 p-4 w-1/4 flex items-center">
          <input
            type="radio"
            class="form-radio h-8 w-8"
            name="amount"
            value="Anders"
          ></input>
          <span class="ml-4 text-xl">Anders</span>
        </label>
      </fieldset>

      <fieldset className="row-span-1 col-span-2 col-start-2 flex flex-row gap-4">
        <label class="w-2/5">
          <span class="text-gray-700">Naam</span>
          <input
            type="email"
            class="form-input mt-1 block w-full h-full"
            placeholder="Naam"
          ></input>
        </label>
        <label class="w-1/5">
          <span class="text-gray-700">tussenvoegsel</span>
          <input
            type="email"
            class="form-input mt-1 block w-full h-full"
            placeholder="tussenvoegsel"
          ></input>
        </label>
        <label class="w-2/5">
          <span class="text-gray-700">Achternaam</span>
          <input
            type="email"
            class="form-input mt-1 block w-full h-full"
            placeholder="Achternaam"
          ></input>
        </label>
      </fieldset>
      <fieldset className="row-span-1 col-span-2 col-start-2 flex flex-row">
        <label class="w-full">
          <span class="text-gray-700">Email adres</span>
          <input
            type="email"
            class="form-input mt-1 block w-full h-full"
            placeholder="email adres"
          ></input>
        </label>
      </fieldset>

      <fieldset className="row-span-1 col-span-2 col-start-2 flex flex-row">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-8 w-8"></input>
          <span class="ml-2">Ja, ik wil de nieuwsbrief ontvangen</span>
        </label>
      </fieldset>
    </form>
  )
}

export default DonateActionForm
