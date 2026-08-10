import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Approach.css'

const steps = [
  {
    title: 'Keşif Görüşmesi',
    text: 'Tarihinizi, mekânınızı ve tarzınızı dinleriz. Misafir sayısı, renk dili ve önceliklerinizi netleştirerek net bir yol haritası çıkarırız.',
  },
  {
    title: 'Konsept & Tasarım',
    text: 'Floral, ışık, masa düzeni ve sahne akışını tek bir görsel dilde birleştirir; onayınıza sunulan moodboard ile her detayı görünür kılarız.',
  },
  {
    title: 'Prodüksiyon Günü',
    text: 'Kurulumdan karşılama anına, müzikten zaman çizelgesine kadar ekibimiz sahne arkasında yönetir; siz yalnızca anın içinde kalırsınız.',
  },
]

export function Approach() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section className="approach" id="yaklasim" aria-labelledby="approach-title" ref={ref}>
      <div className="approach__panel">
        <motion.div className="approach__glow" style={{ y: glowY }} aria-hidden="true" />
        <div className="container approach__grid">
          <motion.div
            className="approach__copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Yaklaşım</span>
            <h2 className="section-title" id="approach-title">
              Planlı, sakin, hatırlanır
            </h2>
            <p className="section-lead">
              Event24’te her organizasyon üç adımda ilerler: önce sizi dinleriz, sonra konsepti
              birlikte şekillendiririz, günü ise görünmez bir disiplinle yönetiriz.
            </p>
            <p className="approach__quote">
              “Misafirleriniz atmosferi hisseder; sizin tek işiniz o anın içinde kalmaktır.”
            </p>
          </motion.div>

          <div className="approach__steps">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
