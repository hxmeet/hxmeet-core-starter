import { ref } from "vue";
import { ofetch } from 'ofetch';

const token = ref(""); // Livekit token
const $api = ofetch.create({ baseURL: '/api' })

export const useConference = () => {
  return {
    generateToken: async (roomName: string, name: string) => {
      const response = await $api('/token', {     // POST
        method: 'POST',
        body: {
          userName: name,
          roomName
        }
      })
      token.value = response.token
      return response.token;
    },
    token
  };
};

