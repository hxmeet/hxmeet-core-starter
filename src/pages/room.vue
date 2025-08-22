<template>
  <UContainer v-if="status === 'name'" class="max-w-2xl">
    <UCard class="mt-32">
      <div class="font-bold mb-3">HxMeet - Willkommen im Raum {{ roomName }}</div>
      <div class="my-8">
        <UFormField label="Name" required>
          <UInput v-model="name" placeholder="Enter your participant name" class="w-full" />
        </UFormField>
        <div class="my-8">
          <UButton :loading="loading" size="xl" @click="joinMeeting" block>Meeting beitreten</UButton>
        </div>
      </div>
    </UCard>
  </UContainer>
  <HxMeeting v-else-if="status === 'meeting'" v-bind="meetingProps"/>
  <UContainer v-else class="max-w-2xl">
    Ende
  </UContainer>
</template>

<script setup lang="ts">
import { HxMeeting } from 'hxmeet-core-component'
import { useRoute } from 'vue-router'
import {useConference} from "../composables/conference";
import {computed, onMounted, ref} from "vue";

const route = useRoute()
const roomName = route.params.room + ''
const status = ref<'name'|'meeting'|'end'>("name")
const name = ref("Jane Smith")
const loading = ref(false)

onMounted(() => {
  if (token.value) status.value = "meeting"
})

const { token, generateToken } = useConference();

const joinMeeting = async () => {
  loading.value = true
  await generateToken(roomName, name.value);
  loading.value = false
  status.value = "meeting"
}

const meetingProps = computed(() => ({
  livekitUrl: import.meta.env.VITE_LIVEKIT_URL,
  livekitToken: token.value
}));
</script>