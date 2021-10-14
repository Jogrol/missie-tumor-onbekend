import React from "react"
import { useFormContext } from "react-hook-form"

interface FormCheckboxPropsModel {
  readonly addStyle?: string
  readonly label: string
  readonly required?: boolean
  readonly registerName: string
}

const FormCheckbox = ({
  addStyle,
  label,
  registerName,
  required = false,
}: FormCheckboxPropsModel): JSX.Element => {
  const { register } = useFormContext()

  return (
    <div className={`form-control ${addStyle ? addStyle : ""}`}>
      <label className="flex flex-row items-center px-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary  mr-2"
          {...register(registerName, {
            required: required,
          })}
        ></input>
        <span className="w-11/12">{label}</span>
      </label>
    </div>
  )
}

export default FormCheckbox
