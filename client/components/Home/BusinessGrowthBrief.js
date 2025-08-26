"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrendingUp, BarChart3, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const BusinessGrowthBrief = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    const features = [
        {
            icon: BarChart3,
            title: "Social Media Automation",
            description:
                "Automated posting and engagement across all platforms",
        },
        {
            icon: Users,
            title: "CRM Integration",
            description: "Complete customer management and tracking systems",
        },
        {
            icon: Zap,
            title: "Marketing Automation",
            description: "Email campaigns and lead nurturing on autopilot",
        },
    ]

    return (
        <section
            id="business-growth"
            ref={ref}
            className="py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Business Growth &{" "}
                        <span className="gradient-text">Automation</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Scale your business with intelligent automation
                        solutions that work 24/7 to grow your revenue and
                        streamline operations.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 text-center group hover:transform hover:scale-105"
                            >
                                <div className="w-16 h-16 bg-neon-green/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-green/30 transition-colors">
                                    <Icon className="w-8 h-8 text-neon-green" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Pricing Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mb-12"
                >
                    <div className="bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <TrendingUp className="w-16 h-16 text-neon-green mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                            Growth Packages Starting at{" "}
                            <span className="gradient-text">৳5,000/month</span>
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Choose from Starter, Professional, Business, or
                            Enterprise packages tailored to your growth needs.
                        </p>
                        <Link
                            href="/services"
                            className="btn-primary inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Packages
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default BusinessGrowthBrief
