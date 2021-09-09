export interface VideoSectionDataModel {
  readonly introductiontext: string
  readonly videolink: {
    readonly url: string
    readonly target: string
    readonly title: string
  }
}
