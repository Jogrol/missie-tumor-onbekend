import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import donateRequest from "../../services/donateRequest"
import {
  DonateRequestFormNameEnum,
  DonateRequestProps,
} from "../../services/donateRequestModel"
import newsletterRequest from "../../services/newsletterRequest"
import { NewsletterRequestPropsModel } from "../../services/newsletterRequestModel"
import DonateWidgetSummary from "./donateWidgetSummary"
import FormInput from "../form/formInput"
import { useEffect } from "react"
import FormCheckbox from "../form/formCheckbox"
import FormRadio from "../form/formRadio"
import donateAmountList from "./donateAmountList"
import Loader from "../loader"

const DonateOnceWidgetForm = (): JSX.Element => {
  const formMethods = useForm<DonateRequestProps>({
    mode: "onBlur",
    defaultValues: { [DonateRequestFormNameEnum.Amount]: 10 },
  })

  const [step, setStep] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<string>(null)
  const watchAmount = formMethods.watch(DonateRequestFormNameEnum.Amount)
  const [displayedAmount, setDisplayedAmount] = useState<number>(10)
  const [isLoading, setIsloading] = useState<boolean>(false)
  const watchOtherAmount = formMethods.watch(
    DonateRequestFormNameEnum.OtherAmount
  )

  async function onSubmit(data: DonateRequestProps): Promise<void> {
    setErrorMessage(false)
    setIsloading(true)
    if (data.newsletter) {
      const newsletterProps: NewsletterRequestPropsModel = {
        firstName: data.firstName,
        insertion: data.insertion,
        lastName: data.lastName,
        email: data.email,
        newsletter: data.newsletter,
      }

      const newsletterResponse = await newsletterRequest(newsletterProps)

      if (!newsletterResponse.success) {
        console.error(newsletterResponse.errorMessage)
      }
    }

    const reponseData = await donateRequest(data)

    setIsloading(false)
    if (!reponseData.success) {
      setErrorMessage("Er is een fout opgetreden. Probeer het opnieuw")
    }
    window.location.replace(reponseData.info.redirectUrl)
  }

  useEffect(() => {
    const subscription = formMethods.watch((value, { name }) => {
      if (name === DonateRequestFormNameEnum.OtherAmount) {
        setDisplayedAmount(Number(value.otherAmount))
      }

      if (name === DonateRequestFormNameEnum.Amount) {
        if (Number(value.amount) === 0) {
          formMethods.setValue(
            DonateRequestFormNameEnum.OtherAmount,
            value.amount,
            {
              shouldValidate: true,
            }
          )
          setDisplayedAmount(Number(watchOtherAmount))
        }
        setDisplayedAmount(Number(value.amount))
      }
    })

    return () => subscription.unsubscribe()
  }, [formMethods.watch])

  return (
    <div className="relative w-full h-full">
      <Loader isLoading={isLoading} />
      <FormProvider {...formMethods}>
        {errorMessage && (
          <p className="font-black sm:text-center text-red-800">
            {errorMessage}
          </p>
        )}
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          {step === 0 && (
            <div className="grid grid-cols-4 sm:gap-8">
              <div className="col-span-4 sm:row-span-2 sm:col-span-1 pb-4 sm:pb-0">
                <DonateWidgetSummary totalAmount={displayedAmount} />
              </div>
              <fieldset className="flex flex-wrap items-center h-full sm:col-start-2 col-span-4 sm:col-span-3 gap-4">
                <FormRadio
                  addStyle="bg-white border border-brown-200 rounded-md px-4 w-full sm:w-auto"
                  registerName={DonateRequestFormNameEnum.Amount}
                  options={donateAmountList}
                />
                {Number(watchAmount) === 0 && (
                  <FormInput
                    type="number"
                    addStyle="w-full sm:w-auto"
                    label="Ander bedrag"
                    placeholder="€ xxx"
                    registerName={DonateRequestFormNameEnum.OtherAmount}
                  />
                )}
              </fieldset>
            </div>
          )}

          {step === 1 && (
            <div className="grid grid-cols-4 sm:gap-8">
              <div className="col-span-4 sm:col-span-1">
                <DonateWidgetSummary totalAmount={displayedAmount} />
              </div>
              <fieldset className="flex justify-center col-span-4 sm:col-span-3">
                <div className="w-full grid grid-cols-4">
                  <FormInput
                    type="text"
                    addStyle="col-span-4"
                    label="Naam"
                    placeholder="Naam"
                    registerName={DonateRequestFormNameEnum.FirstName}
                    required={true}
                  />
                  <FormInput
                    type="text"
                    label="Tussenvoegsel"
                    placeholder="Tussenvoegsel"
                    registerName={DonateRequestFormNameEnum.Insertion}
                  />
                  <FormInput
                    type="text"
                    label="Achternaam"
                    addStyle="col-span-3"
                    placeholder="Achternaam"
                    registerName={DonateRequestFormNameEnum.LastName}
                    required={true}
                  />
                  <FormInput
                    type="text"
                    label="Email"
                    addStyle="col-span-4"
                    placeholder="Email"
                    registerName={DonateRequestFormNameEnum.Email}
                    required={true}
                  />
                  <FormCheckbox
                    addStyle="pt-4 col-span-4"
                    label="Ja, ik schrijf mij in voor de nieuwsbrief."
                    registerName={DonateRequestFormNameEnum.NewsLetter}
                  />
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
      </FormProvider>
    </div>
  )
}

export default DonateOnceWidgetForm
