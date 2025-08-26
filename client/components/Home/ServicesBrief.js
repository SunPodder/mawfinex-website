"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    Globe,
    Video,
    Palette,
    ShoppingCart,
    Shield,
    Bot,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"

const ServicesBrief = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    const featuredServices = [
        {
            icon: Globe,
            name: "Web Development",
            description:
                "Custom websites and web applications tailored to your business needs",
            color: "neon-cyan",
        },
        {
            icon: Video,
            name: "Video Editing",
            description:
                "Professional video editing for marketing and promotional content",
            color: "neon-green",
        },
        {
            icon: Palette,
            name: "Graphics Design",
            description:
                "Complete branding solutions with logos and visual identity",
            color: "purple-400",
        },
        {
            icon: ShoppingCart,
            name: "POS Software",
            description:
                "Complete point-of-sale systems with inventory management",
            color: "yellow-400",
        },
        {
            icon: Shield,
            name: "Cybersecurity",
            description:
                "Website security, SSL certificates, and digital protection",
            color: "neon-cyan",
        },
        {
            icon: Bot,
            name: "API & Bots",
            description:
                "Custom automation bots for Telegram, WhatsApp, and more",
            color: "neon-green",
        },
    ]

    return (
        <section
            id="services"
            ref={ref}
            className="py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive digital solutions to transform your
                        business and amplify your online presence
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredServices.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 group hover:transform hover:scale-105"
                            >
                                <div
                                    className={`w-16 h-16 bg-${service.color}/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${service.color}/30 transition-colors`}
                                >
                                    <Icon
                                        className={`w-8 h-8 text-${service.color}`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                                    {service.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* View All Services CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Services
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>

            {/* Tailwind safelist for dynamic colors */}
            <div className="hidden">
                <div className="bg-neon-cyan/20 text-neon-cyan" />
                <div className="bg-neon-cyan/30" />
                <div className="bg-neon-green/20 text-neon-green" />
                <div className="bg-neon-green/30" />
                <div className="bg-purple-400/20 text-purple-400" />
                <div className="bg-purple-400/30" />
                <div className="bg-yellow-400/20 text-yellow-400" />
                <div className="bg-yellow-400/30" />
            </div>
        </section>
    )
}

export default ServicesBrief
