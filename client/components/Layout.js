import Navigation from "./Navigation"
import FloatingContact from "./FloatingContact"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />
            <main>{children}</main>
            <FloatingContact />
            <Footer />
        </div>
    )
}

export default Layout
