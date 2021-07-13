import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ title, description, image, instagram }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          instagram
          image
        }
      }
    }
  `);
  return (
    <Helmet>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:image" content={site.siteMetadata.image} />
    </Helmet>
  );
}
