export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined' && (window as any).Waves) {
    const Waves = (window as any).Waves
    Waves.init()
    Waves.attach('.waves')
  }
})
