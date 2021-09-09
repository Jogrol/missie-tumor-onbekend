import { HeroSmallDataModel } from "../heroSmallData.model"

export interface DefaultPageDataModel {
  readonly data: {
    readonly page: {
      uri: string
      title: string
      content: string
      heroSmall: HeroSmallDataModel
    }
  }
}
