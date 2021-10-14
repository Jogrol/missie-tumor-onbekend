export interface DonateFrequentlyRequestModel {
  success: boolean
  info?: unknown
  errorMessage?: string
}

export enum TermEnum {
  Monthly = "maandelijks",
  PerQuarter = "per kwartaal",
  Yearly = "jaarlijks",
}

export interface DonateFrequentlyRequestPropsModel {
  firstName: string
  insertion: string
  lastName: string
  email: string
  newsletter: boolean
  amount: number
  term: TermEnum
  iban: number
}
