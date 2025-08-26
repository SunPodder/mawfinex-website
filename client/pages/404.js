import { motion } from "framer-motion"
import Link from "next/link"
import Head from "next/head"
import { Search, Home, ArrowLeft, Compass, Zap, Star } from "lucide-react"

const NotFoundPage = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found | MawFiNex</title>
                <meta name="description" content="The page you're looking for doesn't exist. Return to MawFiNex homepage to explore our digital transformation services." />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 relative overflow-hidden pt-12">
                {/* Enhanced Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-green/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* 404 Number with Enhanced Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="mb-8"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black mb-6 relative"
                        >
                            <span className="bg-gradient-to-r from-neon-cyan via-purple-400 to-neon-green bg-clip-text text-transparent animate-pulse">
                                404
                            </span>
                            {/* Glitch effect overlay */}
                            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
                                404
                            </span>
                        </motion.h1>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                            className="w-24 h-24 mx-auto bg-gradient-to-r from-neon-cyan/20 to-neon-green/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10"
                        >
                            <Search className="w-12 h-12 text-neon-cyan animate-bounce" />
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Oops! Lost in the{" "}
                            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                                Digital Void
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
                            The page you're hunting for seems to have vanished into the digital realm.
                        </p>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            But don't worry! Our digital hunters are here to guide you back to safety.
                        </p>
                    </motion.div>

                    {/* Enhanced Suggested Pages */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="mb-12"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                            <Star className="w-5 h-5 text-yellow-400" />
                            Popular Destinations
                            <Star className="w-5 h-5 text-yellow-400" />
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {[
                                { href: "/services", label: "Our Services", desc: "Digital Solutions" },
                                { href: "/careers", label: "Careers", desc: "Join Our Team" },
                                { href: "/consultation", label: "Free Consultation", desc: "Expert Advice" }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-neon-cyan/30 transition-all duration-300"
                                >
                                    <Link href={item.href} className="block text-center">
                                        <div className="text-neon-cyan font-semibold mb-1">{item.label}</div>
                                        <div className="text-gray-400 text-sm">{item.desc}</div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotateX: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/"
                                className="btn-primary flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-neon-cyan/30"
                            >
                                <Home className="w-6 h-6" />
                                Return Home
                            </Link>
                        </motion.div>

                        <motion.button
                            onClick={() => window.history.back()}
                            className="btn-secondary flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold"
                            whileHover={{ scale: 1.05, rotateX: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-6 h-6" />
                            Go Back
                        </motion.button>

                        <motion.div
                            whileHover={{ scale: 1.05, rotateX: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/services"
                                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-500/30 transition-all duration-300 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm"
                            >
                                <Compass className="w-6 h-6" />
                                Explore Services
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="mt-16 pt-8 border-t border-white/10"
                    >
                        <div className="bg-gradient-to-r from-neon-cyan/10 via-purple-400/10 to-neon-green/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-cyan/20 to-transparent"></div>
                            </div>
                            
                            <div className="relative z-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <Zap className="w-8 h-8 text-black" />
                                </motion.div>
                                
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Ready to Start Your{" "}
                                    <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                                        Digital Journey?
                                    </span>
                                </h3>
                                <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                                    Don't let this detour stop you! We offer comprehensive digital solutions from web development to business automation.
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="/consultation"
                                        className="btn-primary inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-neon-green/30"
                                    >
                                        <Zap className="w-5 h-5" />
                                        Get Free Consultation
                                        <ArrowLeft className="w-5 h-5 rotate-180" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced Brand Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="mt-12"
                    >
                        <Link href="/" className="inline-block group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-3xl font-black bg-gradient-to-r from-neon-cyan via-purple-400 to-neon-green bg-clip-text text-transparent mb-2"
                            >
                                MawFiNex
                            </motion.div>
                        </Link>
                        <p className="text-gray-400 text-sm font-medium">
                            🏹 The Hunter of Digital Realms
                        </p>
                        <div className="flex justify-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1 h-1 bg-neon-cyan rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage