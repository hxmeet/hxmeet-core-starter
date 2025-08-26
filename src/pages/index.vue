<template>
  <UContainer class="max-w-2xl">
    <UCard class="mt-32">
      <div class="font-bold mb-3">HxMeet - Video conferencing</div>
      <div>
        This is the starter project of
        <a href="https://github.com/hxmeet/hxmeet-core-component" class="underline" target="_blank">HxMeet-Core-Component</a>
        and shows the usage of the component <i>HxMeeting</i> in a Vue.js project.
      </div>
      <div class="my-8">
        <UFormField label="Name" required>
          <UInput v-model="name" placeholder="Enter your participant name" class="w-full" />
        </UFormField>
        <div class="my-8">
          <UButton :loading="loading" size="xl" @click="startMeeting" block>Start meeting</UButton>
        </div>
      </div>
      <div>
        You need the participant link to join an existing meeting.
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

