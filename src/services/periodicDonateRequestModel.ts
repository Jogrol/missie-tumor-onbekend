export interface PeriodicDonateRequestResultModel {
  success: boolean
  info?: unknown
  errorMessage?: string
}

export enum PeriodicOptionEnum {
  Monthly = "Maandelijks",
  PerQuarter = "Per kwartaal",
  Yearly = "Jaarlijks",
}

export interface PeriodicDonateRequestModel {
  firstName: string
  insertion: string
  lastName: string
  email: string
  newsletter: boolean
  amount: number
  periodic: PeriodicOptionEnum
  iban: number
}
