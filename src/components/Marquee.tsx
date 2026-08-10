import './Marquee.css'

const items = [
  'Düğün',
  'Kına',
  'Sünnet',
  'Nişan',
  'Doğum Günü',
  'Özel Davet',
  'Konsept Tasarım',
  'Gün Yönetimi',
]

export function Marquee() {
  const loop = [...items, ...items]

  return (
    <section className="marquee" aria-label="Hizmet başlıkları">
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <i aria-hidden="true">✦</i>
          </span>
        ))}
      </div>
    </section>
  )
}
