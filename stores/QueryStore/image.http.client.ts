import {
  IGame,
  IGameById,
  IGameRequest,
  IGameScreenshots,
  IGenreById,
  IGenreRequest,
} from "./../../interfaces/requests";
import { AxiosResponse } from "axios";
import $api from "./api";
import { addDays } from "date-fns";

export default class HttpImageClient {
  async getGames() {
    const data = await $api.get<IGameRequest>("/games");
    return data;
  }

  async getGamesByGenre(id: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { genres: id },
    });
    return data;
  }

  async getGamesLast30(stringDate: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { dates: stringDate },
    });
    return data;
  }

  async getGamesLastWeek(stringDate: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { dates: stringDate },
    });
    return data;
  }

  async getGamesNextWeek(stringDate: string) {
    const data = await $api.get<IGameRequest>("/games", {
      params: { dates: stringDate },
    });
    return data;
  }

  async getGameById(id: string) {
    const data = await $api.get<IGameById>(`/games/${id}`);
    return data;
  }

  async getGameScreenshotsByiD(id: string) {
    const data = await $api.get<IGameScreenshots>(`/games/${id}/screenshots`);
    return data;
  }

  async getGenres() {
    const data = await $api.get<IGenreRequest>(`/genres`);
    return data;
  }

  async getGenreById(id: string) {
    const data = await $api.get<IGenreById>(`/genres/${id}`);
    return data;
  }
}
