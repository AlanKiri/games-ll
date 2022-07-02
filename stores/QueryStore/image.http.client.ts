import { IGameRequest } from "./../../interfaces/requests";
import { AxiosResponse } from "axios";
import $api from "./api";

export default class HttpImageClient {
  async getGames() {
    const data = await $api.get<IGameRequest>("/games");
    return data;
  }
}
