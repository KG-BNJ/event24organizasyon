import { site } from '../data/site'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div>
          <strong>{site.shortName}</strong>
          <span>Organizasyon</span>
        </div>
        <p>
          Düğün organizasyonu · Kına · Sünnet · Nişan · Özel günler — {site.areaServed}
        </p>
        <div className="footer__meta">
          <a href={`tel:${site.telephoneE164}`}>{site.telephoneDisplay}</a>
          <a href="#ust">Yukarı çık</a>
        </div>
      </div>
      <div className="container footer__legal">
        <p>
          © {year} {site.name}. Event24 Organizasyon — düğün, kına, sünnet ve nişan organizasyonu
          hizmetleri.
        </p>
      </div>
    </footer>
  )
}
