import { ImageDataLike } from "gatsby-plugin-image"
import { HeroDataModel } from "../heroData.model"
import { HeroSmallDataModel } from "../heroSmallData.model"
import { ProgressDataModel } from "../projectProgressData.model"

export interface ProjectPageDataModel {
  readonly data: {
    readonly page: {
      uri: string
      title: string
      content: string
      heroSmall: HeroSmallDataModel
      projectProgress: ProgressDataModel
      readonly hero: HeroDataModel
      readonly project: {
        readonly projectimage: {
          localFile: ImageDataLike
        }
      }
    }
  }
}
