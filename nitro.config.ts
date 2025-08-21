import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'node-server', // lokal & auf eigenen Servern
  // Alternativen: 'vercel', 'netlify', 'cloudflare-pages' etc.
  srcDir: 'server',      // convention: dein API-Code liegt unter /server
  runtimeConfig: {
    livekitServiceUrl: '',
    livekitApiKey: '',
    livekitSecret: ''
  }
})
