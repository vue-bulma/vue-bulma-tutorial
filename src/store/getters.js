const app = state => state.app
const device = state => state.app.device
const sidebar = state => state.app.sidebar
const effect = state => state.app.effect
const current = state => state.app.current

export {
  app,
  device,
  sidebar,
  effect,
  current
}
