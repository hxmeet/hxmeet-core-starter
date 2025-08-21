import { defineEventHandler } from 'h3'
import {AccessToken} from "livekit-server-sdk";

interface CreateTokenPayload {
  userName: string,
  roomName: string,
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateTokenPayload>(event)
  const { livekitApiKey, livekitSecret } = useRuntimeConfig(event)

  const at = new AccessToken(livekitApiKey, livekitSecret, {
    identity: body.userName,
    ttl: '10m', // token to expire
    name: body.userName,
  });
  at.addGrant({ roomJoin: true, room: body.roomName, roomCreate: false, canUpdateOwnMetadata: true});
  const token = await at.toJwt();


  return { msg: 'Hello from Nitro! - ' + token }
})
