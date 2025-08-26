import "../styles/globals.css"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import Layout from "../components/Layout"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AnimatePresence mode="wait">
                <Layout>
                    <Component {...pageProps} key={router.route} />
                </Layout>
            </AnimatePresence>
        </>
    )
}

export default MyApp
