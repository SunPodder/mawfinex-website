import React from "react"
import { motion } from "framer-motion"
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Heart,
    ExternalLink,
} from "lucide-react"
import Link from "next/link"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Products", href: "/#products" },
        { name: "Team", href: "/#team" },
        { name: "Contact", href: "/#contact" },
    ]

    const services = [
        "Web Development",
        "Mobile App Development",
        "Digital Marketing",
        "Business Growth",
        "E-commerce Solutions",
        "API Development",
    ]

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1B4iRqfXLZ/", label: "Facebook" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/mawfi-nex-a8048135b", label: "LinkedIn" },
    ]

    const contactInfo = [
        { icon: Mail, text: "info@mawfinex.com" },
        { icon: Phone, text: "+8809638823407" },
        { icon: MapPin, text: "Crystal Business Tower, Cyprus" },
    ]

    return (
        <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-green rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold text-sm">M</span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                MawFiNex
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transforming businesses through innovative digital
                            solutions. Your trusted partner in the digital realm.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link
                                            href={social.href}
                                            className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold text-white">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-400 text-sm">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold text-white">
                            Contact Info
                        </h4>
                        <ul className="space-y-3">
                            {contactInfo.map((contact, index) => {
                                const Icon = contact.icon
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center space-x-3"
                                    >
                                        <Icon className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">
                                            {contact.text}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10"></div>

                {/* Bottom Footer */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-400 text-sm text-center sm:text-left"
                    >
                        &copy; {currentYear} MawFiNex. All rights reserved.
                    </motion.p>

                    {/* Developer Credit */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center space-x-2 text-sm"
                    >
                        <span className="text-gray-400">Developed with</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span className="text-gray-400">by</span>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="https://www.facebook.com/0xDev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 text-neon-cyan hover:text-neon-green transition-colors duration-300 font-medium"
                            >
                                <span>Dev Alley</span>
                                <ExternalLink className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer