"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    Briefcase,
    Users,
    Heart,
    Lightbulb,
    Send,
    Check,
    X,
    MapPin,
    Clock,
    Award,
} from "lucide-react"

const CareersPage = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
    const [formData, setFormData] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [validationErrors, setValidationErrors] = useState({})

    // Phone number validation regex for Bangladesh (+880), International, and local formats
    const phoneRegex = /^(\+8801[3-9]\d{8}|01[3-9]\d{8}|\+\d{10,15})$/

    const validatePhoneNumber = (phone) => {
        if (!phone) return "Phone number is required"
        if (!phoneRegex.test(phone.replace(/[\s-]/g, ""))) {
            return "Please enter a valid phone number (e.g., +8801712345678 or 01712345678)"
        }
        return null
    }

    const applicationTypes = [
        {
            id: "job",
            title: "Job Application",
            icon: Briefcase,
            description: "Apply for open positions in our team",
            color: "neon-cyan",
        },
        {
            id: "internship",
            title: "Internship",
            icon: Users,
            description: "Join our internship program and learn",
            color: "neon-green",
        },
        {
            id: "partnership",
            title: "Partnership",
            icon: Heart,
            description: "Explore business partnership opportunities",
            color: "purple-400",
        },
        {
            id: "proposal",
            title: "Project Proposal",
            icon: Lightbulb,
            description: "Submit your project ideas and proposals",
            color: "yellow-400",
        },
    ]

    const benefits = [
        {
            title: "Remote Flexibility",
            description: "Work from anywhere with flexible hours",
            icon: MapPin,
        },
        {
            title: "Growth Opportunities",
            description: "Continuous learning and career advancement",
            icon: Award,
        },
        {
            title: "Modern Tech Stack",
            description: "Work with cutting-edge technologies",
            icon: Clock,
        },
    ]

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        
        // Clear validation error when user starts typing
        if (validationErrors[field]) {
            setValidationErrors(prev => ({ ...prev, [field]: null }))
        }

        // Real-time phone validation
        if (field === 'phone' && value) {
            const phoneError = validatePhoneNumber(value)
            if (phoneError) {
                setValidationErrors(prev => ({ ...prev, phone: phoneError }))
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Clear previous validation errors
        setValidationErrors({})

        // Validate required fields
        const errors = {}

        if (!formData.applicationType) {
            errors.applicationType = "Please select an application type"
        }

        if (!formData.fullName?.trim()) {
            errors.fullName = "Full name is required"
        } else if (formData.fullName.trim().length < 2) {
            errors.fullName = "Full name must be at least 2 characters"
        }

        if (!formData.email?.trim()) {
            errors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Please enter a valid email address"
        }

        // Phone validation
        const phoneError = validatePhoneNumber(formData.phone)
        if (phoneError) {
            errors.phone = phoneError
        }

        if (!formData.location?.trim()) {
            errors.location = "Location is required"
        } else if (formData.location.trim().length < 2) {
            errors.location = "Location must be at least 2 characters"
        }

        if (!formData.position?.trim()) {
            errors.position = "Position/Area of Interest is required"
        } else if (formData.position.trim().length < 2) {
            errors.position = "Position must be at least 2 characters"
        }

        if (!formData.message?.trim()) {
            errors.message = "Cover letter/message is required"
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters"
        }

        if (!formData.file) {
            errors.file = "Resume/Portfolio is required"
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors)
            setSubmitStatus("error")
            setIsSubmitting(false)
            return
        }

        // Prepare FormData for multipart/form-data
        const fd = new FormData()
        
        // Add all required fields to FormData
        fd.append('applicationType', formData.applicationType)
        fd.append('fullName', formData.fullName.trim())
        fd.append('email', formData.email.trim())
        fd.append('phone', formData.phone.replace(/[\s-]/g, "")) // Remove spaces and dashes
        fd.append('location', formData.location.trim())
        fd.append('position', formData.position.trim())
        fd.append('message', formData.message.trim())
        fd.append('experience', formData.experience || '')
        
        // Add file
        if (formData.file instanceof File) {
            fd.append('file', formData.file)
        }

        try {
            const res = await fetch("/api/careers", {
                method: "POST",
                body: fd,
            })

            const data = await res.json()
            
            if (res.ok) {
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
        <div className="min-h-screen pt-16">
            <section
                ref={ref}
                className="py-20 px-4 md:px-8 relative overflow-hidden"
            >
                {/* Background Elements */}
                {/* accessibility issue */}
                {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" /> */}

                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Join Our <span className="gradient-text">Team</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Be part of a dynamic team that's shaping the future
                            of digital transformation. We're always looking for
                            talented individuals who are passionate about
                            technology and innovation.
                        </p>
                    </motion.div>

                    {/* Benefits Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6 mb-16"
                    >
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
                                >
                                    <Icon className="w-10 h-10 text-neon-cyan mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {benefit.description}
                                    </p>
                                </div>
                            )
                        })}
                    </motion.div>

                    {/* Application Types */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Choose Your Path
                        </h2>
                        <div className="grid md:grid-cols-4 gap-4 mb-12">
                            {applicationTypes.map((type, index) => {
                                const Icon = type.icon
                                return (
                                    <motion.button
                                        key={type.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        onClick={() =>
                                            handleInputChange(
                                                "applicationType",
                                                type.id,
                                            )
                                        }
                                        className={`p-6 rounded-xl border transition-all duration-300 text-center ${
                                            formData.applicationType === type.id
                                                ? `bg-${type.color}/20 border-${type.color}`
                                                : "bg-white/5 border-white/10 hover:border-white/30"
                                        } ${
                                            validationErrors.applicationType ? "border-red-500/50" : ""
                                        }`}
                                    >
                                        <Icon
                                            className={`w-8 h-8 mx-auto mb-3 ${
                                                formData.applicationType ===
                                                type.id
                                                    ? `text-${type.color}`
                                                    : "text-gray-400"
                                            }`}
                                        />
                                        <h3 className="font-semibold mb-2">
                                            {type.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {type.description}
                                        </p>
                                    </motion.button>
                                )
                            })}
                        </div>
                        {validationErrors.applicationType && (
                            <p className="text-red-400 text-sm mb-4 text-center">
                                {validationErrors.applicationType}
                            </p>
                        )}
                    </motion.div>

                    {/* Application Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        onSubmit={handleSubmit}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            Submit Your Application
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={formData.fullName || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "fullName",
                                            e.target.value,
                                        )
                                    }
                                    className={`form-input w-full ${validationErrors.fullName ? "border-red-500/50" : ""}`}
                                    required
                                />
                                {validationErrors.fullName && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {validationErrors.fullName}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email Address *
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

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "phone",
                                            e.target.value,
                                        )
                                    }
                                    className={`form-input w-full ${validationErrors.phone ? "border-red-500/50" : ""}`}
                                    placeholder="+8801712345678 or 01712345678"
                                    required
                                />
                                {validationErrors.phone && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {validationErrors.phone}
                                    </p>
                                )}
                                <p className="text-gray-400 text-xs mt-1">
                                    Enter Bangladesh mobile (+8801XXXXXXXXX) or international format
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Location *
                                </label>
                                <input
                                    type="text"
                                    value={formData.location || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "location",
                                            e.target.value,
                                        )
                                    }
                                    className={`form-input w-full ${validationErrors.location ? "border-red-500/50" : ""}`}
                                    placeholder="City, Country"
                                    required
                                />
                                {validationErrors.location && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {validationErrors.location}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                                Position/Area of Interest *
                            </label>
                            <input
                                type="text"
                                value={formData.position || ""}
                                onChange={(e) =>
                                    handleInputChange(
                                        "position",
                                        e.target.value,
                                    )
                                }
                                className={`form-input w-full ${validationErrors.position ? "border-red-500/50" : ""}`}
                                placeholder="e.g., Frontend Developer, Digital Marketing, UI/UX Designer"
                                required
                            />
                            {validationErrors.position && (
                                <p className="text-red-400 text-sm mt-1">
                                    {validationErrors.position}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                                Cover Letter / Message *
                            </label>
                            <textarea
                                value={formData.message || ""}
                                onChange={(e) =>
                                    handleInputChange("message", e.target.value)
                                }
                                className={`form-input w-full h-32 resize-none ${validationErrors.message ? "border-red-500/50" : ""}`}
                                placeholder="Tell us about yourself, your experience, and why you want to join MawFiNex..."
                                required
                            />
                            {validationErrors.message && (
                                <p className="text-red-400 text-sm mt-1">
                                    {validationErrors.message}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                                Years of Experience
                            </label>
                            <select
                                value={formData.experience || ""}
                                onChange={(e) =>
                                    handleInputChange(
                                        "experience",
                                        e.target.value,
                                    )
                                }
                                className="form-input w-full"
                            >
                                <option value="">
                                    Select experience level
                                </option>
                                <option value="0-1">
                                    0-1 years (Entry Level)
                                </option>
                                <option value="1-3">1-3 years (Junior)</option>
                                <option value="3-5">
                                    3-5 years (Mid Level)
                                </option>
                                <option value="5-8">5-8 years (Senior)</option>
                                <option value="8+">8+ years (Expert)</option>
                            </select>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium mb-2">
                                Resume/Portfolio *
                            </label>
                            <input
                                type="file"
                                onChange={(e) =>
                                    handleInputChange("file", e.target.files[0])
                                }
                                className={`form-input w-full ${validationErrors.file ? "border-red-500/50" : ""}`}
                                accept=".pdf,.doc,.docx"
                                required
                            />
                            {validationErrors.file && (
                                <p className="text-red-400 text-sm mt-1">
                                    {validationErrors.file}
                                </p>
                            )}
                            <p className="text-sm text-gray-400 mt-1">
                                Upload your resume, portfolio, or relevant
                                documents (PDF, DOC)
                            </p>
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
                                    Submit Application
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>

                {/* Success/Error Messages */}
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
                                    ? "Application submitted successfully! We'll review it and get back to you soon."
                                    : "Please check the form for errors and try again."}
                            </span>
                        </div>
                    </motion.div>
                )}
            </section>
        </div>
    )
}

export default CareersPage

// Tailwind safelist for dynamic color classes
// This hidden div ensures Tailwind includes these classes in the build
const TailwindColorSafelist = () => (
    <div className="hidden">
        {/* Application type colors */}
        <div className="bg-neon-cyan/20 border-neon-cyan text-neon-cyan" />
        <div className="bg-neon-green/20 border-neon-green text-neon-green" />
        <div className="bg-purple-400/20 border-purple-400 text-purple-400" />
        <div className="bg-yellow-400/20 border-yellow-400 text-yellow-400" />
    </div>
)

// Add this to the export so it's rendered somewhere (can be at the end)
export { TailwindColorSafelist }