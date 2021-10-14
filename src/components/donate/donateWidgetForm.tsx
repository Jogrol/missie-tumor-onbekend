import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"
import donationRequest from "../../services/donationRequest"
import {
  DonationRequestFormNameEnum,
  DonationRequestProps,
} from "../../services/donationRequestModel"
import newsletterRequest from "../../services/newsletterRequest"
import { NewsletterRequestProps } from "../../services/newsletterRequestModel"
import DonateWidgetTotalAmount from "./donateWidgetTotalAmount"
import donateAmountList, { DonateAmountItem } from "./donateAmountList"
import {FormInput} from '../form/formInput'
import { useEffect } from "react"
import { TermEnum } from "../../services/donationTermRequestModel"

const DonateWidgetForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DonationRequestProps>({
    mode: "onBlur",
    defaultValues: { [DonationRequestFormNameEnum.Amount]: 10 },
  })
  const [step, setStep] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<string>(null)
  const watchAmount = watch(DonationRequestFormNameEnum.Amount)
  const watchTerm = watch(DonationRequestFormNameEnum.Term, TermEnum.Monthly)
  const [displayedAmount, setDisplayedAmount] = useState<number>(10)
  const watchOtherAmount = watch(DonationRequestFormNameEnum.OtherAmount)

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

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      console.log(value, name)
      if (name === DonationRequestFormNameEnum.OtherAmount) {
        setDisplayedAmount(Number(value.otherAmount))
      }

      if (name === DonationRequestFormNameEnum.Amount) {
        if (Number(value.amount) === 0) {
          setValue(DonationRequestFormNameEnum.OtherAmount, value.amount, {
            shouldValidate: true,
          })
          setDisplayedAmount(Number(watchOtherAmount))
        }
        setDisplayedAmount(Number(value.amount))
      }
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <div className="w-full h-full">
      {errorMessage && (
        <p className="font-black sm:text-center text-red-800">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <div className="grid grid-cols-4 sm:gap-8">
            <div className="col-span-4 sm:row-span-2 sm:col-span-1 pb-4 sm:pb-0">
              <DonateWidgetTotalAmount
                totalAmount={displayedAmount}
                term={watchTerm}
              />
            </div>
            <fieldset className="sm:col-start-2 col-span-4">
              <select
                className="select mb-4 sm:mb-0 select-bordered select-primary select-lg w-full sm:w-96"
                {...register(DonationRequestFormNameEnum.Term)}
              >
                <option>{TermEnum.Monthly}</option>
                <option>{TermEnum.PerQuarter}</option>
                <option>{TermEnum.Yearly}</option>
              </select>
            </fieldset>
            <fieldset className="flex flex-wrap items-center h-full sm:col-start-2 col-span-4 sm:col-span-3 gap-4">
              {donateAmountList.map((i: DonateAmountItem) => {
                return (
                  <div
                    className="form-control bg-white border border-brown-200 rounded-md px-4 w-full sm:w-auto"
                    key={i.value}
                  >
                    <label className="cursor-pointer label">
                      <input
                        type="radio"
                        className="radio radio-primary radio-lg"
                        name={i.value}
                        value={i.value}
                        {...register(i.id)}
                      />
                      <span className="label-text text-xl ml-4">
                        {i.label ? i.label : formatNumberToEuro(i.value)}
                      </span>
                    </label>
                  </div>
                )
              })}
              {Number(watchAmount) === 0 && (
                <div className="form-control w-full sm:w-auto">
                  <label className="label">
                    <input
                      type="number"
                      className="input w-full sm:w-auto input-primary inpunt-bordered"
                      placeholder="€ xxx"
                      defaultValue="10"
                      {...register(DonationRequestFormNameEnum.OtherAmount)}
                    />
                  </label>
                </div>
              )}
            </fieldset>
          </div>
        )}

        {step === 1 && (
          <div className="grid grid-cols-4 sm:gap-8">
            <div className="col-span-4 sm:col-span-1">
              <DonateWidgetTotalAmount
                totalAmount={displayedAmount}
                term={watchTerm}
              />
            </div>
            <fieldset className="flex justify-center col-span-4 sm:col-span-3">
              <div className="w-full grid grid-cols-4">
                {/* <FormInput type='text' addStyle="col-span-4"> */}
                <div className="form-control col-span-4">
                  <label className="label">
                    <span className="hidden">Naam</span>
                    <input
                      type="text"
                      className="input input-primary input-bordered w-full"
                      placeholder="Naam"
                      {...register(DonationRequestFormNameEnum.FirstName, {
                        required: true,
                      })}
                    ></input>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="hidden">tussenvoegsel</span>
                    <input
                      type="text"
                      className="input input-primary input-bordered w-full"
                      placeholder="tussenvoegsel"
                      {...register(DonationRequestFormNameEnum.Insertion)}
                    ></input>
                  </label>
                </div>
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="hidden">Achternaam</span>
                    <input
                      type="text"
                      className="input input-primary input-bordered w-full"
                      placeholder="Achternaam"
                      {...register(DonationRequestFormNameEnum.LastName, {
                        required: true,
                      })}
                    ></input>
                  </label>
                </div>
                <div className="form-control col-span-4">
                  <label className="label">
                    <span className="hidden">Email</span>
                    <input
                      type="email"
                      className="input input-primary input-bordered w-full"
                      placeholder="Email"
                      {...register(DonationRequestFormNameEnum.Email, {
                        required: true,
                      })}
                    ></input>
                  </label>
                </div>
                <div className="form-control col-span-4">
                  <label className="label">
                    <span className="hidden">IBAN</span>
                    <input
                      type="text"
                      className="input input-primary input-bordered w-full"
                      placeholder="IBAN"
                      {...register(DonationRequestFormNameEnum.Iban, {
                        required: true,
                      })}
                    ></input>
                  </label>
                </div>
                <div className="form-control pt-4 col-span-4">
                <label className="flex flex-row items-center px-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary  mr-2"
                      {...register(DonationRequestFormNameEnum.IbanApproval)}
                    ></input>
                    <span className="w-11/12">
                      Hiermee geef ik toestemming aan Missie Tumor Onbekend* om
                      een betaalverzoek te sturen naar het door u opgegeven
                      e-mailadres om de donatie uit te voeren.
                    </span>
                  </label>
                </div>
                <div className="form-control pt-4 col-span-4">
                  <label className="flex items-center px-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary  mr-2"
                      {...register(DonationRequestFormNameEnum.NewsLetter)}
                    ></input>
                    <span className="w-11/12">Ja, ik schrijf mij in voor de nieuwsbrief</span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
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
          <span className="w-full flex justify-end">
            {step === 1 ? (
              <input
                className="btn btn-primary w-full sm:w-auto"
                type="submit"
              ></input>
            ) : (
              <button
                disabled={displayedAmount ? false : true}
                onClick={() => setStep(step + 1)}
                className="btn btn-primary w-full sm:w-auto"
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

export default DonateWidgetForm
