import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import ServicesBrief from "../components/Home/ServicesBrief"
import BusinessGrowthBrief from "../components/Home/BusinessGrowthBrief"
import ProductsBrief from "../components/Home/ProductsBrief"
import Team from "../components/Home/Team"
import CTA from "../components/Home/CTA"
import Contact from "../components/Contact"
import Head from "next/head"

const Home = () => {
    return (
        <>
            <Head>
                <title>MawFiNex — Digital Transformation, Web & Mobile Apps in Bangladesh</title>
                <meta name="description" content="MawFiNex delivers web development, mobile apps, business automation, cybersecurity, and digital marketing to help Bangladeshi businesses scale. Contact us for consultancy, custom solutions and product development." />
                <meta name="keywords" content="MawFiNex, digital transformation, web development, mobile apps, e-commerce, business automation, cybersecurity, digital marketing, API integration, Dhaka" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://www.mawfinex.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MawFiNex — Digital Transformation, Web & Mobile Apps in Bangladesh" />
                <meta property="og:description" content="We build custom web & mobile products, automate business processes, and drive growth with digital marketing and cybersecurity. Book a consultation today." />
                <meta property="og:url" content="https://www.mawfinex.com/" />
                <meta property="og:site_name" content="MawFiNex" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="https://www.mawfinex.com/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@MawFiNex" />
                <meta name="twitter:title" content="MawFiNex — Digital Transformation, Web & Mobile Apps" />
                <meta name="twitter:description" content="Custom web & mobile development, automation, cybersecurity and growth services for businesses in Bangladesh." />
                <meta name="twitter:image" content="https://www.mawfinex.com/og-image.png" />
                <meta name="theme-color" content="#00FFD1" />

                {/* hreflang if multi-language available */}
                <link rel="alternate" href="https://www.mawfinex.com/" hrefLang="en" />
                <link rel="alternate" href="https://www.mawfinex.com/bn" hrefLang="bn" />

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
                            "@type": "WebSite",
                            "url": "https://www.mawfinex.com/",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://www.mawfinex.com/?s={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
            </Head>
            <Hero />
            <About />
            <ServicesBrief />
            <BusinessGrowthBrief />
            <ProductsBrief />
            <Team />
            <CTA />
            <Contact />
        </>
    )
}

export default Home
