import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, galleryItems, type GalleryCategory, type GalleryItem } from '../data/gallery'
import { startSmoothScroll, stopSmoothScroll } from '../lib/scroll'
import { Reveal } from './Reveal'
import './Gallery.css'

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>('Tümü')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      active === 'Tümü'
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  )

  const lightbox: GalleryItem | null =
    lightboxIndex === null ? null : filtered[lightboxIndex] ?? null

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length))
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) =>
          i === null ? 0 : (i - 1 + filtered.length) % filtered.length,
        )
      }
    }

    document.body.style.overflow = 'hidden'
    stopSmoothScroll()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      startSmoothScroll()
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxIndex, filtered.length])

  return (
    <section className="gallery" id="galeri">
      <div className="container">
        <Reveal className="gallery__header">
          <div>
            <span className="section-label">Portfolyo</span>
            <h2 className="section-title">Organizasyon Galerisi</h2>
            <p className="section-lead">
              Düğün, kına, sünnet ve nişan organizasyonlarından seçili sahneler; ışık, çiçek ve
              detaylarla kurduğumuz atmosferleri keşfedin.
            </p>
          </div>
          <p className="gallery__count">{filtered.length} anı</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="gallery__filters" role="tablist" aria-label="Galeri kategorileri">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={active === category}
                className={`gallery__filter ${active === category ? 'is-active' : ''}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="gallery__swipe" aria-hidden="true">
          Kaydırarak gez <span>→</span>
        </p>

        <div className="gallery__rail">
          <motion.div className="gallery__grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.button
                  layout
                  key={item.id}
                  className={`gallery__item ${item.tall ? 'gallery__item--tall' : ''}`}
                  onClick={() => setLightboxIndex(index)}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.03, 0.2),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="gallery__frame">
                    <img
                      src={item.image}
                      alt={`${item.category} organizasyonu — ${item.title}, ${item.location} | Event24`}
                      loading="lazy"
                      width={1200}
                      height={item.tall ? 1500 : 900}
                    />
                  </div>
                  <div className="gallery__meta">
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                    <em>{item.location}</em>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && lightboxIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.figure
              key={lightbox.id}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} />
              <figcaption>
                <div>
                  <span>{lightbox.category}</span>
                  <h3>{lightbox.title}</h3>
                  <p>{lightbox.location}</p>
                </div>
                <div className="lightbox__actions">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((i) =>
                        i === null ? 0 : (i - 1 + filtered.length) % filtered.length,
                      )
                    }
                    aria-label="Önceki"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length))
                    }
                    aria-label="Sonraki"
                  >
                    →
                  </button>
                  <button type="button" onClick={() => setLightboxIndex(null)} aria-label="Kapat">
                    Kapat
                  </button>
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
