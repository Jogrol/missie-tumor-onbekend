import React from "react"
import { useFormContext } from "react-hook-form"

interface FormSelectPropsModel {
  readonly addStyle?: string
  readonly label: string
  readonly required?: boolean
  readonly registerName: string
  readonly options: readonly string[]
}

const FormSelect = ({
  addStyle,
  label,
  registerName,
  options,
  required = false,
}: FormSelectPropsModel): JSX.Element => {
  const { register } = useFormContext()

  return (
    <div className={`${addStyle ? addStyle : ""}`}>
      <label className="flex flex-row items-center">
        <span className="hidden">{label}</span>
        <select
          className="select mb-4 sm:mb-0 select-bordered select-primary select-lg w-full sm:w-96"
          {...register(registerName, {
            required: required,
          })}
        >
          {options.map((option: string) => {
            return <option key={option}>{option}</option>
          })}
        </select>
      </label>
    </div>
  )
}

export default FormSelect
