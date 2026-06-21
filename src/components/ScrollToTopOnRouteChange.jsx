import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    try{
      if(typeof window.gtag === 'function'){
        // send a SPA page_view event for analytics
        window.gtag('event', 'page_view', { page_path: pathname })
      }
    }catch(e){ /* ignore */ }
  }, [pathname])

  return null
}
