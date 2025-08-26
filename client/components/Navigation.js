"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Home,
    User,
    Settings,
    TrendingUp,
    Package,
    Users,
    FileText,
    Phone,
    Calendar,
    Menu,
    X,
} from "lucide-react"
import { useRouter } from "next/router"

const Navigation = () => {
    const [activeSection, setActiveSection] = useState("home")
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [pathname, setPathname] = useState("")
    const router = useRouter()

    const navItems = [
        { id: "home", label: "Home", icon: Home, isSection: true, href: "/" },
        {
            id: "services",
            label: "Services",
            icon: Settings,
            isSection: false,
            href: "/services",
        },
        {
            id: "careers",
            label: "Careers",
            icon: FileText,
            isSection: false,
            href: "/careers",
        },
        {
            id: "consultation",
            label: "Book Consultation",
            icon: Calendar,
            isSection: false,
            href: "/consultation",
        },
        {
            id: "contact",
            label: "Contact",
            icon: Phone,
            isSection: true,
            href: "/",
        },
    ]

    useEffect(() => {
        // Update pathname when route changes (including back/forward)
        const handleRouteChange = () => {
            if (typeof window !== "undefined") {
                setPathname(window.location.pathname)
            }
        }

        // Set initial pathname
        handleRouteChange()

        // Listen to route changes for back/forward navigation
        router.events.on("routeChangeComplete", handleRouteChange)

        const handleScroll = () => {
            const sectionItems = navItems.filter((item) => item.isSection)
            const sections = sectionItems.map((item) =>
                document.getElementById(item.id),
            )
            const scrollPosition = window.scrollY + 100

            // Update scroll state for navbar background
            setScrolled(window.scrollY > 50)

            // Update scroll progress
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight
            const progress = Math.min(window.scrollY / totalHeight, 1)
            setScrollProgress(progress)

            sections.forEach((section, index) => {
                if (
                    section &&
                    section.offsetTop <= scrollPosition &&
                    section.offsetTop + section.offsetHeight > scrollPosition
                ) {
                    setActiveSection(sectionItems[index].id)
                }
            })
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Call once to set initial state

        return () => {
            window.removeEventListener("scroll", handleScroll)
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router])

    // Handle scrolling to section after route change using sessionStorage
    useEffect(() => {
        const handleRouteChangeComplete = () => {
            if (typeof window !== "undefined") {
                const pendingScroll = sessionStorage.getItem(
                    "pendingScrollSection",
                )
                if (pendingScroll) {
                    sessionStorage.removeItem("pendingScrollSection")
                    setTimeout(() => {
                        const element = document.getElementById(pendingScroll)
                        if (element) {
                            const offset = 80 // Account for fixed navbar height
                            const elementPosition = element.offsetTop - offset
                            window.scrollTo({
                                top: elementPosition,
                                behavior: "smooth",
                            })
                        }
                    }, 100) // Small delay to ensure page is loaded
                }
            }
        }

        router.events.on("routeChangeComplete", handleRouteChangeComplete)
        handleRouteChangeComplete() // Also run on initial load

        return () => {
            router.events.off("routeChangeComplete", handleRouteChangeComplete)
        }
    }, [router])

    const handleNavigation = (item) => {
        if (item.isSection) {
            // If section is on current page, scroll
            if (pathname === item.href) {
                const element = document.getElementById(item.id)
                if (element) {
                    const offset = 80 // Account for fixed navbar height
                    const elementPosition = element.offsetTop - offset
                    requestAnimationFrame(() => {
                        window.scrollTo({
                            top: elementPosition,
                            behavior: "smooth",
                        })
                    })
                }
            } else {
                // If section is on a different page, store scroll target in sessionStorage
                if (typeof window !== "undefined") {
                    sessionStorage.setItem("pendingScrollSection", item.id)
                }
                router.push(item.href)
            }
        } else {
            // Handle page navigation
            router.push(item.href)
        }
        setIsOpen(false)
    }

    const handleMobileMenuToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Top Navigation Bar */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-black/90 backdrop-blur-md border-b border-neon-cyan/20"
                        : "bg-transparent"
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            className="flex-shrink-0 cursor-pointer"
                            onClick={() => (window.location.href = "/")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h1 className="text-2xl font-bold gradient-text">
                                MawFiNex
                            </h1>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => handleNavigation(item)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors transition-bg transition-border duration-200
  ${
      (item.isSection && item.href == pathname && activeSection === item.id) ||
      (!item.isSection && pathname === item.href)
          ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
          : "text-gray-300 hover:text-white hover:bg-white/5"
  }
`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                onClick={handleMobileMenuToggle}
                                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle mobile menu"
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-black/95 backdrop-blur-md border-t border-neon-cyan/20"
                        >
                            <div className="px-4 py-4 space-y-1">
                                {navItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <motion.button
                                            key={item.id}
                                            onClick={() =>
                                                handleNavigation(item)
                                            }
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                                (item.isSection &&
                                                    activeSection ===
                                                        item.id) ||
                                                (!item.isSection &&
                                                    pathname === item.href)
                                                    ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                                                    : "text-gray-300 hover:text-white hover:bg-white/5"
                                            }`}
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.2,
                                                delay:
                                                    navItems.indexOf(item) *
                                                    0.05,
                                            }}
                                        >
                                            <Icon className="w-5 h-5" />
                                            {item.label}
                                        </motion.button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-green z-50 origin-left"
                style={{
                    scaleX: scrolled ? 1 : 0,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-16 left-0 h-0.5 bg-neon-cyan z-40 origin-left"
                style={{ width: `${scrollProgress * 100}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.1 }}
            />
        </>
    )
}

export default Navigation
