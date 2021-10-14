export interface PeriodicDonateRequestResultModel {
  success: boolean
  info?: unknown
  errorMessage?: string
}

export enum TermEnum {
  Monthly = "Maandelijks",
  PerQuarter = "Per kwartaal",
  Yearly = "Jaarlijks",
}

export interface DonateTermRequestModel {
  firstName: string
  insertion: string
  lastName: string
  email: string
  newsletter: boolean
  amount: number
  term: TermEnum
  iban: number
}
