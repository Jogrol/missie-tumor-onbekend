import React from "react"
import { useFormContext } from "react-hook-form"
import { formatNumberToEuro } from "../../helpers/formatNumberToEuro"

interface RadioOptionModel {
  readonly label: string
  value: number
}

interface FormRadioPropsModel {
  readonly addStyle?: string
  readonly required?: boolean
  readonly registerName: string
  readonly options: RadioOptionModel[]
}

const FormRadio = ({
  addStyle,
  registerName,
  required = false,
  options,
}: FormRadioPropsModel): JSX.Element => {
  const { register } = useFormContext()

  return (
    <>
      {options.map((i: RadioOptionModel) => {
        return (
          <div
            key={i.value}
            className={`form-control ${addStyle ? addStyle : ""}`}
          >
            <label className="cursor-pointer label">
              <input
                type="radio"
                className="radio radio-primary radio-lg"
                name={i.label}
                value={i.value}
                {...register(registerName, {
                  required: required,
                })}
              />
              <span className="label-text text-xl ml-4">{i.label}</span>
            </label>
          </div>
        )
      })}
    </>
  )
}

export default FormRadio
