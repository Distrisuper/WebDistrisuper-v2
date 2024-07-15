import Header from '../Header'
import Banner from '../Banner'
import Footer from '../Footer'
import Cursor from '../Features/Cursor'
import Preloader from '../Features/Preloader'
import ScrollToTop from '../Features/ScrollToTop'

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            {children}
            <Footer />
        </>
    )
}

export default Layout;
