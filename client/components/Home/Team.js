"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    Users,
    Code,
    Palette,
    Shield,
    TrendingUp,
    Mail,
    Github,
    Linkedin,
    User,
} from "lucide-react"
import Link from "next/link"

const Team = () => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
    const [hoveredMember, setHoveredMember] = useState(null)

    const teamMembers = [
        {
            name: "Nayan samaddar Raudra",
            role: "CEO",
            image: "/ceo.jpg",
            specialty: "Business Strategy",
            skills: [
                "Leadership",
                "Strategy",
                "Business Development",
                "Client Relations",
            ],
            bio: "Visionary leader with 5+ years of experience in digital transformation and business growth.",
            social: {
                email: "mawfinexinnovations@gmail.com",
                linkedin: "#",
                github: "#",
            },
        },
        {
            name: "Mahade Adib",
            role: "HR Manager",
            image: "/hr.jpg",
            specialty: "Business Management",
            skills: [
                "Recruitment",
                "Employee Relations",
                "Performance Management",
                "HR Strategy",
                "Training & Development",
            ],
            bio: "Expert HR manager with a focus on talent acquisition and employee engagement.",
            social: {
                email: "apply.mawfinex.world@gmail.com",
                linkedin: "https://www.linkedin.com/in/mahadi-zulfiker/",
                github: "#",
            },
        },
        {
            name: "Akram Hossain",
            role: "Core Developer",
            image: "/akram_hossain.jpg",
            specialty: "Web Development",
            skills: [
                "JavaScript",
                "React",
                "Node.js",
                "CSS",
                "HTML",
            ],
            bio: "Creative developer focused on building robust and scalable web applications.",
            social: {
                email: "md.akramhossainjisan@gmail.com",
                linkedin: "https://www.linkedin.com/in/akram-hossain-/",
                github: "https://github.com/AkramHossain0",
            },
        },
        {
            name: "Sun Podder",
            role: "Backend Developer",
            image: "/sun.png",
            specialty: "Backend Development",
            skills: [
                "Node.js",
                "Express",
                "PostgreSQL",
                "API Development",
                "Microservices",
            ],
            bio: "Backend developer with a passion for building scalable and efficient server-side applications.",
            social: {
                email: "contact.sunpodder09@gmail.com",
                linkedin: "https://linkedin.com/in/sunpodder",
                github: "https://github.com/SunPodder",
            },
        },
        {
            name: "Minhajul Islam",
            role: "Automation Specialist",
            image: "/xspoilt.jpg",
            specialty: "Automation & Scripting",
            skills: [
                "Python",
                "Selenium",
                "CI/CD",
                "Shell Scripting",
                "Docker",
            ],
            bio: "Automation specialist with a knack for streamlining processes and enhancing productivity.",
            social: {
                email: "dev@minhajuldev.me",
                linkedin: "https://www.linkedin.com/in/xsopilt/",
                github: "https://github.com/xspoilt-dev/",
            },
        },
        {
            name: "Shuvoshree",
            role: "Growth Architect",
            image: "/shuvoshree.jpg",
            specialty: "Marketing Management",
            skills: [
                "SEO/SEM",
                "Social Media",
                "Content Strategy",
                "Analytics",
                "Email Marketing",
            ],
            bio: "Growth architect focused on driving user acquisition and engagement through innovative strategies.",
            social: {
                email: "troyeetroyee14@gmail.com",
                linkedin: "#",
                github: "#",
            },
        },
    ]

    const getRoleIcon = (role) => {
        if (role.includes("Developer")) return Code
        if (role.includes("Designer")) return Palette
        if (role.includes("Security")) return Shield
        if (role.includes("Marketing")) return TrendingUp
        return Users
    }

    const getRoleColor = (role) => {
        if (role.includes("Developer")) return "neon-cyan"
        if (role.includes("Designer")) return "neon-green"
        if (role.includes("Security")) return "red-400"
        if (role.includes("Marketing")) return "yellow-400"
        return "neon-cyan"
    }

    return (
        <section
            id="team"
            ref={ref}
            className="py-20 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Team & <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Meet the digital hunters behind MawFiNex. Our diverse
                        team of experts brings together creativity, technical
                        excellence, and strategic thinking to deliver
                        exceptional results.
                    </p>
                </motion.div>

                {/* Team Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { number: "60+", label: "Team Members" },
                        { number: "50+", label: "Skills Combined" },
                        { number: "1700+", label: "Projects Delivered" },
                        { number: "24/7", label: "Available Support" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.4 + index * 0.1,
                            }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:border-neon-cyan/30 transition-colors"
                        >
                            <div className="text-3xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Team Members Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {teamMembers.map((member, index) => {
                        const RoleIcon = getRoleIcon(member.role)
                        const roleColor = getRoleColor(member.role)

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.8 + index * 0.1,
                                }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 group hover:transform hover:scale-105"
                                onMouseEnter={() => setHoveredMember(index)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                {/* Profile Image */}
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-neon-cyan/50 transition-colors">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src =
                                                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTIwIiByPSI0MCIgZmlsbD0iIzY2NiIvPjxwYXRoIGQ9Im05MCAyNTAgYzAtNDAgNDAteNAgNjAtODAgczYwIDgwIDYwIDgwIHYgNDAiIGZpbGw9IiM2NjYiLz48L3N2Zz4="
                                            }}
                                        />
                                    </div>

                                    {/* Role Icon */}
                                    <div
                                        className={`absolute -top-2 -right-2 w-10 h-10 bg-${roleColor}/20 rounded-full flex items-center justify-center border-2 border-${roleColor}`}
                                    >
                                        <RoleIcon
                                            className={`w-5 h-5 text-${roleColor}`}
                                        />
                                    </div>
                                </div>

                                {/* Member Info */}
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-neon-cyan transition-colors">
                                        {member.name}
                                    </h3>
                                    <p
                                        className={`text-${roleColor} font-medium mb-2`}
                                    >
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {member.specialty}
                                    </p>
                                </div>

                                {/* Skills or Bio (toggle on hover) */}
                                <motion.div
                                    className="mb-4 min-h-[60px]"
                                    initial={false}
                                    animate={{
                                        opacity:
                                            hoveredMember === index ? 1 : 1,
                                        y: hoveredMember === index ? 0 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {hoveredMember === index ? (
                                        <div>
                                            <p className="text-sm text-gray-300 mb-3">
                                                {member.bio}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills
                                                .slice(0, 4)
                                                .map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            {member.skills.length > 4 && (
                                                <span className="text-xs bg-neon-cyan/20 px-2 py-1 rounded-full text-neon-cyan">
                                                    +{member.skills.length - 4}{" "}
                                                    more
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </motion.div>

                                {/* Social Links */}
                                <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                                    <Link
                                        href={`mailto:${member.social.email}`}
                                        className="p-2 bg-white/5 rounded-lg hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Mail className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href={member.social.linkedin}
                                        className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href={member.social.github}
                                        className="p-2 bg-white/5 rounded-lg hover:bg-gray-500/20 hover:text-gray-300 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Github className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Join Team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <Users className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Want to Join Our Team?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            We're always looking for talented individuals who
                            share our passion for digital excellence. Join us in
                            hunting down the next big opportunity!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                onClick={() =>
                                    document
                                        .getElementById("apply")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="btn-primary flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <User className="w-5 h-5" />
                                Apply Now
                            </motion.button>
                            <motion.button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="btn-secondary flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Team
