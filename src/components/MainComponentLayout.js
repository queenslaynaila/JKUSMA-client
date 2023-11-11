import NavBar from './Navbar'
import Footer from './Footer'
const MainComponentLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default MainComponentLayout
