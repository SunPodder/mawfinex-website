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
    const [validationErrors, setValidationErrors] = useState({})

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
            details: ["Crystal Business Center", "Dubai, UAE", "Available Nationwide"],
            action: "View Map",
            href: "https://www.google.com/maps/place/Crystal+Business+Center/@25.261095,55.3326253,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6dbebd19e369:0xa4185337191bf296!8m2!3d25.261095!4d55.3326253!16s%2Fg%2F11y3hcq4f2?entry=ttu",
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
        
        // Clear validation error when user starts typing
        if (validationErrors[field]) {
            setValidationErrors(prev => ({ ...prev, [field]: null }))
        }
    }

    const validateForm = () => {
        const errors = {}

        // Name validation
        if (!formData.name?.trim()) {
            errors.name = "Name is required"
        } else if (formData.name.trim().length < 2) {
            errors.name = "Name must be at least 2 characters"
        }

        // Email validation
        if (!formData.email?.trim()) {
            errors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address"
        }

        // Subject validation
        if (!formData.subject?.trim()) {
            errors.subject = "Subject is required"
        } else if (formData.subject.trim().length < 3) {
            errors.subject = "Subject must be at least 3 characters"
        }

        // Message validation
        if (!formData.message?.trim()) {
            errors.message = "Message is required"
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters"
        }

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Clear previous validation errors
        setValidationErrors({})

        // Validate form
        const errors = validateForm()
        
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors)
            setSubmitStatus("error")
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    newsletter: formData.newsletter || false
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus("success")
                setFormData({})
                setValidationErrors({})
            } else {
                console.error('API Error:', data.error)
                setSubmitStatus("error")
            }
        } catch (error) {
            console.error('Network Error:', error)
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
            {/* Simplified background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/3 rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-green/3 rounded-full" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header - no motion */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to start your digital transformation journey?
                        We're here to help you every step of the way. Reach out
                        and let's discuss your project!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    {/* Contact Information - simplified animations */}
                    <div className="space-y-8">
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
                                        className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-${action.color}/50 transition-all duration-300 text-center group hover:scale-105`}
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
                                    <div
                                        key={index}
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
                                                >
                                                    <span>{info.action}</span>
                                                    <Globe className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
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
                                            className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-${social.color}/20 hover:text-${social.color} transition-all duration-300 hover:scale-110`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - simplified */}
                    <div>
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
                                        Name *
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
                                        className={`form-input w-full ${validationErrors.name ? "border-red-500/50" : ""}`}
                                        required
                                    />
                                    {validationErrors.name && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {validationErrors.name}
                                        </p>
                                    )}
                                    <p className="text-gray-400 text-xs mt-1">
                                        Minimum 2 characters
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email *
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
                                        className={`form-input w-full ${validationErrors.email ? "border-red-500/50" : ""}`}
                                        required
                                    />
                                    {validationErrors.email && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {validationErrors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Subject *
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
                                    className={`form-input w-full ${validationErrors.subject ? "border-red-500/50" : ""}`}
                                    required
                                />
                                {validationErrors.subject && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {validationErrors.subject}
                                    </p>
                                )}
                                <p className="text-gray-400 text-xs mt-1">
                                    Minimum 3 characters
                                </p>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    value={formData.message || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "message",
                                            e.target.value,
                                        )
                                    }
                                    className={`form-input w-full h-32 resize-none ${validationErrors.message ? "border-red-500/50" : ""}`}
                                    required
                                />
                                {validationErrors.message && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {validationErrors.message}
                                    </p>
                                )}
                                <div className="flex justify-between text-xs mt-1">
                                    <span className="text-gray-400">
                                        Minimum 10 characters
                                    </span>
                                    <span className={`${
                                        (formData.message?.length || 0) >= 10 
                                            ? "text-green-400" 
                                            : "text-gray-400"
                                    }`}>
                                        {formData.message?.length || 0}/10
                                    </span>
                                </div>
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

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                            >
                                {isSubmitting ? (
                                    <div className="spinner" />
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section with updated location */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
                    <MapPin className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                        Visit Our Office
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Located in Crystal Business Center, Dubai, UAE. We welcome clients for face-to-face meetings and consultations. Click on the map below to view our exact location and get directions.
                    </p>
                    
                    {/* Google Maps Embed */}
                    <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-neon-cyan/20 transition-shadow duration-300">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.3759658256477!2d55.3326253!3d25.261095800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dbebd19e369%3A0xa4185337191bf296!2sCrystal%20Business%20Center!5e1!3m2!1sen!2sbd!4v1756289808892!5m2!1sen!2sbd" 
                            width="100%" 
                            height="300" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>

                    <button
                        onClick={() => window.open("https://www.google.com/maps/place/Crystal+Business+Center/@25.261095,55.3326253,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6dbebd19e369:0xa4185337191bf296!8m2!3d25.261095!4d55.3326253!16s%2Fg%2F11y3hcq4f2?entry=ttu", "_blank")}
                        className="mt-6 btn-secondary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                    >
                        <MapPin className="w-5 h-5" />
                        Open in Google Maps
                    </button>
                </div>
                
                {submitStatus && (
                    <div
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
                                    : "Please check the form for errors and try again."}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Contact