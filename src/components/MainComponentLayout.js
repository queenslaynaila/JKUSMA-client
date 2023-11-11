import NavBar from './Navbar'
import Footer from './Footer'
const MainComponentLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover relative font-poly"
        style={{ backgroundImage: "url('/dinner.jpg')" }}
      >
        {children}
      </div>
    </div>
  )
}

export default MainComponentLayout
