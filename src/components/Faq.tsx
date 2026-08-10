import { motion } from 'framer-motion'
import { faqItems } from '../data/faq'
import './Faq.css'

export function Faq() {
  return (
    <section className="faq" id="sss" aria-labelledby="faq-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Sık Sorulanlar</span>
          <h2 className="section-title" id="faq-title">
            Merak edilenler
          </h2>
          <p className="section-lead">
            Düğün organizasyonu, kına ve özel gün planlama sürecine dair en çok sorulan sorular.
          </p>
        </motion.div>

        <div className="faq__list" itemScope itemType="https://schema.org/FAQPage">
          {faqItems.map((item, index) => (
            <motion.details
              key={item.q}
              className="faq__item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <summary itemProp="name">{item.q}</summary>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{item.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
