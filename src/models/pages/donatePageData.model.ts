import { HeroDataModel } from "../heroData.model"
import { PatientStoriesDataModel } from "../patientStoriesData.model"
import { ProjectItemDataModel } from "../projectItemData.model"
import { VideoSectionDataModel } from "../videoSectionData.model"

export interface DonatePageDataModel {
  readonly data: {
  
    readonly page: {
      readonly title: string
      readonly hero: HeroDataModel
      readonly listOfProjects: {
        readonly projecta: ProjectItemDataModel
        readonly projectb: ProjectItemDataModel
        readonly projectc: ProjectItemDataModel
      }
      readonly videoSection: VideoSectionDataModel;
      readonly patientstoriesimages: PatientStoriesDataModel;
    }
  }
}
