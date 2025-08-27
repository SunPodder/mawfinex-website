"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    Target,
    Eye,
    Award,
    ChevronLeft,
    ChevronRight,
    Play,
    X,
    CheckCircle,
} from "lucide-react"

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
    const [currentSlide, setCurrentSlide] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const intervalRef = useRef(null)
    const SLIDER_INTERVAL = 6000

    const beforeAfter = [
        {
            title: "E-commerce Transformation",
            before: "/before_after_1.jpeg",
            after: "/before_after_2.jpeg",
            description:
                "Transformed a traditional business into a modern e-commerce platform with 300% increase in sales.",
        },
        {
            title: "Brand Digital Makeover",
            before: "/before_after_3.png",
            after: "/before_after_4.png",
            description:
                "Complete brand redesign and digital presence overhaul resulting in 500% social media growth.",
        },
        {
            title: "Automation Implementation",
            before: "/before_after_1.jpeg",
            after: "/before_after_2.jpeg",
            description:
                "Implemented business automation reducing manual work by 80% and increasing efficiency.",
        },
    ]

    const achievements = [
        { icon: Award, number: "1700+", text: "Projects Delivered" },
        { icon: CheckCircle, number: "93%", text: "Client Satisfaction" },
        { icon: Target, number: "175+", text: "Industries Served" },
        { icon: Eye, number: "3+", text: "Years Experience" },
    ]

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % beforeAfter.length)
        }, SLIDER_INTERVAL)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % beforeAfter.length)
        resetInterval()
    }

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length,
        )
        resetInterval()
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % beforeAfter.length)
        }, SLIDER_INTERVAL)
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    return (
        <section
            id="about"
            ref={ref}
            className="py-12 sm:py-16 lg:py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-neon-green/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-neon-cyan/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">
                        About <span className="gradient-text">MawFiNex</span>
                    </h2>
                    <div className="w-12 sm:w-16 lg:w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-3 sm:mb-4 lg:mb-6" />
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                        Others promise results, we engineer certainty. Mawfinex turns ambition into
automated, unstoppable growth.


                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
                    {/* Company Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
                    >
                        <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/10">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-neon-cyan flex-shrink-0" />
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                                To engineer unstoppable digital growth by fusing AI, automation, cybersecurity, and
strategy into one powerful ecosystem empowering businesses to scale, dominate, and thrive in the future.

                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/10">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <Eye className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-neon-green flex-shrink-0" />
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                                To become the global command center of digital transformation, where growth has only
one name: Mawfinex.

                            </p>
                        </div>

                        {/* Achievements Grid - Mobile: 1 column, Tablet: 2 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {achievements.map((achievement, index) => {
                                const Icon = achievement.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={
                                            inView ? { opacity: 1, y: 0 } : {}
                                        }
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.4 + index * 0.1,
                                        }}
                                        className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl border border-white/10 text-center hover:border-neon-cyan/30 transition-colors"
                                    >
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-neon-cyan mx-auto mb-2 sm:mb-3" />
                                        <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-1">
                                            {achievement.number}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                                            {achievement.text}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Before & After Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 lg:mb-6 gap-2 sm:gap-3">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                                    Transformation Showcase
                                </h3>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="flex items-center gap-1.5 sm:gap-2 text-neon-cyan hover:text-neon-green transition-colors text-xs sm:text-sm lg:text-base"
                                >
                                </button>
                            </div>

                            {/* Slider */}
                            <div className="relative overflow-hidden rounded-lg lg:rounded-xl">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                    }}
                                >
                                    {beforeAfter.map((item, index) => (
                                        <div key={index} className="min-w-full">
                                            {/* Mobile: Stack vertically, Tablet+: Side by side */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                                                <div className="relative">
                                                    <div className="aspect-video bg-gray-800 rounded-md lg:rounded-lg overflow-hidden">
                                                        <img
                                                            src={item.before}
                                                            alt="Before"
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.src =
                                                                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJlZm9yZTwvdGV4dD48L3N2Zz4="
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-red-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                                                        Before
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <div className="aspect-video bg-gray-800 rounded-md lg:rounded-lg overflow-hidden">
                                                        <img
                                                            src={item.after}
                                                            alt="After"
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.src =
                                                                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA1NTQ0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwZmZmNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFmdGVyPC90ZXh0Pjwvc3ZnPg=="
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-neon-green text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                                                        After
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 rounded-full transition-colors"
                                >
                                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 rounded-full transition-colors"
                                >
                                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                                {beforeAfter.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-colors ${
                                            index === currentSlide
                                                ? "bg-neon-cyan"
                                                : "bg-gray-600"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Modal */}
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="bg-black/90 border border-neon-cyan/30 rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">
                                    Demo Video
                                </h3>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                </button>
                            </div>

                            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                                <div className="text-center p-3 sm:p-4">
                                    <Play className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-neon-cyan mx-auto mb-3 sm:mb-4" />
                                    <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
                                        Demo video would be embedded here
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                                        Integration with YouTube, Vimeo, or
                                        custom video player
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default About
