import ConsultationPage from "../components/ConsultationPage"
import Head from "next/head"

const Consultation = () => {
    return (
        <>
            <Head>
                <title>Book a Consultation - MawFiNex | Expert Web, Mobile & Business Automation in Bangladesh</title>

                <meta name="description" content="Book a free consultation with MawFiNex to discuss web & mobile app development, business automation, API integrations and cybersecurity. Get expert advice for scalable digital solutions in Bangladesh." />
                <meta name="keywords" content="MawFiNex consultation, web development consultation, mobile app consultation, business automation, API integration, cybersecurity, Bangladesh, Dhaka" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <link rel="canonical" href="https://www.mawfinex.com/consultation" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Book a Consultation - MawFiNex" />
                <meta property="og:description" content="Schedule a consultation with MawFiNex for product strategy, web & mobile development, automation and cybersecurity. Expert guidance for Bangladeshi businesses." />
                <meta property="og:url" content="https://www.mawfinex.com/consultation" />
                <meta property="og:site_name" content="MawFiNex" />
                <meta property="og:image" content="https://www.mawfinex.com/og-image.jpg" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MawFiNex" />
                <meta name="twitter:title" content="Book a Consultation - MawFiNex" />
                <meta name="twitter:description" content="Get expert consultation on web & mobile apps, business automation and cybersecurity from MawFiNex. Book a session today." />
                <meta name="twitter:image" content="https://www.mawfinex.com/og-image.jpg" />

                {/* hreflang for multi-language */}
                <link rel="alternate" href="https://www.mawfinex.com/consultation" hrefLang="en" />
                <link rel="alternate" href="https://www.mawfinex.com/bn/consultation" hrefLang="bn" />

                {/* Structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "MawFiNex",
                            "url": "https://www.mawfinex.com/",
                            "logo": "https://www.mawfinex.com/logo.png",
                            "sameAs": [
                                "https://www.facebook.com/share/1B4iRqfXLZ/",
                                "https://www.linkedin.com/in/mawfi-nex-a8048135b"
                            ],
                            "contactPoint": [
                                {
                                    "@type": "ContactPoint",
                                    "telephone": "+8809638823407",
                                    "contactType": "customer service",
                                    "areaServed": "BD",
                                    "availableLanguage": ["English","Bangla"]
                                }
                            ]
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Book a Consultation - MawFiNex",
                            "description": "Schedule a consultation with MawFiNex for product strategy, web & mobile development, automation and cybersecurity.",
                            "url": "https://www.mawfinex.com/consultation"
                        })
                    }}
                />
            </Head>
            <ConsultationPage />
        </>
    )
}

export default Consultation
