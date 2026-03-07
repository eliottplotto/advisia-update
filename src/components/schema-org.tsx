export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Advisia",
    url: "https://advisia.agency",
    logo: "https://advisia.agency/logo-advisia.png",
    description:
      "Agence IA, automatisation et développement web pour PME et ETI en France. Basée à Tarbes, Hautes-Pyrénées.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Juillan",
      addressRegion: "Hautes-Pyrénées",
      postalCode: "65290",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.1975,
      longitude: -0.0178,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://advisia.agency/contact",
      availableLanguage: "French",
    },
    sameAs: ["https://www.linkedin.com/company/advisia-agency"],
    foundingDate: "2022",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    knowsAbout: [
      "Intelligence artificielle",
      "Automatisation",
      "Développement web",
      "Product Design",
      "Marketing Digital",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Advisia",
    url: "https://advisia.agency",
    description:
      "Agence IA & automatisation pour PME. Agents IA, sites web, marketing digital.",
    publisher: {
      "@type": "Organization",
      name: "Advisia",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Advisia",
    image: "https://advisia.agency/logo-advisia.png",
    url: "https://advisia.agency",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Juillan",
      addressRegion: "Hautes-Pyrénées",
      postalCode: "65290",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.1975,
      longitude: -0.0178,
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
