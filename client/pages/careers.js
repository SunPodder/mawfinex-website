import CareersPage from "../components/CareersPage"
import Head from "next/head"

const Careers = () => {
    return (
        <>
            <Head>
                <title>Careers - MawFiNex | Join Our Web & Mobile Product Team in Bangladesh</title>

                <meta name="description" content="Join MawFiNex — we build web & mobile products, automate business processes and drive digital growth. Explore current openings, internship and remote opportunities. Apply now to build impactful digital products with a fast-growing Bangladeshi team." />
                <meta name="keywords" content="MawFiNex careers, jobs in Bangladesh, web developer jobs Dhaka, mobile app jobs Bangladesh, software engineer job, digital product careers" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://www.mawfinex.com/careers" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Careers - MawFiNex | Join Our Web & Mobile Product Team" />
                <meta property="og:description" content="Build web and mobile products with MawFiNex. See open roles, internship opportunities and apply to join our development and product teams in Bangladesh." />
                <meta property="og:url" content="https://www.mawfinex.com/careers" />
                <meta property="og:site_name" content="MawFiNex" />
                <meta property="og:image" content="https://www.mawfinex.com/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Careers - MawFiNex | Join Our Team" />
                <meta name="twitter:description" content="Check open positions at MawFiNex — web & mobile development, product, QA, design. Apply online for roles in Dhaka and remote opportunities." />
                <meta name="twitter:image" content="https://www.mawfinex.com/og-image.jpg" />

                {/* hreflang for multi-language */}
                <link rel="alternate" href="https://www.mawfinex.com/careers" hrefLang="en" />
                <link rel="alternate" href="https://www.mawfinex.com/bn/careers" hrefLang="bn" />

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
                            "name": "Careers - MawFiNex",
                            "description": "Explore job and internship opportunities at MawFiNex. Work on web & mobile products, automation and cybersecurity projects with a growing Bangladeshi team.",
                            "url": "https://www.mawfinex.com/careers"
                        })
                    }}
                />
            </Head>
            <CareersPage />
        </>
    )
}

export default Careers
