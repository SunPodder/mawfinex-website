"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, ArrowRight, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

const CTA = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    const stats = [
        { number: "100+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "24/7", label: "Support Available" },
        { number: "99%", label: "Success Rate" },
    ]

    return (
        <section
            ref={ref}
            className="py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-green/5" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold mb-6">
                        Ready to{" "}
                        <span className="gradient-text">Transform</span> Your
                        Business?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Join the digital revolution with MawFiNex. From
                        automation to custom development, we provide everything
                        you need to scale your business and dominate your
                        market.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
                >
                    <Link
                        href="/consultation"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-cyan to-neon-green text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Zap className="w-6 h-6" />
                        Start Your Transformation
                        <ArrowRight className="w-6 h-6" />
                    </Link>

                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-xl font-bold text-lg hover:bg-neon-cyan hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <TrendingUp className="w-6 h-6" />
                        Explore Our Services
                    </Link>
                </motion.div>

                {/* Urgency Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 max-w-2xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                        <span className="text-neon-green font-semibold">
                            Limited Time Offer
                        </span>
                    </div>
                    <p className="text-gray-300 mb-4">
                        Get a{" "}
                        <span className="text-neon-cyan font-bold">
                            FREE consultation
                        </span>{" "}
                        and
                        <span className="text-neon-green font-bold">
                            {" "}
                            20% off
                        </span>{" "}
                        your first project. Transform your business today!
                    </p>
                    <div className="text-sm text-gray-400">
                        🔥 Only 5 slots remaining this month
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
