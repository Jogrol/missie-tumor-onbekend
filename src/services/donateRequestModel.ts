export interface DonateRequestProps {
  [DonateRequestFormNameEnum.Amount]: number
  [DonateRequestFormNameEnum.OtherAmount]: number
  [DonateRequestFormNameEnum.FirstName]: string
  [DonateRequestFormNameEnum.Insertion]: string
  [DonateRequestFormNameEnum.LastName]: string
  [DonateRequestFormNameEnum.Email]: string
  [DonateRequestFormNameEnum.NewsLetter]?: boolean
  [DonateRequestFormNameEnum.Iban]?: string
  [DonateRequestFormNameEnum.Term]?: string
  [DonateRequestFormNameEnum.IbanApproval]?: string
}

export enum DonateRequestFormNameEnum {
  Term = "term",
  Iban = "iban",
  Amount = "amount",
  OtherAmount = "otherAmount",
  FirstName = "firstName",
  IbanApproval = "ibanApproval",
  Insertion = "insertion",
  LastName = "lastName",
  Email = "email",
  NewsLetter = "newsletter",
}

export interface DonateApiRequestResultModel {
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

export interface DonateRequestResultModel {
  success: boolean
  errorMessage?: string
  info?: {
    redirectUrl: string
  }
}
