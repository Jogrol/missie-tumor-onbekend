export type DonationRequestProps = {
  [DonationRequestFormNameEnum.PaymentPeriod]: string
  [DonationRequestFormNameEnum.Amount]: number
  [DonationRequestFormNameEnum.OtherAmount]: number
  [DonationRequestFormNameEnum.FirstName]: string
  [DonationRequestFormNameEnum.Insertion]: string
  [DonationRequestFormNameEnum.LastName]: string
  [DonationRequestFormNameEnum.Email]: string
  [DonationRequestFormNameEnum.NewsLetter]: boolean
}

export enum DonationRequestFormNameEnum {
  PaymentPeriod = "paymentPeriod",
  Amount = "amount",
  OtherAmount = "otherAmount",
  FirstName = "firstName",
  Insertion = "insertion",
  LastName = "lastName",
  Email = "email",
  NewsLetter = "newsLetter",
}

export interface DonationApiRequestResultModel {
  request: {
    result: string
    errorId: string
    errorMessage: string
  }
  endUser: {
    blacklist: string
  }
  transaction: {
    transactionId: string
    paymentURL: string
    popupAllowed: string
    paymentReference: string
  }
}

export interface DonationRequestResultModel {
  success: boolean
  errorMessage?: string
  info?: {
    redirectUrl: string
  }
}
