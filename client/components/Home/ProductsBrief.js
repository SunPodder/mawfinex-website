"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Smartphone, Globe, Package, ArrowRight } from "lucide-react"
import Link from "next/link"

const ProductsBrief = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    const products = [
        {
            icon: Smartphone,
            title: "Mobile Apps",
            description:
                "Custom mobile applications for iOS and Android platforms",
            priceRange: "৳25,000 - ৳100,000+",
        },
        {
            icon: Globe,
            title: "Websites",
            description: "Professional websites and e-commerce solutions",
            priceRange: "৳15,000 - ৳90,000+",
        },
        {
            icon: Package,
            title: "Custom Tools",
            description: "Tailored software solutions for your business needs",
            priceRange: "৳20,000+",
        },
    ]

    return (
        <section
            id="products"
            ref={ref}
            className="py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Products & <span className="gradient-text">Apps</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Transform your ideas into powerful digital products that
                        engage customers and drive business growth.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => {
                        const Icon = product.icon
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
                                <div className="w-16 h-16 bg-neon-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-cyan/30 transition-colors">
                                    <Icon className="w-8 h-8 text-neon-cyan" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="text-lg font-semibold gradient-text">
                                    {product.priceRange}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <Package className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Build Your Digital Product?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            From concept to deployment, we handle every aspect
                            of your digital product development with precision
                            and expertise.
                        </p>
                        <Link
                            href="/services"
                            className="btn-primary inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Packages
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProductsBrief
