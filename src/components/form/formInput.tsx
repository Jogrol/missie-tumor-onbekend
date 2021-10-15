import React from "react"
import { useFormContext } from "react-hook-form"

interface FormInputPropsModel {
  readonly type: string
  readonly addStyle?: string
  readonly label: string
  readonly placeholder: string
  readonly required?: boolean
  readonly registerName: string
}

const FormInput = ({
  type,
  addStyle,
  label,
  placeholder,
  registerName,
  required = false,
}: FormInputPropsModel): JSX.Element => {
  const { register } = useFormContext()

  return (
    <div className={`form-control ${addStyle ? addStyle : ""}`}>
      <label className="label">
        <span className="hidden">{label}</span>
        <input
          type={type}
          className="input input-primary input-lg input-bordered w-full"
          placeholder={placeholder}
          {...register(registerName, {
            required: required,
          })}
        ></input>
      </label>
    </div>
  )
}

export default FormInput
