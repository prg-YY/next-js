import Nav from "./Nav"
import Meta from "./Meta"
import Header from "./Header"

import layoutStyles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
