import type Lenis from 'lenis'

let lenis: Lenis | null = null

export function setLenisInstance(instance: Lenis | null) {
  lenis = instance
}

export function stopSmoothScroll() {
  lenis?.stop()
}

export function startSmoothScroll() {
  lenis?.start()
}
