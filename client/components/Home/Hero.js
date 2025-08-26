"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Play, Zap } from "lucide-react"

const Hero = () => {
    const [typedText, setTypedText] = useState("")
    const [showCursor, setShowCursor] = useState(true)
    const [isClient, setIsClient] = useState(false)

    const subtitle = "Transforming Digital Dreams into Reality"

    useEffect(() => {
        setIsClient(true)
        let index = 0
        const timer = setInterval(() => {
            if (index <= subtitle.length) {
                setTypedText(subtitle.slice(0, index))
                index++
            } else {
                clearInterval(timer)
                // Cursor blink effect
                setInterval(() => {
                    setShowCursor((prev) => !prev)
                }, 500)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    const scrollToServices = () => {
        document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Floating particles */}
            {isClient && (
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                opacity: 0,
                            }}
                            animate={{
                                y: [null, -100, -200],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Main Content */}
            <div className="relative z-10 text-center mt-16 sm:mt-0 px-4 md:px-8 max-w-6xl mx-auto">
                {/* Main Title with Glitch Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-8"
                >
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glitch-text text-glow"
                        data-text="Welcome to MawFiNex"
                    >
                        Welcome to MawFiNex
                    </h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6"
                    />
                    <h2 className="text-xl md:text-3xl lg:text-4xl gradient-text font-semibold">
                        The Hunter of Digital Realms
                    </h2>
                </motion.div>

                {/* Typewriter Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mb-12"
                >
                    <p className="text-lg md:text-xl text-gray-300 font-light">
                        {typedText}
                        <span
                            className={`${showCursor ? "opacity-100" : "opacity-0"} text-neon-cyan`}
                        >
                            |
                        </span>
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <motion.button
                        onClick={scrollToServices}
                        className="btn-primary flex items-center gap-2 mx-auto sm:mx-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Zap className="w-5 h-5" />
                        Explore Services
                    </motion.button>

                    <motion.button
                        onClick={() =>
                            document
                                .getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="btn-secondary flex items-center gap-2 mx-auto sm:mx-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play className="w-5 h-5" />
                        Watch Demo
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto"
                >
                    {[
                        { number: "1700+", label: "Projects Completed" },
                        { number: "93%", label: "Client Satisfaction" },
                        { number: "24/7", label: "Support Available" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 glow-hover"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={scrollToServices}
                >
                    <p className="text-sm text-gray-400 mb-2">
                        Discover Our Services
                    </p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronDown className="w-6 h-6 text-neon-cyan" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow"
                style={{ animationDelay: "1s" }}
            />
        </section>
    )
}

export default Hero
