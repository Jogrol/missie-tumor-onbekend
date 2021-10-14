export type DonationRequestProps = {
  [DonationRequestFormNameEnum.Term]: string
  [DonationRequestFormNameEnum.Amount]: number
  [DonationRequestFormNameEnum.OtherAmount]: number
  [DonationRequestFormNameEnum.FirstName]: string
  [DonationRequestFormNameEnum.Insertion]: string
  [DonationRequestFormNameEnum.LastName]: string
  [DonationRequestFormNameEnum.Email]: string
  [DonationRequestFormNameEnum.NewsLetter]: boolean
  [DonationRequestFormNameEnum.Iban]: string
  [DonationRequestFormNameEnum.IbanApproval]: string
}

export enum DonationRequestFormNameEnum {
  Term = "term",
  Iban = "Iban",
  Amount = "amount",
  OtherAmount = "otherAmount",
  FirstName = "firstName",
  IbanApproval = "approvalIban",
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
