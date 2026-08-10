import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import './Services.css'

const services = [
  {
    title: 'Düğün',
    text: 'Mekândan masaya, ışık tasarımından akış yönetimine kadar tam kapsamlı düğün prodüksiyonu.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Kına',
    text: 'Geleneksel dokuyu çağdaş sahne diliyle buluşturan kına gecesi konseptleri.',
    image:
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Sünnet',
    text: 'Aileye özel temalar, karşılama alanları ve çocuk odaklı keyifli sünnet organizasyonları.',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Nişan & Özel Gün',
    text: 'Nişan, doğum günü ve özel davetler için zarif, ölçülü ve hatırlanır atmosferler.',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80',
  },
]

export function Services() {
  return (
    <section className="services" id="hizmetler">
      <div className="container">
        <Reveal className="services__intro">
          <span className="section-label">Hizmetler</span>
          <h2 className="section-title">Düğün ve özel gün organizasyonu</h2>
          <p className="section-lead">
            Event24; düğün, kına, sünnet, nişan ve doğum günü organizasyonunu fotoğraf karesine değer
            bir deneyime dönüştürür.
          </p>
        </Reveal>

        <p className="services__swipe" aria-hidden="true">
          Kaydırarak gez <span>→</span>
        </p>

        <div className="services__rail">
          <div className="services__list">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="services__card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(index * 0.06, 0.24),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="services__visual">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="services__copy">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
