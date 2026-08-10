import { motion } from 'framer-motion'
import './Preloader.css'

export function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <motion.div
        className="preloader__inner"
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, y: -12, transition: { duration: 0.4 } }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
      >
        <motion.span
          className="preloader__eyebrow"
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          Event24
        </motion.span>
        <motion.p
          className="preloader__title"
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          Anları sahneye taşıyoruz
        </motion.p>
        <motion.div
          className="preloader__bar"
          variants={{
            hidden: { scaleX: 0 },
            show: {
              scaleX: 1,
              transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
            },
          }}
        />
      </motion.div>
    </motion.div>
  )
}
