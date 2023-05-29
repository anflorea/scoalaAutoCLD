import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({ tags }) {
  const {
    title,
    description_ro,
    description_en,
    keywords_ro,
    keywords_en,
    name,
    type,
  } = tags;
  return (
    <Helmet>
      <title>{title}</title>

      {/* RO */}
      {/* Standard metadata tags */}
      <meta name="keywords" content={keywords_ro} />
      <meta name="description" content={description_ro} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description_ro} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description_ro} />
      {/* End Twitter tags */}

      {/* EN */}
      {/* Standard metadata tags */}
      <meta name="keywords" content={keywords_en} />
      <meta name="description" content={description_en} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description_en} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description_en} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
