# HxMeet Core Starter

This project is the starter or the showcase project of the `<HxMeet>` component.
It is open-source, allowing the creation of custom, tailored conferencing solutions.

> [!NOTE]
> This is a vuejs project based on [hxmeet-core-starter](https://github.com/hxmeet/hxmeet-core-starter) and it contains
> a server function (build with nitro) to create the livekit tokens, because the API keys and secrets should not shared 
> on the client side.

## Live Demo

👉 Try it out at: [https://hxmeet.io](https://hxmeet.io)

## Screenshot

![HxMeet Screenshot](https://hxmeet.io/changelog/roundtable_1.jpg)

## ✨ Conferencing Features

- Low-latency WebRTC video & audio
- Screen sharing
- Chat
- Different layout options
- Participant list
- Media controls (mute, camera off)
- Support keyboard shortcuts
- Dark mode
- Mobile friendly

## 🛠️ Developer options

- Themable (set your own color schema)
- Embeddable in your app or website
- Customizable
    - Hook into the component events
    - Add extensions
- Add test participants
- Open-source (MIT license)

## Installation ans starting

### Requirements
- [Node.js](https://nodejs.org/) (v22 recommended)
- [npm](https://www.npmjs.com/)
- [LiveKit](https://livekit.io) account (later you can switch to an self-hosted livekit solution)

### Starting

The project contains a simple start page where you enter your participant name and start a conference.

1. Checkout project and install dependencies: `npm install`
2. Copy the `.env.example` file to `.env`
3. Enter your LiveKit API data there:

```bash
# ----------------------------------------
# Client side variables
# ----------------------------------------
# Livekit-Cloud: Go to 'Settings/Project' and take the 'Project URL'
VITE_LIVEKIT_URL=<your-livekit-url>

# ----------------------------------------
# Server side variables
# ----------------------------------------
# Livekit-Cloud: Go to 'Settings/API-Keys' and create an 'API Key'
# The NITRO_LIVEKIT_SERVICE_URL is the same as the VITE_LIVEKIT_URL but starts with 'https://'
NITRO_LIVEKIT_SERVICE_URL=<your-livekit-url>
NITRO_LIVEKIT_API_KEY=<your-livekit-api-key>
NITRO_LIVEKIT_SECRET=<your-livekit-secret>
```

4. Start the test page: `npm run dev`
5. Open [http://localhost:5173](http://localhost:5173) in your browser

To invite other participants, you can share the URL (the path starts with `/room/`) with them.

## License

Licensed under the MIT License.
