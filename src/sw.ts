export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const baseUrl = new URL('.', window.location.href)
      const swUrl = new URL('sw.js', baseUrl)
      navigator.serviceWorker.register(swUrl.pathname).catch((error) => {
        console.error('Service worker registration failed', error)
      })
    })
  }
}
