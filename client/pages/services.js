import dynamic from "next/dynamic"
import Head from "next/head"
import { Suspense } from "react"

// Loading component
const LoadingComponent = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-neon-cyan mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading Services...</p>
        </div>
    </div>
)

// Dynamically import with no SSR to prevent server-side errors
const ServicesDetailed = dynamic(
    () => import("../components/ServicesDetailed"),
    { 
        ssr: false,
        loading: LoadingComponent
    }
)

const Services = () => {
    return (
        <>
            <Head>
                <title>Services - MawFiNex | Web Development, Mobile Apps & Business Automation</title>

                <meta name="description" content="MawFiNex provides full-stack web development, custom mobile apps, business automation, API integrations and cybersecurity services to help Bangladeshi businesses scale. Contact us for product development and enterprise solutions." />
                <meta name="keywords" content="MawFiNex, web development, mobile apps, e-commerce development, business automation, API integration, cybersecurity, software development Bangladesh, Dhaka" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://www.mawfinex.com/services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Services - MawFiNex | Web, Mobile & Automation Solutions" />
                <meta property="og:description" content="Comprehensive digital services from MawFiNex: web & mobile app development, e‑commerce, automation, API integration and cybersecurity. Build scalable products with our Bangladesh-based team." />
                <meta property="og:url" content="https://www.mawfinex.com/services" />
                <meta property="og:site_name" content="MawFiNex" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="https://www.mawfinex.com/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MawFiNex" />
                <meta name="twitter:title" content="Services - MawFiNex | Web, Mobile & Automation Solutions" />
                <meta name="twitter:description" content="Partner with MawFiNex for web development, mobile apps, e‑commerce and business automation. Scalable solutions tailored for Bangladeshi businesses." />
                <meta name="twitter:image" content="https://www.mawfinex.com/og-image.jpg" />

                {/* hreflang if multi-language */}
                <link rel="alternate" href="https://www.mawfinex.com/services" hrefLang="en" />
                <link rel="alternate" href="https://www.mawfinex.com/bn/services" hrefLang="bn" />

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
                            "name": "Services - MawFiNex",
                            "description": "Comprehensive digital services from MawFiNex: web & mobile apps, e-commerce, automation, API integration and cybersecurity.",
                            "url": "https://www.mawfinex.com/services"
                        })
                    }}
                />
            </Head>
            <Suspense fallback={<LoadingComponent />}>
                <ServicesDetailed />
            </Suspense>
        </>
    )
}

export default Services