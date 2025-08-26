"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    MessageSquare,
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    Globe,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Github,
    Check,
    X,
} from "lucide-react"
import Link from "next/link"

const Contact = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
    const [formData, setFormData] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            details: ["+8809638823407"],
            action: "Call Now",
            href: "tel:+8809638823407",
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@mawfinex.com"],
            action: "Send Email",
            href: "mailto:info@mawfinex.com",
        },
        {
            icon: MapPin,
            title: "Location",
            details: ["360 Arch. Makarios III Avenue, Crystal Business Tower, 7th Floor, Office 702/Limassol 3030, Cyprus", "Available Nationwide"],
            action: "View Map",
            href: "https://maps.app.goo.gl/kaMxQcZTMsqzDd35A",
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: ["Mon - Sat: 9AM - 8PM", "Sun: 10AM - 6PM"],
            action: "Schedule Call",
            href: "#",
        },
    ]

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1B4iRqfXLZ/", color: "blue-500" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/mawfi-nex-a8048135b", color: "blue-600" },
    ]

    const quickActions = [
        {
            icon: MessageSquare,
            title: "WhatsApp",
            subtitle: "Quick Chat",
            color: "green-500",
            href: "https://wa.me/8809638823407",
        },
        {
            icon: MessageSquare,
            title: "Telegram",
            subtitle: "Instant Message",
            color: "blue-400",
            href: "https://t.me/mawfinex",
        },
    ]

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error("Network response was not ok")
            setSubmitStatus("success")
            setFormData({})
        } catch (error) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    return (
        <section
            id="contact"
            ref={ref}
            className="py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to start your digital transformation journey?
                        We're here to help you every step of the way. Reach out
                        and let's discuss your project!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {quickActions.map((action, index) => {
                                const Icon = action.icon
                                return (
                                    <Link
                                        key={index}
                                        href={action.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-${action.color}/50 transition-all duration-300 text-center group hover:transform hover:scale-105`}
                                        whileHover={{ y: -5 }}
                                    >
                                        <Icon
                                            className={`w-8 h-8 text-${action.color} mx-auto mb-3`}
                                        />
                                        <h3
                                            className={`font-bold mb-1 group-hover:text-${action.color} transition-colors`}
                                        >
                                            {action.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {action.subtitle}
                                        </p>
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon
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
                                        className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-neon-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-neon-cyan" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold mb-2">
                                                    {info.title}
                                                </h3>
                                                {info.details.map(
                                                    (detail, idx) => (
                                                        <p
                                                            key={idx}
                                                            className="text-gray-300 text-sm mb-1"
                                                        >
                                                            {detail}
                                                        </p>
                                                    ),
                                                )}
                                                <Link
                                                    href={info.href}
                                                    className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-green transition-colors text-sm mt-2"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <span>{info.action}</span>
                                                    <Globe className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                        >
                            <h3 className="font-bold mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-${social.color}/20 hover:text-${social.color} transition-all duration-300`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                        >
                            <h3 className="text-2xl font-bold mb-6 gradient-text">
                                Send us a Message
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "name",
                                                e.target.value,
                                            )
                                        }
                                        className="form-input w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "email",
                                                e.target.value,
                                            )
                                        }
                                        className="form-input w-full"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    value={formData.subject || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "subject",
                                            e.target.value,
                                        )
                                    }
                                    className="form-input w-full"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    value={formData.message || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "message",
                                            e.target.value,
                                        )
                                    }
                                    className="form-input w-full h-32 resize-none"
                                    required
                                />
                            </div>

                            <div className="mb-8">
                                <label className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={formData.newsletter || false}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "newsletter",
                                                e.target.checked,
                                            )
                                        }
                                        className="w-4 h-4 text-neon-cyan"
                                    />
                                    <span className="text-sm text-gray-300">
                                        I'd like to receive updates and news
                                        about MawFiNex services
                                    </span>
                                </label>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full flex items-center justify-center gap-2"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <div className="spinner" />
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center"
                >
                    <MapPin className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                        Visit Our Office
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Located in Cyprus, we welcome clients for face-to-face meetings and consultations. Click on the map below to view our exact location and get directions.
                    </p>
                    
                    {/* Fake Map Design */}
                    <div 
                        className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:shadow-neon-cyan/20"
                        onClick={() => window.open("https://maps.app.goo.gl/qW3Qt6yfGix2QQvt6", "_blank")}
                    >
                        {/* Grid lines to simulate map */}
                        <div className="absolute inset-0 opacity-20">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="absolute w-full h-px bg-gray-600" style={{ top: `${(i + 1) * 12.5}%` }} />
                            ))}
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="absolute h-full w-px bg-gray-600" style={{ left: `${(i + 1) * 8.33}%` }} />
                            ))}
                        </div>
                        
                        {/* Fake roads */}
                        <div className="absolute top-1/3 left-0 w-full h-1 bg-gray-400 opacity-40" />
                        <div className="absolute top-2/3 left-0 w-full h-1 bg-gray-400 opacity-40" />
                        <div className="absolute left-1/4 top-0 h-full w-1 bg-gray-400 opacity-40" />
                        <div className="absolute left-3/4 top-0 h-full w-1 bg-gray-400 opacity-40" />
                        
                        {/* Location pin */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <div className="w-6 h-6 bg-neon-cyan rounded-full animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                                {/* Ripple effect */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-neon-cyan rounded-full animate-ping opacity-30" />
                            </div>
                        </div>
                        
                        {/* Overlay with text */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center">
                                <MapPin className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                                <p className="text-white font-semibold">Click to view in Google Maps</p>
                                <p className="text-gray-300 text-sm">360 Arch. Makarios III Avenue, Cyprus</p>
                            </div>
                        </div>
                        
                        {/* Corner elements for design */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-neon-cyan/30" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-neon-cyan/30" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-neon-cyan/30" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-neon-cyan/30" />
                    </div>

                    <motion.button
                        onClick={() => window.open("https://maps.app.goo.gl/qW3Qt6yfGix2QQvt6", "_blank")}
                        className="mt-6 btn-secondary inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MapPin className="w-5 h-5" />
                        Open in Google Maps
                    </motion.button>
                </motion.div>
                
                {submitStatus && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`fixed top-6 right-6 p-4 rounded-lg backdrop-blur-sm border z-50 ${
                            submitStatus === "success"
                                ? "bg-green-500/20 border-green-500 text-green-400"
                                : "bg-red-500/20 border-red-500 text-red-400"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            {submitStatus === "success" ? (
                                <Check className="w-5 h-5" />
                            ) : (
                                <X className="w-5 h-5" />
                            )}
                            <span className="font-medium">
                                {submitStatus === "success"
                                    ? "Message sent successfully! We'll get back to you soon."
                                    : "Something went wrong. Please try again."}
                            </span>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default Contact
