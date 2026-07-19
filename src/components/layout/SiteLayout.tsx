import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { getProductBySlug } from '../../data/productDetails'
import { Footer } from '../Footer'
import { Header } from '../Header'

export function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })

    const productSlug = pathname.startsWith('/products/') ? pathname.split('/').at(-1) : undefined
    const product = getProductBySlug(productSlug)
    const pageTitle = product?.name
      ?? (pathname === '/products' ? 'All Products'
        : pathname === '/about' ? 'About Us'
          : pathname === '/contact' ? 'Contact Us'
            : pathname === '/' ? 'Premium Construction Materials'
              : 'Page Not Found')

    document.title = `${pageTitle} | Qtrix Global`
  }, [pathname])

  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
