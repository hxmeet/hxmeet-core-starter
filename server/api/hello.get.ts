import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const { livekitServiceUrl } = useRuntimeConfig(event)
  return { msg: 'Hello from Nitro! - ' + livekitServiceUrl }
})
