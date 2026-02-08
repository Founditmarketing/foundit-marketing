import Script from 'next/script';

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Found It Marketing",
        "image": "https://founditmarketing.com/og-image.png",
        "@id": "https://founditmarketing.com",
        "url": "https://founditmarketing.com",
        "telephone": "+1-318-280-0115",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "3803 Rue Left Bank",
            "addressLocality": "Alexandria",
            "addressRegion": "LA",
            "postalCode": "71303",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.2829,
            "longitude": -92.4812
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Alexandria",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "LA"
                }
            },
            {
                "@type": "City",
                "name": "Pineville",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "LA"
                }
            },
            {
                "@type": "City",
                "name": "Central Louisiana"
            }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://www.facebook.com/founditmarketing",
            "https://www.instagram.com/founditmarketing",
            "https://www.linkedin.com/company/founditmarketing"
        ]
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
