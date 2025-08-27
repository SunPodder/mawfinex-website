"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Phone, Mail, X } from "lucide-react"
import Link from "next/link"

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false)

    const contactOptions = [
        {
            icon: MessageSquare,
            label: "WhatsApp",
            href: "https://wa.me/8801618046884",
            color: "green-500",
            bgColor: "green-500/20",
        },
        {
            icon: MessageSquare,
            label: "Telegram",
            href: "https://t.me/mawfinex",
            color: "blue-400",
            bgColor: "blue-400/20",
        },
        {
            icon: Phone,
            label: "Call",
            href: "tel:+8809638823407",
            color: "neon-cyan",
            bgColor: "neon-cyan/20",
        },
        {
            icon: Mail,
            label: "Email",
            href: "mailto:info@mawfinex.com",
            color: "neon-green",
            bgColor: "neon-green/20",
        },
    ]

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 space-y-3"
                    >
                        {contactOptions.map((option, index) => {
                            const Icon = option.icon
                            return (
                                <Link
                                    key={option.label}
                                    href={option.href}
                                    target={
                                        option.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        option.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-3 px-4 py-3 bg-black/90 backdrop-blur-sm border border-${option.color}/30 rounded-full hover:border-${option.color} transition-all duration-300 group hover:bg-${option.bgColor}`}
                                    whileHover={{ scale: 1.05, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon
                                        className={`w-5 h-5 text-${option.color}`}
                                    />
                                    <span className="text-white text-sm font-medium pr-2">
                                        {option.label}
                                    </span>
                                </Link>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Contact Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6 text-black" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare className="w-6 h-6 text-black" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse animation */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-neon-cyan"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.button>

            {/* Tooltip for closed state */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                    Contact Us
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-black/90" />
                </motion.div>
            )}
        </div>
    )
}

export default FloatingContact
