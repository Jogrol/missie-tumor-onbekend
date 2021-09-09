import { ImageDataLike } from "gatsby-plugin-image"

export interface ProjectItemDataModel {
  readonly title: string
  readonly description: string
  readonly buttontitle: string
  readonly target: number
  readonly progress: number
  readonly pagelink: {
    uri: string
  }
  readonly image: {
    localFile: ImageDataLike
  }
}
