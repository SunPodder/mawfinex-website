"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import {
    TrendingUp,
    Mail,
    Users,
    BarChart3,
    Check,
    Star,
    ArrowRight,
    Zap,
    Target,
    Video,
    Palette,
    Globe,
    Search,
    Calendar,
    ShieldCheck,
    Eye,
    MessageSquare,
    Building,
} from "lucide-react"

const Business = ({ inView }) => {
    const [selectedPackage, setSelectedPackage] = useState(null)
    const router = useRouter()

    // Add effect to ensure router is ready
    useEffect(() => {
        console.log("Router ready:", router.isReady)
        console.log("Router object:", router)
    }, [router.isReady])

    const packages = [
        {
            name: "Starter Growth Pack",
            price: "৳5,000",
            duration: "one-time",
            popular: false,
            serviceCount: "10-15 Services/Inputs",
            features: [
                "Social Media Posts Design (5-7)",
                "Content/Caption Writing (5-7)", 
                "Branding Consultation (1 hour online)",
                "Audience Analysis",
                "1 Small Video Edit (1-2 minutes)",
                "Business Profile/Page Optimization (Facebook, LinkedIn)",
                "Monthly Analysis Report",
                "Content Calendar Planner",
                "Free 3-day Target Audience Ads Campaign Setup"
            ],
            includes: [
                "Social media strategy",
                "Brand consultation session",
                "Performance tracking",
                "Content planning tools",
                "Basic automation setup",
            ],
        },
        {
            name: "Pro Growth Pack",
            price: "৳10,000",
            duration: "one-time",
            popular: true,
            serviceCount: "15-20 Services/Inputs",
            features: [
                "All Starter Pack Services",
                "Social Media Posts Design (10-15)",
                "2 Video Edit/Animation (1 minute each)",
                "1 Landing Page or Content Page Design",
                "Light Facebook/Instagram Ads Configuration",
                "Business Analytics Report (1 month)",
                "Audience Research",
                "Free 7-day Target Audience Ads Campaign with Sales Guarantee"
            ],
            includes: [
                "Advanced social media management",
                "Professional video content",
                "Landing page optimization",
                "Ads campaign management",
                "Sales guarantee included",
            ],
        },
        {
            name: "Advanced Growth Pack",
            price: "৳15,000",
            duration: "one-time",
            popular: false,
            serviceCount: "25+ Services/Inputs",
            features: [
                "All Pro Pack Services",
                "Social Media Posts Design (20-25)",
                "5 Video Edit/Animation (2 minutes each)",
                "1 Facebook/Instagram Ads Campaign Complete Setup",
                "1 Website or Landing Page Customization",
                "Business Branding Guide + Logo Refresh",
                "Light SEO Setup (3-5 pages)",
                "15-day Target Audience Campaign Sales Guarantee",
                "Visitor Analysis"
            ],
            includes: [
                "Complete branding package",
                "Advanced video content",
                "Full ads campaign setup",
                "SEO optimization",
                "Extended sales guarantee",
            ],
        },
        {
            name: "Ultimate Growth Pack",
            price: "Contact for Price",
            duration: "custom package",
            popular: false,
            serviceCount: "All Services Together",
            features: [
                "All Advanced Pack Services",
                "Social Media Posts Design (1 month unlimited/as needed)",
                "10+ Video Edit/Animation (5 minutes each)",
                "Facebook/Instagram + Google Ads Campaign (Full Setup + Optimization)",
                "Website Customization (5+ pages)",
                "Custom Business Analytics Report + Monthly Consultation",
                "Branding + Marketing Strategy Plan",
                "30-day Target Audience Campaign + Sales Guarantee",
                "Full Optimization",
                "Sales Funnel Report, Audience Insights"
            ],
            includes: [
                "Unlimited social content",
                "Premium video production",
                "Multi-platform advertising",
                "Custom analytics dashboard",
                "Dedicated growth strategist",
            ],
        },
    ]

    const automationFeatures = [
        {
            icon: Palette,
            title: "Content Creation & Design",
            description: "Professional social media posts, video editing, and branding materials designed to captivate your audience.",
        },
        {
            icon: Target,
            title: "Targeted Advertising",
            description: "Strategic Facebook, Instagram, and Google Ads campaigns with guaranteed results and audience targeting.",
        },
        {
            icon: BarChart3,
            title: "Analytics & Optimization",
            description: "Comprehensive business analytics, visitor analysis, and performance optimization for maximum ROI.",
        },
        {
            icon: Building,
            title: "Business Development", 
            description: "Complete branding guide, SEO setup, website customization, and strategic business consultation.",
        },
    ]

    const handleApply = useCallback((packageData) => {
        console.log("handleApply called with:", packageData)
        console.log("Router ready in handleApply:", router.isReady)
        
        try {
            // Check if we're in the browser
            if (typeof window === 'undefined') {
                console.log("Not in browser, skipping navigation")
                return
            }

            // Create URL parameters with package information
            const params = new URLSearchParams({
                service: "Business Growth & Marketing",
                package: packageData.name,
                price: packageData.price,
                consultationType: "Free Consultation",
                packageDetails: JSON.stringify({
                    type: "business-growth",
                    features: packageData.features,
                    includes: packageData.includes,
                    duration: packageData.duration,
                    serviceCount: packageData.serviceCount
                })
            })
            
            const consultationUrl = `/consultation?${params.toString()}`
            console.log("Navigating to:", consultationUrl)
            
            // Try multiple navigation methods
            if (router.push) {
                router.push(consultationUrl)
            } else {
                // Fallback to window.location
                window.location.href = consultationUrl
            }
        } catch (error) {
            console.error("Error in handleApply:", error)
            // Fallback navigation
            window.location.href = '/consultation'
        }
    }, [router])

    const handleConsultationRedirect = useCallback((type = "general") => {
        console.log("handleConsultationRedirect called with:", type)
        
        try {
            if (typeof window === 'undefined') {
                return
            }

            const params = new URLSearchParams({
                service: "Business Growth & Marketing",
                consultationType: "Free Consultation",
                packageDetails: JSON.stringify({
                    type: "business-growth-consultation",
                    requestType: type
                })
            })
            
            const consultationUrl = `/consultation?${params.toString()}`
            console.log("Redirecting to:", consultationUrl)
            
            if (router.push) {
                router.push(consultationUrl)
            } else {
                window.location.href = consultationUrl
            }
        } catch (error) {
            console.error("Error in handleConsultationRedirect:", error)
            window.location.href = '/consultation'
        }
    }, [router])

    return (
        <div className="relative mb-16">
            {/* Simplified background elements - removed heavy blur effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/3 rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/3 rounded-full" />

            <div className="relative z-10">
                {/* Section Header - no motion */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Business Growth{" "}
                        <span className="gradient-text">Packages</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive growth solutions designed to transform your business from startup to market leader. 
                        Each package includes guaranteed results and strategic consultation.
                    </p>
                </div>

                {/* Growth Features - simplified animations */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {automationFeatures.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-colors duration-300 text-center group"
                            >
                                <div className="w-16 h-16 bg-neon-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-cyan/30 transition-colors">
                                    <Icon className="w-8 h-8 text-neon-cyan" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Growth Packages - no motion */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        Choose Your{" "}
                        <span className="gradient-text">Growth Journey</span>
                    </h3>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:scale-105 flex flex-col ${
                                    pkg.popular
                                        ? "border-neon-green shadow-lg shadow-neon-green/20"
                                        : "border-white/10 hover:border-neon-cyan/30"
                                }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-neon-green text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                            <Star className="w-4 h-4" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h4 className="text-2xl font-bold mb-2">
                                        {pkg.name}
                                    </h4>
                                    <div className="text-sm text-neon-cyan font-semibold mb-3">
                                        {pkg.serviceCount}
                                    </div>
                                    <div className="text-4xl font-bold gradient-text mb-1">
                                        {pkg.price}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {pkg.duration}
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm leading-relaxed">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-6 p-4 bg-neon-cyan/5 rounded-lg border border-neon-cyan/20">
                                    <h5 className="font-semibold mb-3 text-neon-cyan flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4" />
                                        Package Includes:
                                    </h5>
                                    <div className="space-y-2">
                                        {pkg.includes.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                                                <span className="text-gray-400 text-sm">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        console.log("Button clicked for package:", pkg.name)
                                        handleApply(pkg)
                                    }}
                                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-auto hover:scale-105 ${
                                        pkg.popular
                                            ? "bg-gradient-to-r from-neon-green to-neon-cyan text-black hover:shadow-lg hover:shadow-neon-green/30"
                                            : pkg.price === "Contact for Price"
                                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30"
                                            : "bg-white/10 text-white hover:bg-neon-cyan/20 hover:text-neon-cyan border border-white/20 hover:border-neon-cyan"
                                    }`}
                                >
                                    <Zap className="w-5 h-5" />
                                    {pkg.price === "Contact for Price" ? "Get Custom Quote" : "Start Growth Journey"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Guarantee Section - no motion */}
                <div className="mb-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-r from-neon-green/10 to-transparent p-6 rounded-2xl border border-neon-green/20">
                            <ShieldCheck className="w-12 h-12 text-neon-green mb-4" />
                            <h4 className="text-lg font-bold mb-2">Sales Guarantee</h4>
                            <p className="text-gray-400 text-sm">Every package comes with sales guarantee periods to ensure your investment delivers results.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-neon-cyan/10 to-transparent p-6 rounded-2xl border border-neon-cyan/20">
                            <Users className="w-12 h-12 text-neon-cyan mb-4" />
                            <h4 className="text-lg font-bold mb-2">Expert Consultation</h4>
                            <p className="text-gray-400 text-sm">Dedicated branding consultation and strategic guidance from our experienced team.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-400/10 to-transparent p-6 rounded-2xl border border-purple-400/20">
                            <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
                            <h4 className="text-lg font-bold mb-2">Performance Tracking</h4>
                            <p className="text-gray-400 text-sm">Comprehensive analytics and monthly reports to track your business growth progress.</p>
                        </div>
                    </div>
                </div>

                {/* Business Growth CTA - simplified */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <TrendingUp className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to{" "}
                            <span className="text-neon-green">
                                Dominate Your Market
                            </span>
                            ?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Join hundreds of businesses that have already achieved exponential growth with our proven packages. 
                            Start your transformation journey today with guaranteed results!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => handleConsultationRedirect("growth-consultation")}
                                className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                            >
                                Schedule Growth Consultation
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => handleConsultationRedirect("custom-package")}
                                className="btn-secondary flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                            >
                                Get Custom Package
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business