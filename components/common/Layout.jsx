import SmoothScroll from "@/logic/LenisScroll"
import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
  return (
    <>
    <SmoothScroll>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </SmoothScroll>
    </>
  )
}

export default Layout
