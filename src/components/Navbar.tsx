import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = [
  { href: '#galeri', label: 'Galeri' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#yaklasim', label: 'Yaklaşım' },
  { href: '#iletisim', label: 'İletişim' },
]

type NavbarProps = {
  ready?: boolean
}

export function Navbar({ ready = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      className={`nav ${scrolled || open ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}
      initial={{ y: -28, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: -28, opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: ready ? 0.05 : 0 }}
    >
      <div className="nav__inner container">
        <a href="#ust" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">Event24</span>
          <span className="nav__brand-sub">Organizasyon</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Ana menü">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              initial={false}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: open ? 0.08 + i * 0.05 : 0, duration: 0.45 }}
            >
              {link.label}
            </motion.a>
          ))}
          <a className="btn btn-primary nav__cta" href="#iletisim" onClick={() => setOpen(false)}>
            Teklif Al
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}
