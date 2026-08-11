import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Hero.css'

const heroImage = '/hero-couple.png'

type HeroProps = {
  ready?: boolean
}

export function Hero({ ready = true }: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 160])
  const imageScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const show = ready && !reduce

  return (
    <section className="hero" id="ust" ref={ref}>
      <div className="hero__media" aria-hidden="true">
        <motion.img
          src={heroImage}
          alt=""
          style={{ y: imageY, scale: imageScale }}
          initial={show ? { scale: 1.18, opacity: 0.7 } : false}
          animate={show ? { scale: 1.08, opacity: 1 } : undefined}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__veil" />
        <div className="hero__grain" />
      </div>

      <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="hero__eyebrow"
          initial={show ? { opacity: 0, y: 20 } : false}
          animate={show ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Düğün & özel gün organizasyonu
        </motion.p>

        <motion.h1
          className="hero__brand"
          initial={show ? { opacity: 0, y: 40 } : false}
          animate={show ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.28, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Event24
          <span>Organizasyon</span>
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={show ? { opacity: 0, y: 24 } : false}
          animate={show ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.48, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          Türkiye genelinde düğün, kına, sünnet ve nişan organizasyonu — her kutlamayı görsel bir
          hikâyeye dönüştürüyoruz.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={show ? { opacity: 0, y: 20 } : false}
          animate={show ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.66, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="btn btn-primary" href="#galeri">
            Galeriyi Keşfet
          </a>
          <a className="btn btn-ghost" href="#iletisim">
            Randevu Al
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#galeri"
        className="hero__scroll"
        initial={show ? { opacity: 0 } : false}
        animate={show ? { opacity: 1 } : undefined}
        transition={{ delay: 1.05, duration: 0.8 }}
      >
        <span>Kaydır</span>
        <i />
      </motion.a>
    </section>
  )
}
