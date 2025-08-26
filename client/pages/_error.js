import { motion } from "framer-motion"
import Link from "next/link"
import Head from "next/head"
import { AlertTriangle, Home, ArrowLeft, RefreshCw } from "lucide-react"

const ErrorPage = ({ statusCode, hasGetInitialPropsRun, err }) => {
    const getErrorMessage = () => {
        if (statusCode === 404) {
            return {
                title: "Page Not Found",
                message: "The page you're looking for doesn't exist or has been moved.",
                suggestion: "Check the URL or return to our homepage to find what you need."
            }
        }
        if (statusCode === 500) {
            return {
                title: "Server Error",
                message: "Something went wrong on our end. We're working to fix it.",
                suggestion: "Please try refreshing the page or come back later."
            }
        }
        return {
            title: "Something Went Wrong",
            message: statusCode ? `A ${statusCode} error occurred on server` : "An error occurred on client",
            suggestion: "Please try again or contact our support team if the problem persists."
        }
    }

    const error = getErrorMessage()

    return (
        <>
            <Head>
                <title>{`${statusCode || 'Error'} - MawFiNex | ${error.title}`}</title>
                <meta name="description" content={`Error ${statusCode || ''}: ${error.message}`} />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
                {/* Background Elements */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

                <div className="max-w-2xl mx-auto text-center relative z-10">
                    {/* Error Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                            <AlertTriangle className="w-12 h-12 text-red-400" />
                        </div>
                        
                        {statusCode && (
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-6xl md:text-8xl font-bold gradient-text mb-4"
                            >
                                {statusCode}
                            </motion.h1>
                        )}
                    </motion.div>

                    {/* Error Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {error.title}
                        </h2>
                        <p className="text-gray-300 text-lg mb-4">
                            {error.message}
                        </p>
                        <p className="text-gray-400">
                            {error.suggestion}
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/"
                                className="btn-primary flex items-center justify-center gap-2 px-6 py-3"
                            >
                                <Home className="w-5 h-5" />
                                Go Home
                            </Link>
                        </motion.div>

                        <motion.button
                            onClick={() => window.history.back()}
                            className="btn-secondary flex items-center justify-center gap-2 px-6 py-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </motion.button>

                        <motion.button
                            onClick={() => window.location.reload()}
                            className="bg-white/10 text-white border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RefreshCw className="w-5 h-5" />
                            Refresh
                        </motion.button>
                    </motion.div>

                    {/* Contact Support */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 pt-8 border-t border-white/10"
                    >
                        <p className="text-gray-400 mb-4">
                            Need help? Our support team is here for you.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="text-neon-cyan hover:text-neon-green transition-colors duration-300 font-semibold"
                            >
                                Contact Support →
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* MawFiNex Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="mt-8"
                    >
                        <Link href="/" className="text-2xl font-bold gradient-text">
                            MawFiNex
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default ErrorPage