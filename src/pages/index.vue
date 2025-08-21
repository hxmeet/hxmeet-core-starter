<template>
  <HxMeeting v-bind="meetingProps"/>
</template>

<script setup lang="ts">
import { HxMeeting } from 'hxmeet-core-component'
const params = new URLSearchParams(window.location.search)

const meetingProps = {
  livekitUrl: params.get("livekitUrl") || import.meta.env.VITE_LIVEKIT_URL,
  livekitToken: params.get("livekitToken")  || import.meta.env.VITE_LIVEKIT_TOKEN,
}

</script>

<style scoped>
</style>