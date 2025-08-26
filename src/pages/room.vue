<template>
  <UContainer v-if="status === 'name'" class="max-w-2xl">
    <UCard class="mt-32">
      <div class="font-bold mb-3">HxMeet - Welcome to the meeting {{ roomName }}</div>
      <div class="my-8">
        <UFormField label="Name" required>
          <UInput v-model="name" placeholder="Enter your participant name" class="w-full" />
        </UFormField>
        <div class="my-8">
          <UButton :loading="loading" size="xl" @click="joinMeeting" block>Join meeting</UButton>
        </div>
      </div>
    </UCard>
  </UContainer>

  <!-- ---------------------------------------- -->
  <!-- This is the video conferencing component -->
  <!-- ---------------------------------------- -->
  <HxMeeting v-else-if="status === 'meeting'" v-bind="meetingProps"/>
  <!-- ---------------------------------------- -->

  <UContainer v-else class="max-w-2xl">
    <UCard class="mt-32">
      <div class="font-bold mb-3">HxMeet</div>
      <div class="my-8">
        <div>
          You left the meeting
        </div>
        <div class="my-8">
          <UButton size="xl" @click="back" block>Back</UButton>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { HxMeeting } from 'hxmeet-core-component'
import {useRoute, useRouter} from 'vue-router'
import {useConference} from "../composables/conference";
import {computed, onMounted, ref} from "vue";
import {type HxMeetingStatus} from "hxmeet-core-component";

const route = useRoute()
const router = useRouter();
const roomName = route.params.room + ''
const status = ref<'name'|'meeting'|'end'>("name")
const name = ref("Jane Smith")
const loading = ref(false)

const { token, generateToken } = useConference();
const changingString = ref("Hallo")

onMounted(() => {
  if (token.value) status.value = "meeting"
  setInterval(() => {
    changingString.value = "Zeit: " + new Date().toLocaleTimeString()
  }, 1000)
});

const joinMeeting = async () => {
  loading.value = true
  await generateToken(roomName, name.value);
  loading.value = false
  status.value = "meeting"
}

const back = async () => {
  await router.push("/");
  }

const meetingProps = computed(() => ({
  livekitUrl: import.meta.env.VITE_LIVEKIT_URL,
  livekitToken: token.value,
  extensions: {
    'sidebar.info.body': changingString
  },
  events: {
    'status': (hxStatus: HxMeetingStatus) => {
      console.log("Status changed", hxStatus)
      if (hxStatus === 'end') {
        status.value = "end"
      }
    }
  }
}));
</script>