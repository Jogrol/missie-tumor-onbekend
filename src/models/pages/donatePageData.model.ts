import { HeroDataModel } from "../heroData.model"
import { ProjectItemDataModel } from "../projectItemData.model"
import { VideoSectionDataModel } from "../videoSectionData.model"

export interface DonatePageDataModel {
  readonly data: {
    readonly page: {
      readonly hero: HeroDataModel
      readonly listOfProjects: {
        readonly projecta: ProjectItemDataModel
        readonly projectb: ProjectItemDataModel
        readonly projectc: ProjectItemDataModel
      }
      readonly videoSection: VideoSectionDataModel;
    }
  }
}
