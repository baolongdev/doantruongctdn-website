import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Meta />
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
