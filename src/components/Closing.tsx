import type { ReactNode } from 'react'
import './Closing.css'

type ClosingProps = {
  children: ReactNode
}

export function Closing({ children }: ClosingProps) {
  return (
    <div className="closing">
      <div className="closing__media" aria-hidden="true">
        <img
          src="/footer-couple.png"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="closing__veil" />
      </div>
      <div className="closing__content">{children}</div>
    </div>
  )
}
