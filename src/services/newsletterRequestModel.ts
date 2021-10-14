export interface NewsletterRequestResultModel {
  success: boolean
  info?: unknown
  errorMessage?: string
}

export interface NewsletterRequestPropsModel {
  firstName: string
  insertion: string
  lastName: string
  email: string
  newsletter: boolean
}
