import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"
import donationRequest from "../../services/donationRequest"
import {
  DonationRequestFormNameEnum,
  DonationRequestProps,
} from "../../services/donationRequestModel"
import newsletterRequest, {
  NewsletterRequestProps,
} from "../../services/newsletterRequest"
import { DonateOption } from "./donateActionFormModel"

const donateOptionList = [
  {
    value: 10,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 20,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 50,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 100,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 150,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 200,
    id: DonationRequestFormNameEnum.Amount,
  },
  {
    value: 0,
    label: "Anders",
    id: DonationRequestFormNameEnum.Amount,
  },
] as DonateOption[]

function DonateActionForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DonationRequestProps>({
    mode: "onBlur",
    defaultValues: { [DonationRequestFormNameEnum.Amount]: 10 },
  })
  const [step, setStep] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<string>(null)

  async function onSubmit(data: DonationRequestProps): Promise<void> {
    if (data.newsLetter) {
      const newsletterProps: NewsletterRequestProps = {
        firstName: data.firstName,
        insertion: data.insertion,
        lastName: data.lastName,
        email: data.email,
        newsletter: data.newsLetter,
      }

      const newsletterResponse = await newsletterRequest(newsletterProps)

      if (!newsletterResponse.success) {
        console.error(newsletterResponse.errorMessage)
      }
    }

    const reponseData = await donationRequest(data)

    if (!reponseData.success) {
      setErrorMessage("Er is een fout opgetreden. Probeer het opnieuw")
    }

    window.location.replace(reponseData.info.redirectUrl)
  }

  return (
    <div>
      {errorMessage && (
        <p className="font-black text-red-300">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <fieldset className="w-full flex flex-col flex-wrap  sm:flex-row gap-6">
            {donateOptionList.map((i: DonateOption) => {
              return (
                <label key={i.value} className="flex-initial flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-6 w-6"
                    name={i.value}
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
              {watch(DonationRequestFormNameEnum.Amount) === "0" && (
                <span className="ml-4 text-xl">
                  €
                  <input
                    type="number"
                    className="w-20 pl-2 "
                    placeholder="xxx"
                    {...register(DonationRequestFormNameEnum.OtherAmount)}
                  />
                  ,-
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
                {...register(DonationRequestFormNameEnum.FirstName, {
                  required: true,
                })}
              ></input>
            </label>
            <label className="border-2 col-span-1">
              <span className="hidden">tussenvoegsel</span>
              <input
                type="text"
                className="p-4 block w-full h-full"
                placeholder="tussenvoegsel"
                {...register(DonationRequestFormNameEnum.Insertion)}
              ></input>
            </label>
            <label className="border-2 col-span-3">
              <span className="hidden">Achternaam</span>
              <input
                type="text"
                className="p-4 block w-full h-full"
                placeholder="Achternaam"
                {...register(DonationRequestFormNameEnum.LastName, {
                  required: true,
                })}
              ></input>
            </label>
            <label className="border-2 col-span-3">
              <span className="hidden">Email</span>
              <input
                type="email"
                className="p-4 block w-full h-full"
                placeholder="Email"
                {...register(DonationRequestFormNameEnum.Email, {
                  required: true,
                })}
              ></input>
            </label>
            <label className="flex-initial flex items-center justify-center col-span-3 pt-4">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 mr-2"
                {...register(DonationRequestFormNameEnum.NewsLetter)}
              ></input>
              Ja, ik schrijf mij in voor de nieuwsbrief
            </label>
          </fieldset>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4 w-full items-center">
          <span>
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="link link-primary ml-2"
              >
                Terug
              </button>
            )}
          </span>
          <span>
            {step === 1 ? (
              <input
                className="btn btn-primary"
                type="submit"
              ></input>
            ) : (
              <button
                onClick={() => setStep(step + 1)}
                className="btn btn-primary"
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
