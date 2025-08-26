import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRouter } from "next/router"
import {
    Calendar,
    Video,
    Phone,
    MapPin,
    Check,
    X,
    Clock,
    Users,
    Target,
} from "lucide-react"

const ConsultationPage = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
    const [formData, setFormData] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const router = useRouter()

    // Auto-fill form data from URL parameters
    useEffect(() => {
        if (router.isReady) {
            const { service, package: packageName, price, consultationType, packageDetails } = router.query
            
            console.log("URL params:", { service, packageName, price, consultationType }) // Debug log
            
            if (service || packageName) {
                const newFormData = {}
                
                // Map service categories to the services list
                let mappedService = service
                if (service === "Business Growth Pack" || service === "Business Growth & Marketing") {
                    mappedService = "Business Growth & Marketing"
                } else if (service === "E-Commerce Solutions") {
                    mappedService = "E-commerce Solutions"
                } else if (service === "AI Services") {
                    mappedService = "AI Services"
                } else if (service === "App Development") {
                    mappedService = "Mobile App Development"
                } else if (service === "Video Editing Packages") {
                    mappedService = "Video Editing"
                } else if (service === "Design Packages") {
                    mappedService = "Graphics Design"
                } else if (service === "Brand Strategy & Consultation") {
                    mappedService = "Brand Strategy & Consultation"
                } else if (service === "Training & Skill Development") {
                    mappedService = "Training & Skill Development"
                } else if (service === "Business Automation Systems") {
                    mappedService = "Business Automation"
                } else if (service === "Cybersecurity") {
                    mappedService = "Cybersecurity"
                } else if (service === "NID & Number Services") {
                    mappedService = "NID & Number Services"
                }
                
                if (mappedService) newFormData.service = mappedService
                if (consultationType) newFormData.consultationType = consultationType
                
                // Pre-fill project details with package information
                if (packageName && price) {
                    let details = `I'm interested in the ${packageName} package (${price})`
                    
                    if (packageDetails) {
                        try {
                            const parsedDetails = JSON.parse(packageDetails)
                            details += `\n\nPackage Type: ${parsedDetails.type === 'apps' ? 'Mobile App Development' : parsedDetails.type === 'websites' ? 'Website Development' : parsedDetails.type === 'business-growth' ? 'Business Growth & Marketing' : parsedDetails.type === 'service-inquiry' ? mappedService : 'Custom Solution'}`
                            details += `\nDuration: ${parsedDetails.duration || 'To be discussed'}`
                            
                            if (parsedDetails.serviceCount) {
                                details += `\nService Count: ${parsedDetails.serviceCount}`
                            }
                            
                            if (parsedDetails.features && parsedDetails.features.length > 0) {
                                details += `\n\nKey Features:\n${parsedDetails.features.slice(0, 5).map(f => `• ${f}`).join('\n')}`
                                if (parsedDetails.features.length > 5) {
                                    details += `\n• And ${parsedDetails.features.length - 5} more features...`
                                }
                            }
                            
                            details += `\n\nPlease provide more details about this package and discuss how it can be customized for my specific needs.`
                        } catch (e) {
                            details += `\n\nPlease provide more details about this package and discuss pricing and customization options.`
                        }
                    }
                    
                    newFormData.details = details
                }
                
                console.log("Setting form data:", newFormData) // Debug log
                setFormData(prev => ({ ...prev, ...newFormData }))
            }
        }
    }, [router.isReady, router.query])

    const services = [
        "Web Development",
        "Mobile App Development", 
        "Business Growth & Marketing",
        "UI/UX Design",
        "Digital Marketing",
        "Cybersecurity",
        "Business Automation",
        "E-commerce Solutions",
        "API Integration",
        "SEO & Analytics",
        "Custom Software Development",
        "Video Editing",
        "Graphics Design",
        "POS Software",
        "AI Services",
        "Brand Strategy & Consultation",
        "Training & Skill Development",
        "WhatsApp Business Automation",
        "Telegram Bot Development",
        "Website Security",
        "NID & Number Services",
        "Other",
    ]

    const timeSlots = [
        "09:00 AM",
        "10:00 AM", 
        "11:00 AM",
        "12:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
    ]

    const meetingTypes = [
        {
            id: "video",
            label: "Video Call",
            icon: Video,
            description: "Google Meet or Zoom call",
        },
        {
            id: "phone",
            label: "Phone Call",
            icon: Phone,
            description: "Traditional phone conversation",
        },
        {
            id: "in-person",
            label: "In-Person",
            icon: MapPin,
            description: "Meet at our office in Dhaka",
        },
    ]

    const consultationTypes = [
        {
            title: "Free Consultation",
            duration: "30 minutes",
            price: "Free",
            description:
                "Perfect for initial project discussion and scope assessment",
            icon: Users,
            popular: true,
        },
        {
            title: "Strategy Session",
            duration: "60 minutes",
            price: "৳ 250",
            description:
                "Deep dive into your business goals and digital strategy",
            icon: Target,
            popular: false,
        },
        {
            title: "Technical Review",
            duration: "45 minutes",
            price: "৳ 150",
            description:
                "Review your existing systems and recommend improvements",
            icon: Clock,
            popular: false,
        },
    ]

    const handleInputChange = (field, value) => {
        console.log(`Setting ${field} to:`, value) // Debug log
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Validate required fields
        if (!formData.consultationType) {
            setSubmitStatus("error")
            setIsSubmitting(false)
            return
        }

        try {
            // In production, API routes are handled by the same domain via Traefik
            // In development, Next.js rewrites will proxy to the Express server
            const res = await fetch('/api/consultation', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    consultationType: formData.consultationType,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    service: formData.service,
                    date: formData.date,
                    time: formData.time,
                    meetingType: formData.meetingType,
                    details: formData.details
                }),
            })
            
            const data = await res.json()
            
            if (res.ok) {
                setSubmitStatus("success")
                setFormData({})
                // Clear URL parameters after successful submission
                router.replace('/consultation', undefined, { shallow: true })
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
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />

                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Book Your{" "}
                            <span className="gradient-text">Consultation</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Ready to transform your business digitally? Schedule
                            a consultation with our experts to discuss your
                            project requirements and discover how we can help
                            you achieve your goals.
                        </p>
                        
                        {/* Show package selection notice if came from package */}
                        {router.query.package && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-6 p-4 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg max-w-md mx-auto"
                            >
                                <p className="text-neon-cyan font-semibold">
                                    📦 {router.query.package} Package Selected
                                </p>
                                <p className="text-sm text-gray-300 mt-1">
                                    Form has been pre-filled with package details
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Consultation Types */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        {consultationTypes.map((type, index) => {
                            const Icon = type.icon
                            return (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    onClick={() =>
                                        handleInputChange(
                                            "consultationType",
                                            type.title,
                                        )
                                    }
                                    className={`relative p-6 rounded-xl border transition-all duration-300 text-left ${
                                        formData.consultationType === type.title
                                            ? "bg-neon-cyan/20 border-neon-cyan"
                                            : "bg-white/5 border-white/10 hover:border-white/30"
                                    }`}
                                >
                                    {type.popular && (
                                        <div className="absolute -top-2 -right-2 bg-neon-green text-black px-3 py-1 rounded-full text-xs font-bold">
                                            Popular
                                        </div>
                                    )}
                                    <Icon
                                        className={`w-8 h-8 mb-4 ${
                                            formData.consultationType === type.title
                                                ? "text-neon-cyan"
                                                : "text-gray-400"
                                        }`}
                                    />
                                    <h3 className="font-semibold text-lg mb-2">
                                        {type.title}
                                    </h3>
                                    <p className="text-2xl font-bold text-neon-green mb-2">
                                        {type.price}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-3">
                                        {type.duration}
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        {type.description}
                                    </p>
                                </motion.button>
                            )
                        })}
                    </motion.div>

                    {/* Booking Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            Schedule Your Consultation
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Full Name *
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
                                    className="form-input w-full"
                                    required
                                />
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
                                    className="form-input w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Company/Organization
                                </label>
                                <input
                                    type="text"
                                    value={formData.company || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "company",
                                            e.target.value,
                                        )
                                    }
                                    className="form-input w-full"
                                    placeholder="Optional"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-3">
                                Services Needed *
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {services.map((service, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => {
                                            console.log("Service clicked:", service) // Debug log
                                            handleInputChange("service", service)
                                        }}
                                        className={`p-3 rounded-lg border text-sm transition-all ${
                                            formData.service === service
                                                ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                                                : "bg-white/5 border-white/20 hover:border-white/40 text-gray-300"
                                        }`}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                            {/* Debug display */}
                            {formData.service && (
                                <p className="text-xs text-neon-green mt-2">
                                    Selected: {formData.service}
                                </p>
                            )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Preferred Date *
                                </label>
                                <input
                                    type="date"
                                    value={formData.date || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "date",
                                            e.target.value,
                                        )
                                    }
                                    className="form-input w-full"
                                    min={new Date().toISOString().split("T")[0]}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Preferred Time *
                                </label>
                                <select
                                    value={formData.time || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "time",
                                            e.target.value,
                                        )
                                    }
                                    className="form-input w-full"
                                    required
                                >
                                    <option value="">Select time</option>
                                    {timeSlots.map((slot, index) => (
                                        <option key={index} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-3">
                                Meeting Type *
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {meetingTypes.map((type) => {
                                    const Icon = type.icon
                                    return (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() =>
                                                handleInputChange(
                                                    "meetingType",
                                                    type.id,
                                                )
                                            }
                                            className={`p-4 rounded-lg border transition-all text-left ${
                                                formData.meetingType === type.id
                                                    ? "bg-neon-green/20 border-neon-green text-neon-green"
                                                    : "bg-white/5 border-white/20 hover:border-white/40"
                                            }`}
                                        >
                                            <Icon className="w-6 h-6 mb-2" />
                                            <div className="font-medium">
                                                {type.label}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1">
                                                {type.description}
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium mb-2">
                                Project Details *
                            </label>
                            <textarea
                                value={formData.details || ""}
                                onChange={(e) =>
                                    handleInputChange("details", e.target.value)
                                }
                                className="form-input w-full h-32 resize-none"
                                placeholder="Please describe your project, goals, timeline, and any specific requirements..."
                                required
                            />
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
                                    <Calendar className="w-5 h-5" />
                                    Book Consultation
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
                                    ? "Consultation booked successfully! We'll send you a confirmation email shortly."
                                    : "Something went wrong. Please try again."}
                            </span>
                        </div>
                    </motion.div>
                )}
            </section>
        </div>
    )
}

export default ConsultationPage