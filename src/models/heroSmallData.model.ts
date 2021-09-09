import { ImageDataLike } from "gatsby-plugin-image"

export interface HeroSmallDataModel {
  readonly title: string
  readonly subtitle: string
  readonly description: string
  readonly image: {
    localFile: ImageDataLike
  }
}
