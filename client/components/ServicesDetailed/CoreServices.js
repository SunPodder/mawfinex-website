"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/router"
import {
    Video,
    Palette,
    ShoppingCart,
    Building,
    Shield,
    Monitor,
    Bot,
    MessageSquare,
    CreditCard,
    MapPin,
    Search,
    Settings,
    ArrowRight,
    Phone,
    Globe,
    TrendingUp,
    Zap,
    Store,
    Brain,
    Smartphone,
    Target,
    GraduationCap,
    Users,
    BarChart3,
    Briefcase,
    CheckCircle,
    Star,
} from "lucide-react"

const CoreServices = ({ inView }) => {
    const [activeCategory, setActiveCategory] = useState(0)
    const router = useRouter()

    const handleServiceConsultation = useCallback((service, categoryTitle) => {
        console.log("Service consultation clicked:", service.name)
        
        try {
            if (typeof window === 'undefined') {
                return
            }

            const params = new URLSearchParams({
                service: categoryTitle,
                package: service.name,
                price: service.price,
                consultationType: "Free Consultation",
                packageDetails: JSON.stringify({
                    type: "service-inquiry",
                    description: service.description,
                    features: service.features || [],
                    category: categoryTitle
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
            console.error("Error in handleServiceConsultation:", error)
            window.location.href = '/consultation'
        }
    }, [router])

    const handleContactRedirect = useCallback((service) => {
        console.log("Contact redirect clicked:", service.name)
        
        try {
            if (typeof window === 'undefined') {
                return
            }

            const params = new URLSearchParams({
                service: service.name,
                consultationType: "Contact for Price",
                packageDetails: JSON.stringify({
                    type: "contact-inquiry",
                    description: service.description
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
            console.error("Error in handleContactRedirect:", error)
            window.location.href = '/consultation'
        }
    }, [router])

    const serviceCategories = [
        {
            title: "Business Growth Pack",
            icon: TrendingUp,
            color: "neon-cyan",
            services: [
                {
                    icon: Target,
                    name: "Starter Growth Pack",
                    description: "Perfect for beginners and small businesses who need essential growth tools",
                    price: "৳5,000",
                    features: [
                        "Social Media Posts Design (5-7)",
                        "Content/Caption Writing (5-7)",
                        "Branding Consultation (1 hour)",
                        "Audience Analysis",
                        "1 Small Video Edit (1-2 min)",
                        "Business Profile Optimization",
                        "Monthly Analysis Report",
                        "Content Calendar Planner",
                        "Free 3-day Target Audience Ads Campaign"
                    ]
                },
                {
                    icon: BarChart3,
                    name: "Pro Growth Pack",
                    description: "For growing brands who want consistent, professional growth strategies",
                    price: "৳10,000",
                    features: [
                        "All Starter Pack Services",
                        "Social Media Posts Design (10-15)",
                        "2 Video Edit/Animation (1 min each)",
                        "1 Landing Page Design",
                        "Facebook/Instagram Ads Configuration",
                        "Business Analytics Report (1 month)",
                        "Audience Research",
                        "Free 7-day Target Audience Campaign with Sales Guarantee"
                    ]
                },
                {
                    icon: Zap,
                    name: "Advanced Growth Pack",
                    description: "Advanced growth solutions for established businesses",
                    price: "৳15,000",
                    features: [
                        "All Pro Pack Services",
                        "Social Media Posts Design (20-25)",
                        "5 Video Edit/Animation (2 min each)",
                        "Complete Facebook/Instagram Ads Campaign",
                        "Website/Landing Page Customization",
                        "Business Branding Guide + Logo Refresh",
                        "Basic SEO Setup (3-5 pages)",
                        "15-day Target Audience Campaign + Sales Guarantee",
                        "Visitor Analysis"
                    ]
                },
                {
                    icon: Building,
                    name: "Ultimate Growth Pack",
                    description: "Complete business transformation and growth domination",
                    price: "Contact for Price",
                    features: [
                        "All Advanced Pack Services",
                        "Social Media Posts (1 month unlimited)",
                        "10+ Video Edit/Animation (5 min each)",
                        "Facebook/Instagram + Google Ads (Full Setup)",
                        "Website Customization (5+ pages)",
                        "Custom Business Analytics + Monthly Consultation",
                        "Complete Branding + Marketing Strategy",
                        "30-day Target Campaign + Sales Guarantee",
                        "Sales Funnel Report, Audience Insights"
                    ]
                }
            ],
        },
        {
            title: "E-Commerce Solutions",
            icon: Store,
            color: "neon-green",
            services: [
                {
                    icon: ShoppingCart,
                    name: "Premium E-commerce",
                    description: "Complete e-commerce website with lifetime support and security",
                    price: "৳50,000 - ৳100,000",
                    features: [
                        "Custom E-commerce Website",
                        "Product Management System",
                        "Payment Gateway Integration",
                        "Inventory Management",
                        "Order Tracking System",
                        "Customer Management",
                        "Lifetime Support",
                        "1 Month Website Security",
                        "Optional Full Management Service"
                    ]
                },
                {
                    icon: Store,
                    name: "Premium Pro E-commerce",
                    description: "Advanced e-commerce solution with enhanced features",
                    price: "৳100,000 - ৳150,000",
                    features: [
                        "All Premium Features",
                        "Advanced Analytics Dashboard",
                        "Multi-vendor Support",
                        "Advanced SEO Optimization",
                        "Mobile App Integration",
                        "Social Media Integration",
                        "Lifetime Support",
                        "1 Month Website Security",
                        "Optional Full Management Service"
                    ]
                },
                {
                    icon: Zap,
                    name: "Ultra Premium Pro E-commerce",
                    description: "Enterprise-level e-commerce with AI and automation",
                    price: "৳150,000+",
                    features: [
                        "All Premium Pro Features",
                        "AI-powered Recommendations",
                        "Advanced Automation",
                        "Custom Integrations",
                        "Enterprise Security",
                        "24/7 Monitoring",
                        "Lifetime Support",
                        "1 Month Website Security",
                        "Full Management Included"
                    ]
                }
            ],
        },
        {
            title: "AI Services",
            icon: Brain,
            color: "neon-cyan",
            services: [
                {
                    icon: Bot,
                    name: "AI Chatbot Development",
                    description: "Custom AI chatbots for customer service and business automation",
                    price: "৳20,000 - ৳50,000",
                },
                {
                    icon: Brain,
                    name: "AI Data Analysis",
                    description: "AI-powered business insights and predictive analytics",
                    price: "৳25,000 - ৳75,000",
                },
                {
                    icon: Settings,
                    name: "AI Integration Services",
                    description: "Integrate AI tools into your existing business processes",
                    price: "৳15,000 - ৳40,000",
                },
            ],
        },
        {
            title: "App Development",
            icon: Smartphone,
            color: "neon-green",
            services: [
                {
                    icon: Smartphone,
                    name: "Mobile App Development",
                    description: "Custom Android and iOS mobile applications",
                    price: "৳30,000 - ৳100,000",
                },
                {
                    icon: Globe,
                    name: "Web App Development",
                    description: "Progressive web applications with native app features",
                    price: "৳25,000 - ৳80,000",
                },
                {
                    icon: Store,
                    name: "E-commerce App",
                    description: "Mobile shopping apps with payment integration",
                    price: "৳50,000 - ৳150,000",
                },
            ],
        },
        {
            title: "Video Editing Packages",
            icon: Video,
            color: "neon-cyan",
            services: [
                {
                    icon: Video,
                    name: "Starter Cut",
                    description: "Perfect for beginners and small businesses who need clean, quick edits",
                    price: "৳3,000",
                    features: ["5 Professional Videos", "Basic Transitions", "Color Correction", "Audio Enhancement", "Quick Delivery"]
                },
                {
                    icon: Video,
                    name: "Pro Cut",
                    description: "For growing brands who want consistent, professional content",
                    price: "৳5,000",
                    features: ["10 Professional Videos", "Advanced Transitions", "Motion Graphics", "Custom Thumbnails", "Priority Support"]
                },
                {
                    icon: Video,
                    name: "Master Cut",
                    description: "Dominate social feeds with premium, bulk-edited content that hits harder",
                    price: "৳10,000",
                    features: ["25 Professional Videos", "Premium Effects", "Custom Animations", "Brand Integration", "Dedicated Editor"]
                }
            ],
        },
        {
            title: "Design Packages",
            icon: Palette,
            color: "neon-green",
            services: [
                {
                    icon: Palette,
                    name: "Pixel Pack",
                    description: "Essential design package for startups and small businesses",
                    price: "৳2,000",
                    features: ["5 Custom Designs", "Logo Design", "Business Card", "Social Media Templates", "Basic Branding"]
                },
                {
                    icon: Palette,
                    name: "Vortex Pack",
                    description: "Comprehensive design solution for growing businesses",
                    price: "৳3,500",
                    features: ["10 Custom Designs", "Complete Branding Kit", "Website Graphics", "Print Materials", "Social Media Assets"]
                },
                {
                    icon: Palette,
                    name: "Domination Pack",
                    description: "Premium design package for market domination",
                    price: "৳7,000",
                    features: ["25 Custom Designs", "Full Brand Identity", "Marketing Materials", "Premium Templates", "Unlimited Revisions"]
                }
            ],
        },
        {
            title: "Brand Strategy & Consultation",
            icon: Target,
            color: "neon-cyan",
            services: [
                {
                    icon: Target,
                    name: "Brand Strategy Development",
                    description: "Complete brand positioning and strategy consultation",
                    price: "৳15,000 - ৳40,000",
                },
                {
                    icon: Users,
                    name: "Market Research & Analysis",
                    description: "Comprehensive market research and go-to-market strategy",
                    price: "৳10,000 - ৳30,000",
                },
                {
                    icon: Briefcase,
                    name: "Full Business Setup",
                    description: "Complete digital business setup with market research and strategy. Free POS included!",
                    price: "৳50,000 - ৳200,000",
                },
            ],
        },
        {
            title: "Training & Skill Development",
            icon: GraduationCap,
            color: "neon-green",
            services: [
                {
                    icon: GraduationCap,
                    name: "Digital Marketing Training",
                    description: "Comprehensive digital marketing course with certification",
                    price: "৳8,000 - ৳15,000",
                },
                {
                    icon: Monitor,
                    name: "Web Development Training",
                    description: "Learn modern web development from industry experts",
                    price: "৳12,000 - ৳25,000",
                },
                {
                    icon: Smartphone,
                    name: "App Development Course",
                    description: "Mobile app development training with real projects",
                    price: "৳15,000 - ৳30,000",
                },
            ],
        },
        {
            title: "Business Automation Systems",
            icon: Settings,
            color: "neon-cyan",
            services: [
                {
                    icon: Bot,
                    name: "WhatsApp Business Automation",
                    description: "Automated customer service and marketing via WhatsApp",
                    price: "৳10,000 - ৳30,000",
                },
                {
                    icon: MessageSquare,
                    name: "Telegram Bot Development",
                    description: "Custom Telegram bots for business processes",
                    price: "৳8,000 - ৳25,000",
                },
                {
                    icon: Settings,
                    name: "CRM Automation",
                    description: "Customer relationship management system automation",
                    price: "৳20,000 - ৳60,000",
                },
            ],
        },
        {
            title: "Cybersecurity",
            icon: Shield,
            color: "neon-green",
            services: [
                {
                    icon: Monitor,
                    name: "Website Security",
                    description: "SSL certificates, security audits, malware removal, and protection",
                    price: "৳5,000 - ৳20,000",
                },
                {
                    icon: Shield,
                    name: "Page Security",
                    description: "Social media page security, account recovery, and protection setup",
                    price: "৳3,000 - ৳15,000",
                },
                {
                    icon: Search,
                    name: "Digital Risk Monitoring",
                    description: "24/7 monitoring of digital assets and threat detection",
                    price: "৳10,000/month",
                },
            ],
        },
        {
            title: "NID & Number Services",
            icon: CreditCard,
            color: "neon-cyan",
            services: [
                {
                    icon: Search,
                    name: "Info Check",
                    description: "National ID information verification and checking services",
                    price: "Contact for Price",
                },
                {
                    icon: Settings,
                    name: "Correction Services",
                    description: "NID correction and update assistance services",
                    price: "Contact for Price",
                },
                {
                    icon: CreditCard,
                    name: "Number to NID",
                    description: "Phone number to NID information retrieval service",
                    price: "Contact for Price",
                },
                {
                    icon: MapPin,
                    name: "Number to Location",
                    description: "Phone number to location tracking service",
                    price: "Contact for Price",
                },
            ],
        },
    ]

    const renderServiceCard = (service, index, categoryColor) => {
        const Icon = service.icon
        const hasFeatures = service.features && service.features.length > 0
        const currentCategory = serviceCategories[activeCategory]

        return (
            <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 group hover:scale-105"
            >
                <div
                    className={`w-16 h-16 bg-${categoryColor}/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${categoryColor}/30 transition-colors`}
                >
                    <Icon className={`w-8 h-8 text-${categoryColor}`} />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                    {service.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                </p>

                {hasFeatures && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neon-green mb-2">Package Includes:</h4>
                        <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                                    <CheckCircle className="w-3 h-3 text-neon-green flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                            {service.features.length > 3 && (
                                <li className="text-xs text-neon-cyan">
                                    +{service.features.length - 3} more features
                                </li>
                            )}
                        </ul>
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold gradient-text">
                        {service.price}
                    </div>

                    {service.price === "Contact for Price" ? (
                        <button
                            onClick={() => handleContactRedirect(service)}
                            className="flex items-center gap-2 text-neon-cyan hover:text-neon-green transition-colors hover:translate-x-1"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">Contact</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => handleServiceConsultation(service, currentCategory.title)}
                            className="flex items-center gap-2 text-neon-cyan hover:text-neon-green transition-colors hover:translate-x-1"
                        >
                            <span className="text-sm">Get Quote</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="relative mb-16">
            {/* Simplified background elements - reduced blur */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/3 rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-green/3 rounded-full" />

            <div className="relative z-10">
                {/* Section Header - no motion */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive digital solutions tailored to transform your business and amplify your digital presence across all platforms.
                    </p>
                </div>

                {/* Category Tabs - simplified */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
                    {serviceCategories.map((category, index) => {
                        const Icon = category.icon
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(index)}
                                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm ${
                                    activeCategory === index
                                        ? `bg-${category.color}/20 border-${category.color} text-${category.color}`
                                        : "bg-white/5 border-white/20 text-white hover:border-white/40"
                                } border backdrop-blur-sm hover:scale-105`}
                            >
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="hidden sm:inline">
                                    {category.title}
                                </span>
                                <span className="sm:hidden">
                                    {category.title.split(' ')[0]}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Services Grid - no complex animations */}
                <div
                    key={activeCategory}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {serviceCategories[activeCategory].services.map((service, index) =>
                        renderServiceCard(service, index, serviceCategories[activeCategory].color)
                    )}
                </div>

                {/* Services Section CTA - simplified */}
                <div className="text-center mt-20">
                    <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-white/10">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            Need a <span className="text-neon-cyan">Custom Solution</span>?
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                            Our digital services are designed to scale with your business. Get personalized solutions tailored to your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/consultation"
                                className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
                            >
                                Free Consultation
                            </a>
                            <a
                                href="/contact"
                                className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
                            >
                                Get Custom Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreServices