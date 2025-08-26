"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useMemo } from "react"
import CoreServices from "./CoreServices"
import App from "./App"
import Business from "./Business"
import Link from "next/link"

const ServicesDetailed = () => {
    const [ref, inView] = useInView({ 
        threshold: 0.1, 
        triggerOnce: true,
        rootMargin: '50px'
    })

    // Memoize to prevent infinite re-renders
    const components = useMemo(() => [
        { Component: CoreServices, key: 'core-services' },
        { Component: Business, key: 'business' }, 
        { Component: App, key: 'app' }
    ], [])

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
            {/* Hero Section - Mobile Optimized */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-green/5" />
                <div className="w-full max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                            Complete{" "}
                            <span className="text-neon-cyan">Digital</span>{" "}
                            Solutions
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed">
                            From business automation to cybersecurity, web
                            development to API integrations - we provide
                            comprehensive digital services to transform and
                            scale your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 md:mb-16">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="/consultation"
                                    className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 w-full sm:w-auto text-center block"
                                >
                                    Get Free Consultation
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="#services"
                                    className="btn-secondary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 w-full sm:w-auto text-center block"
                                >
                                    Explore Services
                                </Link>
                            </motion.div>
                        </div>
                        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* Services Section - Mobile Optimized */}
            <section
                id="services"
                ref={ref}
                className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8"
            >
                <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
                    {components.map(({ Component, key }) => (
                        <div key={key} className="w-full">
                            <Component inView={inView} />
                        </div>
                    ))}

                    {/* Tailwind safelist for dynamic colors */}
                    <div className="hidden">
                        <div className="text-neon-cyan bg-neon-cyan/20 bg-neon-cyan/30 bg-neon-cyan" />
                        <div className="text-neon-green bg-neon-green/20 bg-neon-green/30 bg-neon-green" />
                        <div className="text-purple-400 bg-purple-400/20 bg-purple-400/30 bg-purple-400" />
                        <div className="text-yellow-400 bg-yellow-400/20 bg-yellow-400/30 bg-yellow-400" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesDetailed