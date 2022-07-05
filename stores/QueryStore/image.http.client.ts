import {
  IGame,
  IGameById,
  IGameRequest,
  IGameScreenshots,
} from "./../../interfaces/requests";
import { AxiosResponse } from "axios";
import $api from "./api";
import { addDays } from "date-fns";

export default class HttpImageClient {
  async getGames() {
    const data = await $api.get<IGameRequest>("/games");
    return data;
  }

  async getGamesLast30(stringDate: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { dates: stringDate },
    });
    return data;
  }

  async getGamesThisWeek() {}

  async getGamesNextWeek() {}

  async getGameById({ id }: { id: string }) {
    const data = await $api.get<IGameById>(`/games/${id}`);
    return data;
  }

  async getGameScreenshotsByiD({ id }: { id: string }) {
    const data = await $api.get<IGameScreenshots>(`/games/${id}/screenshots`);
    return data;
  }
}
