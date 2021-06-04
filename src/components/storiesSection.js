import React from "react"
import StoryCardLink from "./storyCardLink"

const StoriesSection = pageStories => {
  const pageStoriesArray = Object.values(pageStories).filter(item => item.title)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {pageStoriesArray.map((s, index) => {
        return <StoryCardLink key={index} {...s} />
      })}
    </div>
  )
}

export default StoriesSection
