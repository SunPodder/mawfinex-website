"use client"

import { useState, useCallback, memo } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import {
    Smartphone,
    Globe,
    ShoppingCart,
    Laptop,
    Check,
    Star,
    ArrowRight,
    Package,
    Wrench,
    Code,
} from "lucide-react"

const App = memo(({ inView }) => {
    const [activeTab, setActiveTab] = useState("apps")
    const router = useRouter()

    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab)
    }, [])

    const handleConsultationRedirect = useCallback((packageData, serviceType) => {
        // Create URL parameters with package information
        const params = new URLSearchParams({
            service: serviceType === "apps" ? "Mobile App Development" : "Web Development",
            package: packageData.name,
            price: packageData.price,
            consultationType: "Free Consultation",
            packageDetails: JSON.stringify({
                type: serviceType,
                features: packageData.features,
                includes: packageData.includes,
                duration: packageData.duration
            })
        })
        
        router.push(`/consultation?${params.toString()}`)
    }, [router])

    const handleLearnMore = useCallback((toolData) => {
        const params = new URLSearchParams({
            service: "Custom Software Development",
            package: toolData.title,
            price: toolData.price,
            consultationType: "Free Consultation",
            packageDetails: JSON.stringify({
                type: "custom-tool",
                description: toolData.description
            })
        })
        
        router.push(`/consultation?${params.toString()}`)
    }, [router])

    // ... existing data arrays (appPackages, websitePackages, customTools) remain the same ...

    const appPackages = [
        {
            name: "Basic",
            price: "৳25,000",
            duration: "one-time",
            popular: false,
            features: [
                "Simple Mobile App (Android/iOS)",
                "Basic UI/UX Design",
                "User Authentication",
                "Push Notifications",
                "Basic Analytics",
                "3 Months Support",
            ],
            includes: [
                "Source code included",
                "Play Store/App Store submission",
                "Basic documentation",
                "Email support",
            ],
        },
        {
            name: "Standard",
            price: "৳50,000",
            duration: "one-time",
            popular: true,
            features: [
                "Advanced Mobile App",
                "Custom UI/UX Design",
                "User Management System",
                "Payment Integration",
                "Advanced Analytics",
                "API Integration",
                "6 Months Support",
            ],
            includes: [
                "Source code & documentation",
                "App store optimization",
                "Admin panel included",
                "Priority support",
                "Basic maintenance",
            ],
        },
        {
            name: "E-commerce",
            price: "৳75,000",
            duration: "one-time",
            popular: false,
            features: [
                "Full E-commerce App",
                "Product Management",
                "Shopping Cart & Checkout",
                "Multiple Payment Methods",
                "Order Tracking",
                "Inventory Management",
                "Customer Reviews",
                "1 Year Support",
            ],
            includes: [
                "Complete e-commerce solution",
                "Seller/Admin dashboards",
                "Marketing tools integration",
                "SEO optimization",
                "Performance monitoring",
            ],
        },
        {
            name: "Premium",
            price: "৳100,000+",
            duration: "custom",
            popular: false,
            features: [
                "Enterprise Mobile Solution",
                "Advanced Features & Integrations",
                "Custom Backend Development",
                "Multi-platform Compatibility",
                "Advanced Security",
                "Real-time Features",
                "Custom Integrations",
                "Lifetime Support",
            ],
            includes: [
                "Custom development",
                "Enterprise security",
                "Dedicated support team",
                "Advanced analytics",
                "Scalable infrastructure",
                "Regular updates",
            ],
        },
    ]

    const websitePackages = [
        {
            name: "Basic",
            price: "৳15,000",
            duration: "one-time",
            popular: false,
            features: [
                "Responsive Website (5 pages)",
                "Modern Design",
                "Contact Form",
                "Basic SEO Setup",
                "Mobile Optimization",
                "3 Months Support",
            ],
            includes: [
                "Domain setup assistance",
                "Basic hosting guidance",
                "Google Analytics setup",
                "Social media integration",
            ],
        },
        {
            name: "Business",
            price: "৳35,000",
            duration: "one-time",
            popular: true,
            features: [
                "Professional Website (10+ pages)",
                "Custom Design",
                "Content Management System",
                "Advanced SEO",
                "Blog Integration",
                "Contact & Booking Forms",
                "6 Months Support",
            ],
            includes: [
                "Premium domain setup",
                "SSL certificate included",
                "Email setup",
                "Google My Business optimization",
                "Basic maintenance",
            ],
        },
        {
            name: "E-commerce",
            price: "৳60,000",
            duration: "one-time",
            popular: false,
            features: [
                "Full E-commerce Website",
                "Product Management",
                "Shopping Cart System",
                "Payment Gateway Integration",
                "Order Management",
                "Customer Accounts",
                "Inventory Tracking",
                "1 Year Support",
            ],
            includes: [
                "Complete online store",
                "Product SEO optimization",
                "Marketing tools",
                "Analytics & reporting",
                "Security features",
            ],
        },
        {
            name: "Premium",
            price: "৳90,000+",
            duration: "custom",
            popular: false,
            features: [
                "Enterprise Web Solution",
                "Custom Functionality",
                "Advanced Integrations",
                "Multi-language Support",
                "Advanced Security",
                "Custom Admin Panel",
                "API Development",
                "Lifetime Support",
            ],
            includes: [
                "Custom development",
                "Enterprise hosting setup",
                "Advanced analytics",
                "Performance optimization",
                "Dedicated support",
                "Regular updates",
            ],
        },
    ]

    const customTools = [
        {
            icon: Wrench,
            title: "Custom Digital Tools",
            description: "Tailored software solutions for your specific business needs and workflows.",
            price: "৳20,000+",
        },
        {
            icon: Package,
            title: "POS Hardware Integration",
            description: "Complete point-of-sale hardware setup with software integration.",
            price: "৳40,000+",
        },
        {
            icon: Code,
            title: "API Development",
            description: "Custom API development and third-party service integrations.",
            price: "৳30,000+",
        },
    ]

    const currentPackages = activeTab === "apps" ? appPackages : websitePackages

    if (!inView) {
        return <div className="h-20" />
    }

    return (
        <div className="w-full relative overflow-hidden">
            {/* Background Elements - Mobile Fixed */}
            <div className="absolute top-10 -right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-neon-cyan/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 -left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-neon-green/10 rounded-full blur-xl" />

            <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                            Products & <span className="gradient-text">Apps</span>
                        </h2>
                        <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-3 sm:mb-4 md:mb-6" />
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            From custom mobile applications to enterprise websites,
                            we create digital products that drive engagement,
                            increase sales, and streamline operations.
                        </p>
                    </motion.div>

                    {/* Custom Tools Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 lg:mb-16"
                    >
                        {customTools.map((tool, index) => {
                            const Icon = tool.icon
                            return (
                                <motion.div
                                    key={`tool-${index}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                    className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 group hover:transform hover:scale-105"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-neon-green/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:bg-neon-green/30 transition-colors">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-neon-green" />
                                    </div>
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-3 group-hover:text-neon-green transition-colors">
                                        {tool.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                                        {tool.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold gradient-text">
                                            {tool.price}
                                        </div>
                                        <motion.button
                                            onClick={() => handleLearnMore(tool)}
                                            className="flex items-center gap-1 sm:gap-2 text-neon-green hover:text-neon-cyan transition-colors"
                                            whileHover={{ x: 3 }}
                                        >
                                            <span className="text-xs sm:text-sm">
                                                Learn More
                                            </span>
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Package Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12"
                    >
                        <button
                            onClick={() => handleTabChange("apps")}
                            className={`flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                                activeTab === "apps"
                                    ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                                    : "bg-white/5 border-white/20 text-white hover:border-white/40"
                            } border backdrop-blur-sm`}
                        >
                            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            <span>App Packages</span>
                        </button>
                        <button
                            onClick={() => handleTabChange("websites")}
                            className={`flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                                activeTab === "websites"
                                    ? "bg-neon-green/20 border-neon-green text-neon-green"
                                    : "bg-white/5 border-white/20 text-white hover:border-white/40"
                            } border backdrop-blur-sm`}
                        >
                            <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            <span>Website Packages</span>
                        </button>
                    </motion.div>

                    {/* Packages Grid */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 lg:mb-16"
                    >
                        {currentPackages.map((pkg, index) => (
                            <motion.div
                                key={`package-${activeTab}-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative bg-white/5 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full ${
                                    pkg.popular
                                        ? "border-neon-green shadow-lg shadow-neon-green/20"
                                        : "border-white/10 hover:border-neon-cyan/30"
                                }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-1.5 sm:-top-2 md:-top-3 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-neon-green text-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                                            Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-3 sm:mb-4 md:mb-6">
                                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
                                        {pkg.name}
                                    </h4>
                                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1">
                                        {pkg.price}
                                    </div>
                                    <div className="text-gray-400 text-xs sm:text-sm">
                                        {pkg.duration}
                                    </div>
                                </div>

                                <div className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <div
                                            key={`feature-${idx}`}
                                            className="flex items-start gap-1.5 sm:gap-2 md:gap-3"
                                        >
                                            <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-neon-green flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-xs sm:text-sm leading-tight">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-3 sm:mb-4 md:mb-6">
                                    <h5 className="font-semibold mb-1.5 sm:mb-2 md:mb-3 text-neon-cyan text-xs sm:text-sm md:text-base">
                                        What's Included:
                                    </h5>
                                    <div className="space-y-1 sm:space-y-1.5">
                                        {pkg.includes.map((item, idx) => (
                                            <div
                                                key={`include-${idx}`}
                                                className="flex items-center gap-1.5 sm:gap-2"
                                            >
                                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-cyan rounded-full flex-shrink-0" />
                                                <span className="text-gray-400 text-xs sm:text-sm leading-tight">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    onClick={() => handleConsultationRedirect(pkg, activeTab)}
                                    className={`w-full py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 mt-auto text-xs sm:text-sm md:text-base ${
                                        pkg.popular
                                            ? "bg-gradient-to-r from-neon-green to-neon-cyan text-black hover:shadow-lg hover:shadow-neon-green/30"
                                            : "bg-white/10 text-white hover:bg-neon-cyan/20 hover:text-neon-cyan border border-white/20 hover:border-neon-cyan"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {activeTab === "apps" ? (
                                        <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                                    ) : (
                                        <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                                    )}
                                    Get Started
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Products & Apps CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-r from-purple-400/10 to-neon-cyan/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-white/10">
                            <Package className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-neon-cyan mx-auto mb-2 sm:mb-3 md:mb-4" />
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                                Launch Your{" "}
                                <span className="text-purple-400">
                                    Digital Product
                                </span>
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                                From mobile apps to web platforms, we build products
                                that drive engagement and revenue. Let's discuss
                                your specific requirements and create a custom
                                solution.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
                                <motion.a
                                    href="/consultation"
                                    className="btn-primary flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Discuss Your Product Idea
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </motion.a>
                                <motion.a
                                    href="/contact"
                                    className="btn-secondary flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Portfolio
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
})

App.displayName = 'App'

export default App