import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SeoPropsModel {
  readonly description?: string
  readonly lang?: string
  readonly title: string
  readonly meta: any[]
}

interface SiteQueryPropModel {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string
      readonly description: string
      readonly author: string;
      readonly siteUrl: string;
      readonly twitterDescription: string
      readonly organizaton: string
      readonly twitterSite: string
    }
  }
}

const Seo = ({ description, lang = "nl", meta = [], title }: SeoPropsModel) => {
  const { site }: SiteQueryPropModel = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            twitterDescription
            organizaton
            twitterSite
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const url = site.siteMetadata?.siteUrl
  const twitterDescription = site.siteMetadata.twitterDescription
  const twitterSite = site.siteMetadata.twitterSite
  const organizaton = site.siteMetadata.organizaton

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `twitter:site`,
          content: twitterSite,
        },
        {
          property: `twitter:creator`,
          content: organizaton,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: twitterDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
