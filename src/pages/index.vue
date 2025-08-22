<template>
  <UContainer class="max-w-2xl">
    <UCard class="mt-32">
      <div class="font-bold mb-3">HxMeet - Video conferencing</div>
      <div>
        Das ist das Starter-Projekt zu
        <a href="https://github.com/hxmeet/hxmeet-core-component" class="underline" target="_blank">HxMeet-Core-Component</a>
        und zeigt die Verwendung der HxMeeting-Komponente.
      </div>
      <div class="my-8">
        <UFormField label="Name" required>
          <UInput v-model="name" placeholder="Enter your participant name" class="w-full" />
        </UFormField>
        <div class="my-8">
          <UButton :loading="loading" size="xl" @click="startMeeting" block>Meeting starten</UButton>
        </div>
      </div>
      <div>
        Um an einem existierenden Meeting teilnehmen zu können benötigen Sie den Teilnahme-Link.
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import {useRouter} from "vue-router";
import {useConference} from "../composables/conference";

const name = ref("John Smith")
const loading = ref(false)

const router = useRouter();
const { generateToken } = useConference();

const startMeeting = async () => {
  loading.value = true
  const roomName = uuidv4();
  await generateToken(roomName, name.value);
  loading.value = false
  await router.push("/room/" + roomName);
}
</script>

