import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    FileText,
    Calendar,
    Users,
    Briefcase,
    Lightbulb,
    Heart,
    Clock,
    Video,
    Phone,
    MapPin,
    Send,
    Check,
    X,
} from "lucide-react"

const Apply = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
    const [activeTab, setActiveTab] = useState("application")
    const [formData, setFormData] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

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

    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
        "Cybersecurity",
        "Business Automation",
        "E-commerce Solutions",
        "API Integration",
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
        { id: "video", label: "Video Call", icon: Video },
        { id: "phone", label: "Phone Call", icon: Phone },
        { id: "in-person", label: "In-Person", icon: MapPin },
    ]

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
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
            id="apply"
            ref={ref}
            className="py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Apply &{" "}
                        <span className="gradient-text">Appointment</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to start your journey with us? Apply for
                        positions, schedule consultations, or book appointments
                        to discuss your digital transformation needs.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center gap-4 mb-12"
                >
                    <button
                        onClick={() => setActiveTab("application")}
                        className={`flex items-center gap-2 px-4 py-2 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                            activeTab === "application"
                                ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                                : "bg-white/5 border-white/20 text-white hover:border-white/40"
                        } border backdrop-blur-sm`}
                    >
                        <FileText className="w-5 h-5" />
                        <span>Applications</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("appointment")}
                        className={`flex items-center gap-2 px-4 py-2 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                            activeTab === "appointment"
                                ? "bg-neon-green/20 border-neon-green text-neon-green"
                                : "bg-white/5 border-white/20 text-white hover:border-white/40"
                        } border backdrop-blur-sm`}
                    >
                        <Calendar className="w-5 h-5" />
                        <span>Appointments</span>
                    </button>
                </motion.div>

                {/* Application Form */}
                {activeTab === "application" && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Application Types */}
                        <div className="grid md:grid-cols-4 gap-4 mb-8">
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

                        {/* Application Form */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            onSubmit={handleSubmit}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                        >
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Full Name
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
                                        className="form-input w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email Address
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
                                        Phone Number
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
                                        Location
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
                                        className="form-input w-full"
                                        placeholder="City, Country"
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
                                    placeholder="What is this application about?"
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
                                    placeholder="Tell us about yourself, your experience, or your proposal..."
                                    required
                                />
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium mb-2">
                                    Portfolio/Resume (Optional)
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        handleInputChange(
                                            "file",
                                            e.target.files[0],
                                        )
                                    }
                                    className="form-input w-full"
                                    accept=".pdf,.doc,.docx"
                                />
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
                    </motion.div>
                )}

                {/* Appointment Booking */}
                {activeTab === "appointment" && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                        >
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.appointmentName || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "appointmentName",
                                                e.target.value,
                                            )
                                        }
                                        className="form-input w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.appointmentEmail || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "appointmentEmail",
                                                e.target.value,
                                            )
                                        }
                                        className="form-input w-full"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-3">
                                    Service Required
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {services.map((service, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() =>
                                                handleInputChange(
                                                    "service",
                                                    service,
                                                )
                                            }
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
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.appointmentDate || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "appointmentDate",
                                                e.target.value,
                                            )
                                        }
                                        className="form-input w-full"
                                        min={
                                            new Date()
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Preferred Time
                                    </label>
                                    <select
                                        value={formData.appointmentTime || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "appointmentTime",
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
                                    Meeting Type
                                </label>
                                <div className="grid grid-cols-3 gap-4">
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
                                                className={`p-4 rounded-lg border transition-all text-center ${
                                                    formData.meetingType ===
                                                    type.id
                                                        ? "bg-neon-green/20 border-neon-green text-neon-green"
                                                        : "bg-white/5 border-white/20 hover:border-white/40"
                                                }`}
                                            >
                                                <Icon className="w-6 h-6 mx-auto mb-2" />
                                                <span className="text-sm">
                                                    {type.label}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium mb-2">
                                    Additional Notes
                                </label>
                                <textarea
                                    value={formData.appointmentNotes || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "appointmentNotes",
                                            e.target.value,
                                        )
                                    }
                                    className="form-input w-full h-24 resize-none"
                                    placeholder="Any specific requirements or topics you'd like to discuss?"
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
                                        Book Appointment
                                    </>
                                )}
                            </motion.button>
                        </motion.form>
                    </motion.div>
                )}

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
                                    ? "Form submitted successfully! We'll get back to you soon."
                                    : "Something went wrong. Please try again."}
                            </span>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default Apply
