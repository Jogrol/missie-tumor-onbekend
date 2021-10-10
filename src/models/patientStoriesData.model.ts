import { ImageDataLike } from "gatsby-plugin-image"

export interface PatientStoriesDataModel {
  readonly altText: string
  readonly localFile: ImageDataLike
}
