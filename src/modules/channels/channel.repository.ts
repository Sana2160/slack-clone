import api from "../../lib/api";
import { Channel } from "./channel.entity";

export const channelRepository = {
  async find(workspaceId: string): Promise<Channel[]> {
    const result = await api.post(`/channels/${workspaceId}`);
    return result.data.map((channel: Channel) => new Channel(channel));
  },
  async create(workspaceId: string, name: string): Promise<Channel> {
    const resutl = await api.post("/channels", { workspaceId, name });
    return new Channel(resutl.data);
  },
  async delete(channelId: string): Promise<boolean> {
    await api.delete(`/channels/${channelId}`);
    return true;
  },
};
