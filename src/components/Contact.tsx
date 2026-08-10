import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import './Contact.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="iletisim" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <motion.div
          className="contact__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">İletişim</span>
          <h2 className="section-title" id="contact-title">
            Organizasyon teklifi alın
          </h2>
          <p className="section-lead">
            Düğün, kına, sünnet veya nişan tarihinizi ve hayalinizdeki atmosferi paylaşın; size özel
            bir organizasyon teklifi hazırlayalım.
          </p>

          <ul className="contact__info">
            <li>
              <span>WhatsApp</span>
              <a href={site.whatsapp}>{site.telephoneDisplay}</a>
            </li>
            <li>
              <span>E-posta</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Organizasyon teklif formu"
        >
          <label>
            Ad Soyad
            <input name="name" type="text" required autoComplete="name" placeholder="Adınız" />
          </label>
          <label>
            Telefon
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="05xx xxx xx xx"
            />
          </label>
          <label>
            Etkinlik Türü
            <select name="type" defaultValue="Düğün">
              <option>Düğün</option>
              <option>Kına</option>
              <option>Sünnet</option>
              <option>Nişan</option>
              <option>Doğum Günü</option>
              <option>Diğer</option>
            </select>
          </label>
          <label>
            Mesajınız
            <textarea
              name="message"
              rows={4}
              placeholder="Tarih, mekan ve kısaca hayaliniz..."
            />
          </label>

          <button className="btn btn-primary" type="submit">
            {sent ? 'Talebiniz alındı' : 'Teklif İste'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
