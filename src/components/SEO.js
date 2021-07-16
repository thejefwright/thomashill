import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ title, description, image, instagram }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
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
      <link rel="shortcut icon" type="image/jpg" href="/favicon.ico" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}
